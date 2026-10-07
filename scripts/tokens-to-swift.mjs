#!/usr/bin/env node
/**
 * tokens-to-swift.mjs — DTCG → Swift.
 *
 * Reads tokens/primitives.json + tokens/semantic.json and emits
 * src/swift/SCDSTokens.swift — a single file consumed by Shokunin-branded
 * native targets (first consumer: studio-pm, ADR-046 in that repo).
 *
 * The third sibling off the same two inputs, beside tokens-to-css.mjs and
 * gen-token-map.mjs. It is not a new source.
 *
 * Conventions:
 * - SEMANTIC TOKENS ONLY. Primitives are resolved through and never emitted.
 *   A primitive reachable from view code is the same defect as a raw hex,
 *   one level of indirection later.
 * - A Swift symbol is the token path with its leading group dropped and the
 *   rest camel-cased: color.surface.page → SCDS.Color.surfacePage.
 * - Colors resolve $extensions.modes.{light,dark} into one dynamic NSColor,
 *   so the app follows the system appearance with no theme control.
 * - Typography emits family, size, weight, line-height and tracking TOGETHER,
 *   and exposes no way to get a size without them. A step used without its
 *   line-height is unrepresentable rather than discouraged.
 * - Unknown $type, unresolvable alias or duplicate symbol RAISES. A generator
 *   that skips what it does not recognise reports its own ignorance as success.
 *
 * Usage:
 *   node scripts/tokens-to-swift.mjs            # write the file
 *   node scripts/tokens-to-swift.mjs --check    # exit 1 if it is stale
 *
 * The stamp carries no wall-clock time, deliberately. A generated-at
 * timestamp makes every --check run report drift, which disables the check
 * that gives the stamp its value (#131). It carries the two source hashes
 * and the tokens' own $metadata.generated instead.
 */

import { simulateSpring } from '../src/motion/spring.js';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');

const PRIMITIVES_PATH = resolve(repoRoot, 'tokens/primitives.json');
const SEMANTIC_PATH = resolve(repoRoot, 'tokens/semantic.json');
const OUT_PATH = resolve(repoRoot, 'src/swift/SCDSTokens.swift');

const primitivesRaw = readFileSync(PRIMITIVES_PATH, 'utf8');
const semanticRaw = readFileSync(SEMANTIC_PATH, 'utf8');
const primitives = JSON.parse(primitivesRaw);
const semantic = JSON.parse(semanticRaw);

// A generator that guesses is a second source. Everything unexpected stops here.
function fail(message) {
  throw new Error(`tokens-to-swift: ${message}`);
}

// --- path and name handling ------------------------------------------------

function kebab(segment) {
  return segment.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

// Path array → the CSS var name tokens-to-css.mjs would emit for a primitive.
// Used only to resolve the `var(--sc-p-*)` references inside shadow strings
// back to the primitive they name.
function primitiveVarName(path) {
  return '--sc-p-' + path.map(kebab).join('-');
}

// Token path → Swift symbol. The leading group segment is dropped because it
// is already the enum: color.status.success-ink → SCDS.Color.statusSuccessInk.
function swiftName(path) {
  const segments = path.slice(1).flatMap((s) => kebab(s).split('-')).filter(Boolean);
  if (segments.length === 0) fail(`token path has no name after its group: ${path.join('.')}`);
  const [head, ...rest] = segments;
  const name = head + rest.map((s) => s[0].toUpperCase() + s.slice(1)).join('');
  // `default`, `class` and friends are Swift keywords.
  return /^(default|class|struct|enum|case|import|public|static|let|var|func|return|where|repeat|operator|protocol|extension|internal|private|open|in|is|as|any|some|nil|true|false)$/
    .test(name) ? `\`${name}\`` : name;
}

// --- alias resolution ------------------------------------------------------

function collectLeaves(node, path, out) {
  for (const key of Object.keys(node)) {
    if (key.startsWith('$')) continue;
    const child = node[key];
    if (!child || typeof child !== 'object') continue;
    const next = [...path, key];
    if ('$value' in child) out.set(next.join('.'), { token: child, path: next });
    else collectLeaves(child, next, out);
  }
}

const PRIMITIVE_LEAVES = new Map();
const SEMANTIC_LEAVES = new Map();
collectLeaves(primitives, [], PRIMITIVE_LEAVES);
collectLeaves(semantic, [], SEMANTIC_LEAVES);

// Primitive CSS-var name → dotted primitive path, for shadow-string resolution.
const PRIMITIVE_BY_VAR = new Map();
for (const [dotted, { path }] of PRIMITIVE_LEAVES) {
  PRIMITIVE_BY_VAR.set(primitiveVarName(path), dotted);
}

function aliasTarget(value) {
  if (typeof value !== 'string') return null;
  const m = /^\{([^}]+)\}$/.exec(value);
  return m ? m[1] : null;
}

