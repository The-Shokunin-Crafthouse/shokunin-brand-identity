---
name: sc-voice-checker
description: Voice audit skill for The Shokunin Crafthouse. Use this skill whenever Levi asks for a voice check on a piece of copy — phrases like "check this against the voice", "is this on-voice", "voice check", "score this", "does this sound like the studio", "audit this copy", "run the voice checker", or any request that pastes copy and asks for a voice score. Scores the candidate copy against the seven Shokunin design principles applied to writing, runs a zero-tolerance anti-pattern scan, and returns a line-level scorecard with quoted evidence. Do not trigger for: general questions about the voice itself (use sc-brand-voice), or full rewrites (hand off to copy-surgeon). This skill audits — it does not rewrite.
---

# SC-Voice-Checker: Voice Audit for The Shokunin Crafthouse

## Purpose

This skill answers one question: **is this copy on-voice for The Shokunin Crafthouse?**

It scores any candidate copy — a headline, a paragraph, an App Store description, a proposal section — against the seven Shokunin design principles as applied to written voice. It runs a zero-tolerance scan for documented anti-patterns. It returns a line-level scorecard with quoted evidence, an overall verdict, and one to three priority rewrite targets.

The skill audits. It does not rewrite. Full rewrites hand off to `copy-surgeon`.

The output must be actionable at the line level. "This copy is too passive" is a failure state for this skill. The output names the exact line, names the principle it violates, and gives a directional fix.

---

## Pre-Audit Phase (mandatory)

Before scoring any line, run this sequence in order. Do not skip steps.

### 1. Load the voice document

Load `_config/voice/brand-voice.md` in full. Confirm the document contains:

- §1 — seven core voice principles
- §2 — four register specs (each with opening pattern, sentence structure, density, perspective, allows, forbids)
- §3 — anti-pattern library (Hard Rules, Soft Disqualifiers, AI-Slop Patterns, Wit Check, net-new entries)
- §4 — twelve canonical examples (three per register)

If the file is missing or any of the four sections is absent, stop and report:

> Cannot audit — `_config/voice/brand-voice.md` is missing or incomplete (`§<n>` not found). Voice scoring requires the loaded document.

Do not score from cached memory. Do not improvise the rubric.

### 2. Identify the register

Reduce the candidate copy to one of the four registers from §2:

- **Case Study / Project Storytelling** — partner narrative, outcome metrics, decision-walkthroughs
- **Studio / Marketing Copy** — studio site, positioning, services pages, About
- **Client Proposal** — addressed to one named client, scope and creative direction
- **Product Copy** — end-user-facing app, App Store listing, in-product microcopy

Cues for identification:

- "We partnered with…" / numbered outcomes / past-tense narrative → Case Study
- "Design that…" / studio claims / present-tense positioning → Studio
- "This project is…" / "The direction is…" / deliverables and gates → Proposal
- Surface-spotting opener / product name as subject / no studio voice → Product

If the register is genuinely indeterminate **and** the user has not declared one, stop and ask:

> Which register is this copy for: case study, studio/marketing, client proposal, or product copy?

Do not score until the register is set. Scoring against the wrong register produces noise.

### 3. Identify the surface

Within the register, name the specific surface — Overview paragraph, Opportunity statement, homepage hero, About opener, Frame paragraph, App Store first screen, in-product microcopy. The surface determines which canonical example in §4 is the comparison standard.

### 4. Confirm the audit scope

The default audit covers every sentence of the pasted copy. If the user has named a specific section ("audit just the opener"), constrain to that range. If the copy is long (>500 words), audit each section in sequence and report per-section.

Only after these four steps proceed to scoring.

---

## Seven-Principle Scoring Rubric

Score each of the seven principles independently on a 1–5 scale. Each block below specifies: the principle, the voice translation, the 1–5 anchors, and the pass / fail signals from the loaded document.

Every score must cite a quoted line from the candidate copy as evidence. If no line in the copy speaks to a principle (rare), default to 3 and state "no signal."

---

### Principle 1 — Craft is the baseline, not the ceiling

**Voice translation.** Grammar, punctuation, spelling, antecedent clarity, and tense consistency are the floor. Style sits on a clean draft.

**Anchors.**
- **5** — Every sentence parses cleanly. Punctuation is deliberate (no em dashes, no comma splices, no orphan clauses). Word choice is precise enough that no sentence could be misread.
- **4** — Clean draft with one minor craft slip (a soft repeat, a slightly long compound).
- **3** — Two or three craft slips but the copy still reads.
- **2** — A craft failure that changes meaning (ambiguous antecedent, dropped subject, tense break inside a paragraph).
- **1** — Multiple craft failures. Misspellings, broken sentences, or em dashes used as connective tissue.

