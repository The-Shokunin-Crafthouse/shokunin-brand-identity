# Expression levels

Approved by Levi on 2026-11-25 (studio-memory ADR-195, learning #396). Four named levels set how loud an SCDS surface may be. Every value is an existing token from `public/tokens.css`; this file adds no tokens. Millisecond figures are the current token values, read 2026-11-25.

A surface declares its level before it is styled. sc-artifact-scds and every Shokunin-branded build read this file.

## Rules for every level

- Two faces at every level: Neue Haas Grotesk (display and text) and Cascadia Mono. No level adds a face.
- A surface declares one level. Whisper text can appear inside any level.
- A piece moves one level at a time. A quiet tool never jumps to a loud hero on the same screen.
- Going up a level may add scale, contrast, motion and color (ADR-195). Whisper and quiet animate only on state change.
- Reduced motion drops every level to its quiet motion.
- No borders, no left-edge stripes, nothing from the slop blocklist, at any level.

## The four levels

### Whisper
- **Use for:** labels, chrome, tooltips, metadata, captions.
- **Type:** `label-chrome` (11), `label-ui` (12), `caption` (13), `mono-chrome` (11). Nothing above 13.
- **Color:** text secondary and tertiary on the current surface. No accent.
- **Motion:** `hover` and `reveal` only (200ms, ease-out).
- **Density:** tightest spacing steps.

### Quiet
- **Use for:** tools and tuners, docs, client portal screens, settings.
- **Type:** `body-dense` (14), `body-default` (16), up to `title-card` (24).
- **Color:** neutrals. Accent only as signal: focus, selected state, status.
- **Motion:** `press` (160ms) and `hover` (200ms) on state change. No entrances.
- **Density:** dense, working screens.

### Standard
- **Use for:** decks, dashboards, case-study pages, Deks.
- **Type:** adds `body-lead` (20), `title-section` (32), `display-xs` (32), `display-sm` (44).
- **Color:** neutrals plus `brand-accent` as one point of emphasis per view.
- **Motion:** adds `mode` and `cut` transitions (380ms, in-out). One `entrance` per view.
- **Density:** medium. Room around each idea.

### Loud
- **Use for:** launch pages, heroes, covers, social images.
- **Type:** adds `display-md` (60), `display-lg` (84), `display-xl` (120). The 200px off-scale size only by written exception.
- **Color:** accent as fill (`brand-accent-fill`, `brand-accent-deep`), plus the atmosphere colors (river, lapis, indigo, celadon), which SCDS already uses as the canvas-light wash behind the mark.
- **Motion:** adds `entrance` (720ms, cinematic easing) and scroll-driven scenes, as the project's motion philosophy allows.
- **Density:** sparse. Negative space carries the piece (ma).

## The loud exception to Principle 4

Principle 4 in `sc-brand-system-spec.md` allows no accent color for visual interest alone. Levi approved one written exception (2026-11-25): a loud surface may use the accent as a fill (`brand-accent-fill`, `brand-accent-deep`) and the atmosphere wash (river, lapis, indigo, celadon). Every other level keeps the accent as a signal only.