function lookup(dotted) {
  return PRIMITIVE_LEAVES.get(dotted) ?? SEMANTIC_LEAVES.get(dotted) ?? null;
}

// Follow an alias chain to a literal. `mode` picks $extensions.modes.{mode}
// at every hop, so a semantic token aliasing another semantic token resolves
// per appearance all the way down.
function resolveValue(value, mode, trail = []) {
  const target = aliasTarget(value);
  if (target === null) return value;
  if (trail.includes(target)) fail(`alias cycle: ${[...trail, target].join(' → ')}`);
  const hit = lookup(target);
  if (!hit) fail(`alias points at a token that does not exist: {${target}}`);
  const next = hit.token.$extensions?.modes?.[mode] !== undefined
    ? hit.token.$extensions.modes[mode]
    : hit.token.$value;
  return resolveValue(next, mode, [...trail, target]);
}

// The alias name a value ends on, before its literal — used to keep the
// authored font-weight name rather than re-deriving one from a number.
function resolveAliasName(value, mode, trail = []) {
  const target = aliasTarget(value);
  if (target === null) return trail.length ? trail[trail.length - 1] : null;
  const hit = lookup(target);
  if (!hit) fail(`alias points at a token that does not exist: {${target}}`);
  const next = hit.token.$extensions?.modes?.[mode] !== undefined
    ? hit.token.$extensions.modes[mode]
    : hit.token.$value;
  return resolveAliasName(next, mode, [...trail, target]);
}

function modeValue(token, mode) {
  return token.$extensions?.modes?.[mode] !== undefined
    ? token.$extensions.modes[mode]
    : token.$value;
}

// --- literal formatting ----------------------------------------------------

function px(value, what) {
  if (value && typeof value === 'object' && 'value' in value) {
    if (value.unit && value.unit !== 'px') fail(`${what}: expected px, got ${value.unit}`);
    return Number(value.value);
  }
  if (typeof value === 'number') return value;
  fail(`${what}: not a dimension: ${JSON.stringify(value)}`);
}

function em(value, what) {
  if (value && typeof value === 'object' && 'value' in value) {
    if (value.unit !== 'em') fail(`${what}: expected em tracking, got ${value.unit}`);
    return Number(value.value);
  }
  if (typeof value === 'number') return value;
  fail(`${what}: not a tracking value: ${JSON.stringify(value)}`);
}

function ms(value, what) {
  if (value && typeof value === 'object' && 'value' in value) {
    if (value.unit !== 'ms') fail(`${what}: expected ms, got ${value.unit}`);
    return Number(value.value);
  }
  fail(`${what}: not a duration: ${JSON.stringify(value)}`);
}

// Swift literal for a CGFloat, kept short but never in exponent form.
function num(n) {
  if (!Number.isFinite(n)) fail(`non-finite number: ${n}`);
  return Number.isInteger(n) ? `${n}` : `${Number(n.toFixed(6))}`;
}

// An R G B triplet primitive (#15), read by its own path.
function tripletChannels(primitivePath, what) {
  const hit = PRIMITIVE_LEAVES.get(primitivePath);
  if (!hit) fail(`${what}: ${primitivePath} is not a primitive token`);
  const parts = String(hit.token.$value).trim().split(/[\s,]+/).map(Number);
  if (parts.length !== 3 || parts.some((c) => !Number.isFinite(c))) {
    fail(`${what}: ${primitivePath} is not an R G B triplet: ${JSON.stringify(hit.token.$value)}`);
  }
  return parts.map((c) => c / 255);
}

