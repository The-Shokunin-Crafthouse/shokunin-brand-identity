#!/usr/bin/env node
/**
 * gen-token-map.mjs — generates _config/design-system/token-map.md
 *
 * Why this exists
 * ---------------
 * token-map.md was hand-maintained and claimed to be the source of truth
 * that tokens/*.json and Figma were "downstream of". Nothing generated from
 * it, so it drifted for roughly three months: it still documented the
 * `color/shu/*` vermilion scale retired on 2026-07-09, the pre-desaturation
 * page ground, and 100/23 variable counts against a real 133/88 — while
 * omitting teal, signal, focusRing, divider, the -ink tiers, four surfaces
 * and the whole tertiary text tier.
 *
 * A pasted mirror needs a generator and a stamped count, not discipline
 * (studio learning #178). The dependency is now inverted and explicit:
 * tokens/*.json is upstream, this file is a generated mirror.
 *
 * Naming note: token paths are rendered in Figma's slash notation. Two
 * documented authoring differences with the Figma library are annotated
 * inline rather than silently normalised (see FIGMA_NAME_NOTES).
 *
 * Usage:
 *   node scripts/gen-token-map.mjs           # write the file
 *   node scripts/gen-token-map.mjs --check   # exit 1 if the file is stale
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PRIM_PATH = resolve(repoRoot, 'tokens/primitives.json');
const SEM_PATH = resolve(repoRoot, 'tokens/semantic.json');
const OUT_PATH = resolve(repoRoot, '_config/design-system/token-map.md');

const primRaw = readFileSync(PRIM_PATH, 'utf8');
const semRaw = readFileSync(SEM_PATH, 'utf8');
const primitives = JSON.parse(primRaw);
const semantic = JSON.parse(semRaw);

// ------------------------------------------------------------ naming (mirrors tokens-to-css.mjs)
const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const varName = (path, primitive) => (primitive ? '--sc-p-' : '--sc-') + path.map(kebab).join('-');
const slash = (path) => path.join('/');

// ------------------------------------------------------------ tree walking
function leaves(node, path = [], out = []) {
  for (const key of Object.keys(node)) {
    if (key.startsWith('$')) continue;
    const child = node[key];
    if (!child || typeof child !== 'object') continue;
    const next = [...path, key];
    if ('$value' in child) out.push({ path: next, token: child });
    else leaves(child, next, out);
  }
  return out;
}

const PRIM_LEAVES = leaves(primitives);
const SEM_LEAVES = leaves(semantic);
const PRIM_BY_DOTTED = new Map(PRIM_LEAVES.map((l) => [l.path.join('.'), l]));

// ------------------------------------------------------------ value formatting
function fmtDimension(v) {
  if (v && typeof v === 'object' && 'value' in v) return `${v.value}${v.unit ?? ''}`;
  if (v && typeof v === 'object' && 'stiffness' in v) return `spring k${v.stiffness} c${v.damping} m${v.mass}`;
  return String(v);
}

function fmtPrimitive(token) {
  const v = token.$value;
  switch (token.$type) {
    case 'color': return v;
    case 'dimension': case 'duration': return fmtDimension(v);
    case 'fontWeight': case 'number': return String(v);
    case 'fontFamily': return (Array.isArray(v) ? v : [v]).join(', ');
    case 'cubicBezier': return `cubic-bezier(${v.join(', ')})`;
    case 'spring': return `spring k${v.stiffness} c${v.damping} m${v.mass}`;
    case 'typography': return Object.entries(v).map(([k, x]) => `${k}: ${x}`).join(' · ');
    default: return typeof v === 'string' ? v : JSON.stringify(v);
  }
}

/** Resolve a DTCG `{a.b.c}` alias chain to its concrete formatted value. */
function resolveAlias(value, depth = 0) {
  if (typeof value !== 'string' || depth > 10) {
    return { alias: null, resolved: value == null ? '—' : fmtDimension(value) };
  }
  const m = /^\{([^}]+)\}$/.exec(value.trim());
  if (!m) return { alias: null, resolved: value }; // literal (e.g. composed rgb())
  const target = PRIM_BY_DOTTED.get(m[1]);
  if (!target) return { alias: m[1], resolved: '⚠ unresolved' };
  const inner = target.token.$value;
  if (typeof inner === 'string' && /^\{[^}]+\}$/.test(inner)) {
    return { alias: m[1], resolved: resolveAlias(inner, depth + 1).resolved };
  }
  return { alias: m[1], resolved: fmtPrimitive(target.token) };
}

