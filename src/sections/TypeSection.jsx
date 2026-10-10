/**
 * TypeSection — Foundations · Type · fully built.
 *
 * Four beats: the scale (live specimen, any copy at any step), the
 * weight strategy, the secondary mono face (Cascadia), and the small-
 * size optical compensation. Every size/weight/tracking renders through
 * a --sc-* / --sc-p-* token; the scale beat documents the primitive
 * composition tokens directly, the same way the Color page documents
 * the raw colour ramp. No px or hex literal appears in this file.
 */

import { useState } from 'react';
import { Section, Metabar, Hero, Chapter, Accent, Em, Slash, withSlash, kit } from './_kit/Editorial.jsx';
import styles from './TypeSection.module.css';

// Composition tokens, resolved to current tokens.css values. The scale
// beat renders each step at its primitive composition token; the
// metadata column names the axes the composition binds.
const SCALE = [
  { step: '11',  weight: ['Medium', '500'],  lh: ['base', '1.5'],    track: ['widest', '0.08em'],  use: 'Eyebrows · badges · button labels' },
  { step: '12',  weight: ['Medium', '500'],  lh: ['base', '1.5'],    track: ['wide', '0.04em'],    use: 'UI labels · dense table headers' },
  { step: '13',  weight: ['Regular', '400'], lh: ['relaxed', '1.55'],track: ['normal', '0'],       use: 'Captions · muted metadata' },
  { step: '14',  weight: ['Regular', '400'], lh: ['base', '1.5'],    track: ['normal', '0'],       use: 'Secondary body · form helper text' },
  { step: '16',  weight: ['Regular', '400'], lh: ['base', '1.5'],    track: ['normal', '0'],       use: 'Body default · the anchor' },
  { step: '20',  weight: ['Regular', '400'], lh: ['relaxed', '1.55'],track: ['normal', '0'],       use: 'Lead paragraph · intro body' },
  { step: '24',  weight: ['Medium', '500'],  lh: ['snug', '1.2'],    track: ['snug', '-0.012em'],  use: 'Card titles · mid-headlines' },
  { step: '32',  weight: ['Medium', '500'],  lh: ['snug', '1.2'],    track: ['tight', '-0.018em'], use: 'Section titles · page headers' },
  { step: '44',  weight: ['Thin', '250'],    lh: ['tight', '1.1'],   track: ['normal', '0'],       use: 'Premise statements · hero subhead' },
  { step: '60',  weight: ['Light', '300'],   lh: ['tight', '1.1'],   track: ['tighter', '-0.025em'],use: 'Mid display · hero alt' },
  { step: '84',  weight: ['Light', '300'],   lh: ['tight', '1.1'],   track: ['normal', '0'],       use: 'Large display · hero primary' },
  { step: '120', weight: ['Light', '300'],   lh: ['flat', '1.0'],    track: ['normal', '0'],       use: 'Maximum display · hero monumental' },
];

const WEIGHTS = [
  { name: 'Thin',     value: '250', steps: '44', zone: 'Display entry',
    why: 'NHG Thin at 44px carries open counters and breathing room — visual ma — without reading fragile. One step only.' },
  { name: 'Light',    value: '300', steps: '60 · 84 · 120', zone: 'Display',
    why: 'At 84px and up, Regular reads as bold. Light is the considered weight; size and tracking carry the emphasis, not stroke mass.' },
  { name: 'Regular',  value: '400', steps: '13 · 14 · 16 · 20', zone: 'Reading',
    why: 'The anchor is 16/400. Every other step calibrates against it. Bumping the lead to medium reads quasi-bold and breaks the body-to-headline gradient.' },
  { name: 'Medium',   value: '500', steps: '11 · 12 · 24 · 32', zone: 'Chrome + mid-headline',
    why: 'Two jobs, one weight. At 11/12 it restores stem density lost to sub-pixel rendering; at 24/32 it asserts headline weight without entering the display register.' },
  { name: 'Semibold', value: '600', steps: 'mono 11 · button hover', zone: 'Reserved',
    why: 'Mono caps at the chrome tier and the single secondary-button hover bump. Held back everywhere else so it carries signal when it appears.' },
];

