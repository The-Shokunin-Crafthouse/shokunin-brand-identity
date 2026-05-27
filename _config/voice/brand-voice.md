# Brand Voice — The Shokunin Crafthouse

**Source of truth for written voice across every studio surface.**
Last updated: 2026-05-27 (Sprint 3)
Resolves: `sc-brand-system-spec.md` §5 Sprint 3 · §6 success criteria 3a–3c.

---

## 0. Purpose & scope

This document governs every word the studio publishes — case studies, the studio site, client proposals, product copy, App Store listings, headlines, section copy, microcopy. It exists because correct grammar is not the bar. The bar is: this could only have been written from inside this studio.

It is loaded directly by `skills/sc-voice-checker/SKILL.md`, which scores any candidate copy against the seven Shokunin principles using the registers, anti-patterns, and canonical examples below as the calibration set. It is also the reference any human writer (Levi or otherwise) consults before drafting.

Order of authority when downstream skills disagree:

1. This document (`_config/voice/brand-voice.md`)
2. The on-disk `sc-brand-voice` skill (the upstream skeleton)
3. The studio identity context in `studio-memory/`

When this document changes, downstream copy is reviewed against the new state — not the other way around.

---

## 1. Core voice principles

The studio's seven design principles (spec §3 · `WORKSPACE.md` §5) apply to copy as directly as they apply to color and type. Each principle below names what it produces in writing.

**1. Craft is the baseline, not the ceiling.**
Grammar, punctuation, accuracy, and precision are the floor. Style is built on top of a clean draft, never as a substitute for one. A misspelled label or an ambiguous antecedent is a craft failure before it is a voice failure.

**2. One clear point of view.**
One voice, one register, one argument per piece. Tones do not blend across paragraphs. If a case study opens authorial and ends pitchy, the case study has two points of view and is wrong. Pick the register at the top of the page and hold it to the close.

**3. Function first, then beauty — together.**
Clarity is not in tension with craft. A sentence can be precise *and* well-made in the same breath. If a sentence is beautiful and unclear, it is broken. If a sentence is clear and ugly, it is half-finished.

**4. Restraint as a creative act.**
The sentence almost good enough gets cut. The third adjective drops before the second one does. Fewer words with more weight beats more words with less. Empty space inside a paragraph is design, not waste.

**5. Products, not pages.**
Words are part of a product surface, not a marketing document layered on top of one. The button label, the empty state, the error string, and the section heading come from the same writer in the same room. Marketing copy and interface copy share a register.

**6. Authorship over process.**
The voice belongs to a person — Levi, the studio, the project lead — never to a committee. Direction is stated, not suggested. The decision is named, not described. Hedging is not humility; it is the absence of authorship.

**7. Originality over safety.**
Stock phrases, filler transitions, and generic benefit claims are disqualified before the first draft. Every piece of copy contains at least one decision a careful reader would notice as deliberate. Safe is the failure mode.

These seven hold across all four registers. What changes between registers is posture, density, perspective, and structural pattern — not which principles apply.

---

## 2. The four registers

Four contexts. One underlying voice. The foundation — direct, authorial, dry wit where earned, insight before context — holds across all four. What shifts is posture, sentence density, perspective, and structural pattern.

Each register below is specified across six fields: **opening pattern · sentence structure · density · perspective · allows · forbids**.

---

### 2.1 Register — Case Study / Project Storytelling

**Audience.** Potential clients, design peers, hiring leads. Readers deciding whether the studio can do the work.

**Job.** Demonstrate craft and decision-making without showing your work to the point of showing off. Get to the business stakes fast. The decisions should feel inevitable in retrospect.

**Posture.** Authorial. The designer is in the room, not behind the work. "We" on client and team engagements; "I" only on solo work. When in doubt, "We."

#### Opening pattern

The case-study opening is a four-sentence Overview that does exactly three things: names the partner and the engagement, states the business outcome in measurable terms, and offers a conversational bridge into the story. It opens with "We partnered with…" on client and team work, "I led…" on solo work. The first sentence carries the partner and the engagement; it does not foreshadow the solution.

