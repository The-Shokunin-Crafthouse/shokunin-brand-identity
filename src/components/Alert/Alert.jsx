/**
 * Alert — 3.11 · info, warning, error, success.
 *
 * Plate with a status-coloured left rule (role tokens), optional title,
 * and body.
 * Live region so screen readers announce non-info alerts on insertion.
 */

import styles from './Alert.module.css';

const VARIANTS = ['info', 'warning', 'error', 'success'];

export function Alert({ variant = 'info', title, children, className = '' }) {
  const v = VARIANTS.includes(variant) ? variant : 'info';
  const role = v === 'error' || v === 'warning' ? 'alert' : 'status';
  return (
    <div className={`${styles.alert} ${styles[v]} ${className}`} role={role}>
      <div className={styles.body}>
        {title && <p className={styles.title}>{title}</p>}
        <div className={styles.message}>{children}</div>
      </div>
    </div>
  );
}
