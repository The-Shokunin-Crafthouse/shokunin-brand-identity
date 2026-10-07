#!/usr/bin/env node
/**
 * tune-figma-sync — turn a token change into the Figma library update.
 *
 *   node scripts/tune-figma-sync.mjs --since <git-ref> [--out <dir>]
 *
 * Compares tokens/semantic.json and tokens/primitives.json at <git-ref>
 * with the working tree and writes two files to <dir> (default: the
 * scratchpad-free `output/tuning/.exports/`):
 *
 *   figma-sync.js  plain Plugin API code for one `use_figma` call on the
 *                  SCDS library (0zVoxaLJQkjHENYJlQk1VT). Idempotent: it
 *                  finds each variable or style by name, creates it when
 *                  missing, sets the new values, and returns a readback.
 *   figma-sync.md  the same changes as a table, for the report.
 *
 * Library naming (verified against the file 2026-10-07):
 *   variable      token path with "/" for "."      color/control/keyShade
 *                 collections "Primitives" (mode "Value") and
 *                 "Semantic" (modes "Light", "Dark")
 *   text style    "text/" + path after font.text,  text/label/button-lg
 *                 camelCase segments in kebab
 *   effect style  "shadow/<group>/<name>" for light, shadow/control/key
 *                 "shadow/<group>/dark/<name>" for   shadow/control/dark/key
 *                 dark (styles carry no modes)
 *
 * What it cannot do: bind a NEW token to the component that should read it.
 * A role token that replaces a shared one (padding, gap) still needs its
 * bindings on the masters; the .md lists every new token under "Bind by
 * hand" so that step is never silent.
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const since = arg('--since');
if (!since) { console.error('usage: tune-figma-sync.mjs --since <git-ref> [--out <dir>]'); process.exit(1); }
const out = resolve(root, arg('--out', 'output/tuning/.exports'));

const at = (ref, file) => JSON.parse(execFileSync('git', ['show', `${ref}:${file}`], { cwd: root, encoding: 'utf8' }));
const now = (file) => JSON.parse(readFileSync(resolve(root, file), 'utf8'));

function flatten(tree, prefix = [], acc = {}) {
  for (const [k, v] of Object.entries(tree)) {
    if (k.startsWith('$') || v === null || typeof v !== 'object') continue;
    if ('$value' in v) acc[[...prefix, k].join('.')] = v;
    else flatten(v, [...prefix, k], acc);
  }
  return acc;
}
const semOld = flatten(at(since, 'tokens/semantic.json'));
const semNew = flatten(now('tokens/semantic.json'));
const primOld = flatten(at(since, 'tokens/primitives.json'));
const primNew = flatten(now('tokens/primitives.json'));

// Resolve var(--sc-p-…) and channel triplets from the built CSS.
const css = readFileSync(resolve(root, 'src/styles/tokens.css'), 'utf8');
const pvars = {};
for (const [, n, v] of css.matchAll(/(--sc-p-[a-z0-9-]+):\s*([^;]+);/g)) if (!(n in pvars)) pvars[n] = v.trim();
const deref = (s) => { let x = s; for (let i = 0; i < 5; i++) x = x.replace(/var\((--sc-p-[a-z0-9-]+)\)/g, (_, n) => pvars[n] ?? _); return x; };

const modesOf = (t) => t.$extensions?.modes ?? { light: t.$value, dark: t.$value };
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const kebab = (s) => s.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
const refPath = (v) => (typeof v === 'string' && /^\{[^}]+\}$/.test(v) ? v.slice(1, -1) : null);

/* ---------- colour and shadow parsing ---------- */
function parseColor(s) {
  const c = deref(s.trim());
  let m = c.match(/^#([0-9a-f]{6})([0-9a-f]{2})?$/i);
  if (m) { const n = parseInt(m[1], 16); return { r: (n >> 16 & 255) / 255, g: (n >> 8 & 255) / 255, b: (n & 255) / 255, a: m[2] ? parseInt(m[2], 16) / 255 : 1 }; }
  m = c.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[/,]\s*([\d.]+))?\s*\)$/);
  if (m) return { r: +m[1] / 255, g: +m[2] / 255, b: +m[3] / 255, a: m[4] === undefined ? 1 : +m[4] };
  throw new Error(`unparsed colour: ${s} → ${c}`);
}
function splitTop(s) {
  const parts = []; let depth = 0, cur = '';
  for (const ch of s) { if (ch === '(') depth++; if (ch === ')') depth--; if (ch === ',' && depth === 0) { parts.push(cur); cur = ''; } else cur += ch; }
  if (cur.trim()) parts.push(cur);
  return parts.map((p) => p.trim());
}
function parseShadow(s) {
  return splitTop(deref(s)).map((layer) => {
    const inset = /\binset\b/.test(layer);
    const colorStr = layer.match(/(rgba?\([^)]*\)|#[0-9a-f]{3,8})/i)?.[0];
    const nums = layer.replace(colorStr, '').replace('inset', '').trim().split(/\s+/).filter(Boolean).map(parseFloat);
    const [x = 0, y = 0, blur = 0, spread = 0] = nums;
    const color = parseColor(colorStr);
    return inset
      ? { type: 'INNER_SHADOW', color, offset: { x, y }, radius: blur, spread, visible: true, blendMode: 'NORMAL' }
      : { type: 'DROP_SHADOW', color, offset: { x, y }, radius: blur, spread, visible: true, blendMode: 'NORMAL', showShadowBehindNode: false };
  });
}

/* ---------- typography ---------- */
function composite(v) {
  const p = refPath(v);
  const node = p ? (primNew[p] ?? semNew[p]) : null;
  const val = node ? node.$value : v;
  const prim = (ref) => primNew[refPath(ref)]?.$value;
  const lh = prim(val.lineHeight);
  const ls = prim(val.letterSpacing);
  return {
    fontSizeVar: refPath(val.fontSize)?.replace(/\./g, '/'),
    lineHeight: { unit: 'PERCENT', value: +(Number(lh) * 100).toFixed(2) },
    letterSpacing: { unit: 'PERCENT', value: +((ls?.value ?? 0) * 100).toFixed(2) },
  };
}

/* ---------- build the change list ---------- */
const ops = []; const rows = []; const created = [];
for (const [path, t] of Object.entries(semNew)) {
  const old = semOld[path];
  const m = modesOf(t);
  if (old && same(modesOf(old), m)) continue;
  if (!old) created.push(path);
  const type = t.$type;
  if (type === 'shadow') {
    const seg = path.split('.');
    const light = `shadow/${seg.slice(1).join('/')}`;
    const dark = `shadow/${seg.slice(1, -1).join('/')}/dark/${seg.at(-1)}`;
    ops.push({ kind: 'effect', name: light, effects: parseShadow(m.light), desc: t.$description });
    ops.push({ kind: 'effect', name: dark, effects: parseShadow(m.dark), desc: `Dark-mode value of ${light} (styles carry no modes).` });
    rows.push([path, 'effect styles', `${light}, ${dark}`]);
  } else if (type === 'typography') {
    const name = `text/${path.replace(/^font\.text\./, '').split('.').map(kebab).join('/')}`;
    ops.push({ kind: 'text', name, ...composite(m.light), desc: t.$description });
    rows.push([path, 'text style', name]);
  } else if (['color', 'dimension', 'number'].includes(type)) {
    const name = path.replace(/\./g, '/');
    const vals = {};
    for (const [mode, v] of Object.entries(m)) {
      const r = refPath(v);
      vals[mode === 'light' ? 'Light' : 'Dark'] = r ? { alias: r.replace(/\./g, '/') } : type === 'color' ? { color: parseColor(v) } : { number: v && typeof v === 'object' && 'value' in v ? Number(v.value) : parseFloat(deref(String(v))) };
    }
    ops.push({ kind: 'variable', collection: 'Semantic', name, type: type === 'color' ? 'COLOR' : 'FLOAT', values: vals, desc: t.$description, web: `var(--sc-${path.replace(/\./g, '-').replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)})` });
    rows.push([path, 'variable', name]);
  }
}
for (const [path, t] of Object.entries(primNew)) {
  if (primOld[path] && same(primOld[path].$value, t.$value)) continue;
  if (t.$type === 'typography') continue; // compositions live on text styles
  const v = t.$value;
  const value = t.$type === 'color' ? { color: parseColor(v) } : { number: typeof v === 'object' ? v.value : Number(v) };
  if (value.number !== undefined && Number.isNaN(value.number)) continue;
  ops.push({ kind: 'variable', collection: 'Primitives', name: path.replace(/\./g, '/'), type: t.$type === 'color' ? 'COLOR' : 'FLOAT', values: { Value: value }, desc: t.$description });
  rows.push([path, 'primitive variable', path.replace(/\./g, '/')]);
  if (!primOld[path]) created.push(path);
}

/* ---------- emit ---------- */
const code = `// figma-sync · generated by scripts/tune-figma-sync.mjs --since ${since}
// One use_figma call on file 0zVoxaLJQkjHENYJlQk1VT. Safe to re-run.
const OPS = ${JSON.stringify(ops)};
const cols = await figma.variables.getLocalVariableCollectionsAsync();
const col = (n) => cols.find((c) => c.name === n);
let vars = await figma.variables.getLocalVariablesAsync();
const byName = (n) => vars.find((v) => v.name === n);
const texts = await figma.getLocalTextStylesAsync();
const effects = await figma.getLocalEffectStylesAsync();
const done = [], missing = [];
for (const op of OPS) {
  if (op.kind === 'variable') {
    const c = col(op.collection);
    let v = byName(op.name);
    if (!v) { v = figma.variables.createVariable(op.name, c, op.type); vars.push(v); done.push('created ' + op.name); }
    for (const m of c.modes) {
      const x = op.values[m.name] ?? op.values.Light ?? op.values.Value;
      if (!x) continue;
      if (x.alias) { const a = byName(x.alias); if (!a) { missing.push(op.name + ' → ' + x.alias); continue; } v.setValueForMode(m.modeId, figma.variables.createVariableAlias(a)); }
      else if (x.color) v.setValueForMode(m.modeId, x.color);
      else v.setValueForMode(m.modeId, x.number);
    }
    if (op.desc) v.description = op.desc.slice(0, 500);
    if (op.web) v.setVariableCodeSyntax('WEB', op.web);
    done.push(op.name);
  } else if (op.kind === 'effect') {
    let s = effects.find((e) => e.name === op.name);
    if (!s) { s = figma.createEffectStyle(); s.name = op.name; done.push('created ' + op.name); }
    s.effects = op.effects; if (op.desc) s.description = op.desc.slice(0, 500);
    done.push(op.name);
  } else if (op.kind === 'text') {
    const s = texts.find((e) => e.name === op.name);
    if (!s) { missing.push('text style ' + op.name + ' (create it from its sibling first)'); continue; }
    await figma.loadFontAsync(s.fontName);
    if (op.fontSizeVar) { const fv = byName(op.fontSizeVar); if (fv) s.setBoundVariable('fontSize', fv); else missing.push(op.name + ' fontSize → ' + op.fontSizeVar); }
    s.lineHeight = op.lineHeight; s.letterSpacing = op.letterSpacing;
    if (op.desc) s.description = op.desc.slice(0, 500);
    done.push(op.name);
  }
}
return { done, missing };
`;
mkdirSync(out, { recursive: true });
writeFileSync(resolve(out, 'figma-sync.js'), code);
const md = [`# Figma sync since \`${since}\``, '', `${ops.length} operations for one \`use_figma\` call (\`figma-sync.js\`).`, '',
  '| Token | Figma kind | Figma name |', '| --- | --- | --- |', ...rows.map((r) => `| \`${r[0]}\` | ${r[1]} | \`${r[2]}\` |`), '',
  '## Bind by hand', '', created.length ? 'New tokens. The sync creates them; binding each to the masters that read it is a separate step:' : 'None: every change updates a token the library already binds.', '',
  ...created.map((p) => `- \`${p}\``), ''].join('\n');
writeFileSync(resolve(out, 'figma-sync.md'), md);
console.log(`figma-sync: ${ops.length} ops (${created.length} new tokens) → ${out}/figma-sync.js`);
