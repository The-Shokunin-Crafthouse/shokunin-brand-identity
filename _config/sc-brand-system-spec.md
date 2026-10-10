# Shokunin Crafthouse — Brand & Design System
## Product Spec · Planner Agent · v1.3

---

## 1. Project Overview and Purpose

The Shokunin Crafthouse has a studio identity but not yet an identity system. There is a difference. The studio knows what it believes — craft in service of outcomes, restraint as a creative act, products not pages. What it does not yet have is a resolved visual and verbal language that carries those beliefs on sight, without explanation.

This project closes that gap.

The output is a complete, buildable identity system: design tokens, type system, color system, refined mark, and voice framework, assembled into a living brand reference that any future surface can be derived from. When a Generator agent starts a new project for the studio, it should be able to load this system and build without re-litigating any foundational decision.

The brief has two harder requirements buried inside it:

**Digital-first, built to extend.** The system is scoped to digital surfaces for this build. Tokens are architected in a way that a physical layer can be added later without re-litigating the foundation, but no print resolution is required now. The mark must hold at 16px on a favicon. That's the hard constraint.

**A discerning founder trusts it on sight.** This is not a portfolio decoration. A prospective client — someone who has worked with Pentagram or Clay or Area17 — must look at the identity system and understand, without reading anything, that they are dealing with a studio that holds creative work to an exacting standard. The identity must perform that argument before a word is read.

---

## 2. Complete Deliverables List

### Tier 1 — System Foundation
These are the primitive layers everything else derives from. They cannot be skipped or approximated.

| # | Deliverable | Format | Notes |
|---|---|---|---|
| 1.1 | Design token schema | JSON (W3C DTCG format) | Color, type, spacing, radius, elevation, motion |
| 1.2 | Color system | Annotated reference | Palette primitives + semantic layer + dark/light modes |
| 1.3 | Typography system | Annotated reference | Face selection, scale, usage rules, print/screen guidance |
| 1.4 | Spacing + layout grid | Annotated reference | Base unit, scale, column system |
| 1.5 | Motion + elevation tokens | Annotated reference | Easing curves, duration scale, shadow scale |
| 1.6 | SC Token Explorer skill | SKILL.md | `sc-token-explorer` — answers token questions in chat; usable as soon as Sprint 1 tokens exist |

### Tier 2 — Identity
The mark and voice are the studio's face and mouth. Both must be resolved to the point of zero ambiguity.

| # | Deliverable | Format | Notes |
|---|---|---|---|
| 2.1 | Refined logomark | SVG (all lockups) | Primary, compact, icon-only; horizontal + stacked |
| 2.2 | Logo specification page | Web artifact | Clear space, minimum sizes, approved backgrounds, misuse |
| 2.3 | Brand voice document | Markdown + web artifact | Principles, four registers, anti-pattern library |
| 2.4 | SC Voice Checker skill | SKILL.md | `sc-voice-checker` — scores copy against the 7 principles in chat |

### Tier 3 — Component Foundations
Twelve primitive components with tokens applied. These prove the system works and seed future Generator sessions.

| # | Component | States |
|---|---|---|
| 3.1 | Button | Primary, secondary, ghost, destructive, disabled, loading |
| 3.2 | Badge / tag | Default, success, warning, error, neutral |
| 3.3 | Card | Default, interactive (hover), elevated |
| 3.4 | Input | Default, focus, filled, error, disabled |
| 3.5 | Divider | Horizontal, vertical, with label |
| 3.6 | Avatar | 4 sizes, image, initials fallback |
| 3.7 | Navigation bar | Desktop horizontal, mobile compact |
| 3.8 | Tooltip | Single-line, multi-line |
| 3.9 | Switch / toggle | On, off, disabled |
| 3.10 | Progress indicator | Bar, circular, step |
| 3.11 | Toast (was Alert) | Success, error, warning, info · inline, floating |
| 3.12 | Typography specimen | All scale steps in-use |

### Tier 4 — Living Brand Reference Site
A single-page-application brand portal that serves as the studio's internal source of truth and a credibility signal to clients who receive the link.

| # | Section | Description |
|---|---|---|
| 4.1 | Overview | Studio mission, system architecture diagram |
| 4.2 | Color | Interactive palette explorer with contrast ratios, semantic usage guide |
| 4.3 | Typography | Live type specimen, scale reference, usage rules |
| 4.4 | Spacing & Grid | Visual scale, layout demonstrations |
| 4.5 | Motion | Easing curve visualizer, duration reference |
| 4.6 | Mark | Logo display, download lockups, specification |
| 4.7 | Components | Living component library with state demos |
| 4.8 | Voice | Brand voice principles and register examples |
| 4.9 | Downloads | Asset kit: SVG, PNG, token JSON, font stack |

