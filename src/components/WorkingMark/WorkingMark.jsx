/**
 * WorkingMark — the "something is working right now" mark.
 *
 * A hand-drawn scribble of eleven loops (the chaos-circles pattern, Figma
 * `Atom/Step marker` · State=current). While `working`:
 *   - spin     each loop turns once per 1600ms beat; neighbouring loops turn
 *              opposite ways, and the eleven are spread evenly across the beat
 *   - pulse    each loop shrinks to 80% and back once per beat, eased in-out
 *   - shimmer  a highlight sweeps round the mark 2.5 times per beat, mixing the
 *              on-accent ink into the accent up to 80% at its brightest
 * The whole thing repeats exactly every two beats (3200ms), so it loops without a jump.
 *
 * Two states:
 *   working   accent ink, animated (still, with no shimmer, under prefers-reduced-motion)
 *   paused    secondary ink, still: the step is current but nothing is acting
 *
 * Usage:
 *   <WorkingMark />                         // decorative, aria-hidden
 *   <WorkingMark label="Working" />         // announced as an image
 *   <WorkingMark working={false} />         // paused, still
 *   <WorkingMark size="md" />               // 24px via --sc-size-icon-md
 *
 * Standalone animated asset (for <img>, email, docs): assets/icons/working-mark.svg.
 * Decision: decisions/decisions.md 2026-10-01 · working-mark.
 */

import { useId } from 'react';
import { WORKING_MARK_LOOPS, WORKING_MARK_VIEWBOX } from './workingMarkPaths.js';
import styles from './WorkingMark.module.css';

const SIZE_CLASS = { sm: styles.sm, md: styles.md, lg: styles.lg };

/** Seconds the shimmer takes to repeat exactly: two beats. */
const SHIMMER_CYCLE_S = 3.2;

/**
 * The shimmer is a gradient in each loop's own (spinning) coordinates, so its turn
 * per cycle is the sweep's 5 turns minus the loop's own 2: 3 for a clockwise loop,
 * 7 for an anticlockwise one. Its starting angle cancels the loop's starting angle,
 * so every loop is lit on the same side at the same moment.
 */
function shimmerTurn(index, count) {
  const clockwise = index % 2 === 0;
  const loopStart = (clockwise ? 1 : -1) * (360 * index) / count;
  const from = -loopStart;
  const to = from + 360 * (clockwise ? 3 : 7);
  return { from: `${from.toFixed(2)} 8 8`, to: `${to.toFixed(2)} 8 8` };
}

export function WorkingMark({ working = true, size = 'sm', label, className = '', ...rest }) {
  const uid = `wm${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const count = WORKING_MARK_LOOPS.length;
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true };
  const classes = [
    styles.mark,
    SIZE_CLASS[size] ?? styles.sm,
    working ? styles.working : styles.paused,
    className,
  ].filter(Boolean).join(' ');

  return (
    <svg
      viewBox={`0 0 ${WORKING_MARK_VIEWBOX} ${WORKING_MARK_VIEWBOX}`}
      className={classes}
      focusable="false"
      {...a11y}
      {...rest}
    >
      {working && (
        <defs>
          {WORKING_MARK_LOOPS.map((_, i) => {
            const { from, to } = shimmerTurn(i, count);
            return (
              <linearGradient key={i} id={`${uid}-s${i}`} gradientUnits="userSpaceOnUse" x1="8" y1="8" x2="16" y2="8">
                <stop offset="0" className={styles.base} />
                <stop offset="0.45" className={styles.base} />
                <stop offset="1" className={styles.glint} />
                <animateTransform
                  attributeName="gradientTransform"
                  type="rotate"
                  from={from}
                  to={to}
                  dur={`${SHIMMER_CYCLE_S}s`}
                  repeatCount="indefinite"
                />
              </linearGradient>
            );
          })}
        </defs>
      )}
      {WORKING_MARK_LOOPS.map((d, i) => (
        <g key={i} className={styles.spin} style={{ '--wm-i': i }}>
          <path
            d={d}
            className={styles.loop}
            style={{ '--wm-i': i }}
            stroke={working ? `url(#${uid}-s${i})` : undefined}
          />
        </g>
      ))}
    </svg>
  );
}
