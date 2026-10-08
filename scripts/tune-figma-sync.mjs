#!/usr/bin/env node
/**
 * tune-figma-sync — turn a token change into the Figma library update.
 *
 *   node scripts/tune-figma-sync.mjs --since <git-ref> [--out <dir>]
 *   node scripts/tune-figma-sync.mjs --tokens <a,b,c> [--out <dir>]
 *
 * --since compares tokens/semantic.json and tokens/primitives.json at
 * <git-ref> with the working tree and emits an op for every token that
 * changed. --tokens emits an op for each named token, changed or not: token
 * paths (color.segmentedControl.track) or library names
 * (color/segmentedControl/track, shadow/x/dark/y, text/label/button-lg), so
 * the `absent` list a run returns can be pasted straight back in. The two
 * can be combined. Writes two files to <dir> (default
 * `output/tuning/.exports/`):
 *
 *   figma-sync.js  plain Plugin API code for one `use_figma` call on the
 *                  SCDS library (0zVoxaLJQkjHENYJlQk1VT). Idempotent: it
 *                  finds each variable or style by name, creates it when
 *                  missing, sets the new values, and returns
 *                  { done, created, absent, missing }.
 *   figma-sync.md  the ops as a table, the tokens with no Figma analogue,
 *                  and what to do with the result.
 *
 * The library is read, never guessed. The diff says what changed in code; it
 * cannot say what the library holds. Every call carries the names of all
 * library-syncable tokens and returns `absent`: the ones the library lacks
 * (2026-10-07: SegmentedControl role tokens created at 0 in one commit and
 * changed in the next were never in the library, and the diff-only version
 * reported "every change updates a token the library already binds").
 * `created` lists what the run made; those, and only those, need binding on
 * the masters by hand, because no token file says which master reads a token.
 *
 * Library naming (verified against the file 2026-10-07; the documented exceptions,
 * flat ink tier, onInverse, release-duration, body/nav text styles, live in
 * scripts/figma-names.mjs):
 *   variable      token path with "/" for "."      color/control/keyShade
 *                 (reported as Primitives:<name> for the Primitives collection)
 *                 collections "Primitives" (mode "Value") and
 *                 "Semantic" (modes "Light", "Dark"); a duration is a FLOAT
 *                 in ms, as motion/reveal/duration is
 *   text style    "text/" + path after font.text,  text/label/button-lg
 *                 camelCase segments in kebab
 *   effect style  "shadow/<group>/<name>" for light, shadow/control/key
 *                 "shadow/<group>/dark/<name>" for   shadow/control/dark/key
 *                 dark (styles carry no modes)
 * Code only (no Figma analogue, listed in the report): spring, cubicBezier,
 * fontFamily and fontWeight tokens.
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { variableName, textStyleName } from './figma-names.mjs';

const root = resolve(import.meta.dirname, '..');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const since = arg('--since');
const named = (arg('--tokens', '') || '').split(',').map((x) => x.trim()).filter(Boolean);
if (!since && !named.length) { console.error('usage: tune-figma-sync.mjs (--since <git-ref> | --tokens <a,b,c>) [--out <dir>]'); process.exit(1); }
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
const semNew = flatten(now('tokens/semantic.json'));
const primNew = flatten(now('tokens/primitives.json'));
const semOld = since ? flatten(at(since, 'tokens/semantic.json')) : semNew;
const primOld = since ? flatten(at(since, 'tokens/primitives.json')) : primNew;

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

/* ---------- library names and scopes ---------- */
const VARIABLE_TYPES = ['color', 'dimension', 'number', 'duration'];
// Library names come from scripts/figma-names.mjs, shared with the parity checks.
const varName = variableName;
const textName = textStyleName;
const effectNames = (path) => {
  const seg = path.split('.');
  return [`shadow/${seg.slice(1).join('/')}`, `shadow/${seg.slice(1, -1).join('/')}/dark/${seg.at(-1)}`];
};
// What a newly created variable may be bound to. Explicit, never ALL_SCOPES;
// an existing variable keeps the scopes it has.
function scopesFor(path, type) {
  if (type === 'color') {
    if (/(^|\.)(text|ink)(\.|$)|Ink$/.test(path)) return ['TEXT_FILL'];
    if (/^color\.(border|divider)\./.test(path)) return ['STROKE_COLOR'];
    return ['FRAME_FILL', 'SHAPE_FILL'];
  }
  if (type === 'dimension') {
    if (/^size\./.test(path)) return ['WIDTH_HEIGHT'];
    if (/^radius\./.test(path)) return ['CORNER_RADIUS'];
    if (/^border\.width/.test(path)) return ['STROKE_FLOAT'];
    if (/^space\./.test(path)) return /gap/i.test(path) ? ['GAP'] : ['GAP', 'WIDTH_HEIGHT'];
  }
  return []; // numbers and durations (motion) stay out of every picker
}
// A duration literal is { value, unit } or "600ms"; the library keeps ms.
const durationMs = (v) => {
  if (v && typeof v === 'object' && 'value' in v) return v.unit === 's' ? v.value * 1000 : Number(v.value);
  const m = String(deref(String(v))).match(/^([\d.]+)(ms|s)$/);
  return m ? (m[2] === 's' ? +m[1] * 1000 : +m[1]) : NaN;
};
const literal = (type, v) => type === 'color' ? { color: parseColor(v) }
  : type === 'duration' ? { number: durationMs(v) }
  : { number: v && typeof v === 'object' && 'value' in v ? Number(v.value) : parseFloat(deref(String(v))) };

