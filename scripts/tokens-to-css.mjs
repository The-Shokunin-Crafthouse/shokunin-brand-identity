#!/usr/bin/env node
/**
 * tokens-to-css.mjs — DTCG → CSS custom properties.
 *
 * Reads tokens/primitives.json + tokens/semantic.json and emits
 * src/styles/tokens.css with:
 *   :root { /* primitive + light-semantic vars *​/ }
 *   [data-theme="dark"] { /* dark-mode semantic overrides *​/ }
 *
 * Conventions:
 * - CSS var prefix: --sc-
 * - Path segments are joined with `-`. CamelCase segments are
 *   converted to kebab-case (warmGray → warm-gray, surfacePage →
 *   surface-page).
 * - Composite typography tokens explode into per-axis subkeys:
 *     --sc-font-text-16 (shorthand: font property)
 *     --sc-font-text-16-family / -size / -weight /
 *     --sc-font-text-16-line-height / -letter-spacing
 * - DTCG aliases ({group.sub.name}) are emitted as var() refs so
 *   the cascade resolves the actual value at use site.
 *
 * Sprint 4 deliverable. Run `npm run tokens:build` before Vite.
 */

import { springToLinear } from '../src/motion/spring.js';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');

const PRIMITIVES_PATH = resolve(repoRoot, 'tokens/primitives.json');
const SEMANTIC_PATH = resolve(repoRoot, 'tokens/semantic.json');
const OUT_PATH = resolve(repoRoot, 'src/styles/tokens.css');

const primitives = JSON.parse(readFileSync(PRIMITIVES_PATH, 'utf8'));
const semantic = JSON.parse(readFileSync(SEMANTIC_PATH, 'utf8'));

// camelCase → kebab-case for a single path segment.
function kebab(segment) {
  return segment.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

// Path array → CSS var name. Primitives are prefixed `--sc-p-` so they
// cannot collide with semantic aliases that share a path (e.g. semantic
// `border.width.focus` aliases primitive `border.width.focus` — both
// resolve to a CSS var, and only the namespace distinguishes them).
function varName(path, { primitive = false } = {}) {
  const prefix = primitive ? '--sc-p-' : '--sc-';
  return prefix + path.map(kebab).join('-');
}

// Build a Set of all leaf paths in the primitives tree so aliases
// inside semantic.json can resolve to the correct namespace.
function collectLeafPaths(node, path, out) {
  for (const key of Object.keys(node)) {
    if (key.startsWith('$')) continue;
    const child = node[key];
    if (!child || typeof child !== 'object') continue;
    const next = [...path, key];
    if ('$value' in child) {
      out.add(next.join('.'));
    } else {
      collectLeafPaths(child, next, out);
    }
  }
}

let PRIMITIVE_PATHS = new Set();

// DTCG alias `{a.b.c}` → CSS var reference. Returns null if not an alias.
// Resolves namespace by checking whether the alias target is a primitive.
function aliasToVar(value) {
  if (typeof value !== 'string') return null;
  const m = /^\{([^}]+)\}$/.exec(value);
  if (!m) return null;
  const dotted = m[1];
  const path = dotted.split('.');
  const isPrimitive = PRIMITIVE_PATHS.has(dotted);
  return `var(${varName(path, { primitive: isPrimitive })})`;
}

// Format a DTCG dimension { value, unit } or a plain number-with-unit
// into a CSS length token. Numbers without unit are emitted as-is.
function formatDimension(value) {
  if (value && typeof value === 'object' && 'value' in value) {
    return `${value.value}${value.unit ?? ''}`;
  }
  if (typeof value === 'number') return String(value);
  return String(value);
}

