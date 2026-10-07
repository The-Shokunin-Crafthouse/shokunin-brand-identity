#!/usr/bin/env node
/**
 * verify-contrast.mjs — contrast guard for the token source of truth.
 *
 * Why this exists
 * ---------------
 * On 2026-07-28 the P2-8 rebuild moved the warmGray 200–400 span. The text
 * tiers rendered on those grounds were never re-derived, so text.secondary
 * on surface.sunk silently fell from a documented 4.6:1 to a measured
 * 4.42:1 — below WCAG AA — and the stale figure kept asserting it passed.
 * A prose `$description` is not a guarantee; it is a claim that rots the
 * moment a ramp moves (learnings #131, #162).
 *
 * Three checks, run in order:
 *
 *   1. AA  — every text-tier semantic token, on every semantic surface, in
 *            every mode, clears WCAG AA 4.5:1 unless that exact pair is
 *            declared in $extensions.usageRestrictions.forbiddenSurfaces.
 *            This is derived from the token tree, so a future ramp move
 *            fails here with no prose to update. THIS is the guard.
 *
 *   2. LIVE — every contrast figure quoted in a $description resolves to a
 *            registered pair and matches the measured value.
 *
 *   3. ORPHAN — every `N.NN:1` figure appearing in any $description is
 *            accounted for: either registered in CLAIMS (check 2) or listed
 *            in HISTORICAL as a figure about a retired value. A new prose
 *            figure cannot be added without registering it.
 *
 * Exits non-zero on any failure. Wired into pr-check.yml.
 */

import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const primitives = JSON.parse(readFileSync(resolve(repoRoot, 'tokens/primitives.json'), 'utf8'));
const semantic = JSON.parse(readFileSync(resolve(repoRoot, 'tokens/semantic.json'), 'utf8'));

const AA = 4.5;
const TOL = 0.015; // accepts either floor- or round-to-2dp reporting

// ---------------------------------------------------------------- colour math
const channel = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };

function luminance(hex) {
  const h = hex.replace('#', '');
  if (!/^[0-9a-fA-F]{6}$/.test(h)) throw new Error(`not a 6-digit hex: ${hex}`);
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const fmt = (n) => n.toFixed(2);

// ---------------------------------------------------------------- resolution
function walk(tree, path) {
  let node = tree;
  for (const key of path.split('.')) node = node?.[key];
  return node;
}

/** Resolve a primitive dotted path to its hex. */
function primitiveHex(path) {
  const node = walk(primitives, path);
  if (typeof node?.$value !== 'string') throw new Error(`no primitive at ${path}`);
  return node.$value;
}

/** Resolve a `{a.b.c}` DTCG reference to its hex. */
function refHex(ref) {
  const m = /^\{(.+)\}$/.exec(String(ref).trim());
  if (!m) throw new Error(`not a DTCG reference: ${ref}`);
  return primitiveHex(m[1]);
}

/** Resolve a semantic dotted path in a given mode to its hex. */
function semanticHex(path, mode) {
  const node = walk(semantic, path);
  if (!node) throw new Error(`no semantic token at ${path}`);
  return refHex(node.$extensions?.modes?.[mode] ?? node.$value);
}

/** Resolve either a semantic path (mode-aware) or a bare primitive path. */
function hexOf(path, mode) {
  return path.startsWith('color.') && walk(semantic, path) ? semanticHex(path, mode) : primitiveHex(path);
}

// ---------------------------------------------------------------- check 1: AA
// Text tiers that must clear AA. text.disabled is a documented spec exception
// (ghosted controls are not readable content) and text.onAccent renders only on
// accent fills, never on a surface — both are excluded by design.
const TEXT_TIERS = [
  'color.text.primary', 'color.text.secondary', 'color.text.tertiary', 'color.brand.accentInk',
  // The status *-ink tiers are text-only by their own $description (learning #56) and were
  // outside this sweep until 2026-09-06 (WQ-041) — nothing checked them, and every one of
  // them was failing AA on dark surface.raised, the default card ground.
  'color.status.success-ink', 'color.status.warning-ink', 'color.status.info-ink',
];
const SURFACES = Object.keys(semantic.color.surface);
const MODES = semantic.$metadata.modes;

function forbidden(tokenPath, surfaceKey, mode) {
  const r = walk(semantic, tokenPath)?.$extensions?.usageRestrictions;
  if (!r) return false;
  const list = r.forbiddenSurfaces?.[mode];
  if (!Array.isArray(list)) {
    throw new Error(
      `${tokenPath}: $extensions.usageRestrictions.forbiddenSurfaces must be keyed by mode ` +
      `({ light: [...], dark: [...] }). A flat array cannot express a restriction that ` +
      `differs between modes, and silently over- or under-restricts one of them.`
    );
  }
  return list.includes(`color.surface.${surfaceKey}`);
}

function checkAA() {
  const failures = [];
  const restricted = [];
  for (const mode of MODES) {
    for (const tier of TEXT_TIERS) {
      const fg = semanticHex(tier, mode);
      for (const surfaceKey of SURFACES) {
        const bg = semanticHex(`color.surface.${surfaceKey}`, mode);
        const ratio = contrast(fg, bg);
        const isForbidden = forbidden(tier, surfaceKey, mode);
        const pair = `${tier.replace('color.text.', 'text.')} on surface.${surfaceKey} (${mode})`;
        if (ratio < AA && !isForbidden) {
          failures.push(`${pair}: ${fmt(ratio)}:1 < AA ${AA}:1 — ${fg} on ${bg}. Either re-derive the tier or declare the pair in usageRestrictions.forbiddenSurfaces.${mode}.`);
        } else if (ratio >= AA && isForbidden) {
          restricted.push(`${pair}: ${fmt(ratio)}:1 clears AA but is still listed as forbidden — the restriction is over-broad and needlessly costs a legal combination.`);
        }
      }
    }
  }
  return { failures, restricted };
}

// ------------------------------------------------------- check 2: live claims
// Every contrast figure quoted in a live $description, with the pair it names.
// `fg`/`bg` are token paths (semantic paths resolve per `mode`).
const CLAIMS = [
  // --- text tiers -----------------------------------------------------------
  ['semantic', 'color.text.secondary', 5.43, 'color.text.secondary', 'color.surface.page', 'light'],
  ['semantic', 'color.text.secondary', 4.77, 'color.text.secondary', 'color.surface.sunk', 'light'],
  ['semantic', 'color.text.secondary', 6.28, 'color.text.secondary', 'color.surface.raised', 'light'],
  ['semantic', 'color.text.secondary', 6.68, 'color.text.secondary', 'color.surface.floating', 'light'],
  ['semantic', 'color.text.secondary', 3.01, 'color.text.secondary', 'color.surface.deepSunk', 'light'],
  ['semantic', 'color.text.secondary', 3.84, 'color.text.secondary', 'color.surface.hover', 'light'],
  ['semantic', 'color.text.tertiary', 4.62, 'color.text.tertiary', 'color.surface.page', 'light'],
  ['semantic', 'color.text.tertiary', 5.34, 'color.text.tertiary', 'color.surface.raised', 'light'],
  ['semantic', 'color.text.tertiary', 5.68, 'color.text.tertiary', 'color.surface.floating', 'light'],
  ['semantic', 'color.text.tertiary', 4.06, 'color.text.tertiary', 'color.surface.sunk', 'light'],
  ['semantic', 'color.text.tertiary', 2.57, 'color.text.tertiary', 'color.surface.deepSunk', 'light'],
  ['semantic', 'color.text.tertiary', 3.27, 'color.text.tertiary', 'color.surface.hover', 'light'],
  ['primitives', 'color.warmGray.500', 4.77, 'color.warmGray.500', 'color.warmGray.200', null],
  ['primitives', 'color.warmGray.500', 5.43, 'color.warmGray.500', 'color.warmGray.100', null],
  ['primitives', 'color.warmGray.450', 4.62, 'color.warmGray.450', 'color.warmGray.100', null],
  ['primitives', 'color.warmGray.450', 5.34, 'color.warmGray.450', 'color.warmGray.50', null],
  ['primitives', 'color.warmGray.450', 5.68, 'color.warmGray.450', 'color.warmGray.25', null],

  // --- borders --------------------------------------------------------------
  ['primitives', 'color.warmGray.250', 1.41, 'color.warmGray.250', 'color.warmGray.100', null],
  ['primitives', 'color.warmGray.350', 2.34, 'color.warmGray.350', 'color.warmGray.100', null],
  ['semantic', 'color.border.default', 2.34, 'color.warmGray.350', 'color.warmGray.100', null],
  ['semantic', 'color.border.subtle', 1.41, 'color.warmGray.250', 'color.warmGray.100', null],

  // --- focus ring -----------------------------------------------------------
  ['primitives', 'color.focusRing.light', 12.25, 'color.focusRing.light', 'color.warmGray.100', null],
  ['primitives', 'color.focusRing.light', 14.17, 'color.focusRing.light', 'color.warmGray.50', null],
  ['primitives', 'color.focusRing.light', 15.08, 'color.focusRing.light', 'color.warmGray.25', null],
  ['primitives', 'color.focusRing.light', 10.78, 'color.focusRing.light', 'color.warmGray.200', null],
  ['primitives', 'color.focusRing.light', 6.80, 'color.focusRing.light', 'color.warmGray.300', null],
  ['primitives', 'color.focusRing.light', 8.68, 'color.focusRing.light', 'color.warmGray.250', null],
  ['semantic', 'color.border.focus', 12.25, 'color.focusRing.light', 'color.warmGray.100', null],

  // --- brand / interactive --------------------------------------------------
  ['primitives', 'color.teal.600', 5.20, 'color.utility.white', 'color.teal.600', null],
  ['primitives', 'color.teal.600', 3.97, 'color.utility.white', 'color.teal.500', null],
  ['primitives', 'color.teal.700', 5.35, 'color.teal.700', 'color.warmGray.100', null],
  ['semantic', 'color.brand.accentDeep', 5.35, 'color.teal.700', 'color.warmGray.100', null],
  ['semantic', 'color.brand.accentInk', 5.35, 'color.brand.accentInk', 'color.surface.page', 'light'],
  ['semantic', 'color.brand.accentInk', 6.19, 'color.brand.accentInk', 'color.surface.raised', 'light'],
  ['semantic', 'color.brand.accentInk', 6.59, 'color.brand.accentInk', 'color.surface.floating', 'light'],
  ['semantic', 'color.brand.accentInk', 4.71, 'color.brand.accentInk', 'color.surface.sunk', 'light'],
  ['semantic', 'color.brand.accentFill', 5.20, 'color.utility.white', 'color.teal.600', null],
  ['semantic', 'color.brand.accentFill', 3.97, 'color.utility.white', 'color.teal.500', null],
  ['primitives', 'color.interactive.hoverInk.light', 4.61, 'color.interactive.hoverInk.light', 'color.warmGray.100', null],
  ['primitives', 'color.interactive.hoverInk.light', 2.99, 'color.teal.500', 'color.warmGray.100', null],
  ['semantic', 'color.interactive.hover', 2.99, 'color.teal.500', 'color.warmGray.100', null],
  ['semantic', 'color.interactive.hover-ink', 4.61, 'color.interactive.hoverInk.light', 'color.warmGray.100', null],
  ['semantic', 'color.interactive.hover-ink', 2.99, 'color.teal.500', 'color.warmGray.100', null],

  // --- status ---------------------------------------------------------------
  ['primitives', 'color.status.success.light', 3.42, 'color.status.success.light', 'color.warmGray.100', null],
  ['primitives', 'color.status.success.ink.light', 4.64, 'color.status.success.ink.light', 'color.warmGray.100', null],
  ['primitives', 'color.status.warning.ink.light', 4.63, 'color.status.warning.ink.light', 'color.warmGray.100', null],
  ['primitives', 'color.status.warning.ink.light', 3.90, 'color.status.warning.light', 'color.warmGray.100', null],
  ['primitives', 'color.status.info.light', 4.43, 'color.status.info.light', 'color.warmGray.100', null],
  ['primitives', 'color.status.info.ink.dark', 4.43, 'color.status.info.light', 'color.warmGray.100', null],
  ['semantic', 'color.status.success-ink', 4.64, 'color.status.success.ink.light', 'color.warmGray.100', null],
  ['semantic', 'color.status.success-ink', 3.42, 'color.status.success.light', 'color.warmGray.100', null],
  ['semantic', 'color.status.warning-ink', 4.63, 'color.status.warning.ink.light', 'color.warmGray.100', null],
  ['semantic', 'color.status.warning-ink', 3.90, 'color.status.warning.light', 'color.warmGray.100', null],
  ['semantic', 'color.status.info-ink', 4.43, 'color.status.info.light', 'color.warmGray.100', null],
  // --- oatmeal restore, 2026-10-07 (decisions.md): light inks re-derived on #E3DFD8
  ['primitives', 'color.status.info.ink.light', 4.61, 'color.status.info.ink.light', 'color.warmGray.100', null],
  ['primitives', 'color.status.info.ink.light', 5.34, 'color.status.info.ink.light', 'color.warmGray.50', null],
  ['primitives', 'color.status.info.ink.light', 5.68, 'color.status.info.ink.light', 'color.warmGray.25', null],
  ['primitives', 'color.warmGray.450', 4.62, 'color.warmGray.450', 'color.warmGray.100', null],
  ['primitives', 'color.warmGray.450', 5.34, 'color.warmGray.450', 'color.warmGray.50', null],
  ['primitives', 'color.warmGray.450', 5.68, 'color.warmGray.450', 'color.warmGray.25', null],
  ['semantic', 'color.status.info-ink', 4.61, 'color.status.info-ink', 'color.surface.page', 'light'],
  ['semantic', 'color.text.tertiary', 4.06, 'color.text.tertiary', 'color.surface.sunk', 'light'],

  // --- dark mode · slate ladder, 2026-09-24 (decisions.md) --------------------
  // Every dark figure below was re-measured against the slate ladder. The
  // neutral-ladder figures they replace are pinned in HISTORICAL.
  ['semantic', 'color.text.secondary', 6.04, 'color.text.secondary', 'color.surface.floating', 'dark'],
  ['semantic', 'color.text.secondary', 9.15, 'color.text.secondary', 'color.surface.sunk', 'dark'],
  ['semantic', 'color.text.tertiary', 6.05, 'color.text.tertiary', 'color.surface.page', 'dark'],
  ['semantic', 'color.text.tertiary', 7.22, 'color.text.tertiary', 'color.surface.sunk', 'dark'],
  ['semantic', 'color.text.tertiary', 6.67, 'color.text.tertiary', 'color.surface.rail', 'dark'],
  ['semantic', 'color.text.tertiary', 5.37, 'color.text.tertiary', 'color.surface.raised', 'dark'],
  ['semantic', 'color.text.tertiary', 4.76, 'color.text.tertiary', 'color.surface.deepSunk', 'dark'],
  ['primitives', 'color.dark.textPrimary', 10.57, 'color.dark.textPrimary', 'color.dark.surfacePage', null],
  ['primitives', 'color.dark.textPrimary', 12.62, 'color.dark.textPrimary', 'color.dark.well', null],
  ['primitives', 'color.dark.textPrimary', 11.66, 'color.dark.textPrimary', 'color.dark.floor', null],
  ['primitives', 'color.dark.textPrimary', 9.38, 'color.dark.textPrimary', 'color.dark.raised1', null],
  ['primitives', 'color.dark.textPrimary', 8.32, 'color.dark.textPrimary', 'color.dark.raised2', null],
  ['primitives', 'color.dark.textSecondary', 7.67, 'color.dark.textSecondary', 'color.dark.surfacePage', null],
  ['primitives', 'color.dark.textSecondary', 9.15, 'color.dark.textSecondary', 'color.dark.well', null],
  ['primitives', 'color.dark.textSecondary', 8.46, 'color.dark.textSecondary', 'color.dark.floor', null],
  ['primitives', 'color.dark.textSecondary', 6.81, 'color.dark.textSecondary', 'color.dark.raised1', null],
  ['primitives', 'color.dark.textSecondary', 6.04, 'color.dark.textSecondary', 'color.dark.raised2', null],
  ['primitives', 'color.dark.textTertiary', 6.05, 'color.dark.textTertiary', 'color.dark.surfacePage', null],
  ['primitives', 'color.dark.textTertiary', 7.22, 'color.dark.textTertiary', 'color.dark.well', null],
  ['primitives', 'color.dark.textTertiary', 6.67, 'color.dark.textTertiary', 'color.dark.floor', null],
  ['primitives', 'color.dark.textTertiary', 5.37, 'color.dark.textTertiary', 'color.dark.raised1', null],
  ['primitives', 'color.dark.textTertiary', 4.76, 'color.dark.textTertiary', 'color.dark.raised2', null],
  ['primitives', 'color.dark.textDisabled', 3.02, 'color.dark.textDisabled', 'color.dark.surfacePage', null],
  ['primitives', 'color.dark.textDisabled', 2.38, 'color.dark.textDisabled', 'color.dark.raised2', null],
  ['primitives', 'color.dark.border', 1.67, 'color.dark.border', 'color.dark.surfacePage', null],
  ['primitives', 'color.dark.borderSubtle', 1.27, 'color.dark.borderSubtle', 'color.dark.surfacePage', null],
  ['primitives', 'color.focusRing.dark', 10.84, 'color.focusRing.dark', 'color.dark.surfacePage', null],
  ['primitives', 'color.focusRing.dark', 12.94, 'color.focusRing.dark', 'color.dark.well', null],
  ['primitives', 'color.focusRing.dark', 11.96, 'color.focusRing.dark', 'color.dark.floor', null],
  ['primitives', 'color.focusRing.dark', 9.62, 'color.focusRing.dark', 'color.dark.raised1', null],
  ['primitives', 'color.focusRing.dark', 8.53, 'color.focusRing.dark', 'color.dark.raised2', null],
  ['semantic', 'color.border.focus', 10.84, 'color.border.focus', 'color.surface.page', 'dark'],
  ['primitives', 'color.teal.200', 7.61, 'color.teal.200', 'color.dark.surfacePage', null],
  ['primitives', 'color.teal.200', 5.99, 'color.teal.200', 'color.dark.raised2', null],
  ['primitives', 'color.teal.300', 5.51, 'color.teal.300', 'color.dark.surfacePage', null],
  ['primitives', 'color.teal.300', 4.34, 'color.teal.300', 'color.dark.raised2', null],
  ['primitives', 'color.teal.400', 3.94, 'color.teal.400', 'color.dark.surfacePage', null],
  ['primitives', 'color.teal.400', 3.10, 'color.teal.400', 'color.dark.raised2', null],
  ['semantic', 'color.brand.accentDeep', 1.62, 'color.brand.accentDeep', 'color.surface.raised', 'dark'],
  ['semantic', 'color.brand.accentInk', 7.61, 'color.brand.accentInk', 'color.surface.page', 'dark'],
  ['semantic', 'color.brand.accentInk', 9.08, 'color.brand.accentInk', 'color.surface.sunk', 'dark'],
  ['semantic', 'color.brand.accentInk', 6.76, 'color.brand.accentInk', 'color.surface.raised', 'dark'],
  ['semantic', 'color.brand.accentInk', 5.99, 'color.brand.accentInk', 'color.surface.deepSunk', 'dark'],
  ['semantic', 'color.brand.accentInk', 8.40, 'color.brand.accentInk', 'color.surface.rail', 'dark'],
  ['semantic', 'color.brand.accentInk', 3.10, 'color.teal.400', 'color.surface.deepSunk', 'dark'],
  ['semantic', 'color.interactive.hover', 5.51, 'color.interactive.hover', 'color.surface.page', 'dark'],
  ['semantic', 'color.interactive.hover', 4.34, 'color.interactive.hover', 'color.surface.floating', 'dark'],
  ['semantic', 'color.interactive.hover', 3.10, 'color.teal.400', 'color.surface.floating', 'dark'],
  ['semantic', 'color.interactive.hover-ink', 7.61, 'color.interactive.hover-ink', 'color.surface.page', 'dark'],
  ['semantic', 'color.interactive.hover-ink', 5.99, 'color.interactive.hover-ink', 'color.surface.floating', 'dark'],
  ['semantic', 'color.interactive.hover-ink', 3.10, 'color.teal.400', 'color.surface.floating', 'dark'],
  ['primitives', 'color.status.success.dark', 4.74, 'color.status.success.dark', 'color.dark.surfacePage', null],
  ['primitives', 'color.status.success.dark', 5.66, 'color.status.success.dark', 'color.dark.well', null],
  ['primitives', 'color.status.success.dark', 3.73, 'color.status.success.dark', 'color.dark.raised2', null],
  ['primitives', 'color.status.success.ink.dark', 5.89, 'color.status.success.ink.dark', 'color.dark.surfacePage', null],
  ['primitives', 'color.status.success.ink.dark', 7.03, 'color.status.success.ink.dark', 'color.dark.well', null],
  ['primitives', 'color.status.success.ink.dark', 6.50, 'color.status.success.ink.dark', 'color.dark.floor', null],
  ['primitives', 'color.status.success.ink.dark', 5.23, 'color.status.success.ink.dark', 'color.dark.raised1', null],
  ['primitives', 'color.status.success.ink.dark', 4.64, 'color.status.success.ink.dark', 'color.dark.raised2', null],
  ['primitives', 'color.status.warning.dark', 4.73, 'color.status.warning.dark', 'color.dark.surfacePage', null],
  ['primitives', 'color.status.warning.dark', 3.72, 'color.status.warning.dark', 'color.dark.raised2', null],
  ['primitives', 'color.status.warning.ink.dark', 5.94, 'color.status.warning.ink.dark', 'color.dark.surfacePage', null],
  ['primitives', 'color.status.warning.ink.dark', 7.09, 'color.status.warning.ink.dark', 'color.dark.well', null],
  ['primitives', 'color.status.warning.ink.dark', 6.56, 'color.status.warning.ink.dark', 'color.dark.floor', null],
  ['primitives', 'color.status.warning.ink.dark', 5.27, 'color.status.warning.ink.dark', 'color.dark.raised1', null],
  ['primitives', 'color.status.warning.ink.dark', 4.68, 'color.status.warning.ink.dark', 'color.dark.raised2', null],
  ['primitives', 'color.status.info.dark', 4.76, 'color.status.info.dark', 'color.dark.surfacePage', null],
  ['primitives', 'color.status.info.dark', 3.75, 'color.status.info.dark', 'color.dark.raised2', null],
  ['primitives', 'color.status.info.ink.dark', 5.97, 'color.status.info.ink.dark', 'color.dark.surfacePage', null],
  ['primitives', 'color.status.info.ink.dark', 7.12, 'color.status.info.ink.dark', 'color.dark.well', null],
  ['primitives', 'color.status.info.ink.dark', 6.59, 'color.status.info.ink.dark', 'color.dark.floor', null],
  ['primitives', 'color.status.info.ink.dark', 5.30, 'color.status.info.ink.dark', 'color.dark.raised1', null],
  ['primitives', 'color.status.info.ink.dark', 4.70, 'color.status.info.ink.dark', 'color.dark.raised2', null],
  ['primitives', 'color.status.error.dark', 4.63, 'color.status.error.dark', 'color.dark.surfacePage', null],
  ['primitives', 'color.status.error.dark', 5.53, 'color.status.error.dark', 'color.dark.well', null],
  ['primitives', 'color.status.error.dark', 4.11, 'color.status.error.dark', 'color.dark.raised1', null],
  ['primitives', 'color.status.error.dark', 3.64, 'color.status.error.dark', 'color.dark.raised2', null],
  ['semantic', 'color.status.success', 4.74, 'color.status.success', 'color.surface.page', 'dark'],
  ['semantic', 'color.status.warning', 4.73, 'color.status.warning', 'color.surface.page', 'dark'],
  ['semantic', 'color.status.info', 4.76, 'color.status.info', 'color.surface.page', 'dark'],
  ['semantic', 'color.status.error', 4.63, 'color.status.error', 'color.surface.page', 'dark'],
  ['semantic', 'color.status.success-ink', 5.89, 'color.status.success-ink', 'color.surface.page', 'dark'],
  ['semantic', 'color.status.success-ink', 3.73, 'color.status.success', 'color.surface.floating', 'dark'],
  ['semantic', 'color.status.warning-ink', 5.94, 'color.status.warning-ink', 'color.surface.page', 'dark'],
  ['semantic', 'color.status.warning-ink', 3.72, 'color.status.warning', 'color.surface.floating', 'dark'],
  ['semantic', 'color.status.info-ink', 5.97, 'color.status.info-ink', 'color.surface.page', 'dark'],
  ['semantic', 'color.status.info-ink', 4.70, 'color.status.info-ink', 'color.surface.floating', 'dark'],
  ['semantic', 'color.status.info-ink', 3.75, 'color.status.info', 'color.surface.floating', 'dark'],
];

// Figures quoted in a $description that describe a RETIRED value and therefore
// cannot be re-measured from the current token tree. Each is pinned to the hex
// pair it was measured against so the number stays auditable after the fact.
const HISTORICAL = [
  // scds-v2 desaturated light ladder, retired 2026-10-07 by the oatmeal restore
  // (decisions.md 2026-10-07). Pinned to the retired hex pair.
  [3.69, 'status.success.light #2F855A on the retired scds-v2 page #EBE7E4'],
  [4.79, 'status.info.light #2D5AD8 on the retired scds-v2 page #EBE7E4'],
  [2.52, 'border.default warmGray.350 #9A9186 on the retired scds-v2 page #EBE7E4'],
  [1.53, 'border.subtle warmGray.250 #C4BCB4 on the retired scds-v2 page #EBE7E4'],
  [4.29, 'warmGray.450 pre-restore #6B665E on the oatmeal page #E3DFD8 — re-derived 2026-10-07 to #66615A'],
  [4.39, 'success ink light pre-restore #28724D on the oatmeal page #E3DFD8 — re-derived 2026-10-07 to #246E4A'],
  [4.24, 'warning ink light pre-restore #B83E0B on the oatmeal page #E3DFD8 — re-derived 2026-10-07 to #B13700'],
  [4.37, 'hoverInk light pre-restore #027175 on the oatmeal page #E3DFD8 — re-derived 2026-10-07 to #006D72'],
  [4.42, 'text.secondary pre-fix: warmGray.500 #5F5C55 on surface.sunk #D8D1CC — the regression this ADR fixes'],
  [3.42, 'status.success.light #2F855A on the pre-desaturation page #E3DFD8'],
  [4.43, 'status.info.light #2D5AD8 on the pre-desaturation page #E3DFD8'],
  [11.24, 'focusRing.light on surface.sunk before the P2-8 rebuild (warmGray.200 was #D9D6D2)'],
  [1.22, 'border.default pre-P1-2-swap: warmGray.250 #D5D2CF on page #EBE7E4'],
  [1.44, 'border.subtle pre-P1-2-swap: warmGray.350 #C5C2BF on page #EBE7E4'],
  [1.79, 'status.error.dark before P0-4: #732020 on dark.surfacePage'],
  [3.69, 'the figure wrongly copy-pasted onto the warning-ink line (it is success.light’s)'],
  [4.52, 'retired vermilion shu.500 #C8281C on surface.page #EBE7E4'],
  [3.80, 'the unreproducible vermilion figure this ADR corrects'],
  [4.90, 'status.success.light’s never-reproducible “~4.9:1 AA” claim, corrected by this ADR'],
  [7.50, 'status.info.light’s never-reproducible “~7.5:1” claim, corrected by this ADR'],
  [4.58, 'dark.textTertiary pre-WQ-040: #7C7C7A on dark.surfacePage #0F0F0F — retired 2026-09-06 when re-derived to #858583'],
  [4.79, 'dark.textTertiary pre-WQ-040: #7C7C7A on dark.well #080807 — retired 2026-09-06'],
  [4.73, 'dark.textTertiary pre-WQ-040: #7C7C7A on dark.floor #0A0A0A (surface.rail) — retired 2026-09-06'],
  [4.40, 'dark.textTertiary pre-WQ-040: #7C7C7A on dark.raised1 #141414 (surface.raised, the default card ground) — the forbidden, sub-AA pair the WQ-040 re-derivation clears'],
  [4.16, 'dark.textTertiary pre-WQ-040: #7C7C7A on dark.raised2 #1A1A1A (surface.deepSunk/floating) — the forbidden, sub-AA pair the WQ-040 re-derivation clears'],
  [4.52, 'warning-ink dark pre-WQ-041: #D2512A on dark.surfacePage — the page-only figure that hid the card-ground failure'],
  [4.34, 'warning-ink dark pre-WQ-041: #D2512A on dark.raised1 (surface.raised, the default card ground) — the sub-AA pair WQ-041 clears'],
  [4.10, 'warning-ink dark pre-WQ-041: #D2512A on dark.raised2 (surface.deepSunk/floating) — retired 2026-09-06'],
  [4.13, 'info-ink dark pre-WQ-041: #4A74EA on dark.raised2 — retired 2026-09-06'],
  [4.54, 'info-ink dark pre-WQ-041: #4A74EA on dark.surfacePage — the page-only figure that hid the card-ground failure'],
  [4.37, 'info-ink dark pre-WQ-041: #4A74EA on dark.raised1 (surface.raised, the default card ground) — the sub-AA pair WQ-041 clears'],
  // Neutral-ladder dark figures retired 2026-09-24 when color.dark.* moved to the
  // slate ladder (decisions.md 2026-09-24). Pinned to the retired hex pair.
  [8.85, 'text.secondary dark pre-slate: #B9B9B7 on dark.raised2 #1A1A1A (surface.floating) — retired 2026-09-24'],
  [10.20, 'text.secondary dark pre-slate: #B9B9B7 on dark.well #080807 (surface.sunk) — retired 2026-09-24'],
  [5.18, 'dark.textTertiary pre-slate: #858583 on dark.surfacePage #0F0F0F — retired 2026-09-24'],
  [5.42, 'dark.textTertiary pre-slate: #858583 on dark.well #080807 — retired 2026-09-24'],
  [5.35, 'dark.textTertiary pre-slate: #858583 on dark.floor #0A0A0A (surface.rail) — retired 2026-09-24'],
  [4.98, 'dark.textTertiary pre-slate: #858583 on dark.raised1 #141414 — retired 2026-09-24'],
  [4.71, 'dark.textTertiary pre-slate: #858583 on dark.raised2 #1A1A1A — retired 2026-09-24'],
  [15.67, 'focusRing.dark pre-slate: #E8E8EA on dark.surfacePage #0F0F0F — retired 2026-09-24'],
  [16.37, 'focusRing.dark pre-slate: #E8E8EA on dark.well #080807 — retired 2026-09-24'],
  [15.06, 'focusRing.dark pre-slate: #E8E8EA on dark.raised1 #141414 — retired 2026-09-24'],
  [14.22, 'focusRing.dark pre-slate: #E8E8EA on dark.raised2 #1A1A1A — retired 2026-09-24'],
  [5.84, 'teal.400 #1C9DA2 on the pre-slate dark.surfacePage #0F0F0F — the dark accentInk/hover alias retired 2026-09-24'],
  [2.59, 'brand.accentDeep dark: teal.700 #056268 on pre-slate dark.raised1 #141414 — retired 2026-09-24'],
  [6.10, 'accentInk dark pre-slate: teal.400 on dark.well #080807 — retired 2026-09-24'],
  [5.61, 'accentInk dark pre-slate: teal.400 on dark.raised1 #141414 — retired 2026-09-24'],
  [5.30, 'accentInk dark pre-slate: teal.400 on dark.raised2 #1A1A1A; also success/warning ink #3C9366/#DC5A33 on dark.well #080807 — retired 2026-09-24'],
  [6.03, 'accentInk dark pre-slate: teal.400 on dark.floor #0A0A0A — retired 2026-09-24'],
  [5.07, 'success/warning ink dark pre-slate: #3C9366 / #DC5A33 on dark.surfacePage #0F0F0F — retired 2026-09-24'],
  [5.24, 'success/warning ink dark pre-slate: #3C9366 / #DC5A33 on dark.floor #0A0A0A — retired 2026-09-24'],
  [4.88, 'success ink dark pre-slate: #3C9366 on dark.raised1 #141414 — retired 2026-09-24'],
  [4.61, 'success ink dark pre-slate: #3C9366 on dark.raised2 #1A1A1A — retired 2026-09-24'],
  [4.37, 'status.success.dark pre-slate #388F63 on dark.raised2 #1A1A1A — the reused fill WQ-041 replaced with an ink'],
  [4.87, 'warning ink dark pre-slate: #DC5A33 on dark.raised1 #141414 — retired 2026-09-24'],
  [4.60, 'warning ink dark pre-slate: #DC5A33 on dark.raised2 #1A1A1A — retired 2026-09-24'],
  [4.20, 'status.warning.dark pre-slate #C94E28 on dark.surfacePage #0F0F0F — retired 2026-09-24'],
  [5.09, 'info ink dark pre-slate: #517DF3 on dark.surfacePage #0F0F0F — retired 2026-09-24'],
  [5.32, 'info ink dark pre-slate: #517DF3 on dark.well #080807 — retired 2026-09-24'],
  [5.26, 'info ink dark pre-slate: #517DF3 on dark.floor #0A0A0A — retired 2026-09-24'],
  [4.89, 'info ink dark pre-slate: #517DF3 on dark.raised1 #141414 — retired 2026-09-24'],
  [4.62, 'info ink dark pre-slate: #517DF3 on dark.raised2 #1A1A1A — retired 2026-09-24'],
  [3.86, 'status.info.dark pre-slate #3866E8 on dark.surfacePage #0F0F0F — retired 2026-09-24'],
  [4.76, 'status.error.dark pre-slate #DD4C4C on dark.surfacePage #0F0F0F — retired 2026-09-24'],
  [4.82, 'status.success.dark pre-slate #388F63 on dark.surfacePage #0F0F0F — retired 2026-09-24'],
];

function checkClaims() {
  const failures = [];
  for (const [file, token, claimed, fgPath, bgPath, mode] of CLAIMS) {
    let measured;
    try {
      measured = contrast(hexOf(fgPath, mode ?? 'light'), hexOf(bgPath, mode ?? 'light'));
    } catch (err) {
      failures.push(`${file}:${token} — cannot resolve pair (${fgPath} on ${bgPath}): ${err.message}`);
      continue;
    }
    if (Math.abs(measured - claimed) > TOL) {
      failures.push(
        `${file}:${token} quotes ${fmt(claimed)}:1 for ${fgPath} on ${bgPath}` +
        `${mode ? ` (${mode})` : ''} but it measures ${fmt(measured)}:1.`
      );
    }
  }
  return failures;
}

// ---------------------------------------------------- check 3: orphan figures
function collectDescriptions(node, path = [], out = []) {
  if (!node || typeof node !== 'object') return out;
  if (typeof node.$description === 'string') out.push([path.join('.'), node.$description]);
  for (const [k, v] of Object.entries(node)) {
    if (k !== '$description' && v && typeof v === 'object') collectDescriptions(v, [...path, k], out);
  }
  return out;
}

function checkOrphans() {
  const known = new Set([...CLAIMS.map(([, , n]) => n.toFixed(2)), ...HISTORICAL.map(([n]) => n.toFixed(2))]);
  const failures = [];
  for (const [label, tree] of [['primitives', primitives], ['semantic', semantic]]) {
    for (const [path, text] of collectDescriptions(tree)) {
      // A range ("17–18:1", "8.85–10.20:1") states a span, not one measurable
      // pair; its endpoints are covered by the discrete claims either side.
      const scannable = text.replace(/\d+(?:\.\d+)?\s*[–-]\s*\d+(?:\.\d+)?:1/g, '');
      for (const m of scannable.matchAll(/(\d+(?:\.\d+)?):1/g)) {
        const n = Number(m[1]).toFixed(2);
        if (!known.has(n)) {
          failures.push(
            `${label}:${path} quotes ${m[1]}:1, which is not registered in CLAIMS or HISTORICAL ` +
            `in scripts/verify-contrast.mjs. Register it (or correct it) — an unregistered figure is unguarded.`
          );
        }
      }
    }
  }
  return failures;
}

// ---------------------------------------------------------------------- main
const { failures: aaFailures, restricted } = checkAA();
const claimFailures = checkClaims();
const orphanFailures = checkOrphans();

const section = (title, items, fatal = true) => {
  if (!items.length) {
    console.log(`  ✓ ${title}`);
    return 0;
  }
  console.log(`  ${fatal ? '✗' : '!'} ${title}`);
  for (const i of items) console.log(`      ${fatal ? '✗' : '!'} ${i}`);
  return fatal ? items.length : 0;
};

console.log('\nContrast verification — tokens/primitives.json + tokens/semantic.json\n');

let fatalCount = 0;
fatalCount += section(`WCAG AA on every text-tier × surface × mode pair (${TEXT_TIERS.length * SURFACES.length * MODES.length} pairs)`, aaFailures);
fatalCount += section(`every quoted figure matches its measured value (${CLAIMS.length} claims)`, claimFailures);
fatalCount += section('every figure quoted in a $description is registered', orphanFailures);
section('no restriction is over-broad', restricted, false);

if (fatalCount) {
  console.log(`\n${fatalCount} contrast failure(s). The token source is the upstream of every Shokunin property — fix here, not in a consumer.\n`);
  process.exit(1);
}
console.log('\nAll contrast claims verified.\n');
