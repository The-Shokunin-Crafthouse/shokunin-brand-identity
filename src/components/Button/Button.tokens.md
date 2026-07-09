# Button · token consumption

Spec ref: §2 Tier 3 · 4.0 · Variants: primary, secondary, tertiary, destructive, disabled, loading.

Pill-radius control with a trailing arrow. **The accent is a hover state, never a resting one** — primary rests neutral (neumorphic raise) and turns teal on hover; secondary is an ink outline that goes teal on hover/focus; tertiary is a persistent teal ghost.

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
| `--sc-motion-press-duration` + `-easing` + `-scale` (0.985) | press feedback |

## Per variant

| Variant | Resting | Hover | Active |
|---|---|---|---|
| `primary` | fill = `surface-raised` (neutral), text = `text-primary`, **shadow = `shadow-control-raised`** (button-only neumorphic 4-layer) | fill → `brand-accent-fill` (teal.600), text → `text-on-accent` (white, AA 5.2) | fill → `brand-accent-deep` (teal.700) + scale |
| `secondary` | border + text = `interactive-default` (ink) | → `interactive-hover` (teal, transient AA exception); focus also turns teal | text + border → `interactive-active` + scale |
| `tertiary` | text = `brand-accent-deep` (teal.700, AA 5.78), no border/fill | text → `interactive-hover` (teal) | text → `interactive-active` + scale |
| `destructive` | fill + border = `status-error`, text = `text-on-accent`, shadow = `shadow-control-raised` | — | + scale |

## State-only

| State | Tokens |
|---|---|
| `disabled` | `--sc-color-text-disabled`, `--sc-color-border-default`, `box-shadow: none`, `cursor: not-allowed`. Cross-variant. |
| `loading` | label opacity 0.6, spinner ring (currentColor + `--sc-border-width-default` + `--sc-radius-pill` + `--sc-motion-mode-duration`) replaces the arrow. |
| `focus` | `:focus-visible` styled ring · `--sc-color-border-focus` at `--sc-border-width-focus`, `--sc-border-focus-offset`. Secondary additionally turns its outline teal. |

## The neumorphic shadow (button-only)

`--sc-shadow-control-raised` — 4 layers, 2 ink bottom-left + 2 white top-right, composed from the `ink-rgb`/`white-rgb` channel-triplet primitives; mode-aware (dark mode swaps to black shadows + faint white highlights). **Semantic to controls only** — no other element in the system carries a shadow. Added 2026-07-09 with the button redesign.

## Reduced-motion

`@media (prefers-reduced-motion: reduce)` kills the transition, press-scale, and spinner. Functional path remains via color/shadow.
