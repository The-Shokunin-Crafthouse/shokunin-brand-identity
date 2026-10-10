# Toast · token consumption

Spec ref: §2 Tier 3 · 3.11 (was Alert). 2026-10-08: Alert folds into Toast (Levi). Figma: library `0zVoxaLJQkjHENYJlQk1VT`, page Toast `24:7`, set `9:897`. Every role token ships equal to the Figma Toast value (2026-10-10) and aliases the shared token Figma binds, so a tune never moves a sibling (CONTEXT finding 5). Levi's sc-tune record decides the final values.

## Plate

| Token | Use | Shipped (Figma) |
|---|---|---|
| `--sc-color-toast-surface` | plate fill | = `surface.raised` (color/surface/raised) |
| `--sc-radius-toast-plate` | capsule corner | = `radius.pill` (radius/pill) |
| `--sc-space-component-padding-block-toast` | top and bottom | = `layout.inset.sm` (16px). Figma 24; Levi 2026-10-10: 8px less |
| `--sc-space-component-padding-inline-toast-start` | before the badge | = `layout.inset.sm` (16px) |
| `--sc-space-component-padding-inline-toast-end` | after the dismiss | = `layout.inset.lg` (48px) |
| `--sc-space-component-gap-toast` | badge, message, dismiss | = `space.12` (space/12) |
| `--sc-size-toast-width` | floating width | 380px (fixed width, height hugs) |
| `--sc-shadow-toast-plate` | floating shadow; inline draws none | light 2px 2px 6px warm gray 50%, dark 3px 3px 7px black 50% (record Toast 2026-10-10-1534; Figma elevation/2 before) |

The shadow is the Tooltip plate shade, lit from the system top left (record Toast 2026-10-10-1534, concept A). The Figma elevation/2 it replaced was lit from the top.

## Glass (`surface="glass"`)

| Token | Use | Shipped |
|---|---|---|
| `--sc-color-toast-glass` | tint | = `card.glass.frosted.auto` (white 24% light, black 32% dark) |
| `--sc-shadow-toast-glass` | lit top-left rim and soft shade, both placements | = `shadow.card.glass.frosted` |
| `--sc-shadow-toast-glass-text` | text halo | = `shadow.card.glass.text.auto` |
| `--sc-size-toast-glass-frost` | backdrop blur (Figma units; CSS takes half) | = `card.glass.frosted.frost` (9) |
| `--sc-size-toast-glass-saturation` | backdrop saturation, percent | = `card.glass.frosted.saturation` (160) |

Reduced transparency, more contrast and an engine with no backdrop filter turn glass back into the flat plate. The Card's SVG edge refraction is not carried over (Chromium only); it follows if glass is picked.

## Badge and message

| Token | Use | Shipped (Figma) |
|---|---|---|
| `--sc-size-toast-badge` | badge diameter | 50px |
| `--sc-radius-toast-badge` | circle | = `radius.pill` (radius/circle) |
| `--sc-color-toast-badge-success` | success fill | = `status.success` (status/success/light) |
| `--sc-color-toast-badge-error` | error fill | = `status.error`. **Deviation:** Figma fills Error with status/warning/light. Open with Levi |
| `--sc-color-toast-badge-warning` | warning fill | = `status.warning` (no Figma variant; from Alert) |
| `--sc-color-toast-badge-info` | info fill | = `status.info` (status/info/light) |
| `--sc-size-toast-icon` | glyph, Phosphor bold (`glyph="outline"`) or fill | = `space.20` (20px) |
| `--sc-color-toast-icon` | glyph ink | light `warmGray.50` (Figma); dark `dark.well` |
| `--sc-color-toast-text` | message ink | = `text.primary` |
| `--sc-font-text-toast-message-*` | message type | = `body.dense` (14 / 150%). Figma 16; Levi 2026-10-10: 2px smaller |
| `--sc-size-toast-lines` | most lines shown, then an ellipsis | 2 (Levi 2026-10-10) |

## Dismiss (floating only)

| Token | Use | Shipped (Figma) |
|---|---|---|
| `--sc-size-toast-dismiss` | circle diameter | = `space.32` (32px) |
| `--sc-radius-toast-dismiss` | circle | = `radius.pill` |
| `--sc-size-toast-dismiss-slop` | hit slop to a 44px target | = `space.micro.6` |
| `--sc-size-toast-dismiss-offset-block` | rise above the plate's top edge | = `space.micro.18` (Figma top -18) |
| `--sc-size-toast-dismiss-offset-inline` | overhang past the end edge | = `space.20` (Figma 19 / 20) |
| `--sc-color-toast-dismiss-surface` | ground at rest | = `surface.raised` |
| `--sc-color-toast-dismiss-hover` | ground on hover and press | = `toast.dismiss.ink` (not in Figma; Levi 2026-10-10: invert) |
| `--sc-color-toast-dismiss-ink-hover` | x on hover and press | = `toast.dismiss.surface` |
| `--sc-size-toast-dismiss-icon` | x | = `size.icon.sm` (16px) |
| `--sc-color-toast-dismiss-ink` | x | light `brand.accent` (Figma); dark `teal.200` |
| `--sc-color-toast-dismiss-ink-disabled` | x when disabled | = `text.disabled` |

States: default, hover (inverted: accent ground, plate-coloured x), focus (the shared focus ring), active (inverted, plus the shared press scale), disabled (flat: text.disabled x, no hover, no press). Focus ring, press scale and press timing are the shared `--sc-border-*-focus` and `--sc-motion-press-*`.

## Motion (floating only)

| Token | Use | Shipped |
|---|---|---|
| `--sc-motion-toast-travel-duration` / `-easing` | enter and exit | = `motion.reveal` (200ms quint-out) |
| `--sc-size-toast-lift` | rise on enter, fall on exit | = `space.8` |
| `--sc-motion-toast-hold` | time before it dismisses itself (read in JS) | 6000ms |

Only opacity and transform transition; the shadow snaps (tokens:verify rule 6). Reduced motion drops the rise and the press; the fade stays, or is instant where the SCDS reset is loaded (it shortens every transition).

## Contrast (verify-contrast)

- FILL_PAIRS (AA 4.5): `toast.text` on `toast.surface`.
- GRAPHIC_PAIRS (WCAG 1.4.11, 3:1): `toast.icon` on each badge fill; `toast.dismiss.ink` on the dismiss ground at rest, and `toast.dismiss.inkHover` on the hover ground. Figma's warmGray.50 glyph and teal.500 x fall under 3:1 on the dark grounds, so dark takes `dark.well` and `teal.200`.

## Forced colors

Fills and the shadow drop. The plate and the badge draw a CanvasText edge, the dismiss button a ButtonBorder edge; the glyph is CanvasText, the x ButtonText (GrayText disabled), the focus ring Highlight.

## ARIA

`role="alert"` for error and warning, `role="status"` for info and success, `aria-atomic="true"`. The badge is `aria-hidden`; a visually hidden tone word leads the message. The dismiss button is a native `<button>` named by `dismissLabel`.