**Canonical example** (Formstack Overview — calibration standard):

> We partnered with Formstack's product team to redesign their core onboarding flow. The goal was straightforward: understand why completion rates had stalled at 23%, then rearchitect the flow to remove friction without sacrificing data collection. Our work brought completion to 61%, unlocking new user value and downstream revenue impact. Let's walk through how we diagnosed the problem and reshaped the experience.

What makes it work: the colon in sentence 2 introduces the constraint as a tight clause. "Stalled" implies the problem was stuck, not just low. "Remove friction without sacrificing data collection" names the constraint, not the solution. The bridge names both parts — diagnosis *and* reshaping.

#### Sentence structure

Vary deliberately. Short sentences land beats. Longer sentences carry reasoning. The mistake is picking one rhythm and holding it — staccato reads as a list; long throughout reads corporate.

Typical clause shapes:

- Subject + active verb + outcome ("We partnered with…", "Our work brought completion to 61%…")
- Conclusion-first, then mechanism ("Gone are the days where everyone was forced to share the same wireless plan." — then the explanation of why)
- Critique + immediate resolution in one sentence ("One thing we didn't love from the Spotify efforts was the linear fashion in which you were led down a singular path. We instead opted for a 'choose your own path' experience from the start.")

Avoid clause-stacking that hides the verb. If the main verb of a sentence is more than nine words in, the sentence is fighting the reader.

#### Density

- **Words per sentence:** 8–28 typical. Short opener-beats land at 6–10. Reasoning sentences run 18–28. Never longer than 32.
- **Paragraphs per section:** 2–4 in Overview · 3–6 in Research / Discovery · 2–4 in each Solution section.
- **List usage:** Permitted for findings (short labels with one-line descriptions below). Not for solution narratives — those run as prose so the causal chain stays visible.

#### Perspective

- **We** — every client engagement and every team project. Use from the first word: "We partnered…"
- **I** — solo projects (personal apps, side projects, independent work) only. "I led design," "I linked up with…"
- **They / the team** — when describing the client's internal process or constraints; never for design decisions the studio owns.

If "I" is correct, it is correct from sentence one. Mid-paragraph switches from "we" to "I" read as authorship anxiety.

#### Allows

- **Specific named data points.** "Completion stalled at 23%" beats "completion was low." Numbers are precision, not decoration.
- **Dry humor anchored to a real number.** "46% of people Binge Watched at least 3 shows this year. That's up 5,118% from last year. We blame Better Call Saul for the surge." The wit lands because the data is real.
- **Section labels that name what was solved.** "Learn Stage," "Buy Flow," "Magic Moment." Never "Wireframes," "Prototypes," "Final Designs."
- **Conclusion-first sentences.** "Gone are the days where…" before the explanation. Make the reader earn the detail, not the point.
- **Pull quotes that carry the voice.** A single observation stated plainly, optionally with a specific witty close.

#### Forbids

- **Solution details in the Overview.** Step counts, structural changes, technique names belong in the Solution sections. The Overview holds outcome metrics only.
- **Generic outcome adjectives.** "Transformative redesign," "comprehensive overhaul," "complete reimagining." Replace with the actual delta.
- **"We" on solo work.** Reads as inflated team scale.
- **Em dashes.** Replace with a period, a comma, or a restructured sentence — every time.
- **Awards in the body copy.** Recognition is implied by the quality of the work; raising it weakens the case.

**Rhythm summary.** Quick, fact-first, with the most rhythmic range of the four registers. Add a smidge of dry humor where it fits and keep the pace fast enough that people actually read it.

---

### 2.2 Register — Studio / Marketing Copy

**Audience.** Startup founders, product leads, engineering and design leadership. Readers deciding whether to hire The Shokunin Crafthouse.

**Job.** Establish what the studio is and why it earns a hire. The studio does not sell beautiful design — it sells design that sticks. Beautiful and functional are the baseline. The differentiator is work that builds intrinsic value beyond trends and beyond the first impression.

**Posture.** Confident and declarative. Parallel statements land harder than long sentences. State the position. Do not explain it.

#### Opening pattern

