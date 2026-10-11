# Sprint: tune-lab-ui
Stage: 03-build
Status: approved
Queue: studio-memory WORK-QUEUE WQ-102
Filed: 2026-10-09 by Levi via Cowork. Target: the sc-tune lab, `previews/tune/` (dev-only, this repo).

One contract merged from two audits of the lab as it stands on `main` (4f40038): `design-crit-sc-tune.md` (sc-design-crit lenses, F-01…F-15) and `audit-sc-tune.md` (studio-principles and code audit, A-01…A-23), both in this folder. Every clause below cites its source finding(s). Clauses are grouped into five parts; parts land as one PR or as up to five stacked PRs in the order given. Part 1 and Part 2 are the blockers; the rest are the "drastic" half.

---

## Four-line brief

- **Task.** Rebuild the sc-tune lab's chrome so a 40-50 token session is navigable without scrolling blind, nothing the user does is lost, a seed is never reported as a decision, and every control reads as one system. The component rendering, the registry, the export shape (except one added field) and the record script do not change.
- **Files.** `previews/tune/main.jsx`, `previews/tune/controls.jsx`, `previews/tune/Tune.module.css`, `previews/tune/index.html`; `previews/tune/registry.jsx` only for the group-order constant (P3.1) and nothing else; `scripts/tune-record.mjs` only to pass the new `origin` field through to `spec.md` (P2.3); `skills/sc-tune/SKILL.md` only where a control it names moved (P5.4); one entry in `decisions/decisions.md`. Nothing under `src/`. No new dependencies.
- **Bar.** §Verify below, run by a fenced verifier that did not build it (#226), in a fresh worktree, on every registry entry (Switch, Stepper, SegmentedControl, Tooltip, NavBar, PlusUnderline, Slider, Input, Card, StatusPill, Avatar, Alert, Button, Motion).
- **Return.** PR to `main` with: the preview, five screenshots (Switch light, Card dark, Button compare with two concepts, Motion, Switch at 768), the profiler number from P5.1, the verifier's PASS/FAIL list by clause id, and the list of clauses deliberately not built with the reason. A MERGE packet for Levi; merge authority stays with Levi (ADR-018).

## Inputs
| Source | File/Location | Scope | Why |
|---|---|---|---|
| Lab engine | `previews/tune/main.jsx` | state, header, stages, panel | Every part edits this |
| Controls | `previews/tune/controls.jsx` | TokenControl, EasingEditor, ShadowLayers, PropControl | P3, P4 |
| Chrome CSS | `previews/tune/Tune.module.css` | all | P1, P3 |
| Audit 1 | `stages/03-build/tune-lab-ui/design-crit-sc-tune.md` | F-01…F-15 | Cited per clause |
| Audit 2 | `stages/03-build/tune-lab-ui/audit-sc-tune.md` | A-01…A-23 | Cited per clause |
| Skill | `skills/sc-tune/SKILL.md` | procedures A, C | Names controls; P5.4 keeps it true |
| Tokens | `src/styles/tokens.css` | `--sc-*` only | No raw px, no raw hex in the chrome (studio §3) |
| Slop blocklist | `../studio-memory/playbooks/slop-blocklist.md` | chrome | No pills-as-badges beyond the existing tab pill, no gradients, no icon grids |

## Pre-flight
| Check | Type | Action if failed |
|---|---|---|
| `git status` clean on `main` in this repo | BLOCKER | Stop; fix per `automation/main-sync.log`, never hand-pull |
| `npm ci && npm run build` green on main | BLOCKER | Stop and file the failure on WQ-102 |
| `?c=Switch` opens with no console errors (SKILL.md A.4) | BLOCKER | Fix before any clause |
| A local export exists for at least one component (`output/tuning/.exports/*.json`) | WARN | Needed for P2.3's spec round-trip; make one from the lab if absent |

---

## Part 1 · Structure: the panel gets a map, the header gets the view (blocker)

Sources: F-01, F-05, F-08, A-01, A-02, A-03, A-22.

1. **Header owns session and view.** Move `theme`, `zoom`, `ground` from the panel's View fieldset into the header, after the slow-mo select. The panel's View fieldset is deleted. Rule, logged in decisions: header = session and view; panel = the active concept. (A-01)
2. **Sticky rail at the top of the panel.** One chip per group in the order of P3.1, labelled `name · count`, with a changed-count mark when the group has user overrides (`color · 14 · 2`). Click scrolls the group into view. Below the chips, two filters on one row: a text filter (narrows by token name, `/` focuses it, Esc clears) and a `changed only` chip whose label carries the count (`changed · 6`), replacing the `n of 40 tokens tuned…` paragraph. The mode sentence ("colour and shadow edits apply to light only…") moves to a one-line note under the theme control in the header. (F-05, A-03)
3. **Groups collapse.** Each token fieldset's legend is a disclosure button (`aria-expanded`); collapsed state per group lives in `state.view.collapsed` and persists with the session. Default: all open. (F-05)
4. **Sound group collapsed by default** to one summary row: `sound · <file> · <seconds> s · change`; `change` expands the list. The `under 1 s only` checkbox becomes a chip on the list's own header row, same component as `changed only`. (F-08, A-22)
5. **Stages size to content.** Replace the equal-share grid with inline-wrapped stages, each `component bounds × zoom + layout-inset-sm` on every side, on one shared ground, so Shipped and the concepts sit adjacent. The `.stages` area keeps its scroll. At one concept the two stages sit side by side left-aligned; at four they wrap. (F-01, A-02)
6. **Panel width is the user's.** Default `34rem`, drag handle on the panel's inline-start edge, range `26rem`-`50vw`, persisted in `state.view.panelWidth`. Keyboard: the handle is focusable and ←/→ move it by `space-16`. (F-01)
7. **A tab strip above the stages** mirrors the panel's concept tabs (same component, same state): `Shipped · A · B …`, the active concept filled with accent, the picked concept marked `· picked`. The 11 px caption inside each stage stays as a caption and stops being a button. (F-02, F-09)

## Part 2 · Provenance and safety: nothing lost, nothing misreported (blocker)

Sources: F-06, F-07, A-04, A-10, A-11, A-21.

1. **Undo / redo.** A ring of the last 50 concept-and-note states (not view state: theme, zoom, compare, blind, collapsed and panel width are excluded so ⌘Z never flips the theme). ⌘Z / ⇧⌘Z and two header buttons `undo` / `redo` that show their count and disable at zero. Captured on the same 150 ms debounce as autosave. (F-06, A-10)
2. **Destructive actions arm.** `Reset all` becomes `Reset all?` for 3 s on first click and acts on the second; `remove X` becomes `Remove X?` the same way; a second click elsewhere disarms. Token-level `reset` stays single-click (undo covers it). No modal dialogs anywhere. (F-06, A-21)
3. **Every override carries an origin.** `user | seed | spring | copy`. Stored beside the override in state (`c.origin[mode][name]`), written to the export per token as `origin`, and passed through by `tune-record.mjs` into the `spec.md` token table as one column. On the card: a seeded token shows `seed` where `tuned` is now, is excluded from every changed count and from `changed only`, and its actions are `shipped` (sets to the shipped value) and `reseed` (restores the seed); a user, spring or copy override shows `tuned` and `reset` as today. `loadState` back-fills `origin` for saved sessions: a value equal to the registry seed is `seed`, a value with a `springs` entry is `spring`, else `user`. (F-07, A-04)
4. **Save status in the header.** One word after the meta: `saved` · `saving…` (debounce window) · `storage blocked` (catch fired). (A-11, A-12)

## Part 3 · Control craft: one grid, one type rank, readable values

Sources: F-03, F-04, F-13, F-14, A-05, A-06, A-07, A-08, A-09.

1. **Group order** becomes a registry constant: `size, space, radius, border, color, shadow, font, motion`, then `derived`. One place, exported from `registry.jsx`. (A-03)
2. **Two text roles in the chrome.** `label-chrome` (11, uppercase, tracked) for group legends, rail chips and stage captions only. `mono-caption` (13) for every token name, prop label, value and readout. Prop labels drop from 14 to 13. Ink carries rank: names primary, tuned values secondary, shipped values tertiary. The `.meta/.readout/.values` tertiary rule is split so readouts and tuned values are secondary. (F-03, A-05)
3. **One control grid.** Every control row is `[label 7rem] [control 1fr] [readout 4.5rem]`; sliders fill the middle column; readouts right-aligned mono. Token cards keep name-over-control, and the control row uses the same grid. Shadow layers and spring rows adopt it (x / y / blur / spread become four rows, not a wrap). (A-06)
4. **Fixed action slots.** The token card's actions row has three fixed slots (`copy rest` | `note` | `reset`/`shipped`); an absent action renders an empty slot of the same width, so a card never re-flows when it becomes changed. The `scope` badge (`both modes` / `light only`) moves into the actions row, before the slots, `white-space: nowrap`. (F-04, A-07)
5. **Changed mark.** A changed card gets a `border-width-focus` accent rule on its inline-start edge in addition to the sunk tint. Seeded cards get the rule in `text-tertiary`. (F-02)
6. **Alpha readout and hex field.** Colour controls gain a numeric alpha readout and a mono text field accepting hex or `rgb(r g b / a)`, bound to the same `onSet` through `parseColor`. (F-13, A-14)
7. **Raw shadow collapses** behind a closed `raw` disclosure; the layer editors stay open. (F-13)
8. **Easing preview at 48 px** (`layout-stack-lg`), overshoot drawn outside the unit box, the shipped curve as a faint second path, and a playhead that runs on Play at the token's duration (slow-mo multiplies it). Same `curvePath`. (F-14, A-09)
9. **No horizontal overflow.** `min-width: 0` on every flex and grid child in the panel; selects `max-width: 100%`. (A-08)
10. **Labels never wrap mid-phrase.** `white-space: nowrap` on `.mini` labels, `.scope`, rail chips. (F-04)

## Part 4 · Accessibility and keyboard

Sources: F-10, F-11, F-12, A-13, A-14, A-15, A-16, A-17.

1. **Targets.** Radios and checkboxes: the label wraps the whole row, `min-block-size: 24px`. Pills (`note`, `reset`, `play`, header buttons, chips): `min-block-size: 24px`, inline padding `space-component-padding-inline-sm`. Visual size may stay. (F-10)
2. **Accessible names.** Every button inside a token card has `aria-label` ending in the token's name (`Note on color-brand-accent`, `Reset …`, `Copy rest into …`). `reset` takes `text-error` ink at rest. (F-12, A-13)
3. **Concept tabs** drop `role="tablist"/"tab"` for buttons with `aria-pressed`, in both the panel and the new stage strip, unless the builder implements roving tabindex and arrow keys; either is acceptable, mixed is not. (F-12)
4. **Live ladder hint.** Under every length, number and time control whose value is not on its primitive ladder: `off ladder · nearest <primitive> (<value>)`, the primitive name a one-tap snap (writes `var(--sc-p-…)` like the `token…` select does). Uses the existing `refs` list. (F-11)
5. **Heading and shortcuts.** The `sc-tune` brand becomes the `h1` (no visual change). A `?` button in the header opens a disclosure listing the shortcuts: `/` filter, `⌘Z` / `⇧⌘Z`, `P` play. (A-15, A-16)
6. **Focus rings** stay as specified today on every control, including the new drag handle, chips and disclosures. (A-17)

## Part 5 · Performance, responsive, skill

Sources: F-15, A-18, A-19, A-20, A-23.

1. **Memoised controls.** `TokenControl`, `PropControl`, `ShadowLayers`, `EasingEditor` in `React.memo`; callbacks stable (one dispatcher taking `(name, action, payload)` or per-name `useCallback`). Bar: React Profiler, continuous slider drag on `?c=Card` for 3 s, p95 commit ≤ 16 ms. (A-18)
2. **Card keys.** `key={name}`; theme flows through props, no remount on theme change. (A-19)
3. **`forceStateCss` memoised** per `(state, document.styleSheets.length)`. (A-20)
4. **Responsive.** Below 900 px: stage sticky at the top at 40vh, panel scrolls beneath, header wraps. Nothing overflows horizontally at 390. (F-15, A-23)
5. **SKILL.md stays true.** Every control the skill names by position or label (`state sits fourth`, `Copy spec`, `duplicate`, `Compare`, `token…`) is re-checked and the text updated where a control moved. No procedure changes. (SKILL.md A, C)

---

## Verify (Gate 3, scoped to a dev tool)

Run by the fenced verifier on every registry entry unless a line names one.

- **Structure.** Rail chips present with correct counts; click on `shadow` chip scrolls `shadow` group into view; `changed only` hides unchanged cards and its count equals user overrides (seeds excluded); `/` focuses the filter and typing `thumb` leaves only matching cards; collapse state survives a reload; Sound opens collapsed with the shipped file in its summary.
- **Stages.** On `?c=Switch` at 1440, Shipped and A are adjacent (gap ≤ `layout-inset-sm` × 2); on Button with four concepts and Compare on, all five stages are visible without stage scroll at 1920. Stage strip active mark matches panel tab.
- **Panel width.** Drag changes width, persists across reload; keyboard ←/→ on the handle moves it; bounds hold.
- **Undo.** Change three tokens, ⌘Z three times returns each in reverse; ⇧⌘Z replays; theme flip is never undone; buttons show counts.
- **Arming.** `Reset all` once does nothing except relabel; twice resets; waiting 3 s disarms. Same for `Remove B`.
- **Origin.** Fresh `?c=Switch`: `changed · 0`, six cards show `seed`, none show `reset`; set one token: `changed · 1`; `Copy spec` export has `origin` on every token; `node scripts/tune-record.mjs` on that export writes a `spec.md` whose token table has an origin column and marks the six as seed.
- **Type and grid.** No text in the chrome below 11 px; exactly two chrome type roles (assert on computed `font-size` set ⊆ {11, 13}); every slider's right edge aligns to one x on `?c=Switch` (tolerance 1 px); values ink is secondary (contrast ≥ 5.4:1 on light page).
- **Overflow.** `aside.scrollWidth <= aside.clientWidth` on every registry entry, light and dark.
- **Targets.** No focusable control in the panel with a hit box under 24×24 CSS px (script over `getBoundingClientRect`, label-wrapped rows count the row).
- **Names.** Zero duplicate accessible names among panel buttons (script).
- **Ladder hint.** Set `space-switch-gap` (or any length) to 13 px: hint shows `nearest space-12`; tap snaps to `var(--sc-p-space-12)`.
- **Easing.** Curve box ≥ 48 px; a spring with overshoot renders above the unit box; Play moves the playhead.
- **Perf.** Profiler trace attached; p95 ≤ 16 ms per commit on Card drag.
- **Responsive.** 390 / 768 / 1024 / 1440 / 1920 screenshots; at 768 the stage stays on screen while the panel scrolls to its last group; no horizontal scroll at 390.
- **Hygiene.** sc-hygiene drift: zero raw px, zero raw hex in `previews/tune/`; `npm run build` and `npm run tokens:map:check` exit 0; console clean on every entry; `--mode snapshot` build of one existing record still renders read-only with every control disabled.
- **Keyboard and focus.** Tab reaches every control; focus ring visible on the drag handle, chips, disclosures; `?` disclosure lists three shortcuts and each works.
- **Reduced motion.** Playhead and any rail or collapse animation cut under `prefers-reduced-motion`.
- **Browsers.** Chromium, Firefox, WebKit (Playwright); the `resize` handle and `⌘Z` verified in all three.

## Defaults taken (Levi may overrule in review, none block the build)

- Group order `size, space, radius, border, color, shadow, font, motion` (P3.1).
- View controls move to the header (P1.1).
- Panel default width 34rem (P1.6).
- Sound collapsed by default (P1.4).
- Concept tabs become `aria-pressed` buttons rather than a full ARIA tab pattern (P4.3).

## Out of scope

Component rendering and `src/`; registry entries, seeds and props; the sound library; `vite.tune.config.js` and the snapshot build; `tune-figma-sync.mjs`; any change to what the spec records beyond the one `origin` field; the NoEntry page.

## Model and routing

`opus` build (UI structure, state, accessibility; ADR-028). Fenced verifier `sonnet` or `opus`, fresh worktree, never reads the builder's shots. Evaluator pass through `sc-design-crit` re-grades F-01…F-15 against the PR preview; the bar is no blocker standing and every degraded finding either closed or carried with a reason.
