/**
 * PlusTimeline — brand element 2o · a vertical timeline or stepper.
 *
 * The connector and the nodes are drawn by `PlusField art="utime"`; the labels are DOM, in an
 * ordered list whose rows share the canvas's row pitch, so every label sits level with its node.
 * Steps before `current` are done (solid), `current` is teal (one of the three teal roles),
 * later steps are faint and their labels drop to text-tertiary.
 *
 *   <PlusTimeline steps={['Brief', 'Design', 'Build · in progress', 'Launch']} current={2} />
 *
 * Decision: decisions/decisions.md 2026-10-04 · plus-field.
 */

import { PlusField } from '../PlusField/PlusField.jsx';
import styles from './PlusTimeline.module.css';

export function PlusTimeline({ steps = [], current = 0, label, surface = 'none', shape, density, className = '', ...rest }) {
  const n = steps.length;
  if (!n) return null;
  return (
    <div className={`${styles.timeline} ${className}`} {...rest}>
      <div className={styles.rail}>
        <PlusField art="utime" steps={n} current={current} surface={surface} shape={shape} density={density} />
      </div>
      <ol className={styles.steps} aria-label={label}>
        {steps.map((step, i) => (
          <li
            key={i}
            className={`${styles.step} ${i > current ? styles.upcoming : ''}`}
            aria-current={i === current ? 'step' : undefined}
          >
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
