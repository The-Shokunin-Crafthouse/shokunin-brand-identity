/**
 * One light for the whole system (physical-controls directive 2, Gate 1
 * pick 1: top left). Until 2026-10-07 the rule lived only as a sentence in
 * decisions.md ("shade toward 135°, highlight toward 315°, faces at 135deg")
 * and nothing graded it, while four light directions shipped in tokens.
 *
 *   node --test scripts/verify-light.test.mjs
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { checkLight, EXEMPT } from './verify-light.mjs';

const root = resolve(import.meta.dirname, '..');
const INK = 'rgb(var(--sc-p-color-ink-rgb) / 0.40)';
const WHITE = 'rgb(var(--sc-p-color-white-rgb) / 1)';
const shadow = (light, dark = light) => ({ $type: 'shadow', $value: light, $extensions: { modes: { light, dark } } });
const tree = (tokens) => ({ shadow: { test: tokens } });

test('the shipped token files and component CSS pass', () => {
  const out = execFileSync('node', ['scripts/verify-light.mjs'], { cwd: root, encoding: 'utf8' });
  assert.match(out, /one light/i);
});

test('a key lit from the top left passes', () => {
  const f = checkLight({ semantic: tree({ key: shadow(`2px 2px 6px 0 ${INK}, -1px -1px 1px 1px ${WHITE}`) }), css: [], exempt: [] });
  assert.deepEqual(f, []);
});

test('a shade cast toward the top left fails', () => {
  const f = checkLight({ semantic: tree({ key: shadow(`-2px -2px 6px 0 ${INK}`) }), css: [], exempt: [] });
  assert.equal(f.length, 2); // light and dark mode
  assert.match(f[0], /shadow\.test\.key.*shade.*135/);
});

test('a highlight cast toward the bottom right fails', () => {
  const f = checkLight({ semantic: tree({ key: shadow(`2px 2px 1px 0 ${WHITE}`) }), css: [], exempt: [] });
  assert.match(f[0], /highlight.*315/);
});

test('an offset off the 135/315 diagonal fails, inset included', () => {
  const f = checkLight({ semantic: tree({ well: shadow(`inset 0 1px 3px ${INK}`) }), css: [], exempt: [] });
  assert.match(f[0], /diagonal/);
});

test('a zero-alpha layer is inert and not graded', () => {
  const f = checkLight({ semantic: tree({ inert: shadow('0 4px 3px 0 rgb(var(--sc-p-color-ink-rgb) / 0)') }), css: [], exempt: [] });
  assert.deepEqual(f, []);
});

test('a face gradient that is not 135deg fails; the Switch is exempt', () => {
  const css = [
    { file: 'src/components/Card/Card.module.css', text: '.plate { background-image: linear-gradient(180deg, transparent, red); }' },
    { file: 'src/components/Switch/Switch.module.css', text: '.thumb { background-image: linear-gradient(\n  var(--a),\n  var(--b)\n); }' },
  ];
  const f = checkLight({ semantic: {}, css, exempt: [] });
  assert.equal(f.length, 1);
  assert.match(f[0], /Card\.module\.css.*135deg/);
});

test('every exemption names a token that still exists', () => {
  const f = checkLight({ semantic: {}, css: [], exempt: [{ path: 'shadow.gone', why: 'test' }] });
  assert.match(f[0], /shadow\.gone.*no longer exists/);
  for (const e of EXEMPT) assert.ok(e.why.length > 0, `${e.path} carries its reason`);
});

test('a component that transitions box-shadow fails', () => {
  const css = [{ file: 'src/components/Card/Card.module.css', text: '.card {\n  transition:\n    background-color 1s ease,\n    box-shadow 1s ease;\n}' }];
  const f = checkLight({ semantic: {}, css, exempt: [] });
  assert.equal(f.length, 1);
  assert.match(f[0], /Card\.module\.css.*box-shadow/);
});
