# Drams → Shokunin Brand Identity Component Mapping

> Source: https://drams.framer.website/  
> Target: Shokunin brand identity design system · https://brand.shokunincrafthouse.com/  
> Repo: shokunin-brand-identity · `src/components/`  
> Date: 2026-07-02

Drams is a Framer component library of physical-product-aesthetic UI elements (switches, sliders, knobs, buttons) inspired by Dieter Rams / Braun. The Shokunin brand identity system is warm-gray + single-vermilion-accent, precision grotesque (NHG), 8pt scale, subtraction-first. This report maps Drams components to existing design system slots, categorized by confidence.

**Honest framing:** Drams' physical-product texture sits further from Shokunin's register than it does from most UI systems. The overlap is real but narrow. Where a match exists, it is almost always in interaction pattern or motion feel — the visual form always needs a full reskin before it touches this system.

---

## Design System Inventory (current)

The 12 component primitives in `src/components/`:

| Component | Variants / States | Notes |
|---|---|---|
| **Button** | primary, secondary, ghost, destructive · + disabled, loading | 8px radius, medium weight label, 0.985 press scale |
| **Badge** | default, success, warning, error, neutral | 3px radius (control radius), 11px medium, 0.08em tracking |
| **Card** | default, interactive, elevated | 8px radius, hairline border, elevation/2 on hover |
| **Input** | default, focus, filled, error, disabled | 3px radius, shu focus ring, label + helper/error text |
| **Alert** | info, warning, error, success | 3px accent left-rule, no tinted surface yet (Sprint backlog) |
| **Switch** | on, off, disabled | 32×18px track, 14px thumb, pill radius, shu when on |
| **Avatar** | xs/sm/md/lg · image + initials fallback | Pill radius, sunk surface ground |
| **ProgressIndicator** | bar (+ interactive), circular, step | Bar: 4px height (6px active/dragging), teal fill, min-fill floor at low values; interactive adds scrub + keyboard; Circular: 48px ring; Step: numbered dots |
| **Tooltip** | single-line, multi-line | Inverse surface (warmGray.900 in light), top-center + arrow |
| **Divider** | horizontal, vertical, with label | hairline stroke, warmGray.250 |
| **NavBar** | desktop, mobile compact | Brand mark + links + trailing slot; hamburger on mobile |
| **SegmentedControl** | one-of-N, sm/md | Pill track on sunk ground, fill-only raised selection (no border/shadow), sliding indicator |
| **Stepper** | bounded numeric ± | Pill control on sunk ground, mono numeral readout, hold-to-repeat |
| **Typography Specimen** | documentation component | Display of type scale — not a product component |

---

## HIGH — Direct functional match (reskin required, no new HTML)

The interaction pattern is identical to a current component. The Drams visual form cannot be lifted as-is — it needs a full reskin to warmGray/shu tokens — but no structural changes to JSX or component API are needed.

| # | Drams Component | Likes | → DS Target | What maps across |
|---|---|---|---|---|
| 1 | **Standard Switch** | 314 | `Switch` (on/off/disabled) | Track + thumb, binary toggle, same three states. Most restrained switch in the library. The warmth of Drams' cream palette is closer to warmGray than most DS libraries. Full reskin: warmGray track, shu fill when on, 14px thumb. |
| 2 | **Rollin' Switch** | 146 | `Switch` — thumb animation | The rolling spring feel is exactly the studio standard (springs for interactive affordances). The visual form is too physical for Shokunin but the motion curve for the thumb slide is worth extracting as a reference. |
| 3 | **Line Volume** | 66 | `ProgressIndicator` bar variant | Thin horizontal line + fill. Structurally identical to the 4px bar variant. Would need: warmGray.250 track, shu fill, lose the physical knob handle. |
| 4 | **Volume Visible Track** | 120 | `ProgressIndicator` bar variant | Track with always-visible fill level. Maps to the bar when value > 0. Cleaner reading than Line Volume at low fill percentages. |

---

