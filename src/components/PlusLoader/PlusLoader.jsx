/**
 * PlusLoader — brand element 2i · the page loader. A zigzag of marks that draws itself, holds,
 * fades and repeats (2.8 s). Square, on the inverse surface by default.
 *
 * Under prefers-reduced-motion, or with animate={false}, it shows the drawn zigzag still.
 * `label` (default "Loading") is announced once through a visually hidden role="status".
 * Decision: decisions/decisions.md 2026-10-04 · plus-field.
 */

import { PlusField } from '../PlusField/PlusField.jsx';
import styles from './PlusLoader.module.css';

export function PlusLoader({ label = 'Loading', surface = 'inverse', animate = true, shape, density, className = '', ...rest }) {
  return (
    <div className={`${styles.loader} ${className}`} {...rest}>
      <PlusField art="uloader" label={label} surface={surface} animate={animate} shape={shape} density={density} />
    </div>
  );
}