// Four-way mono evaluation, condensed from decisions/decisions.md.
const MONO = [
  { face: 'Cascadia Mono', verdict: 'selected',
    read: 'Draws warmth from the oatmeal ground — sits in it, not on it. Humanist curl reads as signature at chrome scale, productive opposition to NHG at display.',
    against: 'Carries a faint Windows-Terminal association for the few who recognise it. The brand audience rarely does.' },
  { face: 'Geist Mono', verdict: 'rejected',
    read: 'Geometric, mechanical. Pairs cleanly but sits on top of the ground in a tech-product register.',
    against: 'Reads as Vercel-default. Silences the chrome tier into Helvetica-of-mono — the wrong direction when chrome is meant to be surfaced apparatus.' },
  { face: 'JetBrains Mono', verdict: 'rejected',
    read: 'Best-in-class legibility at 11px, the most code-native character set.',
    against: 'IDE register is too loud at brand scale, and the tall x-height inverts the headline hierarchy at 24px — the mono out-shouts the sans.' },
  { face: 'IBM Plex Mono', verdict: 'rejected',
    read: 'The closest grotesque-DNA pairing with NHG; warmest of the three spec candidates.',
    against: 'Enterprise / institutional baggage conflicts with the crafthouse register, and it ships no programming ligatures.' },
];

const CODE_SPECIMEN = `// semantic.json — components read roles, never raw values
const surface = "var(--sc-color-surface-raised)";
const accent  = "var(--sc-color-brand-accent)"; // teal accent
function band(step = 16) {
  return \`var(--sc-p-font-text-\${step})\`;
}`;

const DEFAULT_SPECIMEN = 'Design that sticks beyond the craft.';

