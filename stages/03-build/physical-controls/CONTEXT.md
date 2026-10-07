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

| Component | Today | Physical reference | Recommendation | Tier |
|---|---|---|---|---|
| Switch | Physical (Drams Standard Switch), sound | Drams 001 | Done. Re-light if the light-source pick changes. | Done |
| Button primary, destructive | Physical (OP-1 key), WorkingMark loading | Drams 036 | Done. Re-light if the light-source pick changes. | Done |
| Button secondary, tertiary | Outline pill, text ghost | OP-1 key family | Levi's pick: raised neutral key, recessed chip, or keep (see Gate 1 picks) | 2 |
| SegmentedControl | Flat: sunk track, fill-only indicator | Drams 045 3-way slide switch | Recessed track (`shadow.switch.track`); the indicator becomes a key (`shadow.control.key`); detent spring tuned in sc-tune | 1 |
| Stepper | Flat: sunk pill, ghost ± buttons | Drams 016 detent knob, OP-1 keys | ± become small keys on a recessed pill; readout sits in a recessed window | 1 |
| ProgressIndicator bar + interactive | Flat track and fill; interactive is thumbless | Drams Standard Volume, Volume Visible Track | Recessed track; the interactive variant gets the Switch knob as its thumb; optional `tick` sound on keyboard steps | 1 |
| Input | Sunk fill, bottom underline on focus | OP-1 well (`inset -1px -1px 2px`, `inset -2px -2px 2px` white) | A true recessed well from the OP-1 container; focus underline stays | 1 |
| Card | Fill-only, inset on hover | OP-1 container | Two materials: `plate` (raised, resting lift) and `well` (recessed); interactive plate presses on click | 2 |
| Tooltip | Flat inverse surface | Floating plate | Raised plate with a short lift | 2 |
| Badge | Flat pill | Drams LED Switch (mapping #9) | Status badges carry an LED dot that glows for live states | 2 |
| Avatar | Flat circle | Recessed porthole | Recessed ring so the photo sits in the surface | 2 |
| Alert | Flat panel | LED + plate | Plate with a status LED; no sound (an unprompted sound is intrusive) | 2 |
| NavBar | Flat chrome | OP-1 keys | Active item as a pressed key; the bar itself stays flat | 3 |
| Divider, HeadingRule, SectionDivider, Plus* brand elements, TypographySpecimen, WorkingMark | Flat | none | Stay flat: they are read, not touched (directive 1) | Keep |

Four findings from the audit:

1. **Two light sources ship today.** The Switch knob is lit from straight above (its shadow falls down). The Button key is lit from the top left (shade down-right, highlight up-left). Side by side they disagree. Directive 2 needs one; it is Gate 1 pick 1.
2. **Forced colors erase the material.** In Windows high-contrast mode every box-shadow is dropped, so a physical control with no border loses its edge. Each material needs an `@media (forced-colors: active)` border fallback. Nothing has one yet.
3. **Box-shadow transitions cost paint.** The Button transitions `box-shadow` on hover and press. Fine for one button, expensive for a grid of keys. Press feedback should stay on `transform`, and shadow changes should happen without a transition where a page shows many controls.
4. **The slop blocklist names gradients and preset shadows.** This direction uses both. Directive 3 is the guard: each value is traced to a Drams measurement and a scale factor, logged in decisions.md as a sourced exception, never a preset.

## Gate 1 picks (Levi)

Each pick is made in the sc-tune lab as concepts A and B, then recorded (procedure C).

1. **Light source.** A: top (Standard Switch). B: top-left (OP-1 Keys). Recommendation: B. The OP-1 key is the more distinctive object, and a top-left light reads as a desk lamp rather than a ceiling.
2. **Button secondary.** A: a raised neutral key, smaller lift than primary. B: a recessed chip (a well). C: keep the outline. Recommendation: B. It is physical and keeps the hierarchy, because a well reads as quieter than a key.
3. **Dark-mode material.** A: light physical knobs and keys on dark ground (today's Switch). B: dark keys with a faint top-left highlight (today's Button). Recommendation: decide once for both, with pick 1.
4. **Scope.** Tier 1 only, or Tier 1 + 2 in this sprint. Recommendation: Tier 1 + the material layer in this sprint; Tier 2 next.

## Contract (proposed; Levi approves at Gate 1)

### Phase 0: material layer
- One light-source token set, from pick 1: offsets for shade and highlight live in one place, and every material reads them.
- Material tokens: `key`, `keyPressed`, `well`, `track`, `knob`, `plate`, `led`. Each one cites its Drams source and scale factor.
- Re-light the Switch and Button to the picked source.
- `forced-colors` border fallback for every material.
- Figma: effect styles `shadow/material/*` (light and dark), variables for the face shades.

### Phase 1: Tier 1 components
- SegmentedControl, Stepper, ProgressIndicator (bar + interactive), Input.
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
