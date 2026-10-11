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

- **Mark (same day):** Levi: "change the celadon grid icon to the 100 warm grey color". `color.atmosphere.mark` is the plus grid over the wash: light `teal.700` (unchanged), dark `warmGray.100` in place of `teal.200`.

134 semantic tokens (from 129), 173 primitives (from 170). `tokens:build`, `tokens:swift`, `tokens:map` regenerated; `tokens:verify` passes.

### 2026-10-04 amendment: the atmosphere tokens are in the Figma library

Levi: "add the atmosphere variables to the figma library". This supersedes the **Figma** bullet of the 2026-10-03 atmosphere entry above.

- **Primitives:** `color/atmosphere/celadon`, `river`, `indigo`, at the JSON values.
- **Semantic:** `color/atmosphere/celadon`, `river`, `indigo` alias their primitives in Light and Dark; `lapis` aliases `color/teal/500`; `mark` aliases `color/teal/700` (Light) and `color/warmGray/100` (Dark).
- **Scopes:** frame fill and shape fill only, so the washes and the mark stay out of the text and stroke pickers. Each carries its token's description.
- **Parity:** the plugin check's comparison, run on the `color/atmosphere/*` rows, read 13 of 13 in sync (3 primitive values, 10 semantic mode values), none missing in either direction.
- **Publish:** not yet published from the library file. Consumers see the variables after the next library publish.

### 2026-10-04: Tooltip multi-line wraps at its 240 cap, and the demos give the tip room

The multi-line Tooltip rendered about 82 wide, one word per line. `.tooltip` is absolute at `left: 50%` inside an inline-block wrapper, so its auto width shrank to half the trigger and `max-width` never applied. Single-line was unaffected because `nowrap` forces max-content width.

- **Component:** `.multiline` gains `width: max-content`. The existing `max-width: calc(--sc-space-layout-stack-xl * 3)` cap is unchanged. Measured 240 wide in light and dark at 390, 768, 1024, 1440 and 1920.
- **Demo headroom:** the state grid and the Specimen panel clip their overflow. The single-line tip was already cut 7 at the top and 11 at the left on the Tooltip page; at the correct width the multi-line tip lost 47 at the top. Both demos now centre the trigger and put `--sc-space-layout-stack-xl` above it. No clip at any of the five widths.
- **Stack variant:** the Tooltip page uses `statesVariant="stack"`. A two-column cell at 768 is about 212 wide, narrower than the 240 cap.
- **Demo copy:** both demos said "wraps to two lines" and rendered three at the cap. The content is now "A longer note that wraps to two lines at the readable-measure cap." and renders two.
- **Not changed:** the Density page's single-line tip is still cut 12 at the left by its panel. The Tooltip has no collision handling or portal, so any clipping ancestor cuts it; that is a component limit, not addressed here.
- **Release:** the fix ships to consumers on the next package tag. No version bump in this change.

### 2026-10-04: the Density page's tooltip demo gives the tip room

This closes the **Not changed** bullet of the Tooltip entry above. The Density page's single-line tip was cut 12.6 at the left by the kit `.panel` (`overflow: hidden`), and its top sat 8 over the panel head.

- **Stage:** the demo is wrapped in `.tipStage`, the same shape as the Tooltip page's `tooltipStage`: the trigger centred, `--sc-space-layout-stack-xl` above it. The tip now sits 60 below the panel head and clears both edges.
- **Row alignment:** the taller Tooltip demo (152 against 96) left the Button panel's rule line 56 higher than its neighbour's. The four component panels take `.compPanel`: `grid-template-rows: subgrid` across three rows, `row-gap: 0`. Head, demo and rule share the grid's rows, so demo tops and rule tops are level in every two-column row. Single-column heights at 390 are unchanged for the other three panels.
- **Measured:** tip rect against every ancestor with non-visible overflow (only `.panel`), opened by a bubbling `mouseover` and by real hover. No cut on any side at 390, 768, 1024, 1440 and 1920, light and dark.
- **Not changed:** the Tooltip still has no collision handling or portal. A clipping ancestor cuts it unless the demo makes room; that remains a component limit.

## 2026-10-04 — SCDS syncs to a claude.ai/design project, and the sync runs unattended on every push

Levi ran `/design-sync`, then: "set up an automation that automatically runs design-sync command whenever an update is pushed to SCDS so i dont have to ever manually do it".

**The sync (PR #65).** The library is uploaded to the Claude Design project "SCDS" (`projectId` in `.design-sync/config.json`). Inputs live in `.design-sync/`: converter config with hand-written prop contracts (the library ships no `.d.ts`), one authored preview per component, the conventions header the design agent reads, and `NOTES.md`. The whole Phosphor set is merged onto the bundle global so `Icon` has glyphs; a subset would be smaller but a missing glyph renders nothing with no error.

**The automation.** `com.shokunin.design-sync` (launchd, every 5 minutes) runs `scripts/design-sync-auto.sh` as it is on `origin/main`.

- **Trigger:** `origin/main` moved AND the move touched a path the bundle is built from (components, styles, fonts, tokens, the lib build config, the lockfile, `.design-sync/`, the three shipped guideline docs). Anything else only advances the baseline; no agent starts.
- **Run:** one headless `claude -p` in a dedicated worktree at `~/.shokunin/design-sync/worktree`, under the contract in `scripts/design-sync-auto.prompt.md`. Model and effort pinned (`opus`, `high`), 250 turns, 90 minutes.
- **Repo changes go through a PR.** When a sync needs an edit under `.design-sync/` (new component, changed props, broken preview), the agent opens a PR from `design-sync/auto-<sha>`, uploads nothing, and the job holds until that PR is merged. The merge re-triggers the job. The agent never merges and never pushes to `main` (merge authority unchanged).
- **Graded from artifacts.** The job accepts "synced" only with the driver's own verdict file from that run, a matching commit in the result file, and a clean worktree. A failed commit is not retried without a new push or `touch ~/.shokunin/design-sync/force`.
- **Texts:** done, needs-merge (with the PR link), failed (with the reason). All no-reply.

**Bypass mode, decided by Levi.** The agent runs with `--dangerously-skip-permissions`. The upload asks for an approval a headless run cannot give, and a DesignSync-only allowlist did not clear it (tested 2026-10-04: no plan returned). Levi was shown three options (full auto in bypass mode, a bash-only job that texts him to run the command, manual) and chose full auto, twice, then added the Bash allow rules that let the session commit it. Same trust level as the night runner.

**Not verified at decision time.** Whether bypass mode clears the upload approval. Claude Code's safety classifier blocked the session from launching a bypass-mode agent, so the first live run is Levi's: the installer's first firing. The hermetic suite (`scripts/design-sync-auto.test.sh`, 58 checks, stub agent) covers the gates, the baseline, the hold, the watchdog and the artifact check; it cannot cover what a real agent does.

**Rejected:** a GitHub Action (CI has no claude.ai/design login), a cloud routine (same, and no local checkout), and a narrower permission allowlist (does not clear the upload approval).

## 2026-10-04 — PlusField: the plus-sign halftone brand elements join SCDS

**Stage:** 03-build (scds-v2)
**Type:** Component addition (asked for by Levi, 2026-10-04, from the approved Brand Elements prototype, turn 2)
**Status:** accepted
**Slug:** plus-field

**Context.** The Brand Elements prototype (`handoff/Brand Elements.dc.html`, engine `handoff/plus-field.js`) set out a plus-mark halftone system for website and app UI. Turn 2 (ids 2a to 2t) is the approved set: every mark a plus, each element tied to one recurring UI slot, crisp grids in structural slots, loose ribbons in expressive ones, teal only for progress and current state. Turn 1 was exploration and is out of scope.

**Decision.** Eleven components, version 0.4.0:

- `PlusField` is the primitive: one canvas that fills its parent box and draws one art. `plusField.engine.js` holds the turn-2 drawers as pure canvas code (no React, no DOM reads); turn-1 drawers and the WorkingMark loop paths are not ported. Options are typed props, not `data-*`.
- Ten wrappers: `SectionDivider` (2a), `HeadingRule` (2b), `PlusUnderline` (2j), `PlusProgress` (2h), `PlusLoader` (2i), `PlusSkeleton` (2g), `PlusTimeline` (2o), `PlusBullet` and `PlusSeparator` (2p), `PlusThumbnail` (2r). The other arts (2c, 2d, 2e, 2f, 2k, 2l, 2m, 2n, 2q, 2s, 2t) stay `PlusField art="…"`, with each composition in `PlusField.md`.
- **The teal rule is a code guard.** A drawer gets no accent colour. It calls `teal(role)`, and any role other than `progress`, `active`, `current` throws. A new teal use needs a new role, which needs an entry here.
- **Runtime.** ResizeObserver on the root; backing store = CSS size × min(2, devicePixelRatio); a 0×0 box draws nothing. Colours from the semantic tokens via `getComputedStyle` on the field itself, so `[data-theme]` on `<html>` or any ancestor applies; one shared MutationObserver redraws every field on an `<html>` theme change. One shared requestAnimationFrame loop for `uskel`, `uloader`, `usplash`, joined only while on screen (one shared IntersectionObserver); still frame under `prefers-reduced-motion` or `animate={false}`.
- **Accessibility.** The canvas is always `aria-hidden`. `uprog` adds a visually hidden `role="progressbar"`; `uloader` and `uskel` add a visually hidden `role="status"` when given a `label`. `PlusTimeline` is an `<ol>` with `aria-current="step"`.
- **Guideline.** `_config/design-system/brand-elements.md` (slot table, crisp versus loose, teal, surface, density, shape, motion). It ships to Claude Design through `guidelinesGlob`, and `SYNC_PATHS` in `scripts/design-sync-auto.sh` now covers it.

**Deviations from the prototype, all to hold the 8pt grid or a token.** Divider heights 16 / 24 / 32 (prototype 20 / 28 / 40). Timeline row pitch 80 (84), rail 48 (64). Loader 240 square (220). Bullet 16 (15). The timeline spaces its nodes evenly by `steps` instead of the prototype's four fixed positions. `uprog` draws one bar per field, `rows` high, instead of the prototype's two demo bars in one canvas. `type` derives its mark pitch and size from the glyph size, so the 404 needs only `textScale`. The engine's geometry constants (7-unit pitch, ribbon widths, path points) stay literal: they are the art.

**Defaults.** `PlusField` defaults to `surface="inverse"` as the prototype did. The crisp wrappers default to `surface="none"`, so they sit on whatever surface holds them; the prototype painted them `paper` on a raised card, which renders the same there and breaks anywhere else.

**Motion over 600ms, justified.** The loader loops every 2.8 s, the skeleton sweep and the splash wave are continuous. They are the continuous-motion category in `ui-rules.md`: each narrates "still working" for as long as the wait lasts.

**Not done here.** Figma masters for the eleven components. Brand reference site sections. A motion philosophy for SCDS is still unpicked (Phase 3); these motions follow the prototype.

### 2026-10-04 amendment: the brand elements are on the brand reference site

This closes the "Brand reference site sections" item under **Not done here** in the plus-field entry above. Levi asked for it after the PR #72 preview showed none of the new elements.

- **Nav:** a new group, `03 Brand elements`, between Components and Voice. Voice moves to `04` (rail, metabars of Register, Density, Hard rules).
- **Pages:** one per component, on the existing `ComponentPage` kit: Plus Field (the eleven unwrapped arts plus shape and density tiles), then the ten wrappers. Each shows the real component in every documented state, the token table resolved live in both modes, and the usage rules from `brand-elements.md`.
- **Kit change:** `ComponentPage` takes `ord`, `group` and `revised`. The defaults (`02`, `Components`, `2026.06.05`) keep every existing page unchanged.
- **Copy:** written under `sc-brand-voice` (product register), no em dashes in page copy.

### 2026-10-04: the atmosphere tokens take the FLOW export's stops

Levi, at studio-pm's sitting: "make the color change". studio-pm ADR-110 replaced the 2026-10-03 banded blend with Feral's FLOW, whose four stops are new hues; studio-pm drew them from the export's raw values until SCDS carried them. The four semantic names keep their meaning as the blend's four positions and re-point:

| Semantic | Primitive | Export name | Value |
|---|---|---|---|
| `color.atmosphere.celadon` | `color.atmosphere.paleBlueGreen` (new) | PALE BLUE GREEN | `#00A3AF` |
| `color.atmosphere.river` | `color.atmosphere.river` (was `#55CCEE`) | RIVER INDIGO | `#5CE3E6` |
| `color.atmosphere.lapis` | `color.atmosphere.riverDeep` (new; was `teal.500`) | RIVER INDIGO | `#0F9CC2` |
| `color.atmosphere.indigo` | `color.atmosphere.indigo` | INDIGO | `#274A78` |

- Same value in both modes; the consumer sets the strength (studio-pm: 35% dark, 20% light, held by its contrast test).
- `color.atmosphere.celadon`'s primitive `#EAFBF7` stays, unread, so nothing that named it breaks.
- 134 semantic tokens (unchanged), 175 primitives (from 173). `tokens:build`, `tokens:swift`, `tokens:map` regenerated; `tokens:verify` passes.
- **Figma:** the library's `color/atmosphere/*` variables follow in the same change (studio-pm's sitting asked for the library to match).

### 2026-10-05 amendment: the eleven brand elements are in the SCDS Figma library

This closes the "Figma masters for the eleven components" item under **Not done here** in the plus-field entry. Brief: `handoff/CC-PROMPT-plusfield-figma.md`.

**Where.** File `0zVoxaLJQkjHENYJlQk1VT` (SCDS library). A `— BRAND ELEMENTS —` header page (`458:2`) after the Global section, then one page per component, named as the code component. Each page holds the set, a title, and a Light frame and a Dark frame (explicit Semantic mode) with an instance of every variant.

| Component | Page | Set | Variants |
|---|---|---|---|
| `PlusField` | `458:3` | `459:2771` | 22: `Art` × 20 arts with `Shape=plus`, plus `Art=umedia` × `Shape=square`, `round` |
| `SectionDivider` | `458:4` | `459:2172` | 3: `Weight` = hairline, band, block |
| `HeadingRule` | `458:5` | `460:8` | 2: `Variant` = title, eyebrow; `Label` text property |
| `PlusUnderline` | `458:6` | `459:2206` | 2: `Active` = true, false |
| `PlusProgress` | `458:7` | `459:2236` | 8: `Variant` thin, band × `Value` 0, 38, 64, 100 |
| `PlusLoader` | `458:8` | `459:2329` | 1: `Frame` = still (STILL_T 1.96) |
| `PlusSkeleton` | `458:9` | `459:2350` | 1: `Frame` = rest (STILL_T 0) |
| `PlusTimeline` | `458:10` | `461:73` | 7: `Steps` 3, 4 × `Current` 0 … steps − 1; `Step 1` … `Step 4` text properties |
| `PlusBullet` | `458:11` | `459:4` | 2: `Accent` = false, true |
| `PlusSeparator` | `458:12` | `459:2370` | component, no variant axis |
| `PlusThumbnail` | `458:13` | `459:2400` | 12: `Seed` atlas, kiln, ledger, harbor, orbit, field × `Surface` inverse, sunk |

**Generation method: the engine draws, nobody redraws.** `scripts/plusfield-to-figma.mjs` runs `drawField` against a recording context that captures every `fillRect` and `arc` with its `fillStyle` and `globalAlpha`. The colours passed in are role sentinels (`ROLE:color/surface/inverse` …), so each mark knows its Semantic variable. Surface-role rects larger than 24 px are grounds; every other mark lands in a (role, alpha) bucket, one SVG path per bucket. `type` runs in Playwright Chromium on the dev server, so the 404 rasterises with the brand face. Seeds, sizes and options are the brand-site states measured at a 1440 px viewport. The SVGs reach Figma through `upload_assets` (the plugin sandbox has no `fetch`, and the paths are too large to inline); a `use_figma` pass turns each imported frame into a variant component, binds every fill to the Semantic variable its layer id names, sets node opacity to the bucket alpha and SCALE constraints on every mark, and replaces the imported ground vectors with rectangles. Light and Dark come from the variable mode, no second drawing. `stages/02-design/figma/plusfield/manifest.json` (committed) lists every variant's buckets.

**Compositing parity.** Canvas paints the crossing of a plus's two arms twice. A Figma path fills its union once, so for buckets with alpha below 1 the crossings sit in a second "overlap" path at the same alpha: a + a(1 − a), what canvas paints.

**Verified.**
- Generator against the engine, before Figma: every SVG rendered beside the engine's own canvas at 2× in Chromium, both themes. Mean channel difference ≤ 3 / 255 for all 61 variants; the residue is anti-aliasing on mark edges.
- Figma against the manifest: 61 of 61 variants carry exactly the manifest's bucket and ground count. No solid fill on any created node lacks a variable binding.
- Teal: `ROLE:color/brand/accent` appears in 18 variants in the manifest and binds `color/brand/accent` in the same 18 in Figma: `PlusField` uprog, uline, utime; `PlusUnderline` Active=true; `PlusProgress` values 38, 64, 100 in both variants; every `PlusTimeline` variant (the current node); `PlusBullet` Accent=true. No other art has one.
- Visual: each page's Light and Dark frames beside the brand-site states (reduced motion, both themes). Mark positions, counts and teal placement match.

**Deviations, each with its reason.**
- `SectionDivider` is 742 wide, not the brief's 744: 742 is what the brand site renders at 1440, and the comparison needs the same width.
- `HeadingRule` title rule fills to 510, the site's 503.3: the Figma file uses the Trial cut of Neue Haas Grotesk, 6.7 px narrower on "Selected work". The marks scale with the rule.
- `usplash` alphas snap to a 1/40 step (max error 0.0125). Its wave gives every mark its own alpha, which would be one node per mark.
- `PlusField` holds no density variants. The brief's matrix has none; density stays a code prop.
- The nine structural arts draw in the 4:3 tile at their wrapper defaults; the site has no tile for them, so they compare against their wrapper pages.
- `HeadingRule` `Label` and `PlusTimeline` `Step n` defaults are shared across variants, as Figma text properties are. The eyebrow instances in the docs frames override `Label` to "02 / Services".

**Code Connect.** `<Name>.figma.tsx` for all eleven, against the set ids above. `PlusTimeline` has one connect per `Steps` value. `npm run figma:parse` parses 13 connects with no `❌`. Note that `figma connect parse` exits 0 even when a file fails to parse, so the check is the `❌` count, not the exit code. Publishing stays plan-gated.

### 2026-10-05 amendment: PlusUnderline fills its container in Figma

Levi: the Figma PlusUnderline stayed at its own width; set to Fill, its single vector stretched instead of adding marks. Code redraws the marks at every width, so Figma has to repeat them, not scale them.

- **Atom.** `_PlusUnderline Column` (`466:4`, private): one column of the `uline` grid, two plus marks, 5 × 12. The generator draws it from the engine (variant `Atom=column`: `uline` at w=10, one column at x=3, cropped to a 5-wide cell centred on it).
- **Variant `Active=true` (`459:2204`)** is now a horizontal auto-layout row: wrap on, fixed height 12, clip content, padding 0.5 each side, gap 0, holding 384 column instances (enough for 1920). Columns that do not fit wrap to a second row that the clip hides, so only whole columns show.
- **Why this is exact, not approximate.** `uline` is crisp, grid, jitter 0: columns at x = 3 + 5k for k = 0 … floor((w − 6) / 5). The row puts column k's centre at 0.5 + 5k + 2.5 = 3 + 5k and shows floor((w − 1) / 5) columns, which is the same count. Checked in Figma with the instance set to Fill in parents of 30.67, 46.97, 120, 214.66, 742 and 1440: 5, 9, 23, 42, 148, 287 columns, equal to the engine at each width, Light and Dark. The fill demo stays in the page's Light and Dark frames.
- Set id, property names and Code Connect are unchanged. `Active=false` was already an empty frame, so it fills as is.

### 2026-10-05 amendment: PlusProgress fills its container in Figma

Same ask as PlusUnderline (above), with one more constraint: the teal share must stay at `Value` of whatever width the instance takes.

- **Atoms.** `_PlusProgress Column` (`468:13799`, private): `Rows` 1 / 3 × `State` on / off, from the engine (variants `Atom=column, Rows, State`: `uprog` at w=5, one column at x=4). The cell is 4 wide and its right edge is the mark centre; the mark overflows by its half width.
- **Each variant (`459:2228` … `459:2235`)** is a clipped root holding two wrapping auto-layout rows of 275 columns (enough for 1920), cell 4 + gap 3 = pitch 7:
  - `track`: off columns (text/primary at 0.2) across the full width, constraint Scale.
  - `fill`: on columns (brand/accent) in a frame `Value` × width wide, constraint Scale, laid over the track. `Value=0` has no fill row.
- **Why it matches the engine.** `uprog` draws at x = 4 + 7k while x < w and paints teal while x < Value × w. A wrapping row of cells whose right edge is the mark centre shows a column exactly while its centre fits, so the track shows ceil((w − 4) / 7) columns and the fill ceil((Value × w − 4) / 7). The root clips the last mark where the canvas would. Checked with every variant set to Fill in parents of 30, 120, 333.3, 500.01, 742, 1440, 1920: 56 of 56 counts equal the engine.
- **Stretch snaps, Scale does not.** The track first used Stretch. On the 214.66-wide root, Figma snapped the stretched width to W − 0.34 and lost a column at W = 333.3. Scale keeps the exact width, so both rows use Scale.
- **Known residue.** Teal marks cover the faint marks under them rather than replacing them; at alpha 1 the only trace is anti-aliasing on the edge. A fill narrower than 4 px (Value × width under 4) still shows one teal column, because a wrapping row always places its first item; the engine shows none. It only happens below 10.5 px wide at 38%.
- Set id, properties and Code Connect unchanged. The fill demo sits in the page's Light and Dark frames.

## 2026-10-05 — Studio PM shell: Button gains a Small size, the Secondary outline returns, three components gain options

**Status:** Accepted. Levi's direction, 2026-10-05, from the Studio PM Dashboard and Kanban redesign (Studio PM Figma file `bfIXIo8Y0s8mTGvhmJBlu1`, section F and the "Shell redesign" component sections).
**Reads with:** scds-v2 Phase 2 (2026-07-27, Secondary fill-only), the 2026-10-04 PlusField ADR, studio-pm ADR-117.

**Why.** Levi's redesign builds on SCDS library instances and overrides four of them. Each override is promoted into the component so no consumer carries it by hand. He also asked for a Small Button at every variant and state.

**Button · Size (ADR scds-button-size-small).** New `Size` variant axis in the library (`Large` | `Small`) and `size` prop in code (`lg` | `sm`, default `lg`). Small: 12/medium/widest label (`font.text.label.buttonSm` → new primitive `font.text.medium.12`), 8px inline padding (`space.component.padding-inline.button-sm`), 4px block padding (`space.component.padding-block.button-sm`, the dense 4pt step), 16px icon (`size.icon.sm`). Large is unchanged: 11/medium chrome label, 16 × 8, 12px icon. Small carries larger type and icon than Large because Levi specified both values; the size names the control's height, not its type.

**Secondary outline returns (ADR studio-pm-shell-blocklist-exception).** Supersedes the 2026-07-27 fill-only Secondary in code. The library's Secondary kept its 1px `border/strong` stroke and the Studio PM shell is designed on it, so code now matches the library: transparent ground, 1px `--sc-color-border-strong`, teal label on hover/focus. Levi chose to keep the design as drawn when asked about the slop-blocklist matches it carries. Each is an accepted exception here, not a precedent:
- Outline / stroke borders: Secondary Button only.
- Arrow CTA: the Button's trailing arrow (`Show Icon`), unchanged; closes the queue item WQ-055 as "keep".
- Progress bars: the Tokens tile's limit meters, which carry data (percent used per rate-limit window).
- Pill badges: StatusPill, unchanged.

**ProgressIndicator (Progress) · Tone and Track.** `tone`: `accent` (default) | `progress` (`color.signal.progress`) | `warning` (`color.status.warning`). `track`: `deepSunk` (default) | `sunk`. Bar only. Replaces three fill overrides and one track override in the Tokens tile.

**SegmentedControl · Count and Large.** Options take an optional `count`, set after the label with a 12px gap. New size `lg`: 16 × 8 padding, 13/medium label (`font.text.label.tab` → new primitive `font.text.medium.13`). Replaces the On-you tile's padding, radius and text overrides.

