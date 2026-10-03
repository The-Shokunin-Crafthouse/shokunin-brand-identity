// figma-plugin-check.mjs — tokens/*.json vs the live SCDS Figma library, in one plugin call.
//
// WHY THIS EXISTS
// The library's variables are not readable from CI: Figma's Variables REST API is
// Enterprise-only and the studio is on Professional. The plugin API can read them, so
// the check runs where the plugin API runs — one `use_figma` call against the library
// file — and this script writes that call. It embeds the expected values resolved from
// tokens/*.json, so the plugin compares and returns only the disagreements.
//
// DIRECTION
// tokens/*.json is upstream (decisions.md 2026-08-17). A row this reports is Figma
// drifting from the JSON; it is fixed in Figma, never by editing the JSON to match.
//
// WHAT IT CHECKS
//   - every Primitives / Semantic variable value, per mode, aliases resolved
//   - every font.text.* composite against its Figma text style
//   - every shadow.* composite against its Figma effect style (light, and dark/)
// It reuses compare-figma-variables.mjs's NAME_MAP verbatim, so the two checks can
// never disagree on a name. font.family.* stays the standing exception (Trial faces
// in Figma, licensed stacks in the repo; decisions.md 2026-08-16).
//
// USE
//   node scripts/parity/figma-plugin-check.mjs > /tmp/scds-check.js
//   then run the file's contents as one `use_figma` call on file 0zVoxaLJQkjHENYJlQk1VT.
//   The call returns { verdict: "in-sync" | "drift", ... }. Run it after every library
//   publish and after every tokens/ change; the reader is the session that publishes.
import { readFileSync } from 'node:fs';

const root = new URL('../../', import.meta.url);
const j = (p) => JSON.parse(readFileSync(new URL(p, root), 'utf8'));
const prim = j('tokens/primitives.json');
const sem = j('tokens/semantic.json');

const parity = readFileSync(new URL('scripts/parity/compare-figma-variables.mjs', root), 'utf8');
const NAME_MAP = Function(`return (${/const NAME_MAP = (\{[\s\S]*?\n\});/.exec(parity)[1]})`)();

