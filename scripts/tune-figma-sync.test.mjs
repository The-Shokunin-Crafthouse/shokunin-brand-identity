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
