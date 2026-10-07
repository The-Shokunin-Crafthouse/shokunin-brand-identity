/**
 * Switch knob motion: the shared elastic engine (src/motion/elastic.js) on
 * the knob, with the Switch's geometry. Tokens: --sc-motion-switch-*.
 * With stretch, squash and lean all 0 (shipped) nothing here runs and the
 * CSS transition moves the knob, exactly as before.
 */

import {
  readElastic, isActive, travelFrames as pillTravel, leanToward, pillFrame, prefersReducedMotion,
} from '../../motion/elastic.js';

export { isActive, prefersReducedMotion };

/** Token values and geometry resolved on the track (overrides and slow-mo included). */
export function readMotion(track, thumb) {
  const m = readElastic(track, 'switch');
  const cs = getComputedStyle(track);
  const trackW = parseFloat(cs.width);
  const trackH = parseFloat(cs.height);
  const knob = parseFloat(getComputedStyle(thumb).height);
  const inset = (trackH - knob) / 2;
  return { ...m, knob, travel: trackW - knob - 2 * inset };
}

/** The knob as two edges (left, right) in px from its resting-off position. */
export const restPose = (m, on) => ({ l: on ? m.travel : 0, r: (on ? m.travel : 0) + m.knob });

// Pressing an off switch leans toward on; an on switch leans toward off.
export const leanPose = (m, on) => leanToward(m, restPose(m, on), restPose(m, !on));

export const travelFrames = (m, from, to) => pillTravel(m, from, to, m.knob, false);

export const leanFrames = (m, from, to) => [
  pillFrame({ ...from, h: m.knob }, m.knob, false),
  pillFrame({ ...to, h: m.knob }, m.knob, false),
];
