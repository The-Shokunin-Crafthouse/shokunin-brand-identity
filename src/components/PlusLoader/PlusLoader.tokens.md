# PlusLoader · token consumption

Brand element 2i. Composes `PlusField art="uloader"`.

| Part | Token | Rationale |
|---|---|---|
| Ground | `--sc-color-surface-inverse` (default `surface`) | The prototype's loader sits on ink. |
| Marks | `--sc-color-text-on-inverse` | Mark colour follows the surface. |
| Size | `calc(--sc-space-layout-stack-xl × 3)` (240), square | Prototype was 220; 240 holds the 8pt grid. `max-width: 100%` keeps it inside narrow columns. |
| Corners | `--sc-radius-surface` | It is a surface, not a control. |

## Motion

2.8 s loop on the shared PlusField frame loop; paused offscreen; still under `prefers-reduced-motion`.

## Semantics

Visually hidden `role="status"` with `label`. The canvas is `aria-hidden`.
