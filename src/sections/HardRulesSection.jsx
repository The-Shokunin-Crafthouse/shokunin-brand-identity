/**
 * HardRulesSection — Voice · Hard rules · fully built.
 *
 * Three beats: the five hard rules (each with violation, correction, and
 * the principle it enforces), the anti-pattern library grouped by
 * category, and the full seven-principle checker reused from Register.
 * Content from brand-voice.md §3. Chrome is all --sc-* tokens.
 */

import { Section, Metabar, Hero, Chapter, Accent, Em, Slash, kit } from './_kit/Editorial.jsx';
import { VoiceChecker } from './_kit/VoiceChecker.jsx';
import styles from './HardRulesSection.module.css';

const RULES = [
  {
    name: 'No em dashes', enforces: 'P1 Craft',
    rule: 'Every em dash in deliverable copy is a rewrite. The voice is built on clean clauses and deliberate punctuation.',
    bad: 'We rearchitected the flow — completion jumped from 23% to 61% — without sacrificing data collection.',
    good: 'We rearchitected the flow. Completion jumped from 23% to 61%, and the data we collected held.',
  },
  {
    name: 'No passive voice on decisions', enforces: 'P6 Authorship',
    rule: 'Creative calls are first-person active. Passive removes the author from the work and reads as committee.',
    bad: 'The design was led by the studio. The direction was chosen after research.',
    good: 'We led the design. We chose the direction after research.',
  },
  {
    name: 'No throat-clearing opener', enforces: 'P7 Originality',
    rule: 'The first sentence stakes a position. A belief-framing opener could begin any studio’s copy and delivers no insight.',
    bad: 'At The Shokunin Crafthouse, we believe great design is more than just aesthetics.',
    good: 'Design that sticks beyond the craft.',
  },
  {
    name: 'No hedging on direction', enforces: 'P6 Authorship',
    rule: 'In a proposal especially, the direction is stated, not suggested. Conviction is not arrogance.',
    bad: 'We think it might be worth considering a near-monochrome palette.',
    good: 'The direction is a near-monochrome palette with a single chromatic accent.',
  },
  {
    name: 'No awards-as-positioning', enforces: 'P7 Originality',
    rule: 'Even dismissing awards raises them. They do not appear in studio copy at all — replace with an outcome the work produced.',
    bad: 'While this isn’t about awards, the work has been recognized at multiple competitions.',
    good: 'Our work brought Formstack onboarding completion from 23% to 61%.',
  },
];

const ANTI = [
  {
    cat: 'Soft Disqualifier', sub: 'stop and confirm',
    items: [
      { name: 'Empty intensifiers', bad: 'A robust, cutting-edge, world-class design system.', why: 'Adjectives standing in for a specific claim.', good: 'A token-driven design system that survives a framework change.' },
      { name: 'Corporate filler verbs', bad: 'We leverage design thinking to drive value and move the needle.', why: 'Agency-speak that means nothing the reader can act on.', good: 'We use research to find the decisions worth making, and we make them.' },
      { name: 'Vague benefit language', bad: 'Our work creates impact and elevates the brand.', why: 'No what, no how. Generic outcomes belong to anyone.', good: 'Our work brought Formstack onboarding completion from 23% to 61%.' },
      { name: 'Hollow enthusiasm', bad: 'We love this project and are thrilled to partner with you.', why: 'Enthusiasm is implied by the work, not performed.', good: 'The project’s success condition is clear, and the work the studio is best at lines up against it.' },
    ],
  },
  {
    cat: 'AI-Slop', sub: 'the copy equivalent of stock design',
    items: [
      { name: 'Adjective stacking', bad: 'A powerful, intuitive, beautifully designed journaling experience.', why: 'Three adjectives signal none are working.', good: 'A journaling app that reads your entries back to you.' },
      { name: 'Parallel-list fatigue', bad: 'We design with intention. We build with precision. We ship with conviction.', why: 'The parallelism announces the format, not the content.', good: 'We design with intention. We build with precision. The work ships when it cannot be improved without changing its nature.' },
      { name: 'Inspirational closer', bad: 'Together, we can build something extraordinary.', why: 'Closes essays written by no one for no one.', good: 'The next step is a 30-minute call to confirm the scope and the start date.' },
      { name: 'Feature dump', bad: 'Mood tracking. Pattern detection. Decision timeline. Insight visualization.', why: 'Four features, no human outcome. A spec sheet.', good: 'Mood tracking across weeks. A decision timeline that shows you why you chose what you chose.' },
    ],
  },
  {
    cat: 'Net-New', sub: 'discovered in Sprint 3',
    items: [
      { name: 'Negative-audience framing', bad: 'Luma is for people who never look back.', why: 'Defines the audience by what they fail to do.', good: 'Luma is for people who journal looking for reason.' },
      { name: 'Reader-framing opener', bad: 'Your product only gets one launch moment. After that, it survives on…', why: 'A soft throat-clear that limits the audience to pre-launch teams.', good: 'Design that sticks beyond the craft.' },
    ],
  },
];