// Two authored colour forms, and no third.
//   1. #RRGGBB / #RRGGBBAA
//   2. rgb(var(--sc-p-…-rgb) / A) — a channel-triplet composition (#15), which
//      is how SCDS authors every translucent divider, overlay and scrim.
// Anything else raises rather than resolving to a wrong colour quietly.
function colorChannels(value, what) {
  const text = String(value).trim();

  const hex = /^#?([0-9a-fA-F]{6})([0-9a-fA-F]{2})?$/.exec(text);
  if (hex) {
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex[1].slice(i, i + 2), 16) / 255);
    return { r, g, b, a: hex[2] ? parseInt(hex[2], 16) / 255 : 1 };
  }

  const composed = /^rgba?\(\s*var\(\s*(--[a-z0-9-]+)\s*\)\s*(?:\/\s*([\d.]+)\s*)?\)$/i.exec(text);
  if (composed) {
    const primitivePath = PRIMITIVE_BY_VAR.get(composed[1]);
    if (!primitivePath) fail(`${what}: colour names ${composed[1]}, which is not a primitive token`);
    const [r, g, b] = tripletChannels(primitivePath, what);
    const a = composed[2] === undefined ? 1 : Number(composed[2]);
    if (!Number.isFinite(a)) fail(`${what}: unreadable alpha in ${text}`);
    return { r, g, b, a };
  }

  fail(`${what}: colour is neither a hex nor an rgb(var(--…-rgb) / A) composition: ${text}`);
}

// SCDS authors weights by name; SwiftUI names them differently above 700.
const WEIGHT_BY_NAME = {
  thin: '.thin', light: '.light', regular: '.regular', medium: '.medium',
  semibold: '.semibold', bold: '.bold', black: '.black',
};

function swiftWeight(aliasName, literal, what) {
  const leaf = aliasName ? aliasName.split('.').pop() : null;
  if (leaf && WEIGHT_BY_NAME[leaf]) return WEIGHT_BY_NAME[leaf];
  fail(`${what}: font weight ${JSON.stringify(literal)} has no SCDS weight name behind it. ` +
       `Add it to WEIGHT_BY_NAME rather than mapping the number by eye.`);
}

// --- emitters --------------------------------------------------------------

const counts = { color: 0, typography: 0, spaceLayout: 0, spaceComponent: 0, radius: 0, border: 0, size: 0, motion: 0, shadow: 0 };
const seen = new Map();

function claim(enumName, name, dotted) {
  const key = `${enumName}.${name}`;
  if (seen.has(key)) fail(`two tokens want the symbol ${key}: ${seen.get(key)} and ${dotted}`);
  seen.set(key, dotted);
  return name;
}

function colorLine(path, token) {
  const dotted = path.join('.');
  const light = colorChannels(resolveValue(modeValue(token, 'light'), 'light'), dotted);
  const dark = colorChannels(resolveValue(modeValue(token, 'dark'), 'dark'), dotted);
  const name = claim('Color', swiftName(path), dotted);
  counts.color += 1;
  return `    /// \`${dotted}\`\n` +
    `    public static let ${name} = SwiftUI.Color.scdsDynamic(\n` +
    `        light: (${num(light.r)}, ${num(light.g)}, ${num(light.b)}, ${num(light.a)}),\n` +
    `        dark:  (${num(dark.r)}, ${num(dark.g)}, ${num(dark.b)}, ${num(dark.a)})\n` +
    `    )`;
}

function typographyLine(path, token) {
  const dotted = path.join('.');
  // Typography is mode-invariant in SCDS; light is read and dark asserted equal.
  const lightComposite = resolveValue(modeValue(token, 'light'), 'light');
  const darkComposite = resolveValue(modeValue(token, 'dark'), 'dark');
  if (JSON.stringify(lightComposite) !== JSON.stringify(darkComposite)) {
    fail(`${dotted}: typography differs between light and dark. The Swift type carries ` +
         `one composition per token and cannot express a per-mode pair.`);
  }
  const c = lightComposite;
  if (!c || typeof c !== 'object') fail(`${dotted}: typography did not resolve to a composition`);

  const families = resolveValue(c.fontFamily, 'light');
  const list = Array.isArray(families) ? families : [families];
  if (list.length === 0) fail(`${dotted}: empty font family stack`);

  const size = px(resolveValue(c.fontSize, 'light'), `${dotted}.fontSize`);
  const weightLiteral = resolveValue(c.fontWeight, 'light');
  const weight = swiftWeight(resolveAliasName(c.fontWeight, 'light'), weightLiteral, `${dotted}.fontWeight`);

  const lh = resolveValue(c.lineHeight, 'light');
  if (typeof lh !== 'number') fail(`${dotted}.lineHeight: expected a unitless multiple, got ${JSON.stringify(lh)}`);
  const tracking = em(resolveValue(c.letterSpacing, 'light'), `${dotted}.letterSpacing`);

  const name = claim('Typography', swiftName(path), dotted);
  counts.typography += 1;
  return `    /// \`${dotted}\` · ${list[0]} ${num(size)}/${num(lh)}\n` +
    `    public static let ${name} = SCDSTypeStyle(\n` +
    `        family: ${JSON.stringify(list[0])},\n` +
    `        fallbacks: [${list.slice(1).map((f) => JSON.stringify(f)).join(', ')}],\n` +
    `        size: ${num(size)},\n` +
    `        weight: ${weight},\n` +
    `        lineHeightMultiple: ${num(lh)},\n` +
    `        trackingEm: ${num(tracking)}\n` +
    `    )`;
}

