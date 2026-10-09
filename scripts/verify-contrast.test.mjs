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
