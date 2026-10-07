/**
 * sc-tune motion math: springs as CSS `linear()` easings, bezier parsing,
 * and curve sampling for the editor's preview.
 *
 * A spring is simulated, not approximated by a bezier: a bezier cannot
 * overshoot more than once, a spring can. The simulation runs a unit step
 * (0 → 1) with semi-implicit Euler at 1 ms until the value and velocity
 * settle, then samples the trajectory into `linear(...)`, which every
 * current engine supports. The settle time becomes the paired duration.
 */

const SETTLE = 0.0005;
const MAX_MS = 6000;
const SAMPLES = 60;

export function simulateSpring({ stiffness, damping, mass }) {
  let x = 0;
  let v = 0;
  const dt = 0.001;
  const trace = [0];
  let ms = 0;
  let peak = 0;
  while (ms < MAX_MS) {
    const a = (-stiffness * (x - 1) - damping * v) / mass;
    v += a * dt;
    x += v * dt;
    ms += 1;
    trace.push(x);
    if (x > peak) peak = x;
    if (Math.abs(x - 1) < SETTLE && Math.abs(v) < SETTLE) break;
  }
  return { trace, settleMs: ms, overshoot: Math.max(0, peak - 1) };
}

export function springToLinear(params) {
  const { trace, settleMs, overshoot } = simulateSpring(params);
  const pts = [];
  for (let i = 0; i < SAMPLES; i += 1) {
    const idx = Math.round((i / (SAMPLES - 1)) * (trace.length - 1));
    pts.push(+trace[idx].toFixed(4));
  }
  pts[pts.length - 1] = 1;
  return { easing: `linear(${pts.join(', ')})`, settleMs, overshoot };
}

export const parseBezier = (v) =>
  v?.match(/cubic-bezier\(([^)]+)\)/)?.[1].split(',').map(Number) || null;

/** Points (t, y) for drawing any easing: cubic-bezier or linear(). */
export function curvePoints(easing) {
  const b = parseBezier(easing);
  if (b) {
    const pts = [];
    for (let i = 0; i <= 40; i += 1) {
      const s = i / 40;
      const t = 3 * (1 - s) ** 2 * s * b[0] + 3 * (1 - s) * s ** 2 * b[2] + s ** 3;
      const y = 3 * (1 - s) ** 2 * s * b[1] + 3 * (1 - s) * s ** 2 * b[3] + s ** 3;
      pts.push([t, y]);
    }
    return pts;
  }
  const lin = easing?.match(/linear\(([^)]+)\)/)?.[1].split(',').map((n) => parseFloat(n));
  if (lin) return lin.map((y, i) => [i / (lin.length - 1), y]);
  return [[0, 0], [1, 1]];
}

export function curvePath(easing) {
  const pts = curvePoints(easing);
  const ys = pts.map((p) => p[1]);
  const lo = Math.min(0, ...ys);
  const hi = Math.max(1, ...ys);
  const span = hi - lo || 1;
  return pts.map(([t, y], i) => `${i ? 'L' : 'M'}${t.toFixed(3)} ${(1 - (y - lo) / span).toFixed(3)}`).join(' ');
}
