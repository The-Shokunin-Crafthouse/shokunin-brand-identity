# Tooltip tuning spec, 2026-10-08-2007

Recorded from the sc-tune lab (`previews/tune/?c=Tooltip`) at 2026-10-09T02:07:06.166Z. Theme: light. 1 concept.

## Pick

**Concept A.** Levi's reason:

> Levi, 2026-10-08: keep A only.

## Notes for the build

None.

Treat every note as a requirement. A note the build cannot meet goes back to Levi as an open question, not a guess.

## Concept A (picked)

### Tokens

| Token | Mode | Kind | Shipped | Tuned | Set as | Token match | Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `--sc-motion-tooltip-grow-from` | both | number | `1` | `0` | `0` | raw |  |
| `--sc-size-tooltip-lift` | both | length | `4px` | `4px` | `4px` | equals --sc-p-space-4 |  |
| `--sc-motion-tooltip-stretch` | both | number | `0` | `2` | `2` | raw |  |
| `--sc-motion-tooltip-squash` | both | number | `0` | `2` | `2` | raw |  |
| `--sc-motion-tooltip-travel-easing` | both | easing | `cubic-bezier(0.22, 1, 0.36, 1)` | `linear(0, 0.0249, 0.0823, 0.1659, 0.2573, 0.3589, 0.4546, 0.5507, 0.6347, 0.7…` | spring k146 c17.88 m1 | raw |  |
| `--sc-motion-tooltip-travel-duration` | both | time | `200ms` | `720ms` | `720ms` | equals --sc-p-motion-duration-orchestrated |  |
| `--sc-radius-tooltip` | both | length | `3px` | `4px` | `4px` | equals --sc-p-space-4 |  |
| `--sc-size-tooltip-arrow` | both | length | `4px` | `8px` | `8px` | equals --sc-p-space-8 |  |
| `--sc-size-tooltip-glass-frosted-frost` | both | length | `9px` | `0px` | `0px` | equals --sc-p-radius-none |  |
| `--sc-space-layout-stack-xl` | both | length | `80px` | `80px` | `80px` | equals --sc-p-space-80 |  |
| `--sc-space-component-gap-tooltip` | both | length | `8px` | `24px` | `24px` | equals --sc-p-space-24 |  |
| `--sc-size-tooltip-arrow-tip` | both | length | `0px` | `2px` | `2px` | equals --sc-p-space-micro-2 |  |
| `--sc-size-tooltip-arrow-fillet` | both | length | `0px` | `2px` | `2px` | equals --sc-p-space-micro-2 |  |
| `--sc-color-tooltip-surface` | light | color | `#1A1815` | `#FFFFFF` | `#FFFFFF` | equals --sc-p-color-utility-white (#FFFFFF) |  |
| `--sc-color-tooltip-text` | light | color | `#F1EFEB` | `#1A1815` | `#1A1815` | equals --sc-p-color-warm-gray-800 (#1A1815) |  |
| `--sc-shadow-tooltip-plate` | light | shadow | `inset 0 0 0 0 rgb(26 24 21 / 0)` | `2px 2px 6px 0px rgb(100 91 79 / 0.50)` | `2px 2px 6px 0px rgb(100 91 79 / 0.50)` | raw |  |
| `--sc-color-tooltip-glass-tint` | light | color | `rgb(255 255 255 / 0.24)` | `rgb(255 255 255 / 0.24)` | `rgb(255 255 255 / 0.24)` | raw |  |
| `--sc-color-tooltip-surface` | dark | color | `` | `#343A41` | `#343A41` | equals --sc-p-color-dark-raised1 (#343A41) |  |
| `--sc-color-tooltip-text` | dark | color | `` | `#EAE8E3` | `#EAE8E3` | equals --sc-p-color-dark-text-primary (#EAE8E3) |  |
| `--sc-shadow-tooltip-plate` | dark | shadow | `` | `3px 3px 7px 0px rgb(0 0 0 / 0.50)` | `3px 3px 7px 0px rgb(0 0 0 / 0.50)` | raw |  |

### Springs

- `--sc-motion-tooltip-travel-easing`: Framer Motion `{"type":"spring","stiffness":146,"damping":17.88,"mass":1}`; settles in 1093ms, overshoot 3%. CSS: the `linear()` value in spec.json.

### Props

| Prop | Value |
| --- | --- |
| `show` | `"hover"` |
| `variant` | `"solid"` |
| `backdrop` | `"page (follows theme)"` |
| `multiline` | `false` |
| `content` | `"Copied to clipboard"` |
| `open` | `true` |

### Sound

- File: `drams-031-01.wav` (ships silent)
- Volume: 0.2 (SoundProvider default is 0.7)
- Pitch: 0.65×. Runtime plays at 1×; bake the pitch into the file.
- Fires on: the tooltip opens (pointer enters or focus lands on the trigger)

### CSS overrides

```css
/* Tooltip · concept A · sc-tune 2026-10-08-2007 */
:root {
  --sc-motion-tooltip-grow-from: 0;
  --sc-size-tooltip-lift: 4px;
  --sc-motion-tooltip-stretch: 2;
  --sc-motion-tooltip-squash: 2;
  --sc-motion-tooltip-travel-easing: linear(0, 0.0249, 0.0823, 0.1659, 0.2573, 0.3589, 0.4546, 0.5507, 0.6347, 0.7141, 0.7799, 0.8393, 0.8863, 0.9268, 0.9573, 0.9822, 0.9999, 1.0133, 1.0218, 1.0273, 1.0299, 1.0305, 1.0296, 1.0277, 1.0251, 1.0223, 1.0192, 1.0163, 1.0134, 1.0109, 1.0085, 1.0065, 1.0047, 1.0033, 1.0021, 1.0012, 1.0005, 0.9999, 0.9996, 0.9993, 0.9992, 0.9991, 0.9991, 0.9991, 0.9992, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9999, 0.9999, 0.9999, 1, 1, 1, 1);
  --sc-motion-tooltip-travel-duration: 720ms;
  --sc-radius-tooltip: 4px;
  --sc-size-tooltip-arrow: 8px;
  --sc-size-tooltip-glass-frosted-frost: 0px;
  --sc-space-layout-stack-xl: 80px;
  --sc-space-component-gap-tooltip: 24px;
  --sc-size-tooltip-arrow-tip: 2px;
  --sc-size-tooltip-arrow-fillet: 2px;
  --sc-color-tooltip-surface: #FFFFFF;
  --sc-color-tooltip-text: #1A1815;
  --sc-shadow-tooltip-plate: 2px 2px 6px 0px rgb(100 91 79 / 0.50);
  --sc-color-tooltip-glass-tint: rgb(255 255 255 / 0.24);
}
[data-theme="dark"] {
  --sc-color-tooltip-surface: #343A41;
  --sc-color-tooltip-text: #EAE8E3;
  --sc-shadow-tooltip-plate: 3px 3px 7px 0px rgb(0 0 0 / 0.50);
}
```

## Derived geometry (concept being edited)

- `--tip-ground`: 0px
- `--glass-refraction`: 0px
- `--glass-depth`: 0px
- `--glass-splay`: 0px

## Snapshot

A static build of the lab locked to this spec is in `snapshot/`. Serve it and open it:

```bash
npx vite preview --outDir output/tuning/Tooltip/2026-10-08-2007/snapshot
```
