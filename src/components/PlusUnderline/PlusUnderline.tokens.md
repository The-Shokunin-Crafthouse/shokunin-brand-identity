# PlusUnderline · token consumption

Brand element 2j. Composes `PlusField art="uline"`.

| Part | Token | Rationale |
|---|---|---|
| Height | `--sc-space-component-gap-lg` (12) | Two rows on a 5-unit pitch span about 8; 12 leaves the marks clear of the box edge. Inactive underlines keep this height so labels never jump. |
| Marks | `--sc-color-brand-accent` | The engine paints `uline` with `teal('active')`. Active state is one of the three teal roles. |
| Width | 100% of the tab | Sits under its own label. |

## Semantics

`aria-hidden`. The tab carries `aria-current` or `aria-selected`.

## Elastic motion

Engine `src/motion/elastic.js` (reference: kabarza's elastic toggles, instagram.com/reel/DeK0AFcIRhf). Applies to the active underline (travel from the previous tab in the same nav, tablist, radiogroup or list). Shipped, stretch, squash and lean are 0, so it moves exactly as before; tune it in sc-tune (`previews/tune/?c=PlusUnderline`), where concepts start at the reel's Balanced preset.

| Token | Shipped | Role |
| --- | --- | --- |
| `--sc-motion-plus-underline-travel-duration` / `-easing` | = `motion.reveal` (200ms, quint-out) | Travel time and curve; a spring set in the lab writes its settle time to the duration |
| `--sc-motion-plus-underline-stretch` | 0 | Extra length at peak speed |
| `--sc-motion-plus-underline-squash` | 0 | Flattening at peak speed |
| `--sc-motion-plus-underline-press-lean` / `-lean-duration` | 0 / = `motion.press.duration` | On pointer down it leans toward the pressed item and holds; release travels from that pose, dragging off springs back |

Reduced motion skips the engine.
