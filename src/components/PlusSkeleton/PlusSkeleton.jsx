/**
 * PlusSkeleton — brand element 2g · a card-shaped skeleton (avatar, two title lines, three body
 * lines, a media block) drawn in faint marks, with a highlight sweeping across while it waits.
 *
 * Under prefers-reduced-motion, or with animate={false}, the shapes rest at their faint value.
 * Pass `label` to announce the wait (visually hidden role="status"); leave it off when several
 * skeletons load together and one status elsewhere already speaks for them.
 * Decision: decisions/decisions.md 2026-10-04 · plus-field.
 */

import { PlusField } from '../PlusField/PlusField.jsx';
import styles from './PlusSkeleton.module.css';

export function PlusSkeleton({ label, surface = 'raised', animate = true, shape, density, className = '', ...rest }) {
  return (
    <div className={`${styles.skeleton} ${className}`} aria-busy="true" {...rest}>
      <PlusField art="uskel" label={label} surface={surface} animate={animate} shape={shape} density={density} />
    </div>
  );
}
