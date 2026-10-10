# Toast · token consumption

Spec ref: §2 Tier 3 · 3.11 (was Alert). 2026-10-08: Alert folds into Toast (Levi). Figma: library `0zVoxaLJQkjHENYJlQk1VT`, page Toast `24:7`, set `9:897`. Every role token ships equal to the Figma Toast value (2026-10-10) and aliases the shared token Figma binds, so a tune never moves a sibling (CONTEXT finding 5). Levi's sc-tune record decides the final values.

## Plate

| Token | Use | Shipped (Figma) |
|---|---|---|
| `--sc-color-toast-surface` | plate fill | = `surface.raised` (color/surface/raised) |
| `--sc-radius-toast-plate` | capsule corner | = `radius.pill` (radius/pill) |
| `--sc-space-component-padding-block-toast` | top and bottom | = `layout.inset.md` (24px) |
| `--sc-space-component-padding-inline-toast-start` | before the badge | = `layout.inset.sm` (16px) |
| `--sc-space-component-padding-inline-toast-end` | after the dismiss | = `layout.inset.lg` (48px) |
| `--sc-space-component-gap-toast` | badge, message, dismiss | = `space.12` (space/12) |
| `--sc-size-toast-width` | floating width | 380px (fixed width, height hugs) |
| `--sc-shadow-toast-plate` | floating shadow; inline draws none | elevation/2: 0 2 8 0 ink 10%, 0 1 0 0 ink 4% |

The shadow is lit from the top, not the system top left, so `verify-light` names `shadow.toast.plate` as an exemption until Levi's record re-lights or keeps it. The lab seeds concept A from the Tooltip plate (top left).

## Badge and message

| Token | Use | Shipped (Figma) |
|---|---|---|
| `--sc-size-toast-badge` | badge diameter | 50px |
| `--sc-radius-toast-badge` | circle | = `radius.pill` (radius/circle) |
| `--sc-color-toast-badge-success` | success fill | = `status.success` (status/success/light) |
| `--sc-color-toast-badge-error` | error fill | = `status.error`. **Deviation:** Figma fills Error with status/warning/light. Open with Levi |
| `--sc-color-toast-badge-warning` | warning fill | = `status.warning` (no Figma variant; from Alert) |
| `--sc-color-toast-badge-info` | info fill | = `status.info` (status/info/light) |
| `--sc-size-toast-icon` | glyph | = `space.20` (20px) |
| `--sc-color-toast-icon` | glyph ink | light `warmGray.50` (Figma); dark `dark.well` |
| `--sc-color-toast-text` | message ink | = `text.primary` |
| `--sc-font-text-toast-message-*` | message type | = `body.default` (16 / 150%) |

## Dismiss (floating only)

| Token | Use | Shipped (Figma) |
|---|---|---|
| `--sc-size-toast-dismiss` | circle diameter | = `space.32` (32px) |
| `--sc-radius-toast-dismiss` | circle | = `radius.pill` |
| `--sc-size-toast-dismiss-slop` | hit slop to a 44px target | = `space.micro.6` |
| `--sc-color-toast-dismiss-surface` | ground at rest | = `surface.raised` |
| `--sc-color-toast-dismiss-hover` | ground on hover and press | white light, `dark.raised2` dark (not in Figma) |
| `--sc-size-toast-dismiss-icon` | x | = `size.icon.sm` (16px) |
| `--sc-color-toast-dismiss-ink` | x | light `brand.accent` (Figma); dark `teal.200` |
| `--sc-color-toast-dismiss-ink-disabled` | x when disabled | = `text.disabled` |

States: default, hover (lighter ground), focus (the shared focus ring), active (lighter ground and the shared press scale), disabled (flat: text.disabled x, no hover, no press). Focus ring, press scale and press timing are the shared `--sc-border-*-focus` and `--sc-motion-press-*`.

## Motion (floating only)

| Token | Use | Shipped |
|---|---|---|
| `--sc-motion-toast-travel-duration` / `-easing` | enter and exit | = `motion.reveal` (200ms quint-out) |
| `--sc-size-toast-lift` | rise on enter, fall on exit | = `space.8` |
| `--sc-motion-toast-hold` | time before it dismisses itself (read in JS) | 6000ms |

Only opacity and transform transition; the shadow snaps (tokens:verify rule 6). Reduced motion keeps the fade and drops the rise and the press.

## Contrast (verify-contrast)

- FILL_PAIRS (AA 4.5): `toast.text` on `toast.surface`.
- GRAPHIC_PAIRS (WCAG 1.4.11, 3:1): `toast.icon` on each badge fill; `toast.dismiss.ink` on the dismiss ground at rest and on hover. Figma's warmGray.50 glyph and teal.500 x fall under 3:1 on the dark grounds, so dark takes `dark.well` and `teal.200`.

## Forced colors

Fills and the shadow drop. The plate and the badge draw a CanvasText edge, the dismiss button a ButtonBorder edge; the glyph is CanvasText, the x ButtonText (GrayText disabled), the focus ring Highlight.

## ARIA

`role="alert"` for error and warning, `role="status"` for info and success, `aria-atomic="true"`. The badge is `aria-hidden`; a visually hidden tone word leads the message. The dismiss button is a native `<button>` named by `dismissLabel`.