/* ---------- resolve ---------- */
const jp = new Map(), js = new Map();
function walk(n, path, map) {
  if (!n || typeof n !== 'object') return;
  if ('$value' in n) {
    const m = n.$extensions?.modes;
    map.set(path.join('.'), { type: n.$type ?? '', value: n.$value, byMode: m && typeof m === 'object' ? { ...m } : { Value: n.$value } });
    return;
  }
  for (const [k, v] of Object.entries(n)) if (!k.startsWith('$')) walk(v, [...path, k], map);
}
walk(prim, [], jp); walk(sem, [], js);
const get = (p) => jp.get(p) ?? js.get(p);
function res(v, mode, seen = new Set()) {
  if (typeof v !== 'string') return v;
  const m = /^\{([^}]+)\}$/.exec(v.trim());
  if (!m) return v;
  if (seen.has(m[1])) return `<cycle:${m[1]}>`;
  seen.add(m[1]);
  const t = get(m[1]);
  if (!t) return `<missing:${m[1]}>`;
  return res(t.byMode[mode] ?? t.byMode.Value ?? t.value, mode, seen);
}
const triplet = (name) => String(jp.get(`color.${name}Rgb`).byMode.Value).trim().split(/\s+/).map(Number);
const h2 = (n) => Math.round(n).toString(16).padStart(2, '0');
function composeRgb(s) {
  const m = /^rgb\(\s*var\(--sc-p-color-(\w+)-rgb\)\s*\/\s*([0-9.]+)\s*\)$/.exec(String(s).trim());
  return m ? '#' + triplet(m[1]).map(h2).join('') + h2(Number(m[2]) * 255) : null;
}
const norm = (v) => {
  if (v && typeof v === 'object' && 'value' in v) v = v.value;
  const c = composeRgb(v); if (c) return c;
  const s = String(v).trim();
  if (/^#[0-9a-fA-F]{6,8}$/.test(s)) return s.toLowerCase();
  const n = Number(s);
  return s !== '' && Number.isFinite(n) ? String(Math.round(n * 1e6) / 1e6) : s;
};
const MODE = { light: 'Light', dark: 'Dark', Value: 'Value' };

/* ---------- variables ---------- */
const vars = [];
for (const [tier, map] of [['P', jp], ['S', js]]) for (const [path, t] of map) {
  if (['typography', 'shadow', 'cubicBezier'].includes(t.type) || path.startsWith('motion.easing.') || path.startsWith('font.family.')) continue;
  for (const [mode, raw] of Object.entries(t.byMode)) vars.push([tier, NAME_MAP[path] ?? path.replaceAll('.', '/'), MODE[mode] ?? mode, norm(res(raw, mode))]);
}

/* ---------- text styles ---------- */
// font.text.body.dense -> text/body/dense/regular (Figma splits regular/bold); the rest map 1:1.
const text = [];
for (const [path, t] of js) {
  if (t.type !== 'typography' || !path.startsWith('font.text.')) continue;
  const v = res(t.value, 'Value');
  const comp = typeof v === 'object' ? v : {};
  const rest = path.slice('font.text.'.length).split('.');
  // Figma's names where they are not the path with dots as slashes (2026-10-03).
  const FIGMA_TEXT = { 'label.uiTight': 'text/label/ui-tight', 'body.denseBold': 'text/body/dense/bold', 'body.defaultBold': 'text/body/default/bold', 'body.leadBold': 'text/body/lead/bold', 'nav.header': 'text/body/nav/header', 'nav.node': 'text/body/nav/node' };
  const name = FIGMA_TEXT[rest.join('.')] ?? ('text/' + rest.join('/') + (rest[0] === 'body' ? '/regular' : ''));
  const num = (x) => Number(norm(res(x, 'Value')));
  text.push({ name, weight: num(comp.fontWeight), size: num(comp.fontSize), lineHeight: num(comp.lineHeight), trackingEm: num(comp.letterSpacing) });
}

/* ---------- effect styles ---------- */
function parseShadow(css) {
  return String(css).split(/,(?![^(]*\))/).map((part) => {
    const s = part.trim();
    const inset = s.startsWith('inset');
    const body = s.replace(/^inset\s+/, '');
    // The colour is the last thing in the layer and may nest a var() — slice, don't regex it.
    const at = body.indexOf('rgb(');
    const colour = body.slice(at).trim();
    const nums = body.slice(0, at).trim().split(/\s+/).map((x) => parseFloat(x));
    // Colour as rgb hex plus alpha at 2dp: Figma stores alpha as f32 (0.9 reads 0.8999),
    // so a byte-exact hex8 compare reports drift that is not there.
    let rgb, a;
    const v = /var\(--sc-p-color-(\w+)-rgb\)\s*\/\s*([0-9.]+)/.exec(colour);
    if (v) { rgb = '#' + triplet(v[1]).map(h2).join(''); a = Number(v[2]); }
    else { const m = /rgb\(\s*(\d+)\s+(\d+)\s+(\d+)\s*\/\s*([0-9.]+)\s*\)/.exec(colour); rgb = '#' + [m[1], m[2], m[3]].map(Number).map(h2).join(''); a = Number(m[4]); }
    return { inset, x: nums[0], y: nums[1], blur: nums[2], spread: nums[3] ?? 0, rgb, a: a.toFixed(2) };
  });
}
const effects = [];
for (const [path, t] of js) {
  if (t.type !== 'shadow') continue;
  const leaf = path.split('.').slice(1).join('/');
  for (const [mode, css] of Object.entries(t.byMode)) {
    const name = mode === 'dark' ? `shadow/${leaf.replace(/^(\w+)\//, '$1/dark/')}` : `shadow/${leaf}`;
    effects.push({ name, layers: parseShadow(res(css, mode)) });
  }
}

/* ---------- the plugin call ---------- */
const EXPECTED = JSON.stringify({ vars, text, effects });
const plugin = `// Generated by shokunin-brand-identity/scripts/parity/figma-plugin-check.mjs — do not edit.
const EXPECTED = ${EXPECTED};
const WEIGHT = { '55 Roman': 400, '65 Medium': 500, '75 Bold': 700, '95 Black': 900, 'Regular': 400, 'Medium': 500, 'SemiBold': 600, 'Bold': 700 };
const r6 = (n) => String(Math.round(n * 1e6) / 1e6);
const h2 = (x) => Math.round(x * 255).toString(16).padStart(2, '0');
const vs = await figma.variables.getLocalVariablesAsync(); const cols = await figma.variables.getLocalVariableCollectionsAsync();
const byId = Object.fromEntries(vs.map((v) => [v.id, v]));
const tier = { Primitives: 'P', Semantic: 'S' };
function resolve(v, modeName, g = 0) {
  const col = cols.find((c) => c.id === v.variableCollectionId); const m = col.modes.find((m) => m.name === modeName) || col.modes[0];
  const val = v.valuesByMode[m.modeId];
  if (val && val.type === 'VARIABLE_ALIAS') return g > 10 ? '<cycle>' : resolve(byId[val.id], modeName, g + 1);
  if (v.resolvedType === 'COLOR') return '#' + h2(val.r) + h2(val.g) + h2(val.b) + (val.a !== undefined && val.a < 1 ? h2(val.a) : '');
  const n = Number(val); return Number.isFinite(n) && String(val).trim() !== '' ? r6(n) : String(val);
}
const fig = new Map();
for (const v of vs) { const col = cols.find((c) => c.id === v.variableCollectionId); for (const m of col.modes) fig.set(tier[col.name] + '|' + v.name + '|' + m.name, resolve(v, m.name)); }
const out = { variables: { compared: EXPECTED.vars.length, figmaStale: [], missingInFigma: [], missingInJson: [] }, textStyles: { compared: EXPECTED.text.length, drift: [], missingInFigma: [], figmaOnly: [] }, effectStyles: { compared: EXPECTED.effects.length, drift: [], missingInFigma: [] } };
const seen = new Set();
for (const [t, n, m, val] of EXPECTED.vars) { const k = t + '|' + n + '|' + m; seen.add(k); if (!fig.has(k)) out.variables.missingInFigma.push(k + ' = ' + val); else if (fig.get(k) !== val) out.variables.figmaStale.push(k + ': figma ' + fig.get(k) + ', json ' + val); }
out.variables.missingInJson = [...fig.keys()].filter((k) => !seen.has(k) && !k.includes('|font/family/'));
const tss = await figma.getLocalTextStylesAsync(); const tsByName = Object.fromEntries(tss.map((s) => [s.name, s]));
for (const e of EXPECTED.text) {
  const s = tsByName[e.name]; if (!s) { out.textStyles.missingInFigma.push(e.name); continue; }
  const got = { weight: WEIGHT[s.fontName.style], size: s.fontSize, lineHeight: s.lineHeight.unit === 'PERCENT' ? +(s.lineHeight.value / 100).toFixed(4) : null, trackingEm: s.letterSpacing.unit === 'PERCENT' ? +(s.letterSpacing.value / 100).toFixed(4) : null };
  const diffs = ['weight', 'size', 'lineHeight', 'trackingEm'].filter((k) => r6(got[k]) !== r6(e[k])).map((k) => k + ' figma ' + got[k] + ', json ' + e[k]);
  if (diffs.length) out.textStyles.drift.push(e.name + ': ' + diffs.join('; '));
}
out.textStyles.figmaOnly = tss.map((s) => s.name).filter((n) => !EXPECTED.text.some((e) => e.name === n));
const efs = await figma.getLocalEffectStylesAsync(); const efByName = Object.fromEntries(efs.map((s) => [s.name, s]));
for (const e of EXPECTED.effects) {
  const s = efByName[e.name]; if (!s) { out.effectStyles.missingInFigma.push(e.name); continue; }
  const got = s.effects.map((x) => (x.type === 'INNER_SHADOW' ? 'inset ' : '') + [x.offset.x, x.offset.y, x.radius, x.spread || 0].join(' ') + ' #' + h2(x.color.r) + h2(x.color.g) + h2(x.color.b) + '/' + x.color.a.toFixed(2)).join(' | ');
  const want = e.layers.map((l) => (l.inset ? 'inset ' : '') + [l.x, l.y, l.blur, l.spread].join(' ') + ' ' + l.rgb + '/' + l.a).join(' | ');
  if (got !== want) out.effectStyles.drift.push(e.name + ': figma ' + got + ' / json ' + want);
}
const bad = out.variables.figmaStale.length + out.variables.missingInFigma.length + out.variables.missingInJson.length + out.textStyles.drift.length + out.textStyles.missingInFigma.length + out.effectStyles.drift.length + out.effectStyles.missingInFigma.length;
out.verdict = bad ? 'drift' : 'in-sync';
return out;
`;
process.stdout.write(plugin);
if (plugin.length > 50000) { console.error(`plugin call is ${plugin.length} chars; use_figma accepts 50000`); process.exit(1); }
