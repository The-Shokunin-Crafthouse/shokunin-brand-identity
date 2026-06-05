/**
 * SpacingSection — Foundations · Spacing & layout grid · fully built.
 *
 * Four beats: the proportional scale, the base-unit derivation, the
 * scale applied to component anatomy (semantic tokens only), and the
 * responsive column grid with a live breakpoint overlay. Bar widths
 * paint from the space tokens themselves, so the proportions are the
 * system's real values, not redrawn. No px literal in this file.
 */

import { useState } from 'react';
import { Section, Metabar, Hero, Chapter, Accent, Em, Slash, withSlash, kit } from './_kit/Editorial.jsx';
import styles from './SpacingSection.module.css';

const LAYOUT = [4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120];
const MICRO = [2, 6, 10, 14, 18, 22];
const layoutVar = (n) => `--sc-p-space-${n}`;
const microVar = (n) => `--sc-p-space-micro-${n}`;

// Component anatomy — every measurement names the semantic token it reads.
const ANATOMY = [
  {
    label: 'Card', sub: 'interior',
    rows: [
      ['Padding', '--sc-space-component-padding-lg', '24'],
      ['Header → body gap', '--sc-space-component-gap-lg', '12'],
      ['Stack between cards', '--sc-space-layout-stack-sm', '16'],
    ],
  },
  {
    label: 'Form field', sub: 'control',
    rows: [
      ['Block padding', '--sc-space-component-padding-block-md', '8'],
      ['Inline padding', '--sc-space-component-padding-inline-md', '12'],
      ['Label → field gap', '--sc-space-component-gap-md', '8'],
    ],
  },
  {
    label: 'Section', sub: 'rhythm',
    rows: [
      ['Block rhythm', '--sc-space-layout-stack-md', '24'],
      ['Between sections', '--sc-space-layout-stack-lg', '48'],
      ['Top-level sections', '--sc-space-layout-stack-xl', '80'],
    ],
  },
];

const GRID = {
  '320':  { cols: 4,  marginVar: '--sc-space-layout-inset-sm', margin: '16', gutterVar: '--sc-p-space-16', gutter: '16', note: 'Mobile. Four columns, tight inset. Everything stacks to one or two.' },
  '768':  { cols: 8,  marginVar: '--sc-space-layout-inset-md', margin: '24', gutterVar: '--sc-p-space-24', gutter: '24', note: 'Tablet. Eight columns open the first real two-up layouts.' },
  '1280': { cols: 12, marginVar: '--sc-space-layout-inset-lg', margin: '48', gutterVar: '--sc-p-space-24', gutter: '24', note: 'Desktop. Twelve columns. The content/gutter editorial split engages here.' },
  '1920': { cols: 12, marginVar: '--sc-space-layout-inset-lg', margin: '48', gutterVar: '--sc-p-space-32', gutter: '32', note: 'Wide. Columns hold at twelve; the page caps and centres rather than stretching.' },
};
const BPS = ['320', '768', '1280', '1920'];

