# StatusPill · token consumption

Spec ref: §2 Tier 3 · 3.2 (was Badge). 2026-10-08: Badge and Pill fold into StatusPill (Levi). Geometry from the library StatusPill set `9:767`.

## API

| Prop | Values | Default |
|---|---|---|
| `tone` | progress, success, warning, error, info, neutral, live | neutral |
| `emphasis` | filled, outline | filled |
| `live` | boolean: an LED whose glow breathes | true for progress and live |
| `liveLabel` | spoken after the label when the LED is lit | none |
| `icon` | a Phosphor glyph, rendered bold; the LED takes its place | none |

## Shared

| Token | Use |
|---|---|
| `--sc-space-component-padding-inline-status-pill` | label-only inline padding (16px) |
| `--sc-space-component-padding-inline-status-pill-lead` | before a leading LED or glyph (8px) |
| `--sc-space-component-padding-inline-status-pill-trail` | after the label when something leads (12px) |
| `--sc-space-component-padding-block-status-pill` | block padding (2px; a 21px pill) |
| `--sc-space-component-gap-status-pill` | LED or glyph to label (6px) |
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
| neutral | surface.sunk | text.secondary |
| live | signal.live | text-on-inverse |

## Outline

The hue on the edge, the label on the hue's AA ink: success-ink, warning-ink, status.error, info-ink, text.secondary (edge border.default). Progress and live have no AA ink, so their label is text.primary (edges border.strong and signal.live).

## Live LED

| Token | Use |
|---|---|
| `--sc-size-status-pill-led` | dot (4px, the library dot) |
| `--sc-size-status-pill-led-glow` | glow halo blur (4px) |
| `--sc-motion-status-pill-pulse-duration` | half a breath (720ms, alternates) |
| `--sc-motion-status-pill-pulse-easing` | inOut |
| `--sc-motion-status-pill-pulse-from` | glow opacity at the low point (0.25) |

The LED takes the label ink; on progress it is brand.accent (the library dot). Only the glow's opacity animates. Reduced motion holds it lit and still. Forced colors: every pill draws a CanvasText edge, the LED fills CanvasText, the glow goes.