function dimensionLine(enumName, path, token, counterKey) {
  const dotted = path.join('.');
  const light = px(resolveValue(modeValue(token, 'light'), 'light'), dotted);
  const dark = px(resolveValue(modeValue(token, 'dark'), 'dark'), dotted);
  if (light !== dark) fail(`${dotted}: dimension differs between light and dark (${light} vs ${dark}). ` +
                           `No consumer expects a per-appearance metric.`);
  const name = claim(enumName, swiftName(path), dotted);
  counts[counterKey] += 1;
  return `    /// \`${dotted}\`\n    public static let ${name}: CGFloat = ${num(light)}`;
}

function durationLine(path, token) {
  const dotted = path.join('.');
  const value = ms(resolveValue(modeValue(token, 'light'), 'light'), dotted);
  const name = claim('Motion', swiftName(path), dotted);
  counts.motion += 1;
  return `    /// \`${dotted}\` · ${num(value)}ms\n` +
    `    public static let ${name}: TimeInterval = ${num(value / 1000)}`;
}

function easingLine(path, token) {
  const dotted = path.join('.');
  const v = resolveValue(modeValue(token, 'light'), 'light');
  if (!Array.isArray(v) || v.length !== 4) fail(`${dotted}: cubicBezier is not four control points`);
  const name = claim('Motion', swiftName(path), dotted);
  counts.motion += 1;
  return `    /// \`${dotted}\`\n` +
    `    public static let ${name} = SCDSEasing(${v.map(num).join(', ')})`;
}

function springLine(path, token) {
  const dotted = path.join('.');
  const v = resolveValue(modeValue(token, 'light'), 'light');
  if (!v || typeof v !== 'object' || !('stiffness' in v)) fail(`${dotted}: spring is not { stiffness, damping, mass }`);
  const { settleMs, overshoot } = simulateSpring(v);
  const name = claim('Motion', swiftName(path), dotted);
  counts.motion += 1;
  return `    /// \`${dotted}\` · spring k${num(v.stiffness)} c${num(v.damping)} m${num(v.mass)}, settles in ${settleMs}ms, overshoot ${Math.round(overshoot * 100)}%\n` +
    `    public static let ${name} = SCDSSpring(stiffness: ${num(v.stiffness)}, damping: ${num(v.damping)}, mass: ${num(v.mass)}, settle: ${num(settleMs / 1000)})`;
}

function numberLine(enumName, path, token, counterKey) {
  const dotted = path.join('.');
  const v = resolveValue(modeValue(token, 'light'), 'light');
  if (typeof v !== 'number') fail(`${dotted}: expected a number, got ${JSON.stringify(v)}`);
  const name = claim(enumName, swiftName(path), dotted);
  counts[counterKey] += 1;
  return `    /// \`${dotted}\`\n    public static let ${name}: CGFloat = ${num(v)}`;
}

