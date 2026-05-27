/**
 * ProgressIndicator — 3.10 · bar, circular, step.
 *
 * `bar`     — linear track with fill (value 0..1)
 * `circular` — SVG ring with stroke-dasharray fill (value 0..1)
 * `step`    — discrete numbered dots with connector lines
 *              (steps: total count · current: index, 0-based)
 */

import styles from './ProgressIndicator.module.css';

export function ProgressIndicator({
  variant = 'bar',
  value = 0.5,
  steps = 4,
  current = 1,
  label,
  className = '',
}) {
  if (variant === 'circular') return <CircularProgress value={value} label={label} className={className} />;
  if (variant === 'step') return <StepProgress steps={steps} current={current} className={className} />;
  return <BarProgress value={value} label={label} className={className} />;
}

function BarProgress({ value, label, className }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div
      className={`${styles.bar} ${className}`}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <span className={styles.barFill} style={{ width: `${pct}%` }} />
    </div>
  );
}

function CircularProgress({ value, label, className }) {
  const pct = Math.max(0, Math.min(1, value));
  // Circle math · 50% center · 40 radius · circumference = 2πr ≈ 251.327
  const r = 40;
  const c = 2 * Math.PI * r;
  const offset = c - pct * c;
  return (
    <svg
      className={`${styles.circular} ${className}`}
      viewBox="0 0 100 100"
      role="progressbar"
      aria-valuenow={Math.round(pct * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <circle className={styles.circularTrack} cx="50" cy="50" r={r} />
      <circle
        className={styles.circularFill}
        cx="50" cy="50" r={r}
        strokeDasharray={c}
        strokeDashoffset={offset}
        transform="rotate(-90 50 50)"
      />
    </svg>
  );
}

function StepProgress({ steps, current, className }) {
  return (
    <ol className={`${styles.step} ${className}`} aria-label="Progress steps">
      {Array.from({ length: steps }).map((_, i) => {
        const isCurrent = i === current;
        const isDone = i < current;
        return (
          <li
            key={i}
            className={`${styles.stepItem} ${isDone ? styles.stepDone : ''} ${isCurrent ? styles.stepCurrent : ''}`}
            aria-current={isCurrent ? 'step' : undefined}
          >
            <span className={styles.stepDot}>{i + 1}</span>
            {i < steps - 1 && <span className={styles.stepConnector} />}
          </li>
        );
      })}
    </ol>
  );
}
