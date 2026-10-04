/**
 * HeadingRule — brand element 2b · a heading followed by a plus-grid rule that fills the rest of
 * the line and fades out at the far end.
 *
 *   variant="title"    title-section heading, 3-row band
 *   variant="eyebrow"  mono-caption label ("02 / Services"), 1-row hairline
 *
 * The heading is real text in the element named by `as` (default h2 for title, p for eyebrow).
 * Decision: decisions/decisions.md 2026-10-04 · plus-field.
 */

import { PlusField } from '../PlusField/PlusField.jsx';
import styles from './HeadingRule.module.css';

const VARIANTS = {
  title: { rows: 3, tag: 'h2' },
  eyebrow: { rows: 1, tag: 'p' },
};

export function HeadingRule({ variant = 'title', as, surface = 'none', shape, density, children, className = '', ...rest }) {
  const v = VARIANTS[variant] ? variant : 'title';
  const Tag = as || VARIANTS[v].tag;
  return (
    <div className={`${styles.row} ${styles[v]} ${className}`} {...rest}>
      <Tag className={styles.heading}>{children}</Tag>
      <div className={styles.rule}>
        <PlusField art="udiv" rows={VARIANTS[v].rows} fade="end" surface={surface} shape={shape} density={density} />
      </div>
    </div>
  );
}