### Tier 5 — Handoff Package
Everything a Generator agent or outside collaborator needs to build from.

| # | Deliverable | Format |
|---|---|---|
| 5.1 | Asset kit archive | ZIP (SVG, PNG, WOFF2, token JSON) |
| 5.2 | Generator onboarding doc | Markdown — "start here" for new build sessions |
| 5.3 | Decision log (ADRs) | decisions/decisions.md — all foundational calls logged |

---

## 3. Design Direction

The visual identity is not derived from a mood board. It is derived from the seven Shokunin principles, applied to identity decisions. What follows is the design brief for the Generator, principle by principle.

### Principle 1 — Craft is the baseline, not the ceiling
Every token is specified to the point where it cannot be misapplied casually. Color contrast ratios are calculated and documented, not assumed. Type scale increments are mathematically derived (Major Third or Perfect Fourth), not eyeballed. Kerning decisions are captured in specimen files, not left to render defaults. The craft layer is a locked floor, not a style preference.

### Principle 2 — One clear point of view
The visual direction is **Dieter Rams lineage with East Asian negative space.** Rams gives us the functional austerity, the refusal to decorate, the belief that order is the prerequisite of perception. Japanese design tradition — particularly the *ma* (間) concept of purposeful emptiness — gives us the spatial philosophy. These two traditions do not fight. They complete each other. The mark, the type choice, the color palette, and the spacing system must all read as expressions of the same underlying belief: nothing is here by accident, and absence is as deliberate as presence.

This is not a Bauhaus pastiche. It is not a minimalism trend execution. It is a position.

### Principle 3 — Function first, then beauty — together
The identity system must function before it is beautiful. That means: the color system passes WCAG AA at minimum, AAA where possible. The type scale works at every breakpoint from 320px to 2560px. The mark reproduces cleanly at every size from 16px favicon to large-format print. Every design decision has a documented functional rationale. The beauty comes from the rigor, not from ornament applied on top.

### Principle 4 — Restraint as a creative act
The palette is narrow. Two or three primaries maximum, with a disciplined semantic layer. No accent color that exists for visual interest alone. The type system uses two faces, not four — one for display/headings, one for body/interface. The mark is reducible to a single form that works in monochrome. When in doubt, the answer is remove.

**Color direction:** Dark ground, light form. The studio works in precision materials — metal, wood, code — and the palette should carry that industrial restraint. Warm near-black with warm near-white. A single chromatic accent in a frequency that reads as signal, not decoration — consider a deep, muted teal or oxidized copper, not a trendy electric hue.

**Type direction:** A single geometric or humanist sans for display and UI — something with genuine typographic character, not a default grotesque. Evaluate: GT Alpina, Söhne, Aktiv Grotesk, Inter (with reservations — too common), or a high-quality geometric like Neue Haas Grotesk. Pair with a mono face for technical/code contexts that feels intentional, not like a fallback.

### Principle 5 — Products, not pages
The living brand site should feel like a product, not a brand guidelines PDF rendered in a browser. Interactions are considered. The color palette section is not a grid of swatches — it is an interactive explorer. The type specimen is not a static PDF page — the user can see any copy rendered at any scale step. The token explorer answers natural language questions. The system is alive.

### Principle 6 — Authorship over process
The mark refinement has a specific brief: take the rough logo and push it to a point where a graphic designer at Pentagram would recognize craft intention. This is not a redesign from scratch. It is a resolution — finding the version of the mark that already exists in the rough, latent, and bringing it forward. The Generator should present exactly one resolved direction per sprint review, not three options. One direction, fully executed.

### Principle 7 — Originality over safety
The system earns its right to exist by making at least one decision a careful observer would recognize as deliberate. This means: the color palette must not be the default choice a designer would make on day one. The type pairing must not be a predictable combination. The mark must contain one detail — a proportion decision, a cut, a weight shift — that makes a trained eye pause. Generic is disqualifying. Safe is disqualifying. The system should have a point of view that could only belong to this studio.

---

## 4. Technical Stack and Architecture Decisions

These are the resolved decisions for the project. The Generator should not relitigate them.

### Token Architecture

**Format:** W3C Design Tokens Community Group (DTCG) spec — JSON with `$value`, `$type`, and `$description` fields. This format is tool-agnostic, survives framework changes, and can be compiled to CSS custom properties, iOS Swift constants, Android XML, or Tailwind config via Style Dictionary.

