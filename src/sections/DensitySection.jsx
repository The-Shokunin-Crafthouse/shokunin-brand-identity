/**
 * DensitySection — Voice · Density · fully built.
 *
 * Three beats: what density means (one idea at three densities), the
 * per-register density scale (word ranges from brand-voice.md §2), and
 * density in components (UI copy rules, demonstrated on the real Button,
 * Tooltip, and Input). Page chrome is all --sc-* tokens.
 */

import { Section, Metabar, Hero, Chapter, Accent, Em, Slash, kit } from './_kit/Editorial.jsx';
import { Button } from '../components/Button/Button.jsx';
import { Tooltip } from '../components/Tooltip/Tooltip.jsx';
import { Input } from '../components/Input/Input.jsx';
import styles from './DensitySection.module.css';

const LEVELS = [
  { tag: 'Sparse', verdict: 'bad', note: 'Too thin. Compresses past the point of meaning — reads as dismissive, not confident.',
    copy: 'We build lasting work.' },
  { tag: 'Calibrated', verdict: 'good', note: 'On-system. One claim, one mechanism. Every sentence earns its place; nothing is over-explained.',
    copy: 'We build work that holds its value past the launch. Beautiful is the floor. What keeps your customers is the work underneath it.' },
  { tag: 'Heavy', verdict: 'bad', note: 'Overwrought. The claim is buried under qualifiers and restatements. Three rewrites of one idea.',
    copy: 'We are a studio that builds work, and that work is carefully designed and engineered to be lasting and durable over time, holding its value well beyond the initial launch moment, because we believe that beautiful design is really just the baseline floor and what truly matters and ultimately keeps your customers coming back again and again is the deeper, more meaningful work that lives underneath the surface.' },
];

// Word ranges per register (brand-voice.md §2). max scales the bars.
const SCALE = [
  { reg: 'Product', min: 4, max: 14, sweet: '6–10 openers' },
  { reg: 'Studio / Marketing', min: 4, max: 18, sweet: '4–10 declarations' },
  { reg: 'Client Proposal', min: 10, max: 24, sweet: '8–14 direction' },
  { reg: 'Case Study', min: 8, max: 28, sweet: '18–28 reasoning' },
];
const SCALE_MAX = 32;

const COMPONENTS = [
  { name: 'Button label', rule: '1–3 words. A verb and its object. Never a sentence.',
    demo: <Button variant="primary">Start a project</Button>, count: '3 words' },
  { name: 'Tooltip', rule: 'One line, no period. A hint, not a statement.',
    demo: <div className={styles.tipStage}><Tooltip content="Saved to the binder"><span className={styles.tipTarget}>hover me</span></Tooltip></div>, count: '4 words · no period' },
  { name: 'Error message', rule: 'Subject, problem, path forward. 15 words or fewer.',
    demo: <Input label="Email" error="That isn’t an email yet — check the @." defaultValue="levi.bahn" />, count: '8 words' },
];

