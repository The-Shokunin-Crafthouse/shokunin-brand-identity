# SegmentedControl tuning spec, 2026-10-07-1645

Recorded from the sc-tune lab (`previews/tune/?c=SegmentedControl`) at 2026-10-07T22:45:42.696Z. Theme: light. 1 concept.

## Notes for the build

None.

Treat every note as a requirement. A note the build cannot meet goes back to Levi as an open question, not a guess.

## Concept A

### Tokens

| Token | Mode | Kind | Shipped | Tuned | Set as | Token match | Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `--sc-motion-segmented-control-stretch` | both | number | `0` | `0.45` | `0.45` | raw |  |
| `--sc-motion-segmented-control-squash` | both | number | `0` | `0.2` | `0.2` | raw |  |
| `--sc-motion-segmented-control-press-lean` | both | number | `0` | `0.15` | `0.15` | raw |  |
| `--sc-motion-segmented-control-press-lean-duration` | both | time | `160ms` | `160ms` | `160ms` | equals --sc-p-motion-duration-press |  |
| `--sc-motion-segmented-control-travel-easing` | both | easing | `cubic-bezier(0.22, 1, 0.36, 1)` | `linear(0, 0.0249, 0.0823, 0.1659, 0.2573, 0.3589, 0.4546, 0.5507, 0.6347, 0.7…` | spring k146 c17.88 m1 | raw |  |
| `--sc-motion-segmented-control-travel-duration` | both | time | `200ms` | `600ms` | `600ms` | raw, off the token ladder |  |
| `--sc-shadow-segmented-control-track` | light | shadow | `inset 0 0 0 0 rgb(26 24 21 / 0)` | `inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)` | `inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)` | raw |  |
| `--sc-shadow-segmented-control-indicator` | light | shadow | `0 0 0 0 rgb(26 24 21 / 0)` | `2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)` | `2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)` | raw |  |
| `--sc-color-segmented-control-indicator-shade` | light | color | `rgb(26 24 21 / 0)` | `rgb(26 24 21 / 0.05)` | `rgb(26 24 21 / 0.05)` | raw |  |
| `--sc-shadow-segmented-control-track` | dark | shadow | `` | `inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)` | `inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)` | raw |  |
| `--sc-shadow-segmented-control-indicator` | dark | shadow | `` | `3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)` | `3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)` | raw |  |
| `--sc-color-segmented-control-indicator-shade` | dark | color | `` | `rgb(26 24 21 / 0.25)` | `rgb(26 24 21 / 0.25)` | raw |  |

### Springs

- `--sc-motion-segmented-control-travel-easing`: Framer Motion `{"type":"spring","stiffness":146,"damping":17.88,"mass":1}`; settles in 1093ms, overshoot 3%. CSS: the `linear()` value in spec.json.

### Props

| Prop | Value |
| --- | --- |
| `value` | `"month"` |
| `size` | `"md"` |
| `disabled` | `false` |

### Sound

- File: `drams-001-01.wav` (shipped)
- Volume: 0.7
- Pitch: 1×
- Fires on: a change of selection; re-selecting is silent

### CSS overrides

```css
/* SegmentedControl · concept A · sc-tune 2026-10-07-1645 */
:root {
  --sc-motion-segmented-control-stretch: 0.45;
  --sc-motion-segmented-control-squash: 0.2;
  --sc-motion-segmented-control-press-lean: 0.15;
  --sc-motion-segmented-control-press-lean-duration: 160ms;
  --sc-motion-segmented-control-travel-easing: linear(0, 0.0249, 0.0823, 0.1659, 0.2573, 0.3589, 0.4546, 0.5507, 0.6347, 0.7141, 0.7799, 0.8393, 0.8863, 0.9268, 0.9573, 0.9822, 0.9999, 1.0133, 1.0218, 1.0273, 1.0299, 1.0305, 1.0296, 1.0277, 1.0251, 1.0223, 1.0192, 1.0163, 1.0134, 1.0109, 1.0085, 1.0065, 1.0047, 1.0033, 1.0021, 1.0012, 1.0005, 0.9999, 0.9996, 0.9993, 0.9992, 0.9991, 0.9991, 0.9991, 0.9992, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9999, 0.9999, 0.9999, 1, 1, 1, 1);
  --sc-motion-segmented-control-travel-duration: 600ms;
  --sc-shadow-segmented-control-track: inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25);
  --sc-shadow-segmented-control-indicator: 2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1);
  --sc-color-segmented-control-indicator-shade: rgb(26 24 21 / 0.05);
}
[data-theme="dark"] {
  --sc-shadow-segmented-control-track: inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45);
  --sc-shadow-segmented-control-indicator: 3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17);
  --sc-color-segmented-control-indicator-shade: rgb(26 24 21 / 0.25);
}
```

## Snapshot

A static build of the lab locked to this spec is in `snapshot/`. Serve it and open it:

```bash
npx vite preview --outDir output/tuning/SegmentedControl/2026-10-07-1645/snapshot
```