The studio's opener is a position-stake — a single declarative sentence that names what the studio does *and* what makes it different in the same line. It opens on craft and ends on outcomes, or opens on outcomes and ends on craft. It does not open with the reader's problem; it does not open with industry context.

The default studio headline is **"Design that sticks beyond the craft."** Use it as the canonical opener. Variations preserve the core claim — "sticks," "beyond," positioned against craft-only thinking — and apply universally rather than to a single moment.

**Canonical opener — homepage**:

> Design that sticks beyond the craft.
>
> We build websites, web apps, and iOS products that hold their value past the launch high. Beautiful is the floor. What gets you here is craft. What keeps your customers is the work underneath it — built into how people decide, remember, and come back.

**Canonical opener — about page**:

> The studio is one designer and a specific point of view.
>
> Levi Bahn directs every project: type, color, motion, interaction, copy. The work has one author from first wireframe to final deploy. The Shokunin standard — the craftsman who works because the work demands it, not because anyone asked — is the operating rule, not a brand story.

#### Sentence structure

Short declarations carry the most weight. Longer sentences earn their place only by carrying the reasoning between two declarations.

Typical clause shapes:

- Parallel pairs ("Built to mean something. Built to do something.")
- Position-then-mechanism ("Beautiful is the floor. What gets you here is craft.")
- Outcome-tied craft claim ("We build work that stays.")
- Single-sentence close that anchors on the client relationship.

Do not use rhetorical questions. Do not use "imagine if…" openings. Do not stack three adjectives before a noun.

#### Density

- **Words per sentence:** 4–18 typical. Declarations land at 4–10. Reasoning runs 12–18. Never longer than 22.
- **Paragraphs per section:** 1–3. The studio page is short on purpose.
- **List usage:** Sparse. A list of three short capability lines is acceptable at the bottom of a section. Lists of values, principles, or process steps are forbidden — they collapse the voice into bullet-deck cadence.

#### Perspective

- **We** — every studio surface. The studio is one designer plus the work; "we" is shorthand for that pairing, not a fake team.
- **The studio** — when "we" has appeared three times in a paragraph and a fourth would read possessive.
- **I** — reserved for the About page, the founder bio, and signed essays. Never on a service page or a positioning headline.

#### Allows

- **Parallel pairs that stake a position.** "Built to mean something. Built to do something." Two short clauses with shared structure that say the same thing twice in different directions.
- **Outcome-tied craft claims.** Name the craft decision *and* what it produces — "type that holds at 11px and at 96px without re-drawing," not "beautiful type."
- **Closing on the client relationship.** "You hire us for the sticky, for the value, for the relationship you want to have with your customers."
- **One signed sentence on the studio page where the founder's voice surfaces.** Used at most once per page.

#### Forbids

- **Awards mentions of any kind.** Not as a goal, not as proof, not as contrast ("this isn't about awards"). They do not exist in this copy.
- **Reader-framing setup sentences.** "Your product only gets one launch moment…" is a soft throat-clear. Open with the studio's position, not the reader's problem.
- **Aspirational filler.** "We build digital experiences that transform your brand." Could be any studio. Replace with what the studio actually does, in the studio's terms.
- **"Launch" in the headline.** Limits the audience to pre- or mid-launch teams. Post-launch teams disengage.
- **Process-as-product.** "Our four-phase methodology" reads as agency template, not studio.

**Rhythm summary.** Short, parallel where it carries, with the restraint of the writing mirroring the restraint of the design. Every sentence stakes a claim or supports one. Nothing decorates.

---

### 2.3 Register — Client Proposals

**Audience.** One specific named client. Has already met the studio, has context on the work, is evaluating scope, approach, and fit.

**Job.** Define the project, the approach, and the deliverables with enough clarity that both sides know what a successful engagement looks like. The proposal is a creative declaration, not an invitation for feedback.

**Posture.** Direct and precise. State the creative direction with conviction. "The direction is X" — not "we think it might be worth considering X." The proposal is where authorship gets established before work begins.

#### Opening pattern

The proposal opener is a two-sentence frame that names the project and the success condition. It does not restate the brief. It does not thank the client. It does not name the studio. It opens on the work.

