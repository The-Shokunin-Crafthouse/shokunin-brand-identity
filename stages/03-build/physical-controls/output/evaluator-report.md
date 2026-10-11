# Evaluator report: physical-controls sprint close

- Date: 2026-10-10
- Commit graded: `a270f23` (`feat/physical-controls-10`; tree identical to `origin/main` `166356d`)
- Model: Claude Fable 5.1 (Evaluator; fresh context, read-only on source, one round)
- Scope: Button primary/destructive, Switch, SegmentedControl, Stepper, Slider, Input, Card, Tooltip, StatusPill, Avatar, Toast. NavBar (Tier 3) not graded. Keep rows graded for directive 1 only.
- Browser evidence: Chromium via the Playwright MCP against a Vite dev server started from this worktree on port 5199 (port 5173 was held by another chat's server and `.claude/launch.json` is outside this brief's edit scope). Screenshots in the session scratchpad (`shots/*.png`), not committed (learning #28).

## Summary

| # | Line | Grade | Evidence (one line) |
|---|------|-------|---------------------|
| 1 | Every material value is a token; description names the Drams source and scale factor | LOGGED GAP | 0 raw `box-shadow`/gradient values in the 11 stylesheets or JSX; Card glass and Input well cite Levi's Figma Glass / reference sheet, not a Drams measurement; `shadow.control.key` names Drams 036 but no factor |
| 2 | One light source (Switch excepted) | PASS | `verify-light` exit 0 (28 stylesheets, 4 exemptions); every computed cast shade is `+x = +y` and every rim `-1px -1px` in both themes; 5x crops agree; Switch `0 +y` (named exception) |
| 3 | All five states; disabled flat | LOGGED GAP | SegmentedControl has no `:active` rule (CONTEXT audit row: "Open: `:active` press"); every other interactive component has hover, focus-visible, active, disabled; every disabled rule drops `box-shadow` and `background-image` |
| 4 | Light and dark verified at 5x zoom | PASS | 16 crops at `deviceScaleFactor: 5` (8 controls x 2 themes); 10 inspected: shade direction, rim, face gradient and recess render cleanly, no banding or seam |
| 5 | `forced-colors: active` keeps every control's edge | PASS | Playwright `forcedColors: 'active'`: all 11 components report a solid `outline` or `border` (table below); screenshots show every edge |
| 6 | Non-text contrast 3:1 or gap logged | FAIL | Slider thumb on its track, light mode: 2.39:1 at the white rim stop, 1.58:1 at the face; not logged, and decisions 2026-10-07 "Slider splits from ProgressIndicator" claims the thumb carries the cue. Switch on-track 2.99:1 and Input box 1.15:1 / 1.62:1 are logged |
| 7 | `prefers-reduced-motion` removes press scale and slides; state still reads | PASS | Every stylesheet has the block; under emulation the pressed Button computes `transform: none`, `transition-property: none`; all five spring engines gate on `prefersReducedMotion()` (`src/motion/elastic.js:156`) |
| 8 | No `box-shadow` transition on a 10+ control | PASS | `grep transition` over the 11 stylesheets: zero declarations name `box-shadow` or `all`; `tokens:verify` rule 6 enforces it |
| 9 | Every component has an sc-tune record; build matches the pick | LOGGED GAP | 10 records present; Avatar has none (decisions 2026-10-08 "Avatar stays flat"); Slider ships 16px / 720ms against record 2207's 15px / 1062ms (decisions 2026-10-08 "Levi's answers", item 1); computed shadows equal every record value quoted in decisions |
| 10 | Figma masters match code (screenshot both) | NOT RUN | The Figma MCP server requires authentication in this session; no readback or screenshot possible |
| 11 | `tokens:verify`, `tokens:map:check`, `tokens:swift:check`, `npm run build` exit 0 | PASS | All exit 0; also `test:scripts` 30 pass / 0 fail and `build:lib` exit 0 |
| 12 | Chrome, Firefox, Safari checked; a spring keeps a bezier fallback | FAIL | No bezier fallback exists: five `linear()` easings in `src/styles/tokens.css` (lines 573, 579, 603, 608, 614 and the dark block) with no `@supports` anywhere in `src/`; Firefox and Safari not run (Chromium only) |
| D1 | Touch is physical, reading is flat | PASS | 17 Keep stylesheets carry no `box-shadow` or gradient (WorkingMark's is the mark's own, per the audit row); Button secondary/tertiary rules add none; Avatar computes `box-shadow: none` |
| D2 | One light source for the whole system | PASS | Same evidence as line 2 |
| D3 | Every material value traced to a Drams measurement, scaled by a stated factor | LOGGED GAP | Same evidence as line 1 |
| D4 | Press felt three ways: shadow softens, object scales, sound | LOGGED GAP | Button, Stepper, Slider: all three. Switch: scale + sound, no pressed shadow (Switch frozen as the Drams repaint, decisions 2026-10-07). SegmentedControl: JS lean + sound, no scale, no shadow change (audit row "Open: `:active` press"). Card: scale only (decisions 2026-10-08 item 6) |
| D5 | Disabled is flat | PASS | Button.module.css:197-203, Switch:178-184, SegmentedControl:132-136, Stepper:93-99 and 137-139, Slider:150-164, Input:205-210, Card:132-135, Toast:188-191 |

Counts: PASS 9, LOGGED GAP 5, FAIL 2, NOT RUN 1 (17 grades).

## Mechanical runs

| Command | Exit | Last meaningful line |
|---|---|---|
| `npm run tokens:verify` | 0 | `Light source: one light (shade 135deg, highlight 315deg, faces 135deg); 28 component stylesheets, 4 named exemptions.` (preceded by `All contrast claims verified.`) |
| `npm run tokens:map:check` | 0 | `token-map.md is current (fingerprint e099d4552cb5).` |
| `npm run tokens:swift:check` | 0 | `tokens:swift:check ok — SCDSTokens.swift matches tokens/.` (371 symbols from 371 semantic tokens) |
| `npm run test:scripts` | 0 | `pass 30`, `fail 0` |
| `npm run build` | 0 | `✓ built in 1.80s` |
| `npm run build:lib` | 0 | `✓ built in 204ms` |

## Line 1 / D3: LOGGED GAP

Every material value is a token: no `box-shadow`, `linear-gradient`, `drop-shadow` or `text-shadow` in the 11 in-scope stylesheets carries a literal value (the only literals are `none`), and no in-scope `.jsx` sets `boxShadow`, `textShadow` or a gradient inline. Tooltip.jsx builds its `drop-shadow()` filter from `--sc-shadow-tooltip-plate` (line 152); the StatusPill glow composes `size.statusPill.glow` with the pill hue (StatusPill.module.css:89).

The Drams-source-and-factor half, read from each `$description` in `tokens/semantic.json`:

| Token group | Drams source | Scale factor | Verdict |
|---|---|---|---|
| `shadow.switch.track` / `.thumb`, `color.switch.thumb.*` | Drams 001 | x0.45 | named |
| `shadow.control.key` | Drams 036 | none stated ("Tuned by Levi, sc-tune record ... 1418"); `keyPressed` states ratios x0.74 / x0.83 to x0.90; `keyShade` states the derivation (Drams #EEE to #E3E3E3 = ink 5%) | source named, factor absent on `key` |
| `shadow.segmentedControl.track` | "the Drams recess (inset 0 1px 2px at .25, the Switch's source before its x0.45 scale)" | x1 (unscaled) | named by reference |
| `shadow.segmentedControl.indicator`, `shadow.stepper.*`, `shadow.slider.thumb*`, `color.stepper.keyShade`, `color.slider.thumb*` | chain to `shadow.control.key` / the SegmentedControl recess / the Switch knob values | inherited | named by chain |
| `shadow.slider.track`, `shadow.stepper.track` | "the SegmentedControl track recess" | inherited | named by chain |
| `color.input.well*` | Levi's reference sheet | x0.8 | not Drams |
| `color.card.glass.*`, `shadow.card.glass.*` | Levi's Figma Glass settings (-45deg at 20/30/45%, 4/16, 6/24, 10/32 px) | values, no factor | not Drams |
| `shadow.tooltip.plate`, `shadow.toast.plate` | "the Button key shade without its highlight" | inherited | named by chain |

Logged where: CONTEXT audit rows give Input "Levi's reference sheet" and Card "Levi's Figma Glass effect" as the reference; decisions 2026-10-08 "Card is flat or liquid glass, in three levels" and 2026-10-07 "Input follows Levi's filled-field reference" record the choice; 2026-10-07 "Button tuned in sc-tune and applied" records the key values as Levi's tuned numbers. The gap against the line's wording (a Drams source and a factor on every material) is therefore accepted by decision, not missed.

## Line 3: LOGGED GAP

State counts from the stylesheets (`:hover` / `:focus-visible` / `:active` / disabled):

| Component | hover | focus | active | disabled | Note |
|---|---|---|---|---|---|
| Button | 3 | 2 | 11 | 13 | |
| Switch | 2 | 1 | 2 | 12 | press scale on `.field:active ... .thumb` (line 162) |
| SegmentedControl | 1 | 1 | 0 | 7 | press is a JS lean on `onPointerDown` (SegmentedControl.jsx:104-117, 193); no CSS `:active` |
| Stepper | 1 | 3 | 4 | 11 | |
| Slider | 1 | 2 | 0 | 10 | pressed = `.track.dragging .thumb` (lines 131-134): scale + `thumb-pressed` shadow |
| Input | 3 | 6 | 0 | 7 | a text field's pressed state is focus |
| Card | 2 | 2 | 2 | 7 | `.interactive` only; non-interactive cards are read |
| Toast | 1 | 2 | 2 | 5 | on `.dismiss` |
| Tooltip, StatusPill, Avatar | 0 | 0 | 0 | 0 | not interactive |

The SegmentedControl `:active` gap is recorded in the CONTEXT audit row ("Open: `:active` press, forced-colors edge"; the edge has since landed, lines 141-152). Disabled-is-flat is met everywhere (see D5).

## Line 6: FAIL

Ratios computed from the browser's computed colours (light page `rgb(227 223 216)`, dark page `rgb(44 50 57)`):

| Boundary or cue | Light | Dark | Status |
|---|---|---|---|
| Switch on-track vs page | 2.99 | 3.26 | logged (Gate 1 pick 5) |
| Switch off-track vs page | 1.80 | 1.19 | knob and glyph carry state |
| Input box vs page | 1.15 | 1.62 | logged (decisions 2026-10-07 "Input corner 8px ... the field contrast gap is accepted") |
| SegmentedControl indicator vs track | 1.40 | 1.52 | state carried by label ink: selected `rgb(26 24 21)` vs unselected `rgb(90 87 80)`, both AA text |
| Stepper key vs track | 1.31 | 1.34 | the +/- glyph is AA text; the boundary is not the identifier |
| Slider fill vs track | 1.66 | 2.57 | the decision names the thumb as the cue |
| **Slider thumb vs track** | **2.39 (rim top, white) / 1.58 (face bottom)** | 3.28 | **not logged** |
| Card flat / Tooltip / Toast / Button key fill vs page | 1.23 / 1.33 / 1.16 / 1.16 | 1.27 / 1.13 / 1.13 / 1.13 | identified by content or label; shadow is the edge |

The failing claim: decisions 2026-10-07 "Slider splits from ProgressIndicator; ProgressIndicator stays flat" states "a physical thumb that carries the non-text cue the fill misses (teal.500 on the track is 1.66:1)". In light mode the thumb's best stop against the track `rgb(176 166 156)` is 2.39:1, under 3:1, and no entry logs that as a gap. Dark mode clears it (3.28:1). File: `tokens/semantic.json` `color.slider.thumbRimTop` (`{color.utility.white}`) and `color.slider.track`; `src/components/Slider/Slider.module.css:84-105`.

Also note: `scripts/verify-contrast.mjs` grades 1.4.11 only for the six Toast glyph pairs (`GRAPHIC_PAIRS`, lines 183-190); no control-boundary pair is registered, so the mechanical gate could not see this.

## Line 9: LOGGED GAP

| Component | Record | Pick in record | Build vs record |
|---|---|---|---|
| Button | 2026-10-07-1418 | "No concept picked. Ask Levi before building." (4 concepts) | decisions 2026-10-07 "Button tuned in sc-tune and applied" names B; computed key shadow equals B's quoted values |
| Switch | 2026-10-07-1539 | B picked | computed 40 x 22, `0 0.45px 0.9px` track recess, six-layer thumb |
| SegmentedControl | 2026-10-07-1645 | A (one concept) | computed track `0.71 0.71 2` ink .25, indicator = key values |
| Stepper | 2026-10-07-1847 | A | computed equal |
| Slider | 2026-10-07-2207 | A | **deviates**: thumb 16px (record 15px), travel 720ms (record 1062ms); decisions 2026-10-08 "Levi's answers", item 1 |
| Input | 2026-10-07-2237 | A | computed `rgba(255 255 255 / 0.46)` light, `0.15` dark |
| Card | 2026-10-08-0921 | "No concept picked" (2 concepts) | decisions 2026-10-08 keeps both as tones; computed clear/frosted/thick rims and floats equal the token values |
| Tooltip | 2026-10-08-2007 | A picked | computed `drop-shadow(rgba(100 91 79 / .5) 2px 2px 6px)` |
| StatusPill | 2026-10-08-2239 | A (no token edits) | computed glow `0 0 8px` hue |
| Toast | 2026-10-10-1534 | A | computed `2px 2px 6px` light / `3px 3px 7px` dark |
| Avatar | none | by decision | decisions 2026-10-08 "Avatar stays flat ... No record: nothing was tuned" |

## Line 10: NOT RUN

The Figma MCP server (`plugin:figma:figma`) reports "requires authentication" in this session, so no master could be read or screenshotted. The decisions entries for each component record a readback at apply time; that is the builder's record, not this grade.

## Line 12: FAIL

- `src/styles/tokens.css` compiles every `spring` token to a `linear()` list: `--sc-motion-switch-travel-easing` (line 573), `--sc-motion-segmented-control-travel-easing` (579), `--sc-motion-tooltip-travel-easing` (603), `--sc-motion-stepper-travel-easing` (608), `--sc-motion-slider-travel-easing` (614), repeated in the dark block (1098 onward).
- No `@supports` rule or bezier alternative exists in `src/styles/`, the six consuming stylesheets, or `scripts/tokens-to-css.mjs` (its only `cubic-bezier` path, line 118, serves bezier tokens). The CSS transitions that read these variables (Switch.module.css:126-129, SegmentedControl:47-50, Stepper:55-58, Slider:91-94, Tooltip:47-49) become invalid on Safari before 17.2 and snap.
- Mitigation in place, not a fallback: `src/motion/elastic.js:79-87` samples `linear()` itself for the WAAPI engine, so the spring travel plays on any browser while the JS engine drives (stretch, squash or lean above 0 and reduced motion off).
- Firefox and Safari: NOT RUN (the Playwright MCP exposes Chromium only; no other browser is reachable from this session).

## D4: LOGGED GAP

| Component | Shadow softens | Object scales | Sound | Source |
|---|---|---|---|---|
| Button | `keyPressed` on `:active` | `press-scale` | `press` (Button.jsx:58) | all three |
| Stepper | `keyPressed` x2 | key scale + glyph 0.85 | `tick` (Stepper.jsx:48) | all three |
| Slider | `thumb-pressed` (Slider.module.css:133) | 0.985 (132) | `slide` on keyboard steps (Slider.jsx:49) | all three |
| Switch | no pressed shadow token exists | scale (Switch.module.css:162) + lean 0.12 | `toggle` (Switch.jsx:40) | shadow: decisions 2026-10-07 "the Switch re-light is reverted; the Drams Switch stays" freezes the Switch as the repaint |
| SegmentedControl | none | none (JS lean 0.15 instead) | `select` (SegmentedControl.jsx:42) | CONTEXT audit row "Open: `:active` press" |
| Card (interactive) | glass rim unchanged on press | `card-press-scale` (Card.module.css:125) | none by audit row | decisions 2026-10-08 "Levi's answers" item 6 asked for the press scale only |
| Toast dismiss | flat circle, no shadow | `press-scale` (Toast.module.css:183) | none ("an unprompted sound is intrusive") | audit row |

## Line 5 detail (forced colors, Chromium emulation)

| Component | Edge reported |
|---|---|
| Button primary | `border solid 1px` (ButtonBorder), shadow and face gradient dropped |
| Switch track | `outline solid 1px`; thumb solid CanvasText |
| SegmentedControl | track `outline solid 1px`; indicator `outline solid 2px` Highlight |
| Stepper | pill and keys `outline solid 1px` |
| Slider | track `border solid 1px`; fill Highlight; thumb solid ButtonText |
| Input box | `border solid 1px` |
| Card | `outline solid 1px`; backdrop-filter dropped |
| Tooltip | `outline solid 1px`; filter none; arrow CanvasText |
| StatusPill | `outline solid 2px` (glow doubles the edge); glow and dash hidden |
| Avatar | `outline solid 1px` |
| Toast | plate, badge and dismiss `outline solid 1px` |

## Ungraded observations (questions, not findings)

1. The docs pages for SegmentedControl and Button still describe the flat build: "no border, no shadow, ever", "Indicator motion `--sc-motion-reveal-duration` 200ms quint-out", "Track ground `--sc-color-surface-sunk`", "Primary fill `--sc-color-brand-accent`". Are `src/sections/ComponentSections.jsx` ButtonPage and SegmentedControlPage stale against the physical build?
2. Under reduced-motion emulation a forced click on the docs Switch demo left `checked: false`. Is that demo a controlled Switch with no handler, or did the forced click miss the label? Not reproduced; CSS and JS evidence for line 7 stand on their own.
3. `verify-contrast.mjs` has no control-boundary pairs in its 1.4.11 check. Would registering Slider thumb-on-track and Switch on-track pairs (with the logged gap as a documented restriction) make line 6 mechanical?
4. The `shadow.switch.thumb` six-layer drop shadow reports as "present" in the forced-colors computed style (the browser drops it at paint). Nothing visible; noted only because line 5 was graded from computed styles plus screenshots.
5. `color.input.wellRaised` reads 1.06:1 on `surface.raised` by the decision's own measurement (2026-10-07 "the light Input field goes lighter"); covered by the accepted Input gap, flagged here only because it is a second sub-3:1 ground for the same control.
