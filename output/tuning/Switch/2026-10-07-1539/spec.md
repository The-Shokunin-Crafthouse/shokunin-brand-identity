# Switch tuning spec, 2026-10-07-1539

Recorded from the sc-tune lab (`previews/tune/?c=Switch`) at 2026-10-07T21:39:07.924Z. Theme: dark. 2 concepts.

## Pick

**Concept B.** Levi's reason:

> Levi, 2026-10-07: "A is good." Dark floor darker than the page with a lighter hover (mirrors light mode); dark knob lighter and less oatmeal from existing neutral tokens.

## Notes for the build

None.

Treat every note as a requirement. A note the build cannot meet goes back to Levi as an open question, not a guess.

## Concept A

### Tokens

| Token | Mode | Kind | Shipped | Tuned | Set as | Token match | Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `--sc-motion-switch-stretch` | both | number | `0` | `0.45` | `0.45` | raw |  |
| `--sc-motion-switch-squash` | both | number | `0` | `0` | `0` | raw |  |
| `--sc-motion-switch-press-lean` | both | number | `0` | `0.83` | `0.83` | raw |  |
| `--sc-motion-switch-press-lean-duration` | both | time | `160ms` | `150ms` | `150ms` | raw, off the token ladder |  |
| `--sc-motion-switch-travel-easing` | both | easing | `cubic-bezier(0.22, 1, 0.36, 1)` | `linear(0, 0.0218, 0.0735, 0.1426, 0.2201, 0.3001, 0.3786, 0.4531, 0.5222, 0.5…` | spring k146 c24.17 m1 | raw |  |
| `--sc-motion-switch-travel-duration` | both | time | `200ms` | `1062ms` | `1062ms` | raw, off the token ladder |  |
| `--sc-color-switch-track-off` | dark | color | `#3B4249` | `#1F252C` | `var(--sc-p-color-dark-well)` | token --sc-p-color-dark-well |  |
| `--sc-color-switch-track-off-hover` | dark | color | `#343A41` | `#252B32` | `var(--sc-p-color-dark-floor)` | token --sc-p-color-dark-floor |  |
| `--sc-color-switch-thumb-rim-top` | dark | color | `#D8D1CC` | `#F1EFEB` | `var(--sc-p-color-warm-gray-50)` | token --sc-p-color-warm-gray-50 |  |
| `--sc-color-switch-thumb-face-top` | dark | color | `#C4BCB4` | `#EAE8E3` | `var(--sc-p-color-dark-text-primary)` | token --sc-p-color-dark-text-primary |  |
| `--sc-color-switch-thumb-face-bottom` | dark | color | `#B0A69C` | `#C9C7C3` | `var(--sc-p-color-dark-text-secondary)` | token --sc-p-color-dark-text-secondary |  |
| `--sc-color-switch-thumb-rim-bottom` | dark | color | `#9A9186` | `#B3B1AD` | `var(--sc-p-color-dark-text-tertiary)` | token --sc-p-color-dark-text-tertiary |  |

### Springs

- `--sc-motion-switch-travel-easing`: Framer Motion `{"type":"spring","stiffness":146,"damping":24.17,"mass":1}`; settles in 1062ms, overshoot 0%. CSS: the `linear()` value in spec.json.

### Props

| Prop | Value |
| --- | --- |
| `checked` | `false` |
| `disabled` | `false` |
| `glyphs` | `false` |
| `label` | `"Notifications"` |

### Sound

- File: `drams-004-toggle-switch-01.wav` (shipped)
- Volume: 0.7
- Pitch: 1×
- Fires on: every on/off change

### CSS overrides

```css
/* Switch · concept A · sc-tune 2026-10-07-1539 */
:root {
  --sc-motion-switch-stretch: 0.45;
  --sc-motion-switch-squash: 0;
  --sc-motion-switch-press-lean: 0.83;
  --sc-motion-switch-press-lean-duration: 150ms;
  --sc-motion-switch-travel-easing: linear(0, 0.0218, 0.0735, 0.1426, 0.2201, 0.3001, 0.3786, 0.4531, 0.5222, 0.5851, 0.6416, 0.6918, 0.736, 0.7746, 0.8082, 0.8372, 0.8622, 0.8836, 0.9018, 0.9174, 0.9306, 0.9417, 0.9512, 0.9591, 0.9658, 0.9715, 0.9762, 0.9802, 0.9835, 0.9862, 0.9886, 0.9905, 0.9921, 0.9934, 0.9946, 0.9955, 0.9963, 0.9969, 0.9974, 0.9979, 0.9982, 0.9985, 0.9988, 0.999, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9998, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 0.9999, 1);
  --sc-motion-switch-travel-duration: 1062ms;
}
[data-theme="dark"] {
  --sc-color-switch-track-off: var(--sc-p-color-dark-well);
  --sc-color-switch-track-off-hover: var(--sc-p-color-dark-floor);
  --sc-color-switch-thumb-rim-top: var(--sc-p-color-warm-gray-50);
  --sc-color-switch-thumb-face-top: var(--sc-p-color-dark-text-primary);
  --sc-color-switch-thumb-face-bottom: var(--sc-p-color-dark-text-secondary);
  --sc-color-switch-thumb-rim-bottom: var(--sc-p-color-dark-text-tertiary);
}
```

## Concept B (picked)

### Tokens

