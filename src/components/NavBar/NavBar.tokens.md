# NavBar · token consumption

Spec ref: §2 Tier 3 · 3.7 · States: desktop horizontal, mobile compact.

## Tokens

| Token | Use |
|---|---|
| `--sc-space-layout-inset-md` | nav inline inset |
| `--sc-space-component-padding-inline-md` | per-link inline padding |
| `--sc-space-component-padding-block-md` | per-link + row block padding |
| `--sc-space-component-gap-md` | trailing-slot inner gap |
| `--sc-space-component-gap-lg` | inter-link gap + row gap |
| `--sc-border-width-default` | bottom + menu-top hairlines |
| `--sc-color-border-default` | hairline color |
| `--sc-color-surface-page` | nav bg (page-matched · floats above page) |
| `--sc-color-text-primary` | brand mark + resting links |
| `--sc-color-interactive-hover` | link hover |
| `--sc-color-brand-accent-ink` | current page link (`aria-current`): 5.35:1 light, 7.61:1 dark on page |
| `--sc-border-width-focus` / `--sc-color-border-focus` / `--sc-border-focus-offset` | focus ring on links and the menu toggle |
| `--sc-font-text-body-dense-*` | link type |
| `--sc-font-text-label-chrome-*` | brand mark + compact toggle (chrome caps) |
| `--sc-motion-hover-duration` + `-easing` | link color transition |

## Variants

| Variant | Layout | Trigger |
|---|---|---|
| `desktop` (default) | brand left · links inline · trailing right | `compact={false}` |
| `compact` | brand left · toggle right · expandable menu below | `compact={true}` |

## ARIA

- `<nav aria-label="Primary">` wraps both variants.
- Compact toggle ships `aria-expanded` + `aria-controls="navbar-menu"`.
- Current-page link uses `aria-current="page"` → CSS targets `[aria-current="page"]` to colour with brand accent ink (teal.500 text was 2.99:1, under AA; fixed 2026-10-07). No additional class needed.

## Reduced-motion

Link colour transition suppressed. Hover still triggers an instant colour change.
