#!/usr/bin/env node
/**
 * count-handbuilt: count hand-built elements in a build output where an SCDS
 * component already exists.
 *
 * Usage: node count-handbuilt.mjs <output-dir> [--repo <repo-root>]
 * Prints one JSON object to stdout: { scanned_files, total, by_component, hits }.
 * Deterministic: files sorted, no timestamps.
 *
 * COMPONENT LIST: read at run time from the directory names under
 * <repo-root>/src/components/ (directories only). A rule below is active only
 * when its directory exists; a component with no named rule uses the generic
 * rule. There is no hand list of components.
 *
 * WHAT COUNTS: an opening tag of a LOWERCASE HTML element (<button>, <div>,
 * <svg>) in a .jsx/.tsx/.js/.ts/.html file. A capitalised tag (<Button>,
 * <Tooltip>) is an SCDS use and never counts. Each matching opening tag counts 1
 * for the first component whose rule matches it (rules run in the order below).
 *
 * MATCHING RULES (tag-specific; "cls" = the tag's class/className text):
 *   Button           <button>; <input type=submit|button|reset>; any tag role="button"
 *   TextField        <textarea>; <input> with type text|email|password|search|tel|url|number or no type
 *   Switch           <input type=checkbox>; any tag role="switch"
 *   Slider           <input type=range>; any tag role="slider"
 *   SegmentedControl <input type=radio>; any tag role="radiogroup"|"tablist"
 *   Progress         <progress>; any tag role="progressbar"        (also credited to PlusProgress if Progress is absent)
 *   Tooltip          any tag role="tooltip"; cls word tooltip|popover
 *   Toast            cls word toast|snackbar|banner|notification|flash
 *   Divider          <hr>; cls word divider|separator|rule
 *   NavBar           <nav>; cls word navbar|nav
 *   Icon             <svg>
 *   Avatar           cls word avatar
 *   Card             cls word card
 *   StatusPill       cls word pill|badge|chip|status
 *   Stepper          cls word stepper|steps
 *   PlusSkeleton     cls word skeleton|shimmer|placeholder
 *   PlusLoader       cls word spinner|loader|loading
 *   (generic)        any other component dir: cls word equal to the dir name lowercased with
 *                    a leading "plus" removed.
 * LAYOUT EXEMPTION: a class-based rule never fires when the class also holds a
 * layout/part word (region, wrapper, container, stack, host, layer, list, grid,
 * row, group, area, header, body, title, label, text, name, meta, actions): that
 * element wraps or labels a component, it is not the component. Tag and role
 * rules are not exempted.
 * "cls word": the class text, split on non-letters and camelCase boundaries
 * (styles.projectCard -> project, card), contains the word. A rule whose
 * component dir is absent is skipped.
 */
import fs from "node:fs";
import path from "node:path";

const argv = process.argv.slice(2);
let out = null, repo = null;
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === "--repo") repo = argv[++i]; else if (!out) out = argv[i];
}
if (!out) { console.error("usage: count-handbuilt.mjs <output-dir> [--repo <root>]"); process.exit(2); }
repo = path.resolve(repo ?? path.join(path.dirname(new URL(import.meta.url).pathname), "..", ".."));
const compDir = path.join(repo, "src", "components");
const components = fs.readdirSync(compDir, { withFileTypes: true })
  .filter((e) => e.isDirectory()).map((e) => e.name).sort();
const has = (n) => components.includes(n);

