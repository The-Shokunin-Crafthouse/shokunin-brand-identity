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

**Correction 2026-06-24 (supersedes the "Publishing is blocked on Figma-side work"
framing above).** The original entry treated `figma connect publish` as merely
deferred until the Figma masters exist and the real node URL is filled in — i.e. a
manual step Levi could run any time. That was wrong for this account's plan. Publishing
is **plan-gated**: `figma connect publish` needs a personal access token carrying the
**`code_connect:write`** scope, and that scope is only offered on Figma
**Organization / Enterprise** plans. This account is on **Professional**, where the
scope does not appear in the token-creation UI (Figma → Settings → Security → Personal
access tokens) — confirmed 2026-06-24. No usable token can be minted from this account,
so publishing is blocked regardless of the Figma masters. The plan gate is therefore the
**primary** blocker; the missing 1:1 Figma masters (original entry) are a secondary one.
The setup (dep, `figma.config.json`, `Button.figma.tsx`, npm scripts) is complete and
`npm run figma:parse` passes (EXIT 0); it is **parked and will publish unchanged** once
the account is on a qualifying plan. Unblock recipe lives in
`src/components/CODE-CONNECT.md` → "Publishing — BLOCKED (plan-gated)".

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

---

## 2026-07-08 — Fix `surface.deepSunk` dark-mode collapse onto `surface.sunk`
**Stage:** 03-build
**Type:** Bug fix / token correction
**Status:** accepted

**Context.** Auditing the scds-v2 TRUE NEUTRAL repaint (2026-06-22) against a client-portal screenshot (New client / New project / Invite a client cards on pure-black page), `surface.deepSunk` dark mode was found aliased to `{color.dark.well}` — identical to `surface.sunk`'s dark value. Its own description calls for "one step beyond surface.sunk," which held in light mode (`warmGray.300` vs `warmGray.200`) but silently collapsed in dark mode during the repaint, leaving nested/hover states with zero visual separation from resting card ground.

**Decision.** Repoint `color.surface.deepSunk` dark mode from `{color.dark.well}` to `{color.dark.raised2}` (`#1A1A1A`). Confirmed by owner: `deepSunk` should read lighter than `surface.page`, not darker — it belongs to the same lifted-above-page family as `surface.raised` (`raised1`, `#141414`), one step further up (`raised2`). This preserves the Phase 2 elevation model (`color.dark.*`: "component sinks BELOW page (well), hover rises to page level") while giving nested/hover states inside a card a distinct step from both the card ground and the `raised` state.

**Rationale.** The ladder now reads, darkest to lightest: `well` (`#080807`, card/`sunk` resting) → `surfacePage` (`#0F0F0F`) → `raised1` (`#141414`, `raised`) → `raised2` (`#1A1A1A`, `deepSunk`). Every step distinct, page sits between resting-card and lifted states as intended.

**Alternatives considered.**
- *Point deepSunk to `floor` (`#0A0A0A`, darker than well).* Rejected — floor is darker, not lighter than page; contradicts the confirmed intent and would still collide visually with `well`/`sunk` at a glance.
- *Leave deepSunk == sunk, treat as intentional simplification.* Rejected — description explicitly promises a distinct step; silent collapse is a token-drift bug, not a design call.

Compiled to `tokens.css` (`scripts/tokens-to-css.mjs`); verify `--sc-color-surface-deep-sunk` resolves to `--sc-p-color-dark-raised2` in the `.dark` block.

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

---

## 2026-07-09 — Brand accent rebrand: retire vermilion `shu` → teal `#038E93`
**Stage:** 02-design / 03-build
**Type:** Brand direction (owner-directed)
**Status:** accepted

**Context.** Owner directed a brand-accent change from the vermilion `shu` scale to teal, anchored at `#038E93`, with the full red scale removed. Overrides the standing "vermilion + status hues untouched" constraint — an owner-authorized brand-direction call.

**Decision.** Replace the entire `color.shu.*` primitive scale with `color.teal.*` (10 steps, `#038E93` = 500; 50–900 derived, monotonic, contrast-checked). Repoint semantics `brand.accent`→teal.500, `brand.accentDeep`→teal.700, `interactive.hover`→teal.500/400, `interactive.active`→teal.700/500. **Primitives named `teal`, semantics stay `brand.*`** (owner call). Add **`brand.accentFill`→teal.600** because white text on teal.500 fails AA (3.97:1); teal.600 passes (5.20:1) — 500 stays the mark/non-text color. `status/*` untouched (error stays oxblood, now doubly distinct from teal). Repo-first: authored in `tokens/primitives.json`+`semantic.json`, compiled to `tokens.css`, Figma library `Primitives` renamed shu→teal (aliases auto-followed). Merged PR #23.

