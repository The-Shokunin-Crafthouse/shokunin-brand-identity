# Sprint 2 — Typography System + Mark Refinement

**Stage:** 03-build
**Sprint:** 2
**Branch:** `feat/sprint-2-type-mark`
**Status:** approved
**Approved:** 2026-05-26 (Levi)
**Resolves:** `sc-brand-system-spec.md` §§5 (Sprint 2 scope), 6 (success criteria 2a–2g), 9.1 (mark brief), 9.3 (asset spec)

---

## Inputs

| Source | File/Location | Section/Scope | Why |
|--------|--------------|---------------|-----|
| Project spec | `sc-brand-system-spec.md` | §§5, 6, 9.1, 9.3 | Sprint 2 scope, 2a–2g criteria, mark brief, asset export spec |
| Type primitives (current) | `tokens/primitives.json` | `font.*`, `font.size.*`, `font.weight.*`, `font.lineHeight.*`, `font.tracking.*` | Existing type primitives — extend with per-step composition tokens |
| Semantic tokens | `tokens/semantic.json` | full | Mode strategy reference; not modified in this sprint |
| Token map | `_config/design-system/token-map.md` | § Typography Tokens | Mirror new composition tokens here after primitives.json update |
| Mono shortlist | `stages/01-brief/output/mono-shortlist.md` | full | Candidate evaluation rubric (5 dimensions × 4 candidates) + framing note |
| Existing mono ADR | `decisions/decisions.md` | 2026-05-26 Cascadia entry | Will be superseded by Sprint 2 ADR per approval B |
| Rough mark | `assets/logo/rough/mark-rough-block.svg`, `mark-rough-simplified.svg` | copied from `shokunin-crafthouse-site/assets/svg/` | Source geometry for refined mark |

---

## Approved resolutions (pre-work)

1. **Mono evaluation — full reopen (B).** Cascadia ADR 2026-05-26 is treated as provisional. Evaluate all four faces (Cascadia + Geist + JetBrains + IBM Plex) against live specimen output. Sprint 2 ADR supersedes the prior entry regardless of outcome.
2. **Mark direction — spacing intention.** Preserve the existing 11-cross asymmetry (missing top-right of row 2). Tighten spacing so the eleven crosses cluster as a unit; the absent twelfth cell becomes the focal absence — *ma*. Refine cross-form authorship (arm-weight, terminal, intersection optical) as a layered second move. The missing slot is the candidate deliberate detail (2g).

---

## Process

### Part 1 — Type system

1. Confirm NHG weight per scale step (11→120px). Write `_config/design-system/type-system.md` with weight table + rationale per step.
2. Evaluate four mono candidates (Cascadia, Geist, JetBrains, Plex) against live specimen. Select one. Append ADR to `decisions/decisions.md` (supersedes 2026-05-26 entry) with rationale referencing all four.
3. Extend `tokens/primitives.json` with composition tokens `font.text.{step}` resolving size + weight + lineHeight + tracking per step. Update `_metadata.fontStrategy` to reflect ADR outcome.
4. Document NHG screen-optical behavior at 11px / 12px. Include any weight compensation. Section in `type-system.md`.
5. Build `stages/02-design/output/type-specimen.html` — single self-contained file. All 12 steps shown in real copy (no Lorem). Sans + mono in context. Light + dark toggle.

### Part 2 — Mark refinement

6. Re-read `decisions/decisions.md` (post type-ADR) and spec §9.1. Confirm direction lock.
7. Construct refined 4-3-4 mark in SVG. Cross-form refinement applied; spacing tightened. Document grid math + cross anatomy in `_config/brand/mark-spec.md` (new file).
8. Export to `assets/logo/`:
   - `mark-primary-light.svg` + `mark-primary-dark.svg` + PNG 1x/2x/3x per variant (Block lockup)
   - `mark-compact-light.svg` + `mark-compact-dark.svg` + PNG 1x/2x/3x per variant
   - `mark-icon-light.svg` + `mark-icon-dark.svg` + PNG 1x/2x/3x per variant (favicon — Simplified)