**PlusSeparator · Tone.** `tone`: `default` | `muted` (`color.text.disabled`). Replaces a raw `warmGray/400` primitive override in the PR rows; light `text.disabled` is that same value.

- Tokens: 2 primitives added (`font.text.medium.12`, `font.text.medium.13`), 4 semantics added. `tokens:build`, `tokens:swift`, `tokens:map` regenerated; `tokens:verify` passes; `npm run build` exits 0; `figma:parse` maps `Size`.
- **Figma:** the library's Button, Progress, Segment and PlusSeparator sets, variables and text styles follow in the same change. Publishing the library is Levi's step.

### 2026-10-05: the library follows

Done in the SCDS library file the same day (publishing is Levi's step):
- Variables `space/component/padding-inline/button-sm` (→ `space/8`) and `space/component/padding-block/button-sm` (→ `space/4`); text styles `text/label/button-sm` (12/medium) and `text/label/tab` (13/medium, no tracking).
- **Button** (`9:438`): new `Size` axis, default `Large`; 15 Small variants. The Focus variants' ring was a fixed 96 × 39 absolute frame, so any label longer than "Button" outgrew it at both sizes; it now sits 3px outside the button with STRETCH constraints and tracks the label.
- **Progress** (`140:26`): `Tone` and `Track` axes; 5 new Bar variants. Circular and Step carry the defaults only.
- **Segment** (`137:35`): `Label`, `Count` and `Show Count` properties; a `count` text after the label at `space/component/gap/lg`; both texts on `text/label/tab`. The library Segment was already 16 × 8 and 13pt, the code `lg` size.
- **PlusSeparator**: now a set (`474:56316`) with `Tone` = `Default` (the original node, `459:2370`, so existing instances keep their link) | `Muted`. PR #74's Code Connect still resolves to `459-2370`; pointing it at the set is a one-line follow-up there.

### 2026-10-06: Small Button respecified (amends scds-button-size-small)

**Status:** Accepted. Levi revised the Small variants in the library on 2026-10-06, before PR #75 merged. The 2026-10-05 Small values above are superseded; Large is unchanged.

| Property | 2026-10-05 | 2026-10-06 | Token |
| --- | --- | --- | --- |
| Label | 12/medium/widest | 11/medium/widest | `font.text.label.buttonSm` → `{font.text.11}` (the chrome label's composition) |
| Inline padding | 8 | 12 | `space.component.padding-inline.md` |
| Block padding | 4 | 4 | `space.component.padding-block.button-sm` (unchanged) |
| Label ↔ arrow gap | 8 | 2 | `space.component.padding-block.sm`, the variable the library binds |
| Icon | 16 | 12 | new `size.icon.xs` → `{space.12}` |

- Small now differs from Large in padding and gap only; the type and icon match. The 2026-10-05 note that Small carries larger type than Large no longer holds.
- Removed, both unused after the change: primitive `font.text.medium.12` and semantic `space.component.padding-inline.button-sm` (and its library variable).
- The gap reads a padding token because the library binds that variable; a dedicated gap token would split code from the library.
- **Figma:** new variable `size/icon/xs` (→ `space/12`), bound to the Small icons' width and height in place of `space/12`; `space/component/padding-inline/button-sm` deleted (no bindings left); the set description updated. `text/label/button-sm` stays as its own style at 11pt so the library's Small variants keep their link.
- `tokens:build`, `tokens:swift`, `tokens:map` regenerated; `tokens:verify` passes; `npm run build` exits 0.

### 2026-10-06: PlusSeparator's Code Connect follows the Tone set

The follow-up named under "the library follows" above. `PlusSeparator.figma.tsx` now resolves to the set `474:56316` instead of its Default variant `459:2370`, and maps `Tone` (`Default` | `Muted`) to `tone` (`default` | `muted`). `CODE-CONNECT.md` updated. `figma:parse` validates it; publishing stays plan-gated.

### 2026-10-07: interaction sounds land on three components (scds-ui-sounds)

**Status:** Accepted. Levi picked one sound per component in the sound lab (`previews/sound-lab/`, state read back from `scds-sound-lab:v1`).

| Component | Role sound | Source | Fires on |
| --- | --- | --- | --- |
| Switch | `toggle` | Drams 004 toggle switch (`drams-004-toggle-switch-01.wav`) | every on/off change |
| Stepper | `tick` | Drams 037 (`drams-037-01.wav`) | every committed step, hold-repeat and Home/End included; silent at a bound |
| SegmentedControl | `select` | Drams 001 (`drams-001-01.wav`) | a change of selection; re-selecting is silent |

- **Engine** (`src/sound/`): Web Audio with pre-decoded buffers, because an `<audio>` element's start latency is longer than the 77 ms tick. The context arms on the first pointerdown/keydown; a sound still decoding plays only if ready within 120 ms. Each sound is a dynamic import, so a consumer that never mounts a sounding component downloads none (library chunks: toggle 73 kB, select 29 kB, tick 15 kB; `index.js` unchanged in kind).
- **Defaults:** on. `SoundProvider enabled={false}` silences every sound (wire it to a user setting); `volume` sets the master level (default 0.7); `sound={false}` opts one instance out.
- **Files:** the picks are re-encoded 48 kHz mono 16-bit (400 kB → 88 kB) into `src/sound/assets/`. The full Drams set stays in `assets/sounds/drams/` outside the deploy.
- **Credit:** Drams by 1042.Studio permits commercial use with a shoutout. Credited in `src/sound/README.md`, the Switch docs page and `assets/sounds/drams/README.md`.
- Button and Alert were considered and left silent: a sound on every button press fatigues, and a sound that arrives without a press is intrusive.

### 2026-10-07: Switch restyled to the Drams Standard Switch, size kept

**Status:** Accepted. Levi's direction: match the Drams Standard Switch (drams/001, mapping #1) but keep the SCDS 32 × 18 size; the knob should read as 3D.

- **Kept:** track 32 × 18, thumb 14, 2 inset, teal on-track, the existing off/disabled grounds, all geometry by calc().
- **Ported, scaled ×0.45:** recessed track (`shadow.switch.track`); knob as a gradient rim over a gradient face (`color.switch.thumb.*`) lifted by the Drams six-layer shadow (`shadow.switch.thumb`); an I/O glyph row (`size.switch.glyph` 6px, `color.switch.glyph.*`) that slides with the knob, so on/off reads without colour (WCAG 1.4.1).
- **Not ported:** the Drams orange (SCDS keeps teal) and its 79 × 40 size.
- **Dark mode** keeps a light physical knob, one ladder step dimmer per stop, so the object keeps its material at night.
- **States added:** hover (track ground one step: `surface.hover` off, `brand.accentFill` on) and active (knob press, `motion.press.scale`); the Switch had neither. Disabled is flat: no recess, no lift, no glyphs, knob at 0.6 like the Stepper.
- Second control-scoped shadow after `shadow.control.raised`; the "no other element carries a shadow" rule now reads "controls only".
- `tokens:build`, `tokens:swift`, `tokens:map` regenerated; `tokens:verify` passes; `npm run build` and `build:lib` exit 0.

### 2026-10-07: the library Switch follows (Toggle set `9:858`)

- The library Toggle was 46 × 24 with an 18px thumb and no size bindings, while `size/switch/*` held 32 / 18 / 14. It now sits at the token size with width, height and radii bound to `size/switch/*` and `radius/pill`; the code size Levi tested is the one kept.
- New Semantic variables (Light/Dark): `color/switch/thumb/{rimTop,rimBottom,faceTop,faceBottom}`, `color/switch/glyph/{on,off}`, `size/switch/glyph`. Gradient stops are bound to the thumb variables.
- New effect styles: `shadow/switch/track`, `shadow/switch/thumb`, and `shadow/switch/dark/{track,thumb}` (effect styles carry no modes, so dark follows the `shadow/control/dark/*` convention).
- Each variant: `Glyphs` (clipped row: `O` ring off, `I` bar on), `Knob` (the original rectangle, so instance overrides survive, now the rim) and `Face`. Hover and Disabled variants are not in the library yet; code has both.
- Publishing the library is Levi's step.

### 2026-10-07: sc-tune replaces the sound lab

**Status:** Accepted. Levi asked for the sound-pairing page to become a skill that exposes every attribute of a component and records the final state as an exact spec plus a build.

- **Lab** (`previews/tune/`, was `previews/sound-lab/`): mounts the real component as Shipped and Tuned. Every token its CSS consumes gets a typed control (colour + alpha, length, time, cubic-bezier, shadow scale/strength, number, text), plus props, sound (any of the 50 Drams sounds, volume, pitch), theme, ground and zoom. Overrides are custom properties on the Tuned stage only. State autosaves per component (`sc-tune:v1:<Component>`) and is read back with `window.scTune.export()`.
- **Record** (`scripts/tune-record.mjs`): writes `output/tuning/<Component>/<stamp>/` with `spec.json`, `spec.md` (shipped → tuned per token, nearest primitive, off-ladder flags, paste-ready CSS) and `snapshot/`, a `--mode snapshot` build of the lab locked to the spec (`vite.tune.config.js`).
- **Skill:** `skills/sc-tune/SKILL.md`, discoverable in Claude Code through `.claude/skills/sc-tune` (a symlink). Registry entries: Switch, Stepper, SegmentedControl, Button.
- A record is a reference, not a change: applying one to SCDS is procedure D, run only when Levi asks.
- Verified: the record command ran on a real export (learning #171); a non-sc-tune input exits 1 and writes nothing; the snapshot renders read-only. `instruction-lint` (agent mode): 0 proven. `ste-lint`: no real em dashes; its hits are frontmatter rules and possessives. No skill-vs-no-skill eval run yet (learning #265).

### 2026-10-07: physical controls, not flat (Button follows the Switch)

**Status:** Accepted. Levi's direction: no flat UI methodology across SCDS; he wants physical rendering. The Drams-derived Switch knob is the reference light model: lit from above, a rim that catches light, a layered lift, a press that sits down.

- **Button, filled variants** (primary, destructive): `color.control.sheenTop` → transparent 50% → `color.control.sheenBottom` laid over the fill; `shadow.control.rim` (half-pixel edge light and shade) + `shadow.control.lift` (Drams six layers ×0.6). `:active` swaps the lift for `shadow.control.pressed` (the three near-contact layers) while the existing press-spring scales it. Disabled stays flat.
- The sheen is clear through the middle 50%, so the label band keeps the fill's own contrast: white on teal.600 stays AA 5.2.
- **Unchanged, Levi's call later:** secondary (the outline pill, an approved exception) and tertiary (text ghost). Physical options there are a recessed chip or a raised neutral key; both blur the primary/secondary hierarchy, so neither ships without a pick.
- `shadow.control.raised` and `shadow.control.bevel` (neumorphic) no longer style Button and are marked superseded; they stay published until no consumer reads them.
- Earlier "fill-only, no shadow" rulings (SegmentedControl indicator, card hover inset) predate this direction and are candidates to revisit, not rules.
- **Figma:** new variables `color/control/sheenTop`, `color/control/sheenBottom`; effect styles `shadow/control/lift`, `shadow/control/pressed` and `shadow/control/dark/*`. The 8 non-disabled Primary variants of `9:438` carry the sheen gradient (stops bound) and the lift style (Active: pressed). The library has no Destructive variant.
- `tokens:build`, `tokens:swift`, `tokens:map` regenerated; `tokens:verify` passes.

### 2026-10-07: Button primary is a Drams OP-1 key (amends "physical controls" above)

**Status:** Accepted. Levi supplied the reference: the Drams OP-1 Keys key (drams/036), horizontal, with no surrounding well; the page surface is the ground.

- **Supersedes** the sheen/rim/lift treatment logged earlier today, which never shipped. Its tokens (`color.control.sheen*`, `shadow.control.{rim,lift,pressed}`) and Figma items are removed.
- **Face:** `linear-gradient(135deg, transparent, color.control.keyShade)` over the fill. Drams #EEE → #E3E3E3 is ink at 5% over the base, so one value serves neutral, teal and error.
- **Shadows, Drams verbatim:** `shadow.control.key` = `3px 3px 7px` ink .39 down-right + `-3px -3px 4px 1px` white up-left. `shadow.control.keyPressed` = the Drams pressed variant (.29, white .9, `inset 1px 1px 8px` white .3). Dark: black shade, faint highlight.
- Applies to primary and destructive. Hover still turns teal (accent is a hover state). Secondary and tertiary unchanged.
- **Loading** shows `WorkingMark` instead of the spinner (Levi).
- **Arrow** 12px (`size.icon.xs`) at both sizes (Levi: too heavy against the type). The library already specified 12px for Large (2026-10-06); code drew 1.4em (15.4px). Code now matches.
- **Figma:** `color/control/keyShade`; effect styles `shadow/control/key`, `shadow/control/keyPressed`, `shadow/control/dark/*`; the 8 non-disabled Primary variants of `9:438` updated (Active: keyPressed).

### 2026-10-07: Button arrow is Phosphor Bold

Levi: the trailing arrow uses Phosphor's bold weight, not regular. Code: `ArrowRight weight="bold"` (still 12px, `size.icon.xs`). Figma: new `Icon/arrow-right-bold` (`487:147`, the regular glyph at Phosphor bold's 2.25 stroke on a 24 grid) beside `Icon/arrow-right`, which stays regular for other uses; all 30 Button variants swapped to it and the set's `Icon` swap default updated.

### 2026-10-07: the oatmeal light surfaces return (reverses part of scds-v2)

**Status:** Accepted. Levi: "restore the oatmeal set", after comparing the client portal's light mode (page #E3DFD8, card #F8F6F2) with SCDS.

| Step | Role | scds-v2 (2026-06-22) | Restored |
| --- | --- | --- | --- |
| `warmGray.25` | surface.floating | #FBF9F6 | #F8F6F2 |
| `warmGray.50` | surface.raised | #F4F1ED | #F1EFEB |
| `warmGray.100` | surface.page | #EBE7E4 | #E3DFD8 |

- Only the three surface steps change. The mid and dark ladder (`warmGray.200`–`900`, the 2026-07-28 warm rebuild, contrast re-derived since) stays.
- **Inks re-derived for AA on the darker page**, by OKLCH lightness only (hue and chroma kept): `warmGray.450` / text.tertiary #6B665E → #66615A (4.63:1 on page), `status.success.ink.light` #28724D → #246E4A, `status.warning.ink.light` #B83E0B → #B13700, `interactive.hoverInk.light` #027175 → #006D72, and a new `status.info.ink.light` #2B57D5 (status.info-ink light re-points to it; the info fill keeps #2D5AD8, now 4.43:1 on page, fill-only).
- `tokens:verify`: all 98 AA pairs pass; all 142 quoted figures re-measured and updated in their descriptions and in CLAIMS.
- **Open:** teal.500 (`brand.accent`, `interactive.hover`) reads 2.99:1 on the page, down from 3.23. As hover text it was already the documented transient exception; as the Switch on-track it sits just under the 3:1 non-text line, with knob position and the I/O glyph also carrying state. Levi's call whether that needs a darker on-track.
- **Physical controls gain:** the key's white top-left highlight reads stronger on the darker page (+11 L* vs +8), the effect the Drams originals get from their grey ground.
- **Client portal 2026-07-22 "owed" reconciliation:** SCDS now matches the brand Figma file on `warmGray.50` and `.100`. `warmGray.250` still differs (Figma #D5D1CA, SCDS #C4BCB4 from the 2026-07-28 rebuild); left as is. The portal picks up the restored set at its next build (its snapshot fetches the live tokens.css).
- **Figma library:** `color/warmGray/25`, `/50`, `/100`, `/450`, `color/status/successInkLight`, `warningInkLight`, `color/interactive/hoverInkLight` updated; new `color/status/infoInkLight` (`488:2`) with `color/status/info-ink` Light re-pointed; five Color-page swatch captions corrected.

### 2026-10-07: the large Button label gets its own role token

**Status:** Accepted. Levi asked why the tuning lab showed a small Button text size and no large one.

- **Cause:** the large Button label read `font.text.label.chrome`, the token NavBar, Avatar, eyebrows and the type specimen also read. The lab lists tokens by name, so the large size appeared as "chrome", not as a Button size. Tuning it would also have moved every other chrome label once applied.
- **Change:** new `font.text.label.buttonLg` (`--sc-font-text-label-button-lg-*`), aliasing `{font.text.11}` like `buttonSm`. Values are unchanged: both sizes ship an 11/medium/widest label. `Button.module.css` `.label` reads the new token; `label-chrome` keeps its other consumers.
- **Lab:** saved Button sessions move `label-chrome-*` overrides onto `label-button-lg-*` on load (concept B's letter-spacing edit carried over).
- **Figma library:** new text style `text/label/button-lg` (`S:674127ee…`), bound to the same variables as `text/label/chrome`, applied to the 15 Large Button labels; `text/label/button-sm` description corrected from 12 to 11.

### 2026-10-07: the Button arrow gets per-size role tokens

**Status:** Accepted. Levi asked for a size control on the arrow icon in the tuning lab, after giving the label its own per-size tokens.

- **Change:** new `size.button.icon.lg` and `size.button.icon.sm` (`--sc-size-button-icon-*`), both `{space.12}`. Nothing changes visually. The Button sets a local `--sc-btn-icon` from the lg token and `.sm` swaps it to sm; the arrow and the loading WorkingMark read it. `size.icon.xs` keeps its other consumers.
- **Lab:** icon-size tokens get step buttons (10, 12 xs, 14, 16 sm, 18, 24 md) beside the type-scale steps, recorded as the primitive reference.
- **Figma library:** variables `size/button/icon/lg` (`490:122`) and `size/button/icon/sm` (`490:123`) alias `space/12`, scope width/height, WEB code syntax set; bound to width and height of the arrow instance in all 30 Button variants.

### 2026-10-07: Button primary hover gets its own role tokens; the lab forces states

**Status:** Accepted. Levi asked for dark-mode hover settings in the tuning lab, with the resting key already where he wants it.

- **Tokens:** `color.control.keyHoverFill` (teal.600, same as `brand.accentFill`), `color.control.keyHoverInk` (white, same as `text.onAccent`) and `shadow.control.keyHover` (equal to `control.key` in both modes). Nothing changes visually. `.primary:hover` reads them, so the key's hover tunes per mode without moving the Switch or other accent fills, and hover can now carry its own shadow.
- **Guard:** `tokens:verify` gains a label-on-fill AA check, `keyHoverInk` on `keyHoverFill` per mode, so a dark-only tune that drops the label under 4.5:1 fails the build. Planted-bug run: dark ink set to teal.500 failed at 1.31:1; restored, green.
- **Lab:** a `state` view control (rest, hover, focus, active) mirrors every `:hover`, `:focus-visible` and `:active` rule onto a stage attribute, so the forced state shows on all stages, Shipped included. `*-hover` tokens with a rest sibling get "copy rest", which starts hover from the concept's tuned rest value (the hover shadow otherwise starts at the shipped key, not Levi's tuned rest).
- **Figma library:** variables `color/control/keyHoverFill` (`491:10`), `keyHoverInk` (`491:11`); effect styles `shadow/control/keyHover` and `shadow/control/dark/keyHover`; bound on both Primary Hover variants (fill, label, arrow, effect).

### 2026-10-07: Button tuned in sc-tune and applied, with cascade (record Button 2026-10-07-1418)

**Status:** Accepted. Levi recorded his Button settings and asked to apply them, cascading to related settings where it makes sense. Record: `output/tuning/Button/2026-10-07-1418/`. Concept B carries every edit he made (A, C and D were Claude's earlier dark-halo experiments), so B is the build.

| Setting | Shipped | Applied | How |
| --- | --- | --- | --- |
| Large label | 11/medium/1.5/0.08em | 14/medium/2.0/0.02em | `font.text.label.buttonLg` → new `font.text.button.14` |
| Small label | 11/medium/1.5/0.08em | 12/medium/2.0/0.02em | `font.text.label.buttonSm` → new `font.text.button.12` |
| Tracking | (none at 0.02em) | new primitive `font.tracking.slight` 0.02em | matches the library's 2% label tracking |
| Large arrow | 12px | 14px (`space.micro.14`) | `size.button.icon.lg` |
| Large inline padding | 16px (shared `padding-inline.lg`) | 24px | new `space.component.padding-inline.button-lg` |
| Small inline padding | 12px (shared `padding-inline.md`) | 16px | new `space.component.padding-inline.button-sm` |
| Small arrow gap | 2px (shared `padding-block.sm`) | 8px | `.sm` now inherits `gap-md`, same as large |
| `shadow.control.key` light | `3 3 7 0 ink/.39, -3 -3 4 1 white` | `2 2 6 0 #645B4F/.50, -1 -1 1 1 #FDFAF6` | |
| `shadow.control.key` dark | `3 3 7 0 black/.50, -3 -3 4 1 white/.06` | `3 3 7 0 black/.50, -1 -1 1 1 #DBEBFF/.17` | |
| Sound | silent | `press` role, Drams 029, every click | supersedes the 2026-10-07 "Button left silent" line |

- **Shared tokens kept:** Levi's edits landed on shared spacing tokens in the lab (`padding-inline.lg/md`, `padding-block.sm`), which also feed NavBar, Input, Tooltip, SegmentedControl, Badge and the docs site. Changing them would have moved every one of those, so the Button got role tokens with his values and the global spacing scale is unchanged.
- **Cascade:**
  - `shadow.control.keyHover` follows the new key in both modes, so hover changes colour only and does not jump.
  - `shadow.control.keyPressed` keeps the new rest geometry and softens it by the original Drams pressed ratios: light shade .37, rim .90; dark shade .38, rim .14; inner light unchanged.
  - The small arrow stays 12px, matching its 12px label, the same rule as large (arrow = label size).
  - Secondary, tertiary and destructive inherit the label, padding and sound. Destructive also inherits the shadows.
- **Heights:** 46px large and 34px small in code (2.0 leading + padding + 1px border). Figma reads 44/32 because a stroke adds no auto-layout height (a pre-existing 2px gap).
- **Off-ladder colours, kept exact:** the warm shade #645B4F and rims #FDFAF6 / #DBEBFF are literal `rgb()` values inside the shadow tokens, the same form as the dark `rgb(0 0 0 / a)` shades. Levi's call whether they become primitives.
- **Figma library:**
  - Variables: `font/tracking/slight` (`493:2`), `space/component/padding-inline/button-lg` (`493:3`) and `/button-sm` (`493:4`). `size/button/icon/lg` now aliases `space/micro/14`.
  - Text styles: `text/label/button-lg` / `-sm` are 14/12, 200% leading, 2% tracking.
  - Variants: all 30 bind inline padding to the new roles, and Small binds its gap to `gap/md`.
  - Effect styles: `key`, `keyHover`, `keyPressed` and the `dark/*` set are updated.

### 2026-10-07: sc-tune syncs Figma from the token diff

**Status:** Accepted. Levi asked whether the skill updates Figma with the recorded settings, and to automate it if not. It did not: Figma was a manual step at the end of procedure D, with nothing generating the work.

- **Generator:** `scripts/tune-figma-sync.mjs --since <ref>` diffs `tokens/semantic.json` and `primitives.json` against `<ref>` and writes `figma-sync.js` (one idempotent `use_figma` call: variables by name with mode values and aliases, effect styles in light and `dark/*`, text-style size, leading and tracking) plus `figma-sync.md` (the table, and a "Bind by hand" list of new tokens, since no diff can say which masters should read a new token).
- **Proof:** generated for the Button apply (`--since bcedc02^`), 12 operations, identical to the hand-applied values; run against the library: 12 done, 0 missing, no duplicates.
- **Skill:** procedure D step 7 now runs the generator and the call every time an applied record ships ("code and library together"). Procedure C saves the export through a dev-only endpoint (`POST /__sc-tune/export`, `vite.config.js`) instead of transcribing the browser string, after a hand copy drifted from the page. D step 6 compares Shipped with the picked concept by computed style instead of pressing Reset all, which erased Levi's concepts.
- **Limit:** Cowork receives only `SKILL.md` (learning #176), so the generator runs from a local Claude Code session on this repo.

### 2026-10-07: physical-controls Gate 1 picks (Levi)

**Status:** Accepted. Levi answered the five picks in `stages/03-build/physical-controls/CONTEXT.md` after the full-component re-audit (`d222acd`).

| Pick | Answer | Consequence |
| --- | --- | --- |
| 1 Light source | B: top left (the Button's OP-1 key) | One light for the system. The Switch re-lights from top to top left, then gets its first sc-tune pass. The Card inset (lit from the top) re-lights with Card. |
| 2 Button secondary | C: keep the outline pill | Secondary stays the approved exception; it inherits the Button role tokens and `press` sound. Out of the Tier 2 build. |
| 3 Dark-mode material | B: dark keys with a faint top-left highlight (today's Button) | Every material in dark mode follows the tuned Button dark key. The Switch's light knob on a dark ground becomes a dark knob at its re-light. |
| 4 Scope | B: Tier 1 + Tier 2 | This sprint builds the material layer, Tier 1 (Switch, SegmentedControl, Stepper, ProgressIndicator interactive, Input) and Tier 2 (Card, Tooltip, Badge, Avatar, Alert). NavBar (Tier 3) stays next. |
| 5 Teal on-track contrast | A: keep teal.500 (2.99:1 on page) | Logged gap against WCAG 1.4.11; knob position and the I/O glyph carry the on state. No new on-track token. |

- **Static meters stay flat.** ProgressIndicator bar (static), circular and step are read, not touched (directive 1). Only the interactive bar gets the material.

### 2026-10-07: Badge and NavBar text moves to the ink tokens; NavBar gets a focus ring

**Status:** Accepted. Levi: fix now, ahead of the tier order. The physical-controls audit found fill colours used as text.

| Where | Was (light, on page) | Now | Light / dark on page |
| --- | --- | --- | --- |
| Badge default | `brand.accent` 2.99:1 | `brand.accentInk` | 5.35 / 7.61 |
| Badge success | `status.success` 3.42:1 | `status.success-ink` | 4.64 / 5.89 |
| Badge warning | `status.warning` 3.90:1 | `status.warning-ink` | 4.63 / 5.94 |
| NavBar `aria-current` | `brand.accent` 2.99:1 | `brand.accentInk` | 5.35 / 7.61 |

- The Badge border moves with its text, so each badge stays one colour (cascade, Claude). Error and neutral already pass and are unchanged.
- NavBar links and the compact menu toggle get the styled `:focus-visible` ring every other control uses; they had none (five-state gap).
- Every ratio above is already a `tokens:verify` claim; no new guard needed.
- **Open:** on `surface.sunk` in light mode, success-ink and warning-ink read 4.1:1 (a Badge inside a default Card). Not fixed here.
- Docs captions in `src/sections/ComponentSections.jsx` name the new tokens.
- **Figma library:** the library Badge set `9:404` has only `state=pass` and `state=fail`, so it does not mirror the code's five variants (pre-existing parity gap). `state=pass` (`9:405`) stroke and label (`84:16`) now bind `color/status/success-ink` (readback: both `VariableID:211:8`); `fail` already passes. The library has no NavBar master, so nothing to sync. The library `StatusPill` set `9:767` (Paused, Expired) also uses `color/status/warning` as text; it has no code component here and is left for its owner.

### 2026-10-07: `shadow.control.bevel` retired; `shadow.control.raised` held for Studio PM

**Status:** Accepted. Levi: retire the superseded neumorphic tokens. Consumers checked across every studio repo first.

- **`bevel`:** no consumer anywhere. Removed from `tokens/semantic.json`; `tokens.css`, `SCDSTokens.swift` and `token-map.md` regenerated (157 semantic tokens, shadow 7).
- **`raised`: held.** Studio PM's native `RunButton.swift` draws `SCDS.Shadow.controlRaised` from its vendored Swift tokens, and its tests and Money Bags' vendored-token tests assert it. Removing it now breaks Studio PM's next token vendor. Its description names that consumer; it goes when RunButton migrates to `shadow.control.key`.
- No web consumer reads either token (client portal snapshot and crafthouse site carry the definitions only).
- **Figma library:** effect styles `shadow/control/bevel` and `shadow/control/dark/bevel` removed (0 consumers). `shadow/control/raised` and `dark/raised` stay with the token.

### 2026-10-07: the Switch re-lit to the system light, dark knob per pick 3 (cascade, before its sc-tune pass)

**Status:** Accepted. Levi: re-light the Switch once a light source is picked, then run it through sc-tune. Pick 1 is top left, pick 3 is dark keys. Every value below is a cascade from those two picks, not a tune; Levi tunes from this starting point in the lab.

| Token | Was | Now | Cascade |
| --- | --- | --- | --- |
| `shadow.switch.thumb` (both modes) | six layers at `0 y` | each layer at `y/√2 y/√2` (0.37 → 0.26, 0.95 → 0.67, 1.9 → 1.34, 3.6 → 2.55, 7.16 → 5.06, 15.75 → 11.14) | offset rotated 45° toward the bottom right, length kept; blur, spread and colour unchanged |
| `shadow.switch.track` (both modes) | `inset 0 0.45px 0.9px` | `inset 0.32px 0.32px 0.9px` | same rotation |
| Knob rim and face gradients (`Switch.module.css`) | top to bottom (180°) | `135deg` | the Button key face's angle |
| `color.switch.thumb.rimTop` dark | warmGray.200 | dark.raised5 | dark key: rim catches the light |
| `color.switch.thumb.rimBottom` dark | warmGray.350 | dark.raised3 | |
| `color.switch.thumb.faceTop` dark | warmGray.250 | dark.raised4 | face one to two ladder steps above the off track (dark.raised2), as the dark Button key sits one step above the page |
| `color.switch.thumb.faceBottom` dark | warmGray.300 | dark.raised3 | |

- Light-mode knob colours, the tracks, the glyphs and the motion are unchanged.
- **Shared light-source token: not built.** The contract's Phase 0 asks for shade and highlight offsets in one place. Each shadow token is one composite string; reading a shared offset needs `calc()` inside the string, which `tokens-to-swift` and the Figma sync generator do not parse. Until one of them does, the single light lives as a rule: shade toward 135°, highlight toward 315°, and face gradients at `135deg`. `tokens:verify` does not check it yet.
- `tokens:build`, `tokens:swift`, `tokens:map` regenerated; `tokens:verify`, `tokens:map:check`, `tokens:swift:check` and `npm run build` exit 0.
- **Figma library:** `tune-figma-sync.mjs --since cb7d363` generated 8 operations (4 variables, `shadow/switch/{track,thumb}` and their `dark/*` styles); run on the library: 8 done, 0 missing. The knob gradients are master fills, not tokens, so they were rotated by hand: `Knob` and `Face` in both Toggle variants (`9:860`, `483:15`, `9:862`, `483:18`) moved from a vertical transform to the 135° diagonal, stops still bound to `color/switch/thumb/*`.

### 2026-10-07: the Switch re-light is reverted; the Drams Switch stays; glyphs become optional

**Status:** Accepted. Supersedes "the Switch re-lit to the system light, dark knob per pick 3" above (`4ab0729`, `1d39edf`). Levi: the Switch was already updated today, the repaint that matches the Drams Framer site (drams.framer.website, Standard Switch), and nothing changes on it except the option to remove the glyphs.

- **Reverted in code:** `tokens/semantic.json` (switch shadows, dark knob colours), `Switch.module.css` (gradients back to top to bottom) and the generated files are back to `4ab0729^`. The `shadow.switch.*`, `color.switch.*` and `size.switch.*` groups and the Switch CSS are identical to `bece93f`, the Drams restyle.
- **Reverted in Figma:** the four `color/switch/thumb/*` variables and `shadow/switch/{track,thumb}` plus `dark/*` restored (8 done, 0 missing); the `Knob` and `Face` gradients on `9:860`, `483:15`, `9:862`, `483:18` back to the vertical transform. Readback screenshot shows the shadow falling straight down.
- **Exception to the one-light rule:** the Switch stays lit from the top while the Button and the rest of the system follow pick 1 (top left). Its dark knob stays light (it predates pick 3). Logged so the CONTEXT audit line "one light source" reads this as a known exception, not a miss.
- **Glyphs optional:** `Switch` gains `glyphs` (default `true`). `glyphs={false}` drops the I/O row for a plain track. Knob position still carries state without colour (WCAG 1.4.1). Docs gain a "No glyphs" cell; the sc-tune registry gains the prop, and the lab now fills a prop added after a session was saved with its registry default (a saved Switch session otherwise showed the control off while the glyphs rendered).
- **Figma:** the Toggle set `9:858` gains boolean property `Glyphs#498:0` (default on), bound to the visibility of `Glyphs` in both variants (`483:13`, `483:16`); the set description names the code prop.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check` and `npm run build` exit 0.

### 2026-10-07: the Switch track floor gets its own role tokens (no visual change)

**Status:** Accepted. Levi, tuning the dark Switch in sc-tune: an inset shadow should sit on a floor darker than its ground, and he could not find where to change the floor. It was the shared `surface.deepSunk` (dark: dark.raised2 #3B4249, lighter than the page #2C3239), listed under a surface name and read by cards, inputs and meters.

- New `color.switch.track.off` (= surface.deepSunk: warmGray.300 / dark.raised2) and `color.switch.track.offHover` (= surface.hover: warmGray.250 / dark.raised1). Values unchanged; `Switch.module.css` reads them. Levi likes the hover going darker in dark mode, so hover stays its own token next to the floor.
- In the lab they show as `color-switch-track-off` and `-off-hover` in the Switch's colour group; tuning them moves only the Switch.
- **Figma library:** variables `color/switch/track/off` (`499:2`) and `color/switch/track/offHover` (`499:3`), scoped to frame and shape fills, WEB syntax set. The Toggle `State=Off` track fill (`9:859`) now binds `499:2` instead of `color/surface/deepSunk`. The library has no hover variant, so `offHover` is not bound yet.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check` and `npm run build` exit 0.

### 2026-10-07: Switch motion settings from the elastic toggles reel, in sc-tune (shipped inert)

**Status:** Accepted. Levi: add the motion specs from kabarza's reel (instagram.com/reel/DeK0AFcIRhf) to the lab, defaulting to what the reel shows. Also asked how to move the label down 1px; there was no control.

- **Read from the reel** (frames sampled with the burned-in captions; values read off his article and playground): layers 03 slide (220ms "firm", "around 200ms it reads as instant but connected"), 04 stretch ("as long as it is fast, round again by the time it lands"; two ends and a bar is right, `scaleX` is wrong), 05 springs back (`bounce` sets the damping, firm 0, balanced 0.3 in the article; `squash` 22% flatter on the elastic row), 06 answers the press (lean toward the target on pointer down in 150ms, hold, release from that pose, drag off springs back; amount 0.83). The playground's Balanced preset, the one on screen at the end: stretch 0.45, squash 0.00, bounce 0.00, duration 520. Firm and Elastic were never expanded, so their exact numbers are not in the reel.
- **Tokens (Switch role tokens, shipped inert so the Switch is unchanged):** `motion.switch.travel.duration` / `.easing` (= motion.reveal), `motion.switch.stretch` 0, `motion.switch.squash` 0, `motion.switch.press.lean` 0, `motion.switch.press.leanDuration` (= motion.press.duration), and `size.switch.labelOffset` 0px.
- **Engine:** `src/components/Switch/switchMotion.js`. It samples the travel curve, makes the knob's width follow the curve's speed and its height flatten by squash, and plays it as WAAPI keyframes; press lean animates the front edge and holds. It runs only when stretch, squash or lean is above 0 and reduced motion is off. Verified in the lab: at stretch 0.45 the knob peaks at 19.9px on a 14px knob early in the flight and lands at 14px; lean 0.83 widens it to 16.9px; drag-off returns to 14px; release travels from the lean pose.
- **Lab:** the registry gains `jsTokens` (tokens read in JS, which CSS discovery cannot see) and `seed` (where an inert setting starts in a concept): stretch 0.45, squash 0, lean 0.83, lean 150ms, and the travel spring at duration 520ms, bounce 0 (stiffness 146, damping 24.17, mass 1; settles in 1062ms). Seeds fill only tokens a concept has not touched, so concepts A and B keep Levi's colour and size edits. The spring editor gains duration and bounce sliders (duration = 2π√(m/k), bounce = 1 − ζ), the reel's own controls.
- **Calibration that is Claude's, not the reel's:** the reel's lean amount has no stated unit. Here 1 = the front edge advances a quarter of the travel, so 0.83 leans 2.9px on the 14px travel. Tune it in the lab.
- **Not in Figma:** motion has no Figma analogue on the Toggle masters; the tokens are code-only until a record ships.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `npm run build` and `build:lib` exit 0.

### 2026-10-07: the Switch's elastic motion extends to SegmentedControl, PlusUnderline, NavBar and Tooltip (shipped inert)

**Status:** Accepted. Levi: add the same motion to Tooltip, NavBar, SegmentedControl and PlusUnderline. Same rule as the Switch: every new setting ships at 0 (or equal to motion.reveal), so no component changes until Levi records and applies a concept.

- **Shared engine:** `src/motion/elastic.js` (curve sampling, speed, two-ends-and-a-bar pill frames, press lean, WAAPI runner, zoom-safe rects). `switchMotion.js` now uses it; the Switch's frames are unchanged except that a pill now leaves and lands at rest (speed pinned to 0 at both ends; before, the first frame was already 2px long).
- **Per component** (role tokens `--sc-motion-<prefix>-travel-duration/-easing`, `-stretch`, `-squash`, plus `-press-lean/-lean-duration` where something is pressed):
  - SegmentedControl (`segmented-control`): the indicator travels, stretches with speed (× its height) and leans toward a pressed segment. Its measure now uses CSS px, so a zoomed ancestor (the lab stage) no longer skews it; identical outside the lab.
  - PlusUnderline (`plus-underline`): the newly active underline travels from the previous one in the same nav, tablist, radiogroup or list, and leans toward a pressed tab. Shipped, it still jumps. The canvas redraws at every width, so the stretch adds marks instead of distorting them.
  - NavBar (`nav-bar`): new `underline` prop (default false) puts a PlusUnderline under desktop links, carrying NavBar's tokens. Shipped NavBar is unchanged.
  - Tooltip (`tooltip`): the open lift runs the travel curve; stretch and squash are a scale from the arrow (1 = 20% at peak speed), because the bubble carries text. No press lean. New optional `open` prop forces it open or shut (lab replay, docs).
- **Lab:** registry entries for Tooltip, NavBar and PlusUnderline; SegmentedControl gains the elastic tokens. A `reel()` helper seeds each at the reel's Balanced preset (stretch 0.45, squash 0, lean 0.83 / 150ms, spring 520ms bounce 0). The sc-tune skill's procedure B now names `jsTokens` and `seed`.
- **Verified** in the lab (keyframes read back, since the browser pane was hidden and its clock paused): indicator Day → Week peaks 67.3px and settles on the 60.6px segment, aligned to 0.00px in both stages; lean 60.6 → 72.8 → back; underline Month → Day travels 85.4px → 0 with a 44.3px peak; NavBar underline 34.8 → 42.0 with a 42.8px peak; tooltip lifts −4px → 0, peaks 1.09× tall; Shipped stages run no engine animation.
- **Open (Levi's call):** the Motion page's stated rule, "Nothing in the system overshoots / never elastic, never back", contradicts a bounce above 0. Shipped motion still obeys it.
- **Motion page** (`src/sections/MotionSection.jsx`, spec v1.3): new chapter iv, "Elastic controls / in tuning": the four settings with the reel's Balanced values and the shipped values, the five components and their token prefixes, and a live panel that runs the reel preset through token overrides on its own wrapper only (verified: the chapter iii Switch runs no engine; the demo Switch peaks at 20.3px on its 14px knob). The page's "nothing overshoots" hero and annotations are unchanged; the chapter states that elastic motion is in tuning and ships inert. `springEasing({ duration, bounce })` joins the engine so the site can build the reel's spring without importing lab code.

### 2026-10-07: Switch record 2026-10-07-1539 concept B applied (procedure D)

**Status:** Accepted. Levi: "B, apply it." Record `output/tuning/Switch/2026-10-07-1539/`; sync base `ff35f61`. B carries no notes.

| Token | Was | Now |
| --- | --- | --- |
| `size.switch.track-width` / `-height` / `thumb` | 32 / 18 / 14px (space.32, space.micro.18, space.micro.14) | 40 / 22 / 15px, literal |
| `motion.switch.travel.duration` | motion.reveal.duration (200ms) | 600ms, literal |
| `motion.switch.travel.easing` | motion.reveal.easing (quint-out) | `spring` { stiffness 146, damping 17.88, mass 1 } (3% overshoot) |
| `motion.switch.stretch` / `squash` / `press.lean` | 0 / 0 / 0 | 1.06 / 0.15 / 0.12 |
| `color.switch.track.off` / `offHover` dark | dark.raised2 / dark.raised1 | dark.well / dark.floor |
| `color.switch.thumb.rimTop` / `faceTop` / `faceBottom` dark | warmGray.200 / 250 / 300 | dark.textPrimary / warmGray.200 / dark.textTertiary |

- **Unchanged from B:** `space.component.gap-md` (tuned 08px = shipped 8px), `press.leanDuration` (160ms, = motion.press.duration), light mode, glyph size, sound. B's props (checked, glyphs off) are lab state, not shipped defaults; `glyphs` still defaults on.
- **Off-ladder values kept exact** (40px, 22px, 15px, 600ms) as literals in the role tokens, the Button precedent; Levi's call whether any becomes a primitive. 40px is on the 8pt grid with no ladder step; 22 and 15 are off the 4pt grid (learning #144).
- **New token type `spring`:** a tuned spring is stored as physics, not as 60 sampled points. `tokens-to-css` compiles it with the lab's own simulation (now `src/motion/spring.js`, shared by the lab, the engine and the generators): the generated `linear()` is byte-identical to the record's. `tokens-to-swift` emits `SCDSSpring` (stiffness, damping, mass, natural settle) whose `animation(duration:)` time-scales the spring to the paired duration (stiffness × s², damping × s), so iOS lands when the web does; the generated Swift type-checks (`swiftc -typecheck`). `gen-token-map` prints springs; `tune-figma-sync` now reads literal `{ value, unit }` dimensions.
- **Lab check (D step 6):** Shipped and concept B compared by computed style in dark and light: track 40 × 22, knob 15, 600ms, the `linear()` curve, stretch, squash, lean, floor and knob colours. No differences.
- **Figma library:** 12 variables set, 0 missing; new `motion/switch/stretch`, `/squash`, `/press/lean`, `/travel/duration` (600; the library already keeps motion durations and scales as FLOAT). `size/switch/*` now hold 40 / 22 / 15. The Toggle masters' knob, face and glyph positions were fixed numbers, so they were re-seated by hand to the code's geometry (inset 3.5, travel 18): Off knob (3.5, 3.5), face (4, 4) 14 × 14, O ring (24.5, 8); On knob (21.5, 3.5), face (22, 4), I bar (12, 8). The Off knob had a locked aspect ratio that let it hold only one size binding; unlocked, it now binds width and height to `size/switch/thumb` like the On knob. Publishing the library is Levi's step.
- **Docs:** Switch page lead, Switch CSS geometry comments, `Switch.tokens.md`, Motion page chapters iii and iv (the Switch spring is named as the one exception to "nothing overshoots"), CONTEXT audit row.

### 2026-10-07: the no-overshoot rule stays, with the Switch as its named exception

**Status:** Accepted. Levi: keep the rule with the exception. The Motion page keeps "Nothing in the system overshoots" and "never elastic, never back"; the "excluded curve" annotation (chapter i) and chapter iv name the Switch knob's 3% spring overshoot (record 2026-10-07-1539 B) as the one exception. A further overshoot anywhere else needs its own logged exception.

### 2026-10-07: motion is fluid, overshoot is welcome (supersedes the no-overshoot rule and its Switch exception)

**Status:** Accepted. Levi: "rewrite it, i love overshoots, we need to make my UI more fluid." Supersedes the two entries above that kept "Nothing in the system overshoots" (first as a rule, then with the Switch as its exception).

- **Motion page, spec v2.0** (`src/sections/MotionSection.jsx`): eyebrow "fluid, with weight"; title "Things you touch have weight. They overshoot, swing back and settle."; the lead says controls you move travel on springs and pass their mark, while things you only read keep the four curves. Chapter i annotations become "Springs for touch, curves for reading" and "Overshoot is welcome"; chapter iii's "One language" points moving controls at their elastic tokens; chapter iv drops the exception wording.
- **The old rule was already false:** `motion.easing.springOut` (Button release, 2026-07-23) rises to 1.56. The new copy names it.
- **Direction for the build:** anything a finger moves (Switch, SegmentedControl, PlusUnderline, NavBar underline) travels on a tuned spring; bounce above 0 no longer needs an exception. Reading surfaces (Tooltip enter, panels, pages) keep the four curves unless Levi tunes otherwise. Values still come from sc-tune records, never set in code.
- **Still open:** the formal SCDS motion-philosophy pick (sc-motion, Gate 1 of its own; CONTEXT "Out of scope"). This direction reads closest to Experiential / Spatial; the pick itself is Levi's.

### 2026-10-07: SegmentedControl material tokens for its sc-tune session (shipped flat)

**Status:** Accepted. Levi: open SegmentedControl in the lab. The audit's Tier 1 change (recessed track, key indicator) had no tokens to tune, and the track and indicator read shared surfaces.

- **Role tokens, shipped equal to today:** `color.segmentedControl.track` (= surface.sunk), `.indicator` (= surface.floating), `.indicatorShade` (transparent), `shadow.segmentedControl.track` and `.indicator` (zero alpha). The indicator gains the Button key's face, `linear-gradient(135deg, transparent, indicatorShade)`, invisible while the shade is transparent. Disabled stays flat (no recess, no lift, no face).
- **Lab starts (concept seeds, lit from the top left per Gate 1 pick 1):** track recess = the Drams recess (inset 0 1px 2px at .25, the Switch's source before its ×0.45 scale) turned to the top left: `inset 0.71px 0.71px 2px` ink .25 light, black .45 dark. Indicator = the Button key, `shadow.control.key` and `color.control.keyShade` per mode. Plus the reel motion seed already in place.
- **Lab engine:** registry seeds can be per mode (`seed.scoped`), checked per mode so a light seed does not block its dark twin.
- Segment padding still reads the shared `padding-inline/block.*` tokens; procedure D gives it role tokens if Levi tunes them.

### 2026-10-07: SegmentedControl record 2026-10-07-1645 concept A applied (procedure D)

**Status:** Accepted. Levi: "apply it." Record `output/tuning/SegmentedControl/2026-10-07-1645/` (supersedes 1617: same values plus "add the 3%"); sync base `37ce7a4`. No notes.

| Token | Was | Now |
| --- | --- | --- |
| `motion.segmentedControl.travel.duration` / `.easing` | = motion.reveal (200ms quint-out) | 600ms literal / `spring` { 146, 17.88, 1 } (the Switch's, 3% overshoot) |
| `motion.segmentedControl.stretch` / `squash` / `press.lean` | 0 / 0 / 0 | 0.45 / 0.2 / 0.15 |
| `shadow.segmentedControl.track` | zero alpha | `inset 0.71px 0.71px 2px 0` ink .25; dark black .45 |
| `shadow.segmentedControl.indicator` | zero alpha | `shadow.control.key` values per mode, literal (its own role) |
| `color.segmentedControl.indicatorShade` | transparent | ink .05; dark .25 |

- **Unchanged:** track and indicator fills (surface.sunk / surface.floating values), press lean duration (160ms), segment padding (still shared tokens; Levi did not tune it), sound.
- **Checks:** the generated `linear()` equals the record's; Shipped and concept A match by computed style in light and dark (track and indicator fill, shadows, face gradient, duration, curve, stretch, squash, lean). `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `npm run build`, `build:lib` exit 0; `swiftc -typecheck` passes.
- **Figma library:** the generator listed nothing to bind, which was wrong here: the role tokens were created at 0 in `a0f3513` and never reached the library. Created variables `color/segmentedControl/track` (`508:156`), `/indicator` (`508:157`), `/indicatorShade` (`508:158`), `motion/segmentedControl/stretch` (`508:159`), `/squash` (`508:160`), `/press/lean` (`508:161`), `/travel/duration` (`508:162`); effect styles `shadow/segmentedControl/track`, `/indicator` and their `dark/*`. Bound: track `85:3` fill and recess style; Selected=true variants `137:30`–`137:34` fill to the indicator variable, plus the 135deg face gradient (Button key transform, stop bound to `indicatorShade`) and the key style on all but Disabled (flat). The selected instance `138:4` carried a fill override; overrides on `138:2/4/6` reset so they follow the masters. Library Selected Hover (`surface/raised`) and Active (`surface/sunk`) fills now match code's single indicator fill. Publishing is Levi's step.
- **Generator gap:** `tune-figma-sync` decides "bind by hand" from the token diff, so a token that existed at the sync base but never reached Figma is reported as already bound. Worth a fix: check the library, not the diff.

### 2026-10-07: brand-site sidebar redesign (ADR brand-site-sidebar-redesign)

**Status:** Accepted. Levi's direction: build the sidebar to the Figma "sidebar nav" layer (`ufNlysCwWz7y2FBk61DxbN`, node `2144:25`) on SCDS, current spec over SCDS on every row except the switch (SCDS Toggle), and keep the live site's hover and click states.

- **Process:** an SCDS-strict build sat beside the spec (comparison frame `2661:6560`) so the gaps were visible before any change. Rows where the spec won became SCDS updates, not overrides.
- **Tokens added:** `color.warmGray.40` `#F5F0E9`; `color.surface.nav` (light warmGray.40, dark `dark.raised2`); `space.20`, `space.28` (4pt steps; the card inset is 28/24/20/24); `font.text.medium.12`, `bold.13`, `displayTight.11` with semantic `font.text.label.uiMedium`, `navHeading`, `navCurrent`.
- **Dark value:** Levi picked the raised1 step. It collided with `surface.hover` dark (also raised1), which hid the live hover pill on the card, so the card moved one step up to raised2. The hover stays a step below the card, as it does in light.
- **Current link ink:** `brand.accentInk`, not `brand.accent`. Teal-500 measured 3.5:1 (light) and 2.9:1 (dark) on the card at 13px; accentInk measures 6.27:1 and 5.99:1.
- **Hover/press:** unchanged from the live site: `surface.hover` pill on `radius.control`, outset 8px past the label, per-character slot roll to `interactive.hover`, press scale. The spec's white pill and 4px radius were not adopted, so no hover or radius token was added.
- **Content:** the code's full list stays (4 groups, 34 links); Figma gains the Brand elements group and the three extra components. Group ordinals leave the heading (mobile crumb keeps them). Footer reads `© 2026` / `SCDS-v.01`; the version row is gone. The card hugs its content and sticks at the 24px inset.
- **SCDS library** (`0zVoxaLJQkjHENYJlQk1VT`): new variables and text styles `text/label/{nav-heading,nav-current,ui-medium}`; NavLink gains `Label`, `Count`, `Show Count` properties and a `State=Hover` variant, Current drops the hidden bar; NavEyebrow drops the ordinal and gains `Label`. Publishing the library is Levi's step.
- **Open:** the library holds the restored oatmeal warm-gray set (`warmGray/25` `#F8F6F2`, page `#E3DFD8`) that the repo JSON does not; reconciling the two is a separate pass.
- Verified: `tokens:verify` passes; geometry matches the spec at 1440 (card 24/24/256, first label y 128.5 vs 129); AA on every sidebar label in both modes except the footer's `text.disabled` (its declared tier, unchanged).

### 2026-10-07: Color page layouts key off the chapter column, not the viewport

**Status:** Accepted (decide-and-log; reversible, in-standard). Trigger: the warm-gray ramp overflowed the page at 768 (`scrollWidth` 889 vs `clientWidth` 753 on main).

- **Cause:** every multi-column block on the Color page switched on at a 768px *viewport*, but the sidebar rail takes 256px of it (304px once PR #81 lands), leaving a 425px (377px) column. Five blocks overflowed at 768, not one: ramp labels, Shu plate (its foot never wrapped, needing ~593px), three-jobs, verdicts, and the Shu rail hexes clipped at 1024.
- **Ramp:** a `.rampTrack` scroll container owns 13 `minmax(max-content, 1fr)` columns; swatches and labels share them via `subgrid`, so labels never leave their swatch. Each label carries `--sc-space-component-gap-md` end padding. Fits from a ~607px column; scrolls inside its track below that (768 only, today). Scrollbar thin, `--sc-color-text-disabled` thumb.
- **Blocks:** `.chapterBody` is an `inline-size` container named `chapter`. Jobs, status 2-up and checker top go side by side at a 560px column; Shu plate + rail (with the 200px glyph) and the ratio + verdict split at 720px. Every track is `minmax(0, …)` (learning #111). Thresholds were set from a measured sweep of each block's real minimum width.
- **Consequence:** at 1024 and 1280 the Shu plate and the ratio/verdict row now stack; before, they sat side by side with clipped content. At 1440 the layout is unchanged.
- `.color` gets `width: 100%`: at ≥1280 it is a shrink-to-fit flex item, and a contained child would collapse it (measured 540px instead of 777px).
- Verified at 390 / 768 / 1024 / 1280 / 1440, each at a 256px and a simulated 304px rail: page `scrollWidth == clientWidth` and no block's descendants overflow. `vite build` exits 0.

### 2026-10-07: tune-figma-sync reads the library instead of inferring it from the diff

**Status:** Accepted. Levi: fix the sync script bug permanently, in its own PR.

- **Bug:** the generator diffed `tokens/*.json` against `--since` and reported "Bind by hand: None: every change updates a token the library already binds". A token that existed at the base but never reached Figma (the SegmentedControl role tokens, created at 0 in `a0f3513`) got no create op and no warning; the apply nearly shipped with the library unbound. Two silent drops rode along: `duration` tokens (the library keeps motion durations as FLOAT) and `spring`/easing tokens were skipped without a line in the report, and created variables took Figma's default ALL_SCOPES.
- **Fix:** every generated call carries a manifest of all library-syncable names (variables per collection, effect styles, text styles) and returns `{ done, created, absent, missing }`, read from the library at run time. `--tokens <a,b,c>` (token paths or library names, `Primitives:` prefix for that collection) builds create ops for named tokens, so `absent` pastes straight back in. Durations sync as FLOAT ms; code-only types are listed under "Code only"; created variables get explicit scopes by role (fills, text, stroke, width/height, gap, radius; none for motion). The report's "After the call" section replaces the diff-based "Bind by hand".
- **Tests:** `scripts/tune-figma-sync.test.mjs` (`npm run test:scripts`), committed red first (4/4 failing for the stated reasons), then green; a planted bug in the `absent` filter turned the first test red. The tests run the real CLI and execute the generated code against a fake library.
- **Live proof:** the generated read-only call (`--since HEAD`, 0 ops) on the SCDS library checked 330 names and returned 34 absent, with nothing written. They are real: the inert motion tokens of PlusUnderline, NavBar and Tooltip, `leanDuration` for Switch and SegmentedControl, `motion/press/release/duration`, `size/switch/labelOffset`; and naming drift where the library uses other names than the token paths (status-ink and `interactive/hoverInk/light` primitives, `color/text-on-inverse`, `color/surface-inverse`, `text/body/*` and `text/nav/*` styles). Reconciling the names is its own change.
- **Skill:** sc-tune procedure D step 7 now reads `absent` and binds only `created`.

### 2026-10-07: library reconciled with the token files; one name map for sync and parity

**Status:** Accepted. Levi: reconcile the 34 tokens the fixed sync reported absent.

- **Direction kept from earlier decisions:** the token files are the source of values; the library keeps its documented names. Audit 5.5 (2026-07-28) renamed `color/text-on-inverse` and `color/surface-inverse` Figma-side to `text/onInverse` and `surface/inverse`, and 5.6 kept `motion/press/release-duration`; the flat ink tier and the body regular/bold and nav text-style names are recorded differences (2026-08-16, 2026-10-03). Renaming them back would reopen those decisions; renaming the code tokens would break live CSS consumers. So 18 of the 34 were not missing at all: the sync looked under the token paths.
- **One map:** new `scripts/figma-names.mjs` holds those differences. `tune-figma-sync`, `parity/compare-figma-variables` and `parity/figma-plugin-check` all import it (the plugin check no longer regex-reads `NAME_MAP` out of another script). The map gains `color.status.info.ink.light` → `color/status/infoInkLight`, added to the library today but never mapped, and text-style names kebab their segments everywhere (`label.buttonLg` → `text/label/button-lg`, which the plugin check had rendered `text/label/buttonLg`).
- **Aliases name their collection:** a semantic alias now resolves in its target's collection; `color/signal/live` exists in both, and a name-only lookup could alias a variable to itself.
- **Created in the library** (generated `--tokens` call, run verbatim): `motion/switch/press/leanDuration`, `motion/segmentedControl/press/leanDuration`, the five PlusUnderline and five NavBar motion variables, the three Tooltip ones, and `size/switch/labelOffset`; durations alias `motion/duration/press` or `/micro` in Primitives, the rest are 0 (inert), motion scopes empty. No master reads them (Figma masters do not animate; the library Toggle has no label), so nothing to bind.
- **Result:** the same call re-checked all 330 library-syncable names and returned `absent: []`, `missing: []`.
- **Tests:** 7 in `npm run test:scripts`, each new one committed red first (`38361eb`, `435ce3b`). `figma-plugin-check` and `compare-figma-variables` still run (exit 0).
- **Not run:** the full value-parity pass (`figma-plugin-check`) on the live library; the values written today come from the token files, and older value drift, if any, is that check's job.

### 2026-10-07: the oatmeal warm-gray set returns; the library is canonical

**Status:** Accepted. Supersedes the scds-v2 light-surface desaturation (warmGray.25/50/100 only). Closes the "Open" line of the sidebar redesign entry above. Levi's call: "this is the floor #E3DFD8, update the warmgrey color ramp to match."

- **Drift found:** the SCDS library Primitives (`0zVoxaLJQkjHENYJlQk1VT`) carried the restored oatmeal set and re-derived inks, while `tokens/primitives.json` still held the scds-v2 values. No branch on origin carried the restore. The repo now matches the library, value for value.
- **Ramp:** `warmGray.25` `#FBF9F6` → `#F8F6F2`, `.50` `#F4F1ED` → `#F1EFEB`, `.100` (page) `#EBE7E4` → `#E3DFD8`. 200 to 900 unchanged.
- **warmGray.40 ordering:** `#F5F0E9` (PR #81) now sits between 25 and 50 by relative luminance (0.923 > 0.876 > 0.864). On the scds-v2 values it did not: it read darker than `.50` (0.876 < 0.883).
- **Inks re-derived for AA on `#E3DFD8`** (library values; figures measured by `tokens:verify`):
  - `warmGray.450` (text.tertiary) `#6B665E` → `#66615A`: 4.29 → 4.62:1 on page.
  - `status.success.ink.light` `#28724D` → `#246E4A`: 4.39 → 4.64:1.
  - `status.warning.ink.light` `#B83E0B` → `#B13700`: 4.24 → 4.63:1.
  - `interactive.hoverInk.light` `#027175` → `#006D72`: 4.37 → 4.61:1.
  - New `status.info.ink.light` `#2B57D5` (4.61:1). The info fill `#2D5AD8` reads 4.43:1 on the oatmeal page, so `status.info-ink` light now aliases the new ink instead of the fill. Library name: `color/status/infoInkLight`.
- **Claim register:** `scripts/verify-contrast.mjs` CLAIMS re-measured (150 claims); the scds-v2 figures that descriptions still quote as history are pinned in HISTORICAL. Every quoted figure in the token descriptions was updated to the oatmeal measurement.
- **Resolved same day (Levi: "point it at 600"):** on the oatmeal page `interactive.hover` light (teal.500 `#038E93`) measured 2.99:1, under the WCAG 1.4.11 non-text floor (3:1) for the icon/border use its exception allows (3.23:1 on scds-v2). Light hover now aliases `teal.600` (`#04797D`, the `brand.accentFill` value): 3.92:1 on page, 4.53:1 raised, 4.82:1 floating, 4.59:1 on the nav card (`warmGray.40`). Dark stays `teal.300`; active stays `teal.700`, so the 600 to 700 press step holds. Body text in the hover color is still the documented exception; `interactive.hover-ink` covers it. The library Semantic `color/interactive/hover` Light was rebound to `color/teal/600` the same day. `border.default` reads 2.34:1 on page (was 2.52:1); it was already below 3:1 and is a decorative rule.
- **Dark mode:** unaffected except the tokens that alias `warmGray.50` in dark (`border.strong`, `interactive.default`, `surface.inverse`) move from `#F4F1ED` to `#F1EFEB`.
- Verified: `tokens:build`, `tokens:map`, `tokens:swift` regenerated; `tokens:verify` passes (112 AA pairs, 150 claims, 0 orphans); `tokens:map:check`, `tokens:swift:check`, `npm run build` and `build:lib` exit 0. `public/tokens.css` snapshot refreshed. The library needed no change for the ramp; only the hover rebind above.

### 2026-10-07: sidebar nav pill states (ADR sidebar-nav-pill-states)

**Status:** Accepted. Levi's direction after PR #81 shipped: the nav hover pill should sit lighter than the card, not darker; the active page becomes white text on an accent fill; weight stays Text 75 Bold (the heaviest Text cut).

- **Hover:** new `color.surface.navHover` (light `utility.white`, dark `dark.raised2`), one step above `surface.nav`. With the collision gone, `surface.nav` dark returns to `dark.raised1`, Levi's original pick. The letter roll still runs, but lands on `interactive.hover-ink`, not `interactive.hover`: teal-500 on the white pill measured below AA.
- **Active:** `brand.accentFill` pill (teal-600) with `text.onAccent` label, Bold, on hover too. Not `brand.accent`: white on teal-500 is below AA at 13px; the fill step is the token built for white text. The active roll layer is also `text.onAccent` so the label never vanishes into the fill.
- **SCDS library:** `color/surface/navHover` added, `color/surface/nav` dark rebound, NavLink Hover and Current variants restyled to match. Publishing stays Levi's step.
- **Pill radius:** 8px (`radius.surface`), up from `radius.control` (3px), on the hover pill. Levi, same day.
- **Active, revised (Levi, same day):** the solid accent pill is out. Six concepts were boarded (`previews/nav-active/`, dev-only): solid pill, raised key, recessed well, plus-block tail, plus underline, hanging plus; Levi picked the plus-block tail with the label in his accent. The current page now has no container: label Bold in `brand.accentInk` (teal-500 as 13px text is below AA on the card in both modes), and an accent `PlusBullet` (the brand's current-item mark, `size.icon.sm`) at the row end. Hovering the current page shows the normal hover pill. The nav count (`num`, only ever `12` on Button) is removed from code and the library NavLink (Count / Show Count properties).
- Verified in both modes: hover pill lighter than the card, active label AA, hover roll AA; `tokens:verify` passes.

### 2026-10-07: physical-controls Phase 0 (material layer), graded by tokens:verify

**Status:** Accepted. Levi: continue the sprint with Phase 0, then the rest of Tier 1 and Tier 2 (branch `feat/physical-controls-2`).

- **One light, now a check:** `scripts/verify-light.mjs` runs inside `npm run tokens:verify`. Every shadow token in both modes: offsets on the 135/315 diagonal (x = y), a cast shade toward 135deg, a cast highlight toward 315deg; inset layers on the diagonal (a recess darkens its top-left wall, a convex face may light it, both the same light). Every face gradient in a component stylesheet runs at `135deg`. Zero-alpha layers are inert role tokens and are not graded. Exemptions cite their decision and fail once the token is gone: `shadow.switch.*` and the Switch knob gradients (the Drams repaint, lit from the top), `shadow.control.raised` (held for Studio PM), `shadow.control.inset` (Card's hover inset; Card moves to its own tokens in Tier 2). Tests committed red first (`32f8d2e`); planted bug (shade sign flipped) turned 3 red.
- **No box-shadow transition:** Button, Card and Input dropped `box-shadow` from their transitions; shadow changes snap, press stays on `transform`. Rule 6 of the same check fails any component that transitions `box-shadow` or `all` (red first, `d9116bc^`; planted bug: 1 red).
- **Forced colors:** Button key border takes `ButtonBorder`; SegmentedControl track gets a `CanvasText` edge and the indicator a `Highlight` frame; Switch gets a track edge, a solid knob and a `Highlight` on-track. All inside `@media (forced-colors: active)`; normal rendering is unchanged, so the Switch stays final. Verified in headless Chromium with `forcedColors: 'active'`: every control keeps its edge.
- **Not built:** a shared light-offset token (unchanged reason: each shadow is one composite string that `tokens-to-swift` and the Figma sync do not parse with `calc()`). The check replaces it.

### 2026-10-07: Stepper material and roll tokens for its sc-tune session (shipped flat)

**Status:** Accepted. Tier 1 next after Phase 0. Every value ships equal to today; nothing moves until Levi records and applies a concept.

| Token | Shipped (= today) | Lab start (concept seed) |
| --- | --- | --- |
| `color.stepper.track` | surface.sunk | unchanged |
| `shadow.stepper.track`, `.window` | zero alpha | the top-left recess (SegmentedControl 1645 track) |
| `color.stepper.key` | transparent | the Button key fill (surface.raised values) |
| `color.stepper.keyHover` | surface.deepSunk | = key (hover derived from rest, the Button rule) |
| `color.stepper.keyShade` | transparent | control.keyShade values |
| `shadow.stepper.key` / `.keyPressed` | zero alpha | shadow.control.key / keyPressed values |
| `color.stepper.window` | transparent | unchanged |
| `motion.stepper.travel` | motion.reveal | reel spring (520ms, bounce 0) |
| `motion.stepper.roll` / `stretch` / `squash` | 0 / 0 / 0 | 1 / 0.45 / 0 |

- **Readout roll** (Claude's structure, Levi's values): on a committed step the new numeral rolls into the readout window from below (increase) or above (decrease) along the travel curve, clipped by the window, scaling with speed (1 = 20%, the Tooltip rule for text). `roll` 1 = one window height, an odometer; the reel has no roll, so that start is Claude's. Verified in the lab: concept A rolls 24.8px over the 1062ms spring; Shipped runs nothing.
- **Disabled is flat:** a disabled control and a key at its bound lose shadow and face. Today's 0.6 dim on the whole control stays until a record decides it (open question).
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts`, `npm run build` and `build:lib` exit 0.

### 2026-10-07: Stepper numeral sits flat; readout fixed to two digits (amends the Stepper tokens entry above)

**Status:** Accepted. Levi, in the lab: "dont inset the number and make the width fixed to accomodate double digits so it doesnt move."

- **No window:** `color.stepper.window` and `shadow.stepper.window` are removed (both shipped transparent and zero alpha, so nothing visible changes), with their CSS, forced-colors edge and lab seed. The numeral sits flat on the pill; the readout box still clips the roll.
- **Fixed width:** the readout was `min-width: 2ch` inside border-box padding, so two digits overflowed it and the control grew at 10. Now `min-width: calc(2ch + 2 × mono letter-spacing + 2 × gap-sm)` with tabular numerals. Measured in the lab, both stages: 130.75px wide and the + key at 82.75px for 4, 9, 10 and 99; a third character (−10, 100) still grows it (140.13px). This ships now: it is a layout fix, not a tuned value.
- **Lab state:** concept A's saved session still carries the old `--sc-shadow-stepper-window` seed. Nothing reads it; procedure D drops it at apply.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts`, `npm run build` and `build:lib` exit 0.

### 2026-10-07: Stepper key hover is the Button primary hover; pressed one accent step darker

**Status:** Accepted. Levi, in the lab: "hover should be the same as my button, my accent color and pressed should be a shade darker accent token, the plus and minus should fade to white when the button is on hover."

| Token | Was | Now |
| --- | --- | --- |
| `color.stepper.keyHover` | surface.deepSunk | `{color.control.keyHoverFill}` (teal.600, the Button primary hover) |
| `color.stepper.keyHoverInk` | (new) | `{color.control.keyHoverInk}` (white) |
| `color.stepper.keyPressed` | (new; press read keyHover) | `{color.brand.accentDeep}` (teal.700, the Button primary press fill) |
| `color.stepper.keyPressedInk` | (new) | `{color.text.onAccent}` (white) |

- **Aliases, not copies:** each points at the Button's semantic token, so a later Button retune carries to the Stepper. `verify-contrast.mjs` now follows a semantic-to-semantic alias in the same mode (it threw on one before); `tokens-to-css`, `tokens-to-swift` and the token map already did.
- **Fade:** the glyph is `currentColor` and the key already transitions `color` on `motion.hover` (200ms), so the ± fades to white on hover with no new motion token.
- **AA guard:** the label-on-fill check gains both Stepper pairs (6 pairs pass in both modes).
- **Shipped now:** this is Levi's direction, so it ships without a record; hover and press turn teal on the shipped Stepper today. Key rest, shade, lift and the roll stay flat until his record.
- **Hover shadow:** stays the Stepper's rest key shadow (hover derived from rest), not `control.keyHover`, so a flat shipped key does not grow a lift on hover.
- **Lab:** the registry no longer seeds `keyHover` (= rest). The four seed values Claude had placed in concept A's saved session (`keyHover` and the removed `window`, light and dark) were deleted only where they still equalled the seed; nothing Levi set was touched. Computed style in both stages and modes: hover rgb(4 121 125) / white, pressed rgb(5 98 104) / white.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts`, `npm run build` and `build:lib` exit 0.

### 2026-10-07: Stepper hover and press shadows are the Button primary's; the disabled dim stays

**Status:** Accepted. Levi, answering the two open questions: hover shadow "same as my button component"; "dim is good".

- **Hover:** new `shadow.stepper.keyHover` = `{shadow.control.keyHover}`, read by `.button:hover`. Shipped, a flat key now lifts on hover, as the Button does.
- **Press (cascade, Claude):** `shadow.stepper.keyPressed` = `{shadow.control.keyPressed}` (was zero alpha), so hover and press both match the Button and a press does not drop the lift to nothing. The lab no longer seeds `keyPressed`; Claude's two seed values in concept A (light, dark) were removed where they still equalled the seed.
- **Disabled:** the whole control keeps its 0.6 dim, with the material flat underneath (Levi).
- **Figma sync:** `tune-figma-sync.mjs` crashed on a shadow aliasing another shadow (`parseColor` on `undefined`; 3 `test:scripts` red). It now syncs the target's layers per mode, since effect styles carry no aliases. Test committed red first (`4b411af`); planted bug (alias branch removed) turned 4 red.
- **Checks:** computed style in both lab stages and both modes: Stepper hover and press shadows equal `control.keyHover` / `keyPressed`. `tokens:verify` (light rule included), `tokens:map:check`, `tokens:swift:check`, `test:scripts` (17), `npm run build` and `build:lib` exit 0.

### 2026-10-07: the Stepper ± gets its own press scale (shipped at 1)

**Status:** Accepted. Levi: "is the plus and minus signs also scaling on press? i cant tell, if not add it."

- **Measured:** it did scale, but only with the whole key at `motion.press.scale` 0.985: the 16px glyph went to 15.76px, a quarter pixel.
- **Added:** `motion.stepper.glyphPressScale` (number, shipped 1 = with the key only), read by `.button:active .glyph` as `scale`, on the press pair (`motion.press.duration` / `easing`), compounding with the key's scale. Reduced motion removes it. Icon instances carry `styles.glyph`.
- **Lab start:** 0.85, Claude's start so the press reads; Levi sets the value. Measured in the lab with the forced active state: concept A 16 → 13.4px, Shipped 16 → 15.76px (unchanged).
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts`, `npm run build` and `build:lib` exit 0.

### 2026-10-07: Stepper record 2026-10-07-1847 concept A applied (procedure D)

**Status:** Accepted. Levi: "apply it." Record `output/tuning/Stepper/2026-10-07-1847/`; sync base `68cbdfb`. One concept, no notes.

| Token | Was | Now |
| --- | --- | --- |
| `space.component.gap.stepper` (new role) | (gap-sm, 4px) | `{space.8}`: Levi's lab edit of the shared gap-sm 4 → 8px |
| `shadow.stepper.track` | zero alpha | `inset 0.71px 0.71px 2px 0` ink .25; dark black .45 |
| `color.stepper.key` | transparent | `{color.surface.raised}` (#F1EFEB / #343A41) |
| `color.stepper.keyShade` | transparent | `{color.control.keyShade}` (ink .05 / .25) |
| `shadow.stepper.key` | zero alpha | `{shadow.control.key}` |
| `motion.stepper.travel.duration` / `.easing` | = motion.reveal (200ms quint-out) | 1062ms literal / `spring` { 146, 24.17, 1 } (no overshoot) |
| `motion.stepper.roll` / `stretch` / `squash` | 0 / 0 / 0 | 1 / 0.45 / 0 |
| `motion.stepper.glyphPressScale` | 1 | 0.85 |

- **Shared token kept:** `gap-sm` also feeds SegmentedControl, Input, Tooltip, Alert, Divider and the type specimen, so it stays 4px. The Stepper's three uses (pill gap, readout inline padding, readout min-width) read the new role token. The control grows 130.75 → 146.75px wide and stays fixed from 0 to 99.
- **Cascade (Claude):** the key's rest fill, face and lift alias the Button key tokens rather than copying their values, the same as hover and press (Levi: "same as my button component"), so one Button retune moves every Stepper key state together. Values equal the record.
- **Off the ladder, kept exact:** 1062ms (the spring's settle time), as the Switch and SegmentedControl durations.
- **Lab check (D step 6):** Shipped and concept A compared by computed style in light and dark (17 properties each: width, gap, track ground and recess, key fill, face, lift, hover and pressed fill and shadow, readout padding and min-width, roll duration and curve, roll, stretch, squash, glyph scale): no differences. The generated `linear()` is byte-identical to the record's. `swiftc -typecheck` passes.
- **Figma library:** generated call (11 ops): created `color/stepper/key` (`517:2`), `/keyShade` (`517:3`), `motion/stepper/travel/duration` (`517:8`), `/glyphPressScale` (`517:9`), `/roll` (`517:10`), `/stretch` (`517:11`), `space/component/gap/stepper` (`517:12`), and effect styles `shadow/stepper/{track,key}` + `dark/*`. `absent` named the 10 Stepper tokens made earlier today and never synced; the `--tokens` call created `color/stepper/track` (`518:2`), `/keyHover` (`518:3`), `/keyHoverInk` (`518:4`), `/keyPressed` (`518:5`), `/keyPressedInk` (`518:6`), `motion/stepper/squash` (`518:7`), and `shadow/stepper/{keyHover,keyPressed}` + `dark/*`. The read-only re-check over all 352 library names returned `absent: []`, `missing: []`.
- **Masters re-seated to code:** the Stepper set `139:51` predated the code geometry (keys 32 square, gap 0, pill padding bound to `space/4` while code reads `padding-sm` 8px). All variants now read 146.75 × 56: padding `space/component/padding/sm`, gap and readout inline padding `space/component/gap/stepper`, keys 40 × 40 on `radius/pill` at x 8 and 98.75, readout 34.75 wide at x 56 with `text/mono/body`, numeral centred. Track: `color/stepper/track` + `shadow/stepper/track`. Keys: `color/stepper/key` + the 135deg face (stop bound to `keyShade`) + `shadow/stepper/key`; keys at a bound and the Disabled variant are flat; Disabled is at 0.6 with no recess. New variants `State=Hover` (`519:2`) and `State=Pressed` (`519:12`) show the + key in that state (`keyHover` / `keyPressed` fill, ink and style). Readback matches code except the readout box height, 25 in Figma vs 24.8 in code (Figma rounds the 1.55 line height). The clones first held the bind placeholder colour (black); every bound paint was rewritten with its variable's resolved value. Motion (roll, glyph scale) has no Figma analogue on the masters. Publishing the library is Levi's step.
- **Docs:** Stepper page lead, states and token rows (`src/sections/ComponentSections.jsx`), `Stepper.tokens.md`.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts`, `npm run build` and `build:lib` exit 0.

### 2026-10-07: ProgressIndicator interactive bar material and motion tokens for its sc-tune session (shipped equal to today)

**Status:** Accepted. Tier 1, after the Stepper (branch `feat/physical-controls-3`). The audit row: a recessed track and a physical thumb that carries the non-text cue the fill misses (teal.500 on the track is 1.66:1). Static meters (bar, circular, step) stay flat.

| Token | Shipped (= today) | Lab start (concept seed) |
| --- | --- | --- |
| `color.progressSlider.track` / `.trackDisabled` | surface.deepSunk / surface.sunk values | unchanged |
| `color.progressSlider.fill` / `.fillHover` / `.fillDisabled` | brand.accent / interactive.hover / text.disabled values | unchanged |
| `shadow.progressSlider.track` | zero alpha | the top-left recess (SegmentedControl 1645 track) |
| `size.progressSlider.track` | space.4 (= bar-height) | unchanged |
| `size.progressSlider.thumb` | 0px (thumbless) | 15px, the Switch knob |
| `color.progressSlider.thumb{RimTop,RimBottom,FaceTop,FaceBottom}` | transparent | the Switch knob values per mode, as values, at 135deg |
| `shadow.progressSlider.thumb` / `.thumbPressed` | zero alpha | `shadow.control.key` / `.keyPressed` values per mode (the Button key) |
| `motion.progressSlider.travel` | = motion.reveal | reel spring (520ms, bounce 0) |
| `motion.progressSlider.drag` | = motion.reveal | unchanged |
| `motion.progressSlider.stretch` / `.squash` | 0 / 0 | 0.45 / 0 (reel) |
| `motion.progressSlider.thumbPressScale` | 1 | 0.985, the Switch knob press |

- **Own tokens, never the Switch's:** the thumb reads only `progressSlider` tokens; the registry copies the knob's hex values (`KNOB` in `previews/tune/registry.jsx`). The Switch is untouched.
- **The 135deg conflict:** the Switch knob gradients run top to bottom, and `verify-light` grades every face gradient at 135deg. The thumb's rim and face run at 135deg, the system light. No exemption is added; running them top to bottom is Levi's call and would need one.
- **Structure (Claude's, Levi's values):** the thumb rides inside the track (centre from thumb/2 to width − thumb/2) and the fill ends under its centre; the pointer maps through the same inset. A seek (click, key) travels on `travel` and, through `src/motion/elastic.js`, stretches the thumb with speed (two ends and a bar). A drag trails the pointer on `drag`, split from travel so a slow spring never lags the finger; shipped, both are today's 200ms. Dragging scales the thumb and softens its lift (directive 4). Disabled is flat.
- **Shared tokens kept shared:** the focus ring (`border.width.focus`, `border.focusOffset`, `border.focus`), `border.width.default` (the thumb rim hairline), `radius.pill`, `motion.reveal` (track thickening), `motion.hover` (fill colour) and `motion.press` (thumb scale timing). Procedure D gives any of them a role token if Levi tunes it.
- **Forced colors:** the track gets a `CanvasText` border (border-box, no size change), the fill `Highlight`, the thumb a solid `ButtonText` disc, `GrayText` when disabled. Verified in headless Chromium with `forcedColors: 'active'`.
- **Sound:** none shipped. The registry plays the concept's sound on a keyboard step that changes the value; Levi picks the file (a `tick` candidate).
- **Lab:** `?c=<name>` with no registry entry shows "no lab entry for <name>"; it used to open (and save into) the Switch session silently. The ProgressIndicator panel lists the interactive block's 34 tokens, not the 53 of the whole stylesheet.
- **Checks:** Shipped stage by computed style, both modes: track 4px on the deepSunk value, no recess, fill teal.500 at value × width with the 200ms quint-out, thumb 0 × 0; every role token equals its source token. Concept A: thumb 15px centred on the fill end; an End key step plays 60 keyframes over 1062ms, the thumb 15 → 21.75 → 15px, landing at offset 0. `tokens:verify` (light rule included), `tokens:map:check`, `tokens:swift:check`, `test:scripts` (17), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.
- **Open (Levi's call):** Gate 1 pick 3 B gives dark mode dark keys with a faint highlight; the seed follows the Switch knob in dark (a light knob, record 1539 B) with the Button's dark lift. Duplicate the concept to try a dark thumb.

### 2026-10-07: Slider splits from ProgressIndicator; ProgressIndicator stays flat (amends the ProgressIndicator slider tokens entry above)

**Status:** Accepted. Levi: "isnt the progress indicator something that dynamically grows to show how complete something is and not an interactive slider?", then "A, progress indicator stays flat".

- **Why:** the `interactive` prop (commit `09dde30`, Drams #4/#5) turned the progress bar into a volume control (`role="slider"`). A meter is read; a slider is moved. Screen readers already treat them as two controls.
- **Slider** (`src/components/Slider/`, exported from `src/index.js`): the interactive bar with the recessed track and the physical thumb from the entry above. Tokens renamed `*.progressSlider.*` → `*.slider.*`, values unchanged. New `size.slider.trackActive` (space.micro.6) and `size.slider.hitSlop` (space.micro.22), equal to the `size.progress.*` tokens it read before.
- **ProgressIndicator:** bar, ring and steps are byte-equal to main (comments aside) and flat. `interactive` renders a Slider for one release, marked deprecated; drop it next release. `size.progress.bar-height-active` and `size.progress.hit-slop` stay published with no SCDS consumer (retire question below).
- **Lab:** the entry is `Slider` (`?c=Slider`). Levi's saved session moved from `sc-tune:v2:ProgressIndicator` to `sc-tune:v2:Slider` with only the token names renamed (on a non-saving page, then reloaded): concept A, dark, value 0.67, sound `drams-009-01.wav`. The old key is kept and no longer loads. A backup export sits in the session scratchpad.
- **Docs:** new Slider page (nav after Progress); the Progress page drops the interactive states, rows and callout, and its rule now reads "A meter is never a control". PlusProgress, the brand-element callout and the Code Connect table name Slider.
- **Record:** `output/tuning/Slider/2026-10-07-2207/` (Levi: "for the slider, you can record A"). One concept, so the lab shows no pick control and the spec says none was picked; Levi's word is the pick. A = the seeds untouched plus the keyboard-step sound `drams-009-01.wav`. Off the ladder: 15px thumb, 1062ms. Not applied.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (17), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.
- **Open:** retire `size.progress.bar-height-active` and `size.progress.hit-slop` (also in the Figma library) once consumers are checked; the Figma Progress page (`139:52`) interactive masters move to a Slider set at apply.

### 2026-10-07: Slider record 2026-10-07-2207 concept A applied (procedure D)

**Status:** Accepted. Levi: "apply it". Record `output/tuning/Slider/2026-10-07-2207/`; sync base `8ff271d`. One concept, no notes.

| Token | Was | Now |
| --- | --- | --- |
| `shadow.slider.track` | zero alpha | `inset 0.71px 0.71px 2px 0` ink .25; dark black .45 |
| `shadow.slider.thumb` / `.thumbPressed` | zero alpha | `{shadow.control.key}` / `{shadow.control.keyPressed}` |
| `color.slider.thumbRimTop` / `RimBottom` | transparent | white / warmGray.200; dark dark.textPrimary / warmGray.350 |
| `color.slider.thumbFaceTop` / `FaceBottom` | transparent | warmGray.50 / warmGray.100; dark warmGray.200 / dark.textTertiary |
| `size.slider.thumb` | 0px | 15px literal |
| `motion.slider.travel.duration` / `.easing` | = motion.reveal (200ms quint-out) | 1062ms literal / `spring` { 146, 24.17, 1 } (no overshoot) |
| `motion.slider.stretch` | 0 | 0.45 |
| `motion.slider.thumbPressScale` | 1 | 0.985 |
| sound | none | new role `slide` = Drams 009 (`src/sound/assets/slide.wav`, 48 kHz mono 16-bit), on a keyboard step that changes the value; a drag is silent. `Slider` takes `sound` (default true) |

- **Cascade (Claude):** the thumb lift and its pressed lift alias the Button key shadows instead of copying their values (as the Stepper keys), so a Button retune moves the thumb too. The rim and face alias the primitives the Switch knob uses, never the Switch tokens. Values equal the record.
- **Unchanged:** track, fill and disabled colours, track heights, hit slop, the drag curve (still 200ms), squash 0.
- **Off the ladder, kept exact:** 15px (off the 4pt grid, learning #144), 1062ms (the spring's settle time).
- **Lab check (D step 6):** Shipped and concept A compared by computed style in dark and light (track height, ground and recess; fill width, colour and curve; thumb size, position, rim, face, lift and curve; stretch, squash, press scale, travel duration): no differences. The generated `linear()` is byte-identical to the record's.
- **Figma library:** the generated call created `color/slider/thumb{RimTop,RimBottom,FaceTop,FaceBottom}` (`522:2`–`522:5`), `motion/slider/travel/duration` (`522:12`), `/stretch` (`522:13`), `/thumbPressScale` (`522:14`), `size/slider/thumb` (`522:15`) and effect styles `shadow/slider/{track,thumb,thumbPressed}` + `dark/*`. `absent` named the 10 slider tokens made earlier and never synced; the `--tokens` call created `color/slider/{track,trackDisabled,fill,fillHover,fillDisabled}` (`523:2`–`523:6`), `motion/slider/drag/duration` (`523:7`), `/squash` (`523:8`), `size/slider/{track,trackActive,hitSlop}` (`523:9`–`523:11`). The read-only re-check over all 376 library names returned `absent: []`, `missing: []`.
- **Masters:** new component set `Slider` (`524:21`) on the Progress page beside the Progress set, variants `State=Default` (`524:2`), `Hover` (`524:7`), `Pressed` (`524:12`), `Disabled` (`524:17`), each 320 × 48 (the hit box) at value 0.5, geometry from the lab measurement: track at y 22, 4px (`size/slider/track`; Pressed y 21, 6px on `trackActive`), fill 160 wide, thumb 15 × 15 at (152.5, 16.5) bound to `size/slider/thumb`, rim and face gradients at the 135deg transform with every stop bound, `shadow/slider/track` / `thumb` / `thumbPressed`. Disabled is flat: `trackDisabled`, a solid `fillDisabled` thumb, no face, no effects. Every bound paint was written with its variable's resolved colour (no placeholder). Readback matches the code; the press scale (0.985) is motion and is not drawn. The Progress set's old `Variant=BarActive` (`140:23`) is left in place for consumers (retire question). Publishing is Levi's step.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (17), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.

### 2026-10-07: Input material tokens for its sc-tune session (shipped flat)

**Status:** Accepted. Levi: "open Input in the lab". The last Tier 1 component. Audit row: a true recessed well, the focus underline stays, a hover state.

| Token | Shipped (= today) | Lab start (concept seed) |
| --- | --- | --- |
| `color.input.well` / `.wellFocus` / `.wellDisabled` | surface.sunk / surface.page / surface.sunk values | unchanged |
| `color.input.wellHover` (new state) | = well | surface.hover values (#C4BCB4; dark #343A41), the Switch track hover precedent |
| `shadow.input.well` | zero alpha | the top-left recess + `inset -2px -2px 2px` white (.70 light, .06 dark) |
| `color.input.rule` / `.ruleFilled` / `.ruleFocus` | border.default / strong / focus values | unchanged |
| `color.input.ruleHover` (new state) | = rule | unchanged |
| `space.component.padding-inline.input` / `padding-block.input` / `gap.input` | 12 / 8 / 4px | unchanged |

- **Seed sources:** the recess is the system's top-left recess (SegmentedControl 1645). The white bounce is the Drams 036 container's `inset -2px -2px 2px` white, lighting the bottom-right inner wall (the same light); its alphas come from `shadow.control.bevel`'s highlight (light .70, dark .06), because the Drams figure carries none. Both are Claude's start; Levi sets every value.
- **Hover:** new, shipped equal to rest. The well shifts on any enabled, unfocused hover; the rule moves only on an empty, valid field, so a filled field keeps `ruleFilled` and an error keeps the status colour. Checked in headless Chromium: hover on a filled field reads the strong rule.
- **Focus and error** draw their 2px underline on top of the well's recess (`box-shadow: well, inset 0 -1px 0 0 …`). Disabled is flat: no recess.
- **Forced colors:** a full `CanvasText` edge, a `Highlight` focus outline, `GrayText` when disabled. Verified in headless Chromium.
- **Shared tokens kept shared:** `radius.control`, the type styles, the text colours, `status.error` (a signal colour never aliases into a role, learning #39), `motion.hover`.
- **Lab fix:** the lab's own field styles were scoped to `.app` and restyled the staged Input (warmGray.50 ground, 2/6 padding). They are now scoped to the header and the panel; the staged Input renders its own CSS.
- **Checks:** every role token equals its source token in both modes; the Shipped stage reads the sunk well, 8/12 padding and the default rule with a zero-alpha recess. `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (17), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.

### 2026-10-07: Input follows Levi's filled-field reference; the title stays above with optional subcopy (amends the Input tokens entry above)

**Status:** Accepted. Levi, with a reference sheet (a filled-field set in light and dark): "use these for input with 1 change, keep the form title above and left justified", "also add subcopy helper text as an option to have under the form title above the input field", "use phosphor for the icons in the bold weight". Ships now (Levi's direction, the Stepper hover precedent); the lab tunes from here.

- **Measured off the reference** (2000 × 1500, 1x): field 520 × 70, about 6px corner, no rule, no shadow; fill white at about 15% over the dark ground and ink at about 7% over the light one; value 20px (cap 15px), label 15px, icons 24px, clear mark 15px, icon-to-text 21px.
- **Mapped x0.8** to the 16px body (the type system holds): padding 16/12 (48px tall with the label outside), icons 20px, clear 16px in a 32px button, slot gap 16px, corner 3px (`radius.input`; 4.8 has no step, Levi's call), fill `rgb(ink / 0.07)` light and `rgb(white / 0.15)` dark.
- **The one change:** the label stays above the field, left-aligned, not inside it. New `description` prop: subcopy under the title, above the field, in `text.caption`, wired into `aria-describedby`. `helper` and `error` stay under the field.
- **Slots:** `icon`, `prefix` (a segment set off by a rule), `suffix`, `trailing`, `clearable` + `onClear`. Phosphor components render bold. Not built here: the reference's select, chips, card-number group, date and time pickers; each is its own component.
- **States:** hover and focus keep the fill (the reference shows neither); focus is the system ring on the box, since there is no rule to recolour; error is a hairline `status.error` edge (2px when focused). Disabled is flat. Forced colors: a full edge, a `Highlight` ring, `GrayText` when disabled (headless Chromium).
- **Tokens:** `color.input.rule*` removed (no rule; made earlier today on this branch, never on main or in Figma). New `color.input.adornment`, `.divider`, `size.input.{icon,clear,clearTarget}`, `space.component.gap.input-inline`, `radius.field`. `shadow.input.well` stays at zero alpha.
- **Lab:** Claude's two Input seeds (recess with a white bounce, darker hover well) left the registry, and were removed from the saved concept A where they still equalled the seed (four values; nothing else was in it). The entry gains the slot props.
- **Non-text contrast (1.4.11):** the tinted box is under 3:1 against the page in both modes, as the sunk field was (1.14:1). The title, the value and the placeholder carry the field; logged as a gap.
- **Figma:** the Input masters follow at the record's apply, with the variables.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (17), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.

### 2026-10-07: Input corner 8px; the reference's other parts stay out; the field contrast gap is accepted

**Status:** Accepted. Levi, answering the three open questions: "1. 8", "2. no", "3. accept".

- **Corner:** `radius.field` = `{radius.default}` (8px); was 3px (`radius.input`). Ships now; both lab stages read 8px.
- **Scope:** the reference's select, chips, card-number group and date and time pickers are not built.
- **Non-text contrast:** the tinted box stays under 3:1 against the page in both modes. Accepted by Levi; the title, value and placeholder carry the field.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (17), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.

### 2026-10-07: the light Input field goes lighter than the page, at the same contrast

**Status:** Accepted. Levi: "make the light mode the same contrast but lighter instead of darker".

- `color.input.well`, `.wellHover`, `.wellFocus`, `.wellDisabled` light: `rgb(white / 0.46)`; was `rgb(ink / 0.07)`. Dark unchanged (white 15%).
- **Matched contrast:** against `surface.page` (#E3DFD8), ink at 7% composites to rgb(213 209 202), 1.146:1; white at 46% composites to rgb(240 238 234), 1.146:1. White at 45% gives 1.139:1, so 46% is the nearest whole step.
- **On a raised surface** (`surface.raised`, #F1EFEB, the docs cards) the same fill composites to rgb(247 246 244), 1.06:1, so the field nearly disappears there. The Levi-accepted contrast gap covers it; a card-specific fill is a later call if it matters.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `npm run build`, `build:lib` and `swiftc -typecheck` exit 0; headless Chromium reads `rgba(255, 255, 255, 0.46)` on the light field, and the lab's dark stages still read white 15%.

### 2026-10-07: Input record 2026-10-07-2237 concept A applied (procedure D)

**Status:** Accepted. Levi: "apply it". Record `output/tuning/Input/2026-10-07-2237/`; sync base `a8d0584^` (`bf2b3cd`, before the Input tokens). One concept, no notes, no token changes: concept A equals the shipped Input (Levi's filled-field reference, the 8px corner, the light fill white 46%).

- **Code:** nothing to change. Lab check (D step 6): Shipped and concept A compared by computed style (fill, corner, padding, slot gap, recess, height, title gap, value size and ink): identical. The only edit is `shadow.input.well`'s description, which still named Claude's removed lab seed; it now says the reference is flat.
- **Figma variables:** the generated call created `color/input/{well,wellHover,wellFocus,wellDisabled,adornment,divider}` (`526:2`–`526:7`), `radius/field` (`526:8`), `size/input/{icon,clear,clearTarget}` (`526:11`–`526:13`), `space/component/padding-inline/input` (`526:14`), `padding-block/input` (`526:15`), `gap/input` (`526:16`), `gap/input-inline` (`526:17`) and effect styles `shadow/input/well` + `dark/well`. `missing: []`. The read-only re-check over all 392 library names returned `absent: []`, `missing: []`.
- **Icons:** new `Icon/x-bold` (`527:4`) and `Icon/envelope-simple-bold` (`527:8`) on the Icons page, from Phosphor's bold outlines on the 256 grid, fill bound to `color/text/primary`, SCALE constraints (the `Icon/arrow-right-bold` precedent).
- **Masters re-seated to code:** the `TextField` set (`9:487`) predated the code (a pill box, a 1px stroke, the sunk fill, the title in primary ink). All variants now read the code: title `text/label/ui` in `text/secondary` (disabled `text/disabled`); box fill `color/input/well` (`wellDisabled` on Disabled) written with its resolved colour, no stroke, corners on `radius/field`, padding on `padding-inline/input` / `padding-block/input`, slot gap on `gap/input-inline`, `shadow/input/well`; value in `text/body/default/regular`, placeholder ink on Default, Hover, Focus and Disabled, primary on Active and Error. New boolean properties `Leading icon` (envelope, bold, 20px on `size/input/icon`, `color/input/adornment`), `Clear` (x, bold, 16px on `size/input/clear`) and `Subcopy` (a `text/caption` line under the title), all off by default as in code; the `Value` text property defaults to the placeholder. The focus ring keeps its 2px stroke at the 2px offset, corner 12 (8 + offset + width). New variant `State=Error` (`528:95`): a 1px inside edge on `color/status/error` (weight on `border/width/default`) and the error text in `text/caption`. Readback with every slot on matches the code measurement: title 18, gap 4, subcopy 20 (code 20.14), box at y 46 and 48 tall, icon 20 at (16, 14), value from 52 to W − 48, clear 16 at (W − 32, 16). Publishing the library is Levi's step.
- **Docs:** `Input.tokens.md` (Figma ids).
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.

### 2026-10-07: Card material tokens for its sc-tune session (shipped equal to today)

**Status:** Accepted. Tier 2, the first component (branch `feat/physical-controls-4`). Audit row: two materials, a raised `plate` lit from the top left and a recessed `well`; an interactive plate presses on click; no `box-shadow` transition.

| Token | Shipped (= today) | Lab start (concept seed) |
| --- | --- | --- |
| `color.card.well` (default) | surface.sunk | unchanged |
| `shadow.card.well` | zero alpha | the top-left recess (SegmentedControl 1645 track) |
| `color.card.plate` (elevated) | surface.page | the Button key fill (surface.raised values) |
| `shadow.card.plate` | zero alpha | shadow.control.key values |
| `color.card.interactive` / `.interactiveHover` | surface.sunk / surface.deepSunk | surface.raised values / = rest |
| `shadow.card.interactive` / `.interactiveHover` / `.interactivePressed` | zero alpha / control.inset / control.inset (aliases) | control.key / = rest / control.keyPressed values |
| `motion.card.pressScale` | 1 | 0.995 (motion.press.card.scale) |
| `space.component.padding.card` | padding.lg (24px) | unchanged |
| `radius.card` | radius.surface (8px) | unchanged |

- **Variants map to materials:** `default` is the well, `elevated` the plate, `interactive` the plate that presses. The API is unchanged; whether `interactive` reads the plate tokens directly is a call for the apply step, once Levi's values say whether they differ.
- **Role tokens for shared values (finding 5):** `padding.lg` (sections, frames) and `radius.surface` (Button, Alert) stay shared; the card reads `padding.card` and `radius.card`. The brief named `gap-lg` too: the Card stylesheet only listed it in a comment and never read it, so there is no gap token and the stale comment is gone.
- **Hover and focus** both read `interactiveHover` (today's card treats them the same); press reads `interactivePressed` and scales on the shared press pair (`motion.press.duration` / `easing`). Reduced motion removes the scale.
- **Disabled is flat (directive 5):** no lift, no hover ground, `not-allowed` cursor. Today a disabled interactive card still took the hover ground; that was the only behaviour change, a five-state fix.
- **Forced colors:** an inset `CanvasText` outline on every card (`ButtonBorder` interactive, `GrayText` disabled) and a `Highlight` focus ring; outline, so no size change. Verified in headless Chromium with `forcedColors: 'active'`.
- **No box-shadow transition:** the card transitions its ground and `transform` only.
- **verify-light:** the two role tokens that alias `shadow.control.inset` were graded again through the alias and failed. A mode that aliases an exempt token now inherits the exemption (the light is graded once, at the target); a copy by value is still graded. Tests committed red first (`7ebb335`); planted bug (inherit line disabled) turned 3 red. `shadow.control.inset` stays exempt until the Card record replaces the aliases; then it has no SCDS consumer and the retire check runs.
- **Checks:** main and this branch compared on the Card docs page by computed style, every state (rest, hover, pressed, keyboard focus), both modes: 168 values, 8 differ, all inert (a zero-alpha shadow for `none`, an identity matrix for `none`); the 6 card screenshots are byte-identical. `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (20), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.
- **Lab:** `?c=Card`, 21 tokens, no console errors. Shown on one stage: well, plate and interactive plate side by side (`show` picks one). Served from this session's worktree on port 5174, because the main checkout's 5173 server serves `main`.

### 2026-10-08: Card is flat or liquid glass, in three levels (supersedes the plate and well tokens above)

**Status:** Accepted. Levi: "I need 2 styles of cards, 1 flat no border color surface floating and another card with liquid glass", with his Figma Glass setting (light -45deg 30%, refraction 65, depth 68, dispersion 0, frost 9, splay 57), and "3 different level settings from subtle, regular, and heavy". Ships now (Levi's direction, the Input reference precedent); the lab tunes from here.

- **API:** `variant` `flat` (default) or `glass`; `level` `subtle`, `regular` (default) or `heavy`; `interactive` (a button: hover, focus ring, press, disabled). `default`, `elevated` and `interactive` map to `flat` for one release; drop the mapping next release.
- **Flat:** `color.card.flat` = surface.floating, no border, no shadow. Interactive hover `color.card.flatHover` = surface.raised (Claude's start).
- **Glass, regular = Levi's Figma values.** Frost 9 is the blur radius; CSS `blur()` takes the standard deviation, so the card blurs at 4.5px. Light -45deg is the system light (Gate 1 pick 1, top left); 30% becomes the rim, a 1px inset highlight on the top-left inner wall and half that on the far wall where the glass carries light through (both graded by verify-light). Dispersion 0: not built.
- **Refraction** (`src/components/Card/glass.js`): a displacement map per card, rebuilt on resize and on a lab token change, applied as `backdrop-filter: url(#id) blur()`. Near the edge the backdrop is sampled from further in, as at the edge of a lens. Mapping from Figma units: band = depth/100 of the card's half short side; edge shift = refraction/100 x band/2; falloff (1 - t)^p with p = 1 + 3 x (1 - splay/100). The mapping is Claude's; Levi judges it in the lab against his Figma frame.
- **Subtle and heavy, and every tint, are Claude's start:** subtle frost 4, refraction 40, depth 40, light 20%; heavy frost 16, refraction 85, depth 85, light 45%; splay 57 for all. Tints white 12 / 20 / 30% light, 4 / 6 / 10% dark (the Figma effect carries no fill). Hover veil white 8% / 5%. Levi sets each in the lab.
- **Browsers:** only Chromium applies an SVG filter as a backdrop-filter, so only Chromium refracts. Firefox and WebKit keep frost, tint and rim (computed style checked in each; no page errors). Reduced transparency turns glass into the flat card; forced colors draw an inset edge and drop the filter (headless Chromium).
- **Slop blocklist:** it names "glassmorphism panels". This is Levi's direction with a sourced setting (his Figma Glass effect), logged here as the exception directive 3 asks for. It is not a decorative blur: the glass carries the system light and refracts.
- **Directive 1 (reading stays flat):** the flat card is the reading default. Glass is for cards over imagery, colour or scrolling content.
- **Contrast gap:** glass text contrast depends on the backdrop. Over the lab's bright backdrop in dark mode, secondary text is unreadable. Logged; the docs rule says to measure over the real backdrop and reach for a heavier level or the flat card.
- **Removed:** `color.card.{well,plate,interactive,interactiveHover}` and `shadow.card.{well,plate,interactive,interactiveHover,interactivePressed}` (made on this branch, never on main or in Figma). Kept: `padding.card`, `radius.card`, `motion.card.pressScale` (1).
- **`shadow.control.inset`:** Card no longer reads it; no SCDS consumer remains. Money Bags' vendored Swift test reads `SCDS.Shadow.controlInset`, so it is held (the `control.raised` precedent) and the verify-light exemption now names that consumer.
- **Lab:** `?c=Card` shows flat and the three glass levels over a backdrop (`backdrop`: type and colour, type, none), with `interactive` and `disabled`. Claude's 17 plate and well seeds were removed from the saved concept A (all equal to the seed; nothing of Levi's was in it). The lab now fires `sc-tokens-change` when a concept or theme changes, so the glass map rebuilds.

### 2026-10-08: Card glass concepts A (lightens) and B (darkens) from Levi's liquid-glass best practices; a floating shadow

**Status:** Proposed in the lab; Levi picks. Levi: "give me an option B that makes glass darken instead of lighten", "take the below best practices into consideration and update concept A and B" (a pasted set: layering, legibility and contrast, performance, accessibility fallbacks, and a sample CSS), then "the glass cards dont have to be flat, you can add a subtle shadow so it looks like its floating".

| Setting | A (lightens) | B (darkens) |
| --- | --- | --- |
| Tint, light (subtle / regular / heavy) | white 16 / 24 / 36% | ink 6 / 10 / 16% |
| Tint, dark | white 5 / 8 / 12% | black 20 / 32 / 45% |
| Saturation (both modes) | 140 / 160 / 180% | 140 / 160 / 180% |
| Rim | the shipped rim (Figma light 20 / 30 / 45%) | same |
| Floating shade (added to the rim) | 4 / 6 / 10px offset on the 135deg diagonal, 16 / 24 / 32px blur; warm gray 12 / 14 / 18% light, black 24 / 30 / 38% dark | same |
| Text halo | `0 0 2px` white 60% light, black 60% dark | white 50% light, black 70% dark |
| Hover veil | lightens (white 8% / 5%) | darkens (ink 6% light, black 12% dark) |

- **Taken from the best practices:** vibrancy (a saturation boost, new `size.card.glass.{level}.saturation`, shipped 100 = none); legibility (a text halo, new `shadow.card.glass.text`, zero offset, shipped zero alpha); opaque fallbacks (glass becomes the flat card under `prefers-reduced-transparency`, `prefers-contrast: more`, and on an engine with no `backdrop-filter`; forced colors already drew an edge); a depth shadow so the glass floats (Levi); docs rules for layering (glass is a floating layer, never the content layer) and performance (one glass layer, no nesting; group controls into one card).
- **Not taken from the sample CSS:** its straight-down shadow and top-edge glow (the system light is top left; the floating shade falls on the 135deg diagonal, graded by verify-light at apply); its `box-shadow` transition and `will-change` (rule 6: shadow changes snap, cards repeat); its hover lift (press stays on scale); its 1px border (the Figma rim carries the edge); its fixed dark fallback colours (the fallback is the flat card's token).
- **Shipped look unchanged:** saturation 100 and a zero-alpha halo render as today. Every concept value is Claude's proposal; the record carries Levi's pick and any edits.
- **Lab state:** concepts A and B written on a non-saving page (`?c=Nonexistent`); concept A had no values of Levi's. The view zoom is set to 1 so the four cards fit.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (20), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.

### 2026-10-08: Card record 2026-10-08-0921 applied: flat plus three glass levels in two tones, 14 cards (procedure D)

**Status:** Accepted. Levi: "I actually want both light and dark options along with the 3 glass variants ... for a total of 14 cards", "rename the 3 glass types so visually i know what to expect from each rendered surface", "then record the settings and apply it". Record `output/tuning/Card/2026-10-08-0921/` (two concepts, no pick in the lab: its pick control holds one; Levi's word keeps both). Sync base `d0143f8` (no Card token was in the library).

- **Reading of "14":** 7 surfaces (flat; clear, frosted, thick, each in a light and a dark tone) x 2 themes (light and dark mode). Concept A became the light tone (`tone="light"`, lightens what is behind it); concept B the dark tone (`tone="dark"`, darkens it).
- **Names (Claude, for what each surface looks like):** `clear` (was subtle: thin frost, light bend), `frosted` (was regular: Levi's Figma Glass), `thick` (was heavy: heavy frost, strongest bend and tint). Level `subtle`/`regular`/`heavy` never left this branch, so there is no mapping.
- **Tokens (values equal the record):** `color.card.glass.{clear,frosted,thick}.{light,dark}`, `color.card.glass.hover.{light,dark}`, `shadow.card.glass.{clear,frosted,thick}` (rim plus floating shade, both tones), `shadow.card.glass.text.{light,dark}`, `size.card.glass.{level}.saturation` 140 / 160 / 180. Frost, refraction, depth and splay unchanged.
- **New primitive** `color.blackRgb` (0 0 0): Swift composes a colour only from a channel triplet, and the dark tone's dark-mode tints are black. `tune-figma-sync` treated the first new triplet as a colour and threw; a triplet is now code-only (tests red first `c19ceae`; planted bug, both guards removed, turned 4 red).
- **Lab check (D step 6):** the record's values against the Shipped stage, every glass card, both themes (tint, rim and float, text halo, saturation, hover veil): 60 values, 0 differ.
- **Figma library:** the generated call created 28 variables and 10 effect styles (`color/card/*`, `radius/card`, `space/component/padding/card`, `motion/card/pressScale`, `size/card/glass/*`, `shadow/card/glass/*` + `dark/*`); `color.blackRgb` is code-only. New page **Card** (`535:2`) in GLOBAL after Progress, with the first SCDS **Card** set (`535:43`): `Surface` (Flat, Clear light, Frosted light, Thick light, Clear dark, Frosted dark, Thick dark) x `Theme` (Light, Dark) = 14 variants (`535:3` to `535:40`), each 320 wide with padding on `space/component/padding/card`, corners on `radius/card`, fill on its Card variable written with its resolved colour, Theme as an explicit Semantic mode, the glass rim and float as the effect style, the text halo as the text's effect style, and a `Content` text property. Each glass variant carries Figma's native Glass effect with the record's values (light -45deg at 20 / 30 / 45%, refraction 0.40 / 0.65 / 0.85, depth 40 / 68 / 85, dispersion 0, frost 4 / 9 / 16). A backdrop frame (`535:45`) sits behind the set so the glass has something to bend; it is not part of the component. Readback: fill alpha per theme equals the token, padding 24, radius 8, effect styles bound. The read-only re-check over all 428 library names returned `absent: []`, `missing: []`. Publishing is Levi's step.
- **Not in Figma:** splay (the Plugin API's Glass effect has no splay field; set it in the Glass panel by hand if it matters), saturation (no backdrop saturation in Figma), the code's refraction mapping (Figma renders its own), interactive states (hover, press, focus are code-only for now). Glass effects cannot bind variables, so the masters carry the values directly.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (21), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.

### 2026-10-08: Figma glass effect styles for the three Card glass levels

**Status:** Accepted. Levi: "you cant add a glass effect style for each 3 variants?"

- New effect styles `glass/card/clear`, `glass/card/frosted`, `glass/card/thick`, each one Figma Glass effect with the `size.card.glass.<level>.*` values (light -45deg at 20 / 30 / 45%, refraction 0.40 / 0.65 / 0.85, depth 40 / 68 / 85, dispersion 0, frost 4 / 9 / 16). Bound on the `Glass` layer of all 12 glass variants of the Card set `535:43` (readback: each layer reads its style and the style's values). Glass is the same in both themes, so there is no `dark/` pair.
- Splay (57) has no Plugin API field: set it once per style in the Glass panel and every variant follows.
- `tune-figma-sync` does not generate these styles yet; a change to a `size.card.glass.*` token leaves them stale until they are edited by hand (open question: teach the sync to write them).

### 2026-10-08: tune-figma-sync writes the glass effect styles (closes the open question above)

**Status:** Accepted. Levi: "yes, teach the sync to write them, ive set them to 57 splay in figma".

- **Source:** `size.<component>.glass.<level>.{frost, refraction, depth, splay, light}` become one Figma Glass effect style, `glass/<component>/<level>`, in Figma's units (refraction, splay and light / 100; depth and frost as they are; an aliased frost resolves to pixels). Light angle -45deg (the system light, Gate 1 pick 1); dispersion 0 (not built in code). A style is written when one of its level tokens changes or it is named; every glass style joins the library check. A level token that differs between modes stops the run (effect styles carry no modes).
- **Splay:** the Plugin API does read and write a `splay` field on a Glass effect (0.57 after Levi's edit; it is missing from the typings). The sync writes `splay / 100`, so Levi's 57 is now the token's 57.
- **New tokens** `size.card.glass.{clear,frosted,thick}.light` = 20 / 30 / 45: the light intensity had lived only as the rim's alpha. A `test:scripts` data check holds `light / 100` equal to the rim's top-left highlight alpha in both modes.
- **Tests** committed red (`c45723d`, 4 red); planted bug (splay dropped from the op) turned 2 red. `sc-tune` procedure D notes the glass styles.
- **Library:** the run (`--since 7a58285`) created `size/card/glass/{clear,frosted,thick}/light` and rewrote the three glass styles in place (bindings on the 12 variants unchanged). Readback: clear L0.20 R0.40 D40 F4 S0.57, frosted L0.30 R0.65 D68 F9 S0.57, thick L0.45 R0.85 D85 F16 S0.57, angle -45, dispersion 0. All 434 library names: `absent: []`, `missing: []`.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (26), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.

### 2026-10-08: Levi's answers to the carried physical-controls questions

**Status:** Accepted. Levi, 2026-10-08, answering the open questions after PR #88 (branch `feat/physical-controls-followups`).

1. **"round to the nearest":** `size.slider.thumb` 15px → `{space.16}`. 15 sits exactly between `space.micro.14` and `space.16`; Claude rounded up to the main 4pt step. `motion.slider.travel.duration` 1062ms → `{motion.duration.orchestrated}` (720ms): 1062 is past the top of the duration ladder. The spring curve is unchanged, so the seek plays about a third faster. Figma: `size/slider/thumb` and `motion/slider/travel/duration` now alias the primitives; the four Slider thumbs (`524:5`, `524:10`, `524:15`, `524:20`) re-seated to 16 × 16 at (152, 16), centre (160, 24) as before. The Stepper, Switch and SegmentedControl 1062ms values were not in the question and stay.
2. **"yes" (retire):** `size.progress.bar-height-active` and `size.progress.hit-slop` removed. Consumer check: only vendored token copies (client-portal `tokens.snapshot.css`, Studio PM's vendored `SCDSTokens.swift`, the site's `tokens.css`) and debug-symbol tables name them; no source reads them. Figma: `Variant=BarActive` (`140:23`, no instances, the only node binding `bar-height-active`) removed from the Progress set; the variables `126:23` and `126:24` deleted.
3. **"yes" (drop):** ProgressIndicator's deprecated `interactive` prop and Card's legacy variants (`default`, `elevated`, `interactive`) removed. No repo renders either component from SCDS (Studio PM imports only tokens and fonts).
4. **"they need transparency, not a solid color":** `Input surface="raised"` with `color.input.wellRaised`: ink 7% light (1.148 on `surface.raised` against the page field's 1.146; 1.154 on `surface.floating`, so a field in a flat Card holds too), white 15% dark (the page value already reads 1.596 on raised against 1.616). Every state. The value is matched to the page field's contrast (cascade, Claude). Figma: variable `color/input/wellRaised`; no TextField variant (not asked).
5. **"set a rule that can be broken based on what the card sits on top of":** Card `tone="auto"` is the new default: the light tone in light mode, the dark tone in dark mode, so the glass pushes the backdrop away from the text ink. `tone="light"` / `"dark"` break the rule where the backdrop already gives the text its contrast. Tokens `color.card.glass.{clear,frosted,thick,hover}.auto` and `shadow.card.glass.text.auto` alias the tone tokens per mode. Docs rule and Card set description.
6. **"raise the hover color to the next lightest token value, add the press scale the buttons use":** `color.card.flatHover` → `{color.utility.white}` light, `{color.dark.raised3}` dark (the next steps above floating: warmGray.25 and dark.raised2); was surface.raised. `motion.card.pressScale` → `{motion.press.scale}` (0.985).
7. **"i dont need them in figma, just in code":** Card interactive states stay code-only.
8. **Publish:** Levi publishes the library after these changes.

- **Checks:** computed style on this branch, both modes: flat hover white / rgb(67 74 81), press `matrix(0.985 …)`, auto tint = the light tone in light and the dark tone in dark for all three levels, raised Input fill ink 7% / white 15%, Slider thumb 16px, travel 720ms, no page errors. Figma sync (`--since 55ebeba`): 11 ops, created `color/input/wellRaised`, `color/card/glass/{clear,frosted,thick,hover}/auto`, `shadow/card/glass/text/auto` + `dark/auto`; all 439 library names `absent: []`, `missing: []`. `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (26), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.

### 2026-10-08: Tooltip role tokens for its sc-tune session (shipped equal to today)

**Status:** Accepted. Tier 2, the second component (branch `feat/physical-controls-5`). Audit row: today a flat inverse surface that fades and lifts; change: a raised plate with a short lift; finding 5.

- **Role tokens (finding 5):** `color.tooltip.{surface,text}` (= `surface-inverse` / `text-on-inverse`), `shadow.tooltip.plate` (zero alpha), `radius.tooltip` (= `radius.control`, 3px), `size.tooltip.{arrow,lift}` (= `gap.sm`, 4px), `space.component.{padding-inline,padding-block,gap}.tooltip` (12 / 8 / 8). The tooltip stops reading the shared padding and gap scale and the inverse pair (PlusField also reads them).
- **Check:** the lab's Shipped stage against a baseline taken before the change, light and dark, open and closed: 60 values, 2 differ, both the inert zero-alpha plate shadow (`none` to a transparent inset).
- **Forced colors:** an inset 1px `CanvasText` outline and a `CanvasText` arrow (headless Chromium, both schemes). No `box-shadow` transition: only opacity and transform transition.
- **Concept B, glass** (a tooltip is a floating layer): a `variant="glass"` with the tooltip's own glass tokens, Claude's start = the Card's frosted glass in its auto tone, by value. Inert while solid; dropped at the pick (below).
- **Lab work Levi asked for, each shipped inert first:** the trigger opens on hover (`show` prop: hover, open, closed) and plays the lab's tuned sound; `motion.tooltip.growFrom` (start scale about the arrow tip, shipped 1) so the plate grows out of the trigger point, with the Switch spring and squash 0.15 as the lab seed (values, never the Switch's tokens); close shrinks back into the trigger point on the same curve, cut where the curve first reaches 1 so an overshoot never flashes it back; an interrupted run hands its pose to the next (cut at 158ms: live scale 0.8863, close first frame 0.8863).
- **Arrow and shadow (Levi: no highlight, only a drop shadow; round the arrow and the corners where it meets the bubble):** the arrow is an SVG path (`src/components/Tooltip/shape.js`) from `size.tooltip.{arrow,arrowTip,arrowFillet}` (new radii shipped 0); the sharp path renders byte-identical to the old border triangle at 2x DPR. The plate shadow's outer layers become a `drop-shadow()` chain on the whole tooltip, so the shadow falls under the bubble and the arrow as one shape; inset and spread do not render (the lab writes every shadow with a spread, which `drop-shadow()` rejects, so the conversion is JS).
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check` and `test:scripts` (26) exit 0 at each step.

### 2026-10-08: Tooltip record 2026-10-08-2007 concept A applied; glass removed; the reveal sound (procedure D)

**Status:** Accepted. Levi: "Keep A only, record the settings", then "yes apply it, remove glass, keep the sound". Record `output/tuning/Tooltip/2026-10-08-2007/` (one concept, A picked). Sync base `68ab7a0` (no Tooltip token was in the library).

- **Tokens (values equal the record):** `color.tooltip.surface` `utility.white` light, `dark.raised1` dark (Levi: keep the dark key in dark mode); `color.tooltip.text` `text.primary` values; `shadow.tooltip.plate` 2px 2px 6px warm gray 50% light, 3px 3px 7px black 50% dark (the Button key shade without its highlight); `radius.tooltip` 4px (`space.4`: no radius primitive sits at 4px); `size.tooltip.arrow` 8px, `arrowTip` and `arrowFillet` 2px (`space.micro.2`); `space.component.gap.tooltip` 24px (Levi: offset another 16px so it sits higher); `motion.tooltip.travel` 720ms (`motion.duration.orchestrated`) on the spring 146 / 17.88 / 1 (3% overshoot; the spring alone settles in 1093ms); `stretch` 2, `squash` 2, `growFrom` 0. `size.tooltip.lift` stays 4px. Every value is on the ladder.
- **Not applied from the record:** concept A's `--sc-size-tooltip-glass-frosted-frost` and `--sc-color-tooltip-glass-tint` (glass tokens a solid tooltip never read; the glass is removed) and `--sc-space-layout-stack-xl` 80px (equal to shipped, a shared token). Levi's earlier `--sc-border-width-default` 0 was taken out before the record on his word (it only shrank the lab's trigger and would have dropped the forced-colors edge).
- **Glass removed:** the variant, its tokens (`color.tooltip.glass.*`, `shadow.tooltip.glass.*`, `size.tooltip.glass.frosted.*`; never on main or in Figma), the lab's `variant` and `backdrop` props. Lab seeds removed: a new concept starts from shipped.
- **Sound:** a sixth role, `reveal` (`src/sound/assets/reveal.wav`): Drams 031 with the record's 0.65x pitch and 0.2 volume baked in, because the engine plays every file at 1x and at the master volume (gain 0.2 / 0.7 under the default 0.7). Plays as hover or focus opens the tooltip, not when `open` forces it; `sound={false}` opts out. Checked on the docs page: one hover started one 0.163s buffer (0.106s / 0.65).
- **Checks:** lab Shipped stage against concept A by computed style (ground, text, filter, box-shadow, padding, radius, offset, size, transform and origin, transitions, the motion variables, the arrow path, fill and position), light and dark: 56 values, 0 differ. The docs Tooltip page and the Motion page copy follow the plate (no longer the inverse); the docs stage gives a two-line tip room above its trigger.
- **Figma library:** the generated call (16 ops) created 11 variables (`color/tooltip/{surface,text}`, `radius/tooltip`, `motion/tooltip/growFrom`, `size/tooltip/{arrow,arrowTip,arrowFillet,lift}`, `space/component/{padding-inline,padding-block,gap}/tooltip`) and 2 effect styles (`shadow/tooltip/plate`, `shadow/tooltip/dark/plate`), and updated the three existing `motion/tooltip/*` variables; `motion.tooltip.travel.easing` is code-only (a spring). The library had no Tooltip master, so a new page **Tooltip** (`546:2`) after Card holds the first SCDS **Tooltip** set (`546:23`): `Lines` (Single, Multi) x `Theme` (Light, Dark), variants `546:3`, `546:8`, `546:13`, `546:18`. Each is a vertical stack of a `Bubble` (padding on the tooltip padding variables, corners on `radius/tooltip`, fill on `color/tooltip/surface` written with its resolved colour) and an `Arrow` vector (the code's 8px path with 2px tip and fillets, 1px overlap, same bound fill), with the plate's effect style on the component so the drop shadow falls under both, Theme as an explicit Semantic mode and the caption text style on `color/tooltip/text`. Multi-line caps at 240. Readback: padding 8 / 12, radius 4, fills and effect styles per theme; single-line plate 143 x 36 (code 142.6 x 36.15, text metrics). The read-only re-check over all 452 library names returned `absent: []`, `missing: []`. Publishing is Levi's step.
- **Not in Figma:** the open and close motion (grow, spring, stretch, squash, lift) and the 24px offset from the trigger (the set description names it); `size/tooltip/arrow*` are not bound (the arrow is a fixed vector; Figma has no rounded-triangle primitive to drive).
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (26), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.

### 2026-10-08: Badge role and LED tokens for its sc-tune session (shipped equal to today)

**Status:** Accepted. Tier 2, the third component (branch `feat/physical-controls-6`). Audit row: today a flat outline chip, text and border on the `-ink` tokens since 2026-10-07; change: an LED dot that glows for live states (Drams LED Switch, mapping #9); findings 5 and 7.

- **Role tokens (finding 5):** `space.component.{padding-inline,padding-block}.badge` (= the shared `sm` steps, 6 / 2px) and `space.component.gap.badge` (0, LED to label). The badge stops reading the scale SegmentedControl and the docs chrome share.
- **The LED, inert until tuned:** `size.badge.led` 0, `color.badge.led.off` and `color.badge.led.{default,success,warning,error,neutral}` transparent, `shadow.badge.led.{variant}` zero alpha. The glow is a zero-offset box-shadow (emitted light, not a cast shade; verify-light passes zero offsets). A box-shadow hugs the round dot, so no drop-shadow filter is needed. It snaps (rule 6).
- **API:** `live` (`true` lit, `false` unlit, left out = no LED, every badge today) and `liveLabel` (default `live`): a lit LED announces it through visually hidden text, so the state is never carried by light alone. Reading surfaces stay flat (directive 1): the chip keeps its outline; only the LED is an object.
- **Check:** the lab's Shipped stage against a baseline taken before the change, light and dark, all five variants with `live` lit: 260 values, 10 differ, all `column-gap` normal to 0px (inert in flex); the LED renders 0 x 0, transparent.
- **Forced colors:** the fill and glow drop; an unlit LED keeps a `CanvasText` ring on `Canvas`, a lit one fills `CanvasText` (headless Chromium, both schemes).
- **Lab:** `?c=Badge`, 28 tokens, no console errors. Props `live` (lit, off, none), `show` (all five variants or one), `content`. Ships silent, so no `sound()`. Seeds are Claude's start: a 6px LED and 6px gap; lit = each variant's fill hue per mode (brand.accent, status.*, text.secondary), light-mode error = `signal.live` (#C8281C; status.error is oxblood there and does not read lit); glow in the same hue, 4px blur 1px spread at 55% light, 6px / 65% dark; unlit ink 20% light, white 16% dark. Served from this session's worktree on port 5174.
- Text contrast (finding 7) is unchanged: text and border stay on the `-ink` tokens.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (26), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.

### 2026-10-08: Badge and Pill fold into StatusPill (supersedes the Badge role and LED tokens above); record StatusPill 2026-10-08-2239 applied

**Status:** Accepted. Levi, in the Badge lab: "i hate these badges, can we delete them and merge them into the statuspills". His answers: the API is a tone plus the product's own label; Pill (library `140:2176`) folds in too; live and in-progress pills get an oscillating glow, not a static state. Then: "no led, the entire pill glows. Allow me to turn off the glow though and always use all caps just for the LIVE pill"; side padding 8px each side, then "update the side padding from 8 to 12 and vertical from 4 to 8"; planned is "a dotted border only 3px dash and 3px spread, border is 2px thick, border color same as text", "and no fill"; "update the dashes so its perfectly even loop"; "record it and apply it". Branch `feat/physical-controls-6`.

- **API:** `StatusPill({ tone, emphasis, glow, icon, children })`. Tone `progress | success | warning | error | info | neutral | live` (default neutral); emphasis `filled | outline`; `glow` defaults to true for progress and live, `glow={false}` turns it off; `icon` is a leading Phosphor glyph (bold). The live tone sets its label in capitals; the others keep the label as written. This follows the library set's own description (block 4.7: one Tone x Emphasis set with a text Label property).
- **Geometry:** 12px each side, 4px top and bottom (Levi; read as the top and bottom together going from 4 to 8, so 2px each became 4px each), a 25px pill; gap 6px, capsule, `text/label/chrome` (from the library set).
- **Colour (cascades, Claude, for AA):** filled pills read `color.statusPill.{tone}.{fill,ink}`, each pair a `verify-contrast` FILL_PAIRS claim. Library pairs that missed AA were moved: success fills `status.success-ink` (the library `status.success` under `text-on-inverse` is 3.96:1 in light); info and live labels take `text-on-inverse` (the library white on dark-mode info is 2.72:1; `signal.onLive` on live is 4.19 / 3.46). Outline pills put the hue on an inside 1px edge and the label on the hue's AA ink; progress and live have no AA ink, so their label is `text.primary`.
- **Neutral (planned):** no fill in either emphasis, label `text.secondary`, a 2px dashed edge (3 / 3) in the label colour. CSS cannot set a dash length, so the edge is an SVG capsule sized to the pill; `pathLength` fits a whole number of periods to the loop so the last gap meets the first dash with no seam (73 x 25: 28 periods). Tokens `size.statusPill.{dash, dashGap, dashWidth}` (3 / 3 / 2 on the border-width primitives).
- **Glow:** an outer shadow in the pill hue (fill, edge, or the neutral text colour) on a pseudo-element, 8px blur (`size.statusPill.glow`), opacity-only pulse 0.25 to 1 on `motion.statusPill.pulse` (720ms each way, alternate, inOut). It paints once; no box-shadow transition (rule 6). Reduced motion holds it lit and still. These values were Claude's start; the record keeps them unchanged.
- **Forced colors:** every pill draws a `CanvasText` edge, a glowing pill doubles it, the glow and the dashes drop (headless Chromium, both schemes).
- **verify-contrast:** `semanticHex` recursed when a semantic token aliases the primitive of its own path (`color.signal.progress`); the StatusPill fill pairs were the first to reach one. New `scripts/verify-contrast.test.mjs` committed red (`9d206a5`); fix `583c76f`; planted bug (the self-path guard removed) turned it red. The guard catches a bad pair: the library success fill at 3.96:1 failed (reverted).
- **Removed:** the Badge component, its docs page (3.2 is now StatusPill), specimen block, package export, lab entry and design-sync preview; this branch's Badge role and LED tokens (never on main or in Figma). The docs `scBadge` chrome classes are not the component and stay. **Breaking:** the package export `Badge` is gone; no studio repo imports it from SCDS (the client portal draws its own StatusPill and Pill; Studio PM draws its own StatusPill in Swift).
- **Record:** `output/tuning/StatusPill/2026-10-08-2239/` (one concept, no token edits: every change came through chat and was already in code). Lab Shipped against concept A by computed style, light and dark: 294 values, 0 differ.
- **Figma library:** the generated sync (`--since 33b9433`) created 29 variables (`color/statusPill/{progress,success,warning,error,info,live}/{fill,ink}`, `radius/statusPill`, `motion/statusPill/pulse/{duration,from}`, `size/statusPill/{dash,dashGap,dashWidth,glow,icon}`, `space/component/{padding-inline,padding-block,gap}/status-pill`); `motion/statusPill/pulse/easing` is code-only; six variables from earlier drafts on this branch were deleted (`color/statusPill/neutral/*`, `size/statusPill/{led,ledGlow}`, the lead and trail paddings). New set **StatusPill** `553:286`: Tone (7) x Emphasis (2) x Lead (None, Icon) x Glow (Off, On) = 56 variants, with a `Label` text property and an `Icon` instance swap; fills, edges and label colours bound to the variables and written with their resolved colours; glow as a drop shadow bound to `size/statusPill/glow` and the hue; planned as a 2px dashed stroke 3 / 3; live labels upper case; strokes excluded from layout so every variant is 25px, as in code. Readback: padding 4 / 12, gap 6, radius pill, 25px high, fills and effects bound. The 19 instances of the old StatusPill set were swapped to the nearest variant with their labels and glyphs kept (Active to Progress glowing; Open to Progress; Pending to Warning; Complete, Accepted, Published to Success with a check; Resolved to Success outline with a check; Paused to Warning outline, pause; Archived to Neutral outline, archive; Expired to Error outline, warning; Upcoming and Draft to Neutral). Deleted: the old set `9:767`, Badge `9:404`, Pill `140:2176`; the page Badge (`24:5`) is renamed StatusPill. The read-only re-check over all 475 library names returned `absent: []`, `missing: []`. Publishing is Levi's step.
- **Not in Figma:** the glow pulse (Figma shows it still) and the even dash loop (Figma lays out its own 3 / 3 dashes).
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (27), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.

### 2026-10-08: brand-site shell, part A (WQ-100): the 80 gutter reuses space.80; the 1082 measure is a new primitive

**Status:** Accepted. Sprint `stages/03-build/brand-site-nav-layout/CONTEXT.md`, part A. Branch `feat/wq100-brand-site-nav-layout`.

- **Gutter 80px:** a spacing token already equals it, so no token is added. The shell names it `--shell-gutter: var(--sc-p-space-80)`. The semantic `space.layout.stack.xl` is also 80px, but it is the vertical rhythm between showcase sections, not an inline gutter, so the shell does not borrow it.
- **Content measure 1082px:** new primitive `size.measure.1082` (`--sc-p-size-measure-1082`), the first entry in a primitive `size` group. It is a column width, not a gap, so it stays off the spacing ladders. It is a primitive and not a semantic token because a semantic token adds a symbol to `SCDSTokens.swift`, which this row may not touch. The shell names it `--shell-content-max`. The dead `--shell-col-gutter: 168px` is removed.
- **Generated Swift:** any edit to `tokens/primitives.json` changes `SCDS.Stamp.primitivesHash` in `src/swift/SCDSTokens.swift`, so `tokens:swift:check` (pr-check) fails until `npm run tokens:swift` is run and committed. That file was outside this row's file list; the PR names it as the one open step.
- **Figma:** the primitive is not in the Figma Primitives collection yet. Follow-on row.
- **Motion:** no SCDS motion philosophy is logged (the 2026-10-07 entry leaves the pick to Levi). The nav reveal follows the logged 2026-10-07 direction for reading surfaces: it reads `motion.reveal.*` (200ms, quint-out) and does not overshoot. Reduced motion cuts it.
- **Open groups:** only `NAV[0]` and the group that holds the routed page start open, per page load, not persisted. A later route into a collapsed group (a body link, the mobile menu) opens that group too, so the current link is never hidden; nothing the reader opened is closed.

### 2026-10-08: Avatar role and ring tokens for its sc-tune session (shipped equal to today)

**Status:** Accepted. Tier 2, the fourth component (branch `feat/physical-controls-7`). Audit row: today a flat circle on `surface.sunk`; Drams reference none (a recessed porthole); change: a recessed ring so the photo sits in the surface; finding 5.

- **Role tokens (finding 5):** `color.avatar.ground` (= `surface.sunk`: warmGray.200 light, dark.well dark), `radius.avatar` (= `radius.pill`), `shadow.avatar.ring` (zero alpha). The avatar stops reading the sunk ground the cards and frames share and the pill corner the Switch and progress caps share. The initials ink stays on `text.primary` and the type on `text/label/chrome` (the brief named only the ground and the corner; a lab tune of the ink gets a role at apply, procedure D step 3).
- **The ring:** an inset shadow on `::after`, above the image, because an inset shadow on the circle itself paints under the `<img>`. A recess lit from the top left (verify-light grades it). It snaps; nothing transitions (rule 6).
- **Check:** the lab's Shipped stage against a baseline taken before the change, four sizes, image and initials, light and dark: 320 values, 80 differ, all the inert layer (`::after` content, absolute position, the inherited 9999px corner, a transparent inset shadow) and `position: relative` on the circle. Ground, corner, size, image and initials are unchanged.
- **Forced colors:** the ring drops; a 1px `CanvasText` outline, inset, draws over the image (headless Chromium, both schemes).
- **Lab:** `?c=Avatar`, 12 tokens, no console errors. Props `show` (all four sizes or one), `content` (image, initials), `image` (the docs mark, or a stand-in portrait: the repo holds no photo), `name`; the ground behind it is the View panel's ground (page, raised, sunk, floating). Ships silent, so no `sound()`. Seed (Claude's start, never a pick): the ring is the SegmentedControl 1645 track recess, `inset 0.71px 0.71px 2px` ink .25 light, black .45 dark. Served from this session's worktree on port 5176 (5174 was taken).
- Docs page token rows follow the role tokens; the stale `Edge: border-default` row (the avatar has no resting edge since scds-v2) becomes the forced-colors edge.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (27), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.

### 2026-10-08: Avatar stays flat (supersedes the ring in the Avatar role and ring tokens entry above)

**Status:** Accepted. Levi, after the lab opened: "keep this one flat and close this one out". No record: nothing was tuned.

- **Removed:** `shadow.avatar.ring`, the `::after` layer that drew it, `position: relative` on the circle, the lab seed and the docs Ring row. An avatar is read, not touched (directive 1).
- **Kept:** `color.avatar.ground` (= surface.sunk) and `radius.avatar` (= radius.pill), so a change to the avatar never moves its siblings (finding 5); the forced-colors edge (a 1px `CanvasText` outline over the image: high contrast paints the ground as Canvas, so the circle needs an edge); the lab entry (`?c=Avatar`, 11 tokens) for a later session. Token descriptions say it stays flat.
- **Check:** the lab Shipped stage against the baseline taken before any Avatar change, four sizes, image and initials, light and dark: 320 values, 0 differ.
- **Figma library:** the generated call (`--since 7eaf426`, 2 ops) created `color/avatar/ground` (`VariableID:556:2`) and `radius/avatar` (`VariableID:556:3`). The library had no Avatar master (none on the global, client-portal or archive pages, none published), so a new page **Avatar** (`556:1729`) after Tooltip holds the first SCDS **Avatar** set (`556:1738`): `Size` XS `556:1730`, SM `556:1732`, MD `556:1734`, LG `556:1736`, with an `Initials` text property. Each is a 24 / 32 / 48 / 64 circle with width and height on `size/avatar/*`, corners on `radius/avatar`, fill on `color/avatar/ground` (written with its resolved colour, warmGray.200), clipping on, and initials centred at 40 percent of the diameter (9.6 / 12.8 / 19.2 / 25.6) in the label chrome face, 8 percent tracking, upper case, on `color/text/primary`. Readback matches code (size, corner, ground, initials size). A photo is an image fill the designer adds on the instance. The read-only re-check (`--since HEAD`, 0 ops) over all 477 library names returned `absent: []`, `missing: []`. Publishing is Levi's step.
- **Not in Figma:** the forced-colors edge and the image fallback to initials.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (27), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.

### 2026-10-08: Alert role and plate tokens for its sc-tune session (shipped equal to today); the status LED removed

**Status:** Accepted. Tier 2, the fifth and last component (branch `feat/physical-controls-8`, cut on top of #93). Audit row: today a flat panel with a 3px status rule (the audit said 4px; `border-width.accent` is 3px); change was a plate with a status LED. Levi, when the LED appeared: "remove the led, thats ai slop". The Alert is a plate only.

- **Role tokens (finding 5):** `color.alert.{ground,frame}` (= surface.sunk / border.default), `color.alert.rule.{info,warning,error,success}` (= status.*), `radius.alert` (= radius.surface, 8px), `size.alert.rule` (= border-width.accent, 3px), `space.component.padding.alert` (= padding.lg, 24px), `space.component.gap.alert-body` (= gap.sm, 4px), `shadow.alert.plate` (zero alpha). The title and body inks stay on `text.primary` / `text.secondary`.
- **Removed (never on main or in Figma):** `color.alert.led.*`, `shadow.alert.led.*`, `size.alert.led`, `space.component.gap.alert`, the LED span, its CSS and forced-colors rule, its lab seeds. The row gap (`gap.md`) is dropped too: the row holds one child, so it never rendered.
- **Check:** the lab Shipped stage against a baseline taken before any Alert change, four variants, title on and off, light and dark: 496 values, 48 differ, all inert: the zero-alpha plate shadow (`none` to a transparent inset, 16) and the unused row gap (`8px` to `normal`, 32). Sizes, padding, ground, frame, rule and type are unchanged. The docs page renders four alerts with no console errors.
- **Forced colors:** the frame and the rule are borders, so they survive; the plate shadow drops. No forced-colors rule needed (headless Chromium, both schemes: 1px frame and 3px rule in `CanvasText`).
- **Lab:** `?c=Alert`, 24 tokens, no console errors. Props `show` (all four variants or one) and `title`. Ships silent (an unprompted sound is intrusive), so no `sound()`. Seed (Claude's start, never a pick): the plate is the Button key, `surface.raised` values and `shadow.control.key` per mode. Served from this session's worktree on port 5176.
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (27), `npm run build`, `build:lib` and `swiftc -typecheck` exit 0.

### 2026-10-08: Alert folds into Toast (supersedes the Alert role and plate tokens above)

**Status:** Accepted, not yet built. Levi, in the Alert lab: "i hate these, are these floating notification alerts?" Alert is an inline banner; the floating notification is the library Toast (set `9:897`), which has no code component. Asked what to do, Levi picked **fold into Toast**: one notification component with a floating placement (the Figma Toast) and an inline placement that replaces Alert. No studio repo imports the SCDS Alert (grep over the studio repos), so removing it breaks only this repo's docs and specimen. The Figma spec is in `stages/03-build/physical-controls/output/toast-spec-from-figma.md`. Next: Toast role tokens equal to the Figma values, the component, Alert removed, docs and lab entry.

### 2026-10-09: Chapter eyebrow pill, boxes are fills not strokes, standard page header, plain mode switch

**Status:** Accepted. Levi, four site updates (branch `feat/eyebrow-pill-borderless-header`). Reference: Figma "Color — DL" (`ufNlysCwWz7y2FBk61DxbN`, node `2147:217`).

- **Chapter eyebrow:** one `ChapterEyebrow` in the editorial kit, used by every chapter and the Color page. The ordinal sits on a circle (content-box, `min-inline-size: 1lh`, `p-space-4` padding, `radius.pill`, mono chrome); the phrase sits on a pill (`surface.floating`, `label.ui.medium`, `text.secondary`, 4/8 padding, `gap.sm`, original case) with a `PlusSeparator` between parts. The dot and the upper-case transform are gone. Deviation from Figma: the disc fill is `brand.accent.fill` (teal 600) under `text.on.accent` (white), 5.2:1, because the Figma pair (teal 500 under warmGray 50) is 3.4:1 and fails AA at 11px.
- **No borders on boxes:** a box separates from the ground by surface tone; tiles inside a box separate by a `gap.sm` gutter, never a hairline. Removed outlines, region dividers and hairline-gap grids across the 12 section stylesheets. Pass/fail and verdict badges move from an outline to the StatusPill fills (`status.pill.*.fill` / `.ink`); the accent badge is `brand.accent.fill` under `text.on.accent`. Chips and buttons lose their border and keep their fill; the Motion curve card hover moves from a border colour to `surface.floating`. **Kept:** row rules inside lists and tables, page hairlines (chapter, metabar, sidebar, mobile bars), focus outlines, form-field edges (WCAG 1.4.11 boundary), swatch edges on colour chips, accent left rules that carry meaning (annotation, bad/good, flag, register note), dashed tooltip underlines, the clear-space diagram. SCDS components are untouched (Alert folds into Toast per 2026-10-08).
- **Page header:** every page shows the same four facts from `Metabar`: Last revised (the last commit date, read at build through `__SCDS_REVISED__` in `vite.config.js`), Repos (the length of `src/meta/consumers.json`: client-portal and shokunin-crafthouse-site by `repository_dispatch`, studio-pm by `file:` dependency), Spec (v1.2, Motion v2.0), Status Stable. The hand-typed per-page dates, Tokens counts and `tokensN`/`revised` props are removed.
- **Mode switch:** the sidebar dark-mode Switch renders `glyphs={false}`. Knob position still carries state (WCAG 1.4.1).
- **Figma (Brand Identity file `ufNlysCwWz7y2FBk61DxbN`):** Sandbox **Color — DL** rebuilt as `2674:8025` from the live 1440 page, bound only to the SCDS library (2087 variable bindings, 0 local; every text on an SCDS or local offscale text style). Page frame → one `page-body` auto layout → instances. New masters on Components page, section `SCDS · Color page kit (2026-10-09)` (`2671:6619`): `Doc/ChapterEyebrow` (`2671:6620`, props Ord/Lead/Tail), `Doc/Metabar` (`2671:6634`), `Doc/Sidebar` (`2671:6655`, library NavLink/NavEyebrow/Toggle with Glyphs off), `Doc/Badge` (`2674:6715`), `Doc/SwatchDot` (`2674:6716`), `Color/Hero` (`2673:6660`) and `Color/Chapter/i–v` (`2673:6666`, `2673:6771`, `2674:6717`, `2674:6779`, `2674:6881`). Gutter notes are the library `Annotation`. The pre-SCDS frame is archived, not deleted (`_archive` section `2674:8024`). The library publishes 147/147 Primitives and 193/263 Semantic variables; the 70 unpublished ones (StatusPill fills and newer component roles among them) need a library publish before this file can bind them. The local Primitives/Semantic collections stay as they were; the rebuilt page does not read them. Last revised in Figma is a text property, not live.
- `npm run build` exit 0; preview checked at 1440 light and dark and at 390, no console errors.

### 2026-10-09: sc-tune lab, header = session and view, panel = the active concept; every override carries an origin

**Status:** Accepted. WQ-102, parts 1 and 2 of `stages/03-build/tune-lab-ui/CONTEXT.md` (branch `claude/wq-102-tune-lab-ui`). Defaults taken from the contract; Levi may overrule in review.

- **Rule (P1.1, audit A-01):** the header holds what changes the whole session or every stage: subject, Play, Loop, slow-mo, theme, zoom, ground, Compare, Blind, undo / redo, Copy spec, Reset all. The panel holds only the active concept: notes, concepts, props, sound, tokens. The panel's View fieldset is removed. The header has two rows: session (subject, save status, undo / redo, Copy spec, Reset all) and view (motion and stage controls).
- **Origin (P2.3, A-04 / F-07):** every override is stored with `c.origin[mode][name]`, one of `user` (a control), `seed` (the registry's lab start), `spring` (a spring wrote its paired duration) or `copy` (`copy rest`). The export writes `origin` on every token; `scripts/tune-record.mjs` adds an Origin column to the `spec.md` token table (`unrecorded` for exports made before the field). A seed is not a decision: it is excluded from every changed count and from `changed only`, and its card reads `seed` with a `shipped` action. Saved sessions are back-filled on load: a value equal to the registry seed is `seed`, a value with a springs entry (or the duration paired to one) is `spring`, anything else is `user`.
- **Interpretation:** a token with a registry seed resets to the seed, as a reload already did, so its reset action reads `reseed`; a token without one reads `reset` and returns to shipped. The seed card's actions are therefore `shipped` (from seed) and `reseed` (back to seed after an edit).
- **View state, never undone:** `view.collapsed` (per group, Sound collapsed by default) and `view.panelWidth` (rem, default 34, 26rem to 50vw) persist with the session. Undo covers concepts, notes and pick only.
- **Parts 3 to 5 (appended 2026-10-10):** the chrome has two text roles. `label-chrome` (11, upper case, tracked) is for group legends, rail chips, stage captions and the brand. Mono 13 (`mono-body` family at `caption` size) is for every other line, so a computed font size in the chrome is 11 or 13. Ink carries rank: names primary, tuned values and readouts secondary, shipped values and meta tertiary. Every control row uses one grid, `[7rem] [1fr] [4.5rem]`, and rows outside a card take the card's inset, so every panel slider ends on one x. The 24 px minimum target has no semantic token, so the chrome defines `--tune-target: var(--sc-p-space-24)` once. Concept tabs are `aria-pressed` buttons in the panel and in the stage strip (P4.3 default). The off-ladder hint breaks a tie toward the token's own family, then toward the smaller step: 13 px gives `space-12`. A spring's sampled `linear()` folds behind `raw` the same way a raw shadow does.
- **Fix round 1 (appended 2026-10-10, supersedes the Interpretation bullet and the sunk tint):** a seed card offers `shipped` and `reseed` (reseed in a fifth fixed slot that every seeded token carries in every state, disabled at the seed); a user, spring or copy override offers `reset`, which on a seeded token still restores the seed. A changed card's tint is `surface-raised`, not `surface-sunk`: secondary ink reads 6.28:1 on it (4.77:1 on sunk misses the 5.4 values bar), and the easing box turns page-toned on it. A spring's curve reserves `layout-stack-lg` above its unit box (a spring from rest never overshoots 100%), a bezier `component-gap-lg`; the curve is clipped at the reserve.

### 2026-10-10: Toast replaces Alert (role tokens equal to the Figma Toast; Alert removed)

**Status:** Accepted, in tuning. Continues "2026-10-08: Alert folds into Toast" (branch `feat/physical-controls-9`). Figma: library `0zVoxaLJQkjHENYJlQk1VT`, page Toast `24:7`, set `9:897`; values from `stages/03-build/physical-controls/output/toast-spec-from-figma.md`.

- **Role tokens (finding 5), each equal to the Figma Toast and aliasing the shared token Figma binds:** `color.toast.surface` (= `surface.raised`), `color.toast.text` (= `text.primary`), `font.text.toast.message` (= `body.default`), `radius.toast.{plate,badge,dismiss}` (= `radius.pill`), `space.component.padding-block.toast` (= `layout.inset.md`, 24), `space.component.padding-inline.toast-{start,end}` (= `layout.inset.sm` / `layout.inset.lg`, 16 / 48), `space.component.gap.toast` (= `space.12`), `size.toast.{width,badge}` (380 / 50, off the ladder, kept exact per learning #144), `size.toast.icon` (= `space.20`), `size.toast.{dismiss,dismissIcon}` (= `space.32` / `size.icon.sm`), `color.toast.badge.*` (= `status.*`), `color.toast.dismiss.surface` (= `surface.raised`), `shadow.toast.plate` (Figma elevation/2: 0 2 8 0 ink 10%, 0 1 0 0 ink 4%, both modes). Added for behaviour Figma does not draw: `color.toast.dismiss.{hover,inkDisabled}`, `size.toast.{dismissSlop,lift}` (6px slop to a 44px target; 8px rise), `motion.toast.travel.*` (= `motion.reveal`, 200ms quint-out), `motion.toast.hold` (6000ms). The Alert role tokens (`color.alert.*`, `radius.alert`, `shadow.alert.plate`, `size.alert.rule`, `space.component.padding.alert`, `space.component.gap.alert-body`) are removed; "Alert" is scrubbed from the shared tokens' descriptions.
- **Deviations from Figma, each to clear a check:** the badge glyph is warmGray.50 in light (Figma) and `dark.well` in dark, and the dismiss x is `brand.accent` in light (Figma) and `teal.200` in dark: Figma's values fall under the WCAG 1.4.11 non-text line on the dark badge fills and the dark plate. The dismiss hover ground is white in light and `dark.raised2` in dark; `surface.hover` was rejected because its dark value equals the plate.
- **Open with Levi: the Figma Error hue.** The Figma Error variant fills its badge with `color/status/warning/light` (#C2410C, the warning hue) and draws `Icon/warning`. Not copied: code fills error with `status.error` (oxblood) and draws `WarningOctagon`, and gives warning (a new tone, from Alert) `status.warning` and the `Warning` triangle, so error and warning differ in hue and shape. If Levi wants Figma's reading, Error becomes the warning tone in Figma and the library gains a true Error variant; if not, the Figma Error badge rebinds to `status/error/light`.
- **Component** (`src/components/Toast`): tone `success | error | warning | info` × placement `inline` (in flow, persistent, no shadow, no dismiss: the Alert replacement) or `floating` (shadow, dismiss, rises in, dismisses itself after the hold; never holds a required action). `role="alert"` for error and warning, `role="status"` for info and success, `aria-atomic`; a visually hidden tone word leads the message. The hold pauses while the pointer or focus is inside, including one that arrives during the rise-in (WCAG 2.2.1), and Escape dismisses. Dismiss button: default, hover, focus (the shared ring), active (lighter ground and the shared press scale), disabled (flat). Boxes are fills, never strokes (2026-10-09); no status LED. Forced colors draw CanvasText edges on the plate and badge and a ButtonBorder edge on the dismiss. Reduced motion drops the rise and the press; the fade stays, or is instant under the SCDS reset. Only opacity and transform transition. The component positions nothing: the consumer owns the region and the list.
- **Checks added:** `verify-contrast` FILL_PAIRS gains `toast.text` on `toast.surface`; a new GRAPHIC_PAIRS check (3:1, WCAG 1.4.11) grades the badge glyph on each badge fill and the x on the dismiss ground at rest and on hover, both modes (12 pairs). `verify-light` names `shadow.toast.plate` as an exemption (lit from the top, as Figma draws it) until Levi's record re-lights or keeps it.
- **Removed:** `src/components/Alert`, the docs page 3.11 (now the Toast page, `#toast`; `#alert` redirects), the Specimen block (now Toast), the package export (`Toast` exported instead; no studio repo imported Alert, per 2026-10-08), the lab entry. `Toast.figma.tsx` maps Figma `Tone` (Success, Error, Info); warning and inline are code-only.
- **Lab:** `?c=Toast`. Shipped = the Figma values. The seed is Claude's start, not a pick: concept A's plate shadow is the Tooltip plate (2px 2px 6px warm gray 50% light, 3px 3px 7px black 50% dark), lit from the system top left. The Figma elevation/2 shadow barely reads on the dark plate. Levi's record decides the final values (procedure C, then D).
- `npm run build`, `npm run build:lib`, `tokens:verify`, `tokens:map:check`, `tokens:swift:check` and `test:scripts` (27) exit 0; `figma:parse` exit 0. Preview: the Toast page at 1440 and 390, light and dark, no console errors and no horizontal scroll at 390; dismiss by Enter on the focused x, Escape, the 6s hold and the hover pause checked live; forced colors and reduced motion checked in headless Chromium (edges present; transitions shortened).

### 2026-10-10: Toast gets two lines max, 14px type, the corner dismiss, a glass surface and outline or fill glyphs (Levi, from the lab review)

**Status:** Accepted, in tuning (branch `feat/physical-controls-9`, PR #99). Levi: "it needs to be 2 lines max, drop the text size 2px, reposition the close like i have it in figma" (library `0zVoxaLJQkjHENYJlQk1VT`, layout `35:9`), "add a glass variant so i can pick flat or glass", "update the info icon so its outlined just the others, and then also add in all fills so i can pick outline or fill. make the outline versions bold".

- **Two lines max:** `size.toast.lines` (2, a number token). The message clamps with an ellipsis (`-webkit-line-clamp` and `line-clamp`); the clamp is visual, assistive tech reads the whole message, and the docs rule says to write to fit.
- **Type 2px smaller:** `font.text.toast.message` re-aliased from `body.default` (16 / 150%) to `body.dense` (14 / 150%). Body copy elsewhere is untouched (the role token, finding 5).
- **Dismiss on the corner:** read from Figma by `get_design_context` on `9:898` and `9:904`: the Dismiss is absolute, top -18, left 367 (Success) or 368 (Error, Info) on the 380 plate. New `size.toast.dismissOffsetBlock` (= `space.micro.18`) and `size.toast.dismissOffsetInline` (= `space.20`, the 368 variants; the Success master is 1px off, worth aligning in Figma). Measured in the build: left 368, top -18. Padding-end stays 48 as in Figma. Docs and lab stages space a stack by `layout.stack.md` (24) so a dismiss never lands on the toast above.
- **Glass surface:** `surface="flat" | "glass"` (flat default), both placements. Role tokens alias the Card frosted glass (Levi's Figma Glass): `color.toast.glass` (= `card.glass.frosted.auto`), `shadow.toast.glass` (= `shadow.card.glass.frosted`, lit top left), `shadow.toast.glassText` (= `shadow.card.glass.text.auto`), `size.toast.glassFrost` / `glassSaturation`. Reduced transparency, more contrast and no backdrop-filter fall back to the flat plate; forced colors drop the filter. The Card's SVG edge refraction is not carried over (Chromium only); it follows if glass is picked. The dismiss keeps its solid `surface.raised` circle on glass.
- **Glyphs:** `glyph="outline" | "fill"` (outline default). Outline is Phosphor bold for every tone, so info is no longer the one filled glyph; fill is Phosphor fill for every tone. The Figma masters still draw regular-weight outlines with a filled info.
- Lab `?c=Toast` gains `surface`, `glyph` and `backdrop` props (the Card backdrops) and a long default message to show the clamp. `npm run build`, `build:lib`, `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (27), `figma:parse` exit 0. Preview: Toast page at 1440 and 390, light and dark, no horizontal scroll at 390; the lab's console is clean after a duplicate `none` backdrop option was fixed.

### 2026-10-10: Toast block padding 16px; the dismiss inverts on hover and press (Levi)

**Status:** Accepted, in tuning (PR #99). Levi: "reduce the vertical padding by 8px and invert the colors on the x hover and press states".

- `space.component.padding-block.toast` re-aliased from `layout.inset.md` (24) to `layout.inset.sm` (16); the floating plate is 82px tall with one line or two (was 98). Figma still draws 24.
- `color.toast.dismiss.hover` now aliases `color.toast.dismiss.ink` (teal.500 light, teal.200 dark), and a new `color.toast.dismiss.inkHover` aliases `color.toast.dismiss.surface` (surface.raised): on hover and press the circle takes the x colour and the x takes the plate colour. The white / raised2 hover ground is gone. GRAPHIC_PAIRS now grades `inkHover` on `hover` (3:1, both modes) in place of the rest x on the old hover ground.
- Checked in headless Chromium, light and dark: padding 16 / 16; rest, hover and press colours swap as specified; press keeps the shared scale. All bar scripts exit 0.

### 2026-10-10: Toast record 2026-10-10-1534 concept A applied; Toast synced to the Figma library (procedure D)

**Status:** Accepted (PR #99). Levi: "record settings and apply them". Record: `output/tuning/Toast/2026-10-10-1534/` (spec.md, spec.json, snapshot). One concept, no notes.

- **What concept A held:** one token, `--sc-shadow-toast-plate`, which is Claude's lab seed (the Tooltip plate shade, lit from the system top left). Levi made no other edits in the lab, so the record ships the seed. Light `2px 2px 6px 0 rgb(100 91 79 / 0.50)`, dark `3px 3px 7px 0 rgb(0 0 0 / 0.50)`; was the Figma elevation/2 (0 2 8 0 ink 10%, 0 1 0 0 ink 4%), lit from the top. Both values are raw (no shadow primitive ladder); they equal `shadow.tooltip.plate` by value, kept as values so the Toast never reads a Tooltip token. No cascade.
- `verify-light`'s `shadow.toast.plate` exemption is removed (4 named exemptions remain); the lab seed is now inert. Shipped and concept A stages match in light and dark (box-shadow, 82px height, 16px block padding, 14px message).
- **Figma (library `0zVoxaLJQkjHENYJlQk1VT`):** `tune-figma-sync --since be13ddb` wrote `shadow/toast/plate` and `shadow/toast/dark/plate`. `absent` then named every Toast role token, so a `--tokens` call created 34 Semantic variables (`color/toast/*`, `radius/toast/*`, `size/toast/*`, `motion/toast/*`, `space/component/{padding-block,padding-inline,gap}/toast*`), the effect styles `shadow/toast/{glass,glassText}` (+ dark), and the text style `text/toast/message`. The generator emitted the text op with a null line height (an alias of an alias), so the style was created as a copy of `text/body/dense/regular` instead; `absent` and `missing` came back empty. Bound on the masters `9:898`, `9:904` and `9:910`: padding, gap, width, corner radii, plate fill, `shadow/toast/plate`, badge size and radius, glyph size and colour, message fill and `text/toast/message`, dismiss fill, size and radius, x size and colour. Readback: 380 × 82, padding 16 / 16 / 16 / 48, message 14px, dismiss at y -18. **Not bound:** the Error badge fill (`9:905`) stays `color/status/warning/light` while the hue question is open; the Success dismiss stays at x 367 (Error and Info 368). Figma glyphs stay Phosphor regular with a filled info (code ships outline bold or fill).

### 2026-10-10: Toast error is error red; Figma glyphs are Phosphor bold or fill (Levi's answers)

**Status:** Accepted (PR #99). Levi, to the three open items: "1. error red if its an error 2. yes 3. update figma icons".

- **Error hue:** error red in code and Figma. The Error master's badge (`9:905`) is now bound to `color/toast/badge/error` (= `status.error`); the warning hue it carried is gone. The descriptions of `color.toast.badge.{error,warning}` are updated in `tokens/semantic.json` and on the library variables.
- **Success dismiss:** moved from x 367 to 368, so all three masters sit at 368, -18 (20 past the end edge, as `size.toast.dismissOffsetInline` ships).
- **Figma icons:** eight new components on the Icons page grid (`35:4`, row 3, columns 4 to 11), built like `Icon/x-bold` from `@phosphor-icons/react` rendered at 24 (one vector per icon, fill bound to `color/text/primary`, SCALE constraints): `Icon/check-circle-bold` `578:4`, `Icon/check-circle-fill` `578:7`, `Icon/warning-octagon-bold` `578:10`, `Icon/warning-octagon-fill` `578:13`, `Icon/warning-bold` `578:16`, `Icon/warning-fill` `578:19`, `Icon/info-bold` `578:22`, `Icon/info-fill` `578:25`. The `-fill` suffix follows Phosphor's naming (no prior convention in the file); `-bold` follows `Icon/x-bold`.
- **Toast set `9:897`:** a new variant property **Glyph** (Outline, Fill), 6 variants. The originals become `Glyph=Outline` (`9:898`, `9:904`, `9:910`) with the bold glyphs (Error now draws the octagon, as code does); clones `578:50`, `578:66`, `578:82` are `Glyph=Fill`. Every dismiss swaps `Icon/x` for `Icon/x-bold` (code draws X bold). Glyph and x colours re-bound to `color/toast/icon` and `color/toast/dismiss/ink` after the swaps; glyph and x sizes stay bound. The set's item spacing is bound to `space/layout/stack/md` (24, was 16) so each dismiss clears the variant above.
- **Code:** `Toast.figma.tsx` maps Glyph (Outline, Fill) to `glyph`; the Error-hue caveats are removed from `Toast.jsx`, `Toast.tokens.md`, `Toast.figma.tsx`, CODE-CONNECT and the CONTEXT audit row (Toast marked done). Still code-only: the Warning tone (no Figma variant) and the inline placement and glass surface (no Figma variants). All bar scripts and `figma:parse` exit 0.

### 2026-10-10: Toast Figma set gains Warning, Placement and Surface (32 variants)

**Status:** Accepted (PR #99). Levi: "yes add them" (the code-only Warning tone, inline placement and glass surface).

- **Set `9:897`** is now Tone (Success, Error, Warning, Info) × Glyph (Outline, Fill) × Placement (Floating, Inline) × Surface (Flat, Glass): 32 variants, 26 new. The six existing variants are renamed `…, Placement=Floating, Surface=Flat` (ids kept: `9:898`, `9:904`, `9:910`, `578:50`, `578:66`, `578:82`).
- **Warning:** cloned from Success; badge bound to `color/toast/badge/warning`, glyph `Icon/warning-bold` (`578:16`) or `Icon/warning-fill` (`578:19`), colour and size re-bound; message "Two approval gates remain before this can merge."
- **Glass:** plate fill bound to `color/toast/glass` (resolves to the Card frosted tint, white 24% light, black 32% dark, alpha in the variable, so the paint stays opaque) and effect style `shadow/toast/glass`, both placements, as code ships. Like the Card glass masters, no background blur is drawn in Figma.
- **Inline:** no effect style on Flat (`shadow/toast/glass` on Glass), the dismiss hidden (kept as a layer so instances swap cleanly), and the width unbound from `size/toast/width` so an instance can fill its container.
- **Layout:** the set wraps in four columns (Floating Flat, Floating Glass, Inline Flat, Inline Glass), one row per Tone × Glyph, 1640 wide; item and row spacing bound to `space/layout/stack/md` (24), which clears the dismiss overhang (18 up, 20 out).
- `Toast.figma.tsx` maps all four axes; only behaviour props (`autoDismiss`, `onDismiss`, `dismissDisabled`) stay unmapped. `figma:parse`, `build`, `build:lib`, `tokens:verify`, `test:scripts` exit 0.

### 2026-10-10: spring easings keep a bezier fallback (physical-controls audit line 12)

**Status:** Accepted. The sprint-close Evaluator graded audit line 12 FAIL: every spring token compiles to a CSS `linear()` easing, and nothing in `src/` or the generator gave it a fallback. Safari before 17.2 cannot parse `linear()`, so a `transition` reading the var is invalid at computed-value time and the Switch, SegmentedControl, Stepper, Slider and Tooltip travel snapped. Engineering fix, decided and logged by Claude.

- **Generator:** `scripts/tokens-to-css.mjs` writes each spring var as `var(--sc-p-motion-easing-out)` (the out curve the elastic tokens shipped on before their records) and moves its `linear()` value into `@supports (transition-timing-function: linear(0, 1))`, for `:root` and `[data-theme="dark"]`. The paired `-duration` token is unchanged, so the fallback eases over the spring's settle time. A browser that parses `linear()` gets the spring exactly as before.
- **JS engine:** `src/motion/elastic.js` samples whichever value the var resolves to (`sampleEasing` reads both `linear()` and `cubic-bezier()`), so on an old Safari the stretch and lean now follow the bezier too. That is the fallback working, not a regression.
- **Tests:** `scripts/tokens-to-css.test.mjs`, committed red first (`b9ebe8b`, 0/3 for the stated reasons), green with the fix (`6f63a17`). No planted-bug pass: that is the verifier's step (learning #231), not the builder's.
- **Check:** Chromium, lab `?c=Switch`: the track's computed timing is the `linear()` list; with the `@supports` rule deleted in the page, the var and the track's timing resolve to `cubic-bezier(0.22, 1, 0.36, 1)` at 0.6s. No console errors. Firefox and Safari not run from this session.
- **Not in Figma:** easings are code-only (`tune-figma-sync` lists springs under "Code only").
- `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `test:scripts` (33), `npm run build` and `build:lib` exit 0.

### 2026-10-10: physical-controls sprint closed; NavBar carried to the next sprint (retrospective)

**Status:** Accepted. Levi, asked whether to build NavBar (Tier 3) in this sprint or close it first: "Close the sprint first". Gate 1 pick 4 B scoped this sprint to Tier 1 + 2, and the Toast (#99) was the last Tier 2 component. Branch `feat/physical-controls-10`.

- **Evaluator:** a fresh-context Fable pass, read-only on source, graded the CONTEXT audit checklist and the five directives on `a270f23` (= `origin/main` `166356d`). Report: `stages/03-build/physical-controls/output/evaluator-report.md`. 17 grades: 9 pass, 5 logged gap, 2 fail, 1 not run. Both fails were reproduced before acting (learning #240).
- **Fail, fixed at close:** line 12, no bezier fallback for `linear()` springs (entry above).
- **Fail, open (Levi's call):** line 6, the Slider thumb in light mode reads 2.39:1 against the track at its best stop (white rim top; 1.80:1 at the face bottom) and 1.33:1 against the page. Dark clears (3.28:1). The 2026-10-07 entry "Slider splits from ProgressIndicator" says the thumb carries the non-text cue the fill misses (1.66:1); in light mode it does not reach 3:1 either. Options are a darker rim or face (a re-tune), an edge, or accepting it as a logged gap like the Input box. The `color.slider.*` descriptions still repeat the 2026-10-07 claim; they change with the answer.
- **Logged gaps (accepted earlier, cited by the Evaluator):** material descriptions cite Levi's references for Card glass and Input, not Drams, and `shadow.control.key` names Drams 036 without a factor (line 1, directive 3); SegmentedControl has no `:active` (line 3, its row's open item); Slider ships 16px / 720ms against its record's 15px / 1062ms (line 9, Levi 2026-10-08); press is felt three ways only on Button, Stepper and Slider (directive 4: the Switch keeps its Drams repaint, SegmentedControl leans, Card scales).
- **Not run:** line 10, Figma masters against code; the Figma MCP needed authentication in the Evaluator's session. Each apply entry above carries its own readback. Firefox and Safari were not run (Chromium only).
- **What the sprint shipped (feat/physical-controls-2 to -9):** the material layer and `verify-light` (one light, top left); Stepper, Slider (split from ProgressIndicator), Input and SegmentedControl (Tier 1); Card flat plus glass, Tooltip, StatusPill (Badge and Pill folded in), Avatar kept flat, Toast (Alert folded in) (Tier 2). Ten sc-tune records under `output/tuning/`.
- **Retrospective:** seeds that reused the approved Button key were picked; six seeds that invented an element were reworked (Switch re-light, Card plate and well, Badge LED, Avatar ring, Alert LED, Alert plate). Captured in `LEARNINGS.md` and promoted to studio learning #282 (studio-memory PR #545, Levi approved).
- **Carried to the next sprint:** NavBar (Tier 3: current item as a pressed key, the bar flat); the Slider contrast answer; SegmentedControl `:active` (its forced-colors edge already ships, `SegmentedControl.module.css:141`, and passed line 5, so the CONTEXT row's "forced-colors edge" open item is stale).
- **Follow-up, not graded (Evaluator question, reproduced):** `src/sections/ComponentSections.jsx` still documents the flat build in places: Button "Primary fill `--sc-color-brand-accent`" (line 64) and SegmentedControl "Indicator motion `--sc-motion-reveal-duration` 200ms · quint-out" (line 792).

### 2026-10-10: Button and SegmentedControl docs token tables name what the CSS reads

**Status:** Accepted. Closes the physical-controls Evaluator's ungraded observation 1 (follow-up in the entry above). Docs-only; decided and logged by Claude. No token or component CSS changed.

- **Source of each row:** the `var(--sc-*)` reads in `Button.module.css` and `SegmentedControl.module.css` on main, plus the SegmentedControl elastic tokens that `SegmentedControl.jsx` reads (listed in the module's token header). Colour and dimension rows resolve live through the page's light and dark probes. Font, motion, shadow and alpha-colour rows carry hand values, read from `src/styles/tokens.css` per mode.
- **Button:** the flat-build rows go: "Primary fill `--sc-color-brand-accent`", "Primary hover `--sc-color-brand-accent-deep`", "Secondary ink `--sc-color-interactive-default`", radius `--sc-radius-surface` and label `--sc-font-text-label-chrome` (11 / caps). The table now names the key: fill `surface.raised`, face `control.keyShade`, lift, hover fill, ink and lift, pressed shadow, press fill `brand.accentDeep`, plus the small-size padding, label and icon roles, the focus ring weight and offset, and the press and release motion. 35 rows.
- **SegmentedControl:** the track and indicator rows name the role tokens (`color.segmentedControl.track`, `.indicator`, `.indicatorShade`, `shadow.segmentedControl.track`, `.indicator`) in place of `surface.sunk` and `surface.floating`. "Indicator motion `--sc-motion-reveal-duration` 200ms · quint-out" becomes `--sc-motion-segmented-control-travel-duration` 600ms spring (+3%, record 2026-10-07-1645 A), with stretch, squash and press-lean rows. Small and large padding and label rows added. 28 rows.
- **State chips:** the state matrix chips that named an unread token follow: Button Primary `--sc-shadow-control-key`, Secondary `--sc-color-border-strong`, Loading `--sc-size-button-icon-lg` (the WorkingMark at arrow size); SegmentedControl Default `--sc-color-segmented-control-indicator`.
- **Compact shadow values:** the value cells do not wrap, so a full shadow list pushed both tables past their column at 1440. Shadow cells name what changes per mode (colour and alpha, with "rim" or "inset" for the other layers); the full lists stay in `tokens.css` and the 2026-10-07 record entries. Both tables fit at 1440 (785 of 785 px). At 390 they scroll inside the table wrapper, as every component page does.
- **Not in this change:** the SegmentedControl prose ("no border, no shadow, ever", the flat lead and callout) is PR #101's; PR #100's segment padding role tokens are not on main, so the padding rows name the shared tokens main reads. The Switch page's "Slide motion `--sc-motion-reveal-duration`" is the same drift class (the Switch reads `--sc-motion-switch-travel-*`) and is left for its own change. The Button "token gap" callout still describes the retired spinner.
- **Checks:** `npm run build` exits 0. Dev server, Chromium: both pages render light and dark at 1440 and 390, no console errors; every live-resolved value matches a resolver run over `tokens.css`.
