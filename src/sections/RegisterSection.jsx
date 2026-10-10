/**
 * RegisterSection — Voice · Register · fully built.
 *
 * Three beats: the four registers as reference cards, the twelve
 * canonical examples rendered as specimens, and the interactive
 * register-scored checker. Content is drawn from _config/voice/
 * brand-voice.md §2 and §4. The page chrome is all --sc-* tokens;
 * the checker calls the Anthropic API with a local rubric fallback.
 */

import { Section, Metabar, Hero, Chapter, Accent, Em, Slash, kit } from './_kit/Editorial.jsx';
import { VoiceChecker } from './_kit/VoiceChecker.jsx';
import styles from './RegisterSection.module.css';

const REGISTERS = [
  {
    name: 'Studio / Marketing', who: 'Founders and product leads deciding whether to hire.',
    opening: 'A position-stake. One declarative sentence that names what the studio does and what makes it different. Never opens on the reader’s problem.',
    structure: 'Short declarations carry the weight. Parallel pairs. No rhetorical questions, no “imagine if”.',
    density: '4–18 words. Declarations land at 4–10. Never past 22.',
    perspective: 'We — the studio is one designer plus the work. I only on the About page.',
    allows: ['Parallel pairs that stake a position', 'Outcome-tied craft claims', 'Closing on the client relationship'],
    forbids: ['Awards of any kind', 'Reader-framing setup', 'Aspirational filler', '“Launch” in the headline'],
  },
  {
    name: 'Case Study', who: 'Clients and peers deciding whether the studio can do the work.',
    opening: 'A four-sentence Overview: names the partner and engagement, states the outcome in measurable terms, bridges into the story. “We partnered with…”.',
    structure: 'Vary deliberately — short beats, long reasoning. The main verb arrives in the first nine words.',
    density: '8–28 words. Beats at 6–10, reasoning at 18–28. Never past 32.',
    perspective: 'We on client and team work. I only on solo work, from sentence one.',
    allows: ['Specific named data points', 'Dry humour anchored to a real number', 'Section labels that name what was solved'],
    forbids: ['Solution detail in the Overview', 'Generic outcome adjectives', 'Em dashes', 'Awards in the body'],
  },
  {
    name: 'Client Proposal', who: 'One named client evaluating scope, approach, and fit.',
    opening: 'A two-sentence frame naming the project and the success condition. Opens on the work — does not restate the brief or thank the client.',
    structure: 'Complete sentences. No clause-stacking that hides the verb. Prose, not a slide script.',
    density: '10–24 words. Direction lands at 8–14, scope runs 15–24.',
    perspective: 'The studio and you. I sparingly — one personal call at most.',
    allows: ['Direct statement of creative direction', 'Named dependencies', 'Plain deliverable language', 'One sentence of warmth at the close'],
    forbids: ['Hedging on direction', 'Hollow enthusiasm', 'Restating the brief', 'Pitch-deck script tone'],
  },
  {
    name: 'Product', who: 'End users deciding whether the product is for them.',
    opening: 'A single surface-spotting sentence: “[Product] [verb] the [thing] you can’t [verb].” States what the product does to the user’s world.',
    structure: 'The tightest register. Start with the point. The longest product sentence is shorter than the shortest case-study one.',
    density: '4–14 words. Openers at 6–10, feature lines at 3–7.',
    perspective: 'The product, by name, and you. We means user-plus-product. Never I.',
    allows: ['Surface-spotting opener', 'Proof bridge', 'Specific social proof', 'Conversational microcopy'],
    forbids: ['Studio “we”', 'Authorial voice', 'Negative-frame audience', 'Adjective-stacked claims'],
  },
];

const CANON = [
  {
    reg: 'Case Study', items: [
      { copy: 'We partnered with Formstack’s product team to redesign their core onboarding flow. The goal was straightforward: understand why completion rates had stalled at 23%, then rearchitect the flow to remove friction without sacrificing data collection. Our work brought completion to 61%, unlocking new user value and downstream revenue impact.', note: 'Overview holds outcome metrics only. The colon introduces the constraint as a tight clause.' },
      { copy: '46% of subscribers Binge Watched at least 3 shows this year. That’s up 5,118% from last year. We blame Better Call Saul for the surge.', note: 'Dry wit, and it lands because the data is real and specific to one year.' },
    ],
  },
  {
    reg: 'Studio / Marketing', items: [
      { copy: 'Design that sticks beyond the craft. We build websites, web apps, and iOS products that hold their value past the launch high. Beautiful is the floor. What gets you here is craft. What keeps your customers is the work underneath it.', note: 'Position staked in five words, then the mechanism. Parallel pairs compound rather than compete.' },
      { copy: 'You hire the studio for the sticky. For the value. For the relationship you want to have with your customers a year after the launch, when the rest of the launch noise has gone quiet.', note: 'Closes on the client relationship, not a feature list.' },
    ],
  },
  {
    reg: 'Client Proposal', items: [
      { copy: 'This project is a brand identity and marketing site for a precision-instrument company shipping its first consumer product. The work needs to hold credibility with the engineers who already trust the brand, and earn it with a buyer who has never heard of it.', note: 'Names the work and what it must accomplish before any deliverable is listed.' },
      { copy: 'The direction is a near-monochrome identity grounded in warm gray and ink, with a single chromatic accent reserved for points of decision. The position is precision-instrument, not luxury-lifestyle.', note: 'The call is already made. “The direction is X”, never “we think it might be worth”.' },
    ],
  },
  {
    reg: 'Product', items: [
      { copy: 'Luma spots the patterns you can’t see. The proof is in your entries. Luma visualizes your entries and extracts patterns and themes so you can lead a happier and healthier you.', note: 'Surface-spotter opener, proof bridge, aspirational close on a person’s life — never a dashboard metric.' },
      { copy: 'Who’s this line for? · Almost there. · Check that again — one of those isn’t a phone number yet. · Nothing here yet. Make the first one count.', note: 'Microcopy as conversation. Never “Enter account holder information.”' },
    ],
  },
];

