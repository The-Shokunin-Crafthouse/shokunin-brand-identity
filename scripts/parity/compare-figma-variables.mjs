// Phase 1 — tokens/*.json vs the SCDS Figma variable collections.
// Identifier-driven on BOTH sides: every JSON leaf gets a row, every Figma
// variable gets a row. Nothing is filtered out (#173).
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const root = new URL('../../', import.meta.url);
const j = (p) => JSON.parse(readFileSync(new URL(p, root), 'utf8'));
const stamp = (p) => createHash('sha256').update(readFileSync(new URL(p, root))).digest('hex').slice(0, 16);

const prim = j('tokens/primitives.json');
const sem  = j('tokens/semantic.json');

/* ---------- JSON side ---------- */

// Five paths exist in BOTH files (color.signal.live, color.signal.progress,
// border.width.focus, border.width.accent, radius.none), so the maps are kept
// per tier. A `{ref}` in a $value always means the primitive — semantic never
// aliases semantic — so resolution reads primitives first.
const jsonPrim = new Map();
const jsonSem  = new Map();
function walk(node, path, map, tier) {
  if (node === null || typeof node !== 'object') return;
  if ('$value' in node) {
    const modes = node.$extensions?.modes;
    const byMode = modes && typeof modes === 'object'
      ? { ...modes }
      : { Value: node.$value };
    map.set(path.join('.'), { tier, type: node.$type ?? '', byMode });
    return;
  }
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith('$')) continue;
    walk(v, [...path, k], map, tier);
  }
}
walk(prim, [], jsonPrim, 'primitives');
walk(sem, [], jsonSem, 'semantic');
const jsonTokens = [
  ...[...jsonPrim].map(([k, v]) => [k, v]),
  ...[...jsonSem].map(([k, v]) => [k, v]),
];

// Resolve a DTCG `{a.b.c}` alias chain down to a literal.
function resolveJson(value, mode, seen = new Set()) {
  if (typeof value !== 'string') return value;
  const m = /^\{([^}]+)\}$/.exec(value.trim());
  if (!m) return value;
  const target = m[1];
  if (seen.has(target)) return `<cycle:${target}>`;
  seen.add(target);
  const t = jsonPrim.get(target) ?? jsonSem.get(target);
  if (!t) return `<missing:${target}>`;
  const next = t.byMode[mode] ?? t.byMode.Value ?? Object.values(t.byMode)[0];
  return resolveJson(next, mode, seen);
}

/* ---------- Figma side ---------- */

const tsv = (p) => readFileSync(new URL(p, root), 'utf8')
  .split('\n').filter(Boolean)
  .map(l => { const [id, name, type, mode, value] = l.split('\t'); return { id, name, type, mode, value }; });

const figRows = [...tsv('output/parity/raw/figma-primitives.tsv'), ...tsv('output/parity/raw/figma-semantic.tsv')];
// Same collision on the Figma side (color/signal/live and color/signal/progress
// exist in both collections), so the collections are kept apart too.
const figPrim = new Map();
const figSem  = new Map();
for (const r of figRows) {
  const map = r.mode === 'Value' ? figPrim : figSem;
  if (!map.has(r.name)) map.set(r.name, { id: r.id, type: r.type, byMode: {} });
  map.get(r.name).byMode[r.mode] = r.value;
}
const figCount = figPrim.size + figSem.size;

function resolveFig(value, mode, seen = new Set()) {
  if (typeof value !== 'string' || !value.startsWith('->')) return value;
  const target = value.slice(2);
  if (seen.has(target)) return `<cycle:${target}>`;
  seen.add(target);
  const v = figPrim.get(target) ?? figSem.get(target);
  if (!v) return `<missing:${target}>`;
  const next = v.byMode[mode] ?? v.byMode.Value ?? Object.values(v.byMode)[0];
  return resolveFig(next, mode, seen);
}

/* ---------- name mapping ----------
   Documented authoring differences (decisions.md 2026-08-16). Each entry is a
   recorded convention difference, NOT drift — the resolved values still have to
   agree, and a value mismatch on one of these is still reported. */
