# PlusSkeleton · token consumption

Brand element 2g. Composes `PlusField art="uskel"`.

| Part | Token | Rationale |
|---|---|---|
| Ground | `--sc-color-surface-raised` (default `surface`) | Matches the card it stands in for. |
| Marks | `--sc-color-text-primary`, 16% at rest, up to 76% under the sweep | Faint enough to read as "not loaded yet". |
| Height | `calc(--sc-space-layout-stack-xl × 3)` (240) | The drawn shapes end at 204. |
| Corners | `--sc-radius-surface` | Same as Card. |

## Motion

The sweep travels at 240 units per second on the shared frame loop; paused offscreen; at rest under `prefers-reduced-motion`.

## Semantics

`aria-busy="true"` on the wrapper. Optional visually hidden `role="status"` with `label`.