**Hierarchy:** Three tiers.
1. **Primitive tokens** — raw values with no semantic meaning. `color.slate.900`, `font.size.16`, `space.4`.
2. **Semantic tokens** — purpose-mapped. `color.surface.default`, `color.text.primary`, `space.component.padding.sm`. These are what components reference.
3. **Component tokens** — specific overrides. `button.background.primary`, `input.border.focus`. Used only when a component needs to diverge from the semantic layer.

Components always reference semantic or component tokens, never primitives directly. This ensures a color system change propagates correctly.

**Dark mode:** Implemented as a semantic token swap, not a class override. The primitive layer does not change; the semantic layer maps to different primitives in dark mode. Both modes are defined in the token file.

### Living Brand Site

**Stack:** React (Vite), deployed as a static site. No server-side rendering needed — this is a reference document, not a dynamic application. CSS custom properties for token consumption, not a CSS-in-JS solution.

**Component library:** No third-party component library. Every component in the brand site is built from the design system itself. The brand site is the proof-of-concept.

**AI features:** Anthropic API (claude-sonnet-4-20250514) called client-side from the artifact. See §8 for feature details.

### Logo and Asset Exports

All lockups exported in SVG (scalable, preferred) and PNG at 1x/2x/3x. Color variants: full color, reversed (white on dark), monochrome black, monochrome white. No EPS — digital-only scope.

### File and Asset Organization

```
sc-brand-system/
├── _config/
│   └── sc-brand-system-spec.md   ← THIS FILE — must be committed here
├── tokens/
│   ├── primitives.json
│   ├── semantic.json
│   └── component.json
├── assets/
│   ├── logo/
│   │   ├── sc-logo-primary.svg
│   │   ├── sc-logo-compact.svg
│   │   ├── sc-logo-icon.svg
│   │   └── [all variants]
│   └── fonts/
│       └── [WOFF2 files]
├── skills/
│   ├── sc-token-explorer/
│   │   └── SKILL.md
│   └── sc-voice-checker/
│       └── SKILL.md
├── brand-site/
│   └── [React app]
├── decisions/
│   └── decisions.md
└── README.md
```

---

## 5. Sprint Breakdown

Each sprint produces a self-contained, reviewable deliverable. The Generator does not begin a sprint until the prior sprint's deliverable has been reviewed and approved. No sprint has a dependency on work that is still in progress.

**File location of this spec:** This spec must be committed to the repo at `_config/sc-brand-system-spec.md` immediately after the Planner produces it (Step 2B of the New Project Setup Guide). It must be present in the repo before any Generator session begins.

### Sprint Execution — Pre-flight Protocol

Before proposing a sprint contract or writing any code, the Generator must run the following checks in order. BLOCKER items are hard stops — the Generator reports the problem and waits for resolution. It does not propose a contract, does not write code, and does not work around the problem.

| Check | Type | Action if failed |
|---|---|---|
| This spec file exists at `_config/sc-brand-system-spec.md` in the worktree | **BLOCKER** | Stop. Print exactly: `BLOCKER: spec not found at _config/sc-brand-system-spec.md. Commit the spec per Step 2B of the New Project Setup Guide before this session can continue.` Do not proceed under any circumstances until resolved in chat. |
| This sprint's CONTEXT.md exists at the correct path with `Status: drafting` or `Status: approved` | **BLOCKER** | Stop. Report the missing or malformed file path and wait for resolution. |
| Previous sprint's CONTEXT.md has `Status: complete` | WARNING | Report the incomplete sprint by name. Continue, but note it in the contract proposal. |

---

### Sprint 1 — Token Architecture + Color System
**Duration target:** 1 session

**Objective:** Lock the mathematical and chromatic foundation. Every decision made here becomes permanent — changing tokens post-Sprint 1 cascades everywhere.

**Deliverables:**
- `tokens/primitives.json` — complete primitive token set with all `$type`, `$value`, `$description` fields
- `tokens/semantic.json` — full semantic layer for light and dark modes
- Interactive color explorer artifact — shows every primitive and semantic token with contrast ratios calculated live
- `skills/sc-token-explorer/SKILL.md` — token query skill, loadable immediately
- Typography face shortlist — mono secondary candidates evaluated, no selection yet

