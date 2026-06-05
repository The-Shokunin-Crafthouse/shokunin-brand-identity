# Token Gaps — Sprint 5 section content

Scratch log for visual needs with no existing semantic token. Format:

`TOKEN GAP: [property] — suggested token name: [name]` + the section that hit it + the nearest existing semantic token used as a temporary stand-in.

Zero hardcoded hex / px / raw values ship. A gap is logged here, stood in with the nearest semantic token, and left for review — never inlined. Verified: `grep -rE "#[0-9A-Fa-f]{3,8}" src/sections/` returns **no hex literals**; the only `px` in the new module CSS are responsive media-query breakpoints (768/1280), the `--col-*` structural column constants (mirroring the gold-standard ColorSection precedent), and the standard sr-only `1px` clip. `npm run build` exits 0.

---

## Gaps

- `TOKEN GAP: continuous-rotation duration — suggested token name: --sc-motion-continuous-duration`. Surfaced by the Button loading spinner (originally logged in Sprint 4). Stand-in: `--sc-motion-mode-duration` (380ms). Not a Sprint 5 regression — carried forward and re-surfaced on the Button page's callouts. The system has no continuous/looping motion duration; 380ms is the nearest "spin-readable" semantic.

No **new** semantic-token gaps were introduced by Sprint 5. Every section resolves through the existing `--sc-*` layer.

## Architecture finding (not a token gap)

- **Voice checker has no API proxy.** The Sprint 5 brief assumes "the proxy already in use by the site" forwards `https://api.anthropic.com/v1/messages` with the key injected. No such proxy exists in the repo (no `server/`, `functions/`, `api/`, or proxy config), and spec v1.2 §8 deliberately replaced client-side API features with chat skills "to remove billing complexity." The Register + Hard-rules checker is built to spec (POSTs to that URL, model `claude-sonnet-4-20250514`, no key) **and** falls back to a deterministic local rubric scan (anti-pattern regexes + per-principle heuristics) when the call fails — so the feature works today and is never a broken control. To enable the live LLM path, add a same-origin proxy that injects `x-api-key`. Flagged for review in the PR.

## Non-token demonstration parameters (documented, not gaps)

- **Mark** — fixed light/dark documentation plates paint primitive `--sc-p-color-warm-gray-{100,600,900}` grounds (theme-independent, like the Color page's raw swatches) so the ink/cream mark variants read on their intended grounds. SVG `stroke-width`/`stroke-dasharray` are drawing params in the mark's own 264×198 coordinate space (every `fill`/`stroke` colour is a token). Misuse demos use literal `scaleX`/`rotate` transform factors and the minimum-size ladder uses literal `16/24/32/48px` — these are the demonstrated content (reproduction sizes, distortions), not design-system values.
- **Motion** — bezier path geometry is computed in JS from the easing tokens' own control-point values (an SVG plot of the token, not a hardcoded shape).
- **Spacing / Density** — chart bar widths/positions are percentages computed from the data being visualised, not design dimensions. Column counts (4/8/12) are integers.
- **Editorial kit** — `--col-content/gutter/max` structural constants use raw `px`, exactly as ColorSection's `--col-*` do; these are layout structure, not design tokens.

## Sections cleared (no new gaps)

- **Type** — scale/weight/secondary-face/optical. Renders primitive composition tokens (`--sc-p-font-text-*`) as documentation of the raw scale, the same pattern the Color page uses for the colour ramp; all chrome via `--sc-*` semantics.
- **Spacing** — scale bars paint width from `--sc-p-space-*`; component anatomy uses `--sc-space-component-*` / `--sc-space-layout-*`; grid margins/gutters resolve to `--sc-space-layout-inset-*` / `--sc-p-space-*`.
- **Motion** — durations/easings/scale read from `--sc-p-motion-*`; real component pairings use `--sc-motion-*`.
- **Mark** — see note above. Mark resolves to exactly two values, ink and cream.
- **Components (12)** — token-consumption tables resolve each colour/dimension token's light AND dark value live from the cascade (theme-forced probes in `useLayoutEffect`, restored pre-paint); swatch chips paint from the computed hex, not a theme-dependent `var()`. Zero values transcribed by hand. Every state demo imports the real Sprint 4 component.
- **Register / Density / Hard rules** — chrome is `--sc-*` throughout; the checker UI styles via tokens. Content drawn from `_config/voice/brand-voice.md`.
