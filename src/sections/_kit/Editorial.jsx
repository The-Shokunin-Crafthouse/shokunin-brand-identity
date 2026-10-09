/**
 * Editorial.jsx — shared scaffold primitives for every built section
 * except Color. Each primitive reproduces the Color page's markup so
 * the 20 content pages match its editorial depth by construction:
 *
 *   <Section>
 *     <Metabar .../>
 *     <Hero .../>
 *     <Chapter ord="i" ...>          ← a numbered beat
 *       …body content…
 *     </Chapter>
 *   </Section>
 *
 * No hex / px literal here — structural values resolve through --sc-*
 * tokens in editorial.module.css.
 */

import { Fragment } from 'react';
import { PlusSeparator } from '../../components/PlusSeparator/PlusSeparator.jsx';
import consumers from '../../meta/consumers.json';
import styles from './editorial.module.css';

// Build-time date of the last commit (vite.config.js define), so the
// header moves with every merge instead of holding a hand-typed date.
const REVISED = typeof __SCDS_REVISED__ === 'undefined' ? '' : __SCDS_REVISED__;
// Repos that receive SCDS changes automatically · src/meta/consumers.json.
const META = [
  ['Last revised', REVISED],
  ['Repos', String(consumers.length)],
  ['Status', 'Stable'],
];

// Slash separator — always lighter than adjacent text (design rule).
export function Slash() { return <span className={styles.slash}> / </span>; }

// Split a string on '·' or '/' and render each separator as a Slash.
export function withSlash(str) {
  const parts = String(str).split(/\s*[·/]\s*/);
  return parts.map((p, i) => (
    <Fragment key={i}>{p}{i < parts.length - 1 && <Slash />}</Fragment>
  ));
}

/**
 * ChapterEyebrow — the chapter's ordinal on an accent disc, then the
 * eyebrow phrase on a floating pill. Parts split on '·' or '/' and are
 * joined by a PlusSeparator (Figma Color — DL, node 2147:217, 2026-10-09).
 */
export function ChapterEyebrow({ ord, children }) {
  const parts = String(children).split(/\s*[·/]\s*/);
  return (
    <div className={styles.chapterEyebrow}>
      <span className={styles.ord}>{ord}</span>
      <span className={styles.eyebrowPill}>
        {parts.map((p, i) => (
          <Fragment key={i}>
            <span>{p}</span>
            {i < parts.length - 1 && <PlusSeparator />}
          </Fragment>
        ))}
      </span>
    </div>
  );
}

/** Page wrapper — sets the content/gutter column constants + max width. */
export function Section({ id, labelledBy, children }) {
  return (
    <section className={styles.section} aria-labelledby={labelledBy} data-section={id}>
      {children}
    </section>
  );
}

/**
 * Metabar — the LAST REVISED / REPOS N / SPEC v1.2 / STATUS STABLE header
 * bar. Every page shows the same system-level facts; Repos counts the
 * consumers that pick up a change here without a hand sync.
 */
export function Metabar({ ord, crumb, spec = 'v1.2' }) {
  const meta = [...META.slice(0, 2), ['Spec', spec], META[2]];
  return (
    <div className={styles.metabar}>
      <div className={styles.crumb}>
        {ord && <span className={styles.crumbAccent}>{ord}</span>}
        {withSlash(crumb)}
      </div>
      <div className={styles.metaRight}>
        {meta.map(([label, value]) => (
          <span key={label}>
            <b>{label}</b>{' '}
            <span className={label === 'Status' ? styles.statusStable : undefined}>{value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Hero — eyebrow + thesis headline + lede. `title`/`eyebrow` accept nodes. */
export function Hero({ id, eyebrow, title, lead }) {
  return (
    <header className={styles.hero}>
      <span className={styles.heroEyebrow}>{eyebrow}</span>
      <h1 id={id} className={styles.heroTitle}>{title}</h1>
      {lead && <p className={styles.lead}>{lead}</p>}
    </header>
  );
}

/** Accent / emphasis spans for use inside a Hero or Chapter title. */
export function Accent({ children }) { return <span className={styles.heroAccent}>{children}</span>; }
export function Em({ children }) { return <span className={styles.heroEm}>{children}</span>; }

/**
 * Chapter — one numbered beat. Renders the head (eyebrow + title +
 * premise), the body (children), and a right-gutter column of
 * annotation callouts. `annotations` = [{ title, body }].
 */
export function Chapter({ ord, eyebrow, title, premise, annotations = [], children }) {
  return (
    <section className={styles.chapter}>
      <div className={styles.chapterHead}>
        <ChapterEyebrow ord={ord}>{eyebrow}</ChapterEyebrow>
        <h2 className={styles.chapterTitle}>{title}</h2>
        {premise && <p className={styles.premise}>{premise}</p>}
      </div>
      <div className={styles.chapterBody}>{children}</div>
      {annotations.length > 0 && (
        <aside className={styles.gutter}>
          {annotations.map((a, i) => (
            <Annotation key={i} title={a.title}>{a.body}</Annotation>
          ))}
        </aside>
      )}
    </section>
  );
}

/** A single right-rail annotation callout: named decision + why. */
export function Annotation({ title, children }) {
  return (
    <div className={styles.annotation}>
      <b>{title}</b>
      {children}
    </div>
  );
}

// Re-export the shared class bag so section modules can compose the
// generic primitives (panel, dataTable, scBadge, stateGrid, …).
export { styles as kit };