**Work in Sprint 1:**
1. Define the primitive color scale — min 9 steps per hue (50–900), covering the warm near-black, warm near-white, and the chromatic accent
2. Define semantic color assignments for both modes: surface, text, border, interactive, status (success/warning/error/info), brand
3. Calculate and document WCAG ratios for all text-on-surface combinations
4. Define spacing scale (base-4 or base-8, document the choice)
5. Define type scale (mathematical ratio, document the choice)
6. Define radius scale (4 steps from square to fully rounded)
7. Define elevation scale (4 shadow levels)
8. Define motion tokens (3–4 easing curves, 5 duration steps)
9. Define the Neue Haas Grotesk weight strategy — which weights are in the system, what each is used for
10. Evaluate secondary mono face candidates (Geist Mono, JetBrains Mono, IBM Plex Mono) — no selection yet, but load specimens
11. **Before closing the PR:** scaffold Sprint 2's CONTEXT.md at `stages/03-build/sprint-2/CONTEXT.md` with `Status: drafting`. Use the template in Step 8B of the New Project Setup Guide. Leave the Contract section blank. Commit the file to the feature branch before the PR merges.

**What is NOT in Sprint 1:** Final secondary face selection. Mark refinement. Any component work.

---

### Sprint 2 — Typography System + Mark Refinement
**Duration target:** 1–2 sessions

**Objective:** Lock the type system and the mark. These are the two highest-visibility decisions in the entire identity. Neither should be rushed; both must be resolved before any surface is built.

**Deliverables:**
- `tokens/primitives.json` updated with final type tokens (face, size, weight, line-height, tracking)
- Full typography specimen page — every scale step shown in context
- Refined logomark SVG — all lockups (primary, compact, icon-only; light/dark variants)
- Logo specification artifact — clear space, minimum sizes, approved backgrounds, misuse grid

**Work in Sprint 2:**
1. **Neue Haas Grotesk weight strategy** — locked in Sprint 1, confirmed here. Document the weight assignments across the full scale with rationale.
2. **Secondary mono face selection** — evaluate the three candidates from Sprint 1 against real-world specimen output and select one. Document the decision.
3. Define the complete type scale: 10–12 steps from caption to display-hero. Every step has: font-size, line-height, letter-spacing, weight, and a documented use case.
4. Define screen optical size behavior — no print adjustments, but document any weight compensation needed at small sizes for Neue Haas Grotesk specifically.
5. Mark refinement: see §9.1 for the full brief. The existing mark is a 4×3 cross grid in Block and Simplified variants. The Generator resolves one direction — proportion shift or spacing intention — and presents it fully executed. One direction, not three options. Levi approves or redirects.
6. Export all logo lockups per §9.3 (SVG + PNG at 1x/2x/3x, all color variants).
7. **Before closing the PR:** scaffold Sprint 3's CONTEXT.md at `stages/03-build/sprint-3/CONTEXT.md` with `Status: drafting`. Use the template in Step 8B of the New Project Setup Guide. Leave the Contract section blank. Commit the file to the feature branch before the PR merges.

**What is NOT in Sprint 2:** Component work. Brand site assembly. Voice system.

---

### Sprint 3 — Voice System + AI Voice Checker
**Duration target:** 1 session

**Objective:** Formalize the brand voice as a buildable, testable system. The voice document already exists in skeleton form across the brand voice skill files — this sprint resolves it into a complete, standalone artifact and adds the AI-powered checker.

**Deliverables:**
- Brand voice document (Markdown, structured for web rendering and brand site integration)
- `skills/sc-voice-checker/SKILL.md` — voice audit skill, loadable in any chat session
- Copy examples per surface: 3 examples each for studio/marketing, case study, client proposal, and product copy

**Work in Sprint 3:**
1. Expand the four registers into full specification: opening pattern, sentence structure, density, perspective, what it allows/forbids
2. Build the anti-pattern library into a structured format (pattern name, example, why it fails, corrected version)
3. Write the copy examples per surface type — these are canonical references, not placeholders
4. Write `sc-voice-checker/SKILL.md` following the skill format: trigger description, pre-audit phase, 7-principle scoring rubric, anti-pattern scan procedure, output format, calibration examples
5. **Before closing the PR:** scaffold Sprint 4's CONTEXT.md at `stages/03-build/sprint-4/CONTEXT.md` with `Status: drafting`. Use the template in Step 8B of the New Project Setup Guide. Leave the Contract section blank. Commit the file to the feature branch before the PR merges.

**What is NOT in Sprint 3:** Brand site assembly. Component work.

---

### Sprint 4 — Component Primitives
**Duration target:** 1–2 sessions

**Objective:** Build all 12 primitive components with tokens applied, in both light and dark modes. This is the proof-of-concept that the token system works — if a component cannot be built cleanly from the semantic token layer alone, there is a gap in the token architecture that must be fixed here.

