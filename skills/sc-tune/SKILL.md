---
name: sc-tune
description: Open the SCDS tuning lab so Levi can tweak every attribute of a component (each token its CSS consumes, its props, its interaction sound, theme, zoom) against the shipped version side by side, then read back the settings he left the page on and record them as an exact spec plus a static build of that spec. Trigger on "tune the <component>", "let me play with the <component>", "open the tuning lab", "I want to tweak the switch", "record my settings", "record the final settings", "save what I left the page on". Do NOT use to apply a recorded spec to the shipped component unless Levi asks for that step (procedure D), to grade a build (sc-verify), or to judge design quality (sc-design-crit).
---

# sc-tune: tune a component, then record exactly what was chosen

Mode: agent (a Claude session in the shokunin-brand-identity repo, driving the lab for Levi).

The lab mounts the real SCDS component twice: **Shipped**, as built, and **Tuned**, with Levi's overrides. Overrides are CSS custom properties set on the Tuned stage only, so the result is exactly what the tokens would produce. Levi makes every design choice in the page. Claude's job is to open the lab, keep the registry current, and turn the final state into a record. Claude never tunes values on Levi's behalf.

| Part | Path |
| --- | --- |
| Lab engine | `previews/tune/main.jsx` |
| Component registry | `previews/tune/registry.jsx` |
| Record script | `scripts/tune-record.mjs` |
| Snapshot build config | `vite.tune.config.js` |
| Records | `output/tuning/<Component>/<YYYY-MM-DD-HHMM>/` |
| Sound library | `assets/sounds/drams/` (`manifest.json` lists all 50) |

## Prerequisites

- The working directory is the shokunin-brand-identity repo, on a feature branch, not `main`.
- `node_modules/` exists. If it is missing, run `npm install` first.
- The `showcase` entry is in `.claude/launch.json`. It runs `npm run dev` on port 5173.

## A. Open the lab for a component

1. If the component is not a key in `REGISTRY` in `previews/tune/registry.jsx`, do procedure B first.
2. Start the dev server with the built-in browser's `preview_start` and the name `showcase`. Never start it with Bash.
3. Navigate the browser pane to `http://localhost:5173/previews/tune/?c=<Component>`.
   The header reads `sc-tune`, the component name, and `<N> tokens · <M> tuned`. Both stages show the component.
4. Read the console with `read_console_messages` and `onlyErrors: true`.
   Result: no errors. If there is an error, fix it before you hand the page to Levi.
5. Tell Levi the page is open, and give him the URL in one line. Do not describe the controls unless he asks.

Result: Levi tunes in the page. The page saves his state after each change to `localStorage` key `sc-tune:v1:<Component>`. The state survives a reload.

## B. Add a component to the registry

Do this when a component has no `REGISTRY` entry. One entry teaches the engine what it cannot infer. It discovers the tokens from the CSS by itself.

1. Import the component, and import its CSS module with the `?raw` suffix. Also import with `?raw` the CSS of every SCDS child the component renders (the Stepper renders `Icon`, so its entry lists `iconCss`).
   If a child's CSS is missing, that child's tokens are missing from the panel and Levi cannot tune them.
2. List the props worth tuning. Give each one `name`, `type` (`boolean`, `enum`, `number` or `text`) and `default`. Give an `enum` its `options`.
3. Set `shippedSound` to the Drams file the component's role sound came from (see `src/sound/README.md`). Set it to `null` if the component ships silent.
4. Set `trigger` to the moment the shipped component plays its sound, in a few words.
5. Write `render(p, set, sound)`. Render the component with `sound={false}`, because the lab plays the tuned sound itself. Call `set(prop, value)` where the component reports a change, and call `sound()` at the exact point where the shipped component plays its sound.
6. Open the lab for the component (procedure A, steps 2 to 4).
   Result: the header token count is above zero. A click on the Tuned stage changes the matching prop in the Props panel.

