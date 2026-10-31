// Run through use_figma on the SCDS library (0zVoxaLJQkjHENYJlQk1VT). Read-only.
// Returns { rows, groups }: groups is the --figma input of figma-variable-hashes.mjs.
// Pass { rowsFor: '<group>' } as a literal below to also return that group's rows.
const rowsFor = null;
const cols = await figma.variables.getLocalVariableCollectionsAsync();
const byId = new Map(), collOf = new Map();
for (const c of cols) for (const id of c.variableIds) { const v = await figma.variables.getVariableByIdAsync(id); byId.set(id, v); collOf.set(id, c); }
const hex = (c) => { const h = (n) => Math.round(n * 255).toString(16).padStart(2, '0'); return '#' + h(c.r) + h(c.g) + h(c.b) + (c.a !== undefined && c.a < 1 ? h(c.a) : ''); };
const norm = (v) => { if (typeof v === 'number') return String(Math.round(v * 1e6) / 1e6); return String(v).trim(); };
const resolve = (v, modeName, seen = 0) => {
  let val = v.valuesByMode[collOf.get(v.id).modes.find((m) => m.name === modeName)?.modeId ?? Object.keys(v.valuesByMode)[0]];
  if (val && typeof val === 'object' && val.type === 'VARIABLE_ALIAS') {
    const t = byId.get(val.id); const tc = collOf.get(t.id);
    return resolve(t, tc.modes.some((m) => m.name === modeName) ? modeName : tc.modes[0].name, seen + 1);
  }
  if (val && typeof val === 'object' && 'r' in val) return hex(val);
  return norm(val);
};
const rows = [];
for (const [id, v] of byId) for (const m of collOf.get(id).modes) {
  if (/^font\/family\//.test(v.name)) continue;
  rows.push(`${collOf.get(id).name}|${v.name}|${m.name}|${resolve(v, m.name)}`);
}
const group = (r) => { const [c, n] = r.split('|'); return `${c}|${n.split('/').slice(0, 2).join('/')}`; };
const fnv = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); };
const g = {};
for (const r of rows.sort()) (g[group(r)] ??= []).push(r);
const groups = Object.fromEntries(Object.entries(g).map(([k, v]) => [k, `${v.length}:${fnv(v.join('\n'))}`]));
return { count: rows.length, groups, rows: rowsFor ? g[rowsFor] : undefined };