const isColor = (t) => t.$type === 'color';
const esc = (s) => String(s).replace(/\|/g, '\\|');
const swatch = (hex) => (/^#[0-9A-Fa-f]{6}$/.test(hex) ? ` \`${hex}\`` : ` \`${esc(hex)}\``);

/** First sentence of a description, for the Notes column. */
function note(token) {
  const d = (token.$description || '').trim();
  if (!d) return '—';
  const first = d.split(/(?<=\.)\s(?=[A-Z0-9])/)[0];
  return esc(first.length > 320 ? first.slice(0, 317) + '…' : first);
}

// ------------------------------------------------------------ grouping
/** Group leaves by their path prefix at `depth`. */
function groupBy(list, depth) {
  const map = new Map();
  for (const l of list) {
    const key = l.path.slice(0, depth).join('/');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(l);
  }
  return map;
}

// ------------------------------------------------------------ table builders
function primitiveTable(list) {
  const out = [
    '| Token Name | CSS var | Value | Notes |',
    '|---|---|---|---|',
  ];
  for (const { path, token } of list) {
    const val = fmtPrimitive(token);
    const shown = isColor(token) ? swatch(val).trim() : `\`${esc(val)}\``;
    out.push(`| \`${slash(path)}\` | \`${varName(path, true)}\` | ${shown} | ${note(token)} |`);
  }
  return out.join('\n');
}

function semanticTable(list) {
  const out = [
    '| Token Name | CSS var | Light alias | Light value | Dark alias | Dark value | Notes |',
    '|---|---|---|---|---|---|---|',
  ];
  for (const { path, token } of list) {
    const modes = token.$extensions?.modes ?? {};
    const L = resolveAlias(modes.light ?? token.$value);
    const D = resolveAlias(modes.dark ?? token.$value);
    const cell = (r) => [
      r.alias ? `\`${slash(r.alias.split('.'))}\`` : '_literal_',
      `\`${esc(r.resolved)}\``,
    ];
    const [la, lv] = cell(L);
    const [da, dv] = cell(D);
    out.push(`| \`${slash(path)}\` | \`${varName(path, false)}\` | ${la} | ${lv} | ${da} | ${dv} | ${note(token)} |`);
  }
  return out.join('\n');
}

// ------------------------------------------------------------ restrictions (safety-critical, surfaced on its own)
function restrictionsTable() {
  const rows = [];
  for (const { path, token } of SEM_LEAVES) {
    const r = token.$extensions?.usageRestrictions;
    if (!r) continue;
    const fs = r.forbiddenSurfaces || {};
    for (const mode of Object.keys(fs)) {
      const list = fs[mode];
      if (!list?.length) continue;
      rows.push(
        `| \`${slash(path)}\` | ${mode} | ${list.map((s) => `\`${slash(s.split('.'))}\``).join(', ')} ` +
        `| \`${slash((r.substitute || '').replace(/[{}]/g, '').split('.'))}\` | ${esc(r.reason || '—')} |`
      );
    }
  }
  if (!rows.length) return '_No usage restrictions declared._';
  return [
    '| Token | Mode | Forbidden surfaces | Substitute | Reason |',
    '|---|---|---|---|---|',
    ...rows,
  ].join('\n');
}

