/**
 * Badge — 3.2 · default, success, warning, error, neutral.
 *
 * Outlined chrome label. Color carries semantic — accent for default,
 * status hues for success/warning/error, muted for neutral.
 */

import styles from './Badge.module.css';

const VARIANTS = ['default', 'success', 'warning', 'error', 'neutral'];

export function Badge({ variant = 'default', children, className = '' }) {
  const v = VARIANTS.includes(variant) ? variant : 'default';
  return (
    <span className={`${styles.badge} ${styles[v]} ${className}`}>{children}</span>
  );
}
