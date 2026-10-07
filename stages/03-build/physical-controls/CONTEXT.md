# Sprint: physical-controls
Stage: 03-build
Status: drafting (Gate 1 picks open, see "Gate 1 picks")
---

One sentence: take SCDS from a flat methodology to a physical one, where everything you touch is an object under one light, and everything you read stays flat.

Origin: Levi, 2026-10-07. He does not want a flat UI methodology; he likes physical rendering. Already shipped on `feat/drams-ui-sounds` / `feat/physical-controls`: the Switch (Drams Standard Switch), the Button primary (Drams OP-1 Keys), interaction sounds, and the sc-tune lab used to decide every value in this sprint.

## Inputs
| Source | File/Location | Section/Scope | Why |
|--------|--------------|---------------|-----|
| Design tokens | _config/design-system/token-map.md | color.control, color.switch, shadow.*, size.switch | The material tokens this sprint extends |
| Token source | tokens/semantic.json | shadow, color.control, color.switch | Where the material layer is authored |
| Drams mapping | stages/03-build/drams-component-mapping.md | HIGH, MEDIUM, LOW tiers | Physical reference per component |
| Decisions | decisions/decisions.md | 2026-10-07 entries (sounds, Switch, physical controls, OP-1 key, sc-tune) | What is already decided |
| Tuning lab | skills/sc-tune/SKILL.md, previews/tune/ | procedures A–D | Every value and every A/B pick is made here and recorded |
| Slop blocklist | ~/Projects/shokunin-crafthouse/studio-memory/playbooks/slop-blocklist.md | gradients, preset shadows | Guardrail: physical must be specific and sourced, never a preset |
| Code standards | ~/Projects/shokunin-crafthouse/studio-memory/playbooks/code-standards.md | all | Implementation rules |
| Figma library | 0zVoxaLJQkjHENYJlQk1VT | Toggle, Button, SegmentedControl, Stepper, Progress, Field, Card pages | Parity target |

## POV (written at Gate 1, graded by the Evaluator)
PRIMARY: Drams (1042.Studio), Dieter Rams' controls rendered for screens
TENSION: SCDS subtraction (warm-gray ground, one teal accent, no ornament)
DIRECTIVES:
1. Touch is physical, reading is flat. A control (switch, key, knob, slider, field) is an object with a lit face and a shadow; text, rules, dividers and brand marks stay flat.
2. One light source for the whole system. Every shadow and face gradient agrees on where the light is.
3. Every material value is a token traced to a Drams measurement, scaled by a stated factor. No preset shadow, no free gradient.
4. Press is felt three ways at once: the shadow softens, the object scales, and a role sound plays where one is assigned.
5. Disabled is flat. Losing the material is the unavailable signal.

## Audit: where SCDS stands

Re-audited 2026-10-07 against the Button reference (record `output/tuning/Button/2026-10-07-1418/`: own role tokens, light from the top left, hover and pressed shadows derived from rest, a sound per role). The Switch is the second reference, but untuned: it was restyled to the Drams Standard Switch before the lab existed and is lit from the top. "Today" is read from each `*.module.css` on `1a4d464`. Contrast is light mode on `surface.page` #E3DFD8.

Reference numbers: `Drams NNN` is the Drams component (and its sound file in `assets/sounds/drams/`); `#N` is the row in `stages/03-build/drams-component-mapping.md`.

