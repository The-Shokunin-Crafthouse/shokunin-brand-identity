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

// The spring simulation lives in src/motion/spring.js, shared with the
// token generators, so a spring tuned here ships as exactly this curve.
export { simulateSpring, springToLinear } from '../../src/motion/spring.js';

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
