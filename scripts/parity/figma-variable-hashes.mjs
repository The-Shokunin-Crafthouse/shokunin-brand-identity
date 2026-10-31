// Figma variables vs tokens/*.json, by group hash. Companion to
// compare-figma-variables.mjs for a live read that is too big to paste as TSV.
//
//   node scripts/parity/figma-variable-hashes.mjs                 JSON-side group hashes
//   node scripts/parity/figma-variable-hashes.mjs --figma <file>  diff against a Figma read
//   node scripts/parity/figma-variable-hashes.mjs --rows <group>  JSON-side rows of one group
//
// A row is "<collection>|<name>|<mode>|<resolved value>"; a group is the
// collection plus the first two name segments. Both sides resolve alias chains
// fully and normalise values the same way, so alias-vs-literal is not drift.
// The Figma read is the snippet in figma-variable-hashes.figma.js, run through
// use_figma; its JSON result is the <file> argument. Code-only tiers (composites,
// cubic-bezier) and the font.family.* standing exception are skipped on both sides.
import { readFileSync } from 'node:fs';
import { VARIABLE_NAMES } from '../figma-names.mjs';

const root = new URL('../../', import.meta.url);
const j = (p) => JSON.parse(readFileSync(new URL(p, root), 'utf8'));
const prim = j('tokens/primitives.json'), sem = j('tokens/semantic.json');
const jp = new Map(), js = new Map();
(function walk(n, path, map) {
  if (n === null || typeof n !== 'object') return;
  if ('$value' in n) {
    const m = n.$extensions?.modes;
    map.set(path.join('.'), { type: n.$type ?? '', byMode: m && typeof m === 'object' ? { ...m } : { Value: n.$value } });
    return;
  }
  for (const [k, v] of Object.entries(n)) if (!k.startsWith('$')) walk(v, [...path, k], map);
})(prim, [], jp);
(function walk(n, path, map) {
  if (n === null || typeof n !== 'object') return;
  if ('$value' in n) {
    const m = n.$extensions?.modes;
    map.set(path.join('.'), { type: n.$type ?? '', byMode: m && typeof m === 'object' ? { ...m } : { Value: n.$value } });
    return;
  }
  for (const [k, v] of Object.entries(n)) if (!k.startsWith('$')) walk(v, [...path, k], map);
})(sem, [], js);

function res(v, mode, seen = new Set()) {
  if (typeof v !== 'string') return v;
  const m = /^\{([^}]+)\}$/.exec(v.trim());
  if (!m) return v;
  if (seen.has(m[1])) return `<cycle:${m[1]}>`;
  seen.add(m[1]);
  const t = jp.get(m[1]) ?? js.get(m[1]);
  if (!t) return `<missing:${m[1]}>`;
  return res(t.byMode[mode] ?? t.byMode.Value ?? Object.values(t.byMode)[0], mode, seen);
}
const triplet = (s) => {
  const m = /^rgb\(\s*var\(--sc-p-color-(\w+)-rgb\)\s*\/\s*([0-9.]+)\s*\)$/.exec(String(s).trim());
  const t = m && jp.get({ ink: 'color.inkRgb', white: 'color.whiteRgb', black: 'color.blackRgb' }[m[1]]);
  if (!t) return null;
  const c = String(t.byMode.Value).trim().split(/\s+/).map(Number);
  const h = (n) => Math.round(n).toString(16).padStart(2, '0');
  return '#' + c.map(h).join('') + h(Number(m[2]) * 255);
};
export function norm(v) {
  if (v === null || v === undefined) return '';
  if (typeof v === 'object' && 'value' in v && 'unit' in v) v = v.value;
  const c = triplet(v); if (c) return c;
  const s = String(v).trim();
  if (/^#[0-9a-fA-F]{6,8}$/.test(s)) return s.toLowerCase();
  const n = Number(s);
  return s !== '' && Number.isFinite(n) ? String(Math.round(n * 1e6) / 1e6) : s;
}
const codeOnly = (p, t) => ['typography', 'shadow', 'cubicBezier', 'spring'].includes(t) || p.startsWith('motion.easing.') || p.endsWith('.easing');
const FONT = new Set(['font.family.sans', 'font.family.display', 'font.family.text', 'font.family.mono']);
const MODE = { light: 'Light', dark: 'Dark', Value: 'Value' };

export const jsonRows = [];
for (const [coll, map] of [['Primitives', jp], ['Semantic', js]]) {
  for (const [p, t] of map) {
    if (codeOnly(p, t.type) || FONT.has(p)) continue;
    const name = VARIABLE_NAMES[p] ?? p.replaceAll('.', '/');
    for (const [mode, raw] of Object.entries(t.byMode)) jsonRows.push(`${coll}|${name}|${MODE[mode] ?? mode}|${norm(res(raw, mode))}`);
  }
}
const group = (r) => { const [c, n] = r.split('|'); return `${c}|${n.split('/').slice(0, 2).join('/')}`; };
const fnv = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); };
export function hashes(rows) {
  const g = {};
  for (const r of [...rows].sort()) (g[group(r)] ??= []).push(r);
  return Object.fromEntries(Object.entries(g).map(([k, v]) => [k, `${v.length}:${fnv(v.join('\n'))}`]));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const a = process.argv.slice(2);
  const jh = hashes(jsonRows);
  if (a[0] === '--rows') console.log(jsonRows.filter((r) => group(r) === a[1]).sort().join('\n'));
  else if (a[0] === '--figma') {
    const fh = JSON.parse(readFileSync(a[1], 'utf8'));
    const keys = [...new Set([...Object.keys(jh), ...Object.keys(fh)])].sort();
    const bad = keys.filter((k) => jh[k] !== fh[k]);
    for (const k of bad) console.log(`DIFF ${k}  json=${jh[k] ?? '—'}  figma=${fh[k] ?? '—'}`);
    console.log(`${keys.length} groups, ${jsonRows.length} json rows, ${bad.length} differing groups`);
    process.exit(bad.length ? 1 : 0);
  } else console.log(JSON.stringify(jh));
}
