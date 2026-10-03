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

## 2026-08-16 — Token sync: code ↔ SCDS Figma library variables

**Stage:** 02-design (scds-v2)
**Type:** Token sync / Figma→code propagation
**Status:** accepted

**Context.** Full pull of the SCDS — Shokunin Design System Library variable set (file `0zVoxaLJQkjHENYJlQk1VT`, node `18:4`) via the Figma Plugin API: 2 collections, 221 variables — Primitives (133, single `Value` mode) and Semantic (88, `Light`/`Dark` modes). Diffed against `tokens/primitives.json` + `tokens/semantic.json` before editing.

**Finding — zero value drift.** Every colour, size, weight, tracking, line-height, radius, spacing, motion-duration and motion-scale token that exists on both sides already carries an identical value. The teal family including `#038E93` (`color/teal/500`, the brand accent) was already propagated in the 2026-07-09 rebrand; this sync did not move it. No removals, no renames with a CSS-surface consequence.

**Decision — three tokens added for parity.** Present in Figma, absent from code: primitive `font.lineHeight.loose` (2.0), primitive `radius.large` (16px), semantic `radius.surfaceLarge` → `{radius.large}` (mode-invariant). Added in the file's existing conventions (size-ordered within their group, DTCG alias for the semantic, `$extensions.modes` for both modes). No component binds any of them yet — they exist so the two surfaces agree.

**Decision — `font.family.*` deliberately NOT synced.** Figma stores the *trial* family names (`Haas Grot Disp Trial`, `Haas Grot Text Trial`) because the licensed faces will not load in Figma (studio learning: Figma MCP cannot load the brand fonts). The repo stores the licensed CSS stacks (`Neue Haas Grotesk Display Pro`, …) with fallbacks. Figma is the source of truth for token VALUES; it is not the source of truth for the served font stack. Syncing these would break the deployed stylesheet. Standing exception — re-affirm, do not "fix", on future syncs.

**Authoring differences recorded, no action.** (a) `color/dark/border` and `color/dark/borderSubtle` are aliases in Figma (`→raised4` / `→raised2`) and literals in code — same resolved values (`#2A2A2A` / `#1A1A1A`). (b) The `-ink` text tier is flat in Figma (`color/status/successInkLight`) and nested in code (`color.status.success.ink.light`) — both kebab to the identical CSS custom property, so there is nothing to rename. (c) `color/divider/*` is baked hex8 in Figma and composed from the channel-triplet primitives in code — the alpha steps match exactly (`.06/.10/.16` light, `.05/.09/.15` dark). (d) `motion.easing.*`, `shadow.control.*` and the `font.text.*` composition tokens have no Figma-variable equivalent (cubic-bezier, shadow and typography composites are not variable-representable) and remain code-only.

**Guardrails verified, numbers printed in the PR.** Focus ring holds 6.80–16.37:1 across every ground in both modes (3:1 floor). Brand accent sits at hue 182°; `status.error` at 0° (177.9° apart), warning 14–18°, success 150°, info 224° — no status hue shares a band with teal. Every text-facing pair passes AA, `text.primary` passes AAA in both modes. The only two sub-4.5 pairs are the pre-existing documented exceptions (`interactive.hover` base at 3.23:1, icon/border only; white on `brand.accent` at 3.97:1, mark only) — unchanged by this sync.

---

## 2026-08-16 — SCDS ships as a versioned package; consumer propagation restored

**Stage:** 02-design (scds-v2)
**Type:** Distribution architecture / cross-repo propagation
**Status:** accepted

**Context.** Auditing what actually propagates from this repo to the branded properties, ahead of wiring automatic updates. Findings, measured not assumed:

- **`client-portal`** (rebuilt 2026-08-15, `clients.shokunincrafthouse.com`) already fetches the live `tokens.css` at `prebuild` via its own `scripts/snapshot-tokens.mjs`. Its committed snapshot is an offline fallback, not the consumption path — **portal tokens were already automatic**; it only ever lacked a rebuild trigger. Snapshot measured 12 vars drifted / 26 absent vs live (the warmGray P2-8 rebuild, dark status hues, `border.default`↔`border.subtle` swap).
- **`shokunin-crafthouse-site`** (`shokunincrafthouse.com`) does **not** consume this repo at all. `assets/css/tokens.css` is a hand-authored fork: 280 vars vs live 443 — **209 absent, 103 drifted, 46 local-only**. It still binds `brand.accent`, `border.focus` and `status.error` to `--sc-p-color-shu-500`, the vermilion retired on 2026-07-09. The public studio site is serving the pre-rebrand accent.
- **Components propagate nowhere.** No submodules in either consumer. `client-portal/components/*.tsx` are hand-written forks, not imports. This repo was `private: true` with no `exports` — not consumable by anything.
- **Text styles need no new mechanism** — `font.text.*` already compiles into `tokens.css` as `--sc-font-text-*` vars, so they ride the token pipeline already.

**Decision — publish as `@the-shokunin-crafthouse/scds` on GitHub Packages.** Chosen over a git submodule (SHA-pinned rather than semver, and `--remote` is required or consumers silently never advance) and over CSS-only distribution (leaves component markup and behaviour permanently forked). The repo now builds two artifacts from one `src/`: the reference SPA (`npm run build` → `dist/`, unchanged) and the library (`npm run build:lib` → `dist-lib/`, new `vite.lib.config.js`). `react`, `react-dom`, `react/jsx-runtime` and `@phosphor-icons/react` are externalised and declared `peerDependencies` — bundling React into a library gives consumers two copies and breaks hooks. CSS Module class names use a fixed `scds-[local]__[hash:base64:5]` pattern so a downstream committed snapshot does not churn on unrelated builds.

**Decision — two propagation events, deliberately distinct.** `deploy.yml` fires `brand-tokens-updated` on every main deploy (the CSS path, for consumers snapshotting the served stylesheet). `publish-package.yml` fires `scds-released` on a `v*` tag after a successful publish (the versioned path, for npm consumers). Collapsing them would force a package release for a token-only change, or leave CSS consumers waiting on a release they don't install.

**Constraint — publish needs no PAT, dispatch does.** `GITHUB_TOKEN` with `packages: write` publishes to GitHub Packages inside the org, but **cannot** fire a cross-repo `repository_dispatch` (studio learning: cross-repo dispatch needs a fine-grained PAT). `CONSUMER_DISPATCH_TOKEN` (fine-grained, `contents:write` + `metadata:read` on both consumer repos) is required and can only be minted by the owner. Both workflows **warn and exit 0** when it is absent rather than failing — the deploy or publish has already succeeded by that point, and a red badge on good work trains everyone to ignore the badge (studio learning: a CI step that fails before the build gives no signal).

**Verification.** Library build externalises correctly (`import ... from "react"` in the output, not a bundled copy). SPA build unaffected. Packed the tarball and installed it into a clean project as a real consumer would: **all 18 exports resolve** (15 components + `IconProvider`, `ThemeProvider`, `useTheme`) and all five subpath entries resolve (`./styles/{tokens,components,fonts,reset}.css`, `./tokens/primitives.json`).

**Not done here, tracked.** The studio-site fork reconciliation is a brand-visible change requiring before/after review at three breakpoints in both modes — it gets its own PR in that repo, not a drive-by. Neither consumer has its `repository_dispatch` receiver yet. Font files ship inside the package; this adds no exposure beyond the woff2 the brand site already serves publicly, but the package must stay private to the org.

---

## 2026-08-17 — Cross-repo dispatch moves from a fine-grained PAT to a GitHub App

**Stage:** 02-design (scds-v2)
**Type:** CI credential architecture
**Status:** accepted

**Context.** The consumer-propagation fan-out (ADR 2026-08-16) needed a credential that can fire `repository_dispatch` at `client-portal` and `shokunin-crafthouse-site`. `GITHUB_TOKEN` cannot cross repos. The obvious move was to reuse the existing `PORTAL_DISPATCH_TOKEN` secret (a fine-grained PAT, created 2026-06-03, expiring 2027-06-04).

**It did not work, and the failure was diagnosed rather than guessed.** A `dispatch-preflight.yml` workflow was written to test the credential against both consumers and print per-repo HTTP verdicts — no one has to read a secret to know whether it works. Two runs established:

1. First run: **404 on read and write for both consumers.** The PAT's repository access is a selection stored by repo **id**, and the `client-portal` it was granted on was deleted 2026-06-11 and recreated 2026-06-20 as a new repo object (id `1275430803`). The grant did not carry over, and the token had never covered the studio site.
2. After widening the selection to both repos (Contents: read and write, Metadata: read-only — visually confirmed): **still 404 on read and write for both.** Cause: on an org, changing a fine-grained PAT's repository selection sends it back to **pending approval**, and an unapproved fine-grained token returns **404 rather than 403** on org repos — deliberately, so it cannot be used to probe which repos exist. The "read also 404s" signature is what separates this from a mere permission gap.

**Decision — a GitHub App, not a PAT.** `actions/create-github-app-token@v2` mints a token per run from `vars.SCDS_DISPATCH_APP_ID` + `secrets.SCDS_DISPATCH_APP_KEY`. Reasons, in order of weight:

- **Adding a consumer is an App installation, not a credential edit.** More branded properties are expected. Installing the App on a new repo needs no re-selection and no re-approval; widening a PAT needs both, and the re-approval is the exact trap above.
- **No expiry to manage.** The PAT dies 2027-06-04 and would fail silently-ish on a date nobody has calendared. An App credential does not expire; the minted token lives ~1h.
- **Nothing long-lived sits in a secret.** The private key mints short-lived tokens rather than the secret *being* the access.
- **Not subject to org PAT policy** at all, so the pending-approval failure mode cannot recur.