**Deliverables:**
- All 12 components (listed in §2, Tier 3) as interactive React components
- Each component demonstrates all documented states
- Each component is annotated with the token names it consumes
- A component showcase page that renders all 12 with a dark/light mode toggle

**Work in Sprint 4:**
1. Build components in strict token-compliance — zero hardcoded color values, zero magic numbers
2. For each component: document which tokens it consumes, and why each decision was made
3. Write the component showcase page as a preview of the living brand site structure
4. Identify and resolve any token gaps found during component build — update `tokens/semantic.json` as needed
5. **Before closing the PR:** scaffold Sprint 5's CONTEXT.md at `stages/03-build/sprint-5/CONTEXT.md` with `Status: drafting`. Use the template in Step 8B of the New Project Setup Guide. Leave the Contract section blank. Commit the file to the feature branch before the PR merges.

**What is NOT in Sprint 4:** Brand site full assembly. PDF guidelines. Asset kit packaging.

---

### Sprint 5 — Living Brand Reference Site
**Duration target:** 1–2 sessions

**Objective:** Assemble all prior sprints into a single-page-application brand portal. This is the primary delivery artifact — the thing a client receives a link to, the thing a Generator loads at the start of a new project.

**Deliverables:**
- Fully functional brand reference SPA — all 10 sections from §2 Tier 4
- AI Token Explorer feature (see §8)
- Download section with all asset links functional
- The site itself demonstrates the identity system — it is built with the components, tokens, typography, and colors from Sprints 1–4

**Work in Sprint 5:**
1. Build the site shell: navigation, layout grid, dark/light mode toggle
2. Assemble all prior sprint deliverables into their respective sections
3. Build the interactive color explorer (live contrast ratio calculation)
4. Build the live type specimen (any copy, any scale step)
5. Build the easing curve visualizer (motion tokens)
6. Ensure the site works at 320px, 768px, 1280px, and 1920px viewports
7. Ensure the site passes its own WCAG standards — it would be notable if it did not
8. **Before closing the PR:** scaffold Sprint 6's CONTEXT.md at `stages/03-build/sprint-6/CONTEXT.md` with `Status: drafting`. Use the template in Step 8B of the New Project Setup Guide. Leave the Contract section blank. Commit the file to the feature branch before the PR merges.

**What is NOT in Sprint 5:** PDF guidelines. Asset kit packaging.

---

### Sprint 6 — Handoff Package + Decisions Log
**Duration target:** 1 session

**Objective:** Package everything for permanent use. After this sprint, the identity system is closed and any new work derives from it.

**Deliverables:**
- Complete asset kit ZIP
- Generator onboarding document (`README.md`) — "start here" for any new build session
- Complete decisions log — all ADRs from Sprints 1–5 written up and reviewed
- Brand site final review pass — all sections live and accurate

**Work in Sprint 6:**
1. Package the asset kit: verify all SVG/PNG exports, font files, token JSON, confirm naming conventions
2. Write the Generator onboarding doc — what the system contains, how to load it, which tokens to reference for which decisions, where the ADRs live
3. Review and finalize the decisions log — every significant architectural call from Sprints 1–5 should be captured
4. Final brand site review pass — confirm all sections are accurate, all downloads work, dark/light toggle tested across sections
5. **Before closing the PR:** confirm that CONTEXT.md files for Sprints 1–5 all have `Status: complete`. Update any that do not before merging.

---

## 6. Success Criteria Per Sprint

Success criteria are pass/fail. "Looks good" and "feels right" are not criteria. If a sprint does not clear every criterion, it is not done.

### Sprint 1 Success Criteria

| # | Criterion | Test |
|---|---|---|
| 1a | Primitive token file is valid DTCG JSON | Parseable without error; every entry has `$value`, `$type`, and `$description` |
| 1b | Semantic tokens reference only primitives, never raw values | Grep for hardcoded hex or px values in semantic.json — zero results |
| 1c | All foreground/background token pairs pass WCAG AA | Automated contrast ratio check in the color explorer — all text-on-surface combinations ≥ 4.5:1 |
| 1d | Spacing scale has a documented base unit and mathematical derivation | ADR logged for scale choice (base-4 vs base-8, etc.) |
| 1e | Type scale has a documented ratio and all 10+ steps defined | Each step has: size, line-height, tracking, weight, use case — no step is undefined |
| 1f | Both light and dark semantic layers are complete | Every semantic token in the light layer has a dark-mode counterpart |
| 1g | Neue Haas Grotesk weight strategy is documented | Table of weights (Light, Regular, Medium, Bold, etc.) with assigned use cases present |
| 1h | Type shortlist for mono secondary contains exactly 3 candidates with rationale | Geist Mono, JetBrains Mono, IBM Plex Mono evaluated; no selection yet — rationale references system needs |
| 1i | SC Token Explorer skill is complete and follows skill format | SKILL.md has: trigger description, pre-query phase, query logic sequence, output format, calibration examples — no section missing |
| 1j | Sprint 2 CONTEXT.md is scaffolded | `stages/03-build/sprint-2/CONTEXT.md` exists and contains `Status: drafting` |

