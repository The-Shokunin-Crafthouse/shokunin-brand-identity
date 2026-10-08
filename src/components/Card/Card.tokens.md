# Card · token consumption

Spec ref: §2 Tier 3 · 3.3 · States: default, interactive (hover, focus, pressed, disabled), elevated.
physical-controls Tier 2: two materials under the system light (top left). The well (`default`) is set into the page; the plate (`elevated`) is lifted off it; the interactive plate presses on click. Every value is a Card role token, shipped equal to the fill-only card until Levi's sc-tune record applies (decisions 2026-10-07).

## Role tokens

| Token | Shipped (= today) | Use |
|---|---|---|
| `--sc-space-component-padding-card` | padding.lg (24px) | inner padding |
| `--sc-radius-card` | radius.surface (8px) | corner |
| `--sc-color-card-well` | surface.sunk | `default` ground |
| `--sc-shadow-card-well` | zero alpha | `default` recess |
| `--sc-color-card-plate` | surface.page | `elevated` ground |
| `--sc-shadow-card-plate` | zero alpha | `elevated` lift |
| `--sc-color-card-interactive` | surface.sunk | `interactive` ground at rest |
| `--sc-color-card-interactive-hover` | surface.deepSunk | `interactive` ground on hover |
| `--sc-shadow-card-interactive` | zero alpha | `interactive` lift at rest |
| `--sc-shadow-card-interactive-hover` | shadow.control.inset (alias) | hover and keyboard focus |
| `--sc-shadow-card-interactive-pressed` | shadow.control.inset (alias) | pressed |
| `--sc-motion-card-press-scale` | 1 (no press) | pressed scale |

## Shared

| Token | Use |
|---|---|
| `--sc-color-border-focus` + `--sc-border-width-focus` + `--sc-border-focus-offset` | focus ring |
| `--sc-color-text-primary` | text colour |
| `--sc-motion-hover-duration` + `-easing` | ground transition |
| `--sc-motion-press-duration` + `-easing` | press scale transition |
| `--sc-border-width-default` | forced-colors edge |

## Rules

- Shadow changes snap; only the ground and the press scale transition (cards repeat in grids; `verify-light` rule 6).
- Disabled is flat: no lift, no hover, no press.
- Forced colors: an inset `CanvasText` outline on every card (`ButtonBorder` interactive, `GrayText` disabled), a `Highlight` focus ring. No size change.
- Reduced motion: no transitions, no press scale.
