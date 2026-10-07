/**
 * Elastic motion: travel along a curve, stretch with speed, squash, press lean.
 *
 * Reference: kabarza's elastic toggles (instagram.com/reel/DeK0AFcIRhf).
 * A moving pill is "as long as it is fast": its length follows the speed of
 * the travel curve, so it is round again by the time it lands. It stretches
 * as two round ends and a bar (its width grows, its pill radius holds),
 * never by scaleX, which turns it into an egg.
 *
 * Shared by Switch (knob), SegmentedControl (indicator), PlusUnderline and
 * NavBar (active underline) and Tooltip (lift). Each component owns role
 * tokens under one prefix and reads them from the element at the moment of
 * the interaction, so sc-tune overrides and slow-mo apply:
 *   --sc-motion-<prefix>-travel-duration / -easing    travel time and curve
 *   --sc-motion-<prefix>-stretch                      extra length at peak speed (× the pill's height)
 *   --sc-motion-<prefix>-squash                       flattening at peak speed (× the pill's height)
 *   --sc-motion-<prefix>-press-lean / -lean-duration  pointer-down lean (1 = a quarter of the way)
 * Shipped, stretch, squash and lean are 0: nothing here runs and each
 * component's CSS transition moves it exactly as before.
 */

const SAMPLES = 60;

const KEYWORDS = {
  linear: [0, 0, 1, 1],
  ease: [0.25, 0.1, 0.25, 1],
  'ease-in': [0.42, 0, 1, 1],
  'ease-out': [0, 0, 0.58, 1],
  'ease-in-out': [0.42, 0, 0.58, 1],
};

function bezierAt([x1, y1, x2, y2], t) {
  const f = (a, b, s) => 3 * (1 - s) ** 2 * s * a + 3 * (1 - s) * s ** 2 * b + s ** 3;
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 40; i += 1) {
    const mid = (lo + hi) / 2;
    if (f(x1, x2, mid) < t) lo = mid; else hi = mid;
  }
  return f(y1, y2, (lo + hi) / 2);
}

// CSS linear(): stops are "value [pct] [pct]"; stops without a position
// are spread evenly between their positioned neighbours.
function parseLinear(body) {
  const stops = [];
  for (const part of body.split(',')) {
    const [v, ...pcts] = part.trim().split(/\s+/);
    if (!pcts.length) stops.push({ v: +v, x: null });
    for (const p of pcts) stops.push({ v: +v, x: parseFloat(p) / 100 });
  }
  if (stops[0].x === null) stops[0].x = 0;
  if (stops.at(-1).x === null) stops.at(-1).x = 1;
  for (let i = 1; i < stops.length; i += 1) {
    if (stops[i].x !== null) { stops[i].x = Math.max(stops[i].x, stops[i - 1].x); continue; }
    let j = i;
    while (stops[j].x === null) j += 1;
    const step = (stops[j].x - stops[i - 1].x) / (j - i + 1);
    for (let k = i; k < j; k += 1) stops[k].x = stops[k - 1].x + step;
  }
  return stops;
}

function linearAt(stops, t) {
  for (let i = 1; i < stops.length; i += 1) {
    if (t <= stops[i].x) {
      const a = stops[i - 1];
      const b = stops[i];
      const span = b.x - a.x;
      return span ? a.v + ((t - a.x) / span) * (b.v - a.v) : b.v;
    }
  }
  return stops.at(-1).v;
}

/** Positions 0..1 (overshoot allowed) at SAMPLES evenly spaced times. */
export function sampleEasing(easing) {
  const e = (easing || 'ease').trim();
  const lin = e.match(/^linear\((.+)\)$/);
  if (lin) {
    const stops = parseLinear(lin[1]);
    return Array.from({ length: SAMPLES }, (_, i) => linearAt(stops, i / (SAMPLES - 1)));
  }
  const bz = e.match(/cubic-bezier\(([^)]+)\)/)?.[1].split(',').map(Number) || KEYWORDS[e] || KEYWORDS.ease;
  return Array.from({ length: SAMPLES }, (_, i) => bezierAt(bz, i / (SAMPLES - 1)));
}

/** Normalised speed (0..1) at each sample of a curve. */
export function speeds(p) {
  const v = p.map((_, i) => Math.abs(p[Math.min(i + 1, p.length - 1)] - p[Math.max(i - 1, 0)]));
  // It leaves from rest and lands at rest, so the end samples carry no stretch.
  v[0] = 0;
  v[v.length - 1] = 0;
  const vmax = Math.max(...v) || 1;
  return v.map((x) => x / vmax);
}