**Decision — PAT secrets stay as a fallback, temporarily.** All three workflows resolve `steps.app-token.outputs.token || secrets.CONSUMER_DISPATCH_TOKEN || secrets.PORTAL_DISPATCH_TOKEN`. The App mint step is gated on `vars.SCDS_DISPATCH_APP_ID != ''` so an unconfigured App skips cleanly instead of failing the run. Delete both PAT secrets once the preflight confirms the App path, and delete the now-dead `portal CI · read brand` PAT (never used — it was for the `_brand/` submodule architecture that was never built).

**Absent credential warns, never fails.** In `deploy.yml` the deploy has already succeeded by the dispatch step; in `publish-package.yml` the package is already published. Failing there would mark good work red, which trains everyone to ignore the badge (studio learning: a CI step that fails before the build gives no signal).

**Preflight now names the cause, not just the symptom.** It lists the App installation's reachable repositories, and its 403/404 branches print different fixes depending on whether an App or a PAT is in play — 404 under an App means "not installed on this repo", 404 under a PAT means "not in the selection, or pending org approval".

**Blocked step (owner-only).** Creating the App and installing it is GUI + credential work: org Settings → Developer settings → GitHub Apps → New, `Contents: Read and write` + `Metadata: Read-only`, install on both consumer repos, then set the repo variable and the private-key secret here.

---

## 2026-08-17 — Dispatch App verified; PAT fallback removed

**Stage:** 02-design (scds-v2)
**Type:** CI credential cleanup
**Status:** accepted

**Verified.** `dispatch-preflight.yml` against the SCDS Dispatch App (app id 4626082): token minted, installation resolves to exactly `client-portal` + `shokunin-crafthouse-site`, and **HTTP 204 / reachable on both** with a real event delivered. Read went **404 → 200** versus the PAT — that transition is the proof the credential and installation are right, independent of the write result.

**The 503 detour is worth recording.** The first App run returned read 200 / write 503 on both consumers, during a GitHub "Partial System Outage" (critical, 2026-08-17). A 503 on write is an upstream error, not a permission failure, but the preflight's `*)` branch reported it as `UNREACHABLE — unexpected HTTP 503`, which reads like a misconfiguration. Fixed: a dedicated `502|503|504` branch now reports **INCONCLUSIVE** and points at githubstatus.com. The diagnostic triad is now explicit in the workflow header — read 404 = credential or approval; read 200 + write 503 = upstream; read 200 + write 204 = wired.

The same outage 503'd every Actions secrets/variables call and all of GraphQL for roughly 30 minutes while REST stayed up. Two workarounds that are worth remembering: `gh pr merge` goes through GraphQL and was unusable, but `PUT /repos/{o}/{r}/pulls/{n}/merge` over REST succeeded on the 5th retry — writes were failing intermittently, not absolutely, so a bounded retry loop got through. The Actions secrets UI kept working when its REST endpoint did not.

**Decision — PAT fallback removed entirely.** `PORTAL_DISPATCH_TOKEN` (the secret) is deleted; the App is the only credential. All three workflows now read `steps.app-token.outputs.token` alone.

**Consequence handled: `continue-on-error` on every mint step.** During the fallback era the mint step was gated on `if: vars.SCDS_DISPATCH_APP_ID != ''`, so a missing credential skipped harmlessly. Removing the fallback also removed that gate, which would have made `create-github-app-token` **fail the job** on any credential problem — turning a successful deploy or an already-published release red, the exact failure mode this repo keeps legislating against (studio learning: a CI step that fails before the build gives no signal). Each mint step is now `continue-on-error: true`, and the consuming step detects the empty token and warns with the specific remediation. In `dispatch-preflight.yml` failing IS the signal, so it still exits non-zero — but via its own reporting step, which distinguishes "app id unset" from "key not visible to this repo" from "key malformed", rather than a raw action error.

**Still outstanding.** The `brand → client portal dispatch` and `portal CI · read brand` PATs still exist on the account and are now both dead — the first is superseded, the second never used (it was for the `_brand/` submodule architecture that was never built). Neither consumer has a `repository_dispatch` receiver yet, so delivered events currently land and do nothing.

---

## 2026-08-17 — text.secondary re-derived to clear AA on surface.sunk; every quoted contrast figure re-verified and guarded

**Stage:** 02-design (scds-v2)
**Type:** token value change + accessibility correction + CI guard
**Status:** accepted
**Slug:** text-secondary-aa-sunk

