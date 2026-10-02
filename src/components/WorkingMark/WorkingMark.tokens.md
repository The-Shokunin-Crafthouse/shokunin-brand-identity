# WorkingMark · token consumption

Spec ref: Studio PM `Atom/Step marker` · State=current (Figma `bfIXIo8Y0s8mTGvhmJBlu1`, node 3:4). Decision: `decisions/decisions.md` 2026-10-01 · working-mark.

New component. Every token below already existed in the semantic layer; no new tokens were added.

## Tokens

| Token | Use |
|---|---|
| `--sc-color-brand-accent` | ink while `working` |
| `--sc-color-text-on-accent` | the shimmer's highlight, mixed into the accent |
| `--sc-color-text-secondary` | ink while paused (`working={false}`) |
| `--sc-size-icon-sm` / `-md` / `-lg` | box size (16 / 24 / 32) |
| `--sc-motion-cut-easing` | each half of the pulse (in-out, symmetric) |

## Component constants

Named here because they are not tokens. Spin, pulse floor and shimmer were locked by Levi on 2026-10-02 against a live preview.

| Value | Where | Why |
|---|---|---|
| `1600ms` (`--wm-beat`) | spin and pulse period | studio-pm `motion.md` heartbeat. Promote to a `motion.*` token when a second consumer needs it. |
| 1 turn per beat, alternating direction | spin | Neighbouring loops turn opposite ways, so the scribble churns. |
| `0.8` (`--wm-pulse-floor`) | pulse | Each loop shrinks to 80% and back once per beat. 0.7 read as slower. |
| 2.5 turns per beat | shimmer sweep | Faster than the loops so it reads as light passing over them. 2 turns read as too slow. |
| `80%` (`--wm-shimmer`) | shimmer peak | Share of on-accent ink mixed into the accent at the brightest point. |
| `0.45 → 1` | shimmer gradient | The highlight ramps up over the outer part of the radius on the lit side. |
| `3200ms` | full cycle | Two beats: the shortest time after which spin, pulse and shimmer all return to their start. |
| `0.3` | stroke width (viewBox units) | Figma source stroke. Scales with the box. |
| `11` (`--wm-loops`) | phase spread | One loop per path; the delay spreads them evenly across one beat. |

## Design notes

- **Seamless.** The spin and pulse repeat every beat; the shimmer every two beats. Each loop's shimmer gradient lives in that loop's spinning coordinates, so it turns 3 times per cycle on a clockwise loop and 7 times on an anticlockwise one, starting at the angle that cancels the loop's own. Every loop is lit on the same side at the same moment.
- **Reduced motion** shows the Figma drawing at rest, flat accent, no shimmer.
- **Paused** is still and secondary ink, with no shimmer. The accent means something is acting.
- Decorative by default (`aria-hidden`). Pass `label` only when the mark is the sole carrier of the state.
- Standalone animated asset: `assets/icons/working-mark.svg` (inline `<style>` and gradient animation; honours reduced motion; `color` attribute sets the ink).
- Swift port: studio-pm `native/StudioPM/Sources/StudioPM/WorkingMark.swift` draws the same spin, pulse and sweep.
