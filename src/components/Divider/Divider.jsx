/**
 * Divider — 3.5 · horizontal, vertical, with label.
 *
 * States ship in showcase grid: orientation × label-presence.
 * Token consumption + state matrix in ./Divider.tokens.md.
 */

import styles from './Divider.module.css';

export function Divider({ orientation = 'horizontal', label, className = '' }) {
  if (orientation === 'vertical') {
    return <span className={`${styles.vertical} ${className}`} role="separator" aria-orientation="vertical" />;
  }

  if (label) {
    return (
      <div className={`${styles.labelled} ${className}`} role="separator" aria-orientation="horizontal">
        <span className={styles.rule} />
        <span className={styles.label}>{label}</span>
        <span className={styles.rule} />
      </div>
    );
  }

  return <hr className={`${styles.horizontal} ${className}`} aria-orientation="horizontal" />;
}