// ------------------------------------------------------------ hand-authored prose
// Kept here because it is NOT derivable from the token files. Everything
// outside these blocks is generated — edit the tokens, not the markdown.
const FIGMA_NAME_NOTES = `
Token names below use Figma's slash notation, derived from the code token tree. Two authoring
differences with the SCDS Figma library are documented and deliberate (2026-08-16 sync ADR), not drift:

- The \`-ink\` tier is **flat in Figma** (\`color/status/successInkLight\`) and **nested in code**
  (\`color/status/success/ink/light\`). Both kebab to the identical CSS custom property.
- \`color/dark/border\` and \`color/dark/borderSubtle\` are **aliases in Figma** (→\`raised4\` / →\`raised2\`)
  and **literals in code**. Same resolved values.

\`font/family/*\` also differs by design: Figma holds trial-font names because the licensed faces will
not load there; the repo holds the served CSS stacks. Figma is authoritative for token *values*, never
for the served font stack.

**Counts differ from Figma, and should.** The SCDS library holds 133 Primitives + 88 Semantic
variables; the code tree counted here is larger because \`motion/easing/*\` (cubic-bezier),
\`shadow/*\` and the \`font/text/*\` composition tokens have no Figma-variable equivalent — composites
are not variable-representable. A count mismatch between this file and Figma is expected; a *value*
mismatch is not.
`.trim();

const ELEVATION = `
Shadows cannot be Figma Variables — they are stored as Effect Styles and referenced by style name.
Not represented in \`tokens/*.json\`, so this table is hand-maintained.

| Style Name | Composition | Use |
|---|---|---|
| \`elevation/1\` | \`0 1px 2px rgba(26, 24, 21, 0.08)\` | Subtle hover lift. |
| \`elevation/2\` | \`0 2px 8px rgba(26, 24, 21, 0.10), 0 1px 0 rgba(26, 24, 21, 0.04)\` | Card lift. |
| \`elevation/3\` | \`0 8px 24px rgba(26, 24, 21, 0.16), 0 2px 6px rgba(26, 24, 21, 0.08)\` | Dialog / modal. |

Shadow color is anchored on ink (\`#1A1815\`) at varying alpha for warm-ground consistency.
`.trim();

const BREAKPOINTS = `
Hand-maintained: breakpoints are **not** in \`tokens/*.json\` and no \`Breakpoints\` collection exists in
the current SCDS library (which holds Primitives + Semantic only). Verify before relying on these.

This set supersedes the studio-memory § 3 defaults (360 / 768 / 1024 / 1440 / 1920) **for this project
only** — a 4-tier set with a modern-mobile baseline (390) and a consolidated desktop tier (1280)
instead of the studio's 5-tier 1024 + 1440 split.

| Token Name | Value | Notes |
|---|---|---|
| \`breakpoint/xs\` | 390px | Mobile baseline. |
| \`breakpoint/sm\` | 768px | Tablet. |
| \`breakpoint/md\` | 1280px | Desktop. |
| \`breakpoint/lg\` | 1920px | Wide desktop. |
`.trim();

// ------------------------------------------------------------ assembly
const SECTION_ORDER = [
  ['color', 'Color'],
  ['font', 'Typography'],
  ['space', 'Spacing'],
  ['radius', 'Radius'],
  ['border', 'Border'],
  ['motion', 'Motion'],
  ['shadow', 'Shadow'],
  ['size', 'Size'],
];

function renderTree(list, kind) {
  const top = groupBy(list, 1);
  const chunks = [];
  for (const [prefix, label] of SECTION_ORDER) {
    const group = top.get(prefix);
    if (!group) continue;
    chunks.push(`### ${label} · ${kind}\n`);
    // subgroup one level deeper when the group is large enough to warrant it
    if (group.length > 12) {
      for (const [sub, items] of groupBy(group, 2)) {
        chunks.push(`#### \`${sub}\`\n`);
        chunks.push((kind === 'Primitives' ? primitiveTable : semanticTable)(items) + '\n');
      }
    } else {
      chunks.push((kind === 'Primitives' ? primitiveTable : semanticTable)(group) + '\n');
    }
  }
  // anything outside the known section order
  for (const [prefix, items] of top) {
    if (SECTION_ORDER.some(([p]) => p === prefix)) continue;
    chunks.push(`### \`${prefix}\` · ${kind}\n`);
    chunks.push((kind === 'Primitives' ? primitiveTable : semanticTable)(items) + '\n');
  }
  return chunks.join('\n');
}

