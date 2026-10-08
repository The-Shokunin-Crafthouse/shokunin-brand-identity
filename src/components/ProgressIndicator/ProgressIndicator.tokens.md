# ProgressIndicator · token consumption

Spec ref: §2 Tier 3 · 3.10 · States: bar, circular, step.

## Tokens

| Token | Use |
|---|---|
| `--sc-size-progress-bar-height` | bar height |
| `--sc-size-progress-circular` | circle diameter |
| `--sc-size-progress-circular-stroke` | ring stroke |
| `--sc-radius-pill` | bar fill caps |
| `--sc-color-surface-deep-sunk` | bar + ring track + step dot ground |
| `--sc-color-brand-accent` | fill |
| `--sc-color-text-on-accent` | done-step numeral |
| `--sc-color-text-secondary` | resting step numeral |
| `--sc-color-text-primary` | current step numeral |
| `--sc-color-border-default` | resting step dot border + connector |
| `--sc-color-border-strong` | current step dot border |
| `--sc-border-width-default` | step dot border + connector height |
| `--sc-space-component-gap-md` | step item gap |
| `--sc-space-layout-stack-sm` | step dot diameter (reuses 16 space) |
| `--sc-space-layout-stack-md` | step connector min-width |
| `--sc-font-text-mono-chrome-*` | step numerals (chrome mono caps) |
| `--sc-motion-reveal-duration` + `-easing` | fill + transition |

## Variants × states

| Variant | States | Token notes |
|---|---|---|
| `bar` | value 0..1 | width animates via reveal duration · fill is brand accent |
| `circular` | value 0..1 | SVG stroke-dasharray with calc'd stroke ratio so the SVG viewBox decouples from the semantic size token |
| `step` | resting / done / current | dots pull color from semantic; connectors fill green-light-on-done |

## SVG ratio math

Circular indicator uses an SVG `viewBox` of `0 0 100 100` — a viewBox is unitless and not a `px` value. Real-world size flows from the container `width`/`height` (`--sc-size-progress-circular`). Stroke width is mapped from the semantic stroke token via `calc(stroke / diameter * 100)` so the ratio stays correct as either token moves.

## Reduced-motion

All progress transitions suppressed.

## Interactive bar (Drams #3/#4/#5 · Line Volume / Volume Visible Track / Standard Volume)

`<ProgressIndicator variant="bar" interactive onChange={fn} />` adds a scrubbable bar on top of the same visual bar language. The static `bar` API is unchanged — `interactive` is opt-in and defaults to `false`, so every existing consumer keeps `role="progressbar"` exactly as before.

**Interaction model**

- Pointer: pointerdown seeks to the click position and starts a drag (`setPointerCapture` keeps the drag live even if the pointer leaves the track); pointermove while captured continues seeking; pointerup/cancel ends it.
- Keyboard: `role="slider"`, focusable, Left/Down and Right/Up step by `step` (default 0.01 = 1%), Shift steps by `bigStep` (default 0.05 = 5%), Home/End jump to `min`/`max`.
- `aria-valuemin` / `aria-valuemax` / `aria-valuenow` are always percent-space (0–100) regardless of the `min`/`max` prop range, matching the static bar's existing contract.

**Five states**

| State | Trigger | Token shift |
|---|---|---|
| Default | resting | fill: `--sc-color-brand-accent` · track: `--sc-color-surface-deep-sunk` |
| Hover | `:hover` on the wrapper | fill → `--sc-color-interactive-hover` (a genuine brighten in dark mode — teal.300 vs teal.500; held in light mode where the two are close). Reused rather than adding a new hover-fill token, per the brief. |
| Focus | `:focus-visible` | ring on the **visual track**, not the hit-slop wrapper — `--sc-color-border-focus` at `--sc-border-width-focus` / `--sc-border-focus-offset` |
| Active / dragging | pointer captured | thumbless: track height `--sc-size-progress-bar-height` (4) → `--sc-size-progress-bar-height-active` (6). No handle ever renders — the track itself is the affordance. |
| Disabled | `disabled` prop | fill: `--sc-color-text-disabled` · track: `--sc-color-surface-sunk` · `cursor: not-allowed` · not focusable |

