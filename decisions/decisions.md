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

The preserved asymmetry maps onto a Japanese spatial reading — *ma*, the considered emptiness between marks. The cell is not missing; it is held empty. This reads as inherited from the project's spatial principle (`WORKSPACE.md` §1) without requiring narrative explanation in the artifact itself.

The 56px gap (vs the rough's 64px) is the smallest tightening that materially changes the perceived clustering. Tightened further (48px) the crosses would begin to read as one solid pattern; tightened to 40px they would lose their distinctness. 56px sits at the threshold where eleven crosses read as a body and the absent cell reads as a hole, not as undeveloped territory.

**Alternatives considered.**
- **Proportion shift on the center cross.** Enlarge the cross at (104, 104) by ~20% to create a focal point. Rejected: the center cross is already on the visual diagonal from the absent cell — strengthening it competes for the same attention the absence is meant to hold. Adds noise.
- **Proportion shift on a corner cross.** Vary the top-left cross to anchor the read order. Rejected: doubles the deliberate moves (the corner shift PLUS the absent cell) and dilutes both.
- **Fill to twelve, refine cross form only.** Add the absent cell and execute the refinement at cross level (e.g. chamfered terminals). Rejected: loses the asymmetric grid signature, which is the strongest authored signal available; chamfered terminals do not survive 16px reproduction.
- **Fill to twelve, refine via center proportion shift.** Standard centered-hero approach. Rejected: reads as default — a 4×3 grid with a hero center is the most-used pattern in this category; the brand register is "considered, austere," which argues for the less-defaulted move.

**Consequences.**
- *Easier.* The mark has one authored decision (the asymmetric tightened grid) instead of two layered ones. The cross form is unchanged — geometry, exports, and any downstream usage that already references the rough cross continue to work. The 16px favicon case is more robust because the deliberate detail lives in macro structure, not micro form.
- *Harder.* The mark's signature is now load-bearing on the eleven-cross asymmetry. Future variants (extended lockups, motion forms, secondary brand stamps) must respect the asymmetry — they cannot quietly drop or restore the missing cell. The spec's "4×3 = 12" language is now superseded by the mark spec's "4-3-4 = 11" — `_config/brand/mark-spec.md` is the authoritative source going forward, and `sc-brand-system-spec.md` §9.1 should be read with this ADR in mind.