const ms = (s) => (s.endsWith('ms') ? parseFloat(s) : parseFloat(s) * 1000) || 0;

function splitTop(list) {
  const out = [];
  let depth = 0;
  let cur = '';
  for (const ch of list) {
    if (ch === '(') depth += 1;
    if (ch === ')') depth -= 1;
    if (ch === ',' && depth === 0) { out.push(cur.trim()); cur = ''; } else cur += ch;
  }
  out.push(cur.trim());
  return out;
}

/**
 * A component's elastic tokens resolved on `el` (overrides and slow-mo
 * included). Durations and curves go through a probe so var() and calc()
 * resolve the way a transition would.
 */
export function readElastic(el, prefix) {
  const t = `--sc-motion-${prefix}`;
  const cs = getComputedStyle(el);
  const num = (n) => parseFloat(cs.getPropertyValue(n)) || 0;
  const probe = document.createElement('span');
  probe.style.cssText = 'position:absolute;visibility:hidden;'
    + `transition-duration:var(${t}-travel-duration),var(${t}-press-lean-duration,0ms);`
    + `transition-timing-function:var(${t}-travel-easing),var(--sc-motion-press-easing);`;
  el.appendChild(probe);
  const pcs = getComputedStyle(probe);
  const [travelDur, leanDur] = pcs.transitionDuration.split(',').map((d) => ms(d.trim()));
  const [travelEasing, leanEasing] = splitTop(pcs.transitionTimingFunction);
  probe.remove();
  return {
    travelDur,
    travelEasing,
    leanDur,
    leanEasing,
    stretch: num(`${t}-stretch`),
    squash: num(`${t}-squash`),
    lean: num(`${t}-press-lean`),
  };
}

export const isActive = (m) => !!m && (m.stretch > 0 || m.squash > 0 || m.lean > 0);

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * A horizontal pill as two edges. Poses are { l, r } in px from a base
 * the caller picks; `cap` is the pill's resting height (its end diameter).
 * Each frame: translateX(l), width r − l, and a height flattened by squash.
 * `recenter` adds a translateY that keeps a top-anchored pill on its line;
 * a pill its parent already centres (the Switch knob) passes false.
 */
export function pillFrame({ l, r, h }, cap, recenter = true) {
  return {
    transform: `translate(${l}px, ${recenter ? (cap - h) / 2 : 0}px)`,
    width: `${r - l}px`,
    height: `${h}px`,
  };
}

/** Keyframes from one pose to another along the travel curve. */
export function travelFrames(m, from, to, cap, recenter = true) {
  const p = sampleEasing(m.travelEasing);
  const v = speeds(p);
  return p.map((y, i) => {
    // The front runs ahead and the back trails, half the extra length each.
    const extra = m.stretch * cap * v[i];
    const l = from.l + (to.l - from.l) * y - extra / 2;
    const r = from.r + (to.r - from.r) * y + extra / 2;
    return pillFrame({ l, r, h: cap * (1 - m.squash * v[i]) }, cap, recenter);
  });
}

/** The pose a pill holds while pressed toward `target` (a pose it would travel to). */
export function leanToward(m, rest, target) {
  const dir = Math.sign((target.l + target.r) - (rest.l + rest.r));
  const adv = m.lean * 0.25 * Math.abs(((target.l + target.r) - (rest.l + rest.r)) / 2);
  if (dir > 0) return { ...rest, r: rest.r + adv };
  if (dir < 0) return { ...rest, l: rest.l - adv };
  return rest;
}

/**
 * Run keyframes on `el`, cancelling whatever it was running. `hold` keeps
 * the last frame (a lean); otherwise `onDone` runs when it lands.
 */
export function run(el, frames, duration, easing, { hold = false, onDone } = {}) {
  el.getAnimations().forEach((a) => a.cancel());
  const a = el.animate(frames, { duration, easing, fill: 'forwards' });
  if (!hold) a.onfinish = () => { a.cancel(); onDone?.(); };
  return a;
}

/**
 * An element's on-screen box in its own CSS px: client rects are scaled by
 * any CSS `zoom` above it (the sc-tune stages zoom), keyframes are not.
 */
export function cssRect(el) {
  const r = el.getBoundingClientRect();
  const z = el.currentCSSZoom || 1;
  return { left: r.left / z, right: r.right / z, width: r.width / z, top: r.top / z, height: r.height / z };
}

/** A pill's current pose (animation included) relative to `base` (a cssRect). */
export function poseOf(el, base) {
  const r = cssRect(el);
  return { l: r.left - base.left, r: r.right - base.left };
}
