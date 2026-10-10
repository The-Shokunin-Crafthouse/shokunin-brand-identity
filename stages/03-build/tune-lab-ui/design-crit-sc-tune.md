# design-crit · sc-tune lab (`previews/tune/`)

Standalone sc-design-crit run, 2026-10-09, by Claude (Cowork session, Chrome). Lens library: `studio-memory/skills/sc-design-crit/references/frameworks.md` (whole) and `psychology.md` ◆ tier. Surface type: single page, static (◆ tier). No sprint, no POV block, so Originality step (c) is skipped.

**Goal (inferred and stated, not graded against anything else):** one person (Levi, a designer) tunes every token a real SCDS component consumes, compares up to four concepts against Shipped, leaves notes, and walks away with a state a Claude session records as a spec. Success is "I found the control, I saw the change on the component, I knew what I changed, and nothing I did was lost."

**Inspected:** live `http://localhost:5176/previews/tune/?c=Switch` at 1316×901 (also Card, Button, Input for scale), light and dark, one and two concepts, Compare on; `main.jsx`, `controls.jsx`, `Tune.module.css`; DOM measurements by script (contrast ratios, target sizes, scroll heights, focusable counts). The 899px breakpoint could not be rendered (window resize refused); findings there cite code only. Console: no errors.

Measured facts the findings cite:

| Measure | Switch | Card | Button | Input |
|---|---|---|---|---|
| Panel scroll height / visible height | 8009 / 1172 px (6.8 screens) | 9107 | 8359 | 7124 |
| Focusable controls in the panel | 295 | 336 | 337 | 287 |
| Tokens | 40 | 47 | 49 | 44 |

Panel column 416 px (`minmax(0, 26rem)`, Tune.module.css:8); panel `scrollWidth` 413 > `clientWidth` 400, so a horizontal scrollbar is painted. Stage areas 700×1187 each; the Switch renders 283 px wide inside one. Inks on `surface.page` #E3DFD8: text-tertiary #66615A 4.62:1, text-secondary #5A5750 5.43:1, button ink on `surface.sunk` 4.77:1. Radios and checkboxes 13×13; `note`/`reset`/`play` pills and header buttons 24 px tall; range inputs 129 px wide.

---

## Design Quality

```
[F-01] LENS: Visual Hierarchy / Figure-ground (growth.design ◆, Gestalt) → CRITERION: Design Quality
WHERE:    whole page, 1316 wide, light and dark
EVIDENCE: screenshot ss_9760rgmi4; Tune.module.css:8 (panel 26rem), :49 (stage rows 1fr)
FINDING:  The two stages take 900 px of width to show a 283 px component centred in 700×1187 of empty
          ground, while the 295 controls that act on it are packed into 416 px and 6.8 screens of scroll.
          The eye is held by the void; the work is in the gutter. → users scan the stage, then hunt in
          the panel, and the component they are judging sits 500 px from the control they are moving.
SEVERITY: degraded (−2)
FIX:      Make the panel the primary column: user-resizable width (drag handle, persisted in view
          state, min 26rem, default ~34rem) and stages that size to content plus inset at the current
          zoom, so Shipped and a concept sit adjacent rather than a screen apart. Structural, but the
          grid already exists; it is a column rule and a stage sizing rule, not a rebuild.
```

```
[F-02] LENS: Law of Similarity / Von Restorff (growth.design ◆) → CRITERION: Design Quality
WHERE:    panel, every token card; compare mode stage labels
EVIDENCE: screenshot ss_3154wolz4 (fourteen identical colour cards), ss_5439argi4 (three identical
          stages, "B · editing" the only difference at 11 px)
FINDING:  Every token card has the same silhouette (name, slider, `token…` select, `shipped …`), and
          every stage has the same silhouette. The one thing that should stand out, "this is the one I
          am editing" and "this value is mine", is carried by an 11 px underline and a surface-sunk
          tint. → nothing is noticed because nothing is different.
SEVERITY: degraded (−1)
FIX:      One strong mark for the active concept (a tab strip above the stages that mirrors the panel
          tabs, accent-filled, not an underline) and one strong mark for a changed token (a 2 px
          accent rule on the card's inline-start edge in addition to the tint). Nothing else gains
          weight.
```