### Sprint 2 Success Criteria

| # | Criterion | Test |
|---|---|---|
| 2a | Neue Haas Grotesk weight assignments are documented and locked | Weight table present: which weights are used at which scale steps, with rationale |
| 2b | Secondary mono face is selected and documented | One face chosen, ADR logged with rationale referencing the three candidates |
| 2c | Every type scale step is demonstrated in context | Specimen page shows each step with real copy, not Lorem Ipsum |
| 2d | Screen optical size behavior is documented | At least one documented note on weight compensation at small sizes for Neue Haas Grotesk |
| 2e | All logo lockups are exported per §9.3 | SVG + PNG (1x/2x/3x) for each lockup; all open correctly in browser |
| 2f | The mark reproduces clearly at 16px × 16px | Screenshot test — icon-only lockup at favicon size, judged by Levi |
| 2g | Logo specification page covers all required cases | Clear space ✓, minimum sizes ✓, approved backgrounds (min 4) ✓, misuse examples (min 4) ✓ |
| 2h | The mark contains one detail a trained eye would notice | Levi identifies and names the deliberate detail — if he cannot, the mark is not resolved |
| 2i | Sprint 3 CONTEXT.md is scaffolded | `stages/03-build/sprint-3/CONTEXT.md` exists and contains `Status: drafting` |

### Sprint 3 Success Criteria

| # | Criterion | Test |
|---|---|---|
| 3a | All four registers are fully specified | Opening pattern, sentence structure, density, perspective, allows/forbids — all present for all four |
| 3b | Anti-pattern library covers the original sc-brand-voice anti-patterns plus any new ones identified | No anti-pattern from the source skill file is missing |
| 3c | Copy examples are written for all four registers, three examples each | 12 total examples. None use placeholder copy. |
| 3d | SC Voice Checker skill is complete and follows skill format | SKILL.md has: trigger description, pre-audit phase, full 7-principle rubric, anti-pattern scan, output format, calibration examples — no section missing |
| 3e | Skill correctly maps each principle to voice-specific pass/fail signals | Load the skill and score a known-good piece of copy — all 7 scores returned with quoted line evidence |
| 3f | Skill flags known anti-patterns by name | Score copy containing at least 3 documented anti-patterns — all 3 flagged with category name and exact line |
| 3g | Sprint 4 CONTEXT.md is scaffolded | `stages/03-build/sprint-4/CONTEXT.md` exists and contains `Status: drafting` |

### Sprint 4 Success Criteria

| # | Criterion | Test |
|---|---|---|
| 4a | All 12 components are built and render correctly | Visual check — all components render in both light and dark modes without layout issues |
| 4b | Zero hardcoded values in component code | Grep for hex codes, px magic numbers — zero results |
| 4c | All required states are implemented for each component | Check each component against the state list in §2 Tier 3 |
| 4d | Token consumption is annotated for each component | Each component has an annotation layer or comment block listing token names consumed |
| 4e | No token gaps remain | If a semantic token had to be added or modified during Sprint 4, it is documented in an ADR |
| 4f | Dark/light mode toggle works correctly for all components | Toggle switches mode and all components update without page reload |
| 4g | Sprint 5 CONTEXT.md is scaffolded | `stages/03-build/sprint-5/CONTEXT.md` exists and contains `Status: drafting` |

### Sprint 5 Success Criteria

| # | Criterion | Test |
|---|---|---|
| 5a | All 9 brand site sections are present and functional | Navigate to each section — no broken sections, no placeholder content |
| 5b | Site passes its own contrast standards | Run aXe or equivalent accessibility check — zero critical errors |
| 5c | Site is functional at 320px, 768px, 1280px, and 1920px | Browser dev tools — check each breakpoint, no overflow or layout collapse |
| 5d | Download section produces working files | Click every download — all files open correctly |
| 5e | The site itself demonstrates the identity system | A trained designer can look at the site and identify the type system, color system, and spacing system in use — the site is not styled generically |
| 5f | Dark/light mode toggle is accessible from every section | Toggle is present and functional regardless of scroll position |
| 5g | Sprint 6 CONTEXT.md is scaffolded | `stages/03-build/sprint-6/CONTEXT.md` exists and contains `Status: drafting` |