// Format primitive token $value by $type.
function formatPrimitive(token) {
  const v = token.$value;
  switch (token.$type) {
    case 'color':
      return v; // hex string
    case 'dimension':
      return formatDimension(v);
    case 'fontWeight':
    case 'number':
      return String(v);
    case 'fontFamily': {
      const list = Array.isArray(v) ? v : [v];
      return list
        .map((f) => (/\s/.test(f) ? `'${f}'` : f))
        .join(', ');
    }
    case 'duration':
      return formatDimension(v);
    case 'shadow':
      // box-shadow string (may be a multi-layer neumorphic composition
      // using channel-triplet vars). Emitted verbatim.
      return typeof v === 'string' ? v : null;
    case 'cubicBezier':
      return `cubic-bezier(${v.join(', ')})`;
    case 'spring':
      // { stiffness, damping, mass } → the sampled curve the sc-tune lab shows
      // (src/motion/spring.js). Its paired -duration token sets the time.
      return springToLinear(v).easing;
    default:
      return null;
  }
}

// Format a value that may be an alias or a literal subvalue inside a
// composite typography token.
function formatComposite(value) {
  const aliased = aliasToVar(value);
  if (aliased) return aliased;
  return formatDimension(value);
}

// Emit a typography composite as multiple --sc-...-* vars.
// Handles two cases:
//   1. Composite literal — $value is an object { fontFamily, fontSize, ... }
//      with each axis either a primitive alias or a literal.
//   2. Composite alias — $value is a string like "{font.text.16}" pointing
//      at another typography token. Each sub-axis re-aliases to the target
//      token's sub-axis vars.
function emitTypography(path, token, lines, mode = null) {
  const root = varName(path, { primitive: !mode });
  const v = mode && token.$extensions?.modes?.[mode] !== undefined
    ? token.$extensions.modes[mode]
    : token.$value;

  if (typeof v === 'string') {
    // Composite alias — re-emit each sub-axis as a var() pointing at the
    // target token's sub-axis. Target is in primitives if PRIMITIVE_PATHS
    // contains it; otherwise semantic.
    const m = /^\{([^}]+)\}$/.exec(v);
    if (!m) return;
    const targetPath = m[1].split('.');
    const targetIsPrimitive = PRIMITIVE_PATHS.has(m[1]);
    const targetRoot = varName(targetPath, { primitive: targetIsPrimitive });
    for (const axis of ['family', 'size', 'weight', 'line-height', 'letter-spacing']) {
      lines.push(`  ${root}-${axis}: var(${targetRoot}-${axis});`);
    }
    lines.push(`  ${root}: var(${targetRoot});`);
    return;
  }

  const family = formatComposite(v.fontFamily);
  const size = formatComposite(v.fontSize);
  const weight = formatComposite(v.fontWeight);
  const lh = formatComposite(v.lineHeight);
  const tracking = formatComposite(v.letterSpacing);
  lines.push(`  ${root}-family: ${family};`);
  lines.push(`  ${root}-size: ${size};`);
  lines.push(`  ${root}-weight: ${weight};`);
  lines.push(`  ${root}-line-height: ${lh};`);
  lines.push(`  ${root}-letter-spacing: ${tracking};`);
  // CSS `font` shorthand for the composite (style/variant default,
  // weight + size/line-height + family). letter-spacing is set via
  // a sibling rule by consumers.
  lines.push(`  ${root}: ${weight} ${size}/${lh} ${family};`);
}

// Walk an object tree and emit one CSS declaration per leaf $value.
// opts.mode === null  → emit primitives namespace (--sc-p-*)
// opts.mode === 'light' or 'dark' → emit semantic namespace (--sc-*)
//   resolving each token's $extensions.modes[opts.mode] when present.
function walk(node, path, lines, opts = { mode: null }) {
  for (const key of Object.keys(node)) {
    if (key.startsWith('$')) continue;
    const child = node[key];
    if (!child || typeof child !== 'object') continue;
    const nextPath = [...path, key];
    if ('$value' in child) {
      emitLeaf(child, nextPath, lines, opts);
    } else {
      walk(child, nextPath, lines, opts);
    }
  }
}