**Canonical opener — design engagement**:

> This project is a brand identity and marketing site for a precision-instrument company shipping its first consumer product. The work needs to hold credibility with the engineers who already trust the brand, and earn it with a buyer who has never heard of it.

**Canonical opener — product redesign**:

> The redesign is the second life of a product that earned its first ten thousand users on raw utility and has stopped growing. The work is to give the next ten thousand a reason to stay past the trial.

The opener names what the work is *and* what it has to accomplish, in the same paragraph, before any deliverable is listed.

#### Sentence structure

Complete sentences. No clause-stacking that hides the verb. No bullet lists where prose would do. The proposal is a smart conversation with a peer — written prose, not a slide deck script.

Typical clause shapes:

- "The direction is X." — direct statement of creative call
- "The work is to Y." — direct statement of project objective
- "X happens before Y." — dependency or sequence stated plainly
- "You do A. The studio does B." — responsibility split stated without ambiguity

#### Density

- **Words per sentence:** 10–24 typical. Direction statements land at 8–14. Scope sentences run 15–24.
- **Paragraphs per section:** 1–3. Each proposal section (Frame · Creative Direction · Deliverables · Responsibility · Timeline · Investment) is short on purpose. Long proposals read as hedge.
- **List usage:** Permitted for deliverables and for the responsibility split. Forbidden inside Creative Direction — that paragraph runs as prose so the conviction stays in the cadence.

#### Perspective

- **The studio** — every reference to the producer side. "The studio delivers…" reads more peer than "we deliver." Acceptable to alternate with "we" where rhythm needs the shift.
- **You** — every reference to the client side. Direct address. Reads as conversation.
- **I** — used sparingly in the Creative Direction paragraph if Levi is naming a personal call. One sentence per proposal at most.

#### Allows

- **Direct statement of creative direction.** "The direction is a near-monochrome identity with a single chromatic accent reserved for points of decision, not for visual interest." The paragraph reads as a call already made, not a menu of options.
- **Named dependencies.** "The studio cannot start the visual identity until the brand strategy interview is complete." Surfaces the gate without softening it.
- **Plain deliverable language.** "A brand reference site at brand.shokunincrafthouse.com" — not "a digital brand activation experience."
- **A single sentence of warmth at the close** if the relationship earns it. Specific to the client and the work, never generic.

#### Forbids

- **Hedging on direction.** "We think it might be worth considering…" The proposal is the place authorship lives loudest. State the call.
- **Hollow enthusiasm.** "We love this project." "This is a great opportunity." Enthusiasm is implied by the quality of the work, not stated in the intro.
- **Restating the brief verbatim.** Reads as filler. If the brief is correct, name it once and proceed.
- **Conditional deliverables.** "We may include…" "Subject to scope…" Decide before the proposal goes out, or remove the deliverable.
- **Pitch-deck script tone.** The proposal is a document, not a slide narrative. No "Slide 1: Vision" headings, no presenter notes.

**Rhythm summary.** Precise. Peer conversation, not contract cover letter, not pitch deck. Complete sentences. Conviction in the cadence — if a sentence sounds like it is asking permission, rewrite it as a statement.

---

### 2.4 Register — Product Copy (Web App / App Store / In-Product)

**Audience.** End users. People who found the product and are deciding whether it is for them. No prior context on the studio.

**Job.** Make the product's value immediately legible in as few words as possible. Start with the point. Then explain.

**Posture.** Clear and direct. The designer is invisible — the product speaks. No authorial voice. No studio "we." If "we" appears, it means the user and the product together.

#### Opening pattern

The product opener is a single surface-spotting sentence: **"[Product] [verb] the [thing] you can't [verb]."** It stays on the surface of what the product reveals or enables — it does not pitch, it does not promise, it does not invite. It states what the product does to the user's world.

**Canonical opener** (Luma — calibration standard):

> Luma spots the patterns you can't see.

The opener is followed by a proof bridge that names the mechanism and the human outcome:

> The proof is in your entries. Luma visualizes your entries and extracts patterns and themes so you can lead a happier and healthier you.

