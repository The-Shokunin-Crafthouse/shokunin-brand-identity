/**
 * Tooltip — 3.8 · single-line, multi-line.
 *
 * Hover- and focus-triggered. `content` shows on pointer enter / focus
 * of the wrapped child. Positioning: top-center, with arrow.
 *
 * Multi-line: pass any `content` that wraps. CSS clamps single-line by
 * default; pass `multiline` prop to allow wrapping.
 */

import { useId, useState } from 'react';
import styles from './Tooltip.module.css';

export function Tooltip({ content, multiline = false, children }) {
  const id = useId();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <span className={styles.wrapper}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      <span aria-describedby={open ? id : undefined}>{children}</span>
      <span
        role="tooltip"
        id={id}
        className={`${styles.tooltip} ${open ? styles.open : ''} ${multiline ? styles.multiline : styles.singleline}`}
      >
        {content}
      </span>
    </span>
  );
}