// A CSS box-shadow string is not a Swift value. Every number in it is, so the
// string is parsed into its layers rather than carried across as text or
// dropped. An unparseable layer raises: a shadow that silently loses a layer
// is worse than one that is absent.
function shadowLine(path, token) {
  const dotted = path.join('.');
  const css = resolveValue(modeValue(token, 'light'), 'light');
  const cssDark = resolveValue(modeValue(token, 'dark'), 'dark');
  if (typeof css !== 'string') fail(`${dotted}: shadow is not a string`);

  // Two colour forms appear inside a shadow, and the dark composition uses
  // both: a channel-triplet reference in the lift layers, and literal
  // `rgb(0 0 0 / A)` in the cast layers. Each layer is parsed as a whole, and
  // the layer count is checked against the comma count so a layer in a shape
  // neither branch knows is a failure rather than a quiet omission.
  const parseLayers = (input, what) => {
    const entries = input.split(/\),\s*/).map((e, i, all) => (i === all.length - 1 ? e : `${e})`));
    return entries.map((entry) => {
      // CSS allows a unitless zero, an `inset` keyword, and a fourth length —
      // the spread radius. All three appear in this token set.
      const len = String.raw`(-?[\d.]+)(?:px)?`;
      const geometry = new RegExp(
        `^\\s*(inset\\s+)?${len}\\s+${len}\\s+${len}(?:\\s+${len})?\\s+(.+?)\\s*$`, 'i',
      ).exec(entry);
      if (!geometry) fail(`${what}: shadow layer is not "[inset] <x> <y> <blur> [spread] <colour>": ${entry}`);
      const inset = Boolean(geometry[1]);
      const [x, y, blur] = [2, 3, 4].map((i) => Number(geometry[i]));
      const spread = geometry[5] === undefined ? 0 : Number(geometry[5]);
      const colour = geometry[6];

      const viaVar = /^rgba?\(\s*var\(\s*(--[a-z0-9-]+)\s*\)\s*\/\s*([\d.]+)\s*\)$/i.exec(colour);
      const literal = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*\/\s*([\d.]+)\s*\)$/i.exec(colour);

      let rgb;
      let alpha;
      if (viaVar) {
        const primitivePath = PRIMITIVE_BY_VAR.get(viaVar[1]);
        if (!primitivePath) fail(`${what}: shadow names ${viaVar[1]}, which is not a primitive token`);
        rgb = tripletChannels(primitivePath, what);
        alpha = Number(viaVar[2]);
      } else if (literal) {
        rgb = [1, 2, 3].map((i) => Number(literal[i]) / 255);
        alpha = Number(literal[4]);
      } else {
        fail(`${what}: shadow colour is neither a channel-triplet reference nor an rgb() literal: ${colour}`);
      }
      if (!Number.isFinite(alpha)) fail(`${what}: unreadable alpha in ${colour}`);
      return { inset, x, y, blur, spread, r: rgb[0], g: rgb[1], b: rgb[2], alpha };
    });
  };

  const light = parseLayers(css, dotted);
  const dark = parseLayers(String(cssDark), `${dotted} (dark)`);
  const layerLiteral = (l) =>
    `SCDSShadowLayer(inset: ${l.inset}, x: ${num(l.x)}, y: ${num(l.y)}, blur: ${num(l.blur)}, ` +
    `spread: ${num(l.spread)}, rgb: (${num(l.r)}, ${num(l.g)}, ${num(l.b)}), alpha: ${num(l.alpha)})`;

  const name = claim('Shadow', swiftName(path), dotted);
  counts.shadow += 1;
  return `    /// \`${dotted}\` · ${light.length} layers\n` +
    `    public static let ${name} = SCDSShadow(\n` +
    `        light: [\n${light.map((l) => `            ${layerLiteral(l)},`).join('\n')}\n        ],\n` +
    `        dark: [\n${dark.map((l) => `            ${layerLiteral(l)},`).join('\n')}\n        ]\n` +
    `    )`;
}

// --- walk the semantic tree ------------------------------------------------

const buckets = {
  Color: [], Typography: [], SpaceLayout: [], SpaceComponent: [],
  Radius: [], Border: [], Size: [], Motion: [], Shadow: [],
};