The benefit is personal and emotional ("a happier and healthier you"), never a performance metric ("improved outcomes," "better decisions"). Write to the person's life, not to a dashboard.

#### Sentence structure

The shortest of the four registers. The longest sentence in product copy is still shorter than the shortest sentence in a case study. Start with the point. Every word after it earns its place by adding something the opener did not say.

Typical clause shapes:

- Surface-spotter ("Luma spots the patterns you can't see.")
- Proof bridge ("The proof is in [X]. [Product] [does Y] so [outcome to person].")
- Feature line — capability, not claim ("Mood tracking across weeks.")
- Aspirational close ("Luma is for people who journal looking for reason.")
- Microcopy as conversation ("Who's this line for?" not "Enter account holder information.")

#### Density

- **Words per sentence:** 4–14 typical. Openers at 6–10. Proof bridge at 8–14. Feature lines at 3–7. Aspirational close at 6–10.
- **Paragraphs per surface:** 1–2 for the landing surface (opener + proof). 1 for App Store first screen. 0 inside microcopy — fragments and questions only.
- **List usage:** Permitted and valuable in App Store and feature sections — readers scan. Each item is a capability, not a marketing claim. Include a data-trust line if relevant ("Your data stays on your device.").

#### Perspective

- **The product** — by name. "Luma spots…" not "We help you spot…"
- **You** — direct address to the user. "Your card collection, organized." "Your data stays on your device."
- **We** — used only when "we" means the user and the product together. Never the studio.
- **I** — never. Product copy carries no authorial voice.

#### Allows

- **Surface-spotting opener.** The product-name + verb + "the [thing] you can't [verb]" pattern is the standard. It earns attention by being concrete about what the product reveals.
- **Proof bridge.** "The proof is in your entries." anchors the claim to something the user already does.
- **Specific social proof over vague claims.** "Used by 12,000 daily journalers" beats "loved by users worldwide."
- **Conversational microcopy.** "Almost there." "Check that again." Short, human, never instructional.
- **Aspirational close on a person's life.** Ends on what the product moves the user toward.

#### Forbids

- **Studio "we."** The product is the actor. The studio does not appear.
- **Authorial voice.** No "I," no signature, no personality that belongs to the maker rather than the product.
- **Negative-frame audience definition.** "For people who never look back" implies journaling is something users fail at. Close on what the product moves the user toward, not on what users fail to do.
- **Adjective-stacked claims.** "Powerful, intuitive, beautifully designed." If three adjectives precede the noun, none of them are working.
- **Feature dumps without benefit logic.** Three features in a row with no connecting tissue.
- **Instructional microcopy where conversational would do.** "Enter account holder information." Replace with "Who's this line for?"

**Rhythm summary.** Tightest of the four registers. Opener and close are load-bearing. Everything in between earns both. If a sentence could appear in any product's copy, rewrite it until it could only appear in this one.

---

## 3. Anti-pattern library

Every entry below is a pattern that gets revised before delivery. The library is the basis for the zero-tolerance scan run by `sc-voice-checker`. Hard Rules are non-negotiable. Soft Disqualifiers are flags — stop and confirm the copy is better with them in. AI-Slop Patterns are the copy equivalents of stock-design failures. Wit Check governs the spare humor the voice allows.

Each entry: **Pattern name · Example (the failing line) · Why it fails · Corrected version.**

Net-new entries authored in Sprint 3 are marked **[NEW]**.

---

### 3.1 Hard Rules

| Pattern name | Example | Why it fails | Corrected version |
|---|---|---|---|
| **No em dashes** | "We rearchitected the flow — completion jumped from 23% to 61% — without sacrificing data collection." | Em dashes substitute for sentence structure. The voice is built on clean clauses and deliberate punctuation; em dashes hide the rhythm decision. Every em dash in deliverable copy is a rewrite. | "We rearchitected the flow. Completion jumped from 23% to 61%, and the data we collected held." |