const NAME_MAP = {
  'color.status.success.ink.light':     'color/status/successInkLight',
  'color.status.warning.ink.light':     'color/status/warningInkLight',
  'color.status.warning.ink.dark':      'color/status/warningInkDark',
  'color.status.info.ink.dark':         'color/status/infoInkDark',
  'color.interactive.hoverInk.light':   'color/interactive/hoverInkLight',
  // Renamed Figma-side on 2026-07-28 (audit Block 5); the code-side rename was
  // deliberately deferred because --sc-color-text-on-inverse has live consumers.
  'color.text-on-inverse':              'color/text/onInverse',
  'color.surface-inverse':              'color/surface/inverse',
  // Generator-side naming gap recorded as a Block 8 remainder.
  'motion.press.release.duration':      'motion/press/release-duration',
};

// Standing exception, re-affirmed every sync (decisions.md 2026-08-16): Figma
// stores the TRIAL family names because the licensed faces will not load there;
// the repo stores the licensed CSS stacks. Syncing either direction breaks a
// side. Reported under its own verdict so it can never be silently "fixed".
const FONT_FAMILY_EXCEPTION = new Set([
  'font.family.sans', 'font.family.display', 'font.family.text', 'font.family.mono',
]);

// Code-only tiers: composites with no Figma variable representation
// (decisions.md 2026-08-16 + token-map ADR 2026-08-17).
function codeOnlyTier(path, type) {
  if (type === 'typography') return 'font.text.* composition (typography composite)';
  if (type === 'shadow') return 'shadow.* (shadow composite)';
  if (type === 'cubicBezier') return 'motion.easing.* (cubic-bezier)';
  if (path.startsWith('motion.easing.')) return 'motion.easing.* (cubic-bezier)';
  return null;
}

const MODE_ALIAS = { light: 'Light', dark: 'Dark', Value: 'Value' };

/* ---------- compare ---------- */

const rows = [];
const counts = { match: 0, 'figma-stale': 0, 'json-stale': 0, 'missing-in-figma': 0, 'missing-in-json': 0, 'documented-exception': 0 };
const seenFigKeys = new Set();

// The divider scale is composed in code from a channel triplet and baked as
// hex8 in Figma (decisions.md 2026-08-16, authoring difference (c)). Compose the
// code form down to the same hex8 so the two are actually compared, rather than
// waved through — a drifted alpha step still has to show up as drift.
const RGB_TRIPLET = { ink: 'color.inkRgb', white: 'color.whiteRgb' };
function composeRgb(str) {
  const m = /^rgb\(\s*var\(--sc-p-color-(\w+)-rgb\)\s*\/\s*([0-9.]+)\s*\)$/.exec(String(str).trim());
  if (!m) return null;
  const tok = jsonPrim.get(RGB_TRIPLET[m[1]]);
  if (!tok) return null;
  const chans = String(tok.byMode.Value).trim().split(/\s+/).map(Number);
  if (chans.length !== 3 || chans.some(n => !Number.isFinite(n))) return null;
  const h = n => Math.round(n).toString(16).padStart(2, '0');
  return '#' + chans.map(h).join('') + h(Number(m[2]) * 255);
}

