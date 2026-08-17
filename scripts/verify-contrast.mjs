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
const TEXT_TIERS = ['color.text.primary', 'color.text.secondary', 'color.text.tertiary'];
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
  ['semantic', 'color.text.secondary', 5.86, 'color.text.secondary', 'color.surface.page', 'light'],
  ['semantic', 'color.text.secondary', 4.77, 'color.text.secondary', 'color.surface.sunk', 'light'],
  ['semantic', 'color.text.secondary', 6.40, 'color.text.secondary', 'color.surface.raised', 'light'],
  ['semantic', 'color.text.secondary', 6.86, 'color.text.secondary', 'color.surface.floating', 'light'],
  ['semantic', 'color.text.secondary', 3.01, 'color.text.secondary', 'color.surface.deepSunk', 'light'],
  ['semantic', 'color.text.secondary', 3.84, 'color.text.secondary', 'color.surface.hover', 'light'],
  ['semantic', 'color.text.secondary', 8.85, 'color.text.secondary', 'color.surface.floating', 'dark'],
  ['semantic', 'color.text.secondary', 10.20, 'color.text.secondary', 'color.surface.sunk', 'dark'],
  ['semantic', 'color.text.tertiary', 4.63, 'color.text.tertiary', 'color.surface.page', 'light'],
  ['semantic', 'color.text.tertiary', 5.06, 'color.text.tertiary', 'color.surface.raised', 'light'],
  ['semantic', 'color.text.tertiary', 5.42, 'color.text.tertiary', 'color.surface.floating', 'light'],
  ['semantic', 'color.text.tertiary', 3.77, 'color.text.tertiary', 'color.surface.sunk', 'light'],
  ['semantic', 'color.text.tertiary', 2.38, 'color.text.tertiary', 'color.surface.deepSunk', 'light'],
  ['semantic', 'color.text.tertiary', 3.03, 'color.text.tertiary', 'color.surface.hover', 'light'],
  ['semantic', 'color.text.tertiary', 4.58, 'color.text.tertiary', 'color.surface.page', 'dark'],
  ['semantic', 'color.text.tertiary', 4.79, 'color.text.tertiary', 'color.surface.sunk', 'dark'],
  ['semantic', 'color.text.tertiary', 4.73, 'color.text.tertiary', 'color.surface.rail', 'dark'],
  ['semantic', 'color.text.tertiary', 4.40, 'color.text.tertiary', 'color.surface.raised', 'dark'],
  ['semantic', 'color.text.tertiary', 4.16, 'color.text.tertiary', 'color.surface.deepSunk', 'dark'],
  ['primitives', 'color.warmGray.500', 4.77, 'color.warmGray.500', 'color.warmGray.200', null],
  ['primitives', 'color.warmGray.500', 5.86, 'color.warmGray.500', 'color.warmGray.100', null],
  ['primitives', 'color.warmGray.450', 4.63, 'color.warmGray.450', 'color.warmGray.100', null],
  ['primitives', 'color.warmGray.450', 5.06, 'color.warmGray.450', 'color.warmGray.50', null],
  ['primitives', 'color.warmGray.450', 5.42, 'color.warmGray.450', 'color.warmGray.25', null],
  ['primitives', 'color.dark.textTertiary', 4.58, 'color.dark.textTertiary', 'color.dark.surfacePage', null],
  ['primitives', 'color.dark.textTertiary', 4.79, 'color.dark.textTertiary', 'color.dark.well', null],
  ['primitives', 'color.dark.textTertiary', 4.40, 'color.dark.textTertiary', 'color.dark.raised1', null],

  // --- borders --------------------------------------------------------------
  ['primitives', 'color.warmGray.250', 1.53, 'color.warmGray.250', 'color.warmGray.100', null],
  ['primitives', 'color.warmGray.350', 2.52, 'color.warmGray.350', 'color.warmGray.100', null],
  ['semantic', 'color.border.default', 2.52, 'color.warmGray.350', 'color.warmGray.100', null],
  ['semantic', 'color.border.subtle', 1.53, 'color.warmGray.250', 'color.warmGray.100', null],

  // --- focus ring -----------------------------------------------------------
  ['primitives', 'color.focusRing.light', 13.24, 'color.focusRing.light', 'color.warmGray.100', null],
  ['primitives', 'color.focusRing.light', 14.45, 'color.focusRing.light', 'color.warmGray.50', null],
  ['primitives', 'color.focusRing.light', 15.49, 'color.focusRing.light', 'color.warmGray.25', null],
  ['primitives', 'color.focusRing.light', 10.78, 'color.focusRing.light', 'color.warmGray.200', null],
  ['primitives', 'color.focusRing.light', 6.80, 'color.focusRing.light', 'color.warmGray.300', null],
  ['primitives', 'color.focusRing.light', 8.68, 'color.focusRing.light', 'color.warmGray.250', null],
  ['primitives', 'color.focusRing.dark', 15.67, 'color.focusRing.dark', 'color.dark.surfacePage', null],
  ['primitives', 'color.focusRing.dark', 16.37, 'color.focusRing.dark', 'color.dark.well', null],
  ['primitives', 'color.focusRing.dark', 15.06, 'color.focusRing.dark', 'color.dark.raised1', null],
  ['primitives', 'color.focusRing.dark', 14.22, 'color.focusRing.dark', 'color.dark.raised2', null],
  ['semantic', 'color.border.focus', 13.24, 'color.focusRing.light', 'color.warmGray.100', null],
  ['semantic', 'color.border.focus', 15.67, 'color.focusRing.dark', 'color.dark.surfacePage', null],

  // --- brand / interactive --------------------------------------------------
  ['primitives', 'color.teal.400', 5.84, 'color.teal.400', 'color.dark.surfacePage', null],
  ['primitives', 'color.teal.600', 5.20, 'color.utility.white', 'color.teal.600', null],
  ['primitives', 'color.teal.600', 3.97, 'color.utility.white', 'color.teal.500', null],
  ['primitives', 'color.teal.700', 5.78, 'color.teal.700', 'color.warmGray.100', null],
  ['semantic', 'color.brand.accentDeep', 5.78, 'color.teal.700', 'color.warmGray.100', null],
  ['semantic', 'color.brand.accentFill', 5.20, 'color.utility.white', 'color.teal.600', null],
  ['semantic', 'color.brand.accentFill', 3.97, 'color.utility.white', 'color.teal.500', null],
  ['primitives', 'color.interactive.hoverInk.light', 4.72, 'color.interactive.hoverInk.light', 'color.warmGray.100', null],
  ['primitives', 'color.interactive.hoverInk.light', 3.23, 'color.teal.500', 'color.warmGray.100', null],
  ['semantic', 'color.interactive.hover', 3.23, 'color.teal.500', 'color.warmGray.100', null],
  ['semantic', 'color.interactive.hover-ink', 4.72, 'color.interactive.hoverInk.light', 'color.warmGray.100', null],
  ['semantic', 'color.interactive.hover-ink', 3.23, 'color.teal.500', 'color.warmGray.100', null],

  // --- status ---------------------------------------------------------------
  ['primitives', 'color.status.success.light', 3.69, 'color.status.success.light', 'color.warmGray.100', null],
  ['primitives', 'color.status.success.ink.light', 4.74, 'color.status.success.ink.light', 'color.warmGray.100', null],
  ['primitives', 'color.status.success.ink.light', 4.82, 'color.status.success.dark', 'color.dark.surfacePage', null],
  ['primitives', 'color.status.warning.ink.light', 4.58, 'color.status.warning.ink.light', 'color.warmGray.100', null],
  ['primitives', 'color.status.warning.ink.light', 4.21, 'color.status.warning.light', 'color.warmGray.100', null],
  ['primitives', 'color.status.warning.ink.dark', 4.52, 'color.status.warning.ink.dark', 'color.dark.surfacePage', null],
  ['primitives', 'color.status.warning.ink.dark', 4.20, 'color.status.warning.dark', 'color.dark.surfacePage', null],
  ['primitives', 'color.status.info.light', 4.79, 'color.status.info.light', 'color.warmGray.100', null],
  ['primitives', 'color.status.info.ink.dark', 4.54, 'color.status.info.ink.dark', 'color.dark.surfacePage', null],
  ['primitives', 'color.status.info.ink.dark', 3.86, 'color.status.info.dark', 'color.dark.surfacePage', null],
  ['primitives', 'color.status.info.ink.dark', 4.79, 'color.status.info.light', 'color.warmGray.100', null],
  ['primitives', 'color.status.error.dark', 4.76, 'color.status.error.dark', 'color.dark.surfacePage', null],
  ['primitives', 'color.status.error.dark', 4.82, 'color.status.success.dark', 'color.dark.surfacePage', null],
  ['semantic', 'color.status.success-ink', 4.74, 'color.status.success.ink.light', 'color.warmGray.100', null],
  ['semantic', 'color.status.success-ink', 3.69, 'color.status.success.light', 'color.warmGray.100', null],
  ['semantic', 'color.status.success-ink', 4.82, 'color.status.success.dark', 'color.dark.surfacePage', null],
  ['semantic', 'color.status.warning-ink', 4.58, 'color.status.warning.ink.light', 'color.warmGray.100', null],
  ['semantic', 'color.status.warning-ink', 4.52, 'color.status.warning.ink.dark', 'color.dark.surfacePage', null],
  ['semantic', 'color.status.warning-ink', 4.21, 'color.status.warning.light', 'color.warmGray.100', null],
  ['semantic', 'color.status.warning-ink', 4.20, 'color.status.warning.dark', 'color.dark.surfacePage', null],
  ['semantic', 'color.status.info-ink', 4.79, 'color.status.info.light', 'color.warmGray.100', null],
  ['semantic', 'color.status.info-ink', 4.54, 'color.status.info.ink.dark', 'color.dark.surfacePage', null],
  ['semantic', 'color.status.info-ink', 3.86, 'color.status.info.dark', 'color.dark.surfacePage', null],
];

// Figures quoted in a $description that describe a RETIRED value and therefore
// cannot be re-measured from the current token tree. Each is pinned to the hex
// pair it was measured against so the number stays auditable after the fact.
const HISTORICAL = [
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
