/**
 * Switch knob motion beyond a plain slide: stretch, squash and press lean.
 *
 * Reference: kabarza's elastic toggles (instagram.com/reel/DeK0AFcIRhf).
 * The knob is "as long as it is fast": its length follows the speed of the
 * travel curve, so it is round again by the time it lands. It stretches as
 * two round ends and a bar (its width grows, its pill radius holds), never
 * by scaleX, which would turn it into an egg.
 *
 * Every number comes from a token, read from the element at the moment of
 * the interaction, so sc-tune overrides and slow-mo apply:
 *   --sc-motion-switch-travel-duration / -easing  travel time and curve
 *   --sc-motion-switch-stretch                    extra length at peak speed (× knob)
 *   --sc-motion-switch-squash                     flattening at peak speed (× knob)
 *   --sc-motion-switch-press-lean / -lean-duration  pointer-down lean
 * With stretch, squash and lean all 0 (shipped) nothing here runs and the
 * CSS transition moves the knob, exactly as before.
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

const ms = (s) => (s.endsWith('ms') ? parseFloat(s) : parseFloat(s) * 1000) || 0;

/** Token values resolved on the element (overrides and slow-mo included). */
export function readMotion(track, thumb) {
  const cs = getComputedStyle(track);
  const num = (n) => parseFloat(cs.getPropertyValue(n)) || 0;
  const probe = document.createElement('span');
  probe.style.cssText = 'position:absolute;visibility:hidden;'
    + 'transition-duration:var(--sc-motion-switch-travel-duration),var(--sc-motion-switch-press-lean-duration);'
    + 'transition-timing-function:var(--sc-motion-switch-travel-easing),var(--sc-motion-press-easing);';
  track.appendChild(probe);
  const pcs = getComputedStyle(probe);
  const [travelDur, leanDur] = pcs.transitionDuration.split(',').map((d) => ms(d.trim()));
  // Split timing functions on top-level commas only: linear() has its own.
  const fns = [];
  let depth = 0;
  let cur = '';
  for (const ch of pcs.transitionTimingFunction) {
    if (ch === '(') depth += 1;
    if (ch === ')') depth -= 1;
    if (ch === ',' && depth === 0) { fns.push(cur.trim()); cur = ''; } else cur += ch;
  }
  fns.push(cur.trim());
  probe.remove();
  const trackW = parseFloat(cs.width);
  const trackH = parseFloat(cs.height);
  const knob = parseFloat(getComputedStyle(thumb).height);
  const inset = (trackH - knob) / 2;
  return {
    travelDur,
    travelEasing: fns[0],
    leanDur,
    leanEasing: fns[1],
    stretch: num('--sc-motion-switch-stretch'),
    squash: num('--sc-motion-switch-squash'),
    lean: num('--sc-motion-switch-press-lean'),
    knob,
    travel: trackW - knob - 2 * inset,
  };
}

export const isActive = (m) => m.stretch > 0 || m.squash > 0 || m.lean > 0;

/** The knob as two edges (left, right) in px from its resting-off position. */
export const restPose = (m, on) => ({ l: on ? m.travel : 0, r: (on ? m.travel : 0) + m.knob, h: m.knob });

export function leanPose(m, on) {
  // Pressing an off switch leans right (toward on); an on switch leans left.
  const adv = m.lean * 0.25 * m.travel;
  const rest = restPose(m, on);
  return on ? { ...rest, l: rest.l - adv } : { ...rest, r: rest.r + adv };
}

const frame = (m, { l, r, h }) => ({
  transform: `translateX(${l}px)`,
  width: `${r - l}px`,
  height: `${h}px`,
});

/** Keyframes from one pose to another along the travel curve. */
export function travelFrames(m, from, to) {
  const p = sampleEasing(m.travelEasing);
  const v = p.map((y, i) => Math.abs((p[Math.min(i + 1, p.length - 1)] - p[Math.max(i - 1, 0)])));
  const vmax = Math.max(...v) || 1;
  return p.map((y, i) => {
    const vn = v[i] / vmax;
    // The front runs ahead and the back trails, half the extra length each.
    const extra = m.stretch * m.knob * vn;
    const l = from.l + (to.l - from.l) * y - extra / 2;
    const r = from.r + (to.r - from.r) * y + extra / 2;
    return frame(m, { l, r, h: m.knob * (1 - m.squash * vn) });
  });
}

export const leanFrames = (m, from, to) => [frame(m, from), frame(m, to)];

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
