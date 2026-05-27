/**
 * TypographySpecimen — 3.12 · all scale steps in-use.
 *
 * Renders every semantic font.text.* role with real copy. The token
 * carrying the type (e.g. `--sc-font-text-display-lg`) is shown beside
 * each sample as a chrome mono label so the specimen doubles as a
 * map between role and visual register.
 */

import styles from './TypographySpecimen.module.css';

const SPECIMENS = [
  { token: '--sc-font-text-display-xl',     role: 'display / xl',     sample: 'Shokunin.' },
  { token: '--sc-font-text-display-lg',     role: 'display / lg',     sample: 'A studio that builds.' },
  { token: '--sc-font-text-display-md',     role: 'display / md',     sample: 'Brand identity, product, motion.' },
  { token: '--sc-font-text-display-sm',     role: 'display / sm',     sample: 'Design and engineering are not separate here.' },
  { token: '--sc-font-text-title-section',  role: 'title / section',  sample: 'Components, tokens, type, voice.' },
  { token: '--sc-font-text-title-card',     role: 'title / card',     sample: 'Twelve primitives prove the system.' },
  { token: '--sc-font-text-body-lead',      role: 'body / lead',      sample: 'Every value below resolves to a semantic token. Component code that references a primitive is a bug.' },
  { token: '--sc-font-text-body-default',   role: 'body / default',   sample: 'Body copy default. Resolves font-family, size, weight, line-height, and tracking from a single composed token. The composition tokens land at the primitive layer (font.text.16) and are aliased here as font.text.body.default for component consumption.' },
  { token: '--sc-font-text-body-dense',     role: 'body / dense',     sample: 'Secondary body and nav-link register. Slightly tighter optical weight than default.' },
  { token: '--sc-font-text-caption',        role: 'caption',          sample: 'Helper text, tooltip body, timestamps. Relaxed line-height for short-form reading.' },
  { token: '--sc-font-text-label-ui',       role: 'label / ui',       sample: 'Form labels, dense table headers.' },
  { token: '--sc-font-text-label-chrome',   role: 'label / chrome',   sample: 'Buttons · Badges · Eyebrows', caps: true },
  { token: '--sc-font-text-mono-body',      role: 'mono / body',      sample: 'const tokens = require("./tokens/semantic.json");' },
  { token: '--sc-font-text-mono-caption',   role: 'mono / caption',   sample: '2026-05-27 — Sprint 4 component build.' },
  { token: '--sc-font-text-mono-chrome',    role: 'mono / chrome',    sample: '— Status · in flight — sha · bef6a09 —', caps: true },
];

function roleToClass(role) {
  return role.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
}

export function TypographySpecimen({ className = '' }) {
  return (
    <ol className={`${styles.specimen} ${className}`}>
      {SPECIMENS.map(({ token, role, sample, caps }) => (
        <li key={token} className={styles.row}>
          <span className={styles.meta}>
            <span className={styles.role}>{role}</span>
            <code className={styles.token}>{token}</code>
          </span>
          <p className={`${styles.sample} ${styles[roleToClass(role)]} ${caps ? styles.caps : ''}`}>
            {sample}
          </p>
        </li>
      ))}
    </ol>
  );
}