**Pass signal** (from §4.1.1):
> "The goal was straightforward: understand why completion rates had stalled at 23%, then rearchitect the flow to remove friction without sacrificing data collection."
The colon, the comma, the parallel infinitives are all doing work. No em dashes. Tense holds.

**Fail signal** (from §3.1, em-dash rule):
> "We rearchitected the flow — completion jumped from 23% to 61% — without sacrificing data collection."
Em dashes substitute for sentence structure. Craft floor not met.

---

### Principle 2 — One clear point of view

**Voice translation.** One voice, one register, one argument per piece. No tone-blending across paragraphs. Perspective (I / We / studio-absent) does not switch mid-paragraph without a structural reason.

**Anchors.**
- **5** — The register declared at the top holds to the close. Perspective is consistent. The argument the copy is making is identifiable in one sentence.
- **4** — One small drift (a single sentence that reads as a different register) inside an otherwise coherent piece.
- **3** — Two registers blended without intent; the piece is still readable but split.
- **2** — Perspective switches mid-paragraph (we → I → the studio) without structural cause.
- **1** — No identifiable point of view. Reads as multiple writers.

**Pass signal** (from §4.2.1):
> "Beautiful is the floor. What gets you here is craft. What keeps your customers is the work underneath it."
Three sentences, one position, one voice, parallel structure that compounds rather than competes.

**Fail signal** (from §2.1 Perspective rules):
> "We partnered with Formstack… I led the research interviews… The studio then rearchitected the flow."
"We → I → the studio" inside one paragraph, on client work, with no structural reason. Authorship anxiety.

---

### Principle 3 — Function first, then beauty — together

**Voice translation.** Clarity and craft are inseparable. A sentence can be precise *and* well-made. A beautiful sentence that is unclear is broken; a clear sentence that is ugly is half-finished.

**Anchors.**
- **5** — Every sentence is clear on first read *and* well-cadenced. Reading aloud reveals deliberate rhythm.
- **4** — Mostly clear and well-made. One sentence sacrifices clarity for rhythm or rhythm for clarity.
- **3** — Clear but flat, or beautiful but requiring a reread. Half-finished.
- **2** — Multiple sentences require a reread, or multiple sentences read mechanically clean but rhythmically dead.
- **1** — Confusing on first read or so flat the reader stops.

**Pass signal** (from §4.4.1):
> "The proof is in your entries. Luma visualizes your entries and extracts patterns and themes so you can lead a happier and healthier you."
Clear on first read. Concrete (entries, patterns, themes). Ends on a human outcome. Cadence is deliberate.

**Fail signal** (from §3.2, vague benefit language):
> "Our work creates impact and elevates the brand."
Sounds polished. Means nothing the reader can act on. Beauty without function.

---

### Principle 4 — Restraint as a creative act

**Voice translation.** The almost-good-enough sentence gets cut. Fewer words with more weight beats more words with less. Empty space inside a paragraph is design, not waste.

**Anchors.**
- **5** — Every sentence earns its place. Removing any word changes the meaning.
- **4** — One sentence reads as padding or one adjective could fall away.
- **3** — A handful of redundant sentences or adjective stacks. The piece would be sharper at 80% the length.
- **2** — Half the copy could be cut without losing meaning.
- **1** — Filler dominates. The actual claim is buried in three rewrites of itself.

**Pass signal** (from §4.2.1):
> "Design that sticks beyond the craft."
Five words. Position staked. No filler, no setup, no qualifier.

**Fail signal** (from §3.3, adjective stacking):
> "A powerful, intuitive, beautifully designed journaling experience."
Three adjectives signal that none are working. The actual claim ("does journaling well") is hiding behind the stack.

---

### Principle 5 — Products, not pages

**Voice translation.** The words read as part of a product surface, not a marketing document layered on top. Marketing copy and interface copy share a register. Microcopy is conversational; section copy is direct.

**Anchors.**
- **5** — Section copy and microcopy read as written by the same hand. No mode-shift between selling and using.
- **4** — Mostly consistent. One transition where marketing voice and product voice misalign.
- **3** — Clear split between "selling" tone and "using" tone. The copy works but reads as two documents.
- **2** — Marketing copy reads as brochure. Microcopy reads as system error message.
- **1** — Reads as a marketing department wrote the page and an engineer wrote the form labels.

**Pass signal** (from §4.4.3):
> "Who's this line for?" (account-setup microcopy)
Conversational. Reads as if a person asks. Matches the tone of the marketing copy that sits two screens away.