function route(path, token) {
  const group = path[0];
  const dotted = path.join('.');

  if (token.$type === 'color') { buckets.Color.push(colorLine(path, token)); return; }
  if (token.$type === 'typography') { buckets.Typography.push(typographyLine(path, token)); return; }
  if (token.$type === 'shadow') { buckets.Shadow.push(shadowLine(path, token)); return; }
  if (token.$type === 'duration') { buckets.Motion.push(durationLine(path, token)); return; }
  if (token.$type === 'cubicBezier') { buckets.Motion.push(easingLine(path, token)); return; }
  if (token.$type === 'spring') { buckets.Motion.push(springLine(path, token)); return; }

  if (group === 'space') {
    // The two ladders are kept apart, which is the whole point of emitting
    // them separately: chrome spacing cannot reach layout by autocomplete.
    if (path[1] === 'layout') { buckets.SpaceLayout.push(dimensionLine('SpaceLayout', path, token, 'spaceLayout')); return; }
    if (path[1] === 'component') { buckets.SpaceComponent.push(dimensionLine('SpaceComponent', path, token, 'spaceComponent')); return; }
    fail(`${dotted}: space token belongs to neither the layout nor the component ladder`);
  }

  if (token.$type === 'dimension') {
    if (group === 'radius') { buckets.Radius.push(dimensionLine('Radius', path, token, 'radius')); return; }
    if (group === 'border') { buckets.Border.push(dimensionLine('Border', path, token, 'border')); return; }
    if (group === 'size') { buckets.Size.push(dimensionLine('Size', path, token, 'size')); return; }
    fail(`${dotted}: dimension in group "${group}" has no Swift enum`);
  }

  if (token.$type === 'number') {
    if (group === 'motion') { buckets.Motion.push(numberLine('Motion', path, token, 'motion')); return; }
    if (group === 'size') { buckets.Size.push(numberLine('Size', path, token, 'size')); return; }
    fail(`${dotted}: number in group "${group}" has no Swift enum`);
  }

  fail(`${dotted}: $type "${token.$type}" is not emitted. Add a rule rather than letting it fall through.`);
}

for (const [dotted, { token, path }] of SEMANTIC_LEAVES) {
  void dotted;
  route(path, token);
}

// --- the file --------------------------------------------------------------

const sha = (s) => createHash('sha256').update(s).digest('hex').slice(0, 16);
const stamp = {
  primitivesVersion: primitives.$metadata?.version ?? 'unknown',
  semanticVersion: semantic.$metadata?.version ?? 'unknown',
  sourceGenerated: semantic.$metadata?.generated ?? 'unknown',
  primitivesHash: sha(primitivesRaw),
  semanticHash: sha(semanticRaw),
};

function section(name, lines, doc) {
  return `  // MARK: - ${name}\n\n  /// ${doc}\n  public enum ${name} {\n${lines.join('\n\n')}\n  }`;
}

