# sc-tune lab · independent audit

Second pass, 2026-10-09, same session, deliberately not through the crit lenses. This one reads the lab as a studio product against `studio-memory.md` §2-§3 (subtraction first, type decides the room, every decision is a rule, perceived performance, accessibility from layer one) and as code (`main.jsx`, `controls.jsx`, `Tune.module.css`, `registry.jsx`). Where a point overlaps the crit it says so and adds only what the lens missed. Numbered A-01… so the contract can cite both.

## Information architecture

**A-01 · Session controls, view controls and concept controls are mixed.** The header holds Play, Loop, slow-mo, Compare, Blind, Copy spec, Reset all (session and view). The panel's `View` fieldset holds theme, zoom, ground (also view: they change every stage and the chrome). The panel's other groups are per concept. So a control that affects the whole page sits in the column that reads as "this concept". Rule to adopt: **header = session and view; panel = the active concept.** Move theme, zoom and ground to the header; the panel then starts with Notes, Concepts, Props.

**A-02 · The stage grid is the wrong unit.** `grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr))` gives every stage an equal share of 900 px regardless of content, so Shipped and A sit 500 px apart and a four-concept compare puts the first and last 700 px apart. A comparison is a saccade, and the eye forgets the first by the time it lands on the second. Rule: stages size to content (component bounds × zoom + one `layout-inset-sm` on each side), lay out inline with wrap, and sit on one shared ground; the void becomes a margin. This is the crit's F-01 from the stage side.

**A-03 · Panel has no map and the user is the map.** Same defect as crit F-05. Adds: the group order is alphabetical by category (`border, color, font, motion, radius, shadow, size, space`), which is the order of a dictionary, not of a tuning session. Props come first already; after that the order should be the order of the component's own layering: size → space → radius → border → color → shadow → font → motion. Make it a registry-level constant so it is one rule, not fourteen.

**A-04 · "Changed" has four meanings and one look.** A token is changed because (a) Levi set it, (b) the registry seeded it, (c) a spring wrote its paired duration, (d) `copy rest` copied a sibling. All four produce the same tint, the same `tuned` line and the same `reset`. The export carries `spring` and `shadowAdjust` but not seed or copy provenance. Rule: every override carries an origin (`user | seed | spring | copy`), shown as a small word on the card and recorded in the spec. The crit's F-07 is case (b); this is the general rule.

## Typography and layout rhythm

**A-05 · Four text roles with no rank.** Legends: 11 px uppercase tracked. Prop labels: 14 px mono (`<code>` inside body-dense). Token names: 13 px mono. Readouts and values: 13 px mono tertiary. Stage captions: 11 px. Header meta: 13 px mono tertiary. A dense surface earns two roles, three at most: `label-chrome` (11, uppercase) for group heads and stage captions; `mono-caption` (13) for every name and value, with ink carrying the rank (primary for names, secondary for values, tertiary for shipped). Prop labels drop from 14 to 13 so the Props group matches the token groups beneath it.

**A-06 · Controls do not share a column grid.** `.prop > label { min-width: 7rem }` aligns prop rows; token cards stack label over control; shadow layers use a flex-wrap; springs use `.mini` label-then-input. Sliders are 129 px wide in a 400 px panel. Rule: one three-column grid for every control row, `[label 7rem] [control 1fr] [readout 4.5rem]`, readouts right-aligned in mono so the panel reads as a table of values. Sliders take the full middle column. Token cards keep name-over-control but the control row uses the same grid.

**A-07 · Layout shift on change.** `reset` appears when a token becomes changed (controls.jsx:266), `copy rest` appears only on hover tokens, the `scope` badge appears on change. The actions row changes width and the card re-flows under the pointer. Rule: a fixed three-slot action column; absent actions render an empty slot. No reveal-on-hover (discoverability), no shift.

**A-08 · Horizontal overflow.** Panel `scrollWidth` 413 vs `clientWidth` 400; a horizontal scrollbar is painted in every screenshot. Likely the full-width `token…` selects plus card padding without `min-width: 0` on the flex children. Fix and add a check: the verifier asserts `aside.scrollWidth <= aside.clientWidth` on every registry entry.

**A-09 · Easing curve is unreadable at 16 px.** Crit F-14. Adds: the preview should also show the shipped curve as a faint second path, so "what did I change" is one glance.

## Safety of the user's work