> **Scope.** The em-dash ban applies to deliverable copy: case studies, studio marketing, proposals, product copy. It does not apply to meta-reference documents that quote failing examples, separate header labels, or describe scope (this document, decisions log, sprint CONTEXTs). The checker scores deliverable copy against the rule and does not flag em dashes inside quoted source material the studio did not author.
| **Passive voice on decisions** | "The design was led by the studio. The direction was chosen after research." | Removes the author from the work. Reads as committee, not authorship. The studio's voice is first-person active on every creative call. | "We led the design. We chose the direction after research." |
| **Throat-clearing opener** | "At The Shokunin Crafthouse, we believe great design is more than just aesthetics." | Could open any studio's copy. Delivers no insight, no position, no benefit. The first sentence has to earn the second. | "Design that sticks beyond the craft." |
| **Hedging on creative direction** | "We think it might be worth considering a near-monochrome palette." | Hedge dilutes the call. In proposals especially, direction is stated, not suggested. Conviction is not arrogance. | "The direction is a near-monochrome palette with a single chromatic accent." |
| **Awards-as-positioning** | "While this isn't about awards, the work has been recognized at multiple competitions." | Even dismissing awards raises them. They do not exist in studio copy at all. | (cut entirely — replace with an outcome the work produced for a client) |

---

### 3.2 Soft Disqualifiers

| Pattern name | Example | Why it fails | Corrected version |
|---|---|---|---|
| **Empty intensifiers** | "A robust, cutting-edge, world-class design system." | Adjectives function as filler when they substitute for specific claims. They flag the absence of a concrete fact. | "A token-driven design system that survives a framework change." **[NEW]** |
| **Corporate filler verbs** | "We leverage design thinking to drive value and move the needle." | "Leverage," "drive value," "move the needle" are agency-speak. They mean nothing the reader can act on. | "We use research to find the decisions worth making, and we make them." **[NEW]** |
| **Vague benefit language** | "Our work creates impact and elevates the brand." | "Impact," "elevates," "creates value" lack a what and a how. Generic outcomes belong to anyone. | "Our work brought Formstack onboarding completion from 23% to 61%." **[NEW]** |
| **Awards-forward studio framing** | "An award-winning studio crafting beautiful brands." | Frames the studio as recognition-first rather than outcomes-first. The studio is business-results-forward; craft is the vehicle. | "A studio that builds work that sticks beyond the launch high." **[NEW]** |
| **Hollow enthusiasm in proposals** | "We love this project and are thrilled to partner with you." | Enthusiasm is implied by the quality of the work. Stating it reads as performance. | "The project's success condition is clear, and the work the studio is best at lines up against it." **[NEW]** |
| **Scalability without context** | "A scalable, holistic ecosystem solution." | "Scalable," "holistic," "ecosystem" carry no concrete technical or operational meaning when used as defaults. | "A token architecture that survives one redesign and three engineering migrations." **[NEW]** |

---

### 3.3 AI-Slop Patterns

| Pattern name | Example | Why it fails | Corrected version |
|---|---|---|---|
| **Feature dump without benefit logic** | "Mood tracking. Pattern detection. Decision timeline. Insight visualization." | Four features in a row with no human outcome. Reads as spec sheet, not product copy. | "Mood tracking across weeks. Recurring theme detection. A decision timeline that shows you why you chose what you chose." **[NEW]** |
| **Adjective stacking** | "A powerful, intuitive, beautifully designed journaling experience." | Three or more adjectives before a noun signals that none are doing real work. One earned adjective beats three generic ones. | "A journaling app that reads your entries back to you." **[NEW]** |
| **Parallel list fatigue** | "We design with intention. We build with precision. We ship with conviction." | Three clauses on the same grammatical pattern in a row — the parallelism announces the format, not the content. Break one to prove the list was written. | "We design with intention. We build with precision. The work ships when it cannot be improved without changing its nature." **[NEW]** |
| **Inspirational closer** | "Together, we can build something extraordinary." | Closes essays written by no one for no one. Says nothing the reader can act on. | "The next step is a 30-minute call to confirm the scope and the start date." **[NEW]** |
| **Generic empathy opener** | "We know how hard it can be to find a design partner that actually gets your business." | Empathy lands only when it is specific. Generic empathy signals that no one thought about the reader. | "Most studios will quote you a brand identity in two weeks. The studios that can actually deliver one take six. This proposal is the second kind." **[NEW]** |
| **Forced wit** | "And yes, we think that's pretty cool." | Wit that explains itself has already failed. If the joke needs a wink, the joke is gone. | (cut entirely — let the line that earned the smile stand alone) |

