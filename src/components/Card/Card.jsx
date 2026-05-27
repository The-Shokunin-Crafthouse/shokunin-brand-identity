/**
 * Card — 3.3 · default, interactive (hover), elevated.
 *
 * Default: sunk surface with a hairline. Interactive: same resting,
 * deep-sunk on hover, cursor pointer, keyboard-activatable. Elevated:
 * page-ground bg with a strong frame — uses contrast against the sunk
 * default to read as lifted (no shadow tokens in the system).
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