/* Every library-syncable token, by library name, and back to its path. */
const manifest = { variables: [], effects: [], texts: [] };
const byLibraryName = {};
// Primitives and Semantic share names (color/signal/live is in both), so a
// variable is checked in its own collection: primitives as "Primitives:<name>".
// A channel triplet ("26 24 21", composed as rgb(var(--sc-p-…-rgb) / A)) is
// not a colour a Figma variable can hold: code-only. Its compositions sync
// as resolved colours.
const isTriplet = (t) => t.$type === 'color' && /^\d{1,3} \d{1,3} \d{1,3}$/.test(String(t.$value).trim());
for (const [path, t] of Object.entries(primNew)) {
  if (!VARIABLE_TYPES.includes(t.$type) || isTriplet(t)) continue;
  const n = `Primitives:${varName(path)}`;
  manifest.variables.push(n); byLibraryName[n] = path;
}
for (const [path, t] of Object.entries(semNew)) {
  if (VARIABLE_TYPES.includes(t.$type)) { manifest.variables.push(varName(path)); byLibraryName[varName(path)] = path; }
  else if (t.$type === 'shadow') for (const n of effectNames(path)) { manifest.effects.push(n); byLibraryName[n] = path; }
  else if (t.$type === 'typography' && path.startsWith('font.text.')) { manifest.texts.push(textName(path)); byLibraryName[textName(path)] = path; }
}