9. Build `stages/02-design/output/logo-spec.html` — single self-contained file. Covers:
   - Clear space rule expressed in grid units
   - Minimum sizes (icon 16px tested + screenshot)
   - Approved backgrounds (≥4): page light, page dark, sunk light, sunk dark, shu accent
   - Misuse (≥4): stretch, rotate, recolor, drop-shadow, low-contrast ground
   - Deliberate detail called out by name (2g)
10. Log any structural ADRs (composition token group choice, mark direction, mark detail) in `decisions/decisions.md`.

---

## Outputs

| Artifact | Location | Format |
|----------|----------|--------|
| Weight table + optical notes | `_config/design-system/type-system.md` | Markdown |
| Updated primitives | `tokens/primitives.json` | DTCG JSON |
| Token-map mirror | `_config/design-system/token-map.md` | Markdown (composition section appended) |
| Type specimen | `stages/02-design/output/type-specimen.html` | Single self-contained HTML |
| Mono ADR (supersedes prior) | `decisions/decisions.md` | Markdown entry |
| Mark direction ADR | `decisions/decisions.md` | Markdown entry |
| Mark anatomy spec | `_config/brand/mark-spec.md` | Markdown |
| Primary lockup | `assets/logo/mark-primary-{light,dark}.svg` + `.png` (1x/2x/3x) | SVG + PNG |
| Compact lockup | `assets/logo/mark-compact-{light,dark}.svg` + `.png` (1x/2x/3x) | SVG + PNG |
| Icon-only lockup | `assets/logo/mark-icon-{light,dark}.svg` + `.png` (1x/2x/3x) | SVG + PNG |
| Logo specification | `stages/02-design/output/logo-spec.html` | Single self-contained HTML |

---

## Audit — Sprint 2 Success Criteria

| # | Criterion | Pass test | Status |
|---|---|---|---|
| 2a | NHG weight assignments documented and locked | Weight table in `type-system.md`: which weights at which steps with rationale | ✅ pass |
| 2b | Secondary mono face selected and documented | Single ADR in `decisions.md` referencing all four candidates (Cascadia/Geist/JetBrains/Plex) | ✅ pass |
| 2c | Every type scale step demonstrated in context | `type-specimen.html` shows each of 12 steps with real copy; grep "Lorem\|Ipsum" returns 0 | ✅ pass |
| 2d | Screen optical size behavior documented | `type-system.md` § 2 covers 11/12px NHG weight compensation + sub-pixel rendering note | ✅ pass |
| 2e (i) | All logo lockups exported per §9.3 | 6 SVGs + 18 PNGs (6 × 1x/2x/3x) in `assets/logo/` — verified via `ls` | ✅ pass |
| 2e (ii) | Mark reproduces clearly at 16×16 | Icon SVG inlined in `logo-spec.html` at 16×16 inside browser-tab mock; pattern legible, absence preserved | ⏳ awaits Levi judgement |
| 2f | Logo spec page covers all required cases | Clear space ✓ (§3, 1 cross-unit rule) · min sizes ✓ (§4, 16/32/64/96 tested) · approved backgrounds ✓ (§5, 5 swatches) · misuse ✓ (§6, 6 tiles) | ✅ pass |
| 2g | Mark contains one detail a trained eye would notice | Deliberate detail named explicitly in `logo-spec.html` §1 + `mark-spec.md` §4: the absent top-right cell of the middle row | ⏳ awaits Levi naming it back |

---

## Out of scope

Component work · brand site assembly · voice system · EPS exports · print optical guidance · CMYK equivalents.

---

## Decisions captured during sprint

All appended to `decisions/decisions.md`:

1. **Cascadia Mono re-affirmed after full 4-way Sprint 2 evaluation** — supersedes 2026-05-26 provisional ADR. Resolves 2b.
2. **Type composition tokens introduced as DTCG typography group** — new `font.text.{step}` group in `tokens/primitives.json`; binds the per-step weight rule into token surface.
3. **Mark refinement direction · spacing intention with preserved 11-cross asymmetry** — 56px inter-cell spacing (down from rough's 64px); absent top-right cell of middle row preserved as the deliberate detail. Resolves 2g.
