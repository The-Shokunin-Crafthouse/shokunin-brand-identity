/**
 * Input — 3.4 · default, hover, focus, filled, error, disabled.
 *
 * Wraps a native <input> with a label and optional description, helper
 * and error text. Focus + filled are CSS-pseudo-driven; error and
 * disabled are props.
 *
 * Layout (Levi's filled-field reference, 2026-10-07, with one change: the
 * label stays above the field, left-aligned):
 *
 *   label                      the form title
 *   description (optional)     subcopy under the title, above the field
 *   ┌ prefix │ icon  value  suffix  clear  trailing ┐   the field box
 *   helper / error (optional)  under the field
 *
 * Slots, all optional:
 *   icon       leading icon: a Phosphor component (rendered bold) or a node
 *   prefix     a segment before the value (currency, country code), set off
 *              by a rule
 *   suffix     text after the value ("inches")
 *   trailing   a trailing icon or control: a Phosphor component (rendered
 *              bold) or a node (an eye toggle, a copy button)
 *   clearable  shows a clear button while the field holds a value;
 *              `onClear` runs on click, otherwise the field is emptied
 *              through its own change event
 *
 * Icons are Phosphor in the bold weight (Levi, 2026-10-07).
 *
 * `surface="raised"` for a field on surface.raised, surface.floating or a
 * flat Card: a darker transparent fill that keeps the page field's contrast
 * (Levi, 2026-10-08).
 */

import { isValidElement, useId, useRef } from 'react';
import { X } from '@phosphor-icons/react';
import { Icon } from '../Icon/Icon.jsx';
import styles from './Input.module.css';

const slot = (node) => (node && !isValidElement(node) && typeof node !== 'string'
  ? <Icon glyph={node} weight="bold" />
  : node);

export function Input({
  label,
  description,
  helper,
  error,
  disabled = false,
  type = 'text',
  value,
  onChange,
  placeholder,
  icon,
  prefix,
  suffix,
  trailing,
  clearable = false,
  surface = 'page',
  onClear,
  className = '',
  ...rest
}) {
  const id = useId();
  const descriptionId = `${id}-description`;
  const helperId = `${id}-helper`;
  const inputRef = useRef(null);
  const hasError = Boolean(error);
  const describedBy = [description && descriptionId, (error || helper) && helperId].filter(Boolean).join(' ') || undefined;
  const hasValue = value !== undefined ? String(value).length > 0 : undefined;

  const clear = () => {
    const el = inputRef.current;
    if (onClear) onClear();
    else if (el) {
      // Empty the field through React's own change path.
      Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(el, '');
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }
    el?.focus();
  };

  return (
    <div className={`${styles.field} ${surface === 'raised' ? styles.raised : ''} ${disabled ? styles.disabled : ''} ${hasError ? styles.errored : ''} ${className}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>{label}</label>
      )}
      {description && (
        <span id={descriptionId} className={styles.description}>{description}</span>
      )}
      <div className={styles.box}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        {icon && <span className={styles.icon} aria-hidden="true">{slot(icon)}</span>}
        <input
          ref={inputRef}
          id={id}
          type={type}
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy}
          {...rest}
        />
        {suffix && <span className={styles.suffix}>{suffix}</span>}
        {clearable && !disabled && hasValue !== false && (
          <button
            type="button"
            className={styles.clear}
            aria-label={label ? `Clear ${label}` : 'Clear'}
            onClick={clear}
          >
            <Icon glyph={X} weight="bold" />
          </button>
        )}
        {trailing && <span className={styles.trailing}>{slot(trailing)}</span>}
      </div>
      {(error || helper) && (
        <span id={helperId} className={`${styles.helper} ${hasError ? styles.helperError : ''}`}>
          {error || helper}
        </span>
      )}
    </div>
  );
}
