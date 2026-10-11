/**
 * A spring keeps a bezier fallback (physical-controls audit line 12).
 *
 * A spring token compiles to a CSS `linear()` easing. Safari before 17.2
 * cannot parse `linear()`, so a `transition` that reads the var is invalid at
 * computed-value time and the control snaps. The generated tokens.css sets
 * every spring var to a bezier first and moves the `linear()` value into an
 * `@supports` block, so a browser that parses it gets the spring.
 *
 *   node --test scripts/tokens-to-css.test.mjs
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
execFileSync('node', ['scripts/tokens-to-css.mjs'], { cwd: root, encoding: 'utf8' });
const css = readFileSync(resolve(root, 'src/styles/tokens.css'), 'utf8');

const SUPPORTS = '@supports (transition-timing-function: linear(0, 1)) {';
const at = css.indexOf(SUPPORTS);
const outside = at === -1 ? css : css.slice(0, at);
const inside = at === -1 ? '' : css.slice(at);
const decls = (s) => [...s.matchAll(/(--sc-[a-z0-9-]+):\s*([^;]+);/g)].map(([, n, v]) => ({ n, v: v.trim() }));

test('no declaration outside @supports carries a linear() easing', () => {
  const bad = decls(outside).filter((d) => d.v.startsWith('linear('));
  assert.deepEqual(bad.map((d) => d.n), []);
});

test('the @supports block holds the spring easings as linear()', () => {
  assert.notEqual(at, -1, 'tokens.css has no linear() @supports block');
  const springs = decls(inside).filter((d) => d.v.startsWith('linear('));
  assert.ok(springs.length >= 5, `expected the five spring easings, found ${springs.length}`);
  for (const name of ['--sc-motion-switch-travel-easing', '--sc-motion-slider-travel-easing']) {
    assert.ok(springs.some((d) => d.n === name), `${name} missing from the @supports block`);
  }
});

test('every spring var defaults to the bezier fallback outside @supports', () => {
  const springNames = new Set(decls(inside).filter((d) => d.v.startsWith('linear(')).map((d) => d.n));
  assert.ok(springNames.size > 0);
  for (const d of decls(outside).filter((x) => springNames.has(x.n))) {
    assert.equal(d.v, 'var(--sc-p-motion-easing-out)', `${d.n} fallback`);
  }
});
