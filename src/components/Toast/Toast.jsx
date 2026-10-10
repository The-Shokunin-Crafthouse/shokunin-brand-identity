/**
 * Toast — the one SCDS notification component (2026-10-08: Alert folds into
 * Toast). A capsule plate with a tone badge, the message and, when it floats,
 * a dismiss button. Figma: library 0zVoxaLJQkjHENYJlQk1VT, page Toast `24:7`,
 * set `9:897`.
 *
 *   tone       success · error · warning · info
 *   placement  inline (default): in flow and persistent, the Alert
 *              replacement; no shadow, no dismiss, never leaves on its own.
 *              floating: the Figma Toast; elevation shadow, dismiss button,
 *              rises in and dismisses itself after --sc-motion-toast-hold.
 *              A floating toast never holds a required action: anything the
 *              reader must do belongs inline or in a dialog.
 *
 * Roles: error and warning are assertive (role="alert"); info and success
 * are polite (role="status"). The badge glyph is decorative; a visually
 * hidden tone word ("Error:") leads the message, so the tone is announced
 * and the colour never speaks alone.
 *
 * The hold timer pauses while the pointer or focus is inside the toast
 * (WCAG 2.2.1) and resumes with the time it had left. Escape dismisses a
 * focused floating toast. Reduced motion keeps the fade and drops the rise.
 *
 * The component positions nothing: the consumer places floating toasts in a
 * fixed region of its own (a corner stack), and owns the list of messages.
 * `onDismiss` fires after the exit has played, so the consumer can unmount.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { CheckCircle, Info, Warning, WarningOctagon, X } from '@phosphor-icons/react';
import styles from './Toast.module.css';

const TONES = ['success', 'error', 'warning', 'info'];
const PLACEMENTS = ['inline', 'floating'];

/* Figma: success Icon/check-circle, info Icon/info (filled). The Figma Error
 * variant draws Icon/warning; code gives warning the triangle and error the
 * octagon, so the two tones differ in shape as well as hue (decisions
 * 2026-10-10, flagged to Levi with the badge hue). */
const GLYPHS = {
  success: [CheckCircle, 'regular'],
  error: [WarningOctagon, 'regular'],
  warning: [Warning, 'regular'],
  info: [Info, 'fill'],
};
const TONE_WORDS = { success: 'Success', error: 'Error', warning: 'Warning', info: 'Info' };

/* A CSS time (`6000ms`, `0.2s`) in milliseconds. */
function ms(value) {
  const v = parseFloat(value);
  if (Number.isNaN(v)) return 0;
  return /\ds$/.test(value.trim()) && !/ms$/.test(value.trim()) ? v * 1000 : v;
}

export function Toast({
  tone = 'info',
  placement = 'inline',
  autoDismiss = true,
  onDismiss,
  dismissLabel = 'Dismiss notification',
  dismissDisabled = false,
  toneLabel,
  children,
  className = '',
  ...rest
}) {
  const t = TONES.includes(tone) ? tone : 'info';
  const p = PLACEMENTS.includes(placement) ? placement : 'inline';
  const floating = p === 'floating';
  const [Glyph, weight] = GLYPHS[t];

  const ref = useRef(null);
  // enter → open → exit → gone. Inline toasts are always open.
  const [phase, setPhase] = useState(floating ? 'enter' : 'open');
  const timer = useRef({ id: 0, left: 0, started: 0 });
  const exitDone = useRef(false);

  // Rise in: paint once at the start pose, then move to open.
  useEffect(() => {
    if (!floating) return undefined;
    let id = requestAnimationFrame(() => {
      id = requestAnimationFrame(() => setPhase((ph) => (ph === 'enter' ? 'open' : ph)));
    });
    return () => cancelAnimationFrame(id);
  }, [floating]);

  const finish = useCallback(() => {
    if (exitDone.current) return;
    exitDone.current = true;
    setPhase('gone');
    onDismiss?.();
  }, [onDismiss]);

  const dismiss = useCallback(() => {
    clearTimeout(timer.current.id);
    setPhase((ph) => (ph === 'exit' || ph === 'gone' ? ph : 'exit'));
  }, []);

  // The exit ends on the opacity transition, with a timed fallback in case
  // no transition runs (a zero duration, a hidden tab).
  useEffect(() => {
    if (phase !== 'exit' || !ref.current) return undefined;
    const el = ref.current;
    const wait = ms(getComputedStyle(el).getPropertyValue('--sc-motion-toast-travel-duration')) + 50;
    const onEnd = (e) => { if (e.target === el && e.propertyName === 'opacity') finish(); };
    el.addEventListener('transitionend', onEnd);
    const id = setTimeout(finish, wait);
    return () => { el.removeEventListener('transitionend', onEnd); clearTimeout(id); };
  }, [phase, finish]);

  // Hold timer: starts once the toast is open, pauses inside, resumes with the time left.
  const run = useCallback((left) => {
    clearTimeout(timer.current.id);
    timer.current = { id: setTimeout(dismiss, left), left, started: Date.now() };
  }, [dismiss]);
  const pause = useCallback(() => {
    const tm = timer.current;
    if (!tm.id) return;
    clearTimeout(tm.id);
    timer.current = { id: 0, left: Math.max(0, tm.left - (Date.now() - tm.started)), started: 0 };
  }, []);
  const resume = useCallback(() => {
    if (timer.current.id || !floating || !autoDismiss || phase !== 'open') return;
    const el = ref.current;
    if (el && (el.matches(':hover') || el.contains(document.activeElement))) return;
    run(timer.current.left);
  }, [floating, autoDismiss, phase, run]);

  useEffect(() => {
    if (!floating || !autoDismiss || phase !== 'open' || !ref.current) return undefined;
    run(ms(getComputedStyle(ref.current).getPropertyValue('--sc-motion-toast-hold')));
    return () => clearTimeout(timer.current.id);
  }, [floating, autoDismiss, phase, run]);

  if (phase === 'gone') return null;

  const role = t === 'error' || t === 'warning' ? 'alert' : 'status';
  const handlers = floating
    ? {
        onPointerEnter: pause,
        onPointerLeave: resume,
        onFocus: pause,
        onBlur: (e) => { if (!e.currentTarget.contains(e.relatedTarget)) resume(); },
        onKeyDown: (e) => { if (e.key === 'Escape' && !dismissDisabled) { e.stopPropagation(); dismiss(); } },
      }
    : {};

  return (
    <div
      ref={ref}
      className={`${styles.toast} ${styles[p]} ${styles[t]} ${className}`}
      role={role}
      aria-atomic="true"
      data-state={phase}
      {...handlers}
      {...rest}
    >
      <span className={styles.badge} aria-hidden="true">
        <Glyph className={styles.icon} weight={weight} />
      </span>
      <div className={styles.message}>
        <span className={styles.srOnly}>{toneLabel ?? TONE_WORDS[t]}: </span>
        {children}
      </div>
      {floating ? (
        <button type="button" className={styles.dismiss} aria-label={dismissLabel} disabled={dismissDisabled} onClick={dismiss}>
          <X className={styles.x} weight="bold" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}
