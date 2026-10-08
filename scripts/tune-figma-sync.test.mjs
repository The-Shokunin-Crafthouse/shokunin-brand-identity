/**
 * tune-figma-sync must read the library, not infer it from the git diff.
 *
 * The bug (2026-10-07, SegmentedControl apply): role tokens created at 0 in
 * one commit and changed in the next were never in the Figma library, but
 * the generator only diffs the token files, so it emitted no create op for
 * the unchanged ones and reported "None: every change updates a token the
 * library already binds". Duration and spring tokens were also dropped
 * without a word.
 *
 *   node --test scripts/tune-figma-sync.test.mjs
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const run = (...args) => {
  const out = mkdtempSync(join(tmpdir(), 'figma-sync-'));
  execFileSync('node', ['scripts/tune-figma-sync.mjs', ...args, '--out', out], { cwd: root, stdio: 'pipe' });
  return { code: readFileSync(join(out, 'figma-sync.js'), 'utf8'), md: readFileSync(join(out, 'figma-sync.md'), 'utf8') };
};
const opsOf = (code) => JSON.parse(code.match(/^const OPS = (.*);$/m)[1]);

/* A fake library: the Plugin API surface the generated code touches. */
function fakeFigma({ variables = [], effectStyles = [], textStyles = [] } = {}) {
  let n = 0;
  const cols = [
    { name: 'Primitives', id: 'c1', modes: [{ name: 'Value', modeId: 'm0' }] },
    { name: 'Semantic', id: 'c2', modes: [{ name: 'Light', modeId: 'm1' }, { name: 'Dark', modeId: 'm2' }] },
  ];
  // A name 'Primitives:x' lives in the Primitives collection; a bare name in Semantic.
  const mkVar = (name, collectionId = 'c2') => ({ name, variableCollectionId: collectionId, id: `v${n += 1}`, scopes: ['ALL_SCOPES'], valuesByMode: {}, setValueForMode(m, x) { this.valuesByMode[m] = x; }, setVariableCodeSyntax() {} });
  const vars = variables.map((x) => (x.startsWith('Primitives:') ? mkVar(x.slice(11), 'c1') : mkVar(x)));
  const effects = effectStyles.map((name) => ({ name, effects: [] }));
  const texts = textStyles.map((name) => ({ name, fontName: {}, setBoundVariable() {} }));
  return {
    vars,
    effects,
    variables: {
      getLocalVariableCollectionsAsync: async () => cols,
      getLocalVariablesAsync: async () => vars,
      createVariable: (name, c) => { const v = mkVar(name, c.id); vars.push(v); return v; },
      createVariableAlias: (v) => ({ type: 'VARIABLE_ALIAS', id: v.id }),
    },
    getLocalTextStylesAsync: async () => texts,
    getLocalEffectStylesAsync: async () => effects,
    createEffectStyle: () => { const s = { name: '', effects: [] }; effects.push(s); return s; },
    loadFontAsync: async () => {},
  };
}
const execute = (code, figma) => new Function('figma', `return (async () => {${code}})();`)(figma);

test('the call reports tokens the library lacks, even ones the diff never touched', async () => {
  const { code } = run('--since', 'HEAD');
  const figma = fakeFigma({ variables: ['Primitives:color/warmGray/200', 'Primitives:color/dark/well', 'color/signal/live'] });
  const result = await execute(code, figma);
  assert.ok(Array.isArray(result.absent), 'result.absent is reported');
  assert.ok(result.absent.includes('color/segmentedControl/track'), 'an unchanged token missing from the library is reported');
  assert.ok(!result.absent.includes('Primitives:color/warmGray/200'), 'a variable the library has is not reported');
  assert.ok(result.absent.includes('Primitives:color/signal/live'), 'a same-named variable in the other collection does not mask an absence');
});

test('the report takes "bind by hand" from the run, never from the diff', () => {
  const { md } = run('--since', 'HEAD');
  assert.doesNotMatch(md, /library already binds/, 'no claim about the library made from the diff');
  assert.match(md, /`created`/, 'tells the reader to bind what the call returns under `created`');
  assert.match(md, /`absent`/, 'tells the reader what to do with what the call returns under `absent`');
});

