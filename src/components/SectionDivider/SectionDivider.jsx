/**
 * SectionDivider — brand element 2a · a crisp plus-grid rule in three weights.
 *
 *   hairline  1 row, faded both ends   between paragraphs
 *   band      3 rows, faded both ends  between sections
 *   block     5 rows, square ends      a chapter break
 *
 * A structural slot, so the grid is crisp (no jitter, no offset rows). Draws in text-primary on
 * whatever surface it sits on (surface="none"); pass a surface to paint its own ground.
 * Decision: decisions/decisions.md 2026-10-04 · plus-field.
 */

import { PlusField } from '../PlusField/PlusField.jsx';
import styles from './SectionDivider.module.css';

const WEIGHTS = {
  hairline: { rows: 1, fade: 'both' },
  band: { rows: 3, fade: 'both' },
  block: { rows: 5, fade: 'none' },
};

export function SectionDivider({ weight = 'band', surface = 'none', shape, density, className = '', ...rest }) {
  const w = WEIGHTS[weight] ? weight : 'band';
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={`${styles.divider} ${styles[w]} ${className}`}
      {...rest}
    >
      <PlusField art="udiv" rows={WEIGHTS[w].rows} fade={WEIGHTS[w].fade} surface={surface} shape={shape} density={density} />
    </div>
  );
}