```
[F-03] LENS: Contrast (growth.design ◆; WCAG 1.4.3 passes, Gerhardt-Powals 2 does not) → CRITERION: Design Quality
WHERE:    every readout, every `shipped …` line, stage labels, `n of 40 tokens tuned` paragraph
EVIDENCE: Tune.module.css:33-38 (.meta/.readout/.values in text-tertiary); measured 4.62:1 at 13 px,
          stage labels 11 px
FINDING:  The numbers the lab exists to show (the value you just set, the value that shipped) are set in
          the lowest-contrast ink on the page, at the smallest sizes. AA passes by 0.12. → the user
          leans in to read the one thing they came to read.
SEVERITY: degraded (−1)
FIX:      Values in text-secondary; the tertiary ink stays for labels and stage captions only.
          Mono-caption 13 px holds. No new tokens.
```

```
[F-04] LENS: Law of Proximity / Prägnanz (Gestalt) → CRITERION: Design Quality
WHERE:    shadow cards ("scale all" / "strength all"), motion cards ("both modes" badge), narrow
          names ("motion-switch-press-lean-duration")
EVIDENCE: screenshot ss_1731b3brd (label breaks to "scale / all"), ss_5439argi4 (badge wraps into a
          second line of the name)
FINDING:  Labels and scope badges wrap mid-phrase at the panel's 400 px, so "scale" sits on one line
          and "all" on the next, and "both modes" reads as part of the token name. → the eye groups
          the wrong things.
SEVERITY: polish
FIX:      `white-space: nowrap` on `.mini` labels and `.scope`; badge moves to the actions row, after
          the name, right-aligned. Solved for free by F-01's wider panel, but the rule should hold at
          26rem too.
```

## Functionality

```
[F-05] LENS: Recognition over recall (Nielsen 6) / Miller's Law / Gerhardt-Powals 6 → CRITERION: Functionality
WHERE:    panel, all components
EVIDENCE: measured scroll 8009 px over 14 fieldsets (Switch), 9107 (Card); main.jsx:640-667 renders
          every group open with no index, filter or collapse
FINDING:  Fourteen groups, 40-49 tokens and ~300 controls are presented as one scroll with no map.
          Finding `shadow-switch-thumb` means scrolling past 1770 px of colour cards; coming back to
          the one token you changed means remembering where it was. → recall replaces recognition on
          every edit after the first.
SEVERITY: blocker (structural: F-05, F-07 and F-08 are three degraded findings on one criterion and
          they are one defect, "the panel has no structure beyond a scroll")
FIX:      A sticky rail at the top of the panel: one chip per group with its count and its
          changed-count, click scrolls to the group; a `changed only` toggle; a name filter (type to
          narrow, `/` to focus it). Groups collapsible, collapse state in view state. The
          `n of 40 tokens tuned` sentence (main.jsx:639) becomes the `changed only` chip's label and
          leaves the scroll.
```

```
[F-06] LENS: User control and freedom (Nielsen 3) / Permit easy reversal (Shneiderman 6) / Protect users' work (Tognazzini) → CRITERION: Functionality
WHERE:    header `Reset all` (main.jsx:514), Concepts `remove A` (main.jsx:561), every `reset`
EVIDENCE: main.jsx:514 `mutate(() => freshState(component))`; autosave at main.jsx:318 overwrites
          localStorage 150 ms later; no undo anywhere in main.jsx
FINDING:  One click on `Reset all`, 68 px wide and adjacent to `Copy spec`, discards every concept,
          note, pin and pick, and the autosave makes the loss permanent within 150 ms. `remove B`
          does the same to a concept. There is no undo for any edit. → a slip costs a session.
SEVERITY: blocker
FIX:      An undo/redo stack over `state` (bounded, 50 entries, ⌘Z / ⇧⌘Z, plus header buttons that
          show their count). `Reset all` and `remove X` arm on first click ("Reset all?" for 3 s) and
          act on the second. No modal dialogs. Undo is the structural fix; arming is the cheap guard
          until it lands.
```