export function SpacingSection() {
  const [bp, setBp] = useState('1280');
  const g = GRID[bp];

  return (
    <Section id="spacing" labelledBy="spacing-title">
      <Metabar
        ord="01"
        crumb="Foundations / Spacing"
        meta={[
          ['Last revised', '2026.06.05'],
          ['Tokens', '36'],
          ['Spec', 'v1.2'],
          ['Status', 'Complete'],
        ]}
      />

      <Hero
        id="spacing-title"
        eyebrow={<>Spacing<Slash />the measured void</>}
        title={<>A <Accent>hybrid ladder</Accent>: four-then-eight for layout, <Em>two</Em> for chrome.</>}
        lead={
          <>Two ladders, one rule. Layout space climbs 4 · 8 · 12 · 16 and compounds upward; chrome
          space drops to a 2px micro ladder for insets the eye should feel but never notice. Any value
          outside the two ladders is a bug, not a judgment call.</>
        }
      />

      {/* i · THE SCALE */}
      <Chapter
        ord="i"
        eyebrow="The scale / two ladders"
        title="Every step, drawn to its own value."
        premise="The bars below are not illustrations. Each one is exactly as wide as the token it names. Eleven layout steps carry structure; six micro steps carry chrome. Nothing between them exists."
        annotations={[
          { title: 'Why two ladders', body: 'A single ladder fine enough for chrome insets would be too dense for layout, and one coarse enough for layout would have no room for a 2px badge inset. Splitting them keeps each honest.' },
          { title: 'The compound', body: 'Below 16 the step is 4. From 16 to 32 it is 8. Above 32 it is 16, then 16 again to 96, then a final reach to 120. The step grows with the distance it spans.' },
        ]}
      >
        <div className={styles.rampGroup}>
          <div className={kit.rowEyebrow}><span><b>Layout ladder</b><Slash />4 / 8pt<Slash />11 steps</span><span>structure</span></div>
          <ol className={styles.scale}>
            {LAYOUT.map((n) => (
              <li key={n} className={styles.scaleRow}>
                <span className={styles.scaleName}>space.{n}</span>
                <span className={styles.scalePx}>{n}px</span>
                <span className={styles.scaleBarWrap}>
                  <span className={styles.scaleBar} style={{ width: `var(${layoutVar(n)})` }} />
                </span>
                <code className={styles.scaleToken}>{layoutVar(n)}</code>
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.rampGroup}>
          <div className={kit.rowEyebrow}><span><b>Micro ladder</b><Slash />2pt<Slash />6 steps</span><span>chrome only</span></div>
          <ol className={styles.scale}>
            {MICRO.map((n) => (
              <li key={n} className={styles.scaleRow}>
                <span className={styles.scaleName}>micro.{n}</span>
                <span className={styles.scalePx}>{n}px</span>
                <span className={styles.scaleBarWrap}>
                  <span className={`${styles.scaleBar} ${styles.scaleBarMicro}`} style={{ width: `var(${microVar(n)})` }} />
                </span>
                <code className={styles.scaleToken}>{microVar(n)}</code>
              </li>
            ))}
          </ol>
        </div>
      </Chapter>

      {/* ii · BASE UNIT */}
      <Chapter
        ord="ii"
        eyebrow="Base unit / the derivation"
        title="Four is the atom. Eight is the working unit."
        premise="The base is 4px — the smallest interval the eye reads as deliberate rather than accidental. Eight is the working rhythm everything defaults to; four fills the half-steps where eight is too coarse. The 2px micro ladder is the one documented exception, and it is fenced to chrome."
        annotations={[
          { title: 'Why not base-8 alone', body: 'Pure 8 has no half-step. A 12px inline padding and a 4px icon gap both need to exist, and neither is a multiple of 8. Base-4 with an 8 default keeps the rhythm without losing the in-between.' },
          { title: 'The exception is fenced', body: 'Micro (2/6/10/14/18/22) is chrome-only — badge insets, switch geometry, focus offsets. It never sets layout. Fencing it by name keeps it from leaking into structure.' },
        ]}
      >
        <div className={styles.deriveGrid}>
          <div className={styles.deriveCell}>
            <span className={styles.deriveStep}>+4</span>
            <span className={styles.deriveRange}>4 → 16</span>
            <span className={styles.deriveNote}>Half-steps. The dense end where 8 is too coarse.</span>
          </div>
          <div className={styles.deriveCell}>
            <span className={styles.deriveStep}>+8</span>
            <span className={styles.deriveRange}>16 → 32</span>
            <span className={styles.deriveNote}>The working band. Component interiors live here.</span>
          </div>
          <div className={styles.deriveCell}>
            <span className={styles.deriveStep}>+16</span>
            <span className={styles.deriveRange}>32 → 96</span>
            <span className={styles.deriveNote}>Layout reach. Section rhythm and page insets.</span>
          </div>
          <div className={styles.deriveCell}>
            <span className={styles.deriveStep}>+2</span>
            <span className={styles.deriveRange}>micro</span>
            <span className={styles.deriveNote}>Chrome only. Insets the eye feels, never notices.</span>
          </div>
        </div>
      </Chapter>

      {/* iii · LAYOUT APPLICATION */}
      <Chapter
        ord="iii"
        eyebrow="Application / semantic layer"
        title="Components never reach for a raw step."
        premise="Structure consumes the semantic layer — component-padding, component-gap, layout-stack — not the primitive ladder. The primitive is the value; the semantic is the intent. Each measurement below names the token a component actually reads."
        annotations={[
          { title: 'Where density starts', body: 'Component interiors begin at component-padding-sm (8px). Anything tighter is chrome and uses the micro ladder. 8 is the floor for a thing you can click.' },
          { title: 'Reserved for layout', body: 'layout-stack-lg (48) and -xl (80) only ever separate sections. They never pad a component. The distance names the altitude.' },
        ]}
      >
        <div className={styles.anatomy}>
          {ANATOMY.map((a) => (
            <div key={a.label} className={kit.panel}>
              <div className={kit.panelHead}><span><b>{a.label}</b><Slash />{a.sub}</span></div>
              <div className={styles.anatomyBody}>
                {a.rows.map(([label, token, px]) => (
                  <div key={token} className={styles.anatomyRow}>
                    <span className={styles.anatomySwatch} style={{ width: `var(--sc-p-space-${px})`, maxWidth: 'var(--sc-p-space-48)' }} aria-hidden="true" />
                    <span className={styles.anatomyLabel}>{label}</span>
                    <code className={styles.anatomyToken}>{token}</code>
                    <span className={styles.anatomyPx}>{px}px</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Chapter>

      {/* iv · THE GRID */}
      <Chapter
        ord="iv"
        eyebrow="The grid / four breakpoints"
        title="Four columns to twelve, margins and gutters from the ladder."
        premise="The column count steps 4 → 8 → 12 → 12 across the four breakpoints. Margin and gutter are never arbitrary — they resolve to layout-inset and space tokens. Pick a breakpoint to overlay its grid."
        annotations={[
          { title: 'Columns cap at twelve', body: 'Past 1280 the page does not add columns — it caps the content width and centres. Wider screens get more margin, not more grid.' },
          { title: 'Gutter from the ladder', body: 'Gutters are 16 / 24 / 24 / 32 — all layout-ladder steps. A gutter that is not a token is a gutter someone guessed.' },
        ]}
      >
        <div className={styles.gridTool}>
          <div className={styles.bpPicker} role="group" aria-label="Choose a breakpoint">
            {BPS.map((b) => (
              <button
                key={b}
                type="button"
                className={`${styles.bpChip} ${b === bp ? styles.bpChipSel : ''}`}
                onClick={() => setBp(b)}
                aria-pressed={b === bp}
              >
                {b}<span className={styles.bpUnit}>px</span>
              </button>
            ))}
          </div>

          <div className={kit.panel}>
            <div className={kit.panelHead}>
              <span><b>{g.cols} columns</b><Slash />{bp}px viewport</span>
              <span>margin {g.margin}<Slash />gutter {g.gutter}</span>
            </div>
            <div className={styles.gridStage} style={{ paddingInline: `var(${g.marginVar})` }}>
              <div className={styles.gridCols} style={{ gridTemplateColumns: `repeat(${g.cols}, 1fr)`, gap: `var(${g.gutterVar})` }}>
                {Array.from({ length: g.cols }).map((_, i) => (
                  <span key={i} className={styles.gridCol} />
                ))}
              </div>
            </div>
            <div className={styles.gridLegend}>
              <span><b>Columns</b> {g.cols}</span>
              <span><b>Margin</b> {withSlash(`${g.marginVar.replace('--sc-space-layout-', '')} · ${g.margin}px`)}</span>
              <span><b>Gutter</b> {withSlash(`${g.gutterVar.replace('--sc-p-space-', 'space.')} · ${g.gutter}px`)}</span>
            </div>
            <p className={styles.gridNote}>{g.note}</p>
          </div>
        </div>
      </Chapter>
    </Section>
  );
}
