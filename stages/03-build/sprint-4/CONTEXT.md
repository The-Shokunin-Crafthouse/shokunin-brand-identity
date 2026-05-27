# Sprint 4 — Component Primitives

**Stage:** 03-build
**Sprint:** 4
**Branch:** `feat/sprint-4-components`
**Status:** approved
**Approved:** 2026-05-27 (Levi)
**Resolves:** `sc-brand-system-spec.md` §2 Tier 3 · §5 Sprint 4 scope · §6 success criteria 4a–4f

---

## Inputs

| Source | File | Section/Scope | Why |
|---|---|---|---|
| Project spec | `sc-brand-system-spec.md` (main repo root, untracked) | §2 Tier 3 (12 components + states), §5 Sprint 4, §6 4a–4f | Component list, state matrix, pass criteria |
| Primitives | `tokens/primitives.json` | Full | Mode-invariant scale (type, space, radius, motion) — reference only via semantic where possible |
| Semantic tokens | `tokens/semantic.json` | Full | Source of truth for every component value. Gaps trigger ADR + token add. |
| Token map | `_config/design-system/token-map.md` | Full | Human-readable token reference; mirror new semantic additions here |
| UI rules | `_config/design-system/ui-rules.md` | Full | Five-state rule, focus rule, motion rule, density register |
| Type system | `_config/design-system/type-system.md` | Full | Per-step weight + composition guidance |
| Voice | `_config/voice/brand-voice.md` | Studio/marketing register | Real copy for all labels, empty states, error msgs |
| Decisions log | `decisions/decisions.md` | Sprint 2 + 3 entries | Keep components consistent with mark/type/voice lock-ins |
| Vite scaffold | `src/App.jsx`, `index.html`, `vite.config.js` | Full | Existing React (Vite) shell — extend, do not rewrite |

---

## Contract

### Approved resolutions (pre-work)

1. **Semantic-only at component callsite.** Component code references `var(--sc-*)` CSS custom properties resolved from `tokens/semantic.json`. Primitive references in component code are a bug. A small build step (`scripts/tokens-to-css.mjs`) generates the CSS var layer from semantic.json + primitive aliasing. Light = `:root`, dark = `[data-theme="dark"]`. No raw hex, no raw px outside the generated CSS layer.
2. **Token-gap protocol.** When a component needs a value not in semantic.json: stop, write the gap into `stages/03-build/sprint-4/token-gaps.md` (token name proposal + value + rationale + which component needs it), wait for approval, then patch `tokens/semantic.json` and log ADR in `decisions/decisions.md`. No silent inline values.
3. **States per spec §2 Tier 3 verbatim.** No more, no less. Each state visible in showcase. Documented states only — no invented "warning" on Card unless gap-protocol opens it.
4. **Components are pure React + CSS custom properties.** No styled-components, no Tailwind, no CSS-in-JS. CSS modules (`Component.module.css`) per component. JSX consumes class names; CSS consumes tokens. Token annotation lives as a `/* tokens: --sc-color-surface-sunk, --sc-space-component-padding-md, --sc-radius-default */` comment block at the top of each module.
5. **Showcase page = `src/App.jsx` rewrite.** Single-page showcase with sticky theme toggle. One section per component, all states rendered, token names listed below each. Real copy throughout (voice register: studio/marketing). No "Lorem ipsum", no placeholder labels.
6. **Reduced-motion respected.** Every transition wrapped in `@media (prefers-reduced-motion: reduce)` fallback. Functional path, not blank.
7. **Focus = `--sc-color-border-focus`.** Visible focus ring on every interactive component. Browser default suppressed only after explicit replacement.

### Process

**Part 1 — Token CSS layer**
1. Write `scripts/tokens-to-css.mjs` — reads `tokens/primitives.json` + `tokens/semantic.json`, emits `src/styles/tokens.css` with `:root { --sc-* }` (light) + `[data-theme="dark"] { --sc-* }` (dark). Resolves DTCG aliases. Adds a script entry `"tokens:build"` in package.json.
2. Add `src/styles/reset.css` (minimal — box-sizing, body bg/color from semantic, font-family from primitive bridge token).
3. Wire `src/main.jsx` to import both. Add theme-toggle context provider (`src/theme/ThemeProvider.jsx` — reads `prefers-color-scheme`, persists to localStorage, sets `data-theme` on root).

