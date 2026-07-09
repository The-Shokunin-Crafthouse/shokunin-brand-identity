/**
 * MarkSection — Foundations · Mark · fully built.
 *
 * Four beats: the mark and its S/C encoding (a faithful inline grid you
 * can read as either letterform), the lockup system with clear space,
 * the minimum sizes including the 16px favicon test, and the misuse
 * library. The real exported SVGs are loaded from assets/logo; the
 * annotated grid is drawn from the mark-spec geometry (cols 48·104·160·216,
 * rows 49·105·161, absent cell col4/row2). The mark resolves to exactly
 * two values — ink and cream — and never to the accent.
 */

import { useState } from 'react';
import { Section, Metabar, Hero, Chapter, Accent, Em, Slash, kit } from './_kit/Editorial.jsx';
import primaryLight from '../../assets/logo/mark-primary-light.svg';
import primaryDark from '../../assets/logo/mark-primary-dark.svg';
import compactLight from '../../assets/logo/mark-compact-light.svg';
import compactDark from '../../assets/logo/mark-compact-dark.svg';
import iconLight from '../../assets/logo/mark-icon-light.svg';
import iconDark from '../../assets/logo/mark-icon-dark.svg';
import styles from './MarkSection.module.css';

const COLS = [48, 104, 160, 216];
const ROWS = [49, 105, 161];
const crossPath = (cx, cy) =>
  `M${cx + 5} ${cy - 5} H${cx + 16} V${cy + 5} H${cx + 5} V${cy + 16} H${cx - 5} V${cy + 5} H${cx - 16} V${cy - 5} H${cx - 5} V${cy - 16} H${cx + 5} V${cy - 5} Z`;

// Faithful 11-cross grid. mode: 'plain' | 's' | 'c'. filled adds the 12th
// cross (the misuse case). fillVar overrides the cross colour (misuse case).
function MarkGrid({ mode = 'plain', filled = false, fillVar = '--sc-color-text-primary', className = '' }) {
  const cells = [];
  ROWS.forEach((cy, r) => COLS.forEach((cx, c) => {
    if (filled || !(r === 1 && c === 3)) cells.push({ cx, cy, r, c });
  }));
  const isC = (r, c) => c === 3 && (r === 0 || r === 2);
  return (
    <svg className={`${styles.grid} ${className}`} viewBox="0 0 264 198" role="img" aria-label="Shokunin mark grid">
      {mode === 's' && ROWS.map((cy) => (
        <rect key={cy} x="20" y={cy - 24} width="224" height="48" className={styles.sBand} />
      ))}
      {mode === 'c' && (
        <path d="M216 49 C168 49 168 161 216 161" className={styles.cArc} />
      )}
      {cells.map(({ cx, cy, r, c }) => {
        let cls = styles.cross;
        if (mode === 'c') cls = isC(r, c) ? styles.crossOn : styles.crossDim;
        return <path key={`${r}-${c}`} d={crossPath(cx, cy)} className={cls} style={mode === 'plain' ? { fill: `var(${fillVar})` } : undefined} />;
      })}
      {!filled && mode !== 'c' && (
        <rect x="196" y="85" width="40" height="40" className={mode === 's' ? styles.voidPivot : styles.voidCell} />
      )}
      {mode === 'c' && <rect x="196" y="85" width="40" height="40" className={styles.voidPivot} />}
    </svg>
  );
}

const LOCKUPS = [
  { key: 'primary', label: 'Primary', sub: 'block · default', light: primaryLight, dark: primaryDark, note: 'The rect is part of the mark. Default usage and large displays.' },
  { key: 'compact', label: 'Compact', sub: 'block · dense', light: compactLight, dark: compactDark, note: 'Same grid, tighter framing. Navbars, app headers, footers.' },
  { key: 'icon', label: 'Icon', sub: 'simplified · square', light: iconLight, dark: iconDark, note: 'Crosses only, transparent, square viewBox. Favicon and app icon.' },
];

const SIZES = [16, 24, 32, 48];

const MISUSE = [
  { kind: 'accent', title: 'Never the accent', why: 'Teal is for interaction and the accent surface. Painting the mark itself teal confuses brand and signal.' },
  { kind: 'filled', title: 'Never complete the grid', why: 'The absent cell is the mark. Fill it and the S and C collapse into a generic 4×3 block.' },
  { kind: 'stretch', title: 'Never distort', why: 'The 56px inter-cell spacing is fixed. Stretching one axis breaks the grid the whole mark depends on.' },
  { kind: 'rotate', title: 'Never rotate', why: 'The mark sits square to the baseline. Off-axis reads as decoration, not a registration mark.' },
  { kind: 'contrast', title: 'Never low-contrast', why: 'The mark needs a clear ground — page or ink. On a near-tone surface it dissolves and the negative space stops reading.' },
];