**Context.** `tokens/semantic.json` documented `color.text.secondary` as "AA on surface.page (5.0:1) and surface.sunk (4.6:1)". Both figures were stale. The 2026-07-28 SCDS audit P2-8 rebuild redistributed the warmGray 200–400 span, darkening `warmGray.200` from `#D9D6D2` to `#D8D1CC` — `surface.sunk`, the default card ground in light mode. The text tier rendered on it was never re-derived, so the real ratio fell to **4.42:1, below WCAG AA 4.5:1**, while the description kept asserting it passed. Found downstream while reconciling `shokunin-crafthouse-site` (PR #34 there), where four rules rendering secondary text on a panel/sunk ground had to be moved to `text.primary` as a local workaround. That workaround is a symptom; this repo is the upstream of every Shokunin-branded property, so the fix belongs here.

**Decision — darken the text tier (option a), not forbid the surface (option b).**

`surface.sunk` is the default card ground in light mode. Forbidding secondary text on it would forbid metadata on cards — the single most common secondary-text placement — and collapse the tier onto `text.primary` across every consumer. That is not a usable system; it is the consumer workaround promoted to policy.

`color.warmGray.500` `#5F5C55` → **`#5A5750`**. Hue (42°) and saturation (5.6%) held exactly; HSL lightness 35.3% → 33.3%, one step down.

Two properties made this contained and safe:
- **One semantic consumer.** `warmGray.500` is aliased only by `color.text.secondary`. Nothing else moves.
- **Outside the rebuilt span.** P2-8 interpolated `warmGray.100 → warmGray.450`. Step 500 sits *below* that span, so re-deriving it does not disturb the ladder P2-8 built.

Resulting light-mode figures: sunk **4.42 → 4.77:1**, page **5.43 → 5.86:1**, raised 6.40:1, floating 6.86:1. Dark mode is unaffected (`dark.textSecondary`, 8.85–10.20:1, AAA throughout). Secondary/tertiary tier separation also improves, 1.17 → 1.27.

**Rejected: `#5C5953`.** The smallest value that clears AA (4.62:1) — rejected as a rounding cliff. `#5A5750` carries 0.27 of headroom, which is what keeps the next ramp move from silently re-breaking it.

**Restrictions kept where the pair is genuinely unfixable.** `surface.deepSunk` and `surface.rail` (both `warmGray.300`) measure 3.01:1 and `surface.hover` (`warmGray.250`) 3.84:1. No plausible darkening of a *secondary* tier clears AA on those without becoming ink. They stay restricted, with `text.primary` as the substitute.

**Schema change: `forbiddenSurfaces` is now keyed by mode.** It was a flat array plus a separate `modes` list, which can only express one union across both modes. That was measurably wrong in both directions on `text.tertiary`: it forbade `surface.raised` in light where the pair passes at 5.06:1, and permitted `rail`, `hover` and `floating` where they fail. Now `{ light: [...], dark: [...] }`. No build step reads this field (`tokens-to-css.mjs` ignores it); the readers are the `sc-token-explorer` skill, updated here, and agents reading the token file directly.

**Re-verification of every quoted figure.** 78 contrast figures are quoted across both token files. Twelve were wrong. They fall into three kinds, and the distinction matters:

1. **Rotted by a ramp move** (accurate when written): `text.secondary` on page/sunk/deepSunk, the `text.tertiary` light-deepSunk restriction figure (3.49 → 2.38), `focusRing.light` on sunk (11.24 → 10.78).
2. **Never accurate**: `status.success.light` "AA ~4.9:1" measures **3.69:1** and `status.info.light` "AA ~7.5:1" measures **4.79:1**. Neither reproduces against `warmGray.100` in any era (3.42 / 4.43 against the pre-desaturation `#E3DFD8` page). The success one is the more serious: it asserted AA for a pair that fails it, and was contradicted eleven lines later by its own `ink` token, which correctly recorded 3.69:1. Both descriptions now state the measured figure and the fill-only role. **The status hues themselves are not repainted** — the `-ink` text tiers already exist for text use, and repainting status colors does not belong in a contrast-hygiene change.
3. **Wrong about a retired value**: the `status.warning-ink` note cited 3.69:1 for base warning-light (that is *success*'s number copy-pasted; warning measures 4.21:1 — the verdict held, the figure did not), and `interactive.hover` claimed the retired vermilion was 3.8:1 when `shu.500 #C8281C` measures **4.52:1** on page, meaning the teal rebrand widened that documented AA exception considerably more than the note admitted.

Two figures I first flagged as stale were not: the pre-swap border ratios 1.22:1 and 1.44:1 reproduce exactly once measured against their own era's ground. A historical figure has to be checked against the values of its own moment, not today's.

**Guard — `scripts/verify-contrast.mjs`, wired into `pr-check.yml`.** Correcting prose fixes today and guarantees nothing; a `$description` is a claim that rots the moment a ramp moves (learnings #131, #162). Three checks:

1. **AA, derived from the token tree.** Every text tier × every surface × every mode must clear 4.5:1 unless the pair is declared in `forbiddenSurfaces`. Nothing here reads prose, so the *next* ramp move fails CI on its own. Verified against the real bug: reverting `warmGray.500` reproduces `text.secondary on surface.sunk (light): 4.42:1 < AA 4.5:1`.
2. **Live claims.** All 78 registered figures must match their measured value.
3. **Orphans.** Any `N.NN:1` in any `$description` must be registered as either a live claim or an explicitly-pinned historical figure. A new prose figure cannot be added unguarded. This check caught four figures I had missed and two I had introduced.

It also warns (non-fatally) when a restriction is over-broad — a pair listed as forbidden that actually clears AA — since that silently costs a legal combination, which is how the `text.tertiary` list went wrong.

**Consequences.**
- A token value changed. Consumers pinning `@the-shokunin-crafthouse/scds` need snapshot-refresh PRs after this deploys — visual diffs on secondary text are expected and correct.
- `shokunin-crafthouse-site` PR #34's local workaround (four rules moved to `text.primary`) can be reverted once it takes the new version; secondary text on a sunk ground is legal again at 4.77:1.
- `_config/design-system/token-map.md` is updated only on the rows this change touches. It remains stale elsewhere (pre-scds-v2 hexes throughout, e.g. `warmGray/300 #CDC9C2`, `dark/textPrimary #E2DDD6`, "shu/brand fills") and still needs the full re-sync noted in the 2026-05-28 ADR.
- **Figma synced 2026-08-17 (done).** `color/warmGray/500` set to `#5A5750` in the SCDS library Primitives collection (`0zVoxaLJQkjHENYJlQk1VT`, `VariableID:2:12`). Figma independently corroborated the blast radius: exactly one variable aliases it, `Semantic color/text/secondary` (Light) — the same single consumer the code has. All 42 text-tier × surface × mode pairs re-derived from the live Figma variables afterwards match the repo exactly, zero AA violations.

  Three things went with it. (a) `color/text/secondary` and `color/text/tertiary` gained descriptions. They previously had none — while `text/onAccent`, `brand/accent` and every `-ink` tier carry their AA constraint in the description, which is this file's established convention for a token that fails accessibility when picked wrong. Those two were exactly the tokens whose restrictions are mode-dependent and invisible, so a designer picking them in Figma had nothing to read. That gap is the design-side half of this bug. (b) `warmGray/500` gained a description recording the re-derivation. (c) Four `-ink` descriptions quoted figures 0.01 off the re-verified values (`success-ink` 4.73→4.74, `warning-ink` 4.57/4.51→4.58/4.52, `info-ink` 4.55→4.54, `hover-ink` 4.71→4.72) and were corrected, so Figma and the repo quote identical numbers. Leaving them would have reintroduced exactly the drift the 2026-08-16 sync ADR closed.

---

## 2026-08-17 — token-map.md inverted: generated mirror, not source of truth

**Stage:** 02-design (scds-v2)
**Type:** Documentation architecture / drift elimination
**Status:** accepted
**Slug:** token-map-generated

**Context.** `_config/design-system/token-map.md` declared itself the source of truth — "Both are downstream of this file" — while nothing generated from it and nothing checked it. It drifted for roughly three months. At the point of this change it still documented:

- the `color/shu/*` vermilion scale **retired on 2026-07-09**, including `border/focus`, `status/error`, `brand/accent` and `interactive/hover` all still bound to it
- the pre-desaturation page ground `#E3DFD8` and the pre-P2-8 warmGray ramp
- "Primitives · 100 variables · Semantic · 23 variables" against a real 133 / 88 in the Figma library
- "No components have been defined in Figma yet" against 167 consolidated masters
- a `Breakpoints` collection that does not exist in the current SCDS library

and omitted teal, signal, focusRing, divider, every `-ink` tier, four of the seven surfaces, and the entire tertiary text tier.

This is the mirror-rot pattern exactly (studio learning #178: a pasted mirror needs a generator and a stamped count, not discipline). It is the same failure as the contrast figures fixed earlier today, one layer up: a hand-maintained restatement of a value that moves independently of it.

**Decision — invert the dependency and generate the file.** `tokens/*.json` is upstream. `token-map.md` is a generated mirror, emitted by `scripts/gen-token-map.mjs` (`npm run tokens:map`), carrying a `DO NOT EDIT BY HAND` header and a **stamped source fingerprint** (sha256 of both token files, truncated) plus primitive/semantic counts.

`npm run tokens:map:check` regenerates in memory and fails if the committed file differs. Wired into `pr-check.yml`, so staleness is a build failure rather than a chore nobody owns. Verified by mutating a token and confirming the check exits 1.

**Correctness checks that matter more than the prose.**
- Every one of the 268 CSS variable names the document prints was cross-checked against the built `src/styles/tokens.css`: **zero mismatches**. The generator reuses `tokens-to-css.mjs`'s exact `kebab`/`varName` logic rather than reimplementing it, so the doc cannot drift from the build's naming.
- The accessibility restrictions now render as their own table at the top, generated from `$extensions.usageRestrictions` — the same field `verify-contrast.mjs` enforces. One source, two readers.

**Hand-authored content preserved deliberately.** Three blocks are not derivable from the token files and live as literals in the generator: the Figma-naming differences, Effect Styles / elevation (shadows cannot be Figma variables), and breakpoints. Breakpoints are now explicitly flagged as unverified — they are absent from both `tokens/*.json` and the SCDS library, so the section states that rather than implying it is synced.

**Count difference with Figma is expected and now documented in the file.** Code counts 158 primitives / 110 semantic against Figma's 133 / 88 because `motion/easing/*`, `shadow/*` and the `font/text/*` composition tokens are composites with no variable representation. A count mismatch is expected; a *value* mismatch is not.

**Consequences.**
- Never hand-edit `token-map.md` again. Edit the token files and run `npm run tokens:map`.
- The "token-map is stale" caveat carried by the 2026-05-28 and 2026-08-17 `text-secondary-aa-sunk` ADRs is now discharged.
- CLAUDE.md describes `_config/design-system/token-map.md` as part of the *authoring* surface. That is now inaccurate — it is a generated artifact, and the authoring surface is `tokens/*.json` plus the Figma Primitives collection. Flagged, not silently rewritten: the adapter is owner-maintained.

## 2026-09-05 — Semantic touch-target size + entrance/cut motion aliases (WQ-038)

**Stage:** 03-build
**Type:** Token architecture
**Status:** accepted

**Context.** Studio PM's Gate-2 specs (`studio-pm/references/responsive-spec.md` §R3, `motion-spec.md`) needed to bind a 44×44 touch minimum and a two-act motion sequence (cinematic entrance + continuity cut) into SCDS-consuming components, but SCDS had no semantic alias for either — the board was binding primitives directly: `--sc-p-space-48` standing in for the touch minimum, `--sc-p-motion-duration-orchestrated` / `--sc-p-motion-easing-cinematic` for the entrance, and `--sc-motion-mode-*` (theme-switch semantics, wrong intent) reused for the continuity cut. Per the studio principle "every decision is a rule," an unaliased primitive binding is a decision with no name.

**Decision.** Add five semantic tokens to `tokens/semantic.json`: `size.touch-target` (→ `space.48`, 48px, nearest 8pt value above the 44px minimum), `motion.entrance.duration` / `motion.entrance.easing` (→ `motion.duration.orchestrated` 720ms / `motion.easing.cinematic`, act-one entrance, runs once per document), and `motion.cut.duration` / `motion.cut.easing` (→ `motion.duration.standard` 380ms / `motion.easing.inOut`, continuity cut — in-place content change between states). All five alias existing primitives; no new primitive values were introduced.

**Rationale.** `size.touch-target` sits beside the existing `size.avatar.*`/`size.progress.*` sizing group so touch-target sizing has the same first-class home as every other dimensioned UI concern. `motion.entrance`/`motion.cut` sit beside `motion.mode` (both siblings in the existing `motion.*` semantic group) rather than overloading `motion.mode.*`, which is reserved for theme-switch crossfades and was never the right semantic for a content-continuity cut.

**Alternatives considered.** Leaving consumers bound to primitives directly (status quo) — rejected per the Gate-2 spec's own complaint that this hides intent and makes a later motion-language change a primitive hunt across every consumer, not a token rebind. Reusing `motion.mode.*` for the continuity cut — rejected; same duration/easing values, but a different semantic meaning (mode-switch vs. in-place content change) that would collide the day either one needs to diverge.

**Consequences.** Easier: any component consuming these tokens (studio-pm's board today; any future consumer) rebinds to `--sc-size-touch-target`, `--sc-motion-entrance-duration/-easing`, `--sc-motion-cut-duration/-easing` instead of primitives — one rebind PR per consumer, tracked as a follow-up, not done in this change. Harder: none — purely additive, zero existing consumers touched, `tokens:verify` reports no new or changed contrast claims (these are size/duration/easing tokens, out of scope for the contrast checker). `_config/design-system/token-map.md` regenerated (fingerprint `53b91e90481f`, 110→115 semantic tokens); no Figma sync run — the SCDS Figma Primitives collection already has the underlying primitive variables, but the new semantic aliases as named Figma variables are not yet mirrored (flagged for the next code→Figma variable sync pass, same class of gap as the 2026-08-16 sync ADR).

## 2026-09-06 — brand.accentInk added; dark text.tertiary re-derived to clear AA on the default card ground

**Stage:** 02-design (scds-v2)
**Type:** token addition + token value change + accessibility correction
**Status:** accepted
**Slug:** accent-ink-dark-tertiary

**Context.** WQ-037 shipped mode-following dark mode on Studio PM (a consumer of SCDS) and measured every text node in dark. Every failure reduced to two SCDS pairs on `color.surface.raised` in dark (`dark.raised1` `#141414`), which `semantic.json` itself calls the "default card ground":

1. `color.brand.accentDeep` used as text: `teal.700` `#056268` on `#141414` measures **2.59:1**. Its `$description` called it "AA-passing accent text on light surfaces," but its dark-mode value maps to the same `teal.700` — there was no mode-following accent text ink in the system at all. `interactive.hoverInk` is the only teal that passes AA as text in both modes, and it is a hover-state token, not a general accent ink.
2. `color.text.tertiary` dark = `dark.textTertiary` `#7C7C7A` on `#141414` measures **4.40:1**, below WCAG AA 4.5:1. `semantic.json` declared `surface.raised` a `forbiddenSurfaces` entry for tertiary in dark, so `npm run tokens:verify` passed — but a tertiary tier forbidden on the default card ground in dark is a system defect, not a consumer bug.

**Decision.**

Added `color.brand.accentInk` (CSS `--sc-color-brand-accent-ink`): light `{color.teal.700}`, dark `{color.teal.400}`. It is the mode-following counterpart of `accentDeep`'s light-only text claim. Measured: light — page 5.78:1, raised 6.32:1, floating 6.77:1, sunk 4.71:1 (passes); deepSunk/rail 2.97:1, hover 3.79:1 (fail, declared in `usageRestrictions.forbiddenSurfaces.light`). Dark — page 5.84:1, sunk 6.10:1, raised 5.61:1, deepSunk/floating 5.30:1, rail 6.03:1 — every dark surface clears AA, so `forbiddenSurfaces.dark` is empty. `accentDeep`'s `$description` now points to `accentInk` for text use and states its own 2.59:1 dark-on-raised failure; its values are unchanged — it remains the pressed-state fill.

Re-derived `color.dark.textTertiary` from `#7C7C7A` to **`#858583`** — smallest step in the true-neutral ladder pattern (equal R/G, B two lower, matching `#7C7C7A`'s own pattern) that clears AA with real margin on `raised1`, the tightest dark surface. New dark figures: page 5.18:1, well(sunk) 5.42:1, floor(rail) 5.35:1, raised1(raised) 4.98:1, raised2(deepSunk/floating) 4.71:1 — every dark surface now clears AA, so `text.tertiary`'s `forbiddenSurfaces.dark` is now empty (light restrictions unchanged: sunk, deepSunk, rail, hover still fail there). The retired `#7C7C7A` figures (4.58, 4.79, 4.73, 4.40, 4.16) moved to `HISTORICAL` in `scripts/verify-contrast.mjs`, named against the retired hex. `npm run tokens:verify` passes all four sections (AA, live claims, orphans, no over-broad restriction) with `color.brand.accentInk` added to `TEXT_TIERS` so check 1 guards it going forward.

**Consequences.**
- Every dark consumer's tertiary text lightens by one step (`#7C7C7A` → `#858583`). Visual diffs on dark tertiary text are expected and correct.
- `accentDeep` is unchanged — it stays `teal.700`/`teal.700` because it is also the pressed-state fill and other consumers depend on that value; do not repaint it.
- Consumers that used `accentDeep` as text (accepting its 2.59:1 dark failure, or restricting it to light-only by convention) should rebind to `accentInk`, which is mode-following and AA-safe by declared restriction.
- `_config/design-system/token-map.md` regenerated after this branch rebased over the WQ-038 aliases (fingerprint `80c881745ece`, 116 semantic tokens); the two changes are additive and do not overlap.
- The on-device P3 near-black-drift check of the dark ladder (studio learning #11) remains Levi's — this change re-derives a text-tier value, not the ladder's near-black anchors, but any future ladder move should re-run that check before shipping.

**Alternatives considered.**
- **Keep the restriction and tell consumers to use `text.secondary` on cards.** Rejected: it erases the tertiary tier on the default card ground in dark, which is exactly the defect WQ-037 surfaced, not a fix for it.
- **Map `accentDeep` itself to `teal.400` in dark.** Rejected: `accentDeep` is also the pressed-state fill, and other consumers depend on its current value; changing it would be a breaking repaint disguised as an accessibility fix.

## 2026-09-06 — The status `*-ink` tiers enter the AA sweep; all three dark inks re-derived off the card ground

**Stage:** 02-design (scds-v2)
**Type:** verifier scope correction + token addition + token value change
**Status:** accepted
**Slug:** status-ink-aa-guard

**Context.** WQ-037 re-measured Studio PM in dark after the WQ-040 tokens landed. The two pairs WQ-040 fixed were gone; a third appeared — `color.status.warning-ink` on `color.surface.raised`, **4.34:1**, rendering the session-state chip and the contended-repo warning on every card. `npm run tokens:verify` was green throughout, because check 1's `TEXT_TIERS` list held four entries (`text.primary`, `text.secondary`, `text.tertiary`, `brand.accentInk`) and none of the three `status.*-ink` tokens. Those tokens are text-only by their own `$description` — that is the entire reason learning #56 created them — and nothing in the repo checked them against a single surface. The figures each one quoted were measured against `dark.surfacePage` alone, which is the lightest-contrast dark ground in the set and therefore the one that hides a card-ground failure.

Measured before this change, dark: `warning-ink` raised1 4.34:1 / raised2 4.10:1; `info-ink` raised1 4.37:1 / raised2 4.13:1; `success-ink` (which had no dark ink and reused `status.success.dark`) raised2 4.37:1. Three of three below AA on the default card ground or the surface directly under it.

**Decision.**

Added `color.status.success-ink` a dark primitive of its own (`status.success.ink.dark` `#3C9366`) — it had been aliasing the fill token. Re-derived `status.warning.ink.dark` `#D2512A` → **`#DC5A33`** and `status.info.ink.dark` `#4A74EA` → **`#517DF3`**. Each is one OKLab lightness step with hue and chroma held, sized so the tightest dark ground (`dark.raised2` `#1A1A1A`, `surface.deepSunk`/`surface.floating`) clears AA with margin. Every dark surface now passes for all three: warning 4.60–5.30:1, info 4.62–5.32:1, success 4.61–5.30:1.

Added all three to `TEXT_TIERS`, taking check 1 from 56 to **98 pairs**. That immediately demanded honest `usageRestrictions` on each: light `sunk` / `deepSunk` / `rail` / `hover` are forbidden (3.73–2.35:1 for warning, and the same shape for the other two hues — the compressed light surfaces are unreachable for any status hue without abandoning the hue), dark is empty. The retired figures moved to `HISTORICAL` named against the retired hex, and the new per-surface figures are registered in `CLAIMS`, so check 2 now guards 115 claims.

**Rationale.** A token whose `$description` says "text-only tier" and which no text-tier check covers is the exact shape of studio learning #181 — a gate line with no producing artifact. The fix is not the three new hexes; it is that `TEXT_TIERS` now contains every token the system calls text, so the next status hue that drifts fails in CI instead of in a consumer's Gate-3 measurement three repos downstream.

**Consequences.**
- Warning, info and success text lighten by one step in dark for every consumer. Visual diffs on dark status text are expected and correct.
- The base `status.*` tokens are unchanged — they remain fill/border/dot tiers and remain outside the sweep, as `text.disabled` and `text.onAccent` are.
- `status.error` still has no `-ink` tier. It is the one status hue that clears AA as text unaided in both modes (light 8.15:1 on page, dark 4.76:1), so it is not in `TEXT_TIERS` and is not guarded by check 1. It reads 4.32:1 on dark `raised2` — a consumer rendering error text on a floating surface in dark is outside AA today. Named here, not fixed here: adding `error-ink` is a fourth hue derivation and belongs to its own change.
- `_config/design-system/token-map.md` regenerated (fingerprint `049ae679c0da`, then `6db8d4ad28bd` after the PR #48 correction below; 159 primitives / 116 semantic).
- **Correction, same day, before any consumer pulled it.** The commit that landed as PR #47 also repointed the *base* `color.status.success` dark mode ref to `{color.status.success.ink.dark}` — an unintended second hit from a string replace that matched both the base token and the ink, which are formatted identically. The base is a fill/border/dot tier and its dark value is `{color.status.success.dark}` `#388F63`, unchanged by this decision; PR #48 restores it. Nothing caught it: base `status.*` tokens are outside `TEXT_TIERS` by design, and the CLAIMS row that mentions `status.success.dark` resolves the primitive path directly, so check 2 never saw the semantic ref move. That is this ADR's own thesis landing on this ADR.
- No Figma sync run; the three re-derived values are primitives that exist as Figma variables and are now out of date there, same class of gap as the 2026-08-16 sync ADR.

**Alternatives considered.**
- **Declare `surface.raised` forbidden for the inks in dark.** Rejected for the reason WQ-040 rejected it a day earlier: `surface.raised` is the default card ground. A status tier that cannot render on a card is not a status tier.
- **Add the inks to `TEXT_TIERS` without re-deriving, and restrict what fails.** Rejected — it would encode the defect as policy. The restriction list is for surfaces a hue genuinely cannot serve, not for the ones it happens to fail today.
- **Re-derive against `dark.surfacePage` only, matching how the values were originally tuned.** Rejected: that is the practice that produced the bug. A tier is tuned against the tightest ground it is permitted on, not the loosest.

---

## 2026-09-11 — Button: the Figma library is the stale side; code stands, and the drift list goes back to Figma

**Stage:** 02-design → 03-build (scds-v2 follow-up)
**Type:** UX / design tradeoff
**Status:** accepted

**Context.** studio-pm's ADR-041 flagged upstream that its reference screenshot showed an **outlined** secondary button while `Button.tokens.md` records that outline as retired — "scds-v2 Phase 2 — was an ink outline" — and asked this repo to settle it via Code Connect. Two claims in that ask did not survive contact:

1. **Code Connect could not perform the comparison.** `Button.figma.tsx` pointed at `ufNlysCwWz7y2FBk61DxbN` (the *brand* file) with the placeholder `node-id=0-1`, guessed property names, and a `Ghost` enum value that names a variant on **neither** side — `Button.jsx` `VARIANTS` is `primary | secondary | tertiary | destructive`, so a `Ghost` selection would have silently rendered `primary`. Publish is also still plan-gated: `code_connect:write` is Org/Enterprise-only and this account is Professional (re-confirmed 2026-09-11, MCP `whoami` → plan "Studio", tier `pro`).
2. **The Figma MCP is not unauthenticated.** ADR-041 recorded it as unauthenticated and derived its values from tokens instead. It authenticates from this session, so the compare was done by direct read rather than inference.

**Decision — code is current, Figma is stale.** The fill-only secondary is an approved, merged decision (this log, 2026-07-27, "SCDS v2 Phase 2: fill-only elevation"): *"Button — `secondary` ink outline → fill-only chip (`surface-sunk` rest, ink label AA; `surface-hover` + teal label on hover/focus …)"*. `Button.module.css` and `Button.tokens.md` implement it. The Figma master — SCDS library file `0zVoxaLJQkjHENYJlQk1VT`, page `24:3`, component set `9:438` — never received Phase 2 and still strokes every secondary state. **Nothing in the code changes.**

**What the compare actually found.** Eleven drift rows, not one. Beyond the reported secondary outline: disabled strokes on all three variants, a Focus state modelled as "hover + ring" (correct for secondary only — the accent is a hover state, so primary and tertiary focus must rest), a label still set in **Cascadia Mono SemiBold 11** when the owner chose NHG per spec (this log, 2026-07-09), a primitive `space/16` binding where the semantic `space/component/padding-inline/lg` belongs, and no `Destructive` variant or `Loading` state at all. The full table with node ids is in `src/components/CODE-CONNECT.md` → "Known Figma-side gaps".

**Landed here.** (1) `Button.figma.tsx` repointed at the real file + node with the component set's real properties (`Variant`, `State`, `Label`, `Show Icon`, `Icon`); `destructive` and `loading` left explicitly unmapped because Figma has no counterpart. (2) `Button.jsx`'s docblock still described secondary as "an ink outline" — the same stale sentence, in code, one file from the CSS that contradicts it. Corrected. (3) `CODE-CONNECT.md` records Button's Figma side as confirmed and carries the drift table.

**Blocked — the Figma edit itself.** The `use_figma` write was refused by this session's permission classifier, so rows 1–7 and 9 are **not** applied. They are transcriptions of an already-approved decision, so they need no further design call — only a session that can write. Row 8 additionally needs NHG Text loadable by the MCP (`loadFontAsync` has failed for the brand faces before). Rows 10–11 (Destructive, Loading) are new component work and want their own sprint, not a correction pass.

**A resting-accent primary is not wanted, and nothing is actually asking for one.** The premise that studio-pm requested one is stale by one revision. ADR-041's own same-day correction withdraws it: *"the accent is a hover state, so a resting teal control is not available without changing SCDS … If Levi wants a resting teal control, that is an SCDS change, not a studio-pm deviation."* studio-pm now follows the rule and lists the four legitimate homes for teal on its board. WQ-055 is a **different** conflict — the slop blocklist versus the pill and the arrow — and says nothing about resting accent. So: **no**, absent a new brand-direction call from Levi. The rule is load-bearing rather than decorative — it is what makes hover legible as *the thing that acts*, and it is why `tertiary` exists as the one persistent teal.

**Consequences.** *Easier.* The upstream question closes with a node-level list instead of a screenshot disagreement, and the Code Connect mapping stops naming a file, a node, and a variant that never existed. *Harder.* The Figma master stays wrong until a writable session lands rows 1–7 and 9; every branded property reading Figma rather than code keeps seeing an outlined secondary until then. *Cost.* Eight of eleven rows are still open.

---

## 2026-09-11 — Button: the Figma master is brought onto the code spec (ten of twelve drift rows applied)

**Stage:** 02-design → 03-build (scds-v2 follow-up)
**Type:** UX / design tradeoff
**Status:** accepted
**Amends:** the entry immediately above (2026-09-11, "the Figma library is the stale side"), which recorded the Figma edit as blocked.

**Context.** The preceding entry settled *which side was stale* — code — and left the Figma correction unapplied because this session's permission classifier refused the `use_figma` write. Levi authorised the write directly. It was retried and succeeded.

**Decision.** Rows 1–9 of that entry's drift table are applied to the SCDS library master (`0zVoxaLJQkjHENYJlQk1VT`, page `24:3`, set `9:438`). Secondary is now a fill-only chip in all five states; all three disabled variants take the `surface/sunk` fill and lose their stroke frame; Primary and Tertiary Focus revert to their resting colour with only the `focus-ring` child carrying the ring; every label moved off the retired Cascadia Mono `text/mono/chrome` onto `text/label/chrome` (NHG Text 65 Medium 11); Secondary's inline padding moved from the primitive `space/16` to the semantic `space/component/padding-inline/lg`. None of this is a new design call — each row transcribes the already-approved scds-v2 Phase 2 decision (this log, 2026-07-27) and the 2026-07-09 NHG-over-mono choice.

**Row 8 was mis-scoped as blocked.** The prior entry held the font swap back on the recollection that the Figma MCP cannot load the brand faces. That recollection is about *authoring* TextStyles. `Haas Grot Text Trial 65 Medium` loads fine and the `text/label/chrome` style already existed, so **applying** it was never blocked. The memory note has been corrected. Learning #45's shape: a remembered failure at one layer was read as a constraint at another.

**A twelfth row surfaced during the fix.** The arrow is not `currentColor` in Figma — it is two stroked vectors overridden per variant, and in eight states they bound a *different* token from the label beside them. Two of those were a visible mismatch: Secondary Hover and Focus drew a `#056268` arrow against a `#038e93` label. Primary Hover and Active bound `color/warmGray/25` — a raw primitive — where the label bound `text/onAccent`. All sixteen vectors now bind their own label's token. The code cannot express this defect (`currentColor` makes arrow and label the same value by construction), which is exactly why nobody caught it: the drift had no code-side counterpart to disagree with.

**Verification.** A read-back asserted fill, stroke, label token, arrow token, font and focus-ring presence for each of the 15 variants against a table transcribed from `Button.tokens.md`: **15 PASS / 0 FAIL**.

**Deliberately not done — publishing the library.** The edits sit in the file. Consumers (`client-portal`, `studio-pm`, every branded property) keep resolving the old component until the library is published from the Figma UI. Publishing is the outward-facing step and is left to Levi.

**Still open.** Rows 10–11 — no `Destructive` variant and no `Loading` state in the Figma set. Those are new component work rather than corrections, and want their own sprint including the spinner's motion spec.

**Consequences.** *Easier.* Figma and code agree for the first time since Phase 2; a branded property reading either source now gets the same button. *Harder.* The library still needs a human publish for any of it to reach consumers, so until then the two sources disagree in a *new* way — file correct, published version stale. *Cost.* Two rows deferred; the Figma set still cannot express `destructive` or `loading`.

---

## 2026-09-11 — Swift is the third emitter off the same two token files; it raises rather than skips

**Status:** Accepted
**Consumer:** studio-pm, which is rebuilt as a native macOS app (its ADR-029) and vendors
this output as a Swift package (its ADR-046)
**Builds on:** the 2026-08-17 inversion that made `token-map.md` a generated mirror rather
than a source, learning #178 (a pasted mirror needs a generator and a stamped count), #162
(make the illegal state unrepresentable), #213 (classify by exclusion and raise), #131
(a pin ships with its verifier), #186 (a rule whose log nobody reads is a convention)

### Context

A Shokunin-branded property is being built natively for the first time. It needs SCDS
colour, type, spacing, radius, motion and shadow in Swift.

The failure mode is known and this repo has already paid for it once: `token-map.md`
drifted for about three months while it was hand-maintained, which is why its staleness is
now a build failure. A hand-transcribed Swift token set would be the same defect in a
language nothing here compiles.

### Decision

**`scripts/tokens-to-swift.mjs`, a third sibling beside `tokens-to-css.mjs` and
`gen-token-map.mjs`.** Same two inputs, no new source. It emits
`src/swift/SCDSTokens.swift`, which is committed and checked.

Four rules the generator holds, each of which is a rule this repo already keeps elsewhere:

1. **Semantic tokens only.** Primitives are resolved through during generation and never
   emitted. A primitive reachable from view code is the same defect as a raw hex, one
   level of indirection later — the Sprint 4 contract's rule, enforced by a language
   boundary rather than by review.
2. **It raises rather than skips.** An unknown `$type`, an unresolvable alias, a duplicate
   symbol, a font weight with no SCDS weight name behind it, a colour in an unrecognised
   form, a shadow layer the parser cannot read — every one stops the build. A generator
   that skips what it does not recognise reports its own ignorance as success (#213).
3. **Typography travels whole.** The emitted type carries family, size, weight,
   line-height and tracking together, and exposes no way to take a size without them. It
   has no `font` property either: `font(relativeTo:)` requires a system text style,
   because the scaling anchor is the consuming app's call and SCDS does not hold it.
4. **The stamp carries no wall-clock time.** It carries both source hashes, both
   `$metadata.version` values, the tokens' own `generated` date, and the token count. A
   generated-at timestamp would make every drift check report drift, which disables the
   check that gives a stamp its value (#131).

**`tokens:swift:check` joins `tokens:map:check` in `pr-check.yml`.** A drift check with no
reader is a convention (#186), and a native consumer cannot see a CSS build break.

### What the CSS emitter carries that Swift cannot

Recorded rather than discovered later by whoever needs one:

- **Inset shadows and spread radii.** `shadow.control.inset` is two inset layers, one with
  a spread. SwiftUI's `.shadow` draws a plain outer shadow only. Both values are **carried
  on the layer** rather than dropped or faked: `scdsShadow(_:)` refuses to draw them and
  `needsExplicitBuild` says so before a consumer reaches for the modifier. A silent skip
  would be an invisible lie and drawing an inset layer outside would be a visible one.
- **Channel-triplet compositions** (`rgb(var(--sc-p-color-ink-rgb) / 0.06)`) resolve at
  generation to literal channels plus an alpha, because Swift has no cascade to resolve
  them in. The triplet primitives stay unemitted; only the resolved result ships.

### Consequences

**Easier.** A native consumer gets the design system by building, not by transcribing, and
a token rename breaks its compile inside the change that renamed it.

**Harder.** A third emitter is a third thing that must keep passing. The upkeep clause
(#199): the generator walks the DTCG tree, so a **new** token appears with no edit and only
a **removed or renamed** one can break it — which surfaces in CI, in the same PR.

**Cost.** Every future token whose `$type` this generator has no rule for fails the build
rather than being skipped. That is the intent, and it will occasionally be inconvenient.

### Raised, not acted on

**The dark surface ramp is neutral, not warm.** `color.dark.surfacePage` is `#0F0F0F`,
`floor` `#0A0A0A`, and `raised1`–`raised5` are pure greys. Only `well` (`#080807`) carries
any warmth. Studio learning #11 anchors a dark base warm (`#0D0C0B`) specifically because
near-black neutrals cast on wide-gamut Chrome, and studio-pm's own colour spec describes
SCDS's dark page as "a warm near-black", which it is not.

This is an observation from reading the values, not a decision. Changing a dark ramp is a
brand-direction call and it repaints every consumer, so it is logged here for Levi rather
than acted on inside a generator PR.

## 2026-09-23 — `Button.jsx`'s `arrow=true` default is kept as an intentional exception to the slop blocklist, for now

**Stage:** n/a (studio-memory COO audit response, not a build sprint)
**Type:** Product / brand-direction call
**Status:** accepted — intentional, temporary exception (not a rule change)

**Context.** The 2026-09-23 COO audit (Flag item 13; carried from 09-14, tracked as WQ-055)
found that `Button.jsx` defaults `arrow=true`, shipping the trailing-arrow CTA pattern
`slop-blocklist.md` names as a banned AI-editorial default, on every branded Button
instance studio-wide. The packet (`coo.notify-fork-wq055-scds-arrow-2345-2026-09-11`) had
sat parked 12 days; the pill half of the originally-flagged conflict does not hold up
(see the 2026-07-09 Button redesign entry above — pill radius was a deliberate, reasoned
choice), but the arrow-as-default-on-every-CTA half is real and unresolved.

**Decision.** Levi's call: **override the blocklist for now — the `arrow=true` default
stays as shipped.** This is not a retraction of the blocklist rule and not a considered
resolution of the conflict; it is a deliberate, logged, temporary exception pending a
best-practices review Levi has not yet done. No code changes in this pass.

**Consequences.** Easier: no churn on every branded property's primary CTA while the
question is still open. Harder: the studio's own slop-blocklist rule has a standing,
named exception until the review happens — and a rule with an unreviewed exception is
exactly the shape that goes stale silently (learning #186, "a rule whose log nobody
reads is a convention"). Tracked at `studio-memory/WORK-QUEUE.md` WQ-055, tagged for
resurfacing at the next COO audit if Levi has not revisited it by then.

**Alternatives considered.** *Change `Button.jsx`'s default to `arrow=false`* — rejected
for now, per Levi; not a design call made on its own merits, so not applied without one.
*Leave the FORK packet parked indefinitely* — rejected: parked packets are surfaced not
answered, and this now has an actual answer (override, revisit later), so the packet is
closed instead.

**Reconvene signal.** Levi researches trailing-arrow-CTA best practices and either lifts
the exception (changes the default) or formally amends the blocklist to carve out a
named exception for `Button.jsx`. Until then this entry is the record of why the default
does not match the blocklist.

---

## 2026-09-24 — Dark mode moves to a slate ladder anchored on #2C3239; brand teal ramp untouched

**Stage:** 02-design (scds-v2)
**Type:** Brand-direction call (Levi) + token value change + alias re-point
**Status:** accepted
**Slug:** dark-slate-ladder
**Builds on:** the 2026-09-11 Swift ADR's "Raised, not acted on" note (the dark ramp was neutral, not warm), 2026-09-06 (status inks tuned against the tightest ground), 2026-08-17 (every prose figure is registered)

**Context.** The scds-v2 dark ladder was true neutral: equal-RGB near-blacks from `#080807` to `#333333`. The 2026-09-11 Swift ADR logged it as an observation for Levi rather than a decision. Levi chose a cool slate dark mode, measured off a Figma comp rather than drawn from a ramp formula.

**Source and measurement.** sc-site Figma file `oIeQl6SlqWjvyZ126f65tn`, Frame 19 (node `156:15`): the light comp under a `#E3DFD8` rectangle in exclusion blend. The page ground reads `#2C3239`. In OKLCH that is hue 252.3°, chroma 0.015. Every ground step holds that hue and chroma and moves only in lightness. The text tiers take the blend's own result: ink `#1A1815` becomes a warm light near `#CFCDC9` (hue 84.6°, chroma 0.006), lifted where a tier needed it for AA.

**The highlight rule.** Luminance order is kept, not inverted. A pure exclusion inversion would make the light ladder's highlights dark and its wells light. The ladder keeps each role's direction instead: `well` stays the darkest step, `raised5` the lightest, text stays light on dark. Only the hue and the anchor come from the blend.

**Decision.** Value changes (source: `final-palette.md`, derived 2026-09-24):

| token | old | new | OKLCH L |
|---|---|---|---|
| `color.dark.well` | `#080807` | `#1F252C` | 0.262 |
| `color.dark.floor` | `#0A0A0A` | `#252B32` | 0.286 |
| `color.dark.surfacePage` | `#0F0F0F` | `#2C3239` | 0.314 |
| `color.dark.raised1` | `#141414` | `#343A41` | 0.346 |
| `color.dark.raised2` | `#1A1A1A` | `#3B4249` | 0.375 |
| `color.dark.raised3` | `#212121` | `#434A51` | 0.405 |
| `color.dark.raised4` | `#2A2A2A` | `#4D535B` | 0.440 |
| `color.dark.raised5` | `#333333` | `#565D65` | 0.475 |
| `color.dark.border` | `#2A2A2A` | `#4D535B` | 0.440 |
| `color.dark.borderSubtle` | `#1A1A1A` | `#3B4249` | 0.375 |
| `color.dark.textPrimary` | `#F5F5F5` | `#EAE8E3` | 0.931 |
| `color.dark.textSecondary` | `#B9B9B7` | `#C9C7C3` | 0.830 |
| `color.dark.textTertiary` | `#858583` | `#B3B1AD` | 0.761 |
| `color.dark.textDisabled` | `#565654` | `#7C7A76` | 0.580 |
| `color.focusRing.dark` | `#E8E8EA` | `#E9EBEE` | 0.939 |
| `color.status.success.dark` | `#388F63` | `#57AD7F` | 0.681 |
| `color.status.success.ink.dark` | `#3C9366` | `#6AC090` | 0.740 |
| `color.status.warning.dark` | `#C94E28` | `#F67751` | 0.711 |
| `color.status.warning.ink.dark` | `#DC5A33` | `#FE9374` | 0.770 |
| `color.status.info.dark` | `#3866E8` | `#709AFD` | 0.700 |
| `color.status.info.ink.dark` | `#517DF3` | `#8DAFFD` | 0.760 |
| `color.status.error.dark` | `#DD4C4C` | `#FE6B67` | 0.709 |

Status fills were re-derived, hue held, until each clears 4.5:1 on the new page (success 4.74, warning 4.73, info 4.76, error 4.63). Status inks were re-derived against `raised2`, the lightest dark UI ground, per the 2026-09-06 rule that a tier is tuned against the tightest ground it is permitted on.

Three dark aliases re-pointed in `tokens/semantic.json`. The teal ramp values do not move:

| semantic | old dark | new dark | why |
|---|---|---|---|
| `color.brand.accentInk` | `teal.400` | `teal.200` | `teal.400` reads 3.10:1 on `raised2` (surface.deepSunk/floating) and 3.94:1 on the page. `teal.200` reads 5.99:1 at worst. |
| `color.interactive.hover-ink` | `teal.400` | `teal.200` | Same pair, same reason. |
| `color.interactive.hover` | `teal.400` | `teal.300` | Icon/border tier. `teal.300` reads 4.34:1 at worst, above the 3:1 non-text bar, and stays visibly more saturated than the text ink. |

**AA sweep.** `npm run tokens:verify`: check 1 passes all 98 text-tier × surface × mode pairs with no dark `forbiddenSurfaces` added. Worst dark case per tier, all on `raised2`: text.primary 8.32:1, text.secondary 6.04:1, text.tertiary 4.76:1, brand.accentInk 5.99:1, success-ink 4.64:1, warning-ink 4.68:1, info-ink 4.70:1. Check 2 guards 142 claims. Check 3 passes. The retired neutral-ladder figures are pinned in `HISTORICAL` against their old hex pairs.

**What did not change.** Light mode: every light value and alias is byte-identical (the `tokens.css` diff touches only `--sc-p-color-dark-*`, the dark status primitives, `focus-ring-dark`, and three lines of the `[data-theme="dark"]` block). The teal ramp. The divider white-alpha scale (5/9/15%). `warmGray.50` as dark `interactive.default` and `border.strong` (11.50:1 on the new page). The dark shadow compositions. `brand.accent`, `brand.accentFill`, `brand.accentDeep`, `interactive.active` aliases.

**Named here, not fixed here.**
- `color.signal.onLive` in dark is `dark.surfacePage` on `signal.liveBright` `#DA5C4D`. It read 5.13:1 on the neutral page and reads 3.46:1 on the slate one. The LIVE badge text is outside check 1 (signal tokens are not in `TEXT_TIERS`). It needs its own call: a darker dark `onLive`, or a darker dark `liveBright`.
- `status.error` still has no `-ink` tier. The slate dark fill reads 4.11:1 on `raised1` and 3.64:1 on `raised2`, so error text on a dark card is below AA. The 2026-09-06 ADR named the same gap at 4.32:1 on `raised2`; it is wider now.
- `brand.accentDeep` dark (`teal.700`) reads 1.62:1 on `surface.raised`. It is a pressed-state fill, not text, and its role is unchanged.

**Propagation.** The Figma SCDS library (`0zVoxaLJQkjHENYJlQk1VT`) variables and Color page are being updated in the same change by a parallel session. `client-portal` and `shokunin-crafthouse-site` receive the change through the existing `brand-tokens-updated` dispatch when this branch merges. `tokens.css`, `token-map.md` and `SCDSTokens.swift` are regenerated in the token commit, so studio-pm's Swift package picks it up on its next vendor bump.

**Consequences.** *Easier.* The dark mode now has a measured brand source instead of a formula, and the near-black P3 drift caveat (studio learning #11) no longer applies: the darkest step sits at OKLCH L 0.262. *Harder.* Every consumer's dark mode repaints. Visual diffs on every dark surface, dark text, focus ring, status colour and dark accent text are expected and correct. *Cost.* Dark contrast headroom is lower than on the near-black ladder (text.primary at its worst fell from 15.96:1 on the neutral raised2 to 8.32:1 on the slate one), so the status and accent tiers sit closer to the AA line and the next ground move will need the same re-derivation.

**Alternatives considered.**
- **Pure exclusion inversion of the light ladder.** Rejected: it inverts luminance order, so wells read light and raised surfaces read dark, which breaks the Phase 2 elevation model.
- **Keep `teal.400` and forbid dark `raised2` for accent text.** Rejected: `raised2` is `surface.floating`, the popover ground. The 2026-09-06 rule applies: re-derive the tier, do not forbid a common ground.
- **Lift the teal ramp.** Rejected: the brand teal is owner-specified and shared by the mark. Re-pointing to an existing lighter step keeps the ramp fixed.

## 2026-09-24 — Two motion scales join the press ladder: `pressCard` 0.995 and `recedeBoard` 0.98

**Stage:** 02-design (scds-v2)
**Type:** Token addition (values ruled by Levi in studio-pm ADR-074)
**Status:** accepted
**Slug:** motion-scale-recede-press-card
**Builds on:** Sprint 4's `motion.scale.pressButton` / `motion.press.scale` pair, the 2026-09-11 Swift ADR (semantic tokens only are emitted)

**Context.** studio-pm, the studio's native board, needs two scale values SCDS does not carry. Levi ruled both values on 2026-09-24 in studio-pm ADR-074. §25: the board recedes under the answer sheet at 0.98, with a dim, never aliased to the button's press. §29: a card's press gets its own scale, 0.995, with a colour step under Reduce Motion. studio-pm draws every value from SCDS (a Shokunin-branded property), so the values enter here first and are vendored down.

**Decision.** Two primitives and two semantic aliases:

| primitive | value | semantic | Swift |
|---|---|---|---|
| `motion.scale.pressCard` | `0.995` | `motion.press.card.scale` | `SCDS.Motion.pressCardScale` |
| `motion.scale.recedeBoard` | `0.98` | `motion.recede.scale` | `SCDS.Motion.recedeScale` |

The card press sits under `motion.press` so it inherits `press.duration` and `press.easing` by name. The recede is its own group: it is a state held while a sheet is up, not a touch, so it takes no press timing.

**What did not change.** `motion.scale.pressButton` 0.985, `motion.scale.pressTap` 0.92 and `motion.press.scale`. No colour, no contrast claim: `tokens:verify` passes unchanged.

**Named here, not fixed here.**
- The recede's dim has no ruled value. It is not tokenised in this change; studio-pm's motion unit names it, and it enters here if it needs a new value.
- The Figma SCDS library (`0zVoxaLJQkjHENYJlQk1VT`) does not carry either variable yet. The parity report reads them as code-only until the next library sync.

**Propagation.** `tokens.css`, `public/tokens.css`, `token-map.md` and `SCDSTokens.swift` are regenerated in the token commit. studio-pm vendors `SCDSTokens.swift` in its own PR. Web consumers receive two new custom properties and use neither.

**Alternatives considered.**
- **Alias the card press to `motion.press.scale`.** Rejected by the ruling: 0.985 on a full card reads as a lurch.
- **Primitives only.** Rejected: the Swift emitter emits semantic tokens only, so a primitive-only value never reaches studio-pm.

## 2026-09-25 — The recede gets its dim: `motion.opacity.recedeBoard` 0.6

**Stage:** 02-design (scds-v2)
**Type:** Token addition (value chosen by Levi, studio-pm ADR-080)
**Status:** accepted
**Slug:** motion-opacity-recede
**Builds on:** 2026-09-24 motion-scale-recede-press-card, which left the recede's dim unnamed

**Context.** studio-pm ADR-074 §25 ruled that the board recedes under the sheet "with a dim", and gave no value. SCDS has no opacity primitive. Levi chose 0.6 on 2026-09-25 (studio-pm ADR-080).

**Decision.** One primitive group and one semantic alias:

| primitive | value | semantic | Swift |
|---|---|---|---|
| `motion.opacity.recedeBoard` | `0.6` | `motion.recede.opacity` | `SCDS.Motion.recedeOpacity` |

The dim is the receding layer's opacity over the page ground, not a scrim colour. It sits beside `recede.scale` because the two move together and hold for the sheet's life.

**What did not change.** Every colour and every contrast claim: `tokens:verify` passes unchanged. The dimmed board is behind a modal sheet and takes no input, so no text contrast claim is made for it.

**Propagation.** `tokens.css`, `public/tokens.css`, `token-map.md` and `SCDSTokens.swift` are regenerated in this commit. studio-pm vendors `SCDSTokens.swift` in its own PR. The Figma library does not carry the variable until the next sync.

**Alternatives considered.**
- **A scrim colour at an alpha.** Rejected: it needs a colour and an alpha per mode, and fading the layer toward the page ground gives the same read with one number.
- **No dim, scale only.** Offered and not chosen.

## 2026-10-01 — WorkingMark: an animated scribble for "working right now"

**Stage:** 03-build (scds-v2)
**Type:** Component addition (asked for by Levi, 2026-10-01; motion locked by Levi, 2026-10-02)
**Status:** accepted
**Slug:** working-mark
**Consumer:** studio-pm ADR-087, the current step's marker while a session is working

**Context.** Studio PM's `Atom/Step marker` gained a new current-state icon in Figma (Studio PM — Screens & States, node 3:4): a chaos-circles scribble of eleven loops, generated at bookofshapes.com (Circle Count 10, Min Radius 100, Noise 0.125). Levi asked for it as an animated SVG, a short seamless loop that reads as something currently working, in the SCDS library and in Studio PM.

**Decision.** `WorkingMark` joins the library: `src/components/WorkingMark/` (component, CSS module, token sheet, path data) and a standalone animated asset at `assets/icons/working-mark.svg`. Motion, as Levi locked it against a live preview:

- **Spin:** each loop turns once per 1600ms beat; neighbouring loops turn opposite ways; the eleven are spread evenly across the beat.
- **Pulse:** each loop shrinks to 80% and back once per beat, on `motion.cut.easing`.
- **Shimmer:** a highlight sweeps round the mark 2.5 times per beat, mixing `color.text.onAccent` into the accent up to 80% at its brightest.
- **Seamless:** everything returns to its start every two beats (3200ms).
- **Reduced motion:** the Figma drawing at rest, flat accent, no shimmer. **Paused** (`working={false}`): still, secondary ink, no shimmer.
- Tokens consumed: `color.brand.accent`, `color.text.onAccent`, `color.text.secondary`, `size.icon.sm/md/lg`, `motion.cut.easing`. No new tokens.

**Component constants, not tokens.** The beat, the pulse floor, the sweep rate, the shimmer strength, the stroke. Each is named with its reason in `WorkingMark.tokens.md`. Promote the beat to a `motion.*` token when a second consumer needs it.

**Spinning.** studio-pm `motion.md` forbade spinners because a spinner implies a tracked cycle. Levi chose spinning for this mark on 2026-10-02; studio-pm ADR-087 records the exception.

**Parity.** studio-pm draws the same points (`WorkingMarkGlyph.swift`) with the same spin, pulse and sweep (`WorkingMark.swift`). The Figma library's `WorkingMark` carries spin and pulse on its timeline; Figma keyframes cannot rotate a gradient, so the shimmer lives in code only. Change all three together.

**History.** The first build swung each loop ±14° and breathed it 0.93 to 1. Levi saw no movement: turning a near-circle a few degrees barely changes how it looks. Replaced the same day.

**Alternatives considered.**
- **Small swings, no full turn.** Built first, rejected: invisible at 16px.
- **Morph the path data (SMIL `d` keyframes).** Rejected: 119 KB for a 16px icon.
- **A GIF.** Rejected by Levi: it must stay a crisp vector.
- **Pulse floor 0.7, sweep 2 turns per beat.** Tried in the preview; 0.7 read as slower, 2 turns as too slow.

## 2026-10-02 — Primary button: dark-mode shadow matched to its highlight, plus an inner bevel

**Context.** In dark mode the primary button's outer shade (`shadow.control.raised`, black 0.55 / 0.45) read far heavier than its white highlight (0.06 / 0.04). Levi asked for the shade to match the highlight's contrast and for two inner shadows, light and dark, so the pill's edges read rounded.

**Decision.**
- **Outer shade, dark mode:** black 0.55 / 0.45 → **0.24 / 0.16**. Each now shifts CIE L* on `surface.page` (#2C3239) by the same amount its white highlight does: ΔL* 5.6 and 3.7. Light mode unchanged.
- **New token `shadow.control.bevel`:** two inset layers. White top-right `inset -2px 2px 4px`, shade bottom-left `inset 2px -2px 4px`. Light: white 0.70 / ink 0.06. Dark: white 0.06 / black 0.20 (black matched to the highlight's ΔL* 5.2 on `surface.raised`).
- `Button.module.css` composes `raised, bevel` on primary and destructive (destructive shares the raise for parity).

**Why a separate token.** `scdsShadow(_:)` in `SCDSTokens.swift` draws outer layers only and traps on inset. Folding the inset layers into `raised` would break that token on native. `bevel` carries the inset flag and is skipped by the outer-only modifier.

**Alternatives considered.**
- **Fold the inset layers into `shadow.control.raised`.** Rejected: breaks the SwiftUI path above.
- **Raise the highlight to meet the shade.** Rejected: Levi named the shade as the problem.

**Figma parity (same day).** Library `0zVoxaLJQkjHENYJlQk1VT`: new effect styles `shadow/control/bevel`, `shadow/control/dark/raised`, `shadow/control/dark/bevel`; `shadow/control/raised` gained a description. Figma effect styles carry no modes and a node takes one style, so the four non-disabled Primary variants (9:439, 9:442, 9:445, 9:449) carry raise + bevel as six raw light-mode layers, as the raise was before. The dark styles are for dark frames by hand. The library has no Destructive variant. Its `shadow/control/inset` style does not match the code token of that name; left for its own fix.

## 2026-10-02 — Figma `shadow/control/inset` matched to code; SegmentedControl master loses its shadow

**Context.** The library's `shadow/control/inset` effect style held four inset layers (an inverted neumorphic well, ink 0.10/0.08 + white 0.90/0.70). The code token `--sc-shadow-control-inset` is two layers: a soft ink inner shade and a 1px ink ring. Its only consumer in Figma was the `SegmentedControl` master (85:3). Code `SegmentedControl` carries no shadow: "fill-only elevation, no border, no shadow, per the spec".

**Decision.**
- `shadow/control/inset` now holds the code light values: `inset 0 1px 3px ink/0.08`, `inset 0 0 0 1px ink/0.06`.
- New `shadow/control/dark/inset`: `inset 0 1px 3px black/0.40`, `inset 0 0 0 1px white/0.05`.
- `SegmentedControl` master: style detached, effects cleared, so Figma matches code (track = `surface.sunk` fill only).

**Alternatives considered.**
- **Keep the style on SegmentedControl.** Rejected: the corrected style would add a ring that code does not have.
- **Restore the well in code.** Rejected: the spec says fill-only; code is the source.

## 2026-10-03 — One plugin call checks the Figma library against tokens/; the library brought to it

**Context.** Levi: "make required updates [to the SCDS library] ... then sync the code so figma and code is always in sync". `compare-figma-variables.mjs` already compares `tokens/*.json` to Figma, but it reads hand-exported TSVs, so it ran only when someone exported. The library's variables cannot be read from CI: Figma's Variables REST API is Enterprise-only and the studio is on Professional. The plugin API can read them.

**Decision.**
- **`npm run parity:figma`** (`scripts/parity/figma-plugin-check.mjs`) writes one self-contained `use_figma` call. It embeds the expected values resolved from `tokens/*.json`: every Primitives and Semantic variable per mode, every `font.text.*` composite against its text style, every `shadow.*` composite against its effect style, light and `dark/`. Run on the library file, it returns `verdict: "in-sync" | "drift"` and only the disagreements. It reuses `compare-figma-variables.mjs`'s `NAME_MAP`, so the two checks never disagree on a name; `font.family.*` stays the standing exception. Shadow alpha compares at 2dp, since Figma stores 0.9 as 0.8999.
- **Direction is unchanged:** `tokens/*.json` is upstream (2026-08-17). A drift row is fixed in Figma.
- **Reader:** the session that publishes the library runs it after every publish and after every `tokens/` change. There is no unattended reader until the plan has the REST API; that gap is named, not papered over (#186).

**Library brought to tokens/ the same day.**
- 9 variables added, aliased exactly as in JSON: `motion/scale/pressCard`, `motion/scale/recedeBoard`, `motion/opacity/recedeBoard` (Primitives); `motion/press/card/scale`, `motion/recede/scale`, `motion/recede/opacity`, `motion/entrance/duration`, `motion/cut/duration`, `size/touch-target` (Semantic). Variables now 323/323.
- Raw fills bound: StatusPill Active and Open, and Pulse On, took `color/signal/progress` (the raw `#E5FF1C` was no token; Levi: "use the existing scds color token"); `Icon/info`, `Icon/warning`, `Icon/crosshair` took `color/text/primary`, as the other 33 icon fills do.
- Effect styles 6/6 match.

**Open for Levi (type direction, not fixed here).** Six text styles disagree with `font.text.*`: `text/label/ui` weight 700 vs 500; `text/title/card` 900 vs 700; tracking on `text/display/sm` −1.8% vs 0, `text/display/lg` and `text/display/xl` −4% vs 0, `text/mono/chrome` 6% vs 0. Each is either Figma stale or a type decision code has not received. Eight Figma-only text styles (`*/bold`, `nav/*`, `label/ui-tight`, `mono/flow`, `display/xs`) have no token. `Select / State=Open`'s option fill is teal at 10% opacity, with no token.

## 2026-10-03 — Six type composites move to the Figma library's values

**Context.** The library parity check (`npm run parity:figma`, same day) found six text styles whose Figma values differ from `font.text.*`. Levi ruled: "tokens should update to match figma".

**Decision.** Each moves to an existing scale step; no new primitive.
- `font.text.12` (`text.label.ui`): weight `medium` → `bold`.
- `font.text.24` (`text.title.card`): weight `bold` → `black`. The Dashboard's tile titles already draw Black (studio-pm ADR-090).
- `font.text.44` (`text.display.sm`): tracking `normal` → `tight` (−0.018em).
- `font.text.84` and `font.text.120` (`text.display.lg`, `.xl`): tracking `normal` → `tightest` (−0.04em).
- `font.text.mono.11` (`text.mono.chrome`): tracking `normal` → `wider` (0.06em), which is what its own description already said.

Each composite has one consumer in `semantic.json`, so nothing else moves. `tokens:build`, `tokens:swift`, `tokens:map` regenerated; their checks and `tokens:verify` pass.

**Consequence.** Every surface on `text.label.ui` turns bold, and every card title turns Black, on the site and in studio-pm once it re-vendors.

**Supersedes** the `2026-08-16 Token sync` line "Figma is the source of truth for token VALUES" only for these six rows, and only as a ruling: `tokens/*.json` stays upstream (2026-08-17), and this change was made in the JSON.

### 2026-10-03 amendment: the library's other eight text styles, and the selected tint, become tokens

Levi: "add tokens for them and update json with the 8 figma text styles". Each takes the Figma style's exact values; nine primitives carry them, beside the scale rather than in it.

| Semantic | Primitive | Figma style | Value |
|---|---|---|---|
| `font.text.label.uiTight` | `font.text.bold.12` | `text/label/ui-tight` | text 12 / bold / 1.5 / 0 |
| `font.text.body.denseBold` | `font.text.bold.14` | `text/body/dense/bold` | text 14 / bold / 1.5 / 0 |
| `font.text.body.defaultBold` | `font.text.bold.16` | `text/body/default/bold` | text 16 / bold / 1.5 / 0 |
| `font.text.body.leadBold` | `font.text.bold.20` | `text/body/lead/bold` | text 20 / bold / 1.55 / 0 |
| `font.text.display.xs` | `font.text.displayTight.32` | `text/display/xs` | display 32 / black / 1.1 / 0 |
| `font.text.nav.header` | `font.text.displayTight.12` | `text/body/nav/header` | display 12 / black / 1.1 / 0 |
| `font.text.nav.node` | `font.text.textTight.13` | `text/body/nav/node` | text 13 / regular / 1.1 / 0 |
| `font.text.mono.flow` | `font.text.mono.14-loose` | `text/mono/flow` | mono 14 / regular / 2.0 / 0 |

`body.dense` and its siblings are leaf tokens, so the bold variants are siblings (`denseBold`), not children; `figma-plugin-check.mjs` maps the six names that are not the path with dots as slashes.

`color.interactive.selected` = `#038E931A` (teal.500 at 10%), both modes: the Select open-option row, which held teal at 10% paint opacity with no token. The library's new `color/interactive/selected` variable carries it and the row is bound.

129 semantic tokens (from 120). `tokens:build`, `tokens:swift`, `tokens:map` regenerated; checks and `tokens:verify` pass. The plugin check reads the eight text styles and the variable as in sync.

### 2026-10-03: the canvas-light blend's hues become `color.atmosphere.*`

Levi, on studio-pm's canvas gradient: "add and keep the blend". His exported flow blend (studio-pm ADR-107, source `studio-pm/native/StudioPM/Design/canvas-blend.json`) used three hues no token carried. They become primitives, and the blend's four bands become semantic tokens.

| Semantic | Primitive | Export name | Value |
|---|---|---|---|
| `color.atmosphere.celadon` | `color.atmosphere.celadon` | SPRING CELADON | `#EAFBF7` |
| `color.atmosphere.river` | `color.atmosphere.river` | RIVER INDIGO | `#55CCEE` |
| `color.atmosphere.lapis` | `color.teal.500` | INKED LAPIS | `#038E93` |
| `color.atmosphere.indigo` | `color.atmosphere.indigo` | INDIGO | `#274A78` |

- **Role:** a background wash under glass and grids. Never text, never a control fill, so no contrast claim is made; the consumer measures text over its own wash at its own strength.
- **Modes:** the same value in both. The consumer sets the strength per mode (studio-pm: 55% dark, lighter in light).
- **Lapis** is `teal.500`, the brand accent's value, aliased rather than repeated.
- **Figma:** the library has no `color/atmosphere/*` variables yet. The plugin check will read four semantic tokens as missing until they are added.

133 semantic tokens (from 129), 173 primitives (from 170). `tokens:build`, `tokens:swift`, `tokens:map` regenerated; `tokens:verify` passes.