**Part 2 — Components** (each in `src/components/<Name>/`)
4. **Button** (3.1) · primary, secondary, ghost, destructive, disabled, loading
5. **Badge** (3.2) · default, success, warning, error, neutral
6. **Card** (3.3) · default, interactive (hover), elevated
7. **Input** (3.4) · default, focus, filled, error, disabled
8. **Divider** (3.5) · horizontal, vertical, with label
9. **Avatar** (3.6) · 4 sizes, image, initials fallback
10. **NavBar** (3.7) · desktop horizontal, mobile compact
11. **Tooltip** (3.8) · single-line, multi-line
12. **Switch** (3.9) · on, off, disabled
13. **ProgressIndicator** (3.10) · bar, circular, step
14. **Alert** (3.11) · info, warning, error, success
15. **TypographySpecimen** (3.12) · all 12 scale steps in-use

Each component ships: `<Name>.jsx`, `<Name>.module.css`, `<Name>.tokens.md` (token consumption annotation + state matrix + rationale).

**Part 3 — Showcase**
16. Rewrite `src/App.jsx` as showcase index. Sticky header with theme toggle (`◐` icon · keyboard accessible). One `<section>` per component. State variants laid out as a grid. Token consumption listed below each variant cluster.
17. Add `index.html` `<title>` update + favicon hookup (uses existing `assets/logo/mark-icon-*.svg`).

**Part 4 — Audit before PR**
18. Run grep audit: `grep -rE "#[0-9a-fA-F]{3,8}|[0-9]+px" src/components src/App.jsx` — zero hits outside generated `tokens.css` and comment annotations.
19. Run state audit: each component file has all spec-listed states rendered in showcase.
20. Run 4a–4f checklist below. Update audit table with results.
21. Update `workspace.manifest.yaml` `project.currentSprint` field. Open PR on `feat/sprint-4-components`.
22. Scaffold `stages/03-build/sprint-5/CONTEXT.md` with `Status: drafting` using `_sprint-template/CONTEXT.md`. Leave Contract section blank. Commit to `feat/sprint-4-components` before the PR merges.

---

## Outputs

| Artifact | Location | Format |
|---|---|---|
| Token CSS layer + builder | `src/styles/tokens.css`, `scripts/tokens-to-css.mjs` | CSS + JS |
| Theme provider | `src/theme/ThemeProvider.jsx` | React |
| 12 components | `src/components/<Name>/` (12 dirs) | React + CSS module + annotation md |
| Showcase page | `src/App.jsx` (rewrite) | React |
| Token-gap log | `stages/03-build/sprint-4/token-gaps.md` | Markdown (only if gaps found) |
| ADRs for token additions | `decisions/decisions.md` (appended) | Markdown |
| Sprint 5 scaffold | `stages/03-build/sprint-5/CONTEXT.md` | Markdown (`Status: drafting`, Contract blank) |
| Sprint CONTEXT | `stages/03-build/sprint-4/CONTEXT.md` | This contract, approved · audit results filled |

---

## Audit — Sprint 4 Success Criteria

| # | Criterion | Pass test | Status |
|---|---|---|---|
| 4a | All 12 components built and render correctly | Visual check — all 12 components render in both light and dark modes without layout issues in the showcase | ⏳ pending |
| 4b | Zero hardcoded values in component code | `grep -rE "#[0-9a-fA-F]{3,8}\|[0-9]+px" src/components src/App.jsx` returns 0 hits | ⏳ pending |
| 4c | All required states implemented for each component | Diff implemented state list against §2 Tier 3 per component — every state present and rendered in showcase | ⏳ pending |
| 4d | Token consumption annotated for each component | Each `src/components/<Name>/` has `<Name>.tokens.md` listing every `--sc-*` consumed + which state uses it | ⏳ pending |
| 4e | No token gaps remain | Every entry in `token-gaps.md` has corresponding ADR in `decisions/decisions.md` and is patched into `tokens/semantic.json` · token-map.md updated to mirror | ⏳ pending |
| 4f | Dark/light mode toggle works correctly for all components | Manual: click toggle in showcase, observe all 12 components update without page reload; no flash, no stale colors, focus state visible in both modes | ⏳ pending |
| 4g | Sprint 5 CONTEXT.md is scaffolded | `stages/03-build/sprint-5/CONTEXT.md` exists with `Status: drafting` | ⏳ pending |

---

## Out of scope

Brand site full assembly · §4 Tier 4 sections (color explorer, type specimen, motion visualizer, downloads) · PDF guidelines · asset kit packaging · Storybook · automated visual regression · Playwright screenshot tests.

---

## Decisions captured during sprint

Likely ADR candidates:

- Token CSS-var generation strategy (Vite plugin vs build script) — locked or provisional
- Each semantic token added to close a gap (one ADR per added group, e.g. `space.layout.*`, `radius.semantic.*`, `motion.duration.semantic.*`, `font.semantic.text-*`)
- Per-component focus-ring offset rule (if it diverges from `border.focus` color alone)
