# design-sync notes: shokunin-brand-identity

Sync target: claude.ai/design project "SCDS" (`projectId` in `config.json`, https://claude.ai/design/p/10f45739-7b68-4e6e-b964-02ad2027e0e6). Converter shape: `package` (no Storybook in this repo).

## How this repo maps onto the converter

- The library is plain JavaScript and ships no `.d.ts`. Every component is pinned in `componentSrcMap`, and every prop contract in `dtsPropsFor` is hand-written from the component source. A new or changed prop needs a matching edit there.
- The package splits its CSS over three files (`src/styles/tokens.css`, `src/styles/reset.css`, `dist-lib/components.css`). The converter takes one `cssEntry`, so `buildCmd` concatenates them into `dist-lib/scds-design.css` (gitignored, wiped by every `build:lib`). Run the full `buildCmd`, not `npm run build:lib` alone.
- `reset.css` is included on purpose. The components rely on it (`button` reset, `p` margins, `body` surface and font).
- Fonts come from `src/styles/fonts.css` through `extraFonts`. Twelve woff2 files ship (Neue Haas Grotesk Display and Text, Cascadia Mono).
- `@phosphor-icons/react` is merged onto `window.SCDS` through `extraEntries`, so `Icon` has glyphs to render. This takes the bundle to about 6.8 MB. A curated subset would be smaller, but a glyph missing from the subset renders nothing with no error.
- No `provider`. Tokens sit on `:root`; `ThemeProvider` only toggles `data-theme`.
- Providers stay out of `componentSrcMap`: `ThemeProvider`, `IconProvider` and `SoundProvider` render no UI of their own, so they get no card. They still ship on `window.SCDS`.
- Interaction sounds (2026-10-07): `Switch`, `Stepper` and `SegmentedControl` take a `sound` prop (default true) and play a role sound through `src/sound/`. The three wav files are dynamic imports that Vite emits as data-URI chunks; esbuild inlines them, so `_ds_bundle.js` holds them and has no `import()` left. A sound plays only after a user gesture, so previews and the render check stay silent.
- Converter command: `node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules ./node_modules --entry ./dist-lib/index.js --out ./ds-bundle` (add `--remote .design-sync/.cache/remote-sync.json` once the project has an anchor).
- Render check uses the repo's own Playwright (chromium build 1223, already in the local cache).

## Unattended runs

- `com.shokunin.design-sync` (launchd) runs `scripts/design-sync-auto.sh` when `main` moves on a sync-relevant path. One headless agent per commit, in the worktree at `~/.shokunin/design-sync/worktree`, under `scripts/design-sync-auto.prompt.md`.
- An unattended run never edits `.design-sync/` on `main`. A needed edit arrives as a PR from `design-sync/auto-<sha>` with nothing uploaded; the upload happens on the run after the merge.
- State and logs: `~/.shokunin/design-sync/` (`state`, `design-sync-auto.log`, `logs/`). Force a run: `touch ~/.shokunin/design-sync/force`.
- The gate's path list (`SYNC_PATHS` in the script) must cover every input the bundle is built from. A new input path (a new stylesheet folder, a new guideline doc in `guidelinesGlob`) needs a line there, or pushes to it will not trigger a sync.

## Known render warns

- `[FONT_MISSING] "Inter", "Cascadia Code"`: both are fallback entries in the token font stacks, behind the brand faces that do ship. Not sourced, by design.
- `[DTS_REACT] @types/react not found`: the repo has no TypeScript. Irrelevant here because every contract is in `dtsPropsFor`.
- `docs: 11/27 components matched` and `[DOCS_UNMAPPED]` for the 16 original components: the brand elements (PlusField and its ten wrappers) ship a sibling `<Name>.md`, which becomes the body of their `.prompt.md`. Their previews wrap every story in a light/dark `Modes` helper, and synthesized examples would carry that helper, so the docs hold clean examples instead. The original 16 still have only `<Name>.tokens.md` (token consumption tables) and stay synthesized from the prop contract and the preview examples.

## Preview decisions

- All 16 original components have authored previews in `.design-sync/previews/`, ported from `src/sections/ComponentSections.jsx` and `SpecimenSection.jsx`.
- The 11 brand elements (PlusField family, 2026-10-04) render every story twice, light then `data-theme="dark"` on a wrapper, through a `Modes` helper inlined in each preview file. The semantic tokens re-resolve on any `[data-theme="dark"]` element and PlusField reads colours from its own computed style, so a dark subtree is a faithful dark render. All 11 use `cardMode: column`.
- Animated brand elements (PlusLoader, PlusSkeleton, the PlusField Splash story) are captured at whatever frame the capture lands on. Their `Still` stories show the reduced-motion frame.
- Tooltip opens on hover or focus only. `Open` dispatches a `mouseover` on mount to show the open state.
- Tooltip `MultiLine` sets a fixed 320 width. The open tip (240 cap) is wider than its trigger, and a card that shrink-wraps the story would cut it. The story needs the `.multiline` `width: max-content` fix (PR #66) in the build; without it the tip wraps one word per line.
- Not shown, cannot render statically: hover, focus and press states; NavBar compact menu open; Stepper press-and-hold.
- `Card.tsx` export `Composed` mirrors the example in `conventions.md`. Change them together.
- Avatar `Image` inlines `assets/logo/mark-icon-dark.png` as a data URI.
- Studio PM shell props (2026-10-06): `Button` `Small`, `ProgressIndicator` `Tones`, `SegmentedControl` `LargeWithCounts` and `PlusSeparator` `MutedInDenseRow` show the new `size`, `tone`/`track`, `lg` + `count` and `tone="muted"` props. They port the demos in `ComponentSections.jsx` and `BrandElementSections.jsx`.
- All components land in the `general` group. The source JSDoc sits above the imports, so the converter picks up neither a description nor a `@category`.

## Re-sync risks

- `dtsPropsFor` is hand-written. It goes stale without any warning when a component's props change. Diff `src/components/*/*.jsx` signatures against it on every re-sync.
- A brand element's sibling `<Name>.md` (its `.prompt.md` body) can lag its props. `PlusSeparator.md` does not mention `tone`; the props block appended from `dtsPropsFor` still carries it, so `dtsPropsFor` is the contract that must stay current.
- `conventions.md` names tokens, glyphs and exports. Re-run its validation (grep each name against `ds-bundle/_ds_bundle.css` and `_ds_bundle.js`) after any token rename.
- `guidelinesGlob` ships three `_config/` docs verbatim. A file move breaks the glob quietly (the guideline just stops shipping).
- A Phosphor major bump changes glyph names on `window.SCDS`.
- `SYNC_PATHS` in `scripts/design-sync-auto.sh` does not list `src/sound` (as of 8e94073). A push that touches only `src/sound/` does not start a sync. Add the path there; an unattended run cannot, because it edits only `.design-sync/`.
- A restyle in a component's `.module.css` alone does not clear its grades (grades follow the preview source). The 2026-10-07 Switch restyle passed the render check and a spot-check, but a styling-only change needs a `--spot-check-components` capture to be seen.
- First upload: 2026-10-04, incremental path into the empty SCDS project, 104 files plus the `_ds_sync.json` anchor. Later syncs are pinned, so they take the atomic path: fetch the anchor to `.design-sync/.cache/remote-sync.json` and pass `--remote`.
- Two older hand-made projects named "Shokunin Crafthouse Design System" may still exist in the account. They are not sync targets. Never sync into them.