### Sprint 6 Success Criteria

| # | Criterion | Test |
|---|---|---|
| 6a | Asset kit ZIP contains all required files | Unzip and verify against §9.3 — SVG, PNG (1x/2x/3x), WOFF2, token JSON all present |
| 6b | Generator onboarding doc answers: what is in the system, how to load it, where are the ADRs | Read the doc cold — a Generator agent should be able to start a new project from it alone |
| 6c | ADR count ≥ 10 | Decisions log must capture: scale choice, typeface strategy, secondary face selection, mark direction, color palette direction, dark mode approach, site stack, motion approach, at minimum |
| 6d | No sprint deliverable is in an unresolved state | Review all sprint outputs — nothing is marked TODO, TBD, or placeholder |
| 6e | Brand site final pass | All 10 sections load, no broken downloads, dark/light tested |
| 6f | All prior sprint CONTEXT.md files have Status: complete | `grep "Status:" stages/03-build/sprint-*/CONTEXT.md` — every result reads `Status: complete` |

---

## 7. Studio Skills

Two skills are specified for this project. Both are Claude chat skills — invoked directly in conversation, no artifact, no API billing complexity. They are delivered as SKILL.md files in `sc-brand-system/skills/` and loaded into the project knowledge base.

### Skill A — SC Voice Checker (`sc-voice-checker`)

**Delivered:** Sprint 3.

**What it does:** The user pastes any piece of copy and asks for a voice audit. The skill scores it against all seven Shokunin design principles as applied to written voice, runs the anti-pattern scan, and returns:
- A scorecard: each of the 7 principles scored 1–5 with a specific quoted line as evidence and a one-sentence rationale
- An overall verdict: On-voice (4.0–5.0) / Needs work (2.5–3.9) / Off-voice (1.0–2.4)
- A flagged anti-pattern report (zero-tolerance — every hit reported)
- 1–3 priority rewrite targets: the failing line, the principle violated, and a concrete rewrite direction

**Design constraint:** Output must be actionable at the line level. "This copy is too passive" is a failure state. The checker names the exact line, names the principle it violates, and gives a directional fix. The full rewrite is out of scope for this skill — that hand-off goes to copy-surgeon.

**Trigger phrases:** "check this against the voice", "is this on-voice", "voice check", "score this", "does this sound like the studio."

### Skill B — SC Token Explorer (`sc-token-explorer`)

**Delivered:** Sprint 1 (usable as soon as tokens exist).

**What it does:** The user asks a natural language question about token usage. The skill loads the token files from the project, finds the correct token at the right tier, and returns:
- The token name
- Light and dark mode values
- Token tier (Semantic / Primitive / Component)
- One-sentence rationale for why it is the correct choice

If no semantic token exists for the use case, it flags the gap explicitly and suggests a name for the missing token.

**Design constraint:** The skill never returns a primitive token when a semantic token exists for the use case. Token gaps are surfaced as actionable findings, not silent fallbacks.

**Trigger phrases:** "what token should I use for...", "which token controls...", "look up the token for...", "what's the right token for..."

---

## 8. Open Questions for Levi

All open questions resolved. No blockers.

