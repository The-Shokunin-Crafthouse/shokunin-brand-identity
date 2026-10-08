# Stepper tuning spec, 2026-10-07-1847

Recorded from the sc-tune lab (`previews/tune/?c=Stepper`) at 2026-10-08T00:47:51.090Z. Theme: light. 1 concept.

## Notes for the build

None.

Treat every note as a requirement. A note the build cannot meet goes back to Levi as an open question, not a guess.

## Concept A

### Tokens

| Token | Mode | Kind | Shipped | Tuned | Set as | Token match | Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `--sc-motion-stepper-stretch` | both | number | `0` | `0.45` | `0.45` | raw |  |
| `--sc-motion-stepper-squash` | both | number | `0` | `0` | `0` | raw |  |
| `--sc-motion-stepper-roll` | both | number | `0` | `1` | `1` | raw |  |
| `--sc-motion-stepper-travel-easing` | both | text | `` | `linear(0, 0.0218, 0.0735, 0.1426, 0.2201, 0.3001, 0.3786, 0.4531, 0.5222, 0.5…` | spring k146 c24.17 m1 | raw |  |
| `--sc-motion-stepper-travel-duration` | both | text | `` | `1062ms` | `1062ms` | raw |  |
| `--sc-space-component-gap-sm` | both | length | `4px` | `8px` | `var(--sc-p-space-8)` | token --sc-p-space-8 |  |
| `--sc-motion-stepper-glyph-press-scale` | both | number | `1` | `0.85` | `0.85` | raw |  |
| `--sc-shadow-stepper-track` | light | shadow | `inset 0 0 0 0 rgb(26 24 21 / 0)` | `inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)` | `inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)` | raw |  |
| `--sc-color-stepper-key` | light | color | `rgb(26 24 21 / 0)` | `#F1EFEB` | `#F1EFEB` | equals --sc-p-color-warm-gray-50 (#F1EFEB) |  |
| `--sc-color-stepper-key-shade` | light | color | `rgb(26 24 21 / 0)` | `rgb(26 24 21 / 0.05)` | `rgb(26 24 21 / 0.05)` | raw |  |
| `--sc-shadow-stepper-key` | light | shadow | `0 0 0 0 rgb(26 24 21 / 0)` | `2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)` | `2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)` | raw |  |
| `--sc-shadow-stepper-track` | dark | shadow | `` | `inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)` | `inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)` | raw |  |
| `--sc-color-stepper-key` | dark | color | `` | `#343A41` | `#343A41` | equals --sc-p-color-dark-raised1 (#343A41) |  |
| `--sc-color-stepper-key-shade` | dark | color | `` | `rgb(26 24 21 / 0.25)` | `rgb(26 24 21 / 0.25)` | raw |  |
| `--sc-shadow-stepper-key` | dark | shadow | `` | `3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)` | `3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)` | raw |  |

### Springs

- `--sc-motion-stepper-travel-easing`: Framer Motion `{"type":"spring","stiffness":146,"damping":24.17,"mass":1}`; settles in 1062ms, overshoot 0%. CSS: the `linear()` value in spec.json.

### Props

| Prop | Value |
| --- | --- |
| `value` | `11` |
| `min` | `0` |
| `max` | `12` |
| `step` | `1` |
| `disabled` | `false` |
| `label` | `"Quantity"` |

### Sound

- File: `drams-037-01.wav` (shipped)
- Volume: 0.7
- Pitch: 1×
- Fires on: every committed step; silent at a bound

### CSS overrides

```css
/* Stepper · concept A · sc-tune 2026-10-07-1847 */
:root {
  --sc-motion-stepper-stretch: 0.45;
  --sc-motion-stepper-squash: 0;
  --sc-motion-stepper-roll: 1;
  --sc-motion-stepper-travel-easing: linear(0, 0.0218, 0.0735, 0.1426, 0.2201, 0.3001, 0.3786, 0.4531, 0.5222, 0.5851, 0.6416, 0.6918, 0.736, 0.7746, 0.8082, 0.8372, 0.8622, 0.8836, 0.9018, 0.9174, 0.9306, 0.9417, 0.9512, 0.9591, 0.9658, 0.9715, 0.9762, 0.9802, 0.9835, 0.9862, 0.9886, 0.9905, 0.9921, 0.9934, 0.9946, 0.9955, 0.9963, 0.9969, 0.9974, 0.9979, 0.9982, 0.9985, 0.9988, 0.999, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9998, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 1);
  --sc-motion-stepper-travel-duration: 1062ms;
  --sc-space-component-gap-sm: var(--sc-p-space-8);
  --sc-motion-stepper-glyph-press-scale: 0.85;
  --sc-shadow-stepper-track: inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25);
  --sc-color-stepper-key: #F1EFEB;
  --sc-color-stepper-key-shade: rgb(26 24 21 / 0.05);
  --sc-shadow-stepper-key: 2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1);
}
[data-theme="dark"] {
  --sc-shadow-stepper-track: inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45);
  --sc-color-stepper-key: #343A41;
  --sc-color-stepper-key-shade: rgb(26 24 21 / 0.25);
  --sc-shadow-stepper-key: 3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17);
}
```

## Snapshot

A static build of the lab locked to this spec is in `snapshot/`. Serve it and open it:

```bash
npx vite preview --outDir output/tuning/Stepper/2026-10-07-1847/snapshot
```
