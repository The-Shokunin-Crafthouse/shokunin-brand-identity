# StatusPill · token consumption

Spec ref: §2 Tier 3 · 3.2 (was Badge). 2026-10-08: Badge and Pill fold into StatusPill (Levi). Height, gap, radius and label from the library StatusPill set; padding 12px by 4px (Levi).

## API

| Prop | Values | Default |
|---|---|---|
| `tone` | progress, success, warning, error, info, neutral, live | neutral |
| `emphasis` | filled, outline | filled |
| `glow` | boolean: the whole pill glows in its hue and the glow breathes | true for progress and live |
| `icon` | a Phosphor glyph, rendered bold | none |

The live tone sets its label in capitals (LIVE). The neutral tone (planned) has no fill in either emphasis: a dashed edge in its text colour.

## Shared

| Token | Use |
|---|---|
| `--sc-space-component-padding-inline-status-pill` | inline padding, both sides (12px) |
| `--sc-space-component-padding-block-status-pill` | block padding (4px; a 24.5px pill) |
| `--sc-space-component-gap-status-pill` | glyph to label (6px) |
| `--sc-radius-status-pill` | capsule (radius.pill) |
| `--sc-border-width-default` | outline edge, drawn inside (no size change) |
| `--sc-font-text-label-chrome-*` | label |
| `--sc-size-status-pill-icon` | glyph (12px) |

## Filled (role tokens; each pair is a verify-contrast FILL_PAIRS claim)

| Tone | Fill | Label |
|---|---|---|
| progress | signal.progress | signal.onProgress |
| success | status.success-ink | text-on-inverse |
| warning | status.warning | text-on-inverse |
| error | status.error | text-on-inverse |
| info | status.info | text-on-inverse |
| live | signal.live | text-on-inverse |

## Outline

The hue on the edge, the label on the hue's AA ink: success-ink, warning-ink, status.error, info-ink. Progress and live have no AA ink, so their label is text.primary (edges border.strong and signal.live).

## Neutral (planned)

No fill. Label text.secondary; a dashed edge in the same colour, drawn as an SVG capsule sized to the pill (CSS cannot set a dash length).

| Token | Use |
|---|---|
| `--sc-size-status-pill-dash` | dash (3px) |
| `--sc-size-status-pill-dash-gap` | gap (3px) |
| `--sc-size-status-pill-dash-width` | stroke (2px), inside the pill |

## Glow

| Token | Use |
|---|---|
| `--sc-size-status-pill-glow` | blur of the halo around the pill (8px) |
| `--sc-motion-status-pill-pulse-duration` | half a breath (720ms, alternates) |
| `--sc-motion-status-pill-pulse-easing` | inOut |
| `--sc-motion-status-pill-pulse-from` | glow opacity at the low point (0.25) |

The halo takes the fill (filled), the edge (outline) or the text colour (neutral). It is an outer shadow on a pseudo-element, so only its opacity animates. Reduced motion holds it lit and still. Forced colors: every pill draws a CanvasText edge, a glowing pill doubles it, and the glow and the dashes go.
