/**
 * PlusUnderline — brand element 2j · the active-tab indicator. Two crisp rows of teal marks.
 *
 * Put one under every tab label and set `active` on the current one. An inactive underline
 * keeps the same height and draws nothing, so labels stay level when the selection moves.
 * Works under NavBar-style links and SegmentedControl-style tabs:
 *
 *   <a aria-current="page">Work<PlusUnderline active /></a>
 *
 * The indicator is decorative. Announce the state on the tab itself (aria-current or
 * aria-selected). Teal here follows the rule: it marks the active item.
 * Decision: decisions/decisions.md 2026-10-04 · plus-field.
 */

import { PlusField } from '../PlusField/PlusField.jsx';
import styles from './PlusUnderline.module.css';

export function PlusUnderline({ active = true, shape, density, className = '', ...rest }) {
  return (
    <span className={`${styles.underline} ${className}`} aria-hidden="true" {...rest}>
      {active && <PlusField as="span" art="uline" surface="none" shape={shape} density={density} />}
    </span>
  );
}