**New tokens**

| Token | Value | Judgment call |
|---|---|---|
| `--sc-size-progress-bar-height-active` | 6px (`space.micro.6`) | Track thickness while dragging. One micro-step beyond the resting 4px bar-height — thumbless, so this thickening *is* the drag affordance. |
| `--sc-size-progress-hit-slop` | 22px (`space.micro.22`) | Block padding on the interactive wrapper. **Logged judgment call:** the brief asked for a ~44px invisible hit target. 44 sits on neither the layout ladder (4·8·12·16·24·32·48·64·80·96·120) nor the micro ladder (2·6·10·14·18·22) — there's no token for it. Rather than introduce an off-ladder one-off (which the primitives file explicitly calls a bug outside the Color-page `offscale` exception), this uses `micro.22` top + bottom around the 4px track = **48px** total hit height. 48 > 44, so the guideline is met, and the value stays token-derived. |

**Min-fill (applies to both interactive and static bar)**

Fill width is `max(pct%, var(--sc-size-progress-bar-height))` instead of a bare `pct%`. At `value = 0` this means the fill still renders at the track's own height (4px, growing the corner radius into a small circle rather than disappearing) — the "always-visible fill treatment at low values" the brief asked for. **Judgment call:** chose to reuse the existing `--sc-size-progress-bar-height` token as the min-fill floor (a "radius cap" reading) rather than adding a dedicated `size.progress.min-fill` token or a fixed 2px thumbless lead-in — the track's own thickness is already the right visual unit for "the smallest a fill can read as a fill," and it stays correct automatically if bar-height ever changes.

## Interactive bar · physical thumb (physical-controls Tier 1, 2026-10-07)

The interactive bar reads its own role tokens (`--sc-*-progress-slider-*`), so a tune in sc-tune never moves the static bar, the ring, the step dots or other sunk surfaces. Every value shipped equal to the thumbless bar; the material reaches SCDS only through an sc-tune record.

| Token | Shipped | Use |
|---|---|---|
| `--sc-color-progress-slider-track` / `-track-disabled` | = surface.deepSunk / surface.sunk | track ground |
| `--sc-color-progress-slider-fill` / `-fill-hover` / `-fill-disabled` | = brand.accent / interactive.hover / text.disabled | fill; the disabled thumb is a flat `fill-disabled` disc |
| `--sc-shadow-progress-slider-track` | zero alpha | recess of the track |
| `--sc-size-progress-slider-track` | 4px (= bar-height) | track height at rest |
| `--sc-size-progress-slider-thumb` | 0px (thumbless) | thumb diameter |
| `--sc-color-progress-slider-thumb-rim-top` / `-rim-bottom` / `-face-top` / `-face-bottom` | transparent | thumb rim and face, both at 135deg (the system light) |
| `--sc-shadow-progress-slider-thumb` / `-thumb-pressed` | zero alpha | thumb lift at rest / while dragged |
| `--sc-motion-progress-slider-travel-duration` / `-easing` | = motion.reveal | fill and thumb on a seek (click, key) |
| `--sc-motion-progress-slider-drag-duration` / `-easing` | = motion.reveal | fill and thumb trailing the pointer |
| `--sc-motion-progress-slider-stretch` / `-squash` | 0 | thumb stretch with speed on a seek (`src/motion/elastic.js`) |
| `--sc-motion-progress-slider-thumb-press-scale` | 1 | thumb scale while dragged |

**Geometry.** The thumb rides inside the track: its centre runs from thumb/2 to width − thumb/2 over min..max, and the fill ends under it (`width = max(thumb/2 + (100% − thumb) × value, track)`). A pointer maps through the same inset. At 0px both reduce to the thumbless bar.

**States.** Hover brightens the fill. Dragging thickens the track to `bar-height-active`, scales the thumb and softens its lift. Disabled is flat: no recess, no lift, no face. Forced colors: the track keeps a `CanvasText` edge, the fill is `Highlight`, the thumb a solid `ButtonText` disc (`GrayText` when disabled). Reduced motion drops every transition and the press scale.

**Sound.** None shipped. The lab plays a tick on keyboard steps once Levi picks a file.
