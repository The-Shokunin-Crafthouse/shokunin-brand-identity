# Sprint: physical-controls
Stage: 03-build
Status: Gate 1 picked 2026-10-07 (1B, 2C, 3B, 4B, 5A; see decisions.md); Phase 0 done (feat/physical-controls-2); Stepper applied; Slider and Input applied (feat/physical-controls-3); Tier 1 done; Card applied (feat/physical-controls-4); Tooltip applied (feat/physical-controls-5); StatusPill replaces Badge and Pill (feat/physical-controls-6); Avatar stays flat (feat/physical-controls-7); Alert folded into Toast (2026-10-08); Toast applied (feat/physical-controls-9), the last Tier 2 component; **sprint closed 2026-10-10** (feat/physical-controls-10): Evaluator report `output/evaluator-report.md` (9 pass, 5 logged gap, 2 fail, 1 not run; the spring fallback fail fixed in the close, the Slider thumb contrast fail open for Levi); NavBar (Tier 3) carried to the next sprint (Levi)
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
| Button secondary | Outline pill, `border.strong` (3.10:1 on page), teal label on hover | Drams 036 family | Keep the outline (pick 2 C). Inherits the Button role tokens | inherits `press` | Keep |
| Button tertiary | Text ghost, `accentDeep` label | Drams 036 family | Keep flat: a ghost is text, not an object (directive 1). Inherits role tokens and sound | inherits `press` | Keep |
| Switch | Physical: the Drams Standard Switch repaint, lit from the top. Record 2026-10-07-1539 concept B applied: 40 × 22, 15px knob, spring travel (600ms, 3% overshoot), stretch 1.06, squash 0.15, press lean 0.12, darker dark floor and lighter dark knob. On-track teal.500 2.99:1 (pick 5 A, logged gap) | Drams 001 Standard Switch (#1); motion kabarza elastic toggles | Done. Exempt from the top-left re-light. Glyphs optional | `toggle`, Drams 004 | Done |
| SegmentedControl | Physical since record 2026-10-07-1645 A: recessed track (top-left), key indicator (Button key lift and face), spring travel 600ms with 3% overshoot, stretch 0.45, squash 0.2, lean 0.15. Gaps: no `:active` on segments; padding still on shared tokens | Drams 045 Three-Way Slide Switch (#7) | Done (material and motion). Open: `:active` press, forced-colors edge | `select`, Drams 001 | 1 |
| Stepper | Physical since record 2026-10-07-1847 A: ± are the Button key (rest, hover and press alias the Button tokens), recessed pill lit from the top left, flat numeral in a two-digit readout (keys never move 0 to 99), readout roll (1 height, stretch 0.45, 1062ms spring), ± press scale 0.85 on top of the key's, gap role token 8px. Disabled dims to 0.6 and goes flat (Levi) | Drams 016 Detent Knob; ± as Drams 036 keys (#8) | Done | `tick`, Drams 037 | Done |
| Slider (was ProgressIndicator bar, interactive) | Physical since record 2026-10-07-2207 A: recessed track (top-left), a 16px thumb (15px rounded to the ladder 2026-10-08) with the Switch knob's colours at 135deg and the Button key lift (aliased), seek on a 720ms spring (1062ms rounded to motion.duration.orchestrated 2026-10-08) with stretch 0.45, drag trails at 200ms, press scale 0.985, `slide` sound on keyboard steps. Figma set `524:21`. Open (Evaluator 2026-10-10): in light mode the thumb reads 2.39:1 on the track (rim top) and 1.33:1 on the page, under 3:1; dark clears (3.28:1) | #5 Standard Volume, #12 Dynamic Slider | Done; contrast gap open (Levi's call) | `slide`, Drams 009 | Done |
| ProgressIndicator bar, circular, step | Flat track and fill; step dots with border. The deprecated `interactive` prop and the two interactive-only tokens were removed 2026-10-08 | #3 Line Volume, #4 Volume Visible Track | Keep flat (Levi, 2026-10-07): a static meter is read, not touched (directive 1) | none | Keep |
| Input | Levi's filled-field reference, record 2026-10-07-2237 applied: tinted box (white 46% light, lighter than the page; white 15% dark), no rule, 48px, 8px corner, title above and left-aligned with optional subcopy, icon / prefix / suffix / clear / trailing slots (Phosphor bold), focus ring on the box, hairline error edge. Figma `TextField` `9:487` re-seated, `State=Error` `528:95` | Levi's reference sheet | Done. Box under 3:1 on page (gap accepted by Levi). `surface="raised"` takes a transparent ink-7% fill at the same contrast (2026-10-08) | none | Done |
| Card | Record 2026-10-08-0921 applied (Levi: flat plus three glass levels in two tones, 14 with the theme). `flat` = surface.floating, no border, no shadow. `glass` `level` clear / frosted (his Figma Glass: light -45deg 30%, refraction 65, depth 68, dispersion 0, frost 9, splay 57) / thick, `tone` light (lightens) or dark (darkens); frost, saturation, tint, top-left rim, a subtle floating shade and a text halo in CSS; edge refraction as a per-card SVG displacement on the backdrop (Chromium; Safari and Firefox keep the rest). Opaque flat fallback under reduced transparency, more contrast and no backdrop-filter; forced colors draw an edge. Figma page `535:2`, set `535:43` (14 variants, native Glass) | Levi's Figma Glass effect | Done. Glass tone defaults to auto (follows the theme), a rule a card breaks when its backdrop already gives the text contrast (2026-10-08). Flat hover one step lighter, Button press scale | none | Done |
| Tooltip | Record 2026-10-08-2007 A applied (Levi: keep A only, glass dropped): a raised plate, white in light and the dark key in dark, drop shadow only (2px 2px 6px warm gray 50% / 3px 3px 7px black 50%) falling under the bubble and an 8px arrow with 2px rounded tip and fillets as one shape, 4px corner, 24px above the trigger; grows out of the trigger point on a 720ms spring (3% overshoot), stretch 2, squash 2, and shrinks back into it on close; an interrupted run hands its pose on. Forced colors draw an edge and the arrow. Figma page `546:2`, set `546:23` (Lines x Theme, 4 variants) | none (floating plate) | Done | `reveal`, Drams 031 (0.65x, 0.2, baked) | Done |
| StatusPill (was Badge; Pill folded in) | Badge and Pill deleted (Levi 2026-10-08); StatusPill is the one status component. Record 2026-10-08-2239 applied: tone (progress, success, warning, error, info, neutral, live) x emphasis (filled, outline), the product's own label, optional glyph; 12 x 4px padding, 25px capsule; filled pairs AA in both modes (verify-contrast FILL_PAIRS); live and in-progress pills glow, the whole pill, pulsing 0.25 to 1 over 720ms (`glow={false}` turns it off); LIVE in capitals; planned (neutral) is a 2px dashed 3 / 3 edge in its text colour, no fill, as an even loop. Forced colors draw every edge; reduced motion holds the glow still. Figma page `24:5`, set `553:286` (56 variants) | Drams LED Switch (#9), taken as the glow, not a dot (Levi) | Done | none | Done |
| Avatar | Flat (Levi, 2026-10-08: keep this one flat). Role tokens `color.avatar.ground` (= surface.sunk) and `radius.avatar` (= radius.pill); forced colors draw a 1px edge over the image. The recessed ring was built for the lab and removed before tuning. Lab `?c=Avatar` kept. Figma page `556:1729`, set `556:1738` (4 sizes, Initials property) | none (recessed porthole) | Keep flat: an avatar is read, not touched (directive 1) | none | Done |
| Toast (Alert folded in, 2026-10-08) | Built 2026-10-10 (feat/physical-controls-9): role tokens equal to the Figma Toast (set `9:897`), tone (success, error, warning, info) x placement (inline, the Alert replacement; floating, shadow and dismiss, auto-dismiss). Alert removed. Record Toast 2026-10-10-1534 applied (plate shadow top left); 2 lines max, 14px, 16px block padding, corner dismiss inverting on hover and press, flat or glass, outline (bold) or fill glyphs; error is error red. Figma set `9:897` synced: Tone x Glyph x Placement x Surface, 32 variants, Toast role variables bound | none (a capsule plate; no LED, Levi) | Done | none: an unprompted sound is intrusive | Done |
| NavBar | Flat chrome, colour-only hover. Gaps: links have no styled `:focus-visible`; `aria-current` is teal.500 text, 2.99:1 (fails AA) | Drams 036 keys | Active item as a pressed key; bar stays flat. Focus ring and `accentInk` current item landed 2026-10-07 | none | 3: carried to the next sprint (Levi, 2026-10-10: close this sprint first) |
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

**Answered 2026-10-07:** 1 B (top left), 2 C (keep the outline), 3 B (dark keys, faint highlight), 4 B (Tier 1 + 2), 5 A (keep teal.500, logged gap). Static meters stay flat. Badge and NavBar AA fixed ahead of their tier. `shadow.control.bevel` retired; `raised` held for Studio PM's RunButton.

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
- Re-light the Button to the picked source. The Switch is exempt: it stays the Drams repaint, lit from the top (Levi, 2026-10-07).
- `forced-colors` border fallback for every material.
- Figma: effect styles `shadow/material/*` (light and dark), variables for the face shades.

### Phase 1: Tier 1 components
- SegmentedControl, Stepper, Slider (split from ProgressIndicator's interactive bar), Input.
- Each gets an sc-tune record before code: material values, press motion (spring or bezier), and its sound role (SegmentedControl and Stepper keep theirs; Slider gets a sound only if Levi picks one).
- Figma masters follow in the same change.

### Phase 2 (in this sprint, pick 4 B): Tier 2
- Card plate and well, Tooltip, Badge LED, Avatar, Alert. Button secondary keeps its outline (pick 2 C).

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
- [x] Every material value is a token, and its description names the Drams source and scale factor. Logged gap: Card glass and Input cite Levi's references, not Drams; `shadow.control.key` names Drams 036 without a factor
- [x] One light source: every shade falls the same way, every highlight sits on the same side (screenshot all controls side by side). Known exception: the Switch, lit from the top (decisions 2026-10-07)
- [x] All interactive states present (default, hover, focus, active, disabled), and disabled is flat. Logged gap: SegmentedControl has no `:active` (its row's open item)
- [x] Light and dark mode both verified at 5× zoom
- [x] `forced-colors: active` keeps every control's edge (emulate in Chrome DevTools)
- [ ] Non-text contrast: each control's boundary or its state cue reaches 3:1 against its ground (WCAG 1.4.11), or the gap is logged. Open: the Slider thumb in light mode (2.39:1 on the track), unlogged until 2026-10-10; Levi's call
- [x] `prefers-reduced-motion` removes press scale and slides; the state still reads
- [x] No `box-shadow` transition on a control that can appear 10+ times on one page
- [x] Every component has an sc-tune record, and the build matches the picked concept. Logged: Avatar has none (kept flat); Slider ships 16px / 720ms, rounded from its record (Levi 2026-10-08)
- [ ] Figma masters match code (screenshot both). Not run at close: the Figma MCP needed authentication in the Evaluator's session; each apply entry carries its own readback
- [x] `tokens:verify`, `tokens:map:check`, `tokens:swift:check` and `npm run build` exit 0
- [ ] Chrome, Firefox and Safari checked; `linear()` easings need Safari 17.2+, so a spring keeps a bezier fallback. Fallback built at close (tokens-to-css `@supports`, 2026-10-10); Chromium only, Firefox and Safari not run
