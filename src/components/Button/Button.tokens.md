# Button · token consumption

Spec ref: §2 Tier 3 · 4.0 · Variants: primary, secondary, tertiary, destructive, disabled, loading.

Pill-radius control with a trailing arrow (Phosphor `ArrowRight`, scds-v2 default icon family, `currentColor`). **The accent is a hover state, never a resting one** — primary rests neutral (physical: lit sheen, rim, lift) and turns teal on hover; secondary is a fill-only subtle chip (scds-v2 Phase 2 — was an ink outline) that goes teal on hover/focus; tertiary is a persistent teal ghost.

## Shared (every variant)

| Token | Use |
|---|---|
| `--sc-space-component-padding-inline-lg` | inline padding |
| `--sc-space-component-padding-block-md` | block padding |
| `--sc-space-component-gap-md` | label ↔ arrow gap |
| `--sc-radius-pill` | pill corner |
| `--sc-border-width-default` | border weight |
| `--sc-font-text-label-chrome-*` | NHG Text medium label (11/500), no uppercase |
| `--sc-color-border-focus` + `--sc-border-focus-offset` | styled focus ring |
| `--sc-motion-hover-duration` + `-easing` | bg/border/color/shadow transition |
| `--sc-motion-press-duration` + `-easing` + `-scale` (0.985) | press-in feedback (fast phase) |
| `--sc-motion-press-release-duration` + `-easing` | release feedback (spring-overshoot phase) |

## Per variant

| Variant | Resting | Hover | Active |
|---|---|---|---|
| `primary` | fill = `surface-raised` (neutral), text = `text-primary`, **face = `control-sheen-top` → transparent 50% → `control-sheen-bottom` over the fill; shadow = `shadow-control-rim` + `shadow-control-lift`** | fill → `brand-accent-fill` (teal.600), text → `text-on-accent` (white, AA 5.2) | fill → `brand-accent-deep` (teal.700) + scale; lift → `shadow-control-pressed` |
| `secondary` | fill = `surface-sunk`, text = `text-primary` (ink, AA) — fill-only, no stroke | fill → `surface-hover`, text → `interactive-hover` (teal, transient AA exception); focus matches | text → `interactive-active` + scale |
| `tertiary` | text = `brand-accent-deep` (teal.700, AA 5.78), no border/fill | text → `interactive-hover` (teal) | text → `interactive-active` + scale |
| `destructive` | fill + border = `status-error`, text = `text-on-accent`, same physical face as primary | — | + scale; lift → `shadow-control-pressed` |

## State-only

| State | Tokens |
|---|---|
| `disabled` | `--sc-color-text-disabled`, fill `--sc-color-surface-sunk`, transparent border (fill-only, no stroke frame), `box-shadow: none`, `cursor: not-allowed`. Cross-variant. |
| `loading` | label opacity 0.6, spinner ring (currentColor + `--sc-border-width-default` + `--sc-radius-pill` + `--sc-motion-mode-duration`) replaces the arrow. |
| `focus` | `:focus-visible` styled ring · `--sc-color-border-focus` at `--sc-border-width-focus`, `--sc-border-focus-offset`. Secondary additionally shifts fill + turns its label teal. |

## The press-spring (Drams #6 · Pushin' Click Button)

The studio standard touch affordance is a spring scale to 0.985 on press. Rather than pull in a JS spring/animation library, the button approximates a k400/d25 spring with a **two-phase CSS transition**, split via a pair of custom properties rather than two competing selectors:

- `--sc-btn-transform-duration` / `--sc-btn-transform-easing` are declared once on `.button` and read by the single `transform` transition. Their *resting* value is the release pair (`--sc-motion-press-release-duration` 220ms + `--sc-motion-press-release-easing` springOut — `cubic-bezier(0.34, 1.56, 0.64, 1)`, y > 1 so it overshoots past 1 before settling).
- `.button:active:not(:disabled)` re-points those two custom properties at the existing press pair (`--sc-motion-press-duration` 160ms + `--sc-motion-press-easing` outStrong) — no new "press-in" token, reusing what Sprint 4 already shipped.

Net effect: pressing down snaps to `scale(0.985)` in 160ms (fast, decisive); releasing — the moment `:active` drops and the base rule's transform transition takes back over — eases back to `scale(1)` over 220ms with a spring overshoot. This is the accepted CSS approximation of a spring: no physics engine, no per-frame JS, just two durations/easings switched by state.

New tokens (added to `tokens/primitives.json` + `tokens/semantic.json`, regenerated via `tokens:build`):

| Token | Value | Note |
|---|---|---|
| `--sc-p-motion-duration-press-release` / `--sc-motion-press-release-duration` | 220ms | Release-phase duration. `--sc-motion-press-duration` (160ms) already existed and is reused for the press-in phase — no duplicate "fast" duration added. |
| `--sc-p-motion-easing-spring-out` / `--sc-motion-press-release-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Release-phase easing — the only genuinely new easing curve; the y > 1 overshoot is what makes it read as a spring instead of a linear settle. |

## The physical face (filled variants, 2026-10-07)

Same light model as the Switch knob: lit from above. Levi's direction is physical rendering, not flat.

`--sc-color-control-sheen-top` / `-bottom` — a `linear-gradient(top, transparent 50%, bottom)` laid over the fill (`background-image` over `background-color`), so one pair serves neutral, teal and error fills. The middle is clear, so the label band keeps the fill's own contrast (white on teal.600 stays AA 5.2).

`--sc-shadow-control-rim` — inset half-pixel highlight on the top edge and half-pixel shade on the bottom edge.

`--sc-shadow-control-lift` — the Drams six-layer drop shadow scaled ×0.6 for a ~32px control. `--sc-shadow-control-pressed` keeps only its three near-contact layers; `:active` swaps to it while the press-spring scales the button, so it sits down.

Disabled drops the sheen, rim and lift: flat reads as unavailable.

Retired from Button: `--sc-shadow-control-raised` and `--sc-shadow-control-bevel` (neumorphic). The tokens stay published until no consumer reads them.

## Reduced-motion

`@media (prefers-reduced-motion: reduce)` kills the transition, press-scale, and spinner. Functional path remains via color/shadow.
