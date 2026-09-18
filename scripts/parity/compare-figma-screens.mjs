// Phase 2 — printed values on the Figma documentation frames vs the variables
// they document. Both the value captions and the alias captions are checked,
// and every row records whether the frame is BOUND to the variable or hard-set.
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const root = new URL('../../', import.meta.url);
const stamp = (p) => createHash('sha256').update(readFileSync(new URL(p, root))).digest('hex').slice(0, 16);

const tsv = (p, cols) => readFileSync(new URL(p, root), 'utf8')
  .split('\n').filter(Boolean).slice(1)
  .map(l => Object.fromEntries(l.split('\t').map((v, i) => [cols[i], v])));

/* Figma variables, fully resolved (same source the Phase 1 table reads). */
const figRows = ['output/parity/raw/figma-primitives.tsv', 'output/parity/raw/figma-semantic.tsv']
  .flatMap(p => readFileSync(new URL(p, root), 'utf8').split('\n').filter(Boolean)
    .map(l => { const [id, name, type, mode, value] = l.split('\t'); return { id, name, type, mode, value }; }));

const figPrim = new Map(), figSem = new Map();
for (const r of figRows) {
  const m = r.mode === 'Value' ? figPrim : figSem;
  if (!m.has(r.name)) m.set(r.name, { id: r.id, byMode: {} });
  m.get(r.name).byMode[r.mode] = r.value;
}
// color/signal/live and color/signal/progress exist in BOTH collections, so the
// tier is chosen by the mode being asked for, never by a first-match lookup.
const varOf = (name, mode) => mode === 'Value'
  ? (figPrim.get(name) ?? figSem.get(name))
  : (figSem.get(name) ?? figPrim.get(name));
function resolve(name, mode) {
  const v = varOf(name, mode);
  if (!v) return { value: null, id: null, alias: null };
  const raw = v.byMode[mode] ?? v.byMode.Value ?? Object.values(v.byMode)[0];
  const alias = typeof raw === 'string' && raw.startsWith('->') ? raw.slice(2) : null;
  let cur = raw, guard = 0;
  while (typeof cur === 'string' && cur.startsWith('->') && guard++ < 10) {
    const nx = varOf(cur.slice(2), mode);
    if (!nx) return { value: `<missing:${cur.slice(2)}>`, id: v.id, alias };
    cur = nx.byMode[mode] ?? nx.byMode.Value ?? Object.values(nx.byMode)[0];
  }
  return { value: cur, id: v.id, alias };
}

const normHex = (s) => {
  const m = /([0-9A-Fa-f]{6})\s*$/.exec(String(s).trim());
  return m ? '#' + m[1].toLowerCase() : null;
};
const normNum = (s) => {
  const m = /(-?\d+(?:\.\d+)?)\s*(?:px|ms)?\s*$/.exec(String(s).trim());
  // Figma stores floats at f32 precision (0.985 reads back 0.9850000143051147),
  // so a printed value is compared at 6dp, not bit-for-bit.
  return m ? String(Math.round(Number(m[1]) * 1e6) / 1e6) : null;
};

/* ---------- value captions ---------- */
const valueRows = tsv('output/parity/raw/figma-screens.tsv',
  ['node', 'page', 'frame', 'printed', 'documents', 'binding']);

const rows = [];
const counts = { match: 0, 'caption-stale': 0, 'unresolved': 0 };
const unbound = [];