| Token | Mode | Kind | Shipped | Tuned | Set as | Token match | Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `--sc-size-switch-track-height` | both | length | `18px` | `22px` | `22px` | equals --sc-p-font-size-offscale-22 |  |
| `--sc-size-switch-track-width` | both | length | `32px` | `40px` | `40px` | raw, off the token ladder |  |
| `--sc-size-switch-thumb` | both | length | `14px` | `15px` | `15px` | raw, off the token ladder |  |
| `--sc-space-component-gap-md` | both | length | `8px` | `08px` | `08px` | equals --sc-p-space-8 |  |
| `--sc-motion-switch-stretch` | both | number | `0` | `1.06` | `1.06` | raw |  |
| `--sc-motion-switch-squash` | both | number | `0` | `0.15` | `0.15` | raw |  |
| `--sc-motion-switch-press-lean-duration` | both | time | `160ms` | `160ms` | `160ms` | equals --sc-p-motion-duration-press |  |
| `--sc-motion-switch-travel-easing` | both | easing | `cubic-bezier(0.22, 1, 0.36, 1)` | `linear(0, 0.0249, 0.0823, 0.1659, 0.2573, 0.3589, 0.4546, 0.5507, 0.6347, 0.7…` | spring k146 c17.88 m1 | raw |  |
| `--sc-motion-switch-travel-duration` | both | time | `200ms` | `600ms` | `600ms` | raw, off the token ladder |  |
| `--sc-motion-switch-press-lean` | both | number | `0` | `0.12` | `0.12` | raw |  |
| `--sc-color-switch-track-off` | dark | color | `#3B4249` | `#1F252C` | `var(--sc-p-color-dark-well)` | token --sc-p-color-dark-well |  |
| `--sc-color-switch-track-off-hover` | dark | color | `#343A41` | `#252B32` | `var(--sc-p-color-dark-floor)` | token --sc-p-color-dark-floor |  |
| `--sc-color-switch-thumb-rim-top` | dark | color | `#D8D1CC` | `#EAE8E3` | `var(--sc-p-color-dark-text-primary)` | token --sc-p-color-dark-text-primary |  |
| `--sc-color-switch-thumb-face-top` | dark | color | `#C4BCB4` | `#D8D1CC` | `var(--sc-p-color-warm-gray-200)` | token --sc-p-color-warm-gray-200 |  |
| `--sc-color-switch-thumb-face-bottom` | dark | color | `#B0A69C` | `#B3B1AD` | `var(--sc-p-color-dark-text-tertiary)` | token --sc-p-color-dark-text-tertiary |  |
| `--sc-color-switch-thumb-rim-bottom` | dark | color | `#9A9186` | `#9A9186` | `var(--sc-p-color-warm-gray-350)` | token --sc-p-color-warm-gray-350 |  |

### Springs

- `--sc-motion-switch-travel-easing`: Framer Motion `{"type":"spring","stiffness":146,"damping":17.88,"mass":1}`; settles in 1093ms, overshoot 3%. CSS: the `linear()` value in spec.json.

### Props

| Prop | Value |
| --- | --- |
| `checked` | `true` |
| `disabled` | `false` |
| `glyphs` | `false` |
| `label` | `"Notifications"` |

### Sound

- File: `drams-004-toggle-switch-01.wav` (shipped)
- Volume: 0.7
- Pitch: 1×
- Fires on: every on/off change

### CSS overrides

```css
/* Switch · concept B · sc-tune 2026-10-07-1539 */
:root {
  --sc-size-switch-track-height: 22px;
  --sc-size-switch-track-width: 40px;
  --sc-size-switch-thumb: 15px;
  --sc-space-component-gap-md: 08px;
  --sc-motion-switch-stretch: 1.06;
  --sc-motion-switch-squash: 0.15;
  --sc-motion-switch-press-lean-duration: 160ms;
  --sc-motion-switch-travel-easing: linear(0, 0.0249, 0.0823, 0.1659, 0.2573, 0.3589, 0.4546, 0.5507, 0.6347, 0.7141, 0.7799, 0.8393, 0.8863, 0.9268, 0.9573, 0.9822, 0.9999, 1.0133, 1.0218, 1.0273, 1.0299, 1.0305, 1.0296, 1.0277, 1.0251, 1.0223, 1.0192, 1.0163, 1.0134, 1.0109, 1.0085, 1.0065, 1.0047, 1.0033, 1.0021, 1.0012, 1.0005, 0.9999, 0.9996, 0.9993, 0.9992, 0.9991, 0.9991, 0.9991, 0.9992, 0.9992, 0.9993, 0.9994, 0.9995, 0.9996, 0.9997, 0.9997, 0.9998, 0.9999, 0.9999, 0.9999, 1, 1, 1, 1);
  --sc-motion-switch-travel-duration: 600ms;
  --sc-motion-switch-press-lean: 0.12;
}
[data-theme="dark"] {
  --sc-color-switch-track-off: var(--sc-p-color-dark-well);
  --sc-color-switch-track-off-hover: var(--sc-p-color-dark-floor);
  --sc-color-switch-thumb-rim-top: var(--sc-p-color-dark-text-primary);
  --sc-color-switch-thumb-face-top: var(--sc-p-color-warm-gray-200);
  --sc-color-switch-thumb-face-bottom: var(--sc-p-color-dark-text-tertiary);
  --sc-color-switch-thumb-rim-bottom: var(--sc-p-color-warm-gray-350);
}
```

## Derived geometry (concept being edited)

- `--inset`: 3.5px
- `--travel`: 18px

## Snapshot

A static build of the lab locked to this spec is in `snapshot/`. Serve it and open it:

```bash
npx vite preview --outDir output/tuning/Switch/2026-10-07-1539/snapshot
```