export function MarkSection() {
  const [reading, setReading] = useState('plain');

  return (
    <Section id="mark" labelledBy="mark-title">
      <Metabar
        ord="01"
        crumb="Foundations / Mark"
        meta={[
          ['Last revised', '2026.06.05'],
          ['Tokens', '2'],
          ['Spec', 'v1.2'],
          ['Status', 'Complete'],
        ]}
      />

      <Hero
        id="mark-title"
        eyebrow={<>Mark<Slash />one absence, two letters</>}
        title={<>Eleven crosses. <Accent>One missing.</Accent> The gap spells <Em>S and C.</Em></>}
        lead={
          <>The mark is a four-by-three grid of crosses with the middle row&rsquo;s right cell deliberately
          absent. That single absence is the studio&rsquo;s signature: read the grid one way and it traces an
          S, read it another and it frames a C. The mark resolves to two values, ink and cream, and never
          to the accent.</>
        }
      />

      {/* i · THE MARK */}
      <Chapter
        ord="i"
        eyebrow="The mark / the deliberate detail"
        title="One absence does the work of two letterforms."
        premise="The eleventh cross is where it is by intent; the twelfth is not there by intent. Toggle the reading. The S lives in the rows: the middle stroke reverses because the absence stops it short. The C lives in the right column: two crosses bracket a mouth that opens on the gap."
        annotations={[
          { title: 'The detail a trained eye catches', body: 'The missing top-right cell of the middle row. Fill it and both letters vanish — the S straightens, the C closes. The absence is load-bearing.' },
          { title: 'Grid logic', body: '56px between cell centres, down from the rough’s 64px. The 12.5% tightening is what makes eleven crosses cohere as one body rather than twelve marks with one missing.' },
          { title: 'Why the mark is never the accent', body: 'Teal marks intent — hover, focus, the accent surface. The mark is identity, not interaction. Sharing the hue would make the brand and the signal indistinguishable.' },
        ]}
      >
        <div className={styles.lockupHero}>
          <div className={`${styles.plate} ${styles.plateLight}`}>
            <img className={styles.plateMark} src={primaryLight} alt="Shokunin Crafthouse primary mark on light" />
            <span className={styles.plateTag}>Primary<Slash />on light</span>
          </div>
          <div className={`${styles.plate} ${styles.plateDark}`}>
            <img className={styles.plateMark} src={primaryDark} alt="Shokunin Crafthouse primary mark on dark" />
            <span className={styles.plateTagInv}>Primary<Slash />on dark</span>
          </div>
        </div>

        <div className={kit.panel}>
          <div className={kit.panelHead}>
            <span><b>The encoding</b><Slash />read it both ways</span>
            <span className={styles.readToggle} role="group" aria-label="Choose a reading">
              {[['plain', 'Grid'], ['s', 'The S'], ['c', 'The C']].map(([m, l]) => (
                <button key={m} type="button" className={`${styles.readChip} ${reading === m ? styles.readChipSel : ''}`} onClick={() => setReading(m)} aria-pressed={reading === m}>{l}</button>
              ))}
            </span>
          </div>
          <div className={styles.diagramWrap}>
            <MarkGrid mode={reading} />
          </div>
          <p className={styles.diagramCaption}>
            {reading === 'plain' && 'Eleven crosses, four columns by three rows. The dashed cell is absent by intent — the mark’s signature.'}
            {reading === 's' && 'Top stroke left to right, middle stroke reversed and stopped by the absence, bottom stroke closes. The void is the bend in the S.'}
            {reading === 'c' && 'The rightmost column alone: two crosses are the C’s terminals, the absent cell is its mouth, opening rightward.'}
          </p>
        </div>
      </Chapter>

      {/* ii · LOCKUP SYSTEM */}
      <Chapter
        ord="ii"
        eyebrow="Lockups / three framings"
        title="Three lockups. Every one carries the absence."
        premise="Primary and compact set the grid in a block; icon exposes the crosses on transparency. Each ships a light variant for light grounds and a dark variant for dark grounds. The clear space is one cross unit on every side."
        annotations={[
          { title: 'Block vs simplified', body: 'In the block lockups the rect is part of the mark. In the icon lockup the rect is gone and the grid structure does the holding.' },
          { title: 'Clear space', body: 'One cross unit (32px at native scale) of empty ground on all four sides. Nothing crowds the mark — the void around it is part of it.' },
        ]}
      >
        <div className={styles.lockupGrid}>
          {LOCKUPS.map((l) => (
            <div key={l.key} className={kit.panel}>
              <div className={kit.panelHead}><span><b>{l.label}</b><Slash />{l.sub}</span></div>
              <div className={styles.lockupPair}>
                <div className={`${styles.lockupCell} ${styles.plateLight}`}><img src={l.light} alt={`${l.label} on light`} className={styles.lockupImg} /></div>
                <div className={`${styles.lockupCell} ${styles.plateDark}`}><img src={l.dark} alt={`${l.label} on dark`} className={styles.lockupImg} /></div>
              </div>
              <p className={styles.lockupNote}>{l.note}</p>
            </div>
          ))}
        </div>

        <div className={kit.panel}>
          <div className={kit.panelHead}><span><b>Clear space</b><Slash />one cross unit</span></div>
          <div className={styles.clearStage}>
            <div className={styles.clearFrame}>
              <img src={iconLight} alt="Mark with clear space" className={styles.clearMark} />
            </div>
            <p className={styles.clearNote}>The dashed boundary is the minimum clear space — one cross unit of empty ground on every side. No type, rule, or edge enters it.</p>
          </div>
        </div>
      </Chapter>

      {/* iii · MINIMUM SIZES */}
      <Chapter
        ord="iii"
        eyebrow="Minimum / the favicon test"
        title="The absence survives to 16 pixels."
        premise="The icon lockup is the smallest the mark goes. At 32px and up the individual crosses resolve. At 16px the cross detail dissolves into pattern density, but the absent cell still reads as a darker void — the signature holds where the detail cannot."
        annotations={[
          { title: 'The 16px floor', body: 'Sixteen pixels is the favicon slot. Below it the grid stops reading as crosses and the mark should not be used — set type instead.' },
          { title: 'Why the icon, not the block', body: 'The block lockup’s rect closes up at small sizes. The simplified icon keeps the negative space open, which is the whole point of the mark.' },
        ]}
      >
        <div className={kit.panel}>
          <div className={kit.panelHead}><span><b>Reproduction ladder</b><Slash />16 → 48px</span><span>icon · simplified</span></div>
          <div className={styles.sizeRow}>
            {SIZES.map((s) => (
              <div key={s} className={styles.sizeCell}>
                <div className={styles.sizeBox} style={{ height: 'var(--sc-p-space-48)' }}>
                  <img src={iconLight} alt={`Mark at ${s}px`} style={{ width: `${s}px`, height: `${s}px` }} />
                </div>
                <span className={styles.sizeLabel}>{s}px{s === 16 ? ' · favicon' : ''}</span>
              </div>
            ))}
          </div>
        </div>
      </Chapter>

      {/* iv · MISUSE */}
      <Chapter
        ord="iv"
        eyebrow="Misuse / the disqualifiers"
        title="Five ways to break a mark that took one decision to make."
        premise="Each move below destroys something specific. They are not style preferences — they break the geometry, the palette discipline, or the negative space the mark is built on. The wrong version is shown so it is recognised on sight."
        annotations={[
          { title: 'The shortest rule', body: 'If a treatment adds anything — a colour, a cell, an effect, an angle — it is wrong. The mark is already finished.' },
          { title: 'Why show the wrong one', body: 'A misuse grid that only describes failures gets ignored. Rendering the broken version makes it recognisable the moment someone reaches for it.' },
        ]}
      >
        <div className={styles.misuseGrid}>
          {MISUSE.map((m) => (
            <div key={m.kind} className={styles.misuseCell}>
              <div className={`${styles.misuseStage} ${m.kind === 'contrast' ? styles.misuseDim : styles.plateLight}`}>
                {m.kind === 'accent' && <MarkGrid mode="plain" fillVar="--sc-color-brand-accent" className={styles.misuseMark} />}
                {m.kind === 'filled' && <MarkGrid mode="plain" filled fillVar="--sc-p-color-warm-gray-800" className={styles.misuseMark} />}
                {m.kind === 'stretch' && <img src={iconLight} alt="" className={styles.misuseImg} style={{ transform: 'scaleX(1.7)' }} />}
                {m.kind === 'rotate' && <img src={iconLight} alt="" className={styles.misuseImg} style={{ transform: 'rotate(14deg)' }} />}
                {m.kind === 'contrast' && <img src={iconLight} alt="" className={styles.misuseImg} />}
                <span className={`${kit.scBadge} ${kit.badgeFail} ${styles.misuseBadge}`}>Don&rsquo;t</span>
              </div>
              <div className={styles.misuseMeta}>
                <span className={styles.misuseTitle}>{m.title}</span>
                <p className={styles.misuseWhy}>{m.why}</p>
              </div>
            </div>
          ))}
        </div>
      </Chapter>
    </Section>
  );
}
