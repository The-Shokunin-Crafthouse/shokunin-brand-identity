# design-sync notes: shokunin-brand-identity

Sync target: claude.ai/design project "SCDS" (`projectId` in `config.json`, https://claude.ai/design/p/10f45739-7b68-4e6e-b964-02ad2027e0e6). Converter shape: `package` (no Storybook in this repo).

## How this repo maps onto the converter

- The library is plain JavaScript and ships no `.d.ts`. Every component is pinned in `componentSrcMap`, and every prop contract in `dtsPropsFor` is hand-written from the component source. A new or changed prop needs a matching edit there.
- The package splits its CSS over three files (`src/styles/tokens.css`, `src/styles/reset.css`, `dist-lib/components.css`). The converter takes one `cssEntry`, so `buildCmd` concatenates them into `dist-lib/scds-design.css` (gitignored, wiped by every `build:lib`). Run the full `buildCmd`, not `npm run build:lib` alone.
- `reset.css` is included on purpose. The components rely on it (`button` reset, `p` margins, `body` surface and font).
- Fonts come from `src/styles/fonts.css` through `extraFonts`. Twelve woff2 files ship (Neue Haas Grotesk Display and Text, Cascadia Mono).
- `@phosphor-icons/react` is merged onto `window.SCDS` through `extraEntries`, so `Icon` has glyphs to render. This takes the bundle to about 6.8 MB. A curated subset would be smaller, but a glyph missing from the subset renders nothing with no error.
- No `provider`. Tokens sit on `:root`; `ThemeProvider` only toggles `data-theme`.
- Converter command: `node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules ./node_modules --entry ./dist-lib/index.js --out ./ds-bundle` (add `--remote .design-sync/.cache/remote-sync.json` once the project has an anchor).
- Render check uses the repo's own Playwright (chromium build 1223, already in the local cache).

## Known render warns

- `[FONT_MISSING] "Inter", "Cascadia Code"`: both are fallback entries in the token font stacks, behind the brand faces that do ship. Not sourced, by design.
- `[DTS_REACT] @types/react not found`: the repo has no TypeScript. Irrelevant here because every contract is in `dtsPropsFor`.
- `docs: 0/16 components matched`: the per-component docs are `<Name>.tokens.md` (token consumption tables), which do not match the converter's `<Name>.md` lookup. Left unmapped; each `.prompt.md` is synthesized from the prop contract and the preview examples.

## Preview decisions

- All 16 components have authored previews in `.design-sync/previews/`, ported from `src/sections/ComponentSections.jsx` and `SpecimenSection.jsx`.
- Tooltip opens on hover or focus only. `Open` dispatches a `mouseover` on mount to show the open state.
- A Tooltip multiline story is left out. The multiline tooltip wraps one word per line upstream (`.multiline` lacks `width: max-content`). Add the story back when that is fixed.
- Not shown, cannot render statically: hover, focus and press states; NavBar compact menu open; Stepper press-and-hold.
- `Card.tsx` export `Composed` mirrors the example in `conventions.md`. Change them together.
- Avatar `Image` inlines `assets/logo/mark-icon-dark.png` as a data URI.
- All components land in the `general` group. The source JSDoc sits above the imports, so the converter picks up neither a description nor a `@category`.

## Re-sync risks

- `dtsPropsFor` is hand-written. It goes stale without any warning when a component's props change. Diff `src/components/*/*.jsx` signatures against it on every re-sync.
- `conventions.md` names tokens, glyphs and exports. Re-run its validation (grep each name against `ds-bundle/_ds_bundle.css` and `_ds_bundle.js`) after any token rename.
- `guidelinesGlob` ships three `_config/` docs verbatim. A file move breaks the glob quietly (the guideline just stops shipping).
- A Phosphor major bump changes glyph names on `window.SCDS`.
- First upload: 2026-10-04, incremental path into the empty SCDS project, 104 files plus the `_ds_sync.json` anchor. Later syncs are pinned, so they take the atomic path: fetch the anchor to `.design-sync/.cache/remote-sync.json` and pass `--remote`.
- Two older hand-made projects named "Shokunin Crafthouse Design System" may still exist in the account. They are not sync targets. Never sync into them.