**Fail signal** (from §2.4 Forbids · instructional microcopy):
> "Enter account holder information."
Reads as system prompt. Voice does not match anything else in the product.

---

### Principle 6 — Authorship over process

**Voice translation.** The voice belongs to a person — Levi, the studio, the project lead — never to a committee. Direction is stated, not suggested. Decisions are named, not described.

**Anchors.**
- **5** — Every creative call is stated as a call. No hedging, no committee voice. A specific author is identifiable.
- **4** — Mostly authoritative. One hedge ("we think it might be worth…") or one passive ("the direction was chosen…").
- **3** — Mix of stated and suggested. The author is present but flickering.
- **2** — Most decisions are suggested. The author is on the bench.
- **1** — Pure committee voice. "It was decided," "consensus emerged," "consideration was given."

**Pass signal** (from §4.3.2):
> "The direction is a near-monochrome identity grounded in warm gray and ink, with a single chromatic accent reserved for points of decision."
"The direction is X." Call already made. Authorship in the cadence.

**Fail signal** (from §3.1, hedging rule):
> "We think it might be worth considering a near-monochrome palette."
Hedge dilutes the call. Authorship absent.

---

### Principle 7 — Originality over safety

**Voice translation.** Stock phrases, filler transitions, and generic benefit claims are disqualified before the first draft. Every piece contains at least one decision a careful reader would notice as deliberate.

**Anchors.**
- **5** — At least one line that could only belong to this studio, this product, or this project. The piece carries a fingerprint.
- **4** — Mostly distinct. One stock phrase or one default transition slipped through.
- **3** — Competent but interchangeable. Could appear in two or three peer studios' copy.
- **2** — Multiple stock phrases. The voice is barely present.
- **1** — Every line could open any studio's copy.

**Pass signal** (from §4.1.3):
> "46% of subscribers Binge Watched at least 3 shows this year. That's up 5,118% from last year. We blame Better Call Saul for the surge."
Specific to a specific year, specific data, specific show. Could not appear in anyone else's copy.

**Fail signal** (from §3.1, throat-clearing rule):
> "At The Shokunin Crafthouse, we believe great design is more than just aesthetics."
Could open any studio's copy without modification. No fingerprint.

---

## Anti-Pattern Scan Procedure

Run after the seven-principle pass. Zero tolerance — every hit reported. Do not weigh severity; every documented anti-pattern is a flag.

### Procedure

1. **Hard Rules pass.** Scan the candidate copy against §3.1 (Hard Rules). Flag every em dash, every passive voice on a decision, every throat-clearing opener, every hedge on creative direction, every awards mention.
2. **Soft Disqualifiers pass.** Scan against §3.2. Flag every empty intensifier, corporate filler verb, vague benefit phrase, awards-forward framing, hollow enthusiasm, scalability-without-context.
3. **AI-Slop pass.** Scan against §3.3. Flag every feature dump without benefit, adjective stack, parallel-list fatigue, inspirational closer, generic empathy opener, forced wit.
4. **Wit Check pass.** Scan against §3.4. For every line attempting humor, apply the specificity test. Flag any humor line that could appear in another studio's copy.
5. **Net-new patterns pass.** Scan against §3.5. Flag negative-audience framing, reader-framing openers in studio register, solution-detail in case-study Overview, pitch-deck script tone.

### Reporting

Every flagged hit gets four fields:

- **Category** — Hard Rule / Soft Disqualifier / AI-Slop / Wit Check / Net-New
- **Pattern name** — exact name from §3 (e.g. "No em dashes," "Adjective stacking")
- **Quoted line** — the exact line from the candidate copy
- **Directional fix** — one sentence pointing the rewrite, never the rewrite itself

If a single line trips two patterns, report both. Do not collapse.

---

## Output Format (every audit)

Use this exact structure. Keep each field tight — Levi reads quickly.

```
Register: <Case Study | Studio | Proposal | Product>
Surface:  <named surface — e.g. Overview paragraph, App Store first screen>

Scorecard
  P1 Craft baseline             <1–5>  · "<quoted line>" · <one-sentence rationale>
  P2 One point of view          <1–5>  · "<quoted line>" · <one-sentence rationale>
  P3 Function + beauty          <1–5>  · "<quoted line>" · <one-sentence rationale>
  P4 Restraint                  <1–5>  · "<quoted line>" · <one-sentence rationale>
  P5 Products, not pages        <1–5>  · "<quoted line>" · <one-sentence rationale>
  P6 Authorship                 <1–5>  · "<quoted line>" · <one-sentence rationale>
  P7 Originality                <1–5>  · "<quoted line>" · <one-sentence rationale>

Average: <X.X>
Verdict: <On-voice 4.0–5.0 | Needs work 2.5–3.9 | Off-voice 1.0–2.4>

Anti-patterns:
  · <Category> · <Pattern name> · "<quoted line>" → <directional fix>
  · <Category> · <Pattern name> · "<quoted line>" → <directional fix>
  (or: "none" if clean)

Priority rewrites (1–3):
  1. "<failing line>" — violates P<n>. <directional fix>.
  2. "<failing line>" — violates P<n>. <directional fix>.
  3. "<failing line>" — violates P<n>. <directional fix>.

Hand-off: <"copy-surgeon" if priority rewrites > 0, otherwise "none">
```