**A-10 · No undo, destructive actions one click away.** Crit F-06. Adds the implementation shape: `state` is already a single serialisable object with a 150 ms autosave; an undo stack is a ring of the last N `state` values keyed by the same debounce. Undo must not undo view changes (theme, zoom, compare), only concept and note changes, or ⌘Z will flip the theme instead of the slider.

**A-11 · Autosave has no visible status.** The page saves 150 ms after every change and the user has no way to know. One word in the header, `saved`, that turns to `saving…` for the debounce window, and `storage blocked` if the catch fires. Costs nothing, answers the one anxiety a tuning session has.

**A-12 · Switching components is silent.** Changing the header `select` swaps the whole state (`switchTo`). The previous component's state is saved, but nothing says so, and the URL changes without a history entry (`replaceState`). Fine as a rule, but say it: the `saved` word from A-11 covers it.

## Accessibility

**A-13 · Forty "note" buttons, one name.** Crit F-12. Adds: `copy rest` has a `title` and no `aria-label`; the `play` buttons do have one. Make the rule mechanical: every button inside a token card carries `aria-label` ending in the token name; the verifier counts duplicate accessible names in the panel and fails on any.

**A-14 · Colour cannot be typed.** The colour control is a native `<input type="color">` plus an alpha range. There is no hex field, so a keyboard user, or anyone pasting from Figma, cannot enter a value. Add a mono text field (hex or `rgb(… / a)`) bound to the same `onSet`; the `parseColor` helper already normalises.

**A-15 · No page heading.** `h2` stage captions exist, `h1` does not; the header `sc-tune` is a `span`. Make the brand span the `h1` (visually unchanged). Landmarks (`header`, `main`, `aside`) are present and correct.

**A-16 · Keyboard reach is fine, keyboard speed is not.** Everything is reachable with Tab (295 stops). Nothing is reachable without it. Three accelerators cover the session: `/` focuses the filter (with A-03), `⌘Z`/`⇧⌘Z` (A-10), `P` plays (header Play). Document them in a `?` disclosure in the header, one line each.

**A-17 · Focus rings are styled and present** on every control the chrome owns (`Tune.module.css:218-226, 311-318`). Keep; the verifier re-checks after the restyle.

## Performance (perceived)

**A-18 · Every keystroke re-renders ~300 controls.** `Tune` holds all state; every `setState` re-renders the whole panel, and `TokenControl` is not memoised. The callbacks (`setOverride`, `resetOverride`, `setShadowAdj`, …) are recreated each render, so `React.memo` alone would not help. On the Switch this is not felt; on Card (47 tokens, 336 controls) a slider drag is the thing to measure. Rule: `TokenControl` and `PropControl` wrapped in `memo`, callbacks stable (`useCallback` keyed on name, or one dispatcher taking the name), and the bar is a profiler trace of a continuous slider drag on Card at ≤ 16 ms per commit.

**A-19 · Theme change remounts every card.** `key={`${concept.id}${theme}${n}`}` (main.jsx:645) throws away every control's local state (open notes, easing editor mode) on a theme flip. The key should be the token name; theme-dependent values already flow through props.

**A-20 · `forceStateCss` walks every stylesheet on each state change** (main.jsx:146-166). It is cheap today and rebuilt for hot reload on purpose; leave it, but memoise per `(state, styleSheets.length)` so a slider drag while `hover` is forced does not rewalk.

## Copy

**A-21 · Three words for three destructions.** `Reset all` (session), `remove B` (concept), `reset` (token). Keep the three verbs, they are different scopes, but the arming pattern (crit F-06) must read the same each time: `Reset all?`, `Remove B?`, and token `reset` stays single-click because undo covers it.

**A-22 · `under 1 s only` is a filter dressed as a prop.** It sits in the Sound group styled as a prop row with a `<code>` label. It is a list filter; it belongs on the list's own header as a chip, like the `changed only` chip of A-03. Same control, same look, everywhere a list is filtered.

## Responsive

**A-23 · Under 900 px the stage scrolls away.** Crit F-15. Adds the 768 and 390 bars: at 768 the stage is sticky at 40vh and the panel scrolls beneath; at 390 the lab is not a target (it is a desktop tool) but it must not break: the header wraps, nothing overflows horizontally. Verified at 390 / 768 / 1024 / 1440 / 1920 per §3.

## Out of scope for this pass

The registry's seeds and the spec format (`tune-record.mjs`) change only where A-04 adds an `origin` field. The sound library, the snapshot build and the Figma sync script are untouched. Group order (A-03) and header placement of view controls (A-01) are the two calls Levi could overrule; both have a default so the build is not blocked.