export function DensitySection() {
  return (
    <Section id="density" labelledBy="density-title">
      <Metabar
        ord="04"
        crumb="Voice / Density"
      />

      <Hero
        id="density-title"
        eyebrow={<>Density<Slash />sentences per thought</>}
        title={<>Density is <Accent>not</Accent> word count. It is how many sentences <Em>one idea earns.</Em></>}
        lead={<>The same idea can be written too thin, on-system, or overwrought. Density is the ratio of assertions to qualifications — how much a thought is allowed to say before it starts saying it again. Calibrated copy makes every sentence carry weight and stops the moment the idea is complete.</>}
      />

      {/* i · WHAT DENSITY MEANS */}
      <Chapter
        ord="i"
        eyebrow="What it means / one idea, three densities"
        title="Same content. Three densities. One of them is right."
        premise="The idea below is constant: the studio builds work that lasts. Only the density changes. Sparse reads as dismissive; heavy buries the claim; calibrated says it once, with weight, and stops."
        annotations={[
          { title: 'The common failure', body: 'Over-explanation. Studio copy drifts heavy — it restates the claim three ways because one felt too bare. Trust the single sentence.' },
          { title: 'The density floor', body: 'Below calibrated, copy reads as dismissive. “We build lasting work” is not confident, it is curt. Restraint is not the same as withholding.' },
          { title: 'Copy beside a chart', body: 'When copy accompanies a data visualisation, it goes sparser still — the chart carries the evidence, so the words name only the takeaway.' },
        ]}
      >
        <div className={styles.levels}>
          {LEVELS.map((l) => (
            <figure key={l.tag} className={styles.level}>
              <div className={styles.levelHead}>
                <span className={styles.levelTag}>{l.tag}</span>
                <span className={`${kit.scBadge} ${l.verdict === 'good' ? kit.badgePass : kit.badgeFail}`}>{l.verdict === 'good' ? 'On-system' : l.tag === 'Sparse' ? 'Too thin' : 'Overwrought'}</span>
                <span className={styles.levelCount}>{l.copy.split(/\s+/).length} words</span>
              </div>
              <blockquote className={styles.levelCopy}>{l.copy}</blockquote>
              <figcaption className={styles.levelNote}>{l.note}</figcaption>
            </figure>
          ))}
        </div>
      </Chapter>

      {/* ii · THE DENSITY SCALE */}
      <Chapter
        ord="ii"
        eyebrow="The scale / words per sentence"
        title="Each register has a band. The band is the budget."
        premise="The four registers carry different sentence-length budgets. Product is the tightest; Case Study runs the longest reasoning sentences. The bar is the full range; the label names the sweet spot inside it."
        annotations={[
          { title: 'The band is a ceiling, not a target', body: 'Hitting the top of the range every sentence reads as corporate. Vary inside the band — short beats, long reasoning.' },
          { title: 'Product is the floor', body: 'The longest product sentence is shorter than the shortest case-study sentence. The registers do not overlap by accident.' },
        ]}
      >
        <div className={kit.panel}>
          <div className={kit.panelHead}><span><b>Words per sentence</b><Slash />by register</span><span>0 → {SCALE_MAX}</span></div>
          <div className={styles.scale}>
            {SCALE.map((s) => (
              <div key={s.reg} className={styles.scaleRow}>
                <span className={styles.scaleReg}>{s.reg}</span>
                <span className={styles.scaleTrack}>
                  <span className={styles.scaleBar} style={{ marginLeft: `${(s.min / SCALE_MAX) * 100}%`, width: `${((s.max - s.min) / SCALE_MAX) * 100}%` }}>
                    <span className={styles.scaleMin}>{s.min}</span>
                    <span className={styles.scaleMax}>{s.max}</span>
                  </span>
                </span>
                <span className={styles.scaleSweet}>{s.sweet}</span>
              </div>
            ))}
          </div>
        </div>
      </Chapter>

      {/* iii · DENSITY IN COMPONENTS */}
      <Chapter
        ord="iii"
        eyebrow="In components / a different budget"
        title="Interface copy runs tighter than editorial."
        premise="UI copy obeys its own density rules, far below the editorial registers. A button is a verb; a tooltip is a hint; an error names the problem and the way out in fifteen words or fewer. These are the real components, carrying real copy."
        annotations={[
          { title: 'Shorter is the rule, not the exception', body: 'Editorial earns sentences; interface earns words. A button that reads as a sentence is a button that has lost its nerve.' },
          { title: 'The empty state', body: 'One headline, one sentence, then stop. “Nothing here yet. Make the first one count.” The blank screen is not the place to explain the product.' },
        ]}
      >
        <div className={styles.compGrid}>
          {COMPONENTS.map((c) => (
            <div key={c.name} className={`${kit.panel} ${styles.compPanel}`}>
              <div className={kit.panelHead}><span><b>{c.name}</b></span><span>{c.count}</span></div>
              <div className={styles.compDemo}>{c.demo}</div>
              <p className={styles.compRule}>{c.rule}</p>
            </div>
          ))}
          <div className={`${kit.panel} ${styles.compPanel}`}>
            <div className={kit.panelHead}><span><b>Empty state</b></span><span>1 headline · 1 sentence</span></div>
            <div className={styles.compDemo}>
              <div className={styles.emptyState}>
                <span className={styles.emptyMark} aria-hidden="true">◍</span>
                <span className={styles.emptyHead}>Nothing here yet.</span>
                <span className={styles.emptyBody}>Make the first one count.</span>
              </div>
            </div>
            <p className={styles.compRule}>One headline, one sentence, then stop. The blank screen does not explain the product.</p>
          </div>
        </div>
      </Chapter>
    </Section>
  );
}