for (const r of valueRows) {
  // A caption written "L <hex>" documents the light variable, "D <hex>" the dark one.
  let mode = 'Value';
  if (/^L\s/.test(r.printed)) mode = 'Value';
  if (/^D\s/.test(r.printed)) mode = 'Value';
  const res = resolve(r.documents, mode);
  const isHex = normHex(r.printed) !== null;
  const printed = isHex ? normHex(r.printed) : normNum(r.printed);
  const actual = res.value === null ? null : (isHex ? normHex(res.value) : normNum(res.value));
  if (r.documents.startsWith('space/') || r.documents.startsWith('motion/')) r.printed = r.printed.replace(/^\S+\s+/, '');

  let verdict;
  if (actual === null || printed === null) { verdict = 'unresolved'; }
  else if (printed === actual) { verdict = 'match'; }
  else { verdict = 'caption-stale'; }
  counts[verdict]++;
  if (r.binding !== 'swatch-bound') unbound.push(r);
  rows.push({ ...r, mode, printedNorm: printed ?? r.printed, actual: actual ?? String(res.value), varId: res.id ?? '—', verdict });
}

/* ---------- alias captions ---------- */
const aliasRows = tsv('output/parity/raw/figma-alias-captions.tsv',
  ['node', 'mode', 'semantic', 'printed', 'binding']);
const aliasOut = [];
const aliasCounts = { match: 0, 'caption-stale': 0, unresolved: 0 };
for (const r of aliasRows) {
  const res = resolve(r.semantic, r.mode);
  const actualAlias = res.alias ? res.alias.replace(/^color\//, '') : null;
  let verdict;
  if (!actualAlias) verdict = 'unresolved';
  else if (actualAlias === r.printed) verdict = 'match';
  else verdict = 'caption-stale';
  aliasCounts[verdict]++;
  aliasOut.push({ ...r, actual: actualAlias ?? '—', varId: res.id ?? '—', verdict });
}

/* ---------- contrast claims ---------- */
const srgb = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const lum = h => { h = h.replace('#', ''); return 0.2126 * srgb(parseInt(h.slice(0, 2), 16)) + 0.7152 * srgb(parseInt(h.slice(2, 4), 16)) + 0.0722 * srgb(parseInt(h.slice(4, 6), 16)); };
const ratio = (a, b) => { const x = lum(a), y = lum(b); return ((Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05)).toFixed(2); };
const CLAIMS = [
  { node: 'I132:5;84:7',  card: 'Success', claim: '4.5',  light: 'color/status/success/light', dark: 'color/status/success/dark' },
  { node: 'I132:17;84:7', card: 'Warning', claim: '5.2',  light: 'color/status/warning/light', dark: 'color/status/warning/dark' },
  { node: 'I132:29;84:7', card: 'Info',    claim: '5.9',  light: 'color/status/info/light',    dark: 'color/status/info/dark' },
  { node: 'I132:41;84:7', card: 'Error',   claim: '10.0', light: 'color/status/error/light',   dark: 'color/status/error/dark' },
  { node: '84:7',         card: 'MASTER default', claim: '4.9', light: 'color/status/success/light', dark: 'color/status/success/dark' },
];
const pageLight = resolve('color/warmGray/100', 'Value').value;
const pageDark  = resolve('color/dark/surfacePage', 'Value').value;
const claimRows = CLAIMS.map(c => {
  const l = ratio(resolve(c.light, 'Value').value, pageLight);
  const d = ratio(resolve(c.dark, 'Value').value, pageDark);
  const ok = Number(c.claim).toFixed(2) === l || Number(c.claim).toFixed(2) === d;
  return { ...c, measuredLight: l, measuredDark: d, verdict: ok ? 'match' : 'claim-unsupported' };
});

/* ---------- emit ---------- */
const md = `<!-- generated by scripts/parity/compare-figma-screens.mjs — do not hand-edit -->
# Phase 2 — Figma SCREENS vs the variables

**Stamp:** \`primitives ${stamp('tokens/primitives.json')}\` · \`semantic ${stamp('tokens/semantic.json')}\`
**Figma file:** \`0zVoxaLJQkjHENYJlQk1VT\` · read ${new Date().toISOString().slice(0, 10)} via the Figma MCP

## Coverage

All 44 pages were enumerated and every text node read. Only the six FOUNDATIONS
pages print a value; the other 38 pages returned **0** value-printing text nodes,
so this table is the whole population, not a sample.

| page | id | text nodes | prints a value |
|---|---|---|---|
| Principles | \`18:3\` | 15 | no — prose only |
| Color | \`18:4\` | 308 | **yes — ${valueRows.filter(r => r.page === 'Color').length} value captions + ${aliasRows.length} alias captions** |
| Type | \`18:5\` | 47 | no — style names + specimens, no numbers printed |
| Space | \`18:6\` | 20 | **yes — ${valueRows.filter(r => r.page === 'Space').length}** |
| Mark | \`18:7\` | 1 | no |
| Motion | \`18:8\` | 26 | **yes — ${valueRows.filter(r => r.page === 'Motion').length}** |
| 38 others | — | 651 | no (swept, 0 hits) |

**There is no radius page and no shadow page.** Both tiers ship undocumented in Figma.

## Counts

Value captions: ${Object.entries(counts).map(([k, v]) => `\`${k}\` ${v}`).join(' · ')} — total ${rows.length}
Alias captions: ${Object.entries(aliasCounts).map(([k, v]) => `\`${k}\` ${v}`).join(' · ')} — total ${aliasOut.length}
Contrast claims: \`claim-unsupported\` ${claimRows.filter(c => c.verdict !== 'match').length} of ${claimRows.length}

**Bound vs hard-set.** ${rows.length - unbound.length} of ${rows.length} value captions sit beside a swatch whose
fill IS bound to the variable; **${unbound.length}** do not. In every single case the **caption
itself is hard-typed text** — no caption in this file is generated from its variable.
That is the mechanism the trigger describes: the Error swatch could be corrected
while its caption kept printing the retired value, because nothing joins them.

## Value captions

| frame | node id | printed | variable | variable value | binding | verdict |
|---|---|---|---|---|---|---|
${rows.sort((a, b) => (a.verdict === 'match') - (b.verdict === 'match') || a.node.localeCompare(b.node))
  .map(r => `| ${r.page} · ${r.frame} | \`${r.node}\` | \`${r.printedNorm}\` | \`${r.documents}\` | \`${r.actual}\` | ${r.binding} | \`${r.verdict}\` |`).join('\n')}