function emitLeaf(token, path, lines, opts) {
  const isPrimitiveLayer = opts.mode === null;
  const ns = { primitive: isPrimitiveLayer };

  // Typography composites get exploded into per-axis subkeys.
  if (token.$type === 'typography') {
    emitTypography(path, token, lines, opts.mode);
    return;
  }

  // Semantic layer — honour $extensions.modes.{light,dark} when present.
  if (!isPrimitiveLayer && token.$extensions?.modes?.[opts.mode] !== undefined) {
    const aliasOrValue = token.$extensions.modes[opts.mode];
    const aliased = aliasToVar(aliasOrValue);
    if (aliased) {
      lines.push(`  ${varName(path, ns)}: ${aliased};`);
      return;
    }
    const literal = formatPrimitive({ $type: token.$type, $value: aliasOrValue });
    if (literal !== null) lines.push(`  ${varName(path, ns)}: ${literal};`);
    return;
  }

  // Alias $value resolves via var() to either primitive or semantic ns.
  const aliased = aliasToVar(token.$value);
  if (aliased) {
    lines.push(`  ${varName(path, ns)}: ${aliased};`);
    return;
  }

  // Plain primitive literal.
  const literal = formatPrimitive(token);
  if (literal !== null) lines.push(`  ${varName(path, ns)}: ${literal};`);
}

// Build the CSS document.
const header = `/* ============================================================
 * tokens.css — GENERATED · do not edit by hand.
 *
 * Generated by scripts/tokens-to-css.mjs from:
 *   - tokens/primitives.json
 *   - tokens/semantic.json
 *
 * Run \`npm run tokens:build\` to regenerate.
 *
 * Layer order:
 *   1. :root { primitives + light-mode semantic }
 *   2. [data-theme="dark"] { dark-mode semantic overrides }
 *   3. @supports linear() { the spring easings; outside it each
 *      spring var falls back to --sc-p-motion-easing-out }
 *
 * Every component CSS module references --sc-* semantic vars
 * (Sprint 4 contract resolution 1). Primitive vars are present
 * to satisfy alias resolution; component code that references
 * them directly is a bug.
 * ============================================================ */
`;

// Collect primitive leaf paths so semantic aliases resolve to --sc-p-*.
PRIMITIVE_PATHS = new Set();
collectLeafPaths(primitives, [], PRIMITIVE_PATHS);

const rootLines = [':root {'];
rootLines.push('  /* --- Primitives (--sc-p-*) ----------------------------- */');
walk(primitives, [], rootLines, { mode: null });
rootLines.push('');
rootLines.push('  /* --- Semantic · light mode (default) (--sc-*) --------- */');
walk(semantic, [], rootLines, { mode: 'light' });
rootLines.push('}');

const darkLines = ['[data-theme="dark"] {'];
darkLines.push('  /* --- Semantic · dark mode overrides ------------------- */');
walk(semantic, [], darkLines, { mode: 'dark' });
darkLines.push('}');

// A spring compiles to linear(), which Safari before 17.2 cannot parse: a
// transition reading the var is then invalid and the control snaps. Each
// spring var defaults to a bezier and takes its linear() value only where
// the browser parses it (physical-controls audit, "a spring keeps a bezier
// fallback"). The JS engine samples whichever value the var resolves to.
const SPRING_FALLBACK = 'var(--sc-p-motion-easing-out)';
function splitSprings(lines, selector) {
  const springs = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^(\s*)(--sc-[a-z0-9-]+): (linear\(.+\));$/);
    if (!m) continue;
    springs.push(`  ${m[1]}${m[2]}: ${m[3]};`);
    lines[i] = `${m[1]}${m[2]}: ${SPRING_FALLBACK};`;
  }
  return springs.length ? [`  ${selector} {`, ...springs, '  }'] : [];
}
const supportsLines = [
  ...splitSprings(rootLines, ':root'),
  ...splitSprings(darkLines, '[data-theme="dark"]'),
];
const supports = supportsLines.length
  ? ['@supports (transition-timing-function: linear(0, 1)) {', ...supportsLines, '}'].join('\n')
  : '';

const out = [header, '', rootLines.join('\n'), '', darkLines.join('\n'), '', ...(supports ? [supports, ''] : [])].join('\n');

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, out, 'utf8');

const stats = {
  root: rootLines.filter((l) => l.includes('--sc-')).length,
  dark: darkLines.filter((l) => l.includes('--sc-')).length,
};
console.log(`tokens.css written: ${OUT_PATH}`);
console.log(`  root declarations: ${stats.root}`);
console.log(`  dark declarations: ${stats.dark}`);
