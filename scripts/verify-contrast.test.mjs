/**
 * verify-contrast resolves a semantic alias in the mode it is asked for. A
 * semantic token may alias a primitive of the same dotted path
 * (color.signal.progress -> {color.signal.progress}); the resolver must read
 * that as the primitive, not recurse into itself. The StatusPill fill pairs
 * (2026-10-08) were the first FILL_PAIRS to reach one and overflowed the stack.
 *
 *   node --test scripts/verify-contrast.test.mjs
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');

test('the shipped token files pass, StatusPill fill pairs included', () => {
  const r = spawnSync('node', ['scripts/verify-contrast.mjs'], { cwd: root, encoding: 'utf8' });
  assert.equal(r.status, 0, r.stdout + r.stderr);
  assert.match(r.stdout, /✓ WCAG AA on every control label × its own fill × mode/);
  assert.match(r.stdout, /All contrast claims verified\./);
});

// Every status hue carries a text-only -ink tier, and check 1 sweeps every one
// of them. status.error had no ink until 2026-10-17 (studio-pm ADR-136): its
// fill read 3.64:1 on dark surface.deepSunk, and nothing in TEXT_TIERS said so.
// The pair count is derived from the token tree, so an -ink tier added to
// semantic.json but left out of TEXT_TIERS fails here.
test('every status hue has an -ink tier, and check 1 sweeps all of them', async () => {
  const { readFileSync } = await import('node:fs');
  const semantic = JSON.parse(readFileSync(resolve(root, 'tokens/semantic.json'), 'utf8'));
  const status = Object.keys(semantic.color.status);
  const hues = status.filter((k) => !k.endsWith('-ink'));
  const inks = status.filter((k) => k.endsWith('-ink'));
  for (const hue of hues) assert.ok(inks.includes(`${hue}-ink`), `color.status.${hue} has no ${hue}-ink text tier`);

  const textTiers = 4 + inks.length; // text.primary/secondary/tertiary, brand.accentInk, every status ink
  const pairs = textTiers * Object.keys(semantic.color.surface).length * semantic.$metadata.modes.length;
  const r = spawnSync('node', ['scripts/verify-contrast.mjs'], { cwd: root, encoding: 'utf8' });
  assert.match(r.stdout, new RegExp(`WCAG AA on every text-tier × surface × mode pair \\(${pairs} pairs\\)`));
});

// A failure never shares the waiting hue (studio-pm ADR-060): error-ink and
// warning-ink must resolve to different colours in every mode.
test('status.error-ink and status.warning-ink differ in every mode', async () => {
  const { readFileSync } = await import('node:fs');
  const semantic = JSON.parse(readFileSync(resolve(root, 'tokens/semantic.json'), 'utf8'));
  const modes = (k) => semantic.color.status[k]?.$extensions?.modes;
  assert.ok(modes('error-ink'), 'color.status.error-ink has no $extensions.modes');
  for (const mode of semantic.$metadata.modes) assert.notEqual(modes('error-ink')[mode], modes('warning-ink')[mode], mode);
});

// The checker grades the colour the page renders. tokens-to-css.mjs resolves an
// alias to the primitive when a primitive leaf holds that path, so
// statusPill.live.fill -> {color.signal.live} renders the primitive #C8281C in
// both modes. The checker read the semantic color.signal.live instead, which is
// #DA5C4D in dark, and passed a 3.19:1 dark live pill at 4.74:1 (2026-10-18).
// Every fill and glyph pair is resolved here through the generated tokens.css
// and must match the checker's own resolution.
test('every graded fill and glyph pair resolves to the hex tokens.css renders', async () => {
  const { readFileSync } = await import('node:fs');
  const { semanticHex, FILL_PAIRS, GRAPHIC_PAIRS } = await import('./verify-contrast.mjs');
  const css = readFileSync(resolve(root, 'src/styles/tokens.css'), 'utf8');
  const block = (selector) => {
    const start = css.indexOf(`\n${selector} {\n`);
    const end = css.indexOf('\n}', start);
    const vars = new Map();
    for (const m of css.slice(start, end).matchAll(/^\s*(--sc-[\w-]+):\s*(.+);$/gm)) vars.set(m[1], m[2].trim());
    return vars;
  };
  const rootVars = block(':root');
  const modeVars = { light: new Map(), dark: block('[data-theme="dark"]') };
  const cssHex = (name, mode) => {
    const v = modeVars[mode].get(name) ?? rootVars.get(name);
    const ref = v?.match(/^var\((--sc-[\w-]+)\)$/)?.[1];
    return ref ? cssHex(ref, mode) : v;
  };
  const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  const varOf = (path) => `--sc-${path.split('.').map(kebab).join('-')}`;
  const drift = [];
  for (const mode of ['light', 'dark']) {
    for (const path of new Set([...FILL_PAIRS, ...GRAPHIC_PAIRS].flat())) {
      const rendered = cssHex(varOf(path), mode)?.toUpperCase();
      const graded = semanticHex(path, mode).toUpperCase();
      if (rendered !== graded) drift.push(`${path} (${mode}): checker grades ${graded}, tokens.css renders ${rendered}`);
    }
  }
  assert.deepEqual(drift, []);
});
