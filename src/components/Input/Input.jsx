/**
 * Input — 3.4 · default, focus, filled, error, disabled.
 *
 * Wraps a native <input> with a label and optional helper/error text.
 * Focus + filled are CSS-pseudo-driven; error and disabled are props.
 * Helper text is replaced by error text when `error` is set.
 */

import { useId } from 'react';
import styles from './Input.module.css';

export function Input({
  label,
  helper,
  error,
  disabled = false,
  type = 'text',
  value,
  onChange,
  placeholder,
  className = '',
  ...rest
}) {
  const id = useId();
  const helperId = `${id}-helper`;
  const hasError = Boolean(error);

  return (
    <div className={`${styles.field} ${disabled ? styles.disabled : ''} ${hasError ? styles.errored : ''} ${className}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>{label}</label>
      )}
      <input
        id={id}
        type={type}
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={hasError || undefined}
        aria-describedby={(error || helper) ? helperId : undefined}
        {...rest}
      />
      {(error || helper) && (
        <span id={helperId} className={`${styles.helper} ${hasError ? styles.helperError : ''}`}>
          {error || helper}
        </span>
      )}
    </div>
  );
}