/* ---------- build the change list ---------- */
const ops = []; const rows = []; const codeOnly = []; const unknown = [];
function semanticOps(path, t) {
  const m = modesOf(t);
  const type = t.$type;
  if (type === 'shadow') {
    const [light, dark] = effectNames(path);
    // A shadow may alias another semantic shadow (the Stepper keys alias the
    // Button's); effect styles carry no aliases, so sync the target's layers.
    const layersOf = (v, mode) => {
      const target = refPath(v) && semNew[refPath(v)];
      return target ? layersOf(modesOf(target)[mode], mode) : parseShadow(v);
    };
    ops.push({ kind: 'effect', name: light, effects: layersOf(m.light, 'light'), desc: t.$description });
    ops.push({ kind: 'effect', name: dark, effects: layersOf(m.dark, 'dark'), desc: `Dark-mode value of ${light} (styles carry no modes).` });
    rows.push([path, 'effect styles', `${light}, ${dark}`]);
  } else if (type === 'typography') {
    const name = textName(path);
    ops.push({ kind: 'text', name, ...composite(m.light), desc: t.$description });
    rows.push([path, 'text style', name]);
  } else if (VARIABLE_TYPES.includes(type)) {
    const name = varName(path);
    const vals = {};
    for (const [mode, v] of Object.entries(m)) {
      const r = refPath(v);
      // Names repeat across collections (color/signal/live), so an alias names its target's.
      vals[mode === 'light' ? 'Light' : 'Dark'] = r ? { alias: varName(r), collection: primNew[r] ? 'Primitives' : 'Semantic' } : literal(type, v);
    }
    ops.push({ kind: 'variable', collection: 'Semantic', name, type: type === 'color' ? 'COLOR' : 'FLOAT', values: vals, scopes: scopesFor(path, type), desc: t.$description, web: `var(--sc-${path.replace(/\./g, '-').replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)})` });
    rows.push([path, 'variable', name]);
  } else codeOnly.push([path, type]);
}
function primitiveOps(path, t) {
  if (t.$type === 'typography') return; // compositions live on text styles
  if (!VARIABLE_TYPES.includes(t.$type)) { codeOnly.push([path, t.$type]); return; }
  if (isTriplet(t)) { codeOnly.push([path, 'channel triplet']); return; }
  const value = literal(t.$type, t.$value);
  if (value.number !== undefined && Number.isNaN(value.number)) { codeOnly.push([path, `${t.$type} (unparsed value)`]); return; }
  ops.push({ kind: 'variable', collection: 'Primitives', name: varName(path), type: t.$type === 'color' ? 'COLOR' : 'FLOAT', values: { Value: value }, scopes: scopesFor(path, t.$type), desc: t.$description });
  rows.push([path, 'primitive variable', varName(path)]);
}
const wanted = new Set();
if (since) {
  for (const [path, t] of Object.entries(semNew)) if (!semOld[path] || !same(modesOf(semOld[path]), modesOf(t))) wanted.add(path);
  for (const [path, t] of Object.entries(primNew)) if (!primOld[path] || !same(primOld[path].$value, t.$value)) wanted.add(path);
}
for (const n of named) {
  const dotted = n.replace(/^Primitives:/, '').replace(/\//g, '.');
  const path = byLibraryName[n] ?? (semNew[n] || primNew[n] ? n : semNew[dotted] || primNew[dotted] ? dotted : null);
  if (path) wanted.add(path); else unknown.push(n);
}
for (const path of wanted) {
  if (semNew[path]) semanticOps(path, semNew[path]);
  else if (primNew[path]) primitiveOps(path, primNew[path]);
}
if (unknown.length) { console.error(`tune-figma-sync: no token for ${unknown.join(', ')}`); process.exit(1); }

/* ---------- emit ---------- */
const code = `// figma-sync · generated by scripts/tune-figma-sync.mjs${since ? ` --since ${since}` : ''}${named.length ? ` --tokens ${named.join(',')}` : ''}
// One use_figma call on file 0zVoxaLJQkjHENYJlQk1VT. Safe to re-run.
// Returns { done, created, absent, missing }: bind \`created\` on the masters by hand;
// \`absent\` is every token in code the library still lacks (see figma-sync.md).
const OPS = ${JSON.stringify(ops)};
const MANIFEST = ${JSON.stringify(manifest)};
const cols = await figma.variables.getLocalVariableCollectionsAsync();
const col = (n) => cols.find((c) => c.name === n);
let vars = await figma.variables.getLocalVariablesAsync();
const byName = (n) => vars.find((v) => v.name === n);
const texts = await figma.getLocalTextStylesAsync();
const effects = await figma.getLocalEffectStylesAsync();
const colName = Object.fromEntries(cols.map((c) => [c.id, c.name]));
const key = (collection, name) => (collection === 'Primitives' ? 'Primitives:' : '') + name;
const has = { variables: new Set(vars.map((v) => key(colName[v.variableCollectionId], v.name))), effects: new Set(effects.map((e) => e.name)), texts: new Set(texts.map((t) => t.name)) };
const done = [], created = [], missing = [];
for (const op of OPS) {
  if (op.kind === 'variable') {
    const c = col(op.collection);
    let v = vars.find((x) => x.name === op.name && x.variableCollectionId === c.id);
    if (!v) { v = figma.variables.createVariable(op.name, c, op.type); vars.push(v); v.scopes = op.scopes; created.push(key(op.collection, op.name)); has.variables.add(key(op.collection, op.name)); }
    for (const m of c.modes) {
      const x = op.values[m.name] ?? op.values.Light ?? op.values.Value;
      if (!x) continue;
      if (x.alias) { const a = vars.find((y) => y.name === x.alias && colName[y.variableCollectionId] === x.collection) ?? byName(x.alias); if (!a) { missing.push(op.name + ' → ' + x.alias); continue; } v.setValueForMode(m.modeId, figma.variables.createVariableAlias(a)); }
      else if (x.color) v.setValueForMode(m.modeId, x.color);
      else v.setValueForMode(m.modeId, x.number);
    }
    if (op.desc) v.description = op.desc.slice(0, 500);
    if (op.web) v.setVariableCodeSyntax('WEB', op.web);
    done.push(op.name);
  } else if (op.kind === 'effect') {
    let s = effects.find((e) => e.name === op.name);
    if (!s) { s = figma.createEffectStyle(); s.name = op.name; effects.push(s); created.push(op.name); has.effects.add(op.name); }
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
const absent = [
  ...MANIFEST.variables.filter((n) => !has.variables.has(n)),
  ...MANIFEST.effects.filter((n) => !has.effects.has(n)),
  ...MANIFEST.texts.filter((n) => !has.texts.has(n)),
];
return { done, created, absent, missing };
`;
mkdirSync(out, { recursive: true });
writeFileSync(resolve(out, 'figma-sync.js'), code);
const md = [
  `# Figma sync${since ? ` since \`${since}\`` : ''}${named.length ? ` for ${named.length} named token(s)` : ''}`, '',
  `${ops.length} operations for one \`use_figma\` call (\`figma-sync.js\`).`, '',
  ...(rows.length ? ['| Token | Figma kind | Figma name |', '| --- | --- | --- |', ...rows.map((r) => `| \`${r[0]}\` | ${r[1]} | \`${r[2]}\` |`), ''] : []),
  '## Code only', '',
  codeOnly.length ? 'These have no Figma analogue (a spring, an easing, a font family or weight) and are not synced:' : 'None in this change.', '',
  ...codeOnly.map(([p, t]) => `- \`${p}\` (${t})`), ...(codeOnly.length ? [''] : []),
  '## After the call', '',
  'The call reads the library; this file cannot. Act on what it returns:', '',
  '- `created`: variables and effect styles this run made. Bind each on the masters that read it (fill, gap, size, effect style). No token file says which master reads a token, so this step is by hand, and only for these names.',
  '- `absent`: tokens in code that the library still lacks, whether or not this change touched them. For each one either sync it, `node scripts/tune-figma-sync.mjs --tokens <the absent names, comma-separated>`, run that call and bind its `created`, or confirm it is code-only on purpose and say so in the decision entry.',
  '- `missing`: an alias target or text style the call could not find. Create it first, then re-run; the call is idempotent.',
  '',
].join('\n');
writeFileSync(resolve(out, 'figma-sync.md'), md);
console.log(`figma-sync: ${ops.length} ops, ${manifest.variables.length + manifest.effects.length + manifest.texts.length} library names checked, ${codeOnly.length} code-only → ${out}/figma-sync.js`);
