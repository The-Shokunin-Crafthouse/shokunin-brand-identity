/**
 * PlusProgress — brand element 2h · progress as a row of plus marks, filled in teal.
 *
 *   variant="thin"  1 row, for inline upload or scroll progress
 *   variant="band"  3 rows, for a page-level reading or task indicator
 *
 * `value` runs 0–1. The marks are decorative; a visually hidden role="progressbar" carries the
 * value (aria-valuenow 0–100) and `label` names it. Teal is the progress fill, one of the three
 * teal roles. For a draggable bar use ProgressIndicator interactive instead.
 * Decision: decisions/decisions.md 2026-10-04 · plus-field.
 */

import { PlusField } from '../PlusField/PlusField.jsx';
import styles from './PlusProgress.module.css';

const ROWS = { thin: 1, band: 3 };

export function PlusProgress({ value = 0, variant = 'thin', label, surface = 'none', shape, density, className = '', ...rest }) {
  const v = ROWS[variant] ? variant : 'thin';
  return (
    <div className={`${styles.progress} ${styles[v]} ${className}`} {...rest}>
      <PlusField art="uprog" progress={value} rows={ROWS[v]} label={label} surface={surface} shape={shape} density={density} />
    </div>
  );
}