---

### 3.4 Wit Check

The dry humor the voice allows passes one test: it is specific and accurate. It could only apply to this situation, this product, this data point.

| Pattern name | Example | Why it passes / fails | Note |
|---|---|---|---|
| **Pass — anchored to data** | "46% of people Binge Watched at least 3 shows this year. That's up 5,118% from last year. We blame Better Call Saul for the surge." | Specific. Accurate. Earns the smile by being true and only applicable to a binge-watching data story from one particular year. | Wit lands. |
| **Pass — accurate of the situation** | "a little something extra from your boring service provider" | "Boring service provider" is what DIRECTV actually is to most customers. Accurate before it is funny. | Wit lands. |
| **Fail — generic** | "Because great design shouldn't be boring." | Could appear in any studio's copy. The wit is reached for, not earned. | Cut, or replace with a specific line from this project: "Because the last redesign of this app shipped in 2014, and it shows." **[NEW corrected version]** |
| **Fail — filler dressed as personality** | "We think you'll love what we've built." | Not wit. Hollow enthusiasm in a personality costume. | Cut, or replace with the outcome: "Daily active users grew 38% in the eight weeks after launch." **[NEW corrected version]** |

The test before any line that attempts humor: could this appear in someone else's copy? If yes, cut it or make it specific enough that the answer becomes no.

---

### 3.5 Net-new anti-patterns (discovered during register expansion)

| Pattern name | Example | Why it fails | Corrected version |
|---|---|---|---|
| **Negative-audience framing in product copy** | "Luma is for people who never look back." | Defines the audience by what they fail to do (journaling). Implies the product is for users who feel guilty about a habit. Closes on a negative, not on movement. | "Luma is for people who journal looking for reason." **[NEW]** |
| **Reader-framing opener (studio register)** | "Your product only gets one launch moment. After that, it survives on…" | Soft variant of throat-clearing. Sets up context before stating the studio's position. Limits the audience to pre-launch teams. | "Design that sticks beyond the craft." **[NEW]** |
| **Solution-detail in case-study Overview** | "We partnered with Formstack and reduced the onboarding flow from 14 steps to 6, restructuring the data-collection model and rewriting all field labels." | Steps and structural changes describe the *solution*. The Overview holds outcome metrics only; the solution unravels in the sections that follow. | "We partnered with Formstack's product team to redesign their core onboarding flow. Our work brought completion from 23% to 61%." **[NEW]** |
| **Pitch-deck script tone in a proposal** | "Slide 1: The Vision. We are excited to present our approach to your brand identity refresh." | Reads as presenter notes, not a document. Performs rather than commits. | "This project is a brand identity refresh for a Series B fintech preparing for its first consumer launch. The work needs to read credible to existing institutional partners and approachable to a consumer who has never seen the brand." **[NEW]** |

---

## 4. Canonical copy examples

Twelve examples. Three per register. Real copy only — no placeholders, no lorem, no `[client]` fields. These are the reference standard for `sc-voice-checker` calibration and for any future copy decision.

---

### 4.1 Case Study / Project Storytelling

**Example 1.1 — Case study Overview (canonical · Formstack)**

> We partnered with Formstack's product team to redesign their core onboarding flow. The goal was straightforward: understand why completion rates had stalled at 23%, then rearchitect the flow to remove friction without sacrificing data collection. Our work brought completion to 61%, unlocking new user value and downstream revenue impact. Let's walk through how we diagnosed the problem and reshaped the experience.

**Example 1.2 — Opportunity statement**

> The completion rate had plateaued at 23%, so we set out to understand why people were dropping off and what structural changes could unlock the rest.

**Example 1.3 — Pull quote with dry wit anchored to data**

