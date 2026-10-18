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