Do not include a full rewrite. Do not score the same line twice for the same principle. Do not summarize the seven principles or the anti-pattern library — answer the one audit asked.

---

## Anti-Patterns (do not do)

- Do not score from memory. Always load `_config/voice/brand-voice.md` first.
- Do not score against the wrong register. If the register is indeterminate and undeclared, ask.
- Do not soften a flag because the rest of the copy is strong. Anti-patterns are zero-tolerance.
- Do not write the rewrite. Direction only — full rewrites go to `copy-surgeon`.
- Do not collapse the anti-pattern report. Every hit gets its own line.
- Do not skip the quoted line. Every score and every flag references a specific quoted line from the candidate copy.
- Do not invent new principles or new anti-patterns mid-audit. Those changes happen in the voice document and get logged via `sc-adr`.

---

## Calibration Examples

Two examples below. The first is on-voice — passes all seven principles, trips no anti-patterns. The second is off-voice — fails on three or more principles and trips three or more anti-patterns by name. Both show the full output the skill produces.

---

### Calibration 1 — Known-good (passes)

**Candidate copy** (Case Study Overview · Formstack canonical):

> We partnered with Formstack's product team to redesign their core onboarding flow. The goal was straightforward: understand why completion rates had stalled at 23%, then rearchitect the flow to remove friction without sacrificing data collection. Our work brought completion to 61%, unlocking new user value and downstream revenue impact. Let's walk through how we diagnosed the problem and reshaped the experience.

**Output:**

```
Register: Case Study
Surface:  Overview paragraph

Scorecard
  P1 Craft baseline             5  · "The goal was straightforward: understand why completion rates had stalled at 23%, then rearchitect the flow to remove friction without sacrificing data collection." · Clean parsing. Colon and parallel infinitives carry the load. No em dashes.
  P2 One point of view          5  · "We partnered with Formstack's product team to redesign their core onboarding flow." · "We" from the first word and held through the close. Single argument: diagnosis to redesign.
  P3 Function + beauty          5  · "Our work brought completion to 61%, unlocking new user value and downstream revenue impact." · Outcome stated as a measurable delta. Cadence carries the close.
  P4 Restraint                  5  · "Let's walk through how we diagnosed the problem and reshaped the experience." · Bridge sentence does one job in twelve words. No filler.
  P5 Products, not pages        4  · "rearchitect the flow to remove friction without sacrificing data collection" · Speaks the user's problem in the user's terms. Slightly more case-study-formal than microcopy would be, but consistent within register.
  P6 Authorship                 5  · "We partnered with Formstack's product team to redesign their core onboarding flow." · Active voice, named actor, decision stated.
  P7 Originality                5  · "stalled at 23%" · "Stalled" carries the specific failure mode. The Overview reads as this project, not a template.

Average: 4.9
Verdict: On-voice

Anti-patterns:
  · none

Priority rewrites: none.
Hand-off: none
```

---

### Calibration 2 — Known-bad (fails on principle and anti-pattern grounds)

**Candidate copy** (synthetic Studio / Marketing surface — trips Hard Rules + Soft Disqualifiers + AI-Slop):

> At The Shokunin Crafthouse, we believe great design is more than just aesthetics — it's about creating powerful, intuitive, beautifully designed experiences that leverage cutting-edge thinking to drive value. We're thrilled to partner with brands that share our passion. Award-winning craft is our standard. Together, we can build something extraordinary.

**Output:**

