# Decisions Log

Append-only log of non-trivial decisions made on this project. Entries are not edited in place — if a decision is reversed, a new entry records the reversal and references the original.

## What belongs here

- Decisions with irreversible or cross-cutting consequences
- Trade-offs that took meaningful discussion
- Scope changes, gate bypasses, and deferred items
- Stage closures (Gate 1, Gate 2, Gate 3, Gate 4, Close)
- Retrospective entries at day 14 post-launch

## What does not belong here

- Transient implementation notes → stage `build-notes.md`
- Bugs → `stages/04-review/output/punch-list.md`
- Design exploration → `stages/02-design/claude-design/` or `./figma/`

## Entry format

```
## YYYY-MM-DD — [short title]
**Stage:** [01-brief | 02-design | 03-build | 04-review | 05-launch]
**Type:** [Stack / tech choice | UX / design tradeoff | Architecture | Product / scope call]
**Status:** [proposed | accepted | superseded by <date-title> | reversed]

**Context.** What situation forced the decision. Include relevant constraints — timeline, prior decisions, what would happen if no choice were made.
**Decision.** What was chosen. One sentence, starting with a verb.
**Rationale.** Why — the reasoning behind the choice.
**Alternatives considered.** What else was on the table and why it was ruled out. At least one alternative; if only one option existed, say so.
**Consequences.** Easier: what this simplifies or de-risks. Harder: what this constrains or makes more expensive to change.
```

---

## Entries

<!-- Append new entries below. Newest at the bottom. Do not edit historical entries. -->

## 2026-05-26 — Cascadia Mono selected as studio mono
**Stage:** 02-design
**Type:** UX / design tradeoff
**Status:** accepted

**Context.** The Stage 02 brief specifies a Sprint 2 mono-typeface evaluation across Geist Mono, JetBrains Mono, and IBM Plex Mono. Cascadia Mono is not on the candidate list. However, the Direction 01 specimen HTML produced in the brand exploration locked Cascadia Mono into its code and chrome surfaces, and the design-system preview built on top of Direction 01 inherited that choice. The preview is now used end-to-end (eyebrows, buttons, badges, status, motion specs, timestamps), and Cascadia Mono was written to Figma as `font/family/mono` in the Primitives collection alongside the rest of the token set. Reversing it after Figma write requires re-issuing every mono-bearing component spec.

**Decision.** Lock Cascadia Mono as the studio mono typeface. Sprint 2 mono evaluation is closed without running.

**Rationale.** Direction 01 reached typographic resolution earlier than the sprint cadence anticipated, and the visual language of the brand identity now depends on Cascadia Mono's specific personality — geometric without feeling system-default (Geist), characterful without IDE associations (JetBrains), and grotesk-neutral without corporate-tech weight (IBM Plex). The studio's "solve type first, always" principle (studio-memory §2) treats late typeface changes as redesigns; with the preview, token system, and Figma variables already converged on Cascadia, that cost is no longer acceptable.

**Alternatives considered.**
- **Geist Mono** — Too geometric. Reads as system-default sans-serif rendered monospaced; lacks the slight personality the chrome surfaces want.
- **JetBrains Mono** — Heavy code-IDE associations. The brand identity register is a precision creative studio, not a developer tool company; the font carries the wrong room.
- **IBM Plex Mono** — Corporate-tech associations. Plex's grotesk geometry is excellent technically but conflicts with the crafthouse / artisan register; reads as enterprise-software.

**Consequences.**
- *Easier.* Typographic system locked across every surface (chrome, code, buttons, badges, eyebrows, motion specs). Cascadia Mono is freely licensed and CDN-served via Google Fonts at weights 300/400/500/600 with no licensing path needed. Preview and Figma primitives already converged — no rework. Sprint 2 capacity freed for other Gate 2 work.
- *Harder.* Deviates from the documented sprint cadence and the candidate-evaluation rule in the original brief. Future reversal requires an explicit superseding entry in this log and re-issue of `font/family/mono` in the Primitives collection plus every downstream component spec. Sets a precedent of pulling Sprint 2 typeface work into Sprint 1 when exploration converges early — acceptable here, but the rule of thumb that "candidate evaluation happens before lock-in" is now softened.

---

## 2026-05-26 — Cascadia Mono re-affirmed after full 4-way Sprint 2 evaluation
**Stage:** 03-build
**Type:** UX / design tradeoff
**Status:** accepted · supersedes `2026-05-26 — Cascadia Mono selected as studio mono`

**Context.** The Sprint 1 mono evaluation was closed early in favour of Cascadia Mono before the spec-mandated three-candidate review (Geist / JetBrains / Plex) had run. The prior ADR was a procedural shortcut, not a comparative selection — it locked Cascadia but did not satisfy spec success criterion 2b ("ADR logged with rationale referencing the three candidates"). Sprint 2 reopens the evaluation in full, treats the prior ADR as provisional, and runs all four faces (the three from the spec plus the incumbent) against the live token system and the dimension framework in `stages/01-brief/output/mono-shortlist.md`. This entry supersedes the prior one regardless of outcome — closure was the criterion, not change.

**Decision.** Keep Cascadia Mono as the studio mono. The substitution argument from any of Geist, JetBrains, or IBM Plex does not overcome the shortlist's deciding framework on this brand's register.

**Rationale.** Five-dimension evaluation against the live system, drawn directly from `mono-shortlist.md`:

| Dimension | Cascadia | Geist | JetBrains | IBM Plex |
|---|---|---|---|---|
| NHG optical compatibility 16/13/24 | Humanist personality reads against NHG's neutrality — productive opposition | Geometric mechanical at 24; flat at body | Tall x-height reverses hierarchy at 24 | Closest grotesque-DNA pairing; smoothest at every tier |
| Weight pairing vs NHG 400 / 500 | Variable 200–700; matches NHG colour at 400/500 cleanly | Variable 100–900; matches | Variable 200–800; medium reads heavier than NHG medium | Static 100–700; matches cleanly |
| Legibility at 11 / 12px | Best-in-class (tuned for Win Terminal at this tier) | Moderate; loses 'e'/'a' counter at 11 | Best-in-class (IDE-tuned) | Moderate; 'a'/'o' terminals blur at 11 |
| Code character set | Cascadia Code companion has ligatures; Mono base is clean | Ligatures included | 138 ligatures, box-drawing, powerline — most code-native | No ligatures (corporate-identity face) |
| Read on warm ground + ink | Draws warmth from `#E3DFD8` — sits *in* the ground | Sits *on top of* — tech-product register | Reads cold — IDE register | Warm but enterprise-credential register |

The shortlist's deciding question for the brand register — "neutral or characterful" — was answered by the rest of the system. The crafthouse / artisan / *ma* register established in §9.1 (mark), in the spec's voice notes, and in the design-system preview (warm-ground oatmeal, vermilion accent, no decorative radius) reads as *considered* and *characterful*. A neutral mono (Geist or Plex) would silence the chrome tier and let it disappear under the sans — the wrong direction when chrome carries timestamps, badges, and token references that should read as *intentionally surfaced apparatus*, not background.