export function RegisterSection() {
  return (
    <Section id="register" labelledBy="register-title">
      <Metabar
        ord="04"
        crumb="Voice / Register"
      />

      <Hero
        id="register-title"
        eyebrow={<>Register<Slash />four contexts, one voice</>}
        title={<>One voice. <Accent>Four postures.</Accent> The principles never <Em>change.</Em></>}
        lead={<>The studio writes in one voice across every surface. What shifts between a case study, a studio page, a proposal, and product copy is posture, density, perspective, and structural pattern — not which principles apply. Pick the register at the top of the page and hold it to the close.</>}
      />

      {/* i · THE FOUR REGISTERS */}
      <Chapter
        ord="i"
        eyebrow="The four registers / reference cards"
        title="Four contexts, specified across six fields each."
        premise="Opening pattern, sentence structure, density, perspective, what it allows, what it forbids. Read down a card to write in that register; read across the four to see what stays constant."
        annotations={[
          { title: 'The one constant', body: 'The seven principles hold across all four. A register changes posture and pattern, never whether craft, restraint, or authorship apply.' },
          { title: 'The most misapplied', body: 'Studio / Marketing. It drifts into case-study past-tense or brochure filler. If it opens on the reader’s problem instead of the studio’s position, it is already wrong.' },
          { title: 'Register is not density', body: 'Register is posture, perspective, and structural pattern. Density is sentence-count per thought — a separate axis, covered in its own page.' },
        ]}
      >
        <div className={styles.cards}>
          {REGISTERS.map((r) => (
            <div key={r.name} className={kit.panel}>
              <div className={kit.panelHead}><span><b>{r.name}</b></span></div>
              <div className={styles.card}>
                <p className={styles.who}>{r.who}</p>
                <dl className={styles.fields}>
                  <div className={styles.field}><dt>Opening</dt><dd>{r.opening}</dd></div>
                  <div className={styles.field}><dt>Structure</dt><dd>{r.structure}</dd></div>
                  <div className={styles.field}><dt>Density</dt><dd>{r.density}</dd></div>
                  <div className={styles.field}><dt>Perspective</dt><dd>{r.perspective}</dd></div>
                </dl>
                <div className={styles.lists}>
                  <div className={styles.allow}>
                    <span className={styles.listHead}>Allows</span>
                    <ul>{r.allows.map((a) => <li key={a}>{a}</li>)}</ul>
                  </div>
                  <div className={styles.forbid}>
                    <span className={styles.listHead}>Forbids</span>
                    <ul>{r.forbids.map((f) => <li key={f}>{f}</li>)}</ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Chapter>

      {/* ii · REGISTER IN USE */}
      <Chapter
        ord="ii"
        eyebrow="In use / canonical copy"
        title="The reference standard, rendered."
        premise="These are real copy, not placeholders — the canonical examples the voice checker calibrates against. Each is set as a specimen and annotated with the principle it demonstrates."
        annotations={[
          { title: 'Why canonical', body: 'A score of 5 on any principle means the line is doing what one of these does. They are the calibration set, not decoration.' },
          { title: 'Real copy only', body: 'No Lorem, no [client] fields. Every example shipped or could ship as written.' },
        ]}
      >
        <div className={styles.canon}>
          {CANON.map((group) => (
            <div key={group.reg} className={styles.canonGroup}>
              <div className={kit.rowEyebrow}><span><b>{group.reg}</b></span><span>{group.items.length} examples</span></div>
              {group.items.map((ex, i) => (
                <figure key={i} className={styles.specimen}>
                  <blockquote className={styles.specimenCopy}>{ex.copy}</blockquote>
                  <figcaption className={styles.specimenNote}>{ex.note}</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </Chapter>

      {/* iii · THE SELECTOR */}
      <Chapter
        ord="iii"
        eyebrow="The selector / score your own"
        title="Paste copy, pick a register, read the score."
        premise="The checker runs the seven-principle rubric and the anti-pattern scan against your copy, weighted to the register you choose. It calls the studio’s voice model; if the model is unreachable it falls back to a local rubric scan so the score always returns."
        annotations={[
          { title: 'Line-level, not vibes', body: 'Every score and every flag quotes the exact line. “This is too passive” is a failure state; the checker names the line and the fix.' },
          { title: 'It audits, never rewrites', body: 'The output is a score and a directional fix. Full rewrites hand off to copy-surgeon — a different job.' },
        ]}
      >
        <VoiceChecker mode="register" />
      </Chapter>
    </Section>
  );
}