```
Register: Studio / Marketing
Surface:  Homepage hero (candidate)

Scorecard
  P1 Craft baseline             2  · "we believe great design is more than just aesthetics — it's about creating powerful, intuitive, beautifully designed experiences" · Em dash inside sentence one. Craft floor not met.
  P2 One point of view          2  · "we believe great design… We're thrilled to partner… Award-winning craft is our standard." · Three different argument frames in four sentences. No single position staked.
  P3 Function + beauty          2  · "leverage cutting-edge thinking to drive value" · Reads polished. Says nothing the reader can act on.
  P4 Restraint                  1  · "powerful, intuitive, beautifully designed experiences" · Three adjectives stacked. Filler dominates. Could be cut to one line without loss.
  P5 Products, not pages        2  · "Together, we can build something extraordinary." · Reads as brochure close, not a product surface. Disconnected from any user experience the studio actually ships.
  P6 Authorship                 2  · "we believe…" · Belief statement substitutes for direction. No call is made.
  P7 Originality                1  · "At The Shokunin Crafthouse, we believe great design is more than just aesthetics" · Could open any studio's copy. Zero fingerprint.

Average: 1.7
Verdict: Off-voice

Anti-patterns:
  · Hard Rule · No em dashes · "great design is more than just aesthetics — it's about creating…" → Replace em dash with a period; restructure the clause as two sentences.
  · Hard Rule · Throat-clearing opener · "At The Shokunin Crafthouse, we believe great design is more than just aesthetics." → Open on a stated position; cut belief framing.
  · Soft Disqualifier · Empty intensifiers · "powerful, intuitive, beautifully designed experiences" → Replace with one earned, specific claim about what the experience does.
  · Soft Disqualifier · Corporate filler verbs · "leverage cutting-edge thinking to drive value" → Name the thinking and name the value delivered.
  · Soft Disqualifier · Vague benefit language · "drive value" → Replace with a specific outcome a past client measured.
  · Soft Disqualifier · Awards-forward studio framing · "Award-winning craft is our standard." → Cut entirely; awards do not appear in studio copy.
  · Soft Disqualifier · Hollow enthusiasm in proposals · "We're thrilled to partner with brands that share our passion." → Cut; enthusiasm is implied by the work.
  · AI-Slop · Adjective stacking · "powerful, intuitive, beautifully designed experiences" → One specific earned adjective beats three generic ones.
  · AI-Slop · Inspirational closer · "Together, we can build something extraordinary." → Replace with a concrete next step or a stated outcome.

Priority rewrites (1–3):
  1. "At The Shokunin Crafthouse, we believe great design is more than just aesthetics" — violates P7 (Originality) and trips Hard Rule (throat-clearing opener). Open on the studio's position. Reference the canonical line in §4.2.1.
  2. "powerful, intuitive, beautifully designed experiences that leverage cutting-edge thinking to drive value" — violates P3 (Function + beauty) and P4 (Restraint), trips AI-Slop (adjective stacking) and Soft Disqualifier (corporate filler). Cut to one earned, specific claim.
  3. "Together, we can build something extraordinary." — violates P5 (Products, not pages) and P7 (Originality), trips AI-Slop (inspirational closer). Replace with a concrete next step (a stated outcome or a 30-minute call CTA).

Hand-off: copy-surgeon
```

---

## Edge Cases

**Copy is in the wrong register for its surface.** If the candidate copy is marketing-register prose on a microcopy surface (or vice versa), score against the surface's register and flag the mismatch under P5 (Products, not pages) and the appropriate anti-pattern (e.g. "Pitch-deck script tone").

**Copy is intentionally minimal (a single line).** Single-line copy can still be scored across all seven principles — every line carries craft, restraint, and originality signals. Use 3 ("no signal") for principles the single line does not address, and weight P4 (Restraint), P6 (Authorship), and P7 (Originality) as the load-bearing scores.

**Copy contains an intentional em dash inside a quoted source.** If the em dash appears inside a quotation from outside the studio (a client quote, a research participant transcript), do not flag it. Flag only em dashes the studio authored. Note the carve-out in the rationale field.

**Candidate copy is a meta-reference document, not a deliverable surface.** The em-dash Hard Rule is scoped to deliverable copy: case studies, studio marketing, proposals, product copy (per §3.1 Scope note in `brand-voice.md`). If the user pastes a section of an internal reference document (an ADR, a sprint CONTEXT, a skill SKILL.md) and asks for a voice audit, decline the em-dash flag in the report and note: "Em-dash Hard Rule does not apply — meta-reference document, not deliverable copy." Score the seven principles normally.

**Copy is from an existing canonical example.** If the candidate copy matches one of the twelve canonical examples in §4 verbatim, score it as on-voice (4.8–5.0 across the board) and note "matches canonical §<n>.<n>" in the verdict. Do not re-derive scores from scratch.

**User asks the skill to rewrite.** The skill does not rewrite. Reply: "This skill audits voice and returns directional fixes. For a full rewrite, hand the priority targets to `copy-surgeon`."

**Voice document has changed since last audit.** If `_config/voice/brand-voice.md` shows a different last-updated date than the previous audit run referenced, reload the document in full before scoring. Do not carry over cached anchors.
