/**
 * PlusBullet — brand element 2p · a 3×3 block of plus marks, used as a list bullet.
 *
 * `accent` marks the current item in teal (one of the three teal roles). Decorative: put it in a
 * real list, and announce "current" in the text or with aria-current on the item.
 *
 *   <li><PlusBullet accent /> Design · current</li>
 *
 * Decision: decisions/decisions.md 2026-10-04 · plus-field.
 */

import { PlusField } from '../PlusField/PlusField.jsx';
import styles from './PlusBullet.module.css';

export function PlusBullet({ accent = false, shape, density, className = '', ...rest }) {
  return (
    <span className={`${styles.bullet} ${className}`} aria-hidden="true" {...rest}>
      <PlusField as="span" art="ubullet" accent={accent} surface="none" shape={shape} density={density} />
    </span>
  );
}
