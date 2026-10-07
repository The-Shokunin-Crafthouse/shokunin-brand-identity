/**
 * Stepper — NEW · Drams #8 (Plus Minus Knob reference).
 *
 * Numeric increment/decrement. Borderless pill control on the sunk
 * ground; ± icon buttons (Phosphor Minus/Plus via the Icon wrapper)
 * flank a mono numeral readout. Buttons disable at min/max bounds.
 * Press-and-hold repeats after HOLD_DELAY, then every HOLD_INTERVAL,
 * cancelled on pointerup/leave/cancel. The readout is a spinbutton
 * (Up/Down keys step it directly, no need to tab to the ± buttons).
 *
 * Each committed step plays the `tick` role sound (Drams 037), including
 * hold-repeat. A press at min/max commits nothing, so it is silent.
 *
 * API: value, onChange, min, max, step (default 1), label, disabled,
 * sound (default true; SoundProvider can silence it app-wide).
 */

import { useEffect, useRef } from 'react';
import { Minus, Plus } from '@phosphor-icons/react';
import { Icon } from '../Icon/Icon.jsx';
import { useUISound } from '../../sound/SoundProvider.jsx';
import styles from './Stepper.module.css';

const HOLD_DELAY = 400;
const HOLD_INTERVAL = 80;

export function Stepper({
  value,
  onChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  label,
  disabled = false,
  sound = true,
  className = '',
}) {
  const playTick = useUISound('tick', sound);
  const valueRef = useRef(value);
  valueRef.current = value;
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const clamp = (v) => Math.max(min, Math.min(max, v));

  const stepBy = (delta) => {
    const next = clamp(valueRef.current + delta);
    if (next !== valueRef.current) {
      valueRef.current = next;
      onChange?.(next);
      playTick();
    }
  };

  const stopHold = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    timeoutRef.current = null;
    intervalRef.current = null;
  };

  useEffect(() => stopHold, []);

  const startHold = (delta) => {
    if (disabled) return;
    stepBy(delta);
    stopHold();
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => stepBy(delta), HOLD_INTERVAL);
    }, HOLD_DELAY);
  };

  const atMin = value <= min;
  const atMax = value >= max;

  const handleReadoutKeyDown = (e) => {
    if (disabled) return;
    if (e.key === 'ArrowUp') { e.preventDefault(); stepBy(step); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); stepBy(-step); }
    else if (e.key === 'Home' && Number.isFinite(min)) {
      e.preventDefault();
      if (valueRef.current !== min) playTick();
      valueRef.current = min;
      onChange?.(min);
    } else if (e.key === 'End' && Number.isFinite(max)) {
      e.preventDefault();
      if (valueRef.current !== max) playTick();
      valueRef.current = max;
      onChange?.(max);
    }
  };

  return (
    <div className={`${styles.stepper} ${disabled ? styles.disabled : ''} ${className}`}>
      <button
        type="button"
        className={styles.button}
        aria-label={label ? `Decrease ${label}` : 'Decrease'}
        disabled={disabled || atMin}
        onPointerDown={() => startHold(-step)}
        onPointerUp={stopHold}
        onPointerLeave={stopHold}
        onPointerCancel={stopHold}
      >
        <Icon glyph={Minus} weight="bold" size="sm" />
      </button>

      <span
        className={styles.readout}
        role="spinbutton"
        tabIndex={disabled ? -1 : 0}
        aria-valuenow={value}
        aria-valuemin={Number.isFinite(min) ? min : undefined}
        aria-valuemax={Number.isFinite(max) ? max : undefined}
        aria-label={label}
        aria-disabled={disabled || undefined}
        onKeyDown={handleReadoutKeyDown}
      >
        {value}
      </span>

      <button
        type="button"
        className={styles.button}
        aria-label={label ? `Increase ${label}` : 'Increase'}
        disabled={disabled || atMax}
        onPointerDown={() => startHold(step)}
        onPointerUp={stopHold}
        onPointerLeave={stopHold}
        onPointerCancel={stopHold}
      >
        <Icon glyph={Plus} weight="bold" size="sm" />
      </button>
    </div>
  );
}