test('--tokens builds create ops for named tokens, and the run returns what it created', async () => {
  const { code } = run('--tokens', 'color.segmentedControl.track,motion.switch.travel.duration');
  const ops = opsOf(code);
  const track = ops.find((o) => o.name === 'color/segmentedControl/track');
  assert.ok(track, 'a create op for an unchanged token named on the command line');
  assert.deepEqual(track.scopes, ['FRAME_FILL', 'SHAPE_FILL'], 'a colour fill token gets fill scopes, never ALL_SCOPES');
  const dur = ops.find((o) => o.name === 'motion/switch/travel/duration');
  assert.ok(dur, 'a duration token becomes a variable (the library keeps motion durations as FLOAT)');
  assert.equal(dur.type, 'FLOAT');
  assert.equal(dur.values.Light.number, 600);
  const figma = fakeFigma({ variables: ['Primitives:color/warmGray/200', 'Primitives:color/dark/well'] });
  const result = await execute(code, figma);
  assert.ok(result.created.includes('color/segmentedControl/track'), 'result.created names what this run made');
  assert.deepEqual(figma.vars.find((v) => v.name === 'color/segmentedControl/track').scopes, ['FRAME_FILL', 'SHAPE_FILL']);
});

test('a token type with no Figma analogue is listed, not dropped', () => {
  const { md } = run('--tokens', 'motion.switch.travel.easing');
  assert.match(md, /motion\.switch\.travel\.easing/, 'the spring token is named in the report');
  assert.match(md, /no Figma analogue/i);
});

test('documented name differences resolve to the library names, not the token paths', () => {
  const { code } = run('--since', 'HEAD');
  const manifest = JSON.parse(code.match(/^const MANIFEST = (.*);$/m)[1]);
  // The ink tier is flat in Figma; onInverse and release-duration were renamed or kept Figma-side.
  for (const n of ['Primitives:color/status/successInkLight', 'Primitives:color/status/infoInkLight', 'color/text/onInverse', 'color/surface/inverse', 'motion/press/release-duration']) {
    assert.ok(manifest.variables.includes(n), `${n} is checked under its library name`);
  }
  assert.ok(!manifest.variables.includes('Primitives:color/status/success/ink/light'), 'not under the token path');
  // Figma splits body styles into regular/bold folders and keeps nav under body.
  for (const n of ['text/body/dense/regular', 'text/body/dense/bold', 'text/body/nav/header', 'text/label/button-lg']) {
    assert.ok(manifest.texts.includes(n), `${n} is checked under its library name`);
  }
});

test('--tokens accepts a library name from the map', () => {
  const { code } = run('--tokens', 'color/text/onInverse');
  const op = opsOf(code).find((o) => o.name === 'color/text/onInverse');
  assert.ok(op, 'the op is built under the library name');
});

test('an alias names the collection of its target, since names repeat across collections', async () => {
  const { code } = run('--tokens', 'color.signal.live');
  const op = opsOf(code).find((o) => o.name === 'color/signal/live' && o.collection === 'Semantic');
  assert.equal(op.values.Light.collection, 'Primitives', 'the alias target is the primitive');
  // Both collections hold color/signal/live; the semantic one must alias the primitive, not itself.
  const figma = fakeFigma({ variables: ['color/signal/live', 'Primitives:color/signal/live'] });
  await execute(code, figma);
  const sem = figma.vars.find((v) => v.name === 'color/signal/live' && v.variableCollectionId === 'c2');
  const prim = figma.vars.find((v) => v.name === 'color/signal/live' && v.variableCollectionId === 'c1');
  assert.equal(sem.valuesByMode.m1.id, prim.id);
});

test('a shadow that aliases another shadow syncs its target\'s layers per mode', () => {
  const { code } = run('--tokens', 'shadow.stepper.keyHover,shadow.control.keyHover');
  const ops = opsOf(code);
  const byName = (n) => ops.find((o) => o.name === n)?.effects;
  assert.ok(byName('shadow/stepper/keyHover')?.length, 'the aliasing shadow becomes an effect style with layers');
  assert.deepEqual(byName('shadow/stepper/keyHover'), byName('shadow/control/keyHover'), 'light layers equal the target');
  assert.deepEqual(byName('shadow/stepper/dark/keyHover'), byName('shadow/control/dark/keyHover'), 'dark layers equal the target');
});

