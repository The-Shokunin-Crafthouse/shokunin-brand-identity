/**
 * PlusSeparator — brand element 2p · the breadcrumb separator: three marks on a rising diagonal.
 *
 * Decorative. In a breadcrumb, mark the current page with aria-current="page" on its link.
 *
 *   Home <PlusSeparator /> Work <PlusSeparator /> Case study
 *
 * `tone`: `default` (text.primary marks) or `muted` (text.disabled marks), for a
 * separator inside a dense row where it must sit under the row's own text
 * (Studio PM PR rows, 2026-10-05).
 *
 * Decision: decisions/decisions.md 2026-10-04 · plus-field.
 */

import { PlusField } from '../PlusField/PlusField.jsx';
import styles from './PlusSeparator.module.css';

export function PlusSeparator({ shape, density, tone = 'default', className = '', ...rest }) {
  return (
    <span className={`${styles.separator} ${tone === 'muted' ? styles.muted : ''} ${className}`} aria-hidden="true" {...rest}>
      <PlusField as="span" art="usep" surface="none" shape={shape} density={density} />
    </span>
  );
}