| # | Question | Resolution |
|---|---|---|
| 1 | Rough logo location | Figma: `oIeQl6SlqWjvyZ126f65tn`, node `9:60`. Two variants — Block (white cross grid on black rectangle) and Simplified (cross grid on transparent). See §9 for mark analysis. |
| 2 | Rams-lineage visual reference | [Drams](https://drams.framer.website/) — Framer UI component library translating Dieter Rams' product aesthetics to digital interfaces. Industrial reduction, no ornament, every element functional. Governs component aesthetic direction. Rams' 10 principles sourced from [Vitsoe](https://www.vitsoe.com/eu/about/good-design). |
| 3 | Type licensing | Neue Haas Grotesk is locked — already purchased, WOFF2 files in hand. Use as the primary face across display and UI. Any secondary face (mono, supplementary) must be free/open license. |
| 4 | Brand site hosting | [brand.shokunincrafthouse.com](https://brand.shokunincrafthouse.com) |
| 5 | Print scope | Removed from scope. The system is digital-only for now. All print references in the original spec are superseded by §9.3 below. |

---

## 9. Spec Amendments

### 9.1 Mark Analysis — Current State

The rough logo is a **4-column × 3-row grid of cross/plus marks** (12 total), shown in two states:

- **Block variant** — white cross marks on a solid black rectangle. The form reads as a unit: a block of signal.
- **Simplified variant** — black cross marks on transparent background. The individual marks are exposed; the grid structure is the only thing holding them together.

The mark has latent potential. A grid of crosses is a map of connection points — it carries the structural logic of craft, of measurement, of registration marks, of the woodworker's layout grid. None of that meaning is legible yet in the rough form because the crosses are uniform, the spacing is undifferentiated, and neither variant has resolved proportions.

**The resolution direction for Sprint 2:** The mark needs one deliberate decision that elevates it from "arranged crosses" to "a considered mark." Two candidates — the Generator should evaluate both and present one:

1. **Proportion shift** — vary the weight or scale of one cross within the grid (the center, a corner) to create hierarchy. The grid becomes a field with a focal point.
2. **Spacing intention** — tighten the spacing so the crosses begin to relate to each other as a unit rather than as twelve independent marks. The negative space between them becomes as designed as the marks themselves.

In either case: the cross form itself should be refined. The current plus is neutral. Consider whether a slightly heavier arm weight, a cropped terminal, or a very slight optical correction at the intersections gives it authorship.

The **Block variant** is the primary lockup. The **Simplified variant** becomes the icon-only lockup for favicon, app icon, and compact contexts.

### 9.2 Visual Reference — Drams Application

The Drams reference (drams.framer.website) translates Rams into UI through:

- Near-monochrome palette — warm off-white ground, near-black form, one functional accent
- Physical control metaphors — sliders, dials, rotary elements rendered in flat digital form
- No decorative radius — corners serve the form, not a trend
- Typography that recedes — the UI element is the subject, not the headline

For the Shokunin system, this reference governs **component aesthetic** and **color palette direction**. It does not govern the mark, the type system, or the voice. The studio synthesizes from Drams; it does not copy it.

**Direct implications for Sprint 1:**
- Color palette should start from warm off-white and near-black, with a single chromatic accent that earns its place. Drams uses no accent. The studio can afford one, but it must function as signal — status, interaction state, brand anchor — not decoration.
- Component borders should be thin and precise. No soft card shadows as primary depth signal. Use border + spacing before elevation.
- Interactive states should feel mechanical, not springy. Motion tokens should favor linear or gentle ease-out over bouncy easing curves.

### 9.3 Digital-Only Scope

All print references from the original spec are removed. The following changes cascade:

- **Token architecture (§4):** Remove `$extensions.print` field requirement from color tokens. Remove CMYK equivalents from the token spec.
- **Sprint 1 success criteria:** Remove criterion 1g (CMYK equivalents).
- **Sprint 2:** Remove print optical size guidance from type system. Remove EPS export from logo asset specification.
- **Tier 1 deliverables (§2):** No print token layer needed.
- **Tier 5 handoff (§2):** No print-ready PDF brand guidelines. The brand site is the authoritative reference; a PDF export is deferred unless specifically requested later.

Logo asset exports: SVG + PNG (1x/2x/3x). No EPS.

### 9.4 Typography — Locked Primary, Free Secondary

**Primary face:** Neue Haas Grotesk — locked. Use across display, heading, UI, and body. Do not introduce a second paid face.

**Secondary face (if needed):** Must be a high-quality free/open-source face. Candidates for the mono/code context: [Geist Mono](https://vercel.com/font) (Vercel, free), [JetBrains Mono](https://www.jetbrains.com/legalnotices/font/) (free, OFL), [IBM Plex Mono](https://github.com/IBM/plex) (free, OFL). The Generator evaluates these against the system in Sprint 2 and selects one.

**The Sprint 1 type shortlist task is reduced:** No need to evaluate paid faces. Sprint 1 documents the Neue Haas Grotesk weight and optical size strategy. The secondary mono face selection moves to Sprint 2.

---

*Spec version 1.3 · Planner Agent · The Shokunin Crafthouse · May 2026*
*Updated v1.3: Added Sprint Execution Pre-flight Protocol (§5) — untracked spec and missing CONTEXT.md are now hard BLOCKERs, not soft warnings. Added closing task to each sprint's work list to scaffold the next sprint's CONTEXT.md before the PR merges. Added CONTEXT.md scaffolding as a pass/fail success criterion (1j, 2i, 3g, 4g, 5g, 6f) in each sprint. Updated file organization diagram in §4 to show canonical spec path at `_config/sc-brand-system-spec.md`. Duplicate criterion 2e renumbered to 2f–2h.*
*Updated v1.2: replaced AI artifact features with two Claude chat skills (sc-voice-checker, sc-token-explorer); removed billing complexity; updated deliverables, sprints, and success criteria throughout.*