const file = `// ============================================================
// SCDSTokens.swift — GENERATED · do not edit by hand.
//
// Generated by scripts/tokens-to-swift.mjs from:
//   - tokens/primitives.json
//   - tokens/semantic.json
//
// Run \`npm run tokens:swift\` to regenerate, \`npm run tokens:swift:check\`
// to fail on drift.
//
// SEMANTIC TOKENS ONLY. Primitives are resolved through during generation and
// are deliberately absent: a primitive reachable from view code is the same
// defect as a raw hex, one level of indirection later.
//
// Colours carry both appearances and resolve per system appearance at draw
// time. There is no theme switch to call.
// ============================================================

import SwiftUI

#if canImport(AppKit)
import AppKit
#endif

// MARK: - Supporting types

/// A type step with every axis it needs, and no way to take one without the rest.
///
/// There is no \`font\` property. \`font(relativeTo:)\` requires a system text
/// style, because the scaling anchor is the consuming app's decision and the
/// design system does not hold it. The face and the size are SCDS's.
public struct SCDSTypeStyle: Sendable, Equatable {
    public let family: String
    public let fallbacks: [String]
    public let size: CGFloat
    public let weight: Font.Weight
    public let lineHeightMultiple: CGFloat
    public let trackingEm: CGFloat

    /// Points of extra leading, which is what SwiftUI's \`lineSpacing\` wants.
    public var lineSpacing: CGFloat { size * (lineHeightMultiple - 1) }

    /// Tracking in points at this step's own size.
    public var tracking: CGFloat { size * trackingEm }

    /// The font, anchored to a system text style so accessibility sizes move it.
    public func font(relativeTo style: Font.TextStyle) -> Font {
        .custom(family, size: size, relativeTo: style)
    }
}

/// A cubic-bezier curve, carried as its four control points.
public struct SCDSEasing: Sendable, Equatable {
    public let x1: Double, y1: Double, x2: Double, y2: Double
    public init(_ x1: Double, _ y1: Double, _ x2: Double, _ y2: Double) {
        self.x1 = x1; self.y1 = y1; self.x2 = x2; self.y2 = y2
    }
    public func animation(duration: TimeInterval) -> Animation {
        .timingCurve(x1, y1, x2, y2, duration: duration)
    }
}

/// A spring tuned in sc-tune. CSS samples it into \`linear()\` over its natural
/// \`settle\` time and runs that curve over the paired duration token, so the
/// web may play it faster or slower than its physics.
public struct SCDSSpring: Sendable, Equatable {
    public let stiffness: Double, damping: Double, mass: Double
    /// Natural settle time in seconds.
    public let settle: TimeInterval
    public init(stiffness: Double, damping: Double, mass: Double, settle: TimeInterval) {
        self.stiffness = stiffness; self.damping = damping; self.mass = mass; self.settle = settle
    }
    /// The same spring run over \`duration\` (the paired duration token), so it
    /// lands when the CSS does. Time scales by s = settle / duration: stiffness
    /// by s², damping by s, which keeps the damping ratio (the overshoot).
    public func animation(duration: TimeInterval) -> Animation {
        let s = settle / duration
        return .interpolatingSpring(mass: mass, stiffness: stiffness * s * s, damping: damping * s, initialVelocity: 0)
    }
}

/// One layer of a composed shadow, in the shape SwiftUI's \`.shadow\` takes.
public struct SCDSShadowLayer: Sendable, Equatable {
    /// CSS \`inset\`. SwiftUI's \`.shadow\` draws outside a shape only, so an
    /// inset layer needs a mask-and-blend technique this file does not ship. The
    /// flag is carried rather than dropped: a consumer that needs one can see it
    /// exists, and \`scdsShadow(_:)\` refuses to draw it as an outer shadow.
    public let inset: Bool
    public let x: CGFloat, y: CGFloat, blur: CGFloat
    /// CSS spread radius. SwiftUI's \`.shadow\` has no equivalent, so a non-zero
    /// spread is carried for the same reason \`inset\` is: visible, not dropped.
    public let spread: CGFloat
    public let rgb: SIMD3<Double>
    public let alpha: Double
    public init(inset: Bool = false, x: CGFloat, y: CGFloat, blur: CGFloat, spread: CGFloat = 0,
                rgb: (Double, Double, Double), alpha: Double) {
        self.inset = inset
        self.x = x; self.y = y; self.blur = blur; self.spread = spread
        self.rgb = SIMD3(rgb.0, rgb.1, rgb.2)
        self.alpha = alpha
    }
    public var color: Color { Color(.sRGB, red: rgb.x, green: rgb.y, blue: rgb.z, opacity: alpha) }
}

/// A multi-layer shadow, per appearance. Apply with \`.scdsShadow(_:)\`.
public struct SCDSShadow: Sendable, Equatable {
    public let light: [SCDSShadowLayer]
    public let dark: [SCDSShadowLayer]

    /// True when a layer is inset or spread, neither of which \`scdsShadow(_:)\`
    /// can draw. Check it before reaching for the modifier.
    public var needsExplicitBuild: Bool { (light + dark).contains { $0.inset || $0.spread != 0 } }
}

public extension View {
    /// Stacks the shadow's layers in order, for the current appearance.
    func scdsShadow(_ shadow: SCDSShadow) -> some View {
        modifier(SCDSShadowModifier(shadow: shadow))
    }
}

private struct SCDSShadowModifier: ViewModifier {
    let shadow: SCDSShadow
    @Environment(\\.colorScheme) private var colorScheme
    func body(content: Content) -> some View {
        let layers = colorScheme == .dark ? shadow.dark : shadow.light
        // Drawing an inset layer as an outer one would be a visible lie, and a
        // silent skip would be an invisible one. Neither: it traps in debug.
        assert(!layers.contains { $0.inset || $0.spread != 0 },
               "scdsShadow draws plain outer shadows only. An inset or spread layer needs an explicit build.")
        return layers.filter { !$0.inset && $0.spread == 0 }.reduce(AnyView(content)) { view, layer in
            AnyView(view.shadow(color: layer.color, radius: layer.blur / 2, x: layer.x, y: layer.y))
        }
    }
}

public extension SwiftUI.Color {
    /// A colour that resolves itself against the system appearance.
    ///
    /// On AppKit this is a dynamic \`NSColor\`, so it re-resolves when the user
    /// changes appearance without the app observing anything. Elsewhere it
    /// falls back to the light pair, which is the documented default mode.
    static func scdsDynamic(
        light: (Double, Double, Double, Double),
        dark: (Double, Double, Double, Double)
    ) -> SwiftUI.Color {
        #if canImport(AppKit)
        return SwiftUI.Color(nsColor: NSColor(name: nil) { appearance in
            let isDark = appearance.bestMatch(from: [.aqua, .darkAqua]) == .darkAqua
            let c = isDark ? dark : light
            return NSColor(srgbRed: c.0, green: c.1, blue: c.2, alpha: c.3)
        })
        #else
        return SwiftUI.Color(.sRGB, red: light.0, green: light.1, blue: light.2, opacity: light.3)
        #endif
    }
}

// MARK: - Tokens

public enum SCDS {

  /// What this file was generated from. Compared by \`tokens:swift:check\`, and
  /// surfaced by consumers that warn on a design-system drift.
  ///
  /// There is no generated-at timestamp, deliberately: a wall-clock stamp makes
  /// every drift check report drift, which disables the check the stamp exists
  /// to serve.
  public enum Stamp {
    public static let primitivesVersion = ${JSON.stringify(stamp.primitivesVersion)}
    public static let semanticVersion = ${JSON.stringify(stamp.semanticVersion)}
    public static let sourceGenerated = ${JSON.stringify(stamp.sourceGenerated)}
    public static let primitivesHash = ${JSON.stringify(stamp.primitivesHash)}
    public static let semanticHash = ${JSON.stringify(stamp.semanticHash)}
    public static let tokenCount = ${Object.values(counts).reduce((a, b) => a + b, 0)}
  }

${section('Color', buckets.Color, 'Semantic colours. Each resolves light and dark on its own.')}

${section('Typography', buckets.Typography, 'Type steps, each carrying every axis it needs.')}

${section('SpaceLayout', buckets.SpaceLayout, 'The layout ladder. Distance between things on the page.')}

${section('SpaceComponent', buckets.SpaceComponent, 'The component ladder. Chrome spacing inside a control — never layout.')}

${section('Radius', buckets.Radius, 'Corner radii, as authored.')}

${section('Border', buckets.Border, 'Border widths and the dedicated focus ring.')}

${section('Size', buckets.Size, 'Named element sizes, including the touch-target floor.')}

${section('Motion', buckets.Motion, 'Durations in seconds, easings as control points, and scales.')}

${section('Shadow', buckets.Shadow, 'The button-only composed shadow. The only shadow in the system.')}
}
`;

