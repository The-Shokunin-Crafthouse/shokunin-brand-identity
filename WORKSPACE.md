<!-- ============================================================ -->
<!-- WORKSPACE.md — THE SHOKUNIN CRAFTHOUSE — PROJECT IDENTITY    -->
<!-- ============================================================ -->
<!-- WHAT THIS FILE IS                                            -->
<!-- The root identity file for a Shokunin Crafthouse project     -->
<!-- workspace. Model-neutral. Source of truth for who we are,    -->
<!-- what we are making, and the rules of the work. Every other   -->
<!-- file in this workspace inherits from this one.               -->
<!--                                                              -->
<!-- WHAT YOU (THE MODEL) MUST DO                                 -->
<!-- 1. Read this file completely before taking any action.       -->
<!-- 2. Load WORKFLOW.md for stage sequence and approval gates.   -->
<!-- 3. Resolve the current stage from workspace.manifest.yaml    -->
<!--    (project.stage).                                          -->
<!-- 4. Load stages/<current>/STAGE.md for the active brief.      -->
<!-- 5. Load _config/design-system/ui-rules.md and token-map.md   -->
<!--    before any design or build task.                          -->
<!-- 6. Load _config/brand/ and _config/voice/ before producing   -->
<!--    anything the audience will see.                           -->
<!-- 7. Read decisions/decisions.md before reopening any          -->
<!--    previously resolved question.                             -->
<!-- 8. Never cross an approval gate without explicit studio      -->
<!--    sign-off.                                                 -->
<!--                                                              -->
<!-- READ NEXT                                                    -->
<!-- WORKFLOW.md → workspace.manifest.yaml →                      -->
<!-- stages/<current>/STAGE.md → _config/*                        -->
<!-- ============================================================ -->

# WORKSPACE — Shokunin Brand Identity

## 0. WHAT WE ARE

The Shokunin Crafthouse is a precision-first creative studio. *Shokunin* (職人) is the artisan who devotes a life to mastering a craft, not to finishing tasks. Every artifact in this workspace is held to that standard.

Design and engineering are not separate here. Both serve the felt quality of the work. Pixels, easing curves, API response shapes, database indexes — every layer is craft.

We ship work that feels inevitable. "Good enough" is not a ship criterion. Work ships when it cannot be improved without changing its nature.

This file is a directive, not documentation. Read it. Follow it.

## 1. PROJECT META

- **Name:** Shokunin Brand Identity
- **Client:** Internal — Shokunin Crafthouse
- **Kind:** brand
- **Current stage:** 01-brief
- **Lead:** Levi Bahn
- **Start date:** 2026-05-26
- **Target launch:** TBD
- **Production domain:** brand.shokunincrafthouse.com
- **Current sprint:** (none — update this field before each sprint starts)

### Purpose

Build a complete brand and design system for The Shokunin Crafthouse — tokens, type, color, mark, and voice — resolved to the point where any future surface can be built without re-litigating the foundation.

### Primary deliverable

- Living brand reference site at brand.shokunincrafthouse.com
- Design token schema (DTCG JSON)
- Refined logomark
- Neue Haas Grotesk type system
- Voice framework
- 12 primitive components

### Tech stack

- React (Vite)
- CSS custom properties
- Static deployment to brand.shokunincrafthouse.com

### Key design constraints

- Rams-lineage austerity with Japanese *ma* spatial philosophy
- Neue Haas Grotesk primary (WOFF2 in hand); free mono secondary TBD
- Near-monochrome palette with a single chromatic accent
- No third-party component libraries
- WCAG AA minimum on all text/surface pairs
- Digital-only scope
- Dark and light modes required

Canonical machine-readable meta lives in `workspace.manifest.yaml`. Keep this section and the manifest in sync.

## 2. NORTH STAR

[One or two sentences. What does success look like? What is the felt quality we are chasing? Write this with the care you would write headline copy.]

## 3. NON-NEGOTIABLES

These cannot be traded away under schedule pressure. Recorded here so no one has to re-argue them mid-project.

- Accessibility: AA minimum on all shipped surfaces; AAA on legal and disclosure copy
- Performance: LCP < 2.5s, CLS < 0.1, INP < 200ms on representative network
- No lorem ipsum reaches staging. Ever.
- No raw hex, no magic numbers, no ad-hoc font sizes in shipped code
- Every interactive element ships five states: default, hover, focus, active, disabled
- Reduced-motion delivers a functional path, not a blank page
- [Add project-specific non-negotiables below]

## 4. OPERATING RULES

**Read before writing.** No output begins without WORKSPACE.md, WORKFLOW.md, and the current STAGE.md loaded. Violations produce drift.

**Stage gates are binding.** Do not start work in stage N+1 until stage N is signed off. If a later-stage problem is rooted in an earlier stage, return to the owning stage and fix it there. Do not patch downstream.

**Decisions are logged.** Every decision with irreversible or cross-cutting consequence is recorded in `decisions/decisions.md` with date, context, and rationale. Unlogged decisions are provisional and may be reopened without notice.

**Token file is the source of truth.** `_config/design-system/token-map.md` governs color, type, spacing, motion, radius. Figma mirrors the tokens, not the reverse. Code imports generated from the tokens.

**Copy is design.** Button labels, error states, onboarding, empty states, microcopy — all written, never filler. Placeholder copy is a bug.

**Motion is causality.** If a transition does not answer *what happened and why does it matter*, cut it. Springs for interactive affordances; duration-based easing only on scripted timelines.

**Accessibility is present from layer one.** Contrast, focus, keyboard paths — designed in, not audited in.

**Names are copy.** Variables, functions, files, components — chosen with the same care as button labels. A name that needs a comment is the wrong name.

**Surface ambiguity, do not resolve it silently.** If the spec does not answer a question, return to the owning stage. Do not improvise a value and continue.

## 5. STUDIO PRINCIPLES (INHERITED)

These come from `studio-memory.md` and apply to every Shokunin Crafthouse project. Override only with a written, logged decision.

- Subtraction precedes addition. Two passes remove before one pass adds.
- Typography decides the room. Solve type first, always.
- Every design decision is expressible as a rule. One-offs are debt.
- Perceived performance is the real performance.
- Dense UIs read as capable; sparse UIs read as premium. Pick the register deliberately.
- Detail is the craft, not the polish: scrollbar, favicon at 16px, empty state, 404, skeleton, form-error copy.
- Start monochromatic. Add an accent late, with purpose. Three colors is usually one too many.
- One typeface family with full range beats two in conflict.
- Dark first when both modes are viable. Design dark, derive light.

## 6. STAGE INDEX

| Stage | Folder | Owner artifact | Gate |
| --- | --- | --- | --- |
| 01 — Brief | `stages/01-brief/` | Scope, references, constraints | Concept sign-off |
| 02 — Design | `stages/02-design/` | Type, tokens, layout, motion, interaction | Design sign-off |
| 03 — Build | `stages/03-build/` | Shipping implementation | Build sign-off |
| 04 — Review | `stages/04-review/` | QA, performance, accessibility, parity | Review sign-off |
| 05 — Launch | `stages/05-launch/` | Deploy, monitoring, handoff | Close |

Gate criteria live in `WORKFLOW.md`.

## 7. CANONICAL PATHS

Parseable index: `workspace.manifest.yaml`.

- `WORKSPACE.md` — this file. Project identity.
- `WORKFLOW.md` — stage flow and approval gates.
- `workspace.manifest.yaml` — machine-readable index.
- `adapters/` — model-specific bootstraps (claude, generic, others).
- `_config/brand/` — logo, palette, visual identity artifacts.
- `_config/voice/` — copy guidelines, tone references, lexicon.
- `_config/design-system/` — tokens, Figma links, UI rules.
- `stages/<n>/STAGE.md` — active stage brief.
- `stages/<n>/output/` — shipped artifacts for that stage.
- `decisions/decisions.md` — decision log (append-only).

## 8. WHAT NOT TO DO IN THIS WORKSPACE

- Do not create new top-level folders without updating `workspace.manifest.yaml`.
- Do not write content that contradicts `_config/voice/` without a logged decision.
- Do not introduce color, type, spacing, or motion values outside the token map.
- Do not skip a stage. If scope genuinely bypasses one, record the bypass in `decisions/decisions.md`.
- Do not duplicate project rules into tool-specific config files (`CLAUDE.md`, editor configs, etc.). They live here. Adapters point back.
- Do not treat this file as reference material. It is a directive. Follow it.

## COWORK DEFAULTS

- Output format: Markdown unless specified
- File location: save all outputs inside this project folder unless directed otherwise
- Approval gate: stop and confirm before modifying any file that already exists
- Context to load: read cowork-context.md from ~/Projects/shokunin-crafthouse/studio-memory/ 
  at the start of every session
