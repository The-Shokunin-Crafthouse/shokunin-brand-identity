/**
 * PlusSeparator — brand element 2p · the breadcrumb separator: three marks on a rising diagonal.
 *
 * Decorative. In a breadcrumb, mark the current page with aria-current="page" on its link.
 *
 *   Home <PlusSeparator /> Work <PlusSeparator /> Case study
 *
 * Decision: decisions/decisions.md 2026-10-04 · plus-field.
 */

import { PlusField } from '../PlusField/PlusField.jsx';
import styles from './PlusSeparator.module.css';

export function PlusSeparator({ shape, density, className = '', ...rest }) {
  return (
    <span className={`${styles.separator} ${className}`} aria-hidden="true" {...rest}>
      <PlusField as="span" art="usep" surface="none" shape={shape} density={density} />
    </span>
  );
}