/*
 * A channel triplet ("0 0 0", composed as rgb(var(--sc-p-color-black-rgb) / A))
 * is not a colour a Figma variable can hold. The generator threw on the first
 * new one (color.blackRgb, 2026-10-08); it is code-only, and the semantic
 * colours composed from it sync as resolved colours.
 */
test('a channel-triplet primitive is code-only, never parsed as a colour', () => {
  const { code, md } = run('--tokens', 'Primitives:color/blackRgb,color.card.glass.clear.dark');
  assert.match(md, /color\.blackRgb/, 'the triplet is named in the report');
  const ops = opsOf(code);
  assert.ok(!ops.some((o) => o.collection === 'Primitives' && /blackRgb/.test(o.name)), 'no Primitives op for the triplet');
  const tint = ops.find((o) => o.name === 'color/card/glass/clear/dark');
  assert.equal(tint.values.Dark.color.a, 0.2);
  const manifest = JSON.parse(code.match(/^const MANIFEST = (.*);$/m)[1]);
  assert.ok(!manifest.variables.includes('Primitives:color/blackRgb'), 'the triplet is not in the library check');
});

/*
 * Glass effect styles (2026-10-08, Levi: "teach the sync to write them").
 * size.<component>.glass.<level>.{frost,refraction,depth,splay,light} become
 * one Figma Glass effect style, glass/<component>/<level>, in Figma's units
 * (refraction, splay and light as 0 to 1; depth and frost as is). The light
 * angle is the system light (-45deg, Gate 1 pick 1); dispersion is 0 (not
 * built in code). Splay is written too: Levi set 57 by hand before the sync
 * knew the field.
 */
const glassOp = (ops, name) => ops.find((o) => o.kind === 'effect' && o.name === name);

test('a glass style name builds one Figma Glass effect from its level tokens', () => {
  const { code } = run('--tokens', 'glass/card/frosted');
  const op = glassOp(opsOf(code), 'glass/card/frosted');
  assert.ok(op, 'an effect op for glass/card/frosted');
  assert.deepEqual(op.effects, [{ type: 'GLASS', visible: true, lightIntensity: 0.3, lightAngle: -45, refraction: 0.65, depth: 68, dispersion: 0, radius: 9, splay: 0.57 }]);
});

test('a glass level token pulls its glass style in, and an aliased frost resolves to pixels', () => {
  const { code } = run('--tokens', 'size.card.glass.clear.frost');
  const op = glassOp(opsOf(code), 'glass/card/clear');
  assert.ok(op, 'changing a level token rewrites its style');
  assert.equal(op.effects[0].radius, 4, '{space.4} resolves to 4');
});

test('every glass style is in the library check', () => {
  const { code } = run('--tokens', 'glass/card/thick');
  const manifest = JSON.parse(code.match(/^const MANIFEST = (.*);$/m)[1]);
  for (const lv of ['clear', 'frosted', 'thick']) assert.ok(manifest.effects.includes(`glass/card/${lv}`), lv);
});

test('the run writes the glass effect, splay included', async () => {
  const { code } = run('--tokens', 'glass/card/thick');
  const figma = fakeFigma();
  const r = await execute(code, figma);
  assert.ok(r.created.includes('glass/card/thick'));
  const s = figma.effects.find((e) => e.name === 'glass/card/thick');
  assert.equal(s.effects[0].type, 'GLASS');
  assert.equal(s.effects[0].splay, 0.57);
});

test('the glass light equals the rim highlight alpha in both modes', () => {
  const sem = JSON.parse(readFileSync(join(root, 'tokens/semantic.json'), 'utf8'));
  for (const [lv, g] of Object.entries(sem.size.card.glass)) {
    for (const mode of ['light', 'dark']) {
      const rim = sem.shadow.card.glass[lv].$extensions.modes[mode];
      const alpha = Number(rim.match(/^inset 1px 1px 0 0 rgb\([^/]+\/\s*([\d.]+)\)/)[1]);
      assert.equal(alpha * 100, g.light.$value, `${lv} ${mode}: rim ${alpha} vs light ${g.light.$value}`);
    }
  }
});