## MEDIUM — Functional overlap with adaptation or a new slot

These require either a new variant on an existing component, a new component, or a JS behavior bridge. Worth considering if the DS is expanding.

| # | Drams Component | Likes | → DS Target | What's needed |
|---|---|---|---|---|
| 5 | **Standard Volume** | 54 | `ProgressIndicator` bar — interactive | Makes the static bar scrubable (draggable fill). Would add an interactive variant to `ProgressIndicator`. Needs a pointer-event layer in JSX + a new `onChange` prop. |
| 6 | **Pushin' Click Button** | 170 | `Button` press state | The spring press is the reference implementation for `motion/scale/pressButton` (0.985). Visual form is 3D and textured — incompatible with Shokunin — but the felt snap-back is the exact affordance the Button token describes. Extract the spring parameters only. |
| 7 | **3-Way Switch** | 83 | **New component** — SegmentedControl | The DS has no multi-state toggle. The Drams 3-way is physically textured but the semantic is right: one of N options, single selection. If a SegmentedControl is needed, this is the reference for the 3-state case. |
| 8 | **Plus Minus Knob** | 83 | **New component** — Stepper | No Stepper in the DS. The ± affordance is correct for numeric inputs with bounded steps. Visual form (physical knob) is entirely wrong for Shokunin; the semantic pattern (increment/decrement) is the reference. |

---

## LOW — Motion or structural inspiration only

Visual form clashes with Shokunin register. Use as motion reference or to understand an interaction pattern — nothing more.

| # | Drams Component | Nearest anchor | Note |
|---|---|---|---|
| 9 | **LED Switch** | `Switch` active indicator | The lit-dot state communicates "on" clearly. Not for adoption — too skeuomorphic — but confirms the pattern of a distinct visual signal for the on-state (which Shokunin handles via shu fill). |
| 10 | **Coloured Switch** | `Switch` — hue shift on state | Color-change between off/on. Shokunin already does this (warmGray.250 track → shu fill). Confirms the approach. |
| 11 | **Rollin' Search** | **New** — Search Input | The DS has no search. If one is added, Rollin' Search is a reference for the interaction feel (kinetic clear button, results reveal). The visual form needs full replacement with the Input component shell. |
| 12 | **Dynamic Slider** | `ProgressIndicator` bar | Adds a drag handle and live readout to the track. Reference for what an interactive bar variant should feel like — the kinetics, not the form. |
| 13 | **Dark Volume** | `ProgressIndicator` on dark surface | Confirms the pattern of inverting track/fill colors on a dark ground. Relevant if the bar variant needs a dark-mode-surface treatment. |

---

## OUT OF SCOPE — No functional match in current or planned DS

| Category | Components | Reason |
|---|---|---|
| **Product renders** | Digital Rotary Radio Player, Rotary Radio Player, Digital Clock Radio, Braun Electric Shaver, R2D2 | Full 3D product illustrations — not UI components |
| **Novelty / play** | Bouncin' Ball, Crankin' Ball, Fidget Poppin', Rollin' Ball Surprise, Pendulum, Ball Pop | No functional analog in a brand identity system |
| **Game controls** | OP-1 Keys, Joypad Controller | Entertainment input devices — no slot in the DS |
| **Over-textured switches** | Pinchin' Switch, Long Pinchin' Switch, Pinchin' Track Switch, Slurp Switch, Triple Switch, Triple Light Switch, Square Switch, I/O Switch, Concaved Switch | Physical embossing / skeuomorphic texture directly contradicts the studio's subtraction principle |
| **Decorative sliders** | Dimpled Slider, Dirty Rollin' Slider, Long Rollin' Slider, Hollin' Volume, Fingerin' Volume, Rollin' Stepper, Round Knob Slider, Square Slider, Trackin' Slider, Empty Track Volume | Too wide or too physical for the DS's 4px bar form factor |
| **Dials** | Plus Minus Knob, Round On/Off Knob, 3-Way Knob | Rotary dials have no slot in the Shokunin DS today; the ± Knob is captured above as a Stepper reference |
| **Grouped buttons** | Triple Push Buttons, Pushin' 5'ers | Multi-button clusters; the DS doesn't have a button group component |

