# Toast spec, read from the Figma library (2026-10-08)

Source: library 0zVoxaLJQkjHENYJlQk1VT, page Toast `24:7`, set **Toast** `9:897` (Tone: Success, Error, Info). Description: transient feedback message, auto-dismissing; for confirmations and non-blocking errors; never a required action inside a Toast.

Levi, 2026-10-08: Alert is not wanted as an inline banner; **fold Alert into Toast** (one notification component). Code has no Toast yet. Alert role tokens on `feat/physical-controls-8` (never on main) are superseded by this.

## Tone=Success `9:...` (380 x 98, width fixed, height hugs)
- Container: horizontal auto layout, counter-axis centred. Padding top/bottom 24 (`space/layout/inset/md`), left 16 (`inset/sm`), right 48 (`inset/lg`). Gap 12 (`space/12`). Corner `radius/pill` (capsule). Fill `color/surface/raised` (#F1EFEB light). Stroke weight bound to `border/width/default` (no stroke paint). Effect style `elevation/2`: drop shadow 0 2 8 0 ink 10%, plus 0 1 0 0 ink 4% (lit from the top, not the system top left).
- Badge: 50 x 50 circle (`radius/circle`), fill per tone: Success `color/status/success/light` (#2F855A), Error `color/status/warning/light` (#C2410C, the warning hue, not status.error), Info `color/status/info/light` (#2D5AD8). Holds a 20px icon in `color/warmGray/50`: Success `Icon/check-circle` (1.5 stroke), Error `Icon/warning`, Info `Icon/info` (filled).
- Message: text style `font/text/body/default` (Haas Grot Text, 16 / 150%), `color/text/primary`. No title in Figma.
- Dismiss: 32 x 32 circle on `color/surface/raised`, `Icon/x` 16px in `color/brand/accent`.

## Folding Alert in (to build)
- Tones: success, error, info, plus warning (Alert had it). Roles from Alert: `alert` for error and warning, `status` for info and success.
- Two placements: floating (the Figma Toast: shadow, dismiss, auto-dismiss) and inline (in flow, replaces Alert; persistent).
- Role tokens first, equal to the Figma values; lab entry; then Levi tunes. Alert component, docs page 3.11, specimen block, package export and lab entry are removed (no studio repo imports Alert).
