<!-- ============================================================ -->
<!-- CONTEXT.md — 02 DESIGN · SPRINT scds-v2                       -->
<!-- ============================================================ -->
<!-- The contract for the SCDS v2 redesign sprint. Directive.     -->
<!-- Inherits stages/02-design/CONTEXT.md Inputs; adds the         -->
<!-- sprint-specific scope, phase plan, and audit checklist.       -->
<!-- ============================================================ -->

# Sprint — SCDS v2 (design-system redesign)

**Status:** drafting
**Branch:** `claude/epic-mendeleev-0279e5`
**Owning stage:** 02-design → 03-build (design→build sprint, gated per phase)

## Why this sprint exists

A Cowork audit found the shipped design system (2026-05-27) predates the
slop-blocklist (2026-06-16) and matches named banned patterns:

- **Outline-stroke component frames** — `Card` / `Input` `border: 1px solid` (the
  single clearest AI fingerprint per `slop-blocklist.md` → "Outline / stroke borders").
- **Warm-neutral ground + vermilion accent** — `slop-blocklist.md` → Color, "the
  current AI editorial default".
- **Thin headers + editorial spec-page skin** — `slop-blocklist.md` → Type / Layout.

This is a new design→build effort flowing through the gates. **Stop at each gate
for human sign-off — do not cross a gate silently.**

## Phase plan

| Phase | Scope | PR |
|-------|-------|----|
| **1 — Tokens + type foundation** | Dark warm→true-neutral; light desaturate (HSB 30,3,B); divider hierarchy (channel-triplet rgba); type thin→Black + Display/Text family split; dedicated off-brand focus ring; Phosphor as default icon family + wrapper. **"Solve type and tokens first."** | **THIS PR** |
| 2 — Component refactor | Remove resting structural frames → fill-only elevation; inset box-shadow for hover/focus only; input focus = fill-shift/bottom-border; drop eyebrows + leading dots on pills; inline SVG → Phosphor; motion retune. | separate, after Phase 1 gate |
| 3 — Site reskin | Floating icon rail + full-viewport chapters over one shared bg; GSAP scroll scenes; destination-preview hover; vermilion chapter grounds; cinematic 2.76:1 video. | separate, after Phase 2 gate |

## Inputs

Inherits **all** rows from `../CONTEXT.md` (studio core, WORKSPACE, WORKFLOW §02,
creative-defaults, §3 quality criteria, decisions log). Sprint-specific adds:

| Source | File / Location | Why |
|--------|-----------------|-----|
| **Slop blocklist** | `../../../studio-memory/playbooks/slop-blocklist.md` | Evaluator grades Originality; a named match = auto-fail |
| Creative defaults | `../../../studio-memory/playbooks/creative-defaults.md` | Defaults being deliberately overridden this sprint (warm-ground → neutral dark) |
| Token authoring | `tokens/primitives.json`, `tokens/semantic.json`, `scripts/tokens-to-css.mjs` | Edit JSON → `npm run tokens:build` → regenerates `src/styles/tokens.css`. **Never hand-edit `tokens.css`.** |
| Font faces | `src/styles/fonts.css`, `src/fonts/` | `@font-face` wiring; 95 Black woff2 present, must be declared |
| Decisions | `decisions/decisions.md` | Prior ADRs; supersede, never rewrite |

## Phase 1 — done-when

- [ ] `npm run tokens:build` regenerates `tokens.css` clean
- [ ] `npm run build` exits 0
- [ ] grep finds zero **new** raw hex / raw px in any component or section source
- [ ] Both themes render (light + dark)
- [ ] ADRs appended (dark neutral · light desaturation · type Black/Display/Text · divider scale · Phosphor · focus ring)
- [ ] `sc-verify` (Gate-3) run; Evaluator vs `slop-blocklist.md` (Originality pass)
- [ ] PR opened via `gh` (human merges)

## Gate-2 on-device check (human — cannot be self-certified)

Pure-neutral near-blacks drift on wide-gamut Chrome (`p3-near-black-drift-chrome`).
**Verify on Levi's P3 display.** Rest-state page↔component is **~1.05:1 by design**
(hover carries the separation) — confirm it reads. If either fails, apply a **+1 red
whisper** at the darkest steps. **Do not claim a pass on an sRGB-only display.**

## Guardrails

- Decide-and-log reversible / in-standard / in-scope calls; ask only for
  scope / money / live-service / brand-direction calls.
- Five interaction states on every interactive element; reduced-motion functional;
  AA body / AAA legal.
- `sc-content-sync` follow-up (flag, don't inline): propagate the studio-wide
  additions — no-eyebrows, no-dots-on-pills, Phosphor-default, dark-neutral override
  of the warm-ground default — to `studio-memory` in a separate pass.