export function HardRulesSection() {
  return (
    <Section id="hard-rules" labelledBy="hard-rules-title">
      <Metabar
        ord="04"
        crumb="Voice / Hard rules"
        meta={[['Last revised', '2026.06.05'], ['Rules', '5'], ['Spec', 'v1.2'], ['Status', 'Complete']]}
      />

      <Hero
        id="hard-rules-title"
        eyebrow={<>Hard rules<Slash />zero tolerance</>}
        title={<>Five rules with <Accent>no exceptions.</Accent> Break one and the copy is <Em>off-voice.</Em></>}
        lead={<>Most of the voice is judgment. These five are not. They are zero-tolerance across all four registers: every em dash, every passive decision, every throat-clear, every hedge, every awards mention is a rewrite before delivery. The anti-pattern library below is the same scan, run wider.</>}
      />

      {/* i · THE RULES */}
      <Chapter
        ord="i"
        eyebrow="The five / zero tolerance"
        title="The rule, the violation, the fix, the principle."
        premise="Each rule is shown with the line that breaks it and the line that holds, plus the principle it protects. The violation is struck; the correction stands."
        annotations={[
          { title: 'The hardest to follow', body: 'No em dashes. The dash feels like rhythm, so cutting it forces a real choice — a period or a comma — every single time. The comfort is exactly why it has to go.' },
          { title: 'Hard rule vs preference', body: 'A hard rule is zero-tolerance across every register. A preference (sentence length, perspective) applies within one. Break a preference and you are off-register; break a rule and you are off-voice.' },
        ]}
      >
        <div className={styles.rules}>
          {RULES.map((r) => (
            <div key={r.name} className={kit.panel}>
              <div className={kit.panelHead}>
                <span><b>{r.name}</b></span>
                <span className={`${kit.scBadge} ${kit.badgeAccent}`}>{r.enforces}</span>
              </div>
              <p className={styles.ruleStatement}>{r.rule}</p>
              <div className={styles.compare}>
                <div className={styles.bad}>
                  <span className={styles.compareTag}>Violation</span>
                  <span className={styles.compareCopy}>{r.bad}</span>
                </div>
                <div className={styles.good}>
                  <span className={styles.compareTag}>Corrected</span>
                  <span className={styles.compareCopy}>{r.good}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Chapter>

      {/* ii · ANTI-PATTERN LIBRARY */}
      <Chapter
        ord="ii"
        eyebrow="The library / run wider"
        title="The anti-patterns the checker scans for."
        premise="Beyond the five hard rules, a graded library of patterns the studio revises before delivery. Soft Disqualifiers are flags to confirm; AI-Slop is the copy equivalent of stock-design failure. Each names the pattern, the failing line, why it fails, and the fix."
        annotations={[
          { title: 'The hardest to detect', body: 'Vague benefit language — “impact”, “elevate”, “drive value”. It passes a casual read because it sounds polished. Only the “what would the reader do with this?” test catches it.' },
          { title: 'Zero tolerance, graded severity', body: 'Every hit is reported. Hard Rules are non-negotiable; Soft Disqualifiers stop you to confirm. None are silently allowed through.' },
        ]}
      >
        {ANTI.map((group) => (
          <div key={group.cat} className={styles.libGroup}>
            <div className={kit.rowEyebrow}><span><b>{group.cat}</b><Slash />{group.sub}</span><span>{group.items.length}</span></div>
            <div className={styles.libRows}>
              {group.items.map((it) => (
                <div key={it.name} className={styles.libRow}>
                  <span className={styles.libName}>{it.name}</span>
                  <span className={styles.libBad}>“{it.bad}”</span>
                  <span className={styles.libWhy}>{it.why}</span>
                  <span className={styles.libGood}>→ {it.good}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Chapter>

      {/* iii · THE CHECKER */}
      <Chapter
        ord="iii"
        eyebrow="The checker / full audit"
        title="Run the full seven-principle audit."
        premise="The same checker as the Register page, run without a register filter: every line scored against all seven principles, every anti-pattern in the library flagged by name. Paste anything — a headline, a paragraph, a proposal section."
        annotations={[
          { title: 'Every flag quotes the line', body: 'No flag without evidence. The scan names the exact line, the pattern, and the directional fix — never a vague “this feels off”.' },
          { title: 'Live, with a local floor', body: 'It calls the studio voice model; if that is unreachable it runs the rubric locally so the audit always returns a verdict.' },
        ]}
      >
        <VoiceChecker mode="audit" />
      </Chapter>
    </Section>
  );
}
