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
import styles from './editorial.module.css';

// Slash separator — always lighter than adjacent text (design rule).
export function Slash() { return <span className={styles.slash}> / </span>; }

// Split a string on '·' or '/' and render each separator as a Slash.
export function withSlash(str) {
  const parts = String(str).split(/\s*[·/]\s*/);
  return parts.map((p, i) => (
    <Fragment key={i}>{p}{i < parts.length - 1 && <Slash />}</Fragment>
  ));
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
 * Metabar — the LAST REVISED / TOKENS N / SPEC v1.2 / STATUS COMPLETE
 * header bar. `meta` is an ordered list of [label, value] pairs; the
 * Status value renders in the success hue when it reads "Complete".
 */
export function Metabar({ ord, crumb, meta = [] }) {
  return (
    <div className={styles.metabar}>
      <div className={styles.crumb}>
        {ord && <span className={styles.crumbAccent}>{ord}</span>}
        {withSlash(crumb)}
      </div>
      <div className={styles.metaRight}>
        {meta.map(([label, value]) => {
          const complete = label.toLowerCase() === 'status' && /complete/i.test(value);
          return (
            <span key={label}>
              <b>{label}</b>{' '}
              <span className={complete ? styles.statusComplete : undefined}>{value}</span>
            </span>
          );
        })}
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
        <div className={styles.chapterEyebrow}>
          <span className={styles.ord}>{ord}</span>
          <span className={styles.dot} />
          <span>{withSlash(eyebrow)}</span>
        </div>
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