export function TypeSection() {
  const [text, setText] = useState(DEFAULT_SPECIMEN);
  const [step, setStep] = useState('44');
  const copy = text || DEFAULT_SPECIMEN;
  const active = SCALE.find((s) => s.step === step) || SCALE[8];
  const compToken = (s) => `--sc-p-font-text-${s}`;

  return (
    <Section id="type" labelledBy="type-title">
      <Metabar
        ord="01"
        crumb="Foundations / Type"
      />

      <Hero
        id="type-title"
        eyebrow={<>Type<Slash />one voice, one apparatus</>}
        title={<>Twelve steps. <Accent>One ratio.</Accent> A weight that <Em>inverts</Em> at the display line.</>}
        lead={
          <>The system runs on Neue Haas Grotesk and a single mono. Size and tracking carry the
          hierarchy so weight can stay quiet. Below the body line, heavier reads as more important;
          above it, lighter reads as more considered. That inversion is the whole argument.</>
        }
      />

      {/* i · THE SCALE */}
      <Chapter
        ord="i"
        eyebrow="The scale / 1.25 modular"
        title="A twelve-step ladder, hand-set at the chrome end."
        premise="Type your own copy. It renders live at every step below, and large at the step you pick. The metadata beside each line is the composition token resolved — size, weight, line-height, tracking — not a description of it."
        annotations={[
          { title: 'Ratio 1.25', body: 'A major third. It holds cleanly from 16 up — 16 · 20 · ~24 · ~32. The chrome tier (11–16) is hand-set in 1–2px steps because at that size optical spacing beats the math.' },
          { title: 'Where it starts', body: 'Caption sits at 13. Below it the eye reads structure, not prose. From 13 up it reads as text.' },
          { title: 'The ceiling', body: '120 is the monumental step. Line-height flattens to 1.0 so two-line display aligns without a visual gap.' },
        ]}
      >
        <div className={styles.specimenControl}>
          <label className={styles.controlLabel} htmlFor="type-specimen">Specimen copy</label>
          <input
            id="type-specimen"
            className={styles.specimenInput}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={DEFAULT_SPECIMEN}
            aria-label="Specimen copy rendered across the scale"
          />
        </div>

        <div className={styles.featured}>
          <div className={kit.rowEyebrow}>
            <span><b>Step</b><Slash />{active.step}px<Slash />{active.weight[0]} {active.weight[1]}</span>
            <span>{active.use}</span>
          </div>
          <div
            className={styles.featuredSpecimen}
            style={{ font: `var(${compToken(active.step)})`, letterSpacing: `var(${compToken(active.step)}-letter-spacing)` }}
          >
            {copy}
          </div>
          <div className={styles.stepPicker} role="group" aria-label="Choose a scale step">
            {SCALE.map((s) => (
              <button
                key={s.step}
                type="button"
                className={`${styles.stepChip} ${s.step === step ? styles.stepChipSel : ''}`}
                onClick={() => setStep(s.step)}
                aria-pressed={s.step === step}
              >
                {s.step}
              </button>
            ))}
          </div>
        </div>

        <ol className={styles.ladder}>
          {SCALE.map((s) => (
            <li key={s.step} className={styles.ladderRow}>
              <div className={styles.ladderMeta}>
                <span className={styles.ladderStep}>{s.step}<span className={styles.ladderUnit}>px</span></span>
                <code className={styles.ladderToken}>{compToken(s.step)}</code>
                <span className={styles.ladderAxes}>
                  {withSlash(`${s.weight[0]} ${s.weight[1]} · lh ${s.lh[1]} · ${s.track[0]} ${s.track[1]}`)}
                </span>
                <span className={styles.ladderUse}>{s.use}</span>
              </div>
              <div
                className={styles.ladderSpecimen}
                style={{ font: `var(${compToken(s.step)})`, letterSpacing: `var(${compToken(s.step)}-letter-spacing)` }}
              >
                {copy}
              </div>
            </li>
          ))}
        </ol>
      </Chapter>

      {/* ii · WEIGHT STRATEGY */}
      <Chapter
        ord="ii"
        eyebrow="Weight / three zones"
        title="Five weights. The system reads as three zones in a five-step rhythm."
        premise="Chrome compensates up. Body stays neutral. Mid-headline asserts. Display steps back down. Bold (700+) exists in the cut but is not in the system — reserving it means it will carry signal the day it is introduced."
        annotations={[
          { title: 'The inversion', body: 'Weight is not monotonic with size. It climbs for chrome, sits flat for body, climbs for headline, then drops for display. 44px is the hinge.' },
          { title: 'Why never bold', body: 'Body-to-display contrast comes from size and tracking, not from stroke maxima. Bold held in reserve is bold that still means something.' },
        ]}
      >
        <div className={kit.tableScroll}>
          <table className={kit.dataTable}>
            <thead>
              <tr><th>Weight</th><th>Value</th><th>Scale steps</th><th>Zone</th><th>Rationale</th></tr>
            </thead>
            <tbody>
              {WEIGHTS.map((w) => (
                <tr key={w.name}>
                  <td><b>{w.name}</b></td>
                  <td className={kit.mono}>{w.value}</td>
                  <td className={kit.mono}>{withSlash(w.steps)}</td>
                  <td>{w.zone}</td>
                  <td>{w.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.weightRamp} aria-hidden="true">
          {WEIGHTS.filter((w) => w.value !== '600').map((w) => (
            <div key={w.name} className={styles.weightSwatch}>
              <span className={styles.weightGlyph} style={{ fontWeight: `var(--sc-p-font-weight-${w.name.toLowerCase()})` }}>Aa</span>
              <span className={styles.weightCap}>{w.name} {w.value}</span>
            </div>
          ))}
        </div>
      </Chapter>

      {/* iii · SECONDARY FACE */}
      <Chapter
        ord="iii"
        eyebrow="Secondary face / the apparatus"
        title="Cascadia Mono. Chosen for what it does to the chrome, not the code."
        premise="The two faces are not equal partners. Sans is the voice; mono is the apparatus — eyebrows, badges, timestamps, token references, code. Cascadia was re-run against Geist, JetBrains, and IBM Plex in Sprint 2 and re-affirmed. The deciding question was answered by the rest of the system."
        annotations={[
          { title: 'The one detail', body: 'The humanist curl on the a and the curved l and t terminals. At 11px they disambiguate; at display they create productive opposition to NHG’s grotesque neutrality. Sans says calm voice, mono says characterful voice. The tension is the brand.' },
          { title: 'Mono is apparatus', body: 'It never carries running prose or a default headline. Larger mono is always a deliberate single-axis override, never a fallback.' },
          { title: 'Ligatures on demand', body: 'The base Mono is clean. Code surfaces that want ligatures switch to the Cascadia Code companion inside code and pre only.' },
        ]}
      >
        <div className={kit.panel}>
          <div className={kit.panelHead}><span><b>Code specimen</b><Slash />Cascadia Mono<Slash />mono / body 16</span><span>font.text.mono.16</span></div>
          <pre className={styles.code}>{CODE_SPECIMEN}</pre>
        </div>
        <div className={kit.tableScroll}>
          <table className={kit.dataTable}>
            <thead>
              <tr><th>Face</th><th>Verdict</th><th>How it reads</th><th>The case against</th></tr>
            </thead>
            <tbody>
              {MONO.map((m) => (
                <tr key={m.face}>
                  <td><b>{m.face}</b></td>
                  <td>
                    <span className={`${kit.scBadge} ${m.verdict === 'selected' ? kit.badgeAccent : kit.badgeFail}`}>
                      {m.verdict}
                    </span>
                  </td>
                  <td>{m.read}</td>
                  <td>{m.against}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Chapter>

      {/* iv · OPTICAL BEHAVIOR */}
      <Chapter
        ord="iv"
        eyebrow="Optical / the small end"
        title="The compensation NHG needs is at 11px, not at 120px."
        premise="NHG is a screen cut with no print optical sizes. At 11–12px its stems fall below the threshold where the antialiased grid renders them evenly, so a line of caps eyebrows aliases unevenly. The fix is a weight bump, not a redraw. Read the two specimens: same size, one compensated."
        annotations={[
          { title: 'Tracking philosophy', body: 'Chrome opens, display closes. Caps eyebrows track positive (wide → widest); display tracks negative (tighter → tightest). When both meet above a headline they pull in opposite directions on purpose — it separates the registers.' },
          { title: 'Forced antialiasing', body: 'geometricPrecision over optimizeLegibility at the chrome tier. Kerning gain is invisible at 11px; even stem placement is what matters.' },
          { title: 'No italic at 11', body: 'NHG italic blurs into the row beneath at 11px on retina. Chrome italic, if ever needed, is set in mono — Cascadia’s higher x-height survives the sub-pixel pass.' },
        ]}
      >
        <div className={styles.opticalGrid}>
          <div className={styles.opticalCell}>
            <div className={styles.opticalTag}><span className={`${kit.scBadge} ${kit.badgeFail}`}>Before</span><span className={kit.stateToken}>11px · Regular 400</span></div>
            <div className={styles.opticalSpecimen} style={{ fontSize: 'var(--sc-p-font-size-11)', fontWeight: 'var(--sc-p-font-weight-regular)', letterSpacing: 'var(--sc-p-font-tracking-widest)', fontFamily: 'var(--sc-p-font-family-sans)' }}>
              FOUNDATIONS · COLOR · TYPE · SPACING · MOTION · MARK
            </div>
            <p className={styles.opticalNote}>Stems thin out and the line colours unevenly under sub-pixel rendering.</p>
          </div>
          <div className={styles.opticalCell}>
            <div className={styles.opticalTag}><span className={`${kit.scBadge} ${kit.badgePass}`}>After</span><span className={kit.stateToken}>11px · Medium 500</span></div>
            <div className={styles.opticalSpecimen} style={{ fontSize: 'var(--sc-p-font-size-11)', fontWeight: 'var(--sc-p-font-weight-medium)', letterSpacing: 'var(--sc-p-font-tracking-widest)', fontFamily: 'var(--sc-p-font-family-sans)' }}>
              FOUNDATIONS · COLOR · TYPE · SPACING · MOTION · MARK
            </div>
            <p className={styles.opticalNote}>Medium restores stem density. The line holds even colour. This is the shipped chrome weight.</p>
          </div>
        </div>
      </Chapter>
    </Section>
  );
}
