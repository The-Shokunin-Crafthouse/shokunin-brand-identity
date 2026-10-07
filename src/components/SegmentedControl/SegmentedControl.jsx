/**
 * SegmentedControl — NEW · Drams #7 (3-Way Switch reference).
 *
 * One-of-N selection. `radiogroup` + `radio` semantics with roving
 * tabindex and arrow-key navigation (WAI-ARIA radio-group pattern) — an
 * arrow key both moves focus AND selects, matching native radio-group
 * behaviour. A sliding indicator (fill-only elevation — no border, no
 * shadow) tracks the selected segment via measured layout, not a fixed
 * per-option width.
 *
 * API: options: [{ value, label, count? }], value, onChange, disabled, label
 * (aria-label for the group), size ('sm' | 'md' | 'lg', default 'md').
 * `count` renders a number after the label in the label's own ink; `lg` is
 * the 16 × 8 chrome-label segment of a tab header (Studio PM, 2026-10-05).
 *
 * A change of selection plays the `select` role sound (Drams 001), pointer
 * or arrow keys. Re-selecting the current segment is silent. `sound`
 * (default true) opts one instance out; SoundProvider silences app-wide.
 */

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useUISound } from '../../sound/SoundProvider.jsx';
import styles from './SegmentedControl.module.css';

export function SegmentedControl({
  options = [],
  value,
  onChange,
  disabled = false,
  label,
  size = 'md',
  sound = true,
  className = '',
}) {
  const playSelect = useUISound('select', sound);
  const choose = (next) => {
    if (next !== value) playSelect();
    onChange?.(next);
  };
  const trackRef = useRef(null);
  const itemRefs = useRef({});
  const [indicator, setIndicator] = useState(null);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const node = itemRefs.current[value];
    if (!track || !node) {
      setIndicator(null);
      return;
    }
    const trackRect = track.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();
    setIndicator({ left: nodeRect.left - trackRect.left, width: nodeRect.width });
  }, [value]);

  useLayoutEffect(() => { measure(); }, [measure, options.length, size]);
  useEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const focusValue = (v) => { itemRefs.current[v]?.focus(); };

  const selectAt = (index) => {
    if (disabled || options.length === 0) return;
    const wrapped = (index + options.length) % options.length;
    const opt = options[wrapped];
    if (!opt) return;
    choose(opt.value);
    focusValue(opt.value);
  };

  const handleKeyDown = (e, index) => {
    if (disabled) return;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        selectAt(index + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        selectAt(index - 1);
        break;
      case 'Home':
        e.preventDefault();
        selectAt(0);
        break;
      case 'End':
        e.preventDefault();
        selectAt(options.length - 1);
        break;
      default:
        break;
    }
  };

  const selectedIndex = options.findIndex((o) => o.value === value);

  return (
    <div
      ref={trackRef}
      className={`${styles.track} ${styles[size] || styles.md} ${disabled ? styles.disabled : ''} ${className}`}
      role="radiogroup"
      aria-label={label}
      aria-disabled={disabled || undefined}
    >
      {indicator && (
        <span
          className={styles.indicator}
          aria-hidden="true"
          style={{ transform: `translateX(${indicator.left}px)`, width: `${indicator.width}px` }}
        />
      )}
      {options.map((opt, i) => {
        const selected = opt.value === value;
        const tabbable = selected || (selectedIndex === -1 && i === 0);
        return (
          <button
            key={opt.value}
            type="button"
            ref={(node) => { itemRefs.current[opt.value] = node; }}
            role="radio"
            aria-checked={selected}
            tabIndex={disabled ? -1 : tabbable ? 0 : -1}
            disabled={disabled}
            className={`${styles.segment} ${selected ? styles.segmentSelected : ''}`}
            onClick={() => choose(opt.value)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          >
            {opt.label}
            {opt.count !== undefined && <span className={styles.count}>{opt.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