```
[F-07] LENS: Visibility of system status (Nielsen 1) / Honest (content design 9) → CRITERION: Functionality
WHERE:    a fresh Switch session: `6 of 40 tokens tuned in concept A`, six cards tinted with `reset`
EVIDENCE: main.jsx:171-190 `seedConcept` writes registry seeds into `overrides.all`; controls.jsx:245
          `changed = override !== undefined`; screenshot ss_5439argi4 (`tuned 0.83`, `reset` on
          values the user never touched)
FINDING:  Registry seeds (a deliberate lab start for inert shipped values) are stored exactly like
          the user's own edits, so the lab reports six changes on a page nobody has touched, and the
          record cannot tell a seed from a decision. → the status line is false and the spec inherits
          the lie.
SEVERITY: degraded (−2)
FIX:      Carry provenance: a seed renders a `seed` badge, not `tuned`, is excluded from the changed
          count, and `reset` on a seeded token returns to the seed with a second control `shipped` that
          returns to zero. The export already has the shape to carry a `seeded: true` flag per token.
```

```
[F-08] LENS: Aesthetic and minimalist design (Nielsen 8) / Progressive disclosure (◆) → CRITERION: Functionality
WHERE:    Sound group, every component, including ones that ship silent
EVIDENCE: main.jsx:614-637; measured 375 px of the panel above every token group; 50 radios each
          with a `play` button
FINDING:  The sound picker (fifty rows) sits above all token groups on every visit, open, even when
          the session is about a shadow. → every edit scrolls past it.
SEVERITY: degraded (−1)
FIX:      Collapsed by default to one line, "sound · drams-004-toggle-switch-01 · 0.528 s · change",
          expanding to the list. Order of groups is Levi's call; the default collapse is not.
```

```
[F-09] LENS: Signifiers / Discoverability (Norman, ◆) → CRITERION: Functionality
WHERE:    compare mode, stage captions
EVIDENCE: main.jsx:535-537 (`stageSelect` button is an underlined 11 px caption); Tune.module.css:61
          (active ring: 2 px inset accent)
FINDING:  In compare mode the only way to change which concept you are editing from the stages is to
          click an 11 px underlined caption; the only sign of which one is active is a 2 px inset ring
          at the edge of a 700 px box. → the control is not seen as a control.
SEVERITY: degraded (−1)
FIX:      See F-02: a tab strip above the stages (A / B / C / D, same component as the panel tabs,
          same state). The caption stays as a caption.
```

```
[F-10] LENS: Target size (WCAG 2.5.8) / Fitts's Law (◆) → CRITERION: Functionality
WHERE:    sound radios, prop checkboxes, `play` / `note` / `reset` / `copy rest` pills, header buttons
EVIDENCE: measured 13×13 radios and checkboxes, 24 px pills; `.sound > label` is the only enlarged
          target (Tune.module.css:200)
FINDING:  Around 300 pointer targets, most under the 24×24 CSS px minimum, on a surface whose whole
          job is clicking. → misses and the wrong row's `play`.
SEVERITY: degraded (−1)
FIX:      Row-level hit areas: the label wraps the whole row for radios and checkboxes (min-height
          24 px); pills get `min-block-size: 24px` and 8 px inline padding. Visual size can stay.
```

```
[F-11] LENS: Error prevention (Nielsen 5) / Feedforward (◆) → CRITERION: Functionality
WHERE:    every length, number and time control
EVIDENCE: controls.jsx:208-218 (free range + number, no ladder); skills/sc-tune/SKILL.md C.4 and C.8
          ("a value off the token ladder is flagged" only in spec.md, after recording)
FINDING:  The lab lets a value land anywhere and tells the user it is off the ladder only after the
          session is recorded. → the correction comes a day late, in a document.
SEVERITY: degraded (−1)
FIX:      A live line under the control: `off ladder · nearest space-12 (12px)`, with the nearest
          primitive as a one-tap snap, using the same `refs` list the `token…` select already has.
          Font and icon sizes already do this with steps; extend the pattern.
```

