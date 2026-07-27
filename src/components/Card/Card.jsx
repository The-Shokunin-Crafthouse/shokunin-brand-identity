/**
 * Card — 3.3 · default, interactive (hover), elevated.
 *
 * scds-v2 Phase 2 — fill-only elevation, no resting stroke frame. Default:
 * sunk surface. Interactive: same resting, deep-sunk + inset shadow on
 * hover/focus, cursor pointer, keyboard-activatable (renders a <button>).
 * Elevated: page-ground bg, lifted by fill contrast against the sunk default.
 */

import styles from './Card.module.css';

const VARIANTS = ['default', 'interactive', 'elevated'];

export function Card({
  variant = 'default',
  as: As = 'div',
  onClick,
  children,
  className = '',
  ...rest
}) {
  const v = VARIANTS.includes(variant) ? variant : 'default';
  const interactive = v === 'interactive';
  const Tag = interactive ? 'button' : As;
  return (
    <Tag
      type={interactive ? 'button' : undefined}
      className={`${styles.card} ${styles[v]} ${className}`}
      onClick={interactive ? onClick : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