const norm = (v) => {
  if (v === null || v === undefined) return '';
  // DTCG dimension/duration carry {value, unit}; Figma stores the bare number.
  if (typeof v === 'object' && v !== null && 'value' in v && 'unit' in v) v = v.value;
  const composed = composeRgb(v);
  if (composed) return composed;
  let s = String(v).trim();
  if (/^#[0-9a-fA-F]{6,8}$/.test(s)) return s.toLowerCase();
  const n = Number(s);
  if (s !== '' && Number.isFinite(n)) return String(Math.round(n * 1e6) / 1e6);
  return s;
};

for (const [path, tok] of jsonTokens) {
  const figName = NAME_MAP[path] ?? path.replaceAll('.', '/');
  const fig = tok.tier === 'primitives' ? figPrim.get(figName) : figSem.get(figName);
  for (const [mode, rawJson] of Object.entries(tok.byMode)) {
    const figMode = MODE_ALIAS[mode] ?? mode;
    const jsonResolved = resolveJson(rawJson, mode);
    if (!fig) {
      const tier = codeOnlyTier(path, tok.type);
      const verdict = 'missing-in-figma';
      counts[verdict]++;
      rows.push({ token: `${tok.tier}:${path}`, mode, json: norm(jsonResolved), figma: '—', varId: '—', verdict, note: tier ? `code-only tier: ${tier}` : 'NOT a declared code-only tier' });
      continue;
    }
    seenFigKeys.add(`${tok.tier}|${figName}|${figMode}`);
    const figRaw = fig.byMode[figMode] ?? fig.byMode.Value;
    if (figRaw === undefined) {
      const verdict = 'missing-in-figma';
      counts[verdict]++;
      rows.push({ token: `${tok.tier}:${path}`, mode, json: norm(jsonResolved), figma: '—', varId: fig.id, verdict, note: `variable exists but has no "${figMode}" mode` });
      continue;
    }
    const figResolved = resolveFig(figRaw, figMode);
    const a = norm(jsonResolved), b = norm(figResolved);
    if (a === b) { counts.match++; rows.push({ token: `${tok.tier}:${path}`, mode, json: a, figma: b, varId: fig.id, verdict: 'match', note: '' }); }
    else if (FONT_FAMILY_EXCEPTION.has(path)) {
      counts['documented-exception']++;
      rows.push({ token: `${tok.tier}:${path}`, mode, json: a, figma: b, varId: fig.id, verdict: 'documented-exception', note: 'font.family.* standing exception — Figma holds Trial names, repo holds the licensed stack (decisions.md 2026-08-16). Do NOT sync.' });
    }
    else {
      counts['figma-stale']++;
      rows.push({ token: `${tok.tier}:${path}`, mode, json: a, figma: b, varId: fig.id, verdict: 'figma-stale', note: 'value differs — direction NOT assumed; see Decision 1' });
    }
  }
}

// Figma variables with no JSON counterpart.
for (const r of figRows) {
  const tier = r.mode === 'Value' ? 'primitives' : 'semantic';
  if (seenFigKeys.has(`${tier}|${r.name}|${r.mode}`)) continue;
  counts['missing-in-json']++;
  rows.push({ token: `${tier}:${r.name}`, mode: r.mode, json: '—', figma: norm(resolveFig(r.value, r.mode)), varId: r.id, verdict: 'missing-in-json', note: 'present in Figma, absent from tokens/' });
}

/* ---------- emit ---------- */

const header = `<!-- generated by scripts/parity/compare-figma-variables.mjs — do not hand-edit -->
# Phase 1 — Figma VARIABLES vs \`tokens/\`

**Stamp:** \`primitives ${stamp('tokens/primitives.json')}\` · \`semantic ${stamp('tokens/semantic.json')}\`
**Figma file:** \`0zVoxaLJQkjHENYJlQk1VT\` — Primitives (133 vars, 1 mode) + Semantic (88 vars, Light/Dark)
**Read:** ${new Date().toISOString().slice(0, 10)}, via Figma MCP \`use_figma\` (live read, not an export)

Both sides enumerated from their own identifiers — every JSON leaf × mode, and every
Figma variable × mode. Values are compared **fully resolved** (alias chains followed on
both sides), so an alias-vs-literal authoring difference is a \`match\`, not drift.

## Counts

| verdict | rows |
|---|---|
${Object.entries(counts).map(([k, v]) => `| \`${k}\` | ${v} |`).join('\n')}
| **total** | **${rows.length}** |

JSON side: ${jsonPrim.size} primitive + ${jsonSem.size} semantic = ${jsonPrim.size + jsonSem.size} tokens
→ ${rows.length - counts['missing-in-json']} token×mode rows.
Figma side: ${figPrim.size} Primitives + ${figSem.size} Semantic = ${figCount} variables
→ ${figRows.length} variable×mode rows.

The semantic token count (${jsonSem.size}) equals the symbol count \`npm run tokens:swift\` emits,
so no semantic token is missing from this table.

## Rows

| token | mode | JSON | Figma | variable id | verdict | note |
|---|---|---|---|---|---|---|
`;

const order = { 'figma-stale': 0, 'json-stale': 1, 'missing-in-json': 2, 'missing-in-figma': 3, 'documented-exception': 4, match: 5 };
rows.sort((x, y) => (order[x.verdict] - order[y.verdict]) || x.token.localeCompare(y.token) || x.mode.localeCompare(y.mode));

const body = rows.map(r => `| \`${r.token}\` | ${r.mode} | \`${r.json}\` | \`${r.figma}\` | ${r.varId} | \`${r.verdict}\` | ${r.note} |`).join('\n');
writeFileSync(new URL('output/parity/figma-variables.md', root), header + body + '\n');

console.log(JSON.stringify(counts, null, 2));
console.log('total rows', rows.length, '| json tokens', jsonPrim.size + jsonSem.size, '| figma vars', figCount);