const fingerprint = createHash('sha256').update(primRaw).update(semRaw).digest('hex').slice(0, 12);

const doc = `<!-- GENERATED FILE — DO NOT EDIT BY HAND.
     Generated by scripts/gen-token-map.mjs from tokens/primitives.json + tokens/semantic.json.
     Edit the token files, then run \`npm run tokens:map\`. CI fails if this file is stale. -->

# Design Token Map — The Shokunin Crafthouse · Brand Identity

**Generated** from \`tokens/primitives.json\` + \`tokens/semantic.json\`.
**Source fingerprint:** \`${fingerprint}\` · **${PRIM_LEAVES.length} primitives · ${SEM_LEAVES.length} semantic tokens.**

> **This file is a mirror, not the source.** \`tokens/*.json\` is upstream; this document and the Figma
> library are generated from / synced to it. It previously claimed the opposite — that both were
> "downstream of this file" — and, because nothing generated from it, drifted for about three months:
> it documented the \`color/shu/*\` vermilion scale retired on 2026-07-09, the pre-desaturation page
> ground, and 100/23 variable counts against a real 133/88. Inverted 2026-08-17.

> **CSS var namespacing:** primitives → \`--sc-p-*\` · semantic → \`--sc-*\` · component code references
> \`--sc-*\` only, never \`--sc-p-*\`.

---

## Naming

${FIGMA_NAME_NOTES}

---

## Usage restrictions (accessibility-critical)

Pairs that fail WCAG AA and must not be used together. Generated from
\`$extensions.usageRestrictions\` and enforced by \`scripts/verify-contrast.mjs\`.

${restrictionsTable()}

---

## Primitives

Raw values. Semantic tokens below alias these — designers and developers should not reach for
primitives directly. Surfaced here for traceability.

${renderTree(PRIM_LEAVES, 'Primitives')}
---

## Semantic

Purpose-mapped aliases, per mode. \`_literal_\` marks a composed value (e.g. an \`rgb()\` built from the
channel-triplet primitives) rather than an alias to a single primitive.

${renderTree(SEM_LEAVES, 'Semantic')}
---

## Shadow / Elevation (Effect Styles)

${ELEVATION}

---

## Breakpoints

${BREAKPOINTS}

---

## Export

- \`tokens/primitives.json\` + \`tokens/semantic.json\` (W3C DTCG) — **the source of truth**
- \`src/styles/tokens.css\` — generated by \`npm run tokens:build\`
- Figma Variables (Primitives + Semantic collections in the SCDS library) — synced to the token files
- \`@the-shokunin-crafthouse/scds\` — published package consumed by the branded properties
- This file — generated by \`npm run tokens:map\`
`;

if (process.argv.includes('--check')) {
  let current = '';
  try { current = readFileSync(OUT_PATH, 'utf8'); } catch { /* missing counts as stale */ }
  if (current !== doc) {
    console.error(
      '\ntoken-map.md is stale — it does not match tokens/*.json.\n' +
      'Run `npm run tokens:map` and commit the result.\n'
    );
    process.exit(1);
  }
  console.log(`token-map.md is current (fingerprint ${fingerprint}).`);
} else {
  writeFileSync(OUT_PATH, doc);
  console.log(
    `token-map.md written: ${OUT_PATH}\n` +
    `  fingerprint: ${fingerprint}\n` +
    `  primitives:  ${PRIM_LEAVES.length}\n` +
    `  semantic:    ${SEM_LEAVES.length}`
  );
}
