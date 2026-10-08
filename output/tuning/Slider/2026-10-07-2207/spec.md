# Slider tuning spec, 2026-10-07-2207

Recorded from the sc-tune lab (`previews/tune/?c=Slider`) at 2026-10-08T04:07:49.423Z. Theme: dark. 1 concept.

## Notes for the build

None.

Treat every note as a requirement. A note the build cannot meet goes back to Levi as an open question, not a guess.

## Concept A

### Tokens

| Token | Mode | Kind | Shipped | Tuned | Set as | Token match | Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `--sc-motion-slider-stretch` | both | number | `0` | `0.45` | `0.45` | raw |  |
| `--sc-motion-slider-squash` | both | number | `0` | `0` | `0` | raw |  |
| `--sc-size-slider-thumb` | both | length | `0px` | `15px` | `15px` | raw, off the token ladder |  |
| `--sc-motion-slider-thumb-press-scale` | both | number | `1` | `0.985` | `0.985` | raw |  |
| `--sc-motion-slider-travel-easing` | both | easing | `cubic-bezier(0.22, 1, 0.36, 1)` | `linear(0, 0.0218, 0.0735, 0.1426, 0.2201, 0.3001, 0.3786, 0.4531, 0.5222, 0.5…` | spring k146 c24.17 m1 | raw |  |
| `--sc-motion-slider-travel-duration` | both | time | `200ms` | `1062ms` | `1062ms` | raw, off the token ladder |  |
| `--sc-shadow-slider-track` | light | shadow | `` | `inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)` | `inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)` | raw |  |
| `--sc-color-slider-thumb-rim-top` | light | color | `` | `#FFFFFF` | `#FFFFFF` | equals --sc-p-color-utility-white (#FFFFFF) |  |
| `--sc-color-slider-thumb-rim-bottom` | light | color | `` | `#D8D1CC` | `#D8D1CC` | equals --sc-p-color-warm-gray-200 (#D8D1CC) |  |
| `--sc-color-slider-thumb-face-top` | light | color | `` | `#F1EFEB` | `#F1EFEB` | equals --sc-p-color-warm-gray-50 (#F1EFEB) |  |
| `--sc-color-slider-thumb-face-bottom` | light | color | `` | `#E3DFD8` | `#E3DFD8` | equals --sc-p-color-warm-gray-100 (#E3DFD8) |  |
| `--sc-shadow-slider-thumb` | light | shadow | `` | `2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)` | `2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)` | raw |  |
| `--sc-shadow-slider-thumb-pressed` | light | shadow | `` | `2px 2px 6px 0 rgb(100 91 79 / 0.37), -1px -1px 1px 1px rgb(253 250 246 / 0.90…` | `2px 2px 6px 0 rgb(100 91 79 / 0.37), -1px -1px 1px 1px rgb(253 250 246 / 0.90…` | raw |  |
| `--sc-shadow-slider-track` | dark | shadow | `inset 0 0 0 0 rgb(26 24 21 / 0)` | `inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)` | `inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)` | raw |  |
| `--sc-color-slider-thumb-rim-top` | dark | color | `rgb(26 24 21 / 0)` | `#EAE8E3` | `#EAE8E3` | equals --sc-p-color-dark-text-primary (#EAE8E3) |  |
| `--sc-color-slider-thumb-rim-bottom` | dark | color | `rgb(26 24 21 / 0)` | `#9A9186` | `#9A9186` | equals --sc-p-color-warm-gray-350 (#9A9186) |  |
| `--sc-color-slider-thumb-face-top` | dark | color | `rgb(26 24 21 / 0)` | `#D8D1CC` | `#D8D1CC` | equals --sc-p-color-warm-gray-200 (#D8D1CC) |  |
| `--sc-color-slider-thumb-face-bottom` | dark | color | `rgb(26 24 21 / 0)` | `#B3B1AD` | `#B3B1AD` | equals --sc-p-color-dark-text-tertiary (#B3B1AD) |  |
| `--sc-shadow-slider-thumb` | dark | shadow | `0 0 0 0 rgb(26 24 21 / 0)` | `3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)` | `3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)` | raw |  |
| `--sc-shadow-slider-thumb-pressed` | dark | shadow | `0 0 0 0 rgb(26 24 21 / 0)` | `3px 3px 7px 0 rgb(0 0 0 / 0.38), -1px -1px 1px 1px rgb(219 235 255 / 0.14), i…` | `3px 3px 7px 0 rgb(0 0 0 / 0.38), -1px -1px 1px 1px rgb(219 235 255 / 0.14), i…` | raw |  |

### Springs

- `--sc-motion-slider-travel-easing`: Framer Motion `{"type":"spring","stiffness":146,"damping":24.17,"mass":1}`; settles in 1062ms, overshoot 0%. CSS: the `linear()` value in spec.json.

### Props

| Prop | Value |
| --- | --- |
| `value` | `0.67` |
| `disabled` | `false` |
| `label` | `"Volume"` |

### Sound

- File: `drams-009-01.wav` (ships silent)
- Volume: 0.7
- Pitch: 1×
- Fires on: a keyboard step that changes the value (ships silent)

### CSS overrides

```css
/* Slider · concept A · sc-tune 2026-10-07-2207 */
:root {
  --sc-motion-slider-stretch: 0.45;
  --sc-motion-slider-squash: 0;
  --sc-size-slider-thumb: 15px;
  --sc-motion-slider-thumb-press-scale: 0.985;
  --sc-motion-slider-travel-easing: linear(0, 0.0218, 0.0735, 0.1426, 0.2201, 0.3001, 0.3786, 0.4531, 0.5222, 0.5851, 0.6416, 0.6918, 0.736, 0.7746, 0.8082, 0.8372, 0.8622, 0.8836, 0.9018, 0.9174, 0.9306, 0.9417, 0.9512, 0.9591, 0.9658, 0.9715, 0.9762, 0.9802, 0.9835, 0.9862, 0.9886, 0.9905, 0.9921, 0.9934, 0.9946, 0.9955, 0.9963, 0.9969, 0.9974, 0.9979, 0.9982, 0.9985, 0.9988, 0.999, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9998, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 1);
  --sc-motion-slider-travel-duration: 1062ms;
  --sc-shadow-slider-track: inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25);
  --sc-color-slider-thumb-rim-top: #FFFFFF;
  --sc-color-slider-thumb-rim-bottom: #D8D1CC;
  --sc-color-slider-thumb-face-top: #F1EFEB;
  --sc-color-slider-thumb-face-bottom: #E3DFD8;
  --sc-shadow-slider-thumb: 2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1);
  --sc-shadow-slider-thumb-pressed: 2px 2px 6px 0 rgb(100 91 79 / 0.37), -1px -1px 1px 1px rgb(253 250 246 / 0.90), inset 1px 1px 8px 0 rgb(255 255 255 / 0.30);
}
[data-theme="dark"] {
  --sc-shadow-slider-track: inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45);
  --sc-color-slider-thumb-rim-top: #EAE8E3;
  --sc-color-slider-thumb-rim-bottom: #9A9186;
  --sc-color-slider-thumb-face-top: #D8D1CC;
  --sc-color-slider-thumb-face-bottom: #B3B1AD;
  --sc-shadow-slider-thumb: 3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17);
  --sc-shadow-slider-thumb-pressed: 3px 3px 7px 0 rgb(0 0 0 / 0.38), -1px -1px 1px 1px rgb(219 235 255 / 0.14), inset 1px 1px 8px 0 rgb(255 255 255 / 0.06);
}
```

## Snapshot

A static build of the lab locked to this spec is in `snapshot/`. Serve it and open it:

```bash
npx vite preview --outDir output/tuning/Slider/2026-10-07-2207/snapshot
```