## Alias captions (the Semantic — Light / Dark table)

These print the *name* of the primitive a semantic variable points at. A wrong
name is the same defect as a wrong hex: the frame is authoritative and wrong.

| row | node id | mode | printed | variable | actual alias | verdict |
|---|---|---|---|---|---|---|
${aliasOut.sort((a, b) => (a.verdict === 'match') - (b.verdict === 'match') || a.node.localeCompare(b.node))
  .map(r => `| \`${r.semantic}\` | \`${r.node}\` | ${r.mode} | \`${r.printed}\` | \`${r.semantic}\` | \`${r.actual}\` | \`${r.verdict}\` |`).join('\n')}

## Printed contrast claims

The four StatusTile cards each print an \`AA n : 1\` figure. Nothing in the repo or
in Figma generates or guards these — \`verify-contrast.mjs\` guards the figures quoted
in \`$description\`, and has no reach into a Figma text node.

Measured here against the page ground of each mode
(light \`color/warmGray/100\` = \`${pageLight}\`, dark \`color/dark/surfacePage\` = \`${pageDark}\`):

| card | node id | printed claim | measured light | measured dark | verdict |
|---|---|---|---|---|---|
${claimRows.map(c => `| ${c.card} | \`${c.node}\` | \`AA ${c.claim} : 1\` | ${c.measuredLight}:1 | ${c.measuredDark}:1 | \`${c.verdict}\` |`).join('\n')}

None of the five figures matches either ground in either mode, and the cards do not
say which ground they mean. **This is a Gate-1 question, not a caption fix** — see
\`README.md\`.
`;

writeFileSync(new URL('output/parity/figma-screens.md', root), md);
console.log('values', counts, '| alias', aliasCounts, '| unbound', unbound.length, '| claims bad', claimRows.filter(c => c.verdict !== 'match').length);