---

## Implementation status (2026-07-23 · feat/drams-components)

The studio approved the HIGH + MEDIUM tiers (items #3–#8). All six are implemented on `feat/drams-components`:

| # | Drams Component | Status | Where |
|---|---|---|---|
| 3 | Line Volume → `ProgressIndicator` bar | **Implemented** | Bar reskinned: 4px track (`--sc-size-progress-bar-height`) on `--sc-color-surface-deep-sunk`, teal fill, min-fill floor (`max(pct%, bar-height)`) so fill never fully vanishes at low values. `src/components/ProgressIndicator/` |
| 4 | Volume Visible Track → `ProgressIndicator` bar | **Implemented** | Same min-fill treatment covers this reference directly — the two Drams components converged on one bar. |
| 5 | Standard Volume → `ProgressIndicator` bar, interactive | **Implemented** | `variant="bar" interactive onChange={fn}` — pointer-drag + click-to-seek (Pointer Events, `setPointerCapture`), keyboard slider (arrow ± step / Shift ± 5%, Home/End), 48px hit-slop, thumbless active track (4px → 6px). `src/components/ProgressIndicator/` |
| 6 | Pushin' Click Button → `Button` press-spring | **Implemented** | Two-phase CSS transition (160ms outStrong press-in, reusing the existing token; 220ms springOut release, two new tokens) approximating a k400/d25 spring without a JS animation lib. `src/components/Button/` |
| 7 | 3-Way Switch → `SegmentedControl` | **Implemented** (new component) | `role="radiogroup"`/`role="radio"`, roving tabindex, measured sliding indicator, fill-only elevation (`--sc-color-surface-floating`, no border/shadow). `src/components/SegmentedControl/` |
| 8 | Plus Minus Knob → `Stepper` | **Implemented** (new component) | Pill control on sunk ground, Phosphor Minus/Plus via the `Icon` wrapper, mono numeral `role="spinbutton"` readout, hold-to-repeat (400ms arm / 80ms interval). `src/components/Stepper/` |

New tokens added (`tokens/primitives.json` + `tokens/semantic.json`, regenerated via `node scripts/tokens-to-css.mjs`):

- `motion.duration.pressRelease` (220ms) / `motion.easing.springOut` (`cubic-bezier(0.34, 1.56, 0.64, 1)`) — primitives — plus the semantic `motion.press.release.duration` / `.easing` aliases (Button spring release phase).
- `size.progress.bar-height-active` (6px, aliases `space.micro.6`) and `size.progress.hit-slop` (22px, aliases `space.micro.22`) — semantic-only, no new primitive values needed.

SegmentedControl and Stepper needed **no new tokens** — both compose entirely from the existing semantic layer (surface/text/border/motion/space/font scales).

Both new components are registered in the site: `src/sections/ComponentSections.jsx` (`SegmentedControlPage`, `StepperPage`, and an extended `ProgressPage` with the interactive-bar demo) and `src/App.jsx` (Components nav group + hash-route table).

## Recommended confirmation order

If you want to move on any of these, lowest-risk first:

1. **Standard Switch → Switch visual reference** — use as the reference for spring thumb physics in `Switch.module.css`. No API change.
2. **Line Volume → ProgressIndicator bar** — most direct visual match; a reskin exercise only.
3. **Volume Visible Track → ProgressIndicator bar (alternate)** — compare against Line Volume and pick the track height.
4. **Pushin' Click Button → Button press feel** — extract the spring curve only; apply to `motion/press/easing` or a Framer Motion variant if Button moves to animated.
5. **Standard Volume → ProgressIndicator interactive variant** — larger lift; only if a scrubable progress bar is on the roadmap.
6. **3-Way Switch → SegmentedControl** — only if that component is being added to the DS.