> 46% of subscribers Binge Watched at least 3 shows this year. That's up 5,118% from last year. We blame Better Call Saul for the surge.

---

### 4.2 Studio / Marketing Copy

**Example 2.1 — Studio homepage hero (net-new canonical)**

> Design that sticks beyond the craft.
>
> We build websites, web apps, and iOS products that hold their value past the launch high. Beautiful is the floor. What gets you here is craft. What keeps your customers is the work underneath it — built into how people decide, remember, and come back.

**Example 2.2 — Studio About page opener (net-new canonical)**

> The studio is one designer and a specific point of view.
>
> Levi Bahn directs every project: type, color, motion, interaction, copy. The work has one author from first wireframe to final deploy. The Shokunin standard — the craftsman who works because the work demands it, not because anyone asked — is the operating rule, not a brand story.

**Example 2.3 — Studio services section close (net-new canonical)**

> You hire the studio for the sticky. For the value. For the relationship you want to have with your customers a year after the launch, when the rest of the launch noise has gone quiet.

---

### 4.3 Client Proposals

**Example 3.1 — Proposal Frame paragraph (net-new canonical)**

> This project is a brand identity and marketing site for a precision-instrument company shipping its first consumer product. The work needs to hold credibility with the engineers who already trust the brand, and earn it with a buyer who has never heard of it. The studio is engaged through Sprint 4 of the company's H2 roadmap, with the brand site live before the product launch window opens.

**Example 3.2 — Creative Direction paragraph (net-new canonical)**

> The direction is a near-monochrome identity grounded in warm gray and ink, with a single chromatic accent reserved for points of decision — pricing, the call to buy, the moment of commitment. The mark carries one deliberate asymmetry that reads as intent rather than ornament. The type system is Neue Haas Grotesk paired with a single mono face used for spec callouts; no display face, no secondary serif. The position is precision-instrument, not luxury-lifestyle.

**Example 3.3 — Deliverables + Responsibility split (net-new canonical)**

> The studio delivers: brand identity (mark, type system, color, motion principles), a four-section marketing site, an asset kit (SVG, PNG at 1x/2x/3x, WOFF2), and a decisions log capturing every architectural call. You deliver: brand strategy interview, three rounds of approval (mark, identity system, site assembly), and final sign-off on copy. The work moves on a six-week timeline. Approval gates that slip more than five business days push the launch window correspondingly.

---

### 4.4 Product Copy (Web App / App Store / In-Product)

**Example 4.1 — App Store first screen (canonical · Luma)**

> Luma spots the patterns you can't see.
>
> The proof is in your entries. Luma visualizes your entries and extracts patterns and themes so you can lead a happier and healthier you.
>
> — Mood tracking across weeks
> — Recurring theme detection
> — Decision timeline
> — Visual pattern summary
> — Your data stays on your device
>
> Luma is for people who journal looking for reason.

**Example 4.2 — Web app landing surface (net-new, extends Luma pattern)**

> CardUp finds the cards you forgot you owned.
>
> The proof is in your binder. CardUp scans, organizes, and values every card you own so you can see your collection the way a collector does, not the way a search bar does.
>
> CardUp is for collectors who want their collection to know itself.

**Example 4.3 — In-product microcopy set (net-new)**

> *Account setup, first field:* Who's this line for?
> *Loading state, near complete:* Almost there.
> *Form validation error:* Check that again — one of those isn't a phone number yet.
> *Empty state, first entry:* Nothing here yet. Make the first one count.
> *Success confirmation:* Saved. Back to the binder.

---

## 5. Loading order for `sc-voice-checker`

The checker skill loads this document in full before any score. Section-level expectations:

- **§1** — the seven principles map directly onto the seven rubric blocks.
- **§2** — the four registers determine which posture / density / perspective bands the candidate copy is graded against.
- **§3** — the anti-pattern library powers the zero-tolerance scan.
- **§4** — the twelve canonical examples are the calibration set. A score of 5 on any principle means the line is doing what the canonical example does. A score of 1 means the line matches one of the failing examples in §3.

Changes to this document trigger a recalibration of the checker's known-good and known-bad fixtures.