const words = (s) => s.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z]+/).filter(Boolean);
const LAYOUT = ["region", "wrapper", "container", "stack", "host", "layer", "list", "grid", "row", "group", "area", "header", "body", "title", "label", "text", "name", "meta", "actions"];
const clsHas = (cls, list) => { const w = words(cls); return !w.some((x) => LAYOUT.includes(x)) && list.some((x) => w.includes(x)); };
const attr = (a, name) => { const m = a.match(new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|\\{([^}]*)\\})`)); return m ? (m[1] ?? m[2] ?? m[3] ?? "") : null; };

// Ordered rules: [component, predicate(tag, attrs, cls)]
const RULES = [
  ["Button", (t, a) => t === "button" || (t === "input" && /^(submit|button|reset)$/.test(attr(a, "type") ?? "")) || attr(a, "role") === "button"],
  ["TextField", (t, a) => t === "textarea" || (t === "input" && (attr(a, "type") === null || /^(text|email|password|search|tel|url|number)$/.test(attr(a, "type")))) ],
  ["Switch", (t, a) => (t === "input" && attr(a, "type") === "checkbox") || attr(a, "role") === "switch"],
  ["Slider", (t, a) => (t === "input" && attr(a, "type") === "range") || attr(a, "role") === "slider"],
  ["SegmentedControl", (t, a) => (t === "input" && attr(a, "type") === "radio") || /^(radiogroup|tablist)$/.test(attr(a, "role") ?? "")],
  ["Progress", (t, a) => t === "progress" || attr(a, "role") === "progressbar"],
  ["Tooltip", (t, a, c) => attr(a, "role") === "tooltip" || clsHas(c, ["tooltip", "popover"])],
  ["Toast", (t, a, c) => clsHas(c, ["toast", "snackbar", "banner", "notification", "flash"])],
  ["Divider", (t, a, c) => t === "hr" || clsHas(c, ["divider", "separator", "rule"])],
  ["NavBar", (t, a, c) => t === "nav" || clsHas(c, ["navbar", "nav"])],
  ["Icon", (t) => t === "svg"],
  ["Avatar", (t, a, c) => clsHas(c, ["avatar"])],
  ["Card", (t, a, c) => clsHas(c, ["card"])],
  ["StatusPill", (t, a, c) => clsHas(c, ["pill", "badge", "chip", "status"])],
  ["Stepper", (t, a, c) => clsHas(c, ["stepper", "steps"])],
  ["PlusSkeleton", (t, a, c) => clsHas(c, ["skeleton", "shimmer", "placeholder"])],
  ["PlusLoader", (t, a, c) => clsHas(c, ["spinner", "loader", "loading"])],
];
const named = new Set(RULES.map((r) => r[0]));
const active = RULES.filter(([n]) => has(n) || (n === "Progress" && has("PlusProgress")));
for (const n of components) {
  if (!named.has(n) && n !== "PlusProgress") {
    const w = n.replace(/^Plus/, "").toLowerCase();
    active.push([n, (t, a, c) => clsHas(c, [w])]);
  }
}

const EXT = new Set([".jsx", ".tsx", ".js", ".ts", ".html"]);
const files = [];
(function walk(p) {
  for (const e of fs.readdirSync(p, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const q = path.join(p, e.name);
    if (e.isDirectory()) walk(q); else if (EXT.has(path.extname(e.name))) files.push(q);
  }
})(path.resolve(out));

const byComponent = {}, hits = [];
const TAG = /<([a-z][a-z0-9-]*)((?:=>|[^>])*?)>/g;
for (const f of files) {
  const src = fs.readFileSync(f, "utf8").replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "));
  for (const m of src.matchAll(TAG)) {
    const [, tag, a] = m;
    const cls = attr(a, "className") ?? attr(a, "class") ?? "";
    const rule = active.find(([, pred]) => pred(tag, a, cls));
    if (!rule) continue;
    byComponent[rule[0]] = (byComponent[rule[0]] ?? 0) + 1;
    hits.push({ file: path.relative(path.resolve(out), f), line: src.slice(0, m.index).split("\n").length, tag, component: rule[0] });
  }
}
const sorted = Object.fromEntries(Object.entries(byComponent).sort(([a], [b]) => a.localeCompare(b)));
console.log(JSON.stringify({ components_known: components.length, scanned_files: files.length, total: hits.length, by_component: sorted, hits }, null, 1));
