/**
 * Button — 3.1 · primary, secondary, ghost, destructive, disabled, loading.
 *
 * `disabled` and `loading` are independent of variant. Loading suppresses
 * the click handler and renders an inline pulse next to the label.
 */

import styles from './Button.module.css';

const VARIANTS = ['primary', 'secondary', 'ghost', 'destructive'];

export function Button({
  variant = 'primary',
  disabled = false,
  loading = false,
  type = 'button',
  children,
  onClick,
  className = '',
  ...rest
}) {
  const v = VARIANTS.includes(variant) ? variant : 'primary';
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[v]} ${loading ? styles.loading : ''} ${className}`}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      onClick={isDisabled ? undefined : onClick}
      {...rest}
    >
      <span className={styles.label}>{children}</span>
      {loading && <span className={styles.spinner} aria-hidden="true" />}
    </button>
  );
}