| Component | Today | Drams reference | Change | Sound | Tier |
|---|---|---|---|---|---|
| Button primary, destructive | Reference. OP-1 key face (135° `control.keyShade`), `shadow.control.key` lit top left, hover/pressed derived from rest, role tokens for label/padding/icon, press-spring. Gaps: transitions `box-shadow`; no `forced-colors` edge (fill = border colour) | Drams 036 OP-1 Keys; press-spring #6 Pushin' Click | Phase 0 only: read the shared light-source tokens; `forced-colors` border; drop the `box-shadow` transition (press stays on `transform`) | `press`, Drams 029 | Done (Phase 0 touch-ups) |
| Button secondary | Outline pill, `border.strong` (3.10:1 on page), teal label on hover | Drams 036 family | Gate 1 pick 2 (raised neutral key, recessed chip, or keep). Gets its own role tokens either way | inherits `press` | 2 |
| Button tertiary | Text ghost, `accentDeep` label | Drams 036 family | Keep flat: a ghost is text, not an object (directive 1). Inherits role tokens and sound | inherits `press` | Keep |
| Switch | Physical but untuned: recessed track, six-layer knob lit from the top (`shadow.switch.*`, ×0.45), I/O glyph row. Hover, active, disabled flat. On-track teal.500 is 2.99:1 on page (pick 5) | Drams 001 Standard Switch (#1); thumb motion #2 Rollin' | Re-light to the picked source, then a full sc-tune pass like any other component; record, apply, Figma Toggle `9:858` | `toggle`, Drams 004 | 1 |
| SegmentedControl | Flat: `surface.sunk` track, `surface.floating` indicator (1.40:1 on track), no shadow, no `:active` | Drams 045 Three-Way Slide Switch (#7) | Recessed track (track material); indicator becomes a key; add `:active` press; detent spring tuned in the lab; role tokens for its padding (shares `padding-inline.*` with Button today) | `select`, Drams 001 | 1 |
| Stepper | Flat: `surface.sunk` pill (1.14:1 on page), ghost ± buttons, mono readout | Drams 016 Detent Knob; ± as Drams 036 keys (#8) | ± become small keys on a recessed pill; readout in a recessed window; disabled flat (today it dims the whole control to 0.6) | `tick`, Drams 037 | 1 |
| ProgressIndicator bar, interactive | Thumbless 4px track (`deep-sunk`, 1.80:1 on page), thickens to 6px on drag; fill teal.500 (1.66:1 on the track) | #5 Standard Volume, #12 Dynamic Slider | Recessed track; the Switch knob becomes its thumb (the thumb carries the 3:1 cue the fill misses); not in the lab registry yet | optional `tick` on keyboard steps (Levi's pick) | 1 |
| ProgressIndicator bar (static), circular, step | Flat track and fill; step dots with border | #3 Line Volume, #4 Volume Visible Track | Open: a static meter is read, not touched (directive 1). Recommend keep flat; a recessed track only if Levi wants meters to match the slider | none | Open |
| Input | Sunk fill (1.14:1 on page), bottom rule `border.default` (2.06:1 on fill, 2.34:1 on page), focus doubles the rule by inset shadow. No hover state. Transitions `box-shadow` | Drams 036 OP-1 container well (`inset -1px -1px 2px`, white `inset -2px -2px 2px`) | True recessed well; focus underline stays; add a hover state; drop the `box-shadow` transition (forms repeat inputs) | none | 1 |
| Card | Fill only; interactive hover adds `shadow.control.inset` (lit from the top); transitions `box-shadow` | Drams 036 OP-1 container | Two materials: `plate` (raised) and `well` (recessed); interactive plate presses on click; no `box-shadow` transition (cards repeat in grids) | none | 2 |
| Tooltip | Flat inverse surface, fades and lifts | none (floating plate) | Raised plate with a short lift | none | 2 |
| Badge | Flat outline chip. Text fails AA today: default teal.500 2.99:1, success 3.42:1, warning 3.90:1 on page | Drams LED Switch (#9) | LED dot that glows for live states; text moves to the status `-ink` tokens (fix stands on its own) | none | 2 |
| Avatar | Flat circle on `surface.sunk` | none (recessed porthole) | Recessed ring so the photo sits in the surface | none | 2 |
| Alert | Flat panel with a 4px status rule; not interactive (no dismiss) | LED + plate | Plate with a status LED | none: an unprompted sound is intrusive | 2 |
| NavBar | Flat chrome, colour-only hover. Gaps: links have no styled `:focus-visible`; `aria-current` is teal.500 text, 2.99:1 (fails AA) | Drams 036 keys | Active item as a pressed key; bar stays flat; add a focus ring; current item off teal.500 text | none | 3 |
| Icon | Size wrapper, no surface | none | Keep flat | none | Keep |
| Divider, HeadingRule, SectionDivider | Rules | none | Keep flat (directive 1) | none | Keep |
| TypographySpecimen | Type display | none | Keep flat | none | Keep |
| WorkingMark | Brand loader: gradient shimmer, spin and pulse; reduced motion stops both | none | Keep flat. The shimmer is the brand mark's own gradient, not a material | none | Keep |
| PlusBullet, PlusField, PlusLoader, PlusProgress, PlusSeparator, PlusSkeleton, PlusThumbnail, PlusTimeline, PlusUnderline | Brand elements, none interactive | none | Keep flat: they are read, not touched | none | Keep |

Eight findings from the audit:

1. **Four light directions ship in tokens.** Top: `shadow.switch.*` and `shadow.control.inset` (Card). Top left: `shadow.control.key` (Button). Top right: `shadow.control.raised` and `shadow.control.bevel` (superseded, still published, no SCDS consumer). Directive 2 needs one; it is Gate 1 pick 1. The legacy pair can retire once consumers are checked.
2. **Forced colors erase the material.** No component has an `@media (forced-colors: active)` rule (0 of 28). Every box-shadow drops in Windows high-contrast mode, and the Button key's border matches its fill, so it loses its edge. Each material needs a border fallback.
3. **Box-shadow transitions cost paint.** Button, Card and Input transition `box-shadow`. Card and Input repeat on one page; the Button can (toolbars, tables). Press stays on `transform`; shadow changes snap.
4. **The slop blocklist names gradients and preset shadows.** This direction uses both. Directive 3 is the guard: each value is traced to a Drams measurement and a scale factor, logged in decisions.md as a sourced exception, never a preset.
5. **Shared tokens are tuned by accident.** SegmentedControl, Input, NavBar, Tooltip and Badge read the same `padding-inline.*` / `padding-block.*` tokens the Button lab edits landed on. Each component gets role tokens before its lab session (the Button rule), so a tune never moves a sibling.
6. **Non-text contrast (1.4.11) is under 3:1 on most physical boundaries today.** Sunk grounds are 1.14:1 on page, the SegmentedControl indicator 1.40:1 on its track, the progress track 1.80:1, the Switch on-track 2.99:1. Several components carry state another way (Switch glyph, SegmentedControl label ink). The material work is the chance to clear 3:1 or log each gap.
7. **Two text AA failures outside the material scope.** Badge (default, success, warning) and NavBar `aria-current` use fill colours as text. The `-ink` tokens exist. Logged here because Badge and NavBar are in the audit; the fix does not wait for their tier.
8. **Five-state gaps.** No `:active` on SegmentedControl; no hover on Input; no styled focus on NavBar links. Each lands with its component.

## Gate 1 picks (Levi)

Each pick is made in the sc-tune lab as concepts A and B, then recorded (procedure C).

1. **Light source.** A: top (Standard Switch). B: top-left (OP-1 Keys). Recommendation: B. The OP-1 key is the more distinctive object, and a top-left light reads as a desk lamp rather than a ceiling.
2. **Button secondary.** A: a raised neutral key, smaller lift than primary. B: a recessed chip (a well). C: keep the outline. Recommendation: B. It is physical and keeps the hierarchy, because a well reads as quieter than a key.
3. **Dark-mode material.** A: light physical knobs and keys on dark ground (today's Switch). B: dark keys with a faint top-left highlight (today's Button). Recommendation: decide once for both, with pick 1.
4. **Scope.** Tier 1 only, or Tier 1 + 2 in this sprint. Recommendation: Tier 1 + the material layer in this sprint; Tier 2 next.
5. **Teal on-track contrast.** teal.500 reads 2.99:1 on the restored page, just under the 3:1 non-text line. A: keep it; knob position and the I/O glyph carry state, logged as a gap. B: a darker on-track role token (`color.switch.track.on`, teal.600 class), tuned in the lab with the Switch.

## Contract (proposed; Levi approves at Gate 1)

### Phase 0: material layer
- One light-source token set, from pick 1: offsets for shade and highlight live in one place, and every material reads them.
- Material tokens: `key`, `keyPressed`, `well`, `track`, `knob`, `plate`, `led`. Each one cites its Drams source and scale factor.
- Re-light the Button and the Switch to the picked source. The Switch then gets its first sc-tune pass (record, apply, Figma Toggle `9:858`) like any other component.
- `forced-colors` border fallback for every material.
- Figma: effect styles `shadow/material/*` (light and dark), variables for the face shades.

### Phase 1: Tier 1 components
- Switch (sc-tune pass after the re-light), SegmentedControl, Stepper, ProgressIndicator (interactive), Input.
- Each gets an sc-tune record before code: material values, press motion (spring or bezier), and its sound role (SegmentedControl and Stepper keep theirs; ProgressIndicator interactive gets a sound only if Levi picks one).
- Figma masters follow in the same change.

### Phase 2 (this sprint only if pick 4 says so): Tier 2
- Button secondary per pick 2, Card plate and well, Tooltip, Badge LED, Avatar, Alert.

### Out of scope
- Consumer properties (client portal, agency site, Studio PM) upgrading to the new SCDS. Each is its own change after the library publishes.
- Motion philosophy pick for SCDS (still open; sc-motion at Gate 1 of its own).

## Outputs
| Artifact | Location | Format |
|----------|----------|--------|
| Implemented sprint | src/ (feature branch feat/physical-controls) | Code |
| Tuning records | output/tuning/<Component>/<stamp>/ | spec.md, spec.json, snapshot/ |
| Sprint artifacts | stages/03-build/physical-controls/output/ | Notes, evaluator report |
| Figma library | 0zVoxaLJQkjHENYJlQk1VT | Masters, variables, effect styles (publish is Levi's step) |

## Audit (Claude runs this before opening the PR)
- [ ] Every material value is a token, and its description names the Drams source and scale factor
- [ ] One light source: every shade falls the same way, every highlight sits on the same side (screenshot all controls side by side)
- [ ] All interactive states present (default, hover, focus, active, disabled), and disabled is flat
- [ ] Light and dark mode both verified at 5× zoom
- [ ] `forced-colors: active` keeps every control's edge (emulate in Chrome DevTools)
- [ ] Non-text contrast: each control's boundary or its state cue reaches 3:1 against its ground (WCAG 1.4.11), or the gap is logged
- [ ] `prefers-reduced-motion` removes press scale and slides; the state still reads
- [ ] No `box-shadow` transition on a control that can appear 10+ times on one page
- [ ] Every component has an sc-tune record, and the build matches the picked concept
- [ ] Figma masters match code (screenshot both)
- [ ] `tokens:verify`, `tokens:map:check`, `tokens:swift:check` and `npm run build` exit 0
- [ ] Chrome, Firefox and Safari checked; `linear()` easings need Safari 17.2+, so a spring keeps a bezier fallback