The remaining choice — Cascadia vs JetBrains — turns on register baggage and warm-ground read. JetBrains carries IDE register so strongly that any chrome surface set in it telegraphs "developer tool" to an audience that has encountered the face inside IntelliJ. Cascadia has near-zero public register baggage (most readers will encounter it here without prior associations) and was tuned for warm grounds (Windows Terminal's beige-tinted defaults), which shows in how it sits on `#E3DFD8` versus how JetBrains sits cooler on the same ground.

The shortlist also notes Cascadia's humanist details — the curl on 'a', the curved terminals on 'l' and 't' — function as *the signature* at chrome scale where they aid disambiguation, while at display scale they create productive opposition to NHG's grotesque neutrality (sans says "calm voice," mono says "characterful voice"; the tension is the brand). This is the inverse of the JetBrains case where the tall x-height creates *unproductive* opposition (mono out-shouts the sans at matching weights at 24px).

**Alternatives considered.**
- **Geist Mono** — Pairs cleanly with NHG and ships with ligatures, but reads as Vercel-product-default. Chrome surfaces set in Geist would shift the brand register toward "tech-product" — wrong room. Best-in-class only if the brand wanted to silence the secondary face into Helvetica-of-mono; it does not.
- **JetBrains Mono** — Strongest pure legibility at 11–12px and the most code-native character set. Rejected on register baggage: the IDE association is too loud to wear at brand-identity scale, and the tall x-height inverts the headline hierarchy at 24px (mono out-shouts NHG at matching weights). Would be the correct choice for a developer-tool brand identity. Shokunin is not that.
- **IBM Plex Mono** — The closest grotesque-DNA pairing with NHG and the warmest read of the three spec candidates. Rejected on register: Plex carries IBM / enterprise associations that conflict with the crafthouse / artisan register; it reads as "credible institutional software" rather than "considered craft." Also: no programming ligatures, which Cascadia Code can supply when the code-block surface ships in Sprint 5.

**Consequences.**
- *Easier.* Token system unchanged — `font/family/mono` in Figma Primitives stays as Cascadia. The design-system preview, the type tokens (composition layer landing in this sprint), and any chrome surface already built carry forward without rework. Cascadia is free, CDN-served, variable axis 200–700, covers the active weight set 300/400/500 plus the 600 hover bump. Sprint 2 criterion 2b is now satisfied via comparative evaluation.
- *Harder.* Locks in a face that will continue to carry the "Windows Terminal" association for the small subset of readers who recognize it. Mitigated: the audience for this brand (creative-studio prospects, design-aware clients) has weaker exposure to Windows Terminal than to Vercel/Geist or IntelliJ/JetBrains. Also: any future need for code-block ligatures requires switching to Cascadia Code (companion face) inside `<code>` and `<pre>` surfaces specifically — manageable as a one-line override, but worth flagging as a known surface-level branch.

**Verification.** Sprint 2 success criterion 2b satisfied — all four faces named, evaluation rubric documented, single selection logged.

---

## 2026-05-26 — Type composition tokens introduced as DTCG typography group
**Stage:** 03-build
**Type:** Architecture
**Status:** accepted

**Context.** The Sprint 1 type primitives expose size, weight, lineHeight, and tracking as separate token groups. A surface that wants "body at 16px" has to compose four references manually (`font.size.16` + `font.weight.regular` + `font.lineHeight.base` + `font.tracking.normal`). The per-step weight rules locked in Sprint 2 (chrome = medium, body = regular, mid-headline = medium, display = light) become invisible at the surface layer — any surface can compose any combination and the system has no place to enforce the rule. Either we trust every consumer to remember the table, or we bind the composition in tokens.

**Decision.** Add a new `font.text.{step}` token group of `$type: "typography"` to `tokens/primitives.json`. Each step composes family + size + weight + lineHeight + tracking by DTCG reference. Twelve sans steps + five mono chrome-tier steps under `font.text.mono.{step}`. Surfaces SHOULD reach for `font.text.16` instead of composing the four underlying tokens manually; single-axis overrides remain available (e.g. set `font.text.32` family to mono for a mono headline).

**Rationale.** The DTCG spec defines a `typography` composite type precisely for this case. Binding the weight rule into the token surface means future consumers (build tools, generated CSS, the Figma Variables collection, the AI Token Explorer) all carry the rule without re-deriving it. The composed token is the rule. Splitting them — keeping primitives raw and adding semantic composition — was considered but rejected: the composition is mode-invariant and references only primitives, so it sits naturally in the primitives layer without polluting the per-mode semantic layer.

**Alternatives considered.**
- **Leave primitives raw, document in markdown only.** Cheap; the per-step weight rules live only in `type-system.md` and consumers must remember to apply them. Rejected because the system's "every design decision is expressible as a rule" principle (`WORKSPACE.md` §5) treats unbound rules as debt — the rule should live where the surface looks.
- **Add composition tokens in `semantic.json` instead.** Would put composed typography next to color and spacing semantic aliases. Rejected because the typography composition is mode-invariant (sans 16/400/1.5/0 reads the same in light and dark) and the semantic layer is structured around the modes extension — composing typography there would require either trivially duplicating values across modes or exposing the layer's mode-strategy inconsistency.
- **Use a build-time generator instead of in-token composition.** Style Dictionary or similar could derive composed CSS classes from primitives + a separate weight table. Rejected because it pushes the rule into tooling layer, off the source of truth; designers reading `primitives.json` directly would not see the composition.

**Consequences.**
- *Easier.* Surface code calls `var(--font-text-16)` (or equivalent) and gets the whole composition. Figma mirrors via the Primitives collection. The weight rule is enforced by reference, not by memory. Composition tokens align with DTCG typography spec — interoperable with any conformant build tool.
- *Harder.* Two ways to compose typography now exist (composed token vs. raw axis tokens) and surfaces must agree on which to prefer. Documented in `_config/design-system/type-system.md` §3 and in the composition token's `$description`. Also: a future weight-rule change requires editing twelve `font.text.{step}` entries instead of one weight table — mitigated by the fact that the rule is supposed to be locked, not adjusted.

---

## 2026-05-26 — Mark refinement direction · spacing intention with preserved 11-cross asymmetry
**Stage:** 03-build
**Type:** UX / design tradeoff
**Status:** accepted

**Context.** Spec §9.1 named two candidate refinement directions for the rough mark — **proportion shift** (vary one cross within the grid to create hierarchy) or **spacing intention** (tighten spacing so the crosses cohere as a unit). The spec described the rough as "4×3 = 12" but the actual rough delivers eleven crosses (4-3-4 row pattern, with the top-right cell of the middle row absent). The asymmetry is unannounced; the spec does not say whether it is intentional, a draft oversight, or a placeholder. Treating it as a bug means filling the cell to twelve; treating it as a seed means preserving and amplifying the absence.

**Decision.** Direction = **spacing intention**, executed against an already-asymmetric rough. Tighten the inter-cell spacing from the rough's 64px to 56px (a 12.5% reduction) so the eleven crosses read as a single body rather than as twelve marks with one missing. Preserve the absent twelfth cell as the mark's signature and as the deliberate detail (2g). The cross form itself is unchanged — the authorship lives at the grid level, not the cross level.

**Rationale.** The shortlist of refinement moves was filtered through one rule: one deliberate decision, not two. The choice was between adding authorship at the cross level (chamfered terminals, arm taper, intersection optical correction) or at the grid level (spacing, asymmetry, focal absence). The cross-level moves all read as "precious" at small sizes — they survive at 84px and disappear at 16px favicon scale. The grid-level move (asymmetric absence + tightened spacing) survives at every size; even at 16px where the cross detail vanishes, the missing cell remains visible as a darker void in the pattern field. The detail is robust to its own reproduction.

The deeper reading: the absent cell is not just designed emptiness, it is a **double-encoded letterform pivot — the studio's initials, S and C, embedded in the grid by a single absence**. Read the populated crosses as letterforms and two readings resolve at the same time.

The **S** lives in the full grid. The top row of four traces the top stroke; the middle row of three (stopped short by the absence at column 4) traces the middle stroke reversing direction; the bottom row of four closes with the bottom stroke. The S is only readable as an S because the middle stroke terminates where it does — fill the absent cell and the middle row becomes a straight horizontal four, and the S collapses back into a generic 4×3 grid. The absence is the bend.

The **C** lives in the rightmost column read alone. Cells (col 4, row 1) and (col 4, row 3) are populated; the cell between them is absent. The two crosses are the upper and lower terminals of a letter C with its mouth opening rightward — the C is exactly the rightmost column read as bracket ends framing a hole. The C's open mouth is the same absent cell that pivots the S.

One absence does the work of two letterforms — the middle-stroke reversal of the S and the open mouth of the C. The studio's initials are not stamped on the mark; they are the mark's underlying structure, revealed only when the grid is read as a letterform. This is the deliberate detail (2g) — a single move that carries two readings, and remains hidden until the reader sees it.

The 56px gap (vs the rough's 64px) is the smallest tightening that materially changes the perceived clustering. Tightened further (48px) the crosses would begin to read as one solid pattern; tightened to 40px they would lose their distinctness. 56px sits at the threshold where eleven crosses read as a body, the absent cell reads as deliberate, and the letterform reading remains discoverable rather than diagrammatic.

**Alternatives considered.**
- **Proportion shift on the center cross.** Enlarge the cross at (104, 104) by ~20% to create a focal point. Rejected: the center cross is already on the visual diagonal from the absent cell — strengthening it competes for the same attention the absence is meant to hold. Adds noise.
- **Proportion shift on a corner cross.** Vary the top-left cross to anchor the read order. Rejected: doubles the deliberate moves (the corner shift PLUS the absent cell) and dilutes both.
- **Fill to twelve, refine cross form only.** Add the absent cell and execute the refinement at cross level (e.g. chamfered terminals). Rejected: loses the asymmetric grid signature, which is the strongest authored signal available; chamfered terminals do not survive 16px reproduction.
- **Fill to twelve, refine via center proportion shift.** Standard centered-hero approach. Rejected: reads as default — a 4×3 grid with a hero center is the most-used pattern in this category; the brand register is "considered, austere," which argues for the less-defaulted move.

**Consequences.**
- *Easier.* The mark has one authored decision (the asymmetric tightened grid) instead of two layered ones. The cross form is unchanged — geometry, exports, and any downstream usage that already references the rough cross continue to work. The 16px favicon case is more robust because the deliberate detail lives in macro structure, not micro form.
- *Harder.* The mark's signature is now load-bearing on the eleven-cross asymmetry. Future variants (extended lockups, motion forms, secondary brand stamps) must respect the asymmetry — they cannot quietly drop or restore the missing cell. The spec's "4×3 = 12" language is now superseded by the mark spec's "4-3-4 = 11" — `_config/brand/mark-spec.md` is the authoritative source going forward, and `sc-brand-system-spec.md` §9.1 should be read with this ADR in mind.

---

## 2026-05-27 — Voice document as standalone source-of-truth artifact
**Stage:** 03-build
**Type:** Architecture
**Status:** accepted

**Context.** The studio's brand voice existed in two places before Sprint 3. First, as a skeleton in the on-disk `sc-brand-voice` skill (`SKILL.md` + `references/studio-identity.md` + `references/voice-registers.md` + `references/anti-patterns.md`), installed under `~/Library/Application Support/Claude/local-agent-mode-sessions/.../skills/sc-brand-voice/`. Second, implicitly, in Levi's case-study writing on CardUp, Year in Review, Mix n Match, and the canonical Formstack and Luma openers quoted across those reference files. Sprint 3 required resolving the voice into a buildable, testable system (`sc-brand-system-spec.md` §5 Sprint 3). Two competing places to author the voice creates drift the moment either is edited: downstream skills like `sc-voice-checker` cannot honor both without re-deriving which one is canonical, and the upstream skill lives on a path that is not under this repo's source control. A single source-of-truth, in-repo, was the only way to make the checker's pre-audit phase deterministic.

**Decision.** Lock `_config/voice/brand-voice.md` as the standalone source-of-truth artifact for the studio's brand voice. The upstream `sc-brand-voice` skill is treated as a provisional skeleton — its content is carried forward into `_config/voice/brand-voice.md` where it earns its place and expanded where Sprint 3 fields demand more (opening pattern, sentence structure, density with words-per-sentence ranges, perspective, allows, forbids). The skill itself is not edited or relocated. Order of authority when downstream skills disagree: (1) `_config/voice/brand-voice.md` · (2) on-disk `sc-brand-voice` skill skeleton · (3) studio-memory studio-identity context.

**Rationale.** The Sprint 3 deliverable is a voice document `structured for web rendering and brand site integration` (spec §5 Deliverables). Authoring inside the on-disk skill folder fails the web-rendering criterion (the file is not in the project tree, not version-controlled with the rest of the brand identity, not visible to the brand site build). Authoring a new in-repo document while leaving the skill's `references/*.md` files in place creates the dual-source-of-truth problem this ADR exists to resolve. The chosen approach — `_config/voice/brand-voice.md` as canonical, skeleton as the provisional source it was derived from — establishes the same pattern the project already uses for design tokens (`_config/design-system/token-map.md` as canonical, Figma as mirror) and the mark (`_config/brand/mark-spec.md` as canonical, `sc-brand-system-spec.md §9.1` as the seed brief). The voice document is now governed by the same workspace rules as those artifacts: any change here triggers downstream review, not the other way around.

The order-of-authority list resolves the case where the upstream skill and the in-repo document disagree (e.g., a future skill update adds a new anti-pattern, or the in-repo doc gets edited without backporting). Highest authority sits in this repo. The skeleton is the second-best fallback. The studio-identity context is the deepest fallback if both files are unavailable.

**Alternatives considered.**
- **Keep authoring inside the upstream skill folder.** The skill works in any chat session today; no migration cost. Rejected because the skill folder is outside the project tree, not under this repo's source control, and not loadable by `sc-voice-checker` from the project root. The brand-site rendering criterion in spec §5 Deliverables is also unmet — the skill folder is not on the build path.
- **Author the voice document in `_config/voice/` AND keep editing the skill's `references/*.md` files in parallel.** Both surfaces stay live; downstream skills could load either. Rejected as the dual-source-of-truth failure mode this ADR exists to prevent — drift is guaranteed the moment one side gets edited.
- **Replace the upstream skill entirely with a thin loader that reads `_config/voice/brand-voice.md`.** Cleanest single-source approach. Rejected as out-of-scope for Sprint 3 (the skeleton skill is not in this repo and its modification is explicitly excluded from Sprint 3 scope in the approved contract). Defer to a future sprint if the skeleton's continued existence creates friction.

**Consequences.**
- *Easier.* `sc-voice-checker` has one file to load in its pre-audit phase (`_config/voice/brand-voice.md`). The brand site can render the voice document directly from the project tree at Sprint 5. Edits to the voice go through normal repo review (PR + ADR for cross-cutting changes); the skeleton's `references/*.md` files become read-only seed material. Any net-new pattern, register field, or canonical example added in this repo is automatically the authoritative version.
- *Harder.* The upstream `sc-brand-voice` skill is now stale relative to `_config/voice/brand-voice.md` (it does not carry the four net-new anti-patterns, the structured corrected-version columns, the words-per-sentence density ranges, or the net-new canonical openers for Registers 2 and 3). Any chat session that loads the upstream skill without also loading this repo's voice doc operates on outdated guidance. Mitigated: the upstream skill's frontmatter triggers on copy-generation requests, not on voice audits — `sc-voice-checker` is the audit path and explicitly loads the in-repo doc. A future sprint that retires or rewrites the upstream skill to read this file as its source closes the gap. Until then, the order-of-authority list documents the resolution rule.

---

## 2026-05-27 — Seven-principle voice rubric locked as canonical mapping
**Stage:** 03-build
**Type:** Architecture
**Status:** accepted

**Context.** The Shokunin Crafthouse's seven design principles (`sc-brand-system-spec.md` §3 · `WORKSPACE.md` §5) apply to design and copy decisions equally — that is the project's stated position. Sprint 3 needed a scoring rubric for `sc-voice-checker` that maps these seven principles onto written voice with enough specificity to score 1–5 per principle with quoted line evidence (spec criterion 3e). Two paths existed: derive a voice-specific rubric from scratch (a new five-or-six-point framework optimized for written copy alone), or translate the existing seven principles into voice terms and keep the design-and-copy parity the studio's positioning depends on. The choice was load-bearing for downstream tooling: the rubric, once shipped in `sc-voice-checker`, becomes the reference any future voice tool (a copy linter, a CI check, a brand-site voice-explorer feature, a second checker variant) is expected to use. Reversing it later means rewriting calibrations, recalibrating known-good and known-bad fixtures, and reissuing every guidance reference that points designers and writers at the same seven-principle frame.

**Decision.** Lock the seven Shokunin design principles as the canonical rubric for all future voice tooling. The rubric structure shipped in `skills/sc-voice-checker/SKILL.md` — one block per principle, voice translation, 1–5 anchors, ≥1 quoted pass signal from `_config/voice/brand-voice.md` §4, ≥1 quoted fail signal from §3 — becomes the standard pattern any future voice tool inherits. New voice tools do not author new rubrics. They reuse this one, calibrate fresh fixtures against it, or propose changes via a superseding ADR.

**Rationale.** The studio's positioning explicitly treats design and copy as governed by the same principles (`brand-voice.md` §1: "What changes between registers is posture, density, perspective, and structural pattern — not which principles apply"; `WORKSPACE.md` §5: "Every design decision is expressible as a rule. One-offs are debt"). A voice-specific rubric would diverge from the design-quality grading criteria over time and create a credibility gap — the studio cannot claim "seven principles apply equally to design and copy" while shipping a voice tool that scores against a different framework. Locking the seven-principle mapping makes the parity claim verifiable rather than aspirational.

The 1–5 anchor structure (5 = exemplar matching canonical example · 3 = passable · 1 = matches a documented anti-pattern) follows the same calibration pattern as `sc-token-explorer` — the existing studio skill that scores token recommendations against documented rules and known fixtures. Reusing the pattern across both skills means a future contributor learns one mental model and applies it twice.

The pass/fail signal requirement (≥1 quoted line per principle, sourced from `brand-voice.md` §3 or §4) prevents the rubric from drifting into generic guidance over time. Every principle is anchored to a real line of copy that exists somewhere in the studio's body of work or its anti-pattern library. If a future edit makes the rubric vague — replaces a quoted line with "well-crafted prose" — the rubric is no longer canonical and the change requires a superseding ADR.

**Alternatives considered.**
- **Derive a voice-specific 5-point or 6-point framework from scratch.** Optimized for written copy alone — a clarity score, an authorship score, a restraint score, an originality score, a craft score. Could be more directly applicable to copy critique. Rejected on parity grounds — the studio's design and copy decisions live in the same seven-principle frame, and the brand-quality grading criteria in `references/studio-identity.md` already use them together. Shipping a divergent voice rubric splits the framework and weakens both halves.
- **Use the four design-quality grading criteria from `references/studio-identity.md` (Originality / Design quality / Craft / Functionality).** Already exists, already four-dimensional, already calibrated to design output. Rejected because the four criteria are output-quality assessments, not principle-level mappings — they describe what the finished work looks like, not what decisions produced it. The voice checker scores decisions (sentence choices, perspective calls, anti-pattern hits), not finished-piece quality.
- **Ship a hybrid: seven principles for the rubric, four design-quality criteria for the overall verdict.** Combines both frameworks. Rejected because the two frameworks would compete at the verdict level — a piece could score 4.5 on principles but 2.5 on design-quality, and the resolution rule between them would be ad-hoc. Single-framework consistency wins.
- **Leave the rubric provisional and revisit after Sprint 5.** Defers the lock. Rejected because the rubric is already shipping in `sc-voice-checker` and is referenced by the brand-voice document as the canonical mapping. Provisional locks on shipped surfaces create silent drift — the lock either holds or it does not.

**Consequences.**
- *Easier.* Any future voice tool (a copy linter, a CI check, a brand-site voice-explorer feature, a second checker variant) inherits the rubric pattern unchanged. New calibrations follow the existing two-fixture format (one known-good, one known-bad) shipped in `skills/sc-voice-checker/SKILL.md`. The "principles apply equally to design and copy" positioning is now backed by a shipped tool that scores against the same seven principles. Future copy guidance documents can reference the rubric by section number (`P1 Craft baseline` through `P7 Originality`) without re-explaining the framework. Downstream tools share calibration fixtures across versions instead of each tool authoring its own.
- *Harder.* The seven principles were authored for design decisions, not for copy specifically — some principles translate more cleanly than others (P1 Craft baseline and P4 Restraint map naturally; P5 Products-not-pages requires more interpretation in copy contexts). The rubric blocks carry this translation work explicitly in their voice-translation paragraphs, but a future contributor reading the rubric without the design-side context may find some principle-to-voice mappings less obvious than a voice-native rubric would have been. Mitigated by the quoted pass/fail signals — each principle has anchored evidence in the body of work — and by the calibration examples that show the rubric applied end-to-end. Also: any change to the seven principles upstream (in `sc-brand-system-spec.md §3` or `WORKSPACE.md §5`) cascades through this rubric and requires a recalibration pass. The lock is on the *mapping*, not on the upstream principles; if the principles themselves change, the rubric follows.

**Verification.** Sprint 3 success criterion 3e satisfied — all seven rubric blocks ship with quoted pass and fail signals; Calibration 1 in `skills/sc-voice-checker/SKILL.md` dry-runs the Formstack Overview and returns all 7 scores with quoted line evidence and per-principle rationale.

---

## 2026-05-27 — Sprint 4 semantic-layer expansion
**Stage:** 03-build
**Type:** Architecture
**Status:** accepted

**Context.** Sprint 4 builds the 12 component primitives (spec §2 Tier 3) with the rule (contract resolution 1) that component CSS references `var(--sc-*)` semantic tokens only — primitive references in component code are a bug. Pre-Sprint 4 the semantic layer in `tokens/semantic.json` covered color (surface, text, border, interactive, status, brand) and a single component-padding triplet (`sm/md/lg`). Everything else needed by the components — border-width, radius role aliases, motion role aliases (hover/press/mode/reveal pair-tokens), per-surface type composition (label/caption/body/title/display/mono), component-internal directional padding + gap, layout-level stack + inset rhythm, and per-component dimension tokens for Avatar/Switch/ProgressIndicator — existed only as primitives or not at all. Resolving each gap individually would have required 9–12 stop-and-wait approval cycles per the Sprint 4 token-gap protocol (contract resolution 2). Sprint 4 surveyed all 12 components against `tokens/semantic.json` upfront in `stages/03-build/sprint-4/token-gaps.md` and produced a single batched proposal.

**Decision.** Expand the semantic layer by 65 new tokens and the primitive layer by 3 new tokens (`border/width/{hairline,focus,accent}`) in one coordinated change. Reorganize the generated CSS namespace so primitives emit under `--sc-p-*` and semantic aliases emit under `--sc-*`, eliminating any possibility of a semantic alias colliding with a same-named primitive at the CSS-var level. All additions are aliases of existing primitive values — no new color, type, motion, or spacing values were invented; the change is purely an additional translation layer between the raw scale and the role-driven needs of components.

**Rationale.** Three separate forces converged on this approach:

1. **Component callsite ergonomics.** Components consume tokens by role — "the button label font", "the focus-ring width", "the press scale" — not by raw scale ladder position. Without role aliases, every Button.module.css would have to remember that label = `font/text/11` and press scale = `motion/scale/pressButton`, leaking the underlying primitive scale into every component file. With aliases, the component reads `var(--sc-font-text-label-chrome)` and `var(--sc-motion-press-scale)` and the underlying primitive can be repointed centrally if the scale changes. Per UI rules `_config/design-system/ui-rules.md`: "Every color is a semantic token. Raw hex in component code is a bug." This sprint extends the same principle to every non-color token category.

2. **One ADR vs nine.** The Sprint 4 token-gap protocol could be satisfied either by approving each gap group individually (9 sequential cycles, 9 ADR entries, 9 partial patches, 9 tokens.css regenerations) or by approving one batched proposal (1 cycle, 1 ADR, 1 patch). The batched form was chosen because every gap was identifiable upfront from §2 Tier 3 against current `semantic.json` — there was no genuine sequential dependency. The batched form trades a longer single review for deterministic build flow afterward, which matters more for a sprint with 12 components downstream.

3. **Namespace collision protection.** The first build attempt after adding semantic `border/width/focus` (aliasing primitive `border/width/focus`) revealed a CSS-var collision: both DTCG tokens generate the same `--sc-border-width-focus` name, and the semantic version would have recursively referenced itself, producing invalid CSS. Renaming individual tokens to dodge the collision was the local fix but fragile (any future same-named alias re-introduces the bug). Namespacing the generator output is the systemic fix and was implemented as part of this expansion — `scripts/tokens-to-css.mjs` now tracks a Set of primitive leaf paths and emits primitives under `--sc-p-*`, so a semantic alias and its primitive target are always distinguishable by namespace regardless of name.

**Alternatives considered.**

- **Approve gaps individually, one ADR per group.** The literal reading of the token-gap protocol (contract resolution 2). Rejected because every gap was knowable upfront — sequential cycles add overhead without surfacing decisions that would not have surfaced in a batched review. Token-gap protocol intent is "no silent inline values," not "no batching." A future sprint that hits an unanticipated gap mid-build still triggers the stop-document-approve cycle for that single gap; this ADR doesn't change the protocol, it just consolidates a knowable-upfront batch.

- **Use primitives directly in component code where no semantic alias exists.** Cheaper short-term — components reach for `--sc-p-font-text-11` in Button.module.css when no `font/text/label/chrome` semantic exists. Rejected because it makes the abstraction layer leaky from day one. Once primitives appear in component code, the cost of refactoring them out later (Sprint 5+, brand-site assembly) compounds. The semantic layer's purpose is to insulate consumers from primitive scale changes; that purpose dies the moment a single component bypasses it.

- **Rename clashing semantic tokens to dodge the CSS collision.** Local fix — call the semantic alias `border/width/focus-ring` instead of `border/width/focus`. Rejected because it puts the burden on every future token author to remember which primitive names are taken. Namespacing the generator output protects against the collision class generically and once.

**Consequences.**

- *Easier.* Every Sprint 4 component CSS module consumes only `var(--sc-*)` semantic vars. The grep audit (4b) for hardcoded values in `src/components/` has a clean path to zero. Repointing a semantic role (e.g. moving Button radius from `radius/surface` to a new `radius/button` if a need emerges) is a one-line change in semantic.json plus a tokens regen — no component changes. Future ADRs that add semantic role tokens follow the established pattern (group · alias · description · components consuming). The primitive layer remains pure raw values; the semantic layer is the only place role decisions live.

- *Harder.* The semantic layer grew from 23 tokens to 88 — a 4× increase in surface area for a future re-sync with Figma's Semantic collection (currently mirrors the pre-Sprint-4 set). The sync-figma-token skill will need updating before the next Figma round-trip, and the Figma Semantic collection will need either (a) the new variables added to it manually or (b) an export-from-code workflow established. Documented as a Sprint 5 prerequisite. Token-map.md mirrors the additions under a clearly-marked "Sprint 4 — Component-layer semantic expansion (2026-05-27)" appendix rather than folded into the existing category sections, so the sync target is unambiguous.

- *Harder.* The generated `tokens.css` more than doubles in size (225 → 365 root declarations, 23 → 158 dark declarations). All values resolve via the same alias chain so the gzip cost is modest (~3.7kB gzipped), but reading the raw file is now denser. Mitigated by the section comments inserted by the generator (`/* --- Primitives (--sc-p-*) --- */` and `/* --- Semantic · light mode (--sc-*) --- */`) and by the namespace prefix making the two layers visually distinct at a glance.

**Verification.** `npm run build` exits 0. `node -e` parse-checks both JSON files OK. Generated CSS sample-verified at the new namespace (`--sc-p-color-warm-gray-100`, `--sc-color-surface-page` resolving to `var(--sc-p-color-warm-gray-100)`, semantic `border/width/focus` resolving to `var(--sc-p-border-width-focus)` without recursion). Sprint 4 audit criterion 4e — "If a semantic token had to be added or modified during Sprint 4, it is documented in an ADR" — satisfied by this entry. Component build resumes against the expanded semantic layer with no further token-gap stops anticipated.


## 2026-05-28 — Brand-site Color palette adopted into tokens (design wins)

**Status:** accepted

**Context.** Building the living brand site shell (sprint `brand-site-shell`), the canonical token source (`tokens/primitives.json` + `semantic.json`, mirrored by `token-map.md`) disagreed with the Stage-02 Color page design (`stages/02-design/claude-design/scds-documentation-site-desktop/project/Color.html` + `system/colors_and_type.css`). The design renders a status palette pulled deliberately off the shu vermilion band (its own copy argues "error is oxblood, not shu"), a 13-step warm-gray ladder, and `surface-raised`/`floating` surfaces — none of which existed in the token source, where `status.error` aliased `{color.shu.500}`.

**Decision.** The design wins; the token source is updated to match (studio sign-off, 2026-05-28). Changes to `tokens/primitives.json` + `tokens/semantic.json`:
- `+ color.warmGray.25` = `#F8F6F2` (13-step ladder).
- Status repaint: success `#2F855A`/`#6EE7B7`, warning `#C2410C`/`#FB923C`, info `#1D4ED8`/`#93C5FD`; **new** `color.status.error.light` `#7F1D1D` (oxblood) / `.dark` `#FCA5A5`.
- `+ semantic color.surface.raised` (warmGray.50 → dark.surfaceSunk) and `color.surface.floating` (warmGray.25 → dark.surfaceDeepSunk).
- `color.status.error` rebound from `{color.shu.500}` → `{color.status.error.*}` so brand-accent and danger can never share a hue.
- Regenerated `src/styles/tokens.css` via `npm run tokens:build`.

**Scope guard.** Typography tracking and motion/elevation were left at their canonical values — the design export's zeroed tracking is an export artifact, not a design decision. Only colour primitives/semantics + the warm-gray step + the two surfaces changed.

**Consequences.** Error styling no longer matches the brand accent anywhere it is consumed (Badge/Alert/Input error states now render oxblood, not vermilion). `token-map.md` is now stale on the status palette and should be re-synced on the next `sync-figma-token` pass. Figma Variables mirror should be updated to match.

## 2026-05-28 — Type pass: Color page hierarchy fix + mono/chrome weight widened to 600

**Status:** accepted

**Context.** Type recheck of the brand-site Color section against Figma node `2144:24` (`Color — DL`) surfaced (a) an implementation bug and (b) a token/Figma divergence.

**Decisions.**
- **Hierarchy bug (fixed, no token change).** A responsive rule had scaled chapter headings to `display/lg` (84px) at ≥1280, flattening them against the hero. Chapter headings now stay `display/sm` (44px) at all breakpoints; the contrast-checker `Aa` preview + ratio value now use `display/lg` (84px) at ≥768 (were `display/md` 60px). Matches Figma `display/sm` 44 vs `display/lg` 84.
- **Offscale sizes (no change — modular scale wins).** Figma draws lead/premise/glyph at offscale 22/18/200 (its `offscale/*` group). We keep the 1.25 modular scale: lead/premise on `body/lead` (20), glyph on `display/xl` (120). Editorial offscale sizes are treated as one-off debt and not adopted.
- **Mono chrome weight 500 → 600 (design wins; rule widened).** Figma `mono/chrome` is weight 600. `font.text.mono.11` changed from `{font.weight.medium}` to `{font.weight.semibold}`; added the Cascadia Mono 600 `@font-face`. The prior rule "weight 600 reserved exclusively for the secondary-button hover bump" is **widened** to also cover the mono chrome label step. Updated in `_config/design-system/type-system.md`, `token-map.md` (weight table + zone summary + mono/11 row), and `tokens/primitives.json` metadata.

**Consequences.** System-wide: every mono chrome label (eyebrows, badges, nav numbers, metabar, captions) renders semibold, including across the Sprint-4 component primitives. The global `studio-memory.md` does not carry this rule, so no studio-level edit was required. Figma Variables mirror + `token-map.md` were aligned; re-sync on the next `sync-figma-token` pass.

## 2026-05-28 — Color page type: full Figma parity pass (offscale adopted)

**Status:** accepted

**Context.** Side-by-side of the rendered Color page against the Figma screenshot of node `2144:24` surfaced ~15 divergences (copy, structure, type sizes).

**Decisions / changes.**
- **Offscale sizes — adopted (reverses the 2026-05-28 "keep modular scale" call above).** Added a clearly-labeled `offscale` group to `tokens/primitives.json`: `font.size.offscale.{18,22,200}` + `font.text.offscale.{body.18, body.22, display.200}`, each described "OFFSCALE · … NOT general-use." Wired hero lead → 22, chapter premise → 18, shu plate glyph → 200 (200 at ≥768; 120 on mobile to avoid overflow). The modular scale stays the default; offscale is fenced off and named so it reads as deliberate editorial debt, not drift.
- **Hero** — "earns" now renders in shu (`--sc-color-brand-accent`); "doing work." steps up to medium weight; lead emphasis (`<em>`) removed to match the uniform-secondary mock.
- **Metabar** — crumb "01 Foundations / Color"; right block restored to "Last revised 2026.05.27 · Tokens 88 · Spec v1.2" (was "… · Mode Light · Spec v1.3").
- **Ladder** — step labels now show step + hex (resolved at runtime, no literal); gutter annotations include resolved hex; "4-point lift" copy.
- **Three-tier table** — added the "01 Primitive / 02 Semantic / 03 Component" header row + sublabels; hex under each primitive token; error component cell now "`.sc-alert--error, .sc-badge--error`".
- **Status** — premise "not red"; success/info sublabels carry their AA ratios again.
- **Checker** — gutter back to three notes (Pick a swatch / Last clicked wins / Quick presets); verdict copy "AAA for normal and large body".
- **Copy** — chapter eyebrows use "/" separators; token captions restored to full `--sc-color-*` / `sc-color-*` names.

**Left intentionally divergent.** Contrast ratio shows **13.34:1** (the mathematically correct WCAG value for `#1A1815` on `#E3DFD8`), not the mock's stale **12.40**. `display/lg` line-height stays 1.1 (vs Figma 1.05) — negligible, and our optical-tracking display values match the *rendered* mock.

## 2026-05-31 — Brand-site polish pass: sidebar / type recheck / mobile nav / slash separator

**Status:** accepted

Eight related fixes landing in one pass against Figma node `2144:24` (desktop) + `2207:3155`/`2207:2604` (mobile ML/MD).

**Tokens added (semantic, labeled).**
- `color.surface.rail` — sidebar/left-rail ground. Light = `{color.warmGray.300}` (= surface-deep-sunk equivalent), dark = `{color.dark.surfaceSunk}` (= surface-sunk equivalent). Two-step asymmetry by design: rail reads as sunk in light, lifted in dark.
- `color.surface.hover` — hover-highlight ground for nav links. Light = `{color.warmGray.250}`, dark = `{color.warmGray.800}`.

**Tokens added (primitive).**
- `font.weight.thin` = 250. Active weight set widened to 250 / 300 / 400 / 500 (+ 600 mono chrome + secondary-button hover). Required by `display/sm` (Figma `35 Thin`). `@font-face` for NHG Display Pro 250 added (woff2 already in `src/fonts/`).

**Tokens repainted (weight + letter-spacing recheck vs Figma).**
- `font.text.44` (display/sm): weight `light` → `thin`; letter-spacing `tighter` → `normal`.
- `font.text.84` (display/lg): letter-spacing `tightest` → `normal`.
- `font.text.120` (display/xl): letter-spacing `tightest` → `normal`.
- `font.text.mono.11` (mono/chrome): letter-spacing `wider (0.06em)` → `normal`. Aligns to the Figma variable (per-element CSS may still track where the design renders tracked).

Line-heights left as-is per scope ("recheck weight + letter spacing"). `token-map.md`, `type-system.md`, `primitives.json` metadata updated for the widened active-weight set.

**Color page CSS.**
- Sidebar `background` now references `surface-rail`.
- Nav links gain padding-inline + `radius-control` + `surface-hover` background on hover; active accent bar repositioned from sidebar outer edge to link inner left (`left: 0`).
- Chapter-eyebrow square dots flipped from `text-disabled` to `brand-accent` (shu).
- Main content area at `>= 1280` switches to `display: flex; justify-content: center; padding-inline: 96px` — content max-width 1080 with a hard 96-min margin.
- Foundation nav items lose their trailing `01..05` numbers (Button keeps `12`).

**Layout / footer.**
- Sidebar header now mark + "Shokunin Crafthouse" only.
- "design system / v1.2" moved into a new `.versionRow` line directly below the mode toggle, above the existing `edition / 2026.05` + `SCDS-01` colophon.

**Mobile rebuild (new — Figma `Color — ML/MD`).**
- Sidebar hidden at `< 768`.
- New mobile top header: brand crumb (`<accent>01</accent> Foundations / Color`) + `Spec / v1.2` + mark icon. Sticky.
- New bottom sticky nav with 3 tabs: current-page crumb / `Chapters` / `Pages`. Tapping any tab slides up a menu (translateY 100% → 0, easing on mode-easing).
- Menu content: `Chapters` (and current-page tab) shows the current page's chapter list with counts (from a new `CHAPTERS` map; populated for Color, empty otherwise). `Pages` shows the flat NAV list with section / item names.
- When the menu is open, `main` gets `filter: blur(15px)` and `pointer-events: none`; a transparent overlay above main captures taps to close.
- Mobile nav, header, menu, overlay are hidden at `>= 768`.

**Separator (`/`) styling.**
- All visible `·` separators across the shell + Color page replaced with `/`. A small `Slash` helper renders `<span class="slash"> / </span>`, where `.slash` resolves to `text-disabled` — always a step lighter than the adjacent text. String-rendered values (status hue, role labels, verdict heads, token names) pass through a `withSlash` helper that splits on `·` or `/` and inserts the styled separator. JSX comments and CSS-doc comments left alone (not user-visible).

Zero hex in src (excl. generated `tokens.css`) held. `npm run build` and `npm run preview brand-site-shell` exit 0. Both 1280 + 390 PNGs render the new state without regression.

## 2026-06-02 — Code → Figma sync: "Color — DL" variable repaint (text styles blocked)

**Status:** accepted

Pushed the design-system variable updates that had accrued in the token files back
into the Figma file (`ufNlysCwWz7y2FBk61DxbN`), so the Sandbox `Color — DL` frame
(node `2144:24`) and the shared variable collections match the shipped build. Direction
was code → Figma; code/token files are the source of truth.

**Primitives collection (synced):**
- `status/success/light` `#2e8559` → `#2F855A`; `status/success/dark` `#44ab77` → `#6EE7B7`.
- `status/warning/light` `#db6300` → `#C2410C`; `status/warning/dark` `#c77f44` → `#FB923C`.
- `status/info/light` `#325dd8` → `#1D4ED8`; `status/info/dark` `#4f8ad6` → `#93C5FD`.
- `status/error/dark` `#b23232` → `#FCA5A5` (`error/light` `#7F1D1D` already matched).
- Added `color/warmGray/25` = `#F8F6F2` (scopes/codeSyntax cloned from `warmGray/50`).

The status tiles' printed hex labels already read the target values while the bound
fills were stale — Figma was internally inconsistent. The repaint reconciled fill ↔ label.

**Semantic collection (synced):**
- Added `surface/floating` (L `warmGray/25` · D `dark/surfaceDeepSunk`).
- Added `surface/rail` (L `warmGray/300` · D `dark/surfaceSunk`).
- Added `surface/hover` (L `warmGray/250` · D `warmGray/800`).
- `interactive/hover` Dark `shu/500` → `shu/400`.

**BLOCKED — display text styles (could not write via MCP).** `use_figma` cannot load the
brand trial fonts (`listAvailableFontsAsync` returns the family empty; `loadFontAsync`
throws "font family does not exist"). Editing any TextStyle requires its font loaded, so
these three remain stale in Figma and must be hand-edited in the desktop app:
- `display/sm` (44): letter-spacing `2%` → `0%`.
- `display/lg` (84): font `35 Thin` → `45 Light`; line-height `105%` → `110%`; ls `-2%` → `0%`.
- `offscale/display/200`: font `35 Thin` → `45 Light`; ls `-2%` → `-4%`.

**Build parity.** `tokens.css` regenerated with zero drift — the build already carried
every synced value. Remaining build↔Figma divergences are called out (display type above;
contrast figure `13.34:1` live vs Figma's stale `12.40`; nav slot-machine + press-scale are
build-only motion, not statically representable). Figma-only extras (`status/*/text`,
`surface/overlay`) left intact — not deleted, not in the token files.

---

## 2026-06-03 — Brand → Portal deploy bridge (brand side)

**Status:** accepted

**Decision.** After the brand site deploys to Hostinger on a push to `main`, `deploy.yml`
fires a `repository_dispatch` (`event-type: brand-updated`) to
`The-Shokunin-Crafthouse/client-portal`. The portal's `deploy.yml` already listens for that
event and re-deploys (SSH → `git pull` → `git submodule update` → `npm ci` → build →
`pm2 restart`). A design-system change here now auto-propagates to the live portal — the
studio's "brand updates, portal follows" pipeline.

**Why a PAT, not `GITHUB_TOKEN`.** A workflow's built-in `GITHUB_TOKEN` is scoped to its own
repository and cannot dispatch cross-repo. The dispatch step reads `PORTAL_DISPATCH_TOKEN`,
a fine-grained PAT scoped to `client-portal` (Contents: write · Metadata: read), stored as a
secret on this repo. The secret is added separately; the workflow is otherwise complete.

**Portal-side prerequisites (handled in client-portal Sprint 1).** (1) Add
`shokunin-brand-identity` as a submodule at `_brand/`. (2) The portal deploy should run
`git submodule update --remote` so the dispatch pulls the latest brand *tip* — the current
`--init --recursive` checks out the recorded SHA and would otherwise rebuild against a stale
pin. Tracked in the portal repo, not here.

---

## 2026-06-07 — COO audit note: five entries missing `**Status:**` lines

**Status:** accepted

Logged by the weekly COO audit (sc-coo, item 3, approved 2026-06-07). The following
entries break the log's own entry format — each is missing its `**Status:**` line:

- 2026-05-28 — Type pass: Color page hierarchy fix + mono/chrome weight widened to 600
- 2026-05-28 — Color page type: full Figma parity pass (offscale adopted)
- 2026-05-31 — Brand-site polish pass: sidebar / type recheck / mobile nav / slash separator
- 2026-06-02 — Code → Figma sync: "Color — DL" variable repaint (text styles blocked)
- 2026-06-03 — Brand → Portal deploy bridge (brand side)

Per the append-only rule the entries themselves are untouched. Backfill the Status lines
in the next working session in this repo (all five appear to be accepted-and-shipped).

---

## 2026-06-10 — Brand site gets its own Hostinger docroot (de-nest)

**Status:** accepted

**Decision.** Move the brand site's deploy target from
`~/domains/shokunincrafthouse.com/public_html/brand/` (nested inside the **studio**
site's docroot) to its own sibling docroot `~/domains/brand.shokunincrafthouse.com/public_html/`,
mirroring `clients.shokunincrafthouse.com`. Updated `deploy.yml`, `preview-deploy.yml`,
and `preview-cleanup.yml`. The `brand.shokunincrafthouse.com` subdomain document root must be
repointed to the new folder in hPanel (manual, panel-managed vhost) for this to take effect.

**Why.** `brand.shokunincrafthouse.com` was returning 404. Diagnosis: the brand docroot was
nested *inside* the studio/apex site's docroot (`…/shokunincrafthouse.com/public_html/`). The
studio site deploys to that `public_html/` with `rsync --delete`, protecting only `_previews/**`
(studio learning #26) — not `brand/**`. So every studio deploy **deleted** the brand build.
Studio shipped 2026-06-09, after brand's 2026-06-05 deploy → brand wiped; subdomain served the
LiteSpeed default 404. Verified over SSH: no `brand/` dir and no brand build asset anywhere under
`~/domains`. Two branded properties must never share a docroot tree where one deploys with
`--delete`. Each property owns its docroot — the `clients.*` pattern, and consistent with
studio learning #34 (brand is a standalone property).

**Not the cause (but noted).** The brand `deploy.yml` run shows red on the final
`repository_dispatch` step (`PORTAL_DISPATCH_TOKEN` — "Repository not found, OR token has
insufficient permissions"). That step runs *after* a successful build + rsync, so it never
blocked serving. Separate fix: regenerate the fine-grained PAT with access to
`The-Shokunin-Crafthouse/client-portal`.

---

## 2026-06-11 — Remove the brand → portal dispatch step (portal repo deleted)

**Status:** accepted

**Decision.** Delete the `Trigger client-portal rebuild` step (`peter-evans/repository-dispatch@v3`
→ `The-Shokunin-Crafthouse/client-portal`, event `brand-updated`) from `deploy.yml`. A breadcrumb
comment remains in the workflow pointing back to this entry.

**Why.** The client-portal repo no longer exists — deleted deliberately ahead of a ground-up
rebuild (too many accumulated issues to keep building on). The dispatch step's
"Repository not found" failure was therefore literal, and it marked every otherwise-successful
production deploy run red. A dispatch to a nonexistent repo is dead weight; removing it makes
deploy run status meaningful again. This supersedes the "Not the cause (but noted)" follow-up in
the 2026-06-10 entry — there is no PAT to regenerate until a portal exists.

**Restore condition.** When the portal is rebuilt: re-add the dispatch step (shape preserved in
git history at this commit), create a fresh fine-grained PAT scoped to the new portal repo
(Contents: read/write), store it as `PORTAL_DISPATCH_TOKEN`, and prefer `continue-on-error: true`
or a separate job so a dispatch failure can never again mask a healthy deploy.

---

## 2026-06-24 — Figma Code Connect adopted for the SCDS component library

**Stage:** 03-build
**Type:** Stack / tech choice
**Status:** accepted

**Context.** This repo authors the shared design system and is upstream of every
Shokunin-branded property. Designers in Figma Dev Mode had no link back to the real
React snippet for a given component. Code Connect closes that loop. Setup needed:
the dependency, a config, a token path that never enters git, one proof mapping, and
a local validation that runs without a token.

**Decision.** Adopt `@figma/code-connect` (the CLI flow — `figma.config.json` +
co-located `<Component>.figma.tsx` + `figma connect parse|publish`). Installed as a
**devDependency** (CLI-only tooling, never imported by app code; the site is a static
Vite build so prod-vs-dep has no runtime effect, and dev is the correct classification).
`parser: "react"`, `include: ["src/components/**/*.{jsx,tsx}"]` — the glob matches both
the mapping files and the `.jsx` sources so Code Connect can resolve the source link.
Token read from `FIGMA_ACCESS_TOKEN` (env only; `.env` gitignored, `.env.example`
documents the scopes). Scripts: `figma:parse` (dry check), `figma:publish`.

**Proof mapping is code-complete, Figma-side deferred.** `Button/Button.figma.tsx`
wires the props 1:1 to `Button.jsx` (`figma.enum` variant · `figma.boolean` disabled/
loading · `figma.string` label). The SCDS React primitives currently have **no 1:1
published Figma masters** (verified 2026-06-24 via Figma MCP — `search_design_system`
for "Button" in `ufNlysCwWz7y2FBk61DxbN` returns empty; the file holds doc/specimen +
portal-kit `UI/*`/`Portal/*`/`Admin/*` components on different variant axes). So the
mapping uses a **placeholder node-id (`0-1`)** and best-guess Figma property names.
`figma connect parse` validates the code side without touching Figma and passes
(EXIT 0); `figma connect publish` is deferred until the Figma Button master exists and
its real node URL + property names are filled in. The other 12 components are tracked
as TODO in `src/components/CODE-CONNECT.md` — authored one at a time against confirmed
masters, never bulk-authored blind.

**Consequences.** *Easier.* The design↔code bridge convention is established and lives
next to the components. *Harder.* Publishing is blocked on Figma-side work (create the
primitive masters, or accept mapping to the portal kit) — until then the mappings are
parse-valid but not publish-ready, which the file headers and CODE-CONNECT.md call out
explicitly so no one mistakes a placeholder URL for a live link.

---

<!-- ============================================================ -->
<!-- SCDS v2 — design-system redesign · sprint scds-v2 · Phase 1   -->
<!-- Six ADRs from one PR (tokens + type foundation). Trigger: a   -->
<!-- Cowork audit found the system shipped 2026-05-27, BEFORE the  -->
<!-- slop-blocklist (2026-06-16), and matches named banned         -->
<!-- patterns. Each ADR cites the audit + the rule it answers.     -->
<!-- ============================================================ -->

## 2026-06-22 — Dark palette: retire warm brown → TRUE NEUTRAL
**Stage:** 02-design (scds-v2)
**Type:** UX / design tradeoff
**Status:** accepted · supersedes the dark-ground values in `2026-05-28 — Brand-site Color palette adopted into tokens` · **overrides** the studio creative-default "Warm-ground palette over neutral gray" for dark mode

**Context.** The Cowork audit found the dark theme (`color.dark.*`: page `#0D0C0B`, set-in `#181512`, deeper `#221F1B` — all warm brown) is a direct match for `slop-blocklist.md` → Color: "Warm neutral ground + single red/vermilion accent (the current AI editorial default)". The system shipped 2026-05-27, before the blocklist existed (2026-06-16). The warm dark ground is the load-bearing half of that match (the vermilion accent stays — it is the brand mark).

**Decision.** Replace the warm dark primitives with a true-neutral (equal-RGB) ladder: well `#080807` · floor `#0A0A0A` · page `#0F0F0F` · raised `#141414 / #1A1A1A / #212121 / #2A2A2A / #333333`; text `#F5F5F5 / #B9B9B7 / #7C7C7A / #565654`; borders neutralised (`#2A2A2A / #1A1A1A`). New dark elevation model: the component **sinks below page** (rest = well `#080807`), and **rises to page on hover** (`#0F0F0F`) — separation is carried by hover, not a resting border. All semantic dark aliases were remapped off the deleted `dark.surfaceSunk/surfaceDeepSunk` onto the new ladder.

**Rationale.** Pure neutral is the cleanest possible departure from the "warm ground" tell while keeping vermilion as the sole chromatic signal — the accent now reads against neutral, not against a warm cast that muddied it. Equal-RGB grounds also make the accent's chroma unambiguous. Rest-state page↔well is **~1.05:1 by design** — the low-contrast "components emerge on interaction" register, not a flat field; hover carries the separation. All text tiers verified AA on the new grounds (primary 17–18:1, secondary 8.9–10.2:1, tertiary 4.58:1 on page).

**Alternatives considered.**
- *Keep warm, lower saturation only.* Half-measure — still reads warm-neutral, still matches the blocklist line. Rejected.
- *Cool-neutral (blue-leaning) dark.* Would fight the warm vermilion accent and read "tech-product". Rejected; true neutral lets the accent own the only hue.
- *Raise rest contrast above ~1.05:1.* Would lose the "emerge on interaction" register the low-contrast model is chosen for. Rejected; hover carries separation.

**Consequences.** *Easier.* Kills the strongest color slop match; accent reads cleanly. *Harder.* (1) **Overrides a studio creative-default** ("warm-ground palette", established 2026-05-20 ai-site) for dark mode — flagged for an `sc-content-sync` pass to propagate the dark-neutral override into `creative-defaults.md`, since other branded properties inherit that default. (2) ⚠ **Gate-2 on-device check (human, cannot self-certify):** pure-neutral near-blacks drift on wide-gamut Chrome (`p3-near-black-drift-chrome`) — verify on a P3 display; if they cast, apply a +1 red whisper at the darkest steps. (3) `token-map.md` + Figma Primitives now stale on `color.dark.*` — re-sync next pass (text styles still blocked, LEARNINGS 2026-06-07).

---

## 2026-06-22 — Light palette: desaturate surfaces to HSB(30,3,B), keep text warm
**Stage:** 02-design (scds-v2)
**Type:** UX / design tradeoff
**Status:** accepted · supersedes the light warm-gray surface values in `2026-05-28 — Brand-site Color palette adopted into tokens`

**Context.** Same audit. The light ground (`warmGray.100 #E3DFD8`, a saturated oatmeal) is the light half of the "warm neutral ground" tell. The brief keeps a warm hue but pulls saturation heavily down.

**Decision.** Desaturate the light **surface** steps toward HSB(30,3,B), keeping each step's brightness: page `#EBE7E4` (HSB 30,3,92) · raised/component `#F4F1ED` · floating `#FBF9F6` · plus the derived in-between surfaces (`warmGray.200/250/300/350` → `#D9D6D2 / #D5D2CF / #CDCAC7 / #C5C2BF`). **Text/ink steps stay warm** — ink remains `#1A1815`; secondary `#5F5C55`, disabled `#9A9388` unchanged. Added `warmGray.450 #6B665E` as a light tertiary tier.

**Rationale.** Splitting the desaturation — grounds recede to near-neutral-warm while ink stays inhabited-warm — reads as deliberate restraint rather than a flat gray repaint, and keeps the system off the saturated-oatmeal tell without going cold. All text/surface pairs re-verified AA (ink 12–17:1; secondary 4.61–6.35:1; the pre-existing "secondary not on deepSunk" restriction at 4.09:1 still holds; tertiary 4.63:1 on page, restricted off the deeper surfaces).

**Alternatives considered.**
- *Desaturate the whole ladder incl. text.* Ink at S=3% reads cold/digital — loses the warm authority. Rejected; brief explicitly keeps ink warm.
- *Pure neutral light (match dark).* Light has less dynamic range; a warm whisper on grounds keeps it from reading as a default gray UI. Rejected.

**Consequences.** *Easier.* Light grounds off the slop band; coherent with the neutral dark. *Harder.* The existing Color/Type pages re-render a hair lighter and less warm — expected (no AA regressions). `token-map.md`/Figma stale on `warmGray.*` light steps — re-sync next pass.

---

## 2026-06-22 — Type: thin→Black headers, Display/Text family split, Cascadia ≤10%
**Stage:** 02-design (scds-v2)
**Type:** UX / design tradeoff
**Status:** accepted · supersedes the display-weight direction in `2026-05-31 — Brand-site polish pass` (thin/light display) and the single combined `sans` stack from `2026-05-26 — Type composition tokens`

**Context.** Same audit. The system pairs thin/light display headers (`font.text.44` Thin 250; 60/84/120 Light 300) with a single combined `sans` stack — the "thin editorial headline" register the blocklist flags under Type, and the family that should distinguish heading from body never does (body renders in the Display cut). Cascadia mono also carried chrome labels (eyebrows/badges), over-weighting a code face in non-code chrome.

**Decision.** (1) **Headers thin→Black.** `font.weight.black` (900, NHG 95 Black) added; display `44/60/84/120` and section title `32` → Black; card title `24` → Bold (700). `@font-face` for 95 Black added to `fonts.css`. (2) **Family split.** New `font.family.display` (Display Pro, headings + section/subheads) and `font.family.text` (Text Pro, body + chrome); `sans` kept as a back-compat alias. Composites re-routed: 11–20 → Text, 24–120 → Display. Body stays Text Regular (400); chrome labels Text Medium (500). (3) **Cascadia ≤10%** — mono reduced to hex values / token names / code only; dropped from chrome labels. line-height + tracking kept canonical across the weight change.

**Rationale.** Heavy Black display is the opposite register from thin-editorial — it reads asserted/crafted, not generated. Extending Display below the hero (down to section/card titles) and routing body to the Text cut makes the two families do real work (display vs. body, sharp hierarchy) per the creative-default "one family, full range / two only if they refuse to compete". Pulling mono back to code/tokens stops a code face from speaking in brand chrome. All faces ship self-hosted (Thin→Black, Text 400/500/700) — no fallback gap.

**Alternatives considered.**
- *Black hero only, keep section/card medium.* Leaves the Display register as a one-off hero gesture. Rejected — brief extends Display to subheads.
- *Keep one `sans` stack, change weights only.* Body would stay in the Display cut. Rejected — Text cut is the correct body face.
- *Remove Cascadia entirely.* It earns its place on hex/token/code surfaces (re-affirmed Sprint 2). Rejected; reduced, not removed.

**Consequences.** *Easier.* Headlines read as the studio's, not a framework's; families finally separate. *Harder.* Component/section type re-renders heavier at headings — Phase 2/3 verify optical tracking at Black display sizes. `type-system.md`/Figma text styles stale (Figma text-style writes still blocked, LEARNINGS 2026-06-07) — hand-edit list grows (Black weight, family split). `sc-content-sync` flag: "no mono in chrome labels" is a studio-wide addition.

---

## 2026-06-22 — Divider hierarchy via channel-triplet rgba tokens
**Stage:** 02-design (scds-v2)
**Type:** Architecture
**Status:** accepted

**Context.** The system separated content with solid hairline borders (`warmGray.250` etc.), which blurs into the larger "outline-stroke" problem the audit flags. A content separator is distinct from an element edge, and the new low-contrast dark model needs separators that read at any ground without a hard line.

**Decision.** Add `color.divider.{subtle,default,strong}` semantic tokens composed via the channel-triplet pattern (`channel-triplet-rgba-tokens`): new primitives `color.whiteRgb` (`255 255 255`) and `color.inkRgb` (`26 24 21`), with dividers emitted as `rgb(var(--sc-p-color-{ink,white}-rgb) / <alpha>)` — dark = white 5/9/15%, light = ink 6/10/16%. These are **content separators, not element edges** — explicitly not an outline-stroke violation per the blocklist.

**Rationale.** Alpha-over-ground separators self-adjust to whatever surface they sit on (critical when dark rest grounds sit ~1.05:1 apart) and never read as a hard structural frame. The channel triplet is the studio-sanctioned way to compose alpha from a token without hardcoding channels; modern `rgb(R G B / A)` is fully supported on the Gate-3 browser set. The composed `rgb(var()/a)` lives where the build's color passthrough emits it verbatim — no generator change.

**Alternatives considered.**
- *Solid neutral hairlines per step.* Re-introduces the hard-line look the redesign is moving away from; needs a separate primitive per mode per ground. Rejected.
- *Bake alpha into hex primitives (8-digit).* Loses ground-adaptivity (alpha-over-ground is the point) and can't be re-tinted centrally. Rejected.

**Consequences.** *Easier.* One separator system that works on every ground, both modes; Phase 2 moves components from solid borders to these. *Harder.* Semantic `divider.*` values are composed `rgb(var()/a)` strings, not pure DTCG aliases — a documented exception to the alias-only rule (they reference a primitive var, contain no hex/px). Figma has no native equivalent — mirror as solid approximations or skip.

---

## 2026-06-22 — Phosphor as the default icon family
**Stage:** 02-design (scds-v2)
**Type:** Stack / tech choice
**Status:** accepted

**Context.** Icons were hand-authored inline `<svg>` (3 remaining in `src/components` / `src/sections`), with no shared weight/size contract — and stroked icon containers are a named blocklist match. The system needs one icon family with a regular/bold/fill range and a token-driven size.

**Decision.** Adopt `@phosphor-icons/react` (`^2.1.10`) as the studio default icon family. Add `size.icon.{sm,md,lg}` (16/24/32, on the space ladder) and an `Icon` wrapper (`src/components/Icon/`) — default weight `regular`, `bold` + `fill` exposed, color via `currentColor`, size via font-size token. Installed in this worktree (which **is** the shipping feature branch, per `worktree-dependency-installs`) and shipped via `package.json` + lock in this PR. The inline-SVG swap-out is Phase 2.

**Rationale.** Phosphor has a regular/bold/fill/thin/light range at one optical size, MIT-licensed, tree-shakeable (named imports; the wrapper pulls only `IconContext`, so the bundle is unaffected until icons are used). A wrapper centralises the weight/size/color contract so no component reaches for a raw size or a stroked container.

**Alternatives considered.**
- *Keep hand-authored SVGs.* No shared contract; every icon a one-off; the mark SVGs stay bespoke anyway. Rejected for UI glyphs.
- *Lucide / Heroicons.* Lucide is stroke-only (wrong register for a fill-elevation system); Heroicons has a narrow weight range. Rejected — Phosphor's fill weight matches the fill-not-stroke direction.

**Consequences.** *Easier.* One icon vocabulary with states; Phase 2 swaps the 3 inline SVGs cleanly. *Harder.* First runtime dependency beyond React; `sc-content-sync` flag — "Phosphor as default icon family" is a studio-wide addition. The brand mark stays bespoke SVG (it is identity, not a UI glyph).

---

## 2026-06-22 — Dedicated off-brand focus-ring token
**Stage:** 02-design (scds-v2)
**Type:** UX / design tradeoff
**Status:** accepted · supersedes routing `color.border.focus` through `{color.shu.*}`

**Context.** Focus was routed through the brand vermilion (`border.focus` → `shu.500/400`), which fails AA at 11px on some grounds (documented exception) and conflates the focus affordance with the brand accent. `focus-ring-token` calls for a dedicated token sized for AA per mode when the accent fails on a ground.

**Decision.** Add a dedicated `color.focusRing.{light,dark}` primitive — cool-neutral, OFF the shu band and off every status hue — light `#1F2024`, dark `#E8E8EA`; repoint semantic `color.border.focus` to it. Verified AA+++ on every ground each mode touches (light 11–15:1, dark 14–16:1).

**Rationale.** Cool-neutral is unmistakably "structural focus": it can never be confused with vermilion (brand) or with green/orange/blue/oxblood (status), and its faint cool cast separates it from the warm content palette. A single chromatic focus (e.g. blue) would collide with the info status hue; neutral sidesteps that and clears AA with huge margin on both near-black and near-white grounds.

**Alternatives considered.**
- *Keep shu focus.* Fails AA at 11px; conflates focus with brand. Rejected — the reason this token exists.
- *Chromatic (blue) focus.* Conflates with `status.info` blue. Rejected.
- *Reuse ink/near-white text color.* Not dedicated; reads as a heavy border, not a ring. Rejected — own primitive, cool cast distinguishes it.

**Consequences.** *Easier.* Focus passes AA everywhere and is hue-distinct from brand + status. *Harder.* One more semantic→primitive pair; Phase 2 routes every `:focus-visible` through `--sc-color-border-focus` (with the existing 2px width + 2px offset). Figma mirror gains a focus variable.

---

## 2026-06-22 — Bump vite 6.4.2 → 6.4.3 (close npm-audit high advisory)

**Status:** accepted

**Decision.** Raise the `vite` devDependency floor `^6.4.2` → `^6.4.3` and refresh
`package-lock.json` (resolved `vite@6.4.3`). `@vitejs/plugin-react@4.7.0` left unchanged — its
peer range (`^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0`) already covers 6.4.3, so no second bump.

**Why.** `npm audit` reported one high-severity advisory against `vite <=6.4.2`
(GHSA-v6wh-96g9-6wx3 — launch-editor NTLMv2 hash disclosure; GHSA-fx2h-pf6j-xcff —
`server.fs.deny` bypass; both Windows dev-server only). The committed lockfile pinned exactly
`6.4.2`, the top of the vulnerable range. `6.4.3` is the patched release on the 6.x line (npm
dist-tag `previous`). Raising the floor — rather than only refreshing the lockfile — stops anyone
re-pinning back to `6.4.2`.

**Why not vite 8 (current latest).** Jumping two majors (6 → 8) for a Windows-dev-only CVE on a
static site (vite is build/dev only — no production runtime, real-world risk low) trades a
known-safe patch for config/plugin-compat regression risk. The minimal in-major bump is the
surgical close; a major upgrade is revisitable as its own scoped task.

**Verified.** `npm audit` → 0 vulnerabilities; `npm run tokens:build` → exit 0; `npm run build` →
exit 0 (vite 6.4.3, full module transform, Phosphor present after the SCDS-v2 merge); `npm run
dev` → serves the showcase HTTP 200 (`Shokunin Crafthouse · Component Primitives`).