**AA.** accentDeep 700 on light 5.78:1 (beat shu's 5.3); accent 500 hover 3.23:1 (documented exception, underline mitigant, learning #67); dark interactive 400/500 on page 5.84/4.83:1.

**Follow-up (Tier 2, open).** ~60 `shu`/`vermilion`/朱 references remain in reference-site *prose* (Color narrative, Mark rationale, component essays, nav labels) + CSS class names — a separate brand-voice copy pass, not done here.

---

## 2026-07-09 — Button redesign: pill + arrow, rest-neutral/hover-teal, neumorphic
**Stage:** 03-build
**Type:** Component design (owner-directed)
**Status:** accepted

**Context.** Owner supplied a button mock. Neither the brand `UI/Button` nor the portal `Button` master survives as-is — one canonical Button is built to the mock.

**Decision.** Pill radius, trailing arrow, NHG Text medium label (no uppercase — owner chose NHG-per-spec over the mock's placeholder mono). Variants: **Primary** rests neutral (`surface-raised`) with a button-only neumorphic 4-shadow and turns teal on hover (`brand.accentFill` teal.600 + white, AA 5.20) → teal.700 press — *the accent is a hover state, never resting*. **Secondary** ink outline → teal on hover/focus. **Tertiary** (renamed from `ghost`) persistent teal ghost via `brand.accentDeep` (teal.700, AA 5.78). New **`shadow` token type** added to the compiler + button-scoped **`shadow.control.raised`** (4 layers composed from ink/white channel-triplets, mode-aware) — semantic to controls only; no other element carries a shadow. Merged PR #24.

**Accepted as-is (owner):** primary rest fill is intentionally low-contrast on the warm ground (shadow carries it); 11px `label-chrome` label reads smaller than the mock.

---

## 2026-07-09 — SCDS library IA restructure + component sort (form-named)
**Stage:** 03-build
**Type:** Design-system architecture
**Status:** accepted (in progress — residuals noted)

**Context.** All three files' component masters were consolidated into the SCDS library file (`0zVoxaLJQkjHENYJlQk1VT`) on one `_Archive` page (167 masters). Owner directed: section-header pages, each section its own pages, one form-named page per component (a page may hold variant siblings), **name by form not function**.

**Decision.** IA = labeled `— SECTION —` header pages (Figma dividers can't carry text labels — API forces dashes; labeled header pages are the workaround). Sections: **Foundations** (Principles/Color/Type/Space/Mark/Motion) · **Global** · **Brand Site** · **Agency Site** · **Client Portal** · **Archive**. Sorted 109 masters into form-named pages, dropping `UI/`/`Portal/`/`Admin/`/`Mobile/` prefixes; Mobile/*→Global `Device/*`; `MarkIcon-Shu`→`MarkIcon-Accent`. Dedup (owner delegated): brand-file masters canonical, portal-file duplicates retired. Screen assemblies not kept as masters (owner: rebuild as auto-layout frames of component instances — deferred). Type/* retired → text styles (deferred, desktop hand-edit, font-load blocked via MCP). Controls/Switch retired (UI/Toggle survives).

**Method note.** Cross-file moves = human cut/paste (Plugin API can't move nodes between files). Intra-file page sort = scriptable via `appendChild`, but text-bearing masters intermittently throw an unloaded-font error on reparent (Haas Grot Text Trial won't load via MCP); per-master `try/catch` moves everything movable and isolates blocks. One block: `UI/Textarea` (→ manual drag to Global `Field`).

**Residuals (open).** UI/Textarea manual move; screen-assembly rebuild as instance-frames; Type text styles (desktop); `MarkIcon-Accent` fill likely still raw vermilion (recolor to teal); dup page names `Row`/`Card` across Agency+Portal sections (accepted — sections disambiguate). Downstream still open: Figma Button master restyle to match code; library publish (Stage 3); consumer rebind (Stage 4); Code Connect re-point (Stage 5).

---

## 2026-07-23 — Drams component tier lands (HIGH+MEDIUM) + `color.signal.*` tokens
**Stage:** 03-build
**Type:** Component design / token architecture
**Status:** accepted

**Context.** Owner approved implementing the Drams investigation (`stages/03-build/drams-component-mapping.md`) at HIGH + MEDIUM scope — Switch excluded (owner did the toggle himself, Figma-side). Concurrently, the client-portal redesign (Figma `WQrPwzb3wkwNEn9H4bygff` Sandbox) introduced two hues with no token backing: a red LIVE broadcast badge and a chartreuse in-progress/live-dot signal.

**Decision — components.** (1) `ProgressIndicator` bar reskinned per Line Volume/Visible Track (always-visible min-fill = one track-height) and gains an `interactive` scrubbable variant: pointer-drag + click-to-seek, `role="slider"` keyboard support, 48px token-derived hit slop, active track thickens 4→6px (`size.progress.bar-height-active`). (2) `Button` press gains the spring feel: press-in reuses `motion.press.*` (160ms), release overshoots via new `motion.easing.springOut` (`cubic-bezier(0.34,1.56,0.64,1)`) + `motion.duration.pressRelease` (220ms) — the CSS approximation of the studio tap-scale spring; springs-for-interactive-affordances now has a concrete token pair. (3) New primitives `SegmentedControl` (radiogroup, roving tabindex, sliding raised-fill indicator — fill-only elevation) and `Stepper` (spinbutton, ± Phosphor icon buttons, hold-to-repeat, mono readout). Both zero-new-token, five states, reduced-motion functional. Registered on the reference site (Components nav) with `.tokens.md` docs.

**Decision — signal tokens.** New primitive group `color.signal.*`: `live #C8281C`, `liveBright #DA5C4D`, `progress #FBFF00`. Semantics `color.signal.live/onLive/progress/onProgress` (mode-aware; live brightens on dark). Rationale: LIVE is a broadcast signal, deliberately red and OFF the brand band (learning #39) and distinct from `status.error`'s oxblood; the retired vermilion values return as a *signal*, not brand accent — the 2026-07-09 rebrand retired them from the brand tier only. Chartreuse `progress` is the attention hue for in-progress/active pills and live dots (portal redesign consumes it; portal ships local fallbacks until this deploys, then the token snapshot takes over). AA: live-on-light badge 5.0:1+ with warmGray.100 text at 11px bold; progress carries warm-gray-900 ink both modes (≈15:1).

**Out of scope / open.** Drams LOW tier (motion references only); Switch (owner's); motion-duration retune to 120/220/450 (still pending from v2); SCDS Figma library sync of the four component changes + signal variables (tracked with the library restructure Stages 3–5).

**Addendum (same day) — status-hue drift resolved Figma→code.** The SCDS library file's status variables carried five values the token JSON didn't: `info/light #2D5AD8`, and dark-mode `success #388F63 · warning #C94E28 · info #3866E8 · error #732020` (deep fills, replacing the pastel dark set). Owner directive "code matches the Figma" applied: JSON updated to the Figma values, `tokens.css` recompiled. Note: dark-mode status hues now read as fills (consistent with the new filled-pill language); any dark-surface usage of status color as body TEXT should get an `-ink`/on-token check at next contrast pass (learning #56). The Figma Color-page swatch tiles' printed hexes are regenerated to match as part of the Color-page build-out.

---

## 2026-07-27 — SCDS v2 Phase 2: fill-only elevation (component de-framing)
**Stage:** 02-design → 03-build (scds-v2 sprint, Phase 2)
**Type:** Component design / token architecture
**Status:** accepted (reversible, in-standard, in-scope — decide-and-log)

**Context.** scds-v2 targets the slop-blocklist match "outline / stroke borders" (the shipped DS's resting `border: 1px solid` frames on Card/Input/Badge etc.). Phase 1 (tokens + type, PR #18) is merged; Phase 2 refactors the components off resting strokes onto fill-only elevation. The 2026-07-25 SCDS audit (`SCDS-AUDIT-2026-07-25.md`, PR #31) confirmed the direction and surfaced that the *tinted-fill* conversion of status components depends on colour tokens that don't exist in code yet.

**Decision — hue-independent slice (this PR).** Removed resting stroke frames; elevation now carried by surface fill alone.
- **New token** `shadow.control.inset` (`--sc-shadow-control-inset`, `$type: shadow`, mode-aware, composed from the ink/white channel-triplet primitives — learning #15). Sibling to `shadow.control.raised`; semantic to controls.
- **Card** — all three variants lose the resting border. default (sunk) / elevated (page) separate by fill weight; `interactive` gains an inset shadow **and an explicit `:focus-visible` ring** (closes a Gate-3 five-states gap — it previously had none) on hover/focus.
- **Input** — box frame → filled well (`surface-sunk`) + single bottom rule. Focus lifts fill to `surface-page` and doubles the bottom rule to `border-focus` (2px via inset shadow, no reflow); filled → `border-strong`; error → `status-error`. "fill-shift + bottom-border" per the sprint contract.
- **Button** — `secondary` ink outline → fill-only chip (`surface-sunk` rest, ink label AA; `surface-hover` + teal label on hover/focus, the documented transient AA exception, learning #67); `disabled` → transparent border + `surface-sunk` fill (no stroke frame). Inline `<svg>` arrow → Phosphor `ArrowRight` (scds-v2 default icon family — closes the Phase-2 inline-SVG→Phosphor item; Icon wrapper's own docstring flagged this).
- **Avatar** — resting outline dropped; sunk fill seats it.
- Reference-site demo copy corrected (Card section "no shadow anywhere / hairline / strong frame" was now false; SegmentedControl + Specimen cross-refs to "Cards/Buttons use hairlines"). `.tokens.md` docs + CSS headers updated to match.

**Deferred (NOT done here) — needs gated colour tokens.** Badge (outline → tinted fill) and Alert (hairline frame → tinted surface) require status `-bg`/`-ink` colour tokens that do not exist in the token JSON. Those are the audit's **Block 2** colour work, which is **Figma-first and gated on the Gate-1 brand-hue decision (red `shu` vs teal)**. Per the studio rule "never improvise a token value," these conversions are held until Block 2 lands rather than hand-authoring colour values. Badge/Alert keep their current outline treatment for now.

**Gate-2 on-device (human, not self-certified).** Rest-state page↔component separation is ~1.05:1 by design (fill-only); pure-neutral near-blacks drift on wide-gamut Chrome (learning #11). Dark-mode rest legibility must be confirmed on Levi's P3 display; if it fails, apply the +1 red-whisper at the darkest steps per the sprint CONTEXT. Not claimed as a pass on this sRGB session.

**Verification.** `tokens:build` + `build` exit 0; computed-style checks in the running showcase confirm all five components render fill-only with correct state tokens (Card sunk/page + inset; Input filled + bottom rule + focus; Button Phosphor arrow viewBox 256 + secondary/disabled fill; Avatar no border). Reduced-motion paths intact.

---

## 2026-07-28 — SCDS audit Block 0: brand hue, theming architecture, space/micro rule (Gate 1)
**Stage:** 02-design (scds-v2, pre-Block-2/6)
**Type:** Brand direction / design-system architecture (owner-directed, Gate 1)
**Status:** accepted

**Context.** The 2026-07-25 SCDS audit (`SCDS-AUDIT-2026-07-25.md` §6, backlog 0.2–0.4) found three unresolved Gate-1 questions blocking Block 2 (colour), Block 6 (theming), and Phase 3 (site reskin): the flagship site (`shokunincrafthouse.com`) ships a red `shu` ramp while SCDS + the shared token file ship teal; no theming mechanism exists to express any per-site divergence; and `space/micro/*` sits on a 2pt grid against the stated 4/8pt rule. Owner decided all three in one pass.

**Decision — brand hue: teal, everywhere.** Confirms and extends the 2026-07-09 rebrand (`color.teal.*`, this repo) to the flagship site. `shokunincrafthouse.com`'s `--sc-p-color-shu-*` red ramp is retired at the token level — re-skin to teal, layout/WebGL/scroll-scenes untouched (already-exempt experiential surface, per `CC-PROMPT-scds-pipeline.md` decision 2). No `shu`/red ramp enters SCDS as a primitive. Unblocks audit Block 2 (colour correctness) and Block 6 (theming) — both were gated on this.

**Decision — theming architecture: third `Brand` collection.** Approved as recommended (audit §6): `Brand` collection, modes `Studio | Clients | Docs`, holding only the ~12 genuinely divergent aliases (accent ramp, font families). `Semantic` stays `Light | Dark` only — does not grow site modes. Figma Professional's mode-per-collection cap must be re-verified against current billing before Block 6 executes (audit flagged 4/collection at time of writing; unverified since).

**Decision — `space/micro/*`: widen the rule, keep the tier.** The 2pt ladder (`2·6·10·14·18·22`) is retained for its existing real uses (switch thumb, progress hit-slop, `padding-block/sm` and similar chrome-only cases) rather than retired and re-derived onto 4/8pt. The studio 4/8pt rule (studio-memory §3, `WORKSPACE.md` §3) is amended with a formal exception: a 2pt micro-tier is permitted for sub-8px chrome geometry where an 8pt (or even 4pt) step would be visually too coarse. This is a rule-widening, not a one-off — future sub-8px chrome values should route through `space.micro.*`, not a new ad-hoc px value.

**Unblocks.** Task queue for this sprint: Figma Block 2 (colour, `-ink` tier, divider/border realias, warmGray ramp rebuild), Block 6 (Brand collection build), and eventually Phase 3 (vermilion→teal chapter grounds, motion philosophy pick via `sc-motion`). `shokunincrafthouse.com` re-skin itself is a separate scoped pass — token-level only, tracked outside this sprint's Figma-side blocks.

---

## 2026-07-28 — SCDS audit Block 2: colour correctness fixes (Figma, code-side pending)
**Stage:** 02-design (scds-v2, Figma-only this pass)
**Type:** Design-system token correctness
**Status:** accepted (reversible, in-standard, in-scope — decide-and-log)

**Context.** Unblocked by the same-day Block 0 hue/theming ADR above. Fixed the audit's Block 2 items that are pure Figma variable operations (no font dependency, no component rewiring). Full detail in `SESSION-RESUME.md`.

**Decision.** (1) **`-ink` tier added** (learning #56): new semantic tokens `color/status/{success,warning,info}-ink` + `color/interactive/hover-ink`, each hue-locked and computed to clear AA (≥4.5:1) on their declared ground — success-ink 4.73:1 (L), warning-ink 4.57:1 (L) / 4.51:1 (D), info-ink aliases the already-passing light value / 4.55:1 (D), hover-ink 4.71:1 (L). Modes that already passed as base hue (success/dark, info/light, hover/dark) alias the existing token rather than introduce a redundant near-duplicate. Base hues are untouched — still the fill/border/dot color. **Not yet wired into any component; that's Block 4.** (2) **`border/subtle`↔`border/default` light-mode aliases swapped** — subtle was measurably stronger (1.44:1) than default (1.22:1), inverted from dark mode; now matches dark's correct direction. (3) **`border/focus` repointed** from `teal/500` (3.23:1, the weaker non-text-minimum-only value) to the previously-orphaned `focusRing/light`+`focusRing/dark` primitives (11–15:1 range) — the correct token was already sitting in the file (learning #32) and simply wasn't referenced. (4) **`dark/border`/`dark/borderSubtle` deduped** — both were exact-value standalone primitives duplicating `dark/raised4`/`dark/raised2`; now alias them instead, single source of truth. (5) **`text/onAccent` vs `brand/accent`** resolved via variable descriptions, not a value change — documents that `text.onAccent` (white) must pair with `brand.accentFill` (5.20:1), never `brand.accent` (3.97:1, the mark/non-text color).

**Found already fixed / not actually broken.** Audit P1-3 (`color/divider/*` raw/identical hex) — re-verified in Figma and found genuine alpha-graduated hierarchy already in place (light: ink-rgba at 0.06/0.10/0.16 alpha; dark: white-rgba at 0.05/0.09/0.15), almost certainly landed as part of scds-v2 Phase 1's "divider hierarchy (channel-triplet rgba)" line item. The audit was current as of 2026-07-25; this was fixed sometime between then and now. No action needed — audit item can be closed as already-resolved.

**Deferred — not mechanical.** `warmGray` 200–400 span rebuild (P2-8, the four-near-identical-steps-then-a-cliff ramp) is a perceptual redesign, not an alias fix — needs a dedicated pass. `motion/press/release-duration` naming (audit P2-11) turned out to be a **code-generator mapping gap** (Block 8), not a Figma-side duplicate — Figma's name is already correct and singular.

**Code sync outstanding.** All of the above are Figma-only. `tokens/primitives.json` / `tokens/semantic.json` and the generated `tokens.css` do not yet carry the `-ink` tier, the border/focus repoint, or the dark border dedup. Tracked for the Phase-3 code-sync pass (`CC-PROMPT-scds-pipeline.md`).

---

## 2026-07-28 — SCDS audit Block 6: hold theming collection (moot on hue)

**Stage:** 02-design (scds-v2, pre-Block-8)
**Type:** Scope decision (owner-directed)
**Status:** accepted

**Context.** Block 6 (third `Brand` collection, modes Studio|Clients|Docs) was recommended in the audit mainly to carry the brand-hue split (red vs teal per site). Block 0 resolved hue to teal everywhere, removing that justification. Remaining divergence (studio site's 5 extra undeclared font families, portal-specific layout vars) doesn't live in Figma variables today.

**Decision.** Hold Block 6. Do not build the 3-mode collection on spec. Revisit only if Block 8 (code sync) surfaces real per-site Figma-variable-level divergence that needs it.

**Consequences.** Sprint proceeds straight to Block 1 (desktop font step)/3 (typography)/5 (foundations)/warmGray ramp/Block 8 (code sync) without theming infrastructure. Zero rework risk — collection can be added later with no migration cost since nothing depends on it yet.

---

## 2026-07-28 — SCDS audit Block 3: typography (Figma) — lineHeight/letterSpacing variable-binding platform limit discovered

**Stage:** 02-design (scds-v2, Figma-only this pass)
**Type:** Design-system token correctness / Figma platform limitation
**Status:** accepted

**Context.** Executing audit Block 3 (typography, `SCDS-AUDIT-2026-07-25.md` §3.1–3.6). `font/lineHeight/*` (5 ratio tokens: flat 1.0, tight 1.1, snug 1.2, base 1.5, relaxed 1.55) and `font/tracking/*` (9 tokens) existed as unconsumed documentation (P2-1). First attempt bound them to all 21 non-duplicate text styles via `TextStyle.setBoundVariable('lineHeight'/'letterSpacing', variable)` — the call succeeded with no error, but a fresh re-read showed Figma had silently coerced every bound value to unit `PIXELS`, taking the raw ratio float as an absolute pixel amount (e.g. `lineHeight: {unit:'PIXELS', value:1.1}` — a 1.1px line height, collapsing the text; `letterSpacing: {unit:'PIXELS', value:-0.018}` — effectively zero tracking). Confirmed against `figma-use` skill reference (`variable-patterns.md`, `api-reference.md`): "fontSize, fontWeight, lineHeight are NOT bindable via setBoundVariable — set these directly." `letterSpacing` isn't documented as blocked but empirically hits the same PIXELS-coercion bug when bound.

**Decision — revert and go literal.** Unbound `lineHeight`/`letterSpacing` on all 23 touched styles (`setBoundVariable(field, null)`) and restored them as literal `{unit:'PERCENT', value}` — the only mode that renders correctly. The 6 `font/lineHeight/*` and 9 `font/tracking/*` primitives remain **documentation-only reference tokens** (unconsumed by live bindings), same status as before this pass but now every text style's literal percent value matches one of these ratios by *value*, so the reference tokens document the applied scale accurately even though Figma can't bind them live. This is a **Figma platform limitation**, structurally identical to the already-documented `motion/easing/*` code-only tier (2026-07-25 audit §4a) — variable-bound line-height/letter-spacing on Figma TextStyles is pixel-only, with no live font-relative-percent binding mode. Logging it here so no future session re-attempts the same binding and re-discovers the same bug.

**What actually landed (all literal, verified via fresh re-read, all render correctly):**
- All 21 non-duplicate text styles now set explicit `lineHeight` + `letterSpacing` (previously only `fontSize`/`fontFamily`/`fontWeight` were bound to variables; `lineHeight`/`letterSpacing` were hardcoded already — this pass corrected/normalized those hardcoded values to match the declared ratio scale exactly, closing P2-1's "hardcoded, can't retarget system-wide" complaint at the *value-consistency* level, not the live-binding level).
- **`text/body/nav/header`** + **`text/body/nav/node`**: `fontSize` now genuinely bound to `font/size/12`/`font/size/13` (fontSize binding on TextStyle *does* work correctly — only lineHeight/letterSpacing hit the bug). `lineHeight: AUTO` replaced with literal `110%` (tight ratio) on both, closing P2-1's `AUTO` violation.
- **Display tracking tuned** (3.4): `sm` (44px) 0%→`-1.8%`, `md` (60px, already-tuned reference) stays `-2.5%`, `lg` (84px) 0%→`-4%`, `xl` (120px) 0%→`-4%` (plateau at the ramp's most-negative token — matches how real optical-tracking curves flatten at the largest sizes rather than tightening indefinitely; documented judgment call, not an unexamined default).
- **New primitive** `font/lineHeight/loose` (2.0, `VariableID:213:2`) added to complete the ramp — `text/mono/flow`'s 200% line-height had no existing token; the ramp now covers 100/110/120/150/155/200%.
- **3 `*/light` duplicate text styles deleted** (3.2): `text/body/{dense,default,lead}/light`. No Light-weight Haas Grot Text cut exists in either the Trial (confirmed this session, `listAvailableFontsAsync`) or documented Pro font list — giving them "an actual light weight" is blocked on the same font-installation gate as Block 1.2. Deletion (the audit's explicit alternative to fixing) closes P2-2 without waiting on that blocker; trivial to recreate once Pro Text ships a Light cut.
- **`text/display/xsm-32` renamed → `text/display/xs`** (3.5): dropped the embedded-pixel-value name (P2-3's flagged defect). Kept as a *distinct* style from `text/title/section` rather than merged/deleted — both sit at 32px Haas Grot Disp 95 Black but serve different semantic roles (a display-ramp step vs. a section title), which is a legitimate type-scale pattern (two styles, same size, different role), not a true duplicate. Style rename preserves all existing node references (renaming a Figma style doesn't detach consumers, unlike an ID change).

**Not done this pass (needs the Pro font gate, not a mechanical fix):** 1.1/1.2 (font rebind) — checked again this session, `Neue Haas Grotesk Display/Text Pro` still absent from `listAvailableFontsAsync()`, unchanged from last session.

**Declared instead of fixed (3.6 — type-scale ratio):** Sizes 11→120 span ratios 1.077–1.428 with no single ratio held (confirmed, matches audit). **ADR: accept the hybrid scale as-is.** Retrofitting a single modular ratio across an already-built, already-in-production 26-style system risks a much larger visual-regression sweep for a documentation-purity gain; the existing sizes are individually reasonable at their use points (11/12/13/14/16/20/24/32/44/60/84/120) even though they don't share one multiplier. No ratio is declared; this hybrid is the accepted system.

**Verification.** Fresh `getStyleByIdAsync` re-read on every touched style post-fix confirms `unit: 'PERCENT'` (not `PIXELS`) on all lineHeight/letterSpacing values, and nav fontSize bindings resolve to the correct px through their variables. No visual regression risk — Figma renders literal PERCENT identically to how these styles rendered before this pass, just now internally consistent with the documented ratio/tracking scale.

---

## 2026-07-28 — SCDS audit Block 5: foundations pages, grid styles, naming, effect-binding platform limit

**Stage:** 02-design (scds-v2, Figma-only this pass)
**Type:** Design-system documentation / token correctness
**Status:** accepted

**Context.** Executing audit Block 5 (`SCDS-AUDIT-2026-07-25.md` §5.1–5.6, P2-14/15/16/11, §4c).

**Decision — foundations pages filled (5.1).** `Principles`, `Color`, `Type`, `Space`, `Motion` (previously empty shells, P2-14) now each hold a real documentation frame: Principles — the 7 studio design principles as heading+body pairs; Color — swatch grids for the warmGray ramp (14 steps), teal ramp (10), dark elevation ramp (8), status colours (7, light mode), signal (3), focus ring (2), each swatch's fill genuinely bound to its Figma variable (not a hand-picked hex); Type — one live specimen row per text style (23, post-Block-3 cleanup) rendered in its actual bound style, confirming the Block 3 tracking/line-height work visually; Space — bar chart of `space/*` (11 steps) and `space/micro/*` (6 steps, labeled as the documented 2pt exception). Screenshotted and visually verified — the Color page's neutral-ramp render **visually confirms P2-8** (200→350 are near-indistinguishable, 400 is a visible jump), corroborating the audit finding ahead of the ramp-rebuild task.

**Decision — grid styles added (5.2).** 5 new grid styles `grid/{390,768,1024,1440,1920}` (P2-15) — column-count and margin scaled by breakpoint (4/8/12/12/12 columns; 16/24/32/64/96px margin; 16/24/24/24/24px gutter), matching the studio's 8pt-scale verification breakpoints (studio-memory §3).

**Decision — naming normalised (5.5).** Only 2 variables were genuine kebab-leaf outliers against the dominant slash+camelCase convention (`color/dark/surfacePage`, `brand/accentDeep` etc. — confirmed correct as-is): `color/text-on-inverse` → `color/text/onInverse`, `color/surface-inverse` → `color/surface/inverse`. Renaming a Figma variable doesn't break existing bindings (reference is by ID) — zero consumer impact.

**Decision — `inkRgb`/`whiteRgb` added (5.4, §4c).** New STRING primitives `color/inkRgb` (`"26 24 21"`) and `color/whiteRgb` (`"255 255 255"`) — closes the one real Figma-side gap identified in the audit's token diff. Values copied verbatim from `tokens/primitives.json` (channel-triplet pattern, learning #15).

**Decision — 5.6 confirmed no Figma action needed.** Per `SESSION-RESUME.md`'s prior finding, `motion/press/release-duration` naming is a Block 8 code-generator mapping gap, not a Figma-side duplicate — Figma's naming is already correct. No action here.

**Platform limitation discovered — effect (shadow) color variable binding destroys per-layer opacity.** Attempted to bind `shadow/raised`/`shadow/inset`'s 4-layer drop/inner-shadow colours to `warmGray/800` (ink) and `utility/white` (5.3, reconcile `shadow/raised`↔repo `shadow/control/raised`). `setBoundVariableForEffect(effect, 'color', variable)` succeeded with no error, but Figma's `Effect.color` is a single RGBA — binding a variable replaces the *entire* channel including alpha, and the bound colour variables are fully opaque (`a:1`). This flattened all 4 shadow layers (previously 0.10/0.08/0.90/0.70 opacity) to fully opaque, which would render as a much harsher, wrong-looking shadow. **Caught via mandatory fresh re-read before moving on (learning: verify after every mutation) and reverted** — colour unbound, original RGBA (including each layer's correct alpha) restored. This is a second Figma variable-binding platform limit discovered this session (the first being lineHeight/letterSpacing, logged above) — effect colour binding has no way to preserve a per-layer alpha independent of the bound variable's own alpha. **Kept:** the two styles are renamed `shadow/control/raised` / `shadow/control/inset` (pure rename, zero risk) to match the repo's `shadow.control.raised`/`shadow.control.inset` naming (P2-16's reconciliation half that *is* achievable). **Not bound to variables** — logged as a platform limit, not deferred as unfinished work; a future fix would require per-shadow-layer alpha-baked colour variables (4 one-off tokens per style), which contradicts the channel-triplet-rgba pattern (learning #15) this system otherwise follows, so it is not recommended as a workaround.

**Verification.** Fresh re-reads (`getStyleByIdAsync`, `screenshot()`) confirm: all 5 foundations pages render with correct content and no clipped/overlapping text; grid styles created with correct `pattern`/`count`/`gutterSize`/`offset`; the 2 renamed variables and 2 new STRING primitives resolve correctly; the reverted shadow styles show `unit`-free literal RGBA with original per-layer alpha intact and `boundVariables: {}`.

---

## 2026-07-28 — SCDS audit P2-8: warmGray 200–400 span rebuild

**Stage:** 02-design (scds-v2, Figma-only this pass)
**Type:** Perceptual color-ramp redesign (deferred from Block 2, executed this session)
**Status:** accepted

**Context.** `color/warmGray/{200,250,300,350,400}` had four near-identical steps (`#d9d6d2 → #d5d2cf → #cdcac7 → #c5c2bf`, a combined ΔL of ~7.7%) then a cliff to `400` (`#9a9388`, ΔL ~19.2% in one step — 2.5× the combined prior four). This was the audit's flagged "real perceptual redesign, not a mechanical fix," deferred both last session and at this session's start pending dedicated attention.

**Decision — HSL-linear redistribution between fixed anchors.** Held `warmGray/100` (`#ebe7e4`, L90.78%) and `warmGray/450` (`#6b665e`, L39.41%) fixed — neither was flagged as broken and both anchor adjacent semantic bindings (`surface/page`→100). Computed each anchor's HSL, then placed `200/250/300/350/400` at 6 perceptually-even lightness steps between them (~8.56% L per step), interpolating hue (25.7°→36.9°) and saturation (14.9%→6.5%) linearly alongside lightness to preserve the ramp's existing warm-neutral character (hue/saturation drift toward cooler/grayer as it darkens, matching the ramp's own established pattern rather than introducing a new one).

**New values:** `200` `#d8d1cc` (was `#d9d6d2`, L82.2%) · `250` `#c4bcb4` (was `#d5d2cf`, L73.7%) · `300` `#b0a69c` (was `#cdcac7`, L65.1%) · `350` `#9a9186` (was `#c5c2bf`, L56.5%) · `400` `#847c71` (was `#9a9388`, L48.0%).

**Contrast consequence (verified, not assumed).** `border/default` (aliases `350` post-Block-2-swap) vs `surface/page` (aliases `100`, `#ebe7e4`): **1.22:1 → 2.52:1**. `border/subtle` (aliases `250`): **1.44:1 → 1.53:1** (measured pre-Block-2-swap value was 1.44; post-swap+rebuild is 1.53). Relative order preserved and *amplified* — `default` reads distinctly stronger than `subtle`, closing the residual near-indistinguishability the audit's screenshot-level check would still have shown even after the Block 2 alias swap alone. Neither crosses 3:1 (non-text minimum) — acceptable for a border-only role (no text-contrast requirement applies), and pushing further would have made 400/450 collide instead.

**Verified.** Fresh `screenshot()` of the Color foundations page's neutral-ramp swatch row (bound live to the variables, not hand-picked hex) confirms even visual steps end-to-end with no plateau-then-cliff. `500` (`#5f5854`) sits immediately below the new `450`/`400` without a visible seam.

---

## 2026-07-28 — SCDS Block 4 preflight: components were bound to THREE foreign variable libraries, not this file's collections

**Stage:** 02-design (scds-v2, Figma + code sync)
**Type:** Structural defect discovered mid-sprint; corrected in full
**Status:** accepted

**Context — how it surfaced.** While reading `StatusPill` (`9:767`) to plan the Block 4.7 consolidation, its bound variable IDs came back in the `VariableID:<libraryKey>/<id>` form rather than the local `VariableID:4:3` form. `getVariableByIdAsync().remote` confirmed `true`. The audit (2026-07-25) never caught this: it resolved bindings *by name*, and the foreign variables carry the same names, so a name-level read looks correct.

**Finding.** SCDS components were bound to **three distinct remote (library) variable collections**, not the local `Primitives` / `Semantic` collections this repo authors from `tokens/*.json`:

| Remote collection key | Naming style | Example |
|---|---|---|
| `43e6af37…/2017:11` | `color/*`, `radius/xxs`, `radius/xs`, `radius/s` | `color/surface/page` |
| `2d038dfc…/24:2` | unprefixed semantic | `text/primary`, `text/on-accent` |
| `93ae9511…/22:0` | kebab primitives | `warm-gray/400` = `#9a9388` |

Census across all 27 non-archive pages holding bindings: **~3,250 remote bindings vs ~490 local**. Only the four newest component pages (`SegmentedControl`, `Stepper`, `Progress`, `Link`) were fully local.

**Why this mattered — three consequences, all live:**
1. **Every token fix this sprint was invisible in the components.** Blocks 2/3/5 and the P2-8 warmGray rebuild edited *local* variables; the components read *remote* ones. The proof is exact: `Tab` was bound to `warm-gray/400 = #9a9388` — the precise pre-rebuild value P2-8 replaced with `#847c71`.
2. **Publishing SCDS (Block 7) would have shipped a broken library.** Consumers subscribing to SCDS would inherit components whose variables live in three other files. `getAvailableLibraryVariableCollectionsAsync()` returns `[]` from this file — those libraries are not even subscribable here.
3. **Code and Figma had already silently diverged.** `tokens/*.json` mirrors the local collections; the components did not consume them, so the "Figma is the single source of truth" contract (CC-PROMPT §Decisions 3) was not actually true for any component.

**Decision — local collections are truth; rebind everything to them.** `CLAUDE.md` states the Primitives collection + `_config/design-system/token-map.md` are the authoring surface compiled to `tokens.css`; the local collections were created from the repo JSON. The remote bindings are residue from the three branded files these components were consolidated out of. Rebound all bindings to the local variable of the same name, resolving name drift through an explicit remap plus a generic fallback chain (`exact` → `color/` prefix → kebab→camel leaf).

**Explicit remaps (value-preserving unless noted):**

| Remote name | Local target | Note |
|---|---|---|
| `color/text/inverse`, `color/text-on-inverse` | `color/text/onInverse` | Block 5 rename |
| `color/brand/primary` / `secondary` | `color/brand/accent` / `accentDeep` | |
| `color/status/warning/text` | `color/status/warning-ink` | Block 2 `-ink` tier |
| `color/interactive/disabled` | `color/text/disabled` | |
| `text/primary`, `text/secondary`, `text/on-accent` | `color/text/*` | unprefixed library |
| `warm-gray/{100,400,800}` | `color/warmGray/*` | **picks up the P2-8 rebuild** |
| `dark-surface/sunk` | `color/dark/well` | `#080807` exact |
| `radius/xs` (8) | `radius/surface` | exact |
| `radius/xxs` (4) | `radius/control` (3) | **−1px**; local scale is 0/3/8/9999 — no 4 exists, and adding one would break the declared scale. Affects Badge corners. |
| `radius/s` (16) | `radius/surfaceLarge` (new) | see below |
| `color/surface/overlay` | `color/surface/floating` | 1 node (portal Lightbox). Dark matches exactly (`#1a1a1a`); light shifts `#f1efeb`→`#fbf9f6`. |

**Decision — two tokens added, not faked.** `radius/s` = 16px was used by 48 bindings (portal `Row`, `Editor`) and the local scale genuinely lacked a large step. Mapping it to `radius/surface` (8) would have silently halved 48 radii. Added **primitive `radius/large` = 16px** and **semantic `radius/surfaceLarge` → `{radius.large}`**, synced to `tokens/primitives.json` + `tokens/semantic.json`, regenerated (`--sc-p-radius-large`, `--sc-radius-surface-large` in both `src/styles/tokens.css` and `public/tokens.css`). `npm run tokens:build` + `npm run build` both exit 0.

**Verified.** Per-page census re-run with the same counting method after each pass: **0 remote bindings remaining on all 27 pages, 0 unresolved names.** Totals: 3,247 bindings rebound across 27 pages.

**Platform note — gradient stops bind per-stop.** `setBoundVariableForPaint(paint,'color',v)` only reaches a SOLID paint's colour. A `GRADIENT_LINEAR` paint reports its bindings at node level (`boundVariables.strokes` lists one entry per stop) but stores them on `gradientStops[i].boundVariables.color`. The first rebind pass silently missed 4 Toggle stroke bindings because of this; caught by the canary's post-write re-read. Handled by deep-cloning the paint array and rewriting each stop's alias directly.

**Consequence for the audit.** `SCDS-AUDIT-2026-07-25.md` §9's "zero unbound fills and zero unbound strokes across ~1,400 nodes … the hard part is already done" is correct on *unbound*-ness but wrong on *whose system* those bindings pointed at. The audit also enumerated only 14 component pages in its node-ID reference; 18 further pages carrying bindings (`Icons`, `Device`, `Doc`, agency `Card`/`Stat`/`Row`/`Decision`/`Step`, and the 10 client-portal pages) were rebound here too.

**Block 4 status.** Item 4.1 landed for `Pulse` and `NavLink` (`state`→`State`, values capitalised). `Badge`/`Pill` deliberately left for 4.7 (consolidation supersedes a rename). Items 4.2–4.6, 4.8–4.10 not started — this preflight took the session.

---

## 2026-07-28 — SCDS audit Block 4.5: geometry bound to the scale (2,362 bindings)

**Stage:** 02-design (scds-v2, Figma-only)
**Type:** Mechanical binding pass + off-scale audit
**Status:** accepted

**Context.** Audit P2-6 counted ~85 unbound corner radii and ~98 unbound padding/gap values across the 14 component pages it enumerated. The true figure across all 27 pages carrying components is far higher.

**Decision — bind by exact value, semantic tier first.** Every unbound `topLeft/topRight/bottomLeft/bottomRightRadius`, `paddingLeft/Right/Top/Bottom`, `itemSpacing` and (where wrapping) `counterAxisSpacing` was bound to the local variable whose resolved value matches **exactly**. No value was changed. Resolution order:

- **Radius** → `radius/none`(0) · `radius/control`(3) · `radius/surface`(8) · `radius/surfaceLarge`(16) · `radius/pill`(9999)
- **Inline padding** (L/R) → `space/component/padding-inline/{sm 6, md 12, lg 16}` → `space/component/padding/{sm 8, md 16, lg 24}` → primitive `space/*`
- **Block padding** (T/B) → `space/component/padding-block/{sm 2, md 8, lg 12}` → `space/component/padding/*` → primitive `space/*`
- **Gap** → `space/component/gap/{sm 4, md 8, lg 12}` → primitive `space/*`

**Result: 2,362 bindings across 27 pages, 0 errors, 0 visual change** (every binding carries the value the node already had).

Per page: Icons 292 · Row (portal) 252 · Editor 172 · Field 163 · Doc 163 · Nav 161 · Card (portal) 135 · Empty State 128 · Tab 124 · Badge 105 · Stepper 96 · Toolbar 90 · Button 89 · SegmentedControl 56 · Navigation 44 · Link 44 · Gallery 40 · Toast 39 · Progress 36 · Card (agency) 35 · Decision 16 · Header 16 · Search 13 · Invite 12 · Stat 11 · Row (agency) 11 · Step 10 · Toggle 9.

**Scope decisions.**
- **`COMPONENT_SET` wrappers excluded.** Figma gives the variant-set container its own radius (5) and grid spacing (200/40), which surfaced on every page as a false positive in the first pass. That chrome is editor scaffolding, never published — excluded, not bound.
- **`INSTANCE` subtrees skipped.** Binding inside an instance writes an override rather than fixing the source; the main components are what publish.
- **Zero values left unbound.** `padding: 0` / `gap: 0` is the absence of spacing, not a scale step, and the scale has no `space/0`.

**Off-scale values found — NOT snapped, reported instead.** These are genuine P2-7 violations ("arbitrary px values are a bug"). Snapping them changes rendered geometry, which is a design call, not a binding call, so each is left unbound and listed here:

| Value | Where | Count |
|---|---|---|
| `radius 1` | Stepper | 12 nodes |
| `radius 2` | Doc | 2 nodes |
| `radius 12` | Field | 1 |
| `radius 20` | Row (portal) | 1 |
| `radius 28` | Card (portal) | 1 |
| `radius 24/28/20` (mixed corners on one node) | Doc | 1 |
| `padding 5` | Badge, Nav | 2 |
| `padding 20`, `padding 28` | Nav, Doc | 3 |
| `padding 36` | Stat | 2 |

Nearest on-scale targets would be `radius/control`(3) for 1–2, `radius/surfaceLarge`(16) for 12/20, and `space/24`/`space/32` for 28/36 — but each is a 1–8px visual change and several sit on shipped portal surfaces. Recommend resolving them as a single deliberate pass with a screenshot check, not folded into a binding sweep.

**Verified.** Every page returned `errorCount: 0`. Binding by exact value means the pass is visually inert by construction; the only nodes that changed rendering in this whole Block-4 session are the two logged in the remote-variable rebind ADR (Badge `radius/xxs` 4→3, one Lightbox surface).

---

## 2026-07-28 — SCDS audit Block 4.4 / 4.6 / 4.10

**Stage:** 02-design (scds-v2, Figma-only)
**Status:** accepted

### 4.10 — descriptions on all 21 core component sets (P2-5)

Every audited set returned `description = NO`. On a published library that is the text consumers read in the assets panel. All 21 now carry a description stating **what it is · which states it models · when to use it · what to use instead**, and — where a Block-4 item is still open — an explicit note of the known gap (e.g. Toggle has no hover/focus/disabled yet; Tab models `Selected` on the wrong axis). A design system that names its own gaps is more useful than one that hides them.

**Platform bug found — the MCP transport HTML-escapes apostrophes.** `'` arrives at Figma as the literal string `&#39;`, and Figma stores it verbatim, so `the studio's raise` renders as `the studio&#39;s raise` in the assets panel. Five descriptions were corrupted this way. Caught by comparing `node.description === desc` immediately after each write (the equality check failed while the write "succeeded"), then confirmed by reading the stored strings back. **Rule: never put `'` or `"` in a string written to Figma through `use_figma`.** Rewritten apostrophe-free; all 21 verified against `/&#\d+;|&amp;|&quot;/` with zero hits. Em dashes and `~` pass through cleanly.

**Also useful:** `getNodeByIdAsync`, `node.description = …` and `page.findAllWithCriteria` all work **across pages without `setCurrentPageAsync`**. All 21 descriptions were written in a single call, and a whole-file component census ran in one more. The one-page-switch-per-call rule applies to page *mutation* context, not to these APIs.

**Census — 114 top-level components/sets in the file, 43 now carry descriptions, 71 do not.** The 71 break down as: Mark page 10 (deferred to 4.8, which rebuilds them), Icons 15 (the name *is* the description for a glyph — recommend excluding by rule, not writing 15 stubs), Device 7 (mockup chrome, not consumable components), and ~34 agency/portal composites (`ArtifactRow`, `MilestoneEditor`, `PublishBar`, `SummaryCard`, …). The composites deserve real descriptions but writing them from names alone would be plausible-and-unverified — they need a pass with the components actually inspected, after 4.7/4.8 settle.

### 4.4 — SearchInput state vocabulary

`State` value `Filled` → `Active`, bringing SearchInput in line with Button / IconButton / TextField / Textarea / Segment / Link. Variants also reordered to the canonical sequence **Default / Hover / Focus / Active / Disabled** so the variant picker reads the same on every field component.

### 4.6 — text styles applied to unstyled text nodes (P2-6)

**26 nodes styled** on component pages by exact `family + weight + size` match — no visual change, since an exact match is the same type by definition. Distribution: `text/body/dense/regular` 12 · `text/caption` 5 · `text/mono/chrome` 4 · `text/body/default/regular` 3 · `text/body/dense/bold` 2. This closes the audit's estimate of ~25.

**42 nodes left unstyled — deliberately.** Their type combination has no corresponding text style, so they are off the declared scale rather than merely unbound:

`Haas Grot Text 65 Medium 13` ×11 · `Haas Grot Text 75 Bold 11` ×8 · `Cascadia Mono SemiBold 14` ×4 · `Haas Grot Text 65 Medium 12` ×4 · `Haas Grot Disp 75 Bold 11` ×2 · `Haas Grot Text 65 Medium 24` ×2 · `Haas Grot Text 75 Bold 13` ×2 · `Haas Grot Disp 65 Medium 13` ×2 · `Haas Grot Disp 95 Black 11` ×2 · plus 5 singletons.

Each needs a decision (does `75 Bold 11` become `label/chrome` at 11/65 Medium, or `label/ui` at 12/75 Bold?), and each decision changes rendered type. That is a typography call, not a binding call — deferred as a scoped pass, not silently snapped.

**Wider finding:** 361 TEXT nodes across the whole file carry no text style. The audit's 25 counted only the pages it enumerated. The bulk sit on the `Color` foundations page — specimen labels written during Block 5 at sizes off the type scale (13 Medium, mono 11 Regular, Disp 16 Black). Those are self-inflicted and should be corrected when the off-scale type decision above is made.

---

## 2026-07-28 — SCDS Block 4.3 preflight: nine component sets ship states that render identically

**Stage:** 02-design (scds-v2)
**Type:** Finding — blocks 4.2/4.3 as scoped; needs a Gate-2 decision
**Status:** open (documented, not fixed)

**How it surfaced.** Item 4.3 is "re-model `Tab` with a separate `Selected` boolean matching `Segment`". Before cloning the five state variants into `Selected=True` copies, the Default and Selected variants were read in full to derive the visual delta to apply. **There is no delta.** `Tab`'s `State=Default`, `State=Hover`, `State=Focus` and `State=Selected` are byte-identical: same bound variables on every node (`text/secondary` on Flow, `text/primary` on Label and icon, `warmGray/400` on the underline), same opacity, same geometry.

**Systemic check.** Fingerprinting every variant subtree (bound-variable names + opacity + visibility + text style + fill/stroke shape, recursively) and grouping identical siblings, across every component set in the file:

| Set | Variants | Distinct | Identical group(s) |
|---|---|---|---|
| `Tab` | 6 | **3** | Default = Hover = Focus = Selected |
| `Link` | 5 | **3** | Default = Active · Hover = Focus |
| `Segment` | 10 | **7** | Selected=false: Hover = Active · Selected=true: Default = Hover = Active |
| `PortalRow` | 4 | **2** | Default = Hover = Active |
| `InviteRow` | 4 | **2** | Default = Hover = Active |
| `GalleryThumb` | 2 | **1** | Default = Hover |
| `TextField` | 5 | 4 | Focus = Active |
| `Select` | 6 | 5 | Hover = Active |
| `iPhone` | 2 | 1 | Color=Black = Color=White |

**Why this matters more than the audit's framing.** The audit (P2-4) measured *which state names exist* and flagged the short sets (`Toggle` 2 values, `Stepper` missing hover/focus/active, `NavItem` missing disabled). It did not check whether the declared states differ. A state that renders identically to Default is the same defect as a missing state — and worse, because the variant picker says it is done.

**Two of these are accessibility defects, not modelling defects.** `Tab` has **no focus treatment** (`Focus` = `Default`), and `Link` renders `Hover` and `Focus` the same. Studio quality criteria are explicit: *five states on every interactive element* and *focus is visible and styled — never an unstyled browser default*. `Tab` currently ships an invisible focus state. The tokens to fix it already exist and are already correct after Block 2: `color/border/focus` (repointed to the focusRing tier), `border/width/focus` (2), `border/focus/offset` (2).

**Consequence for Block 4.** 4.3 as written — "give `Tab` a `Selected` boolean" — would produce **10 identical variants** instead of 6. The remodel is correct but cannot be executed as a mechanical clone; it requires the state treatments to exist first. Same for 4.2: adding Hover/Focus/Active to `Toggle`/`Stepper`/`NavItem` means *designing* them, not copying an existing pattern, because the pattern is not established anywhere in the file.

**Decision deferred to Gate 2 (owner).** Choosing the interaction-state vocabulary — what hover, focus, active and selected each *look* like across the library — is a design decision under studio-memory §5 Gate 2 ("interaction patterns documented"), not a decide-and-log call. Logged here with the evidence; asked as a single decision packet. Nothing was changed.

**Not blocked by this:** the focus-ring half is arguably rule-execution rather than design choice (the studio criteria mandate a visible focus ring and the tokens are already declared), but applying it changes rendering on nine components, so it is bundled into the same question rather than pre-empted.

---

## 2026-07-29 — SCDS interaction-state vocabulary (Gate 2, approved) + applied to Tab and Link

**Stage:** 02-design (scds-v2)
**Type:** Gate-2 design decision — owner approved
**Status:** accepted; 2 of 9 sets applied

**Decision (owner, asked as a decision packet).** Derive one systematic state treatment from tokens the system already declares — no new tokens, no invented visual language — and apply it uniformly to the nine sets carrying identical variants. Approved.

### The vocabulary

| State | Treatment | Tokens |
|---|---|---|
| **Default** | resting ink / resting rule | `color/interactive/default`, `color/border/default` |
| **Hover** | ink strengthens; rule strengthens on text controls, surface lifts on surface controls | `color/interactive/hover`, `color/border/strong`, `color/surface/hover` |
| **Focus** | Default **plus** a 2px ring, `strokeAlign: OUTSIDE`. Composable — never replaces the state's own treatment | `color/border/focus` (focusRing tier post-Block-2), `border/width/focus` (2) |
| **Active** | pressed ink | `color/interactive/active` |
| **Selected** | persistent, not transient: accent indicator + primary ink | `color/brand/accent`, `color/text/primary` |
| **Disabled** | Default at 50% opacity — opacity is the single mechanism, so inks stay on their resting tokens rather than double-dimming | `opacity 0.5` |

**Known limitation — no focus-ring offset.** `border/focus/offset` (2) exists as a token, but Figma has no outline-offset equivalent; `strokeAlign: OUTSIDE` is the closest expressible form. The offset is a code-tier concern, like `motion/easing/*`. Do not attempt to fake it with a wrapper frame — that changes layout.

**Not represented in Figma:** the press-scale (`motion/scale/pressButton` 0.985, `pressTap` 0.92) is a code-only tier; Active is expressed as ink only.

### Applied — `Tab` (was 6 variants / 3 distinct → now 6 / 6)

`Default` rule → `border/default` (was the raw primitive `warmGray/400`) · `Hover` label → `interactive/hover`, rule → `border/strong` · **`Focus` gained the 2px `border/focus` ring — it previously rendered identically to Default, i.e. the component shipped an invisible focus state** · `Active` label → `interactive/active`, rule → `border/default` · `Selected` rule → `brand/accent` · `Disabled` rule → `border/default`.

**Bug caught by the post-write verification read:** `Tab`'s Disabled label was bound to `color/text/onAccent` — pure white — under 50% opacity on a light page, i.e. all but invisible. Repointed to `color/text/primary` so Disabled is genuinely Default-at-50%.

### Applied — `Link` (was 5 variants / 3 distinct → now 5 / 5)

Three real bugs, none of which the audit could see by reading names:

1. **`Default` was bound to `color/interactive/active`** — the resting state rendered as the pressed state. Now `interactive/default`.
2. **`Disabled` was bound to `color/dark/textDisabled`** — a *dark-mode primitive* in a mode-agnostic component, so in light mode it rendered the dark theme's disabled grey (`#565654`) and did not follow the mode at all. Now `color/text/disabled`.
3. **The underline that mitigates learning #67 existed only on `Focus`.** Learning #67 documents the brand-accent hover as a sub-AA exception (~3.8:1) accepted *because* a persistent underline carries the affordance. The underline was not persistent — Default, Hover, Active and Disabled all had `textDecoration: NONE`, so the documented mitigation was not actually in place. `UNDERLINE` is now persistent across all five states, matching both the learning and the component description written in 4.10.

`Focus` also gained the 2px ring; per-state icon stroke follows the label ink.

### Remaining — 7 sets still carrying identical variants

`Segment` (10/7) · `PortalRow` (4/2) · `InviteRow` (4/2) · `GalleryThumb` (2/1) · `TextField` (5/4, Focus = Active) · `Select` (6/5, Hover = Active) · `iPhone` (2/1, Black = White — a mockup asset, not an interactive component; likely correct to collapse to one variant rather than differentiate).

Verified by re-running the fingerprint audit: `Tab` and `Link` no longer appear.

**Applied — remaining 7 sets (same session).** Fingerprint audit now reports **1 of 39 component sets** carrying identical variants, down from 9.

- **`Segment`** (10/7 → 10/10). Unselected: `Hover` → `surface/hover`, `Active` → `surface/deepSunk`. Selected: `Hover` → `surface/raised`, `Active` → `surface/sunk` — so a selected segment still reads as selected while responding to pointer, and both tracks darken progressively under press.
- **`PortalRow`, `InviteRow`** (4/2 → 4/4 each). `Hover` → `surface/hover`, `Active` → `surface/sunk`.
- **`GalleryThumb`** (2/1 → 2/2). `Hover` → `surface/hover`. **Note:** this set has only Default and Hover — no Focus, Active or Disabled at all. Adding them is net-new variant work, not covered here.
- **`TextField`, `Select`** — the field family had inconsistent and in places broken border treatment, which the duplicate-variant check surfaced as a side effect:
  - **`TextField` `Hover` had no border at all** (`strokes` empty) while `Default` had `border/default` — hover *removed* the frame. Almost certainly an editing accident.
  - **`Select` `Default` had no border either**, so the two field components disagreed about what a resting field looks like.
  - `Focus` and `Active` were identical on `TextField`; `Hover` and `Active` identical on `Select`.
  - **`Disabled` inked only the value text** — the field label stayed at `text/primary`, so a disabled field read as half-enabled.

  Normalised both to one family rule: `Default` `border/default` · `Hover` `border/strong` · `Focus` `border/strong` + 2px `border/focus` ring · `Active` `border/strong` + ring + box fill `surface/deepSunk` (pressed sinks) · `Disabled` `border/subtle` + **all** text on `text/disabled` · `Open` (Select) `border/strong` + menu. Stroke weights bound to `border/width/default`.

- **`iPhone` (Device page) — left as-is, 2 variants / 1 distinct.** `Color=Black` and `Color=White` are byte-identical, i.e. the White variant was never styled. This is a device mockup asset, not an interactive component, and giving it a real white shell is illustration work rather than a state fix. Recommend either styling it properly or collapsing to a single variant when the Device page is next touched; flagged, not guessed at.

**Follow-up finding — `color/surface/hover` may be mis-valued.** Light mode resolves it to `warmGray/250` (`#c4bcb4`), which is a heavy darkening to apply as a hover on a `surface/raised` card (`#f4f1ed`). It is the correct *token* for the job by name, so it was used per the approved spec, but the *value* deserves a look alongside the other neutral-ramp work. Not changed here — a token-value change would repaint every hover in the library at once.
