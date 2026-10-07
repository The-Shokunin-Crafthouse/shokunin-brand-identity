/**
 * Springs as CSS `linear()` curves. One implementation for the sc-tune lab
 * (previews/tune/motion.js re-exports it), the elastic engine and the token
 * generators (a `$type: "spring"` token compiles through it), so a spring
 * tuned in the lab ships as exactly the curve Levi saw.
 *
 * A spring is simulated, not approximated by a bezier: a bezier cannot
 * overshoot more than once, a spring can. The simulation runs a unit step
 * (0 → 1) with semi-implicit Euler at 1 ms until the value and velocity
 * settle, then samples the trajectory into `linear(...)`. The settle time is
 * the spring's natural duration; a paired duration token may stretch or
 * compress it.
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

/** Duration (ms) and bounce, the reel's and Framer's way, as stiffness and damping (mass 1). */
export const fromDurationBounce = ({ duration, bounce = 0 }) => ({
  stiffness: (2 * Math.PI / (duration / 1000)) ** 2,
  damping: (4 * Math.PI * (1 - bounce)) / (duration / 1000),
  mass: 1,
});