```
[F-12] LENS: Consistency and standards (Nielsen 4) / WCAG 2.4.6 & 4.1.2 → CRITERION: Functionality
WHERE:    token card actions; concept tabs
EVIDENCE: controls.jsx:264-266: `copy rest` (writes), `note` (reveals), `reset` (destroys) are the
          same pill; 40 buttons named "note" with no per-token accessible name (measured);
          main.jsx:557 `role="tablist"` with no arrow-key handling or tabpanel
FINDING:  Three actions with three different consequences wear one appearance, and a screen reader
          hears forty identical "note" buttons. The concept tabs claim the ARIA tab pattern but do not
          implement its keyboard contract. → the destructive one is indistinguishable from the
          harmless one; assistive tech cannot tell which token a `note` belongs to.
SEVERITY: degraded (−1)
FIX:      `aria-label="Note on <token>"` and `"Reset <token>"` (reset already has one; note does
          not). `reset` takes the destructive ink (text-error at rest, not a red fill). Concept tabs
          either implement roving tabindex + arrow keys or drop `role="tab"` for `aria-pressed`
          buttons; the second is the smaller change and honest.
```

## Craft (judgment side)

```
[F-13] LENS: Limit data-driven tasks (Gerhardt-Powals 7) / Chunking (◆) → CRITERION: Craft
WHERE:    shadow cards, colour cards
EVIDENCE: screenshot ss_1731b3brd (a 300-character raw shadow string under six layer editors);
          controls.jsx:200 (alpha slider with no readout)
FINDING:  The shipped shadow is printed raw, six comma-separated layers in one paragraph, under a
          layer editor that already shows the same data structured; the colour alpha slider shows no
          number at all. → the user parses CSS by eye, or guesses the alpha.
SEVERITY: degraded (−1)
FIX:      Alpha gets a readout like every other slider. The raw string collapses behind `raw`
          (disclosure, closed), kept for copy.
```

```
[F-14] LENS: Weber's Law / Information density (Gerhardt-Powals) → CRITERION: Craft
WHERE:    every easing editor (tokens and motion props)
EVIDENCE: Tune.module.css:173-185: curve preview 16×16 px (`layout-stack-sm`), stroke 0.06
FINDING:  The easing curve, the one picture in the lab, is drawn at 16 px, so a bezier and a spring
          with 20 % overshoot are the same smudge. → the preview cannot inform the decision it sits
          beside.
SEVERITY: degraded (−1)
FIX:      48 px square (`layout-stack-lg`), overshoot drawn outside the unit box, a playhead that
          runs on Play at the token's duration. One SVG, same path function.
```

```
[F-15] LENS: Mapping (Norman) / Visible navigation (Tognazzini) → CRITERION: Craft
WHERE:    under 900 px (code only; not rendered this session)
EVIDENCE: Tune.module.css:254-262: stages 60vh, panel below, `height: auto`
FINDING:  Below 900 px the panel scrolls the page, so the stage leaves the viewport as soon as the
          user reaches the third group. → the thing being tuned is off screen while it is tuned.
SEVERITY: degraded (−1)
FIX:      Stage sticky at the top (40vh) with the panel scrolling beneath it. Verify at 768.
```

## Trust and persuasion pass

No persuasive mechanism is present (no CTA, no scarcity, no social proof, no defaults that steer a
choice). Nothing to flag. The `Blind` shuffle is the one honest nudge in the tool and it works as
designed.

## Score effect

Functionality: FAIL while F-05 and F-06 stand (two blockers). Design Quality: −4 from F-01 to F-03.
Craft: −3 from F-13 to F-15. Polish: F-04.