## C. Record the final settings

Do this when Levi says to record, save or capture the settings, or says that the page is final.

1. Read the export from the page Levi used. In the built-in browser, run this with `javascript_tool`:
   `JSON.stringify(window.scTune.export())`
   If Levi tuned in a different browser, ask him to press **Copy spec** and paste the result.
   Result: a JSON string whose `tool` is `sc-tune` and whose `component` is the one Levi tuned.
2. Write the JSON to a file in the scratchpad directory, for example `<scratchpad>/tune-<Component>.json`.
3. Run the record script:
   `node scripts/tune-record.mjs <scratchpad>/tune-<Component>.json`
   Result: it prints `recorded <Component> → output/tuning/<Component>/<stamp>`. If it exits 1, the input was not an sc-tune export. Go back to step 1.
4. Read the new `spec.md` in full.
   Result: the token table lists every changed token with its shipped value, its tuned value, how it was set, and the nearest primitive. A raw value that is off the token ladder is flagged.
5. Open the snapshot in the browser pane: `http://localhost:5173/output/tuning/<Component>/<stamp>/snapshot/index.html`.
   Result: the header reads `snapshot · recorded <time>`, the Tuned stage matches what Levi left, and every control is disabled.
6. Stage the record by path: `git add output/tuning/<Component>/<stamp>`. Stage by path, never with `git add -A`, because another unit's files can be on disk (learning #281).
7. Commit the record on the current branch.
8. Report to Levi: the record path, the number of tokens changed, and each change as shipped → tuned. Add the sound settings and every value that is off the token ladder.
   A value off the ladder needs a new primitive or a snap to the nearest one before it can ship. That is Levi's call.

Result: `output/tuning/<Component>/<stamp>/` holds `spec.json` (the export, verbatim), `spec.md` (exact values plus a paste-ready CSS block), and `snapshot/` (the lab locked to this spec, with its sound file).

## D. Apply a record to SCDS (only when Levi asks)

A record is a reference, not a change. Shipping it is a separate decision.

1. For each token in the record, edit its source in `tokens/semantic.json`, or edit the component's CSS module if the value is local to it. Insert the change in place. Never rewrite the whole JSON file, because a rewrite reformats every line.
2. Run `npm run tokens:build`, `npm run tokens:map`, `npm run tokens:swift` and `npm run tokens:verify`, then `cp src/styles/tokens.css public/tokens.css`.
   Result: `tokens:verify` prints `All contrast claims verified.`
3. If the sound changed, re-encode the new file into `src/sound/assets/<role>.wav` with `afconvert -f WAVE -d LEI16@48000 -c 1 <source> <target>`, and update `src/sound/README.md`. A pitch other than 1× is not supported at runtime. Bake it into the file instead.
4. Open the lab again. Confirm that Shipped now matches the record's Tuned values, with `0 tuned` in the header after **Reset all**.
5. Log a dated entry in `decisions/decisions.md` that names the record path.
6. Update the matching component in the Figma SCDS library (file `0zVoxaLJQkjHENYJlQk1VT`). Load the `figma-use` skill before the first `use_figma` call.

## Troubleshooting

- **A token change shows no effect.** The component may be in a state that reads a different token. Hover reads the `-hover` or `-fill` tokens, and disabled reads `surface-sunk`. Move the pointer off the stage, or set the prop that clears the state.
- **No sound plays.** The browser starts audio only after a click on the page. Click once anywhere, then interact again. If the list is empty, the dev server cannot reach `assets/sounds/drams/manifest.json`.
- **The panel shows a token as `text` instead of a typed control.** `classify()` in `main.jsx` did not recognise the computed value. Add the pattern there. Never special-case one token name.
- **The snapshot is blank.** It needs a server, because ES modules do not load from `file://`. Open it through the dev server URL in step C5, or run `npx vite preview --outDir <snapshot folder>`.