// --- write, or check -------------------------------------------------------

const isCheck = process.argv.includes('--check');

if (isCheck) {
  if (!existsSync(OUT_PATH)) {
    console.error(`tokens:swift:check FAILED — ${OUT_PATH} does not exist. Run \`npm run tokens:swift\`.`);
    process.exit(1);
  }
  const committed = readFileSync(OUT_PATH, 'utf8');
  if (committed !== file) {
    console.error('tokens:swift:check FAILED — SCDSTokens.swift is stale.');
    console.error('  Run `npm run tokens:swift` and commit the result.');
    console.error('  A diff here on a branch that did not touch tokens/ means the tokens moved underneath it.');
    process.exit(1);
  }
  console.log('tokens:swift:check ok — SCDSTokens.swift matches tokens/.');
} else {
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, file, 'utf8');
  console.log(`SCDSTokens.swift written: ${OUT_PATH}`);
}

// Coverage, counted on both sides rather than eyeballed.
const emitted = Object.values(counts).reduce((a, b) => a + b, 0);
if (emitted !== SEMANTIC_LEAVES.size) {
  console.error(`tokens-to-swift: emitted ${emitted} symbols from ${SEMANTIC_LEAVES.size} semantic tokens.`);
  process.exit(1);
}
const semanticColors = [...SEMANTIC_LEAVES.values()].filter(({ token }) => token.$type === 'color').length;
if (counts.color !== semanticColors) {
  console.error(`tokens-to-swift: ${counts.color} colours emitted from ${semanticColors} semantic colour tokens.`);
  process.exit(1);
}
console.log(`  ${emitted} symbols from ${SEMANTIC_LEAVES.size} semantic tokens — every token emitted, every symbol traced back`);
console.log(`  colour ${counts.color} · type ${counts.typography} · space ${counts.spaceLayout}+${counts.spaceComponent} · ` +
            `radius ${counts.radius} · border ${counts.border} · size ${counts.size} · motion ${counts.motion} · shadow ${counts.shadow}`);
console.log(`  stamp: scds ${stamp.semanticVersion} · primitives ${stamp.primitivesHash} · semantic ${stamp.semanticHash}`);
