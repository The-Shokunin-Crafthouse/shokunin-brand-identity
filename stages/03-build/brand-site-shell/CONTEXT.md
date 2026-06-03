# Sprint: brand-site-shell
Stage: 03-build
Status: complete

---

## Inputs
| Source | File/Location | Section/Scope | Why |
|--------|--------------|---------------|-----|
| Brand spec | _config/sc-brand-system-spec.md | §4 Stack, §5 Sprint 5, §6 Sprint 5 criteria | Stack decisions, deliverables, success criteria |
| Design tokens | _config/design-system/token-map.md | Full | All implementation values |
| Figma file URL | _config/design-system/figma-links.md | URL only | Source file location |
| Creative defaults | ~/Projects/shokunin-crafthouse/studio-memory/studio-memory.md | §9 only | Design decisions |
| Code standards | ~/Projects/shokunin-crafthouse/studio-memory/studio-memory.md | §6 only | Implementation rules |

## Pre-flight

| Check | Type | Action if failed |
|---|---|---|
| `_config/sc-brand-system-spec.md` exists | **BLOCKER** | Stop. Print: `BLOCKER: spec not found at _config/sc-brand-system-spec.md. Commit before continuing.` Do not proceed. |
| This CONTEXT.md exists with `Status: drafting` or `Status: approved` | **BLOCKER** | Stop and report the missing or malformed file. Do not proceed. |
| `_config/design-system/token-map.md` exists | **BLOCKER** | Stop. Print: `BLOCKER: token-map.md not found. Run sync-figma-token before this session.` Do not proceed. |
| Previous sprint CONTEXT.md has `Status: complete` | WARNING | Report the incomplete sprint by name. Continue but note in contract proposal. |

## Contract
_Approved 2026-05-28. Canonical design source: Figma Sandbox `Color — DL` (node `2144:24`),
mirrored by committed exports at `stages/02-design/claude-design/scds-documentation-site-desktop/project/`
(`Color.html`, `system/colors_and_type.css`, `system/_components.css`)._

### Build
1. **Tokens (design wins — palette update).** Edit `tokens/primitives.json` + `tokens/semantic.json`
   to adopt the Color-page design palette, then regenerate via `npm run tokens:build`:
   - `+ color.warmGray.25` = `#F8F6F2` (13-step ladder)
   - status repaint: success `#2F855A`/`#6EE7B7`, warning `#C2410C`/`#FB923C`,
     **error `#7F1D1D`/`#FCA5A5` (oxblood, off the shu band)**, info `#1D4ED8`/`#93C5FD`
   - `+ semantic` `surface.raised` (warmGray.50 → dark.surfaceSunk),
     `surface.floating` (warmGray.25 → dark.surfaceDeepSunk)
   - rebind `color.status.error` from `{shu.500}` → `{status.error.*}` so error ≠ brand
   - Log ADR in `decisions/decisions.md`. Keep canonical typography tracking + motion/elevation
     (the export's zeroed tracking is an artifact, not a design decision).
   - Output path is `src/styles/tokens.css` (the real scaffold; supersedes the stale
     `brand-site/src/tokens.css` Outputs path).
2. **Site shell** at existing root `src/`: sticky 256px left sidebar (brand lockup, three nav
   groups Foundations/Components/Voice, sidebar-foot footer `edition · 2026.05` / `SCDS-01`),
   hash-routed main column on the `minmax(0,880px) 32px 168px` content grid.
3. **Mode toggle** in sidebar foot using the existing `Switch` primitive + `ThemeProvider`:
   flips `data-theme` on `<html>`, swaps brand mark, persists to `localStorage('scds-theme')`,
   default light, no reload, reachable at any scroll.
4. **Color section — fully built**: metabar, hero, 5 chapters (warm-gray ladder, shu signal w/
   plate+rail+three-jobs, status row, three-tier table, interactive WCAG contrast checker),
   right-gutter annotations.
5. **18 stubbed sections** (Type/Spacing/Motion/Mark; 12 Components; 3 Voice): shell + nav link +
   heading + placeholder content block — never blank, never error.
6. **Fonts** self-hosted: copy NHG + Cascadia woff2 into `public/fonts/`, `@font-face` with
   `font-display: optional` (NHG) / `swap` (Cascadia).
7. **Responsive** mobile-first at 390 / 768 / 1280 / 1920. Zero hex + zero raw px in shell/Color
   source (all via `--sc-*`). Asset paths relative / `import.meta.env.BASE_URL` (root + `/_previews/N/`).
8. **Snapshots**: `scripts/preview.mjs` → `VIEWPORTS = [390,768,1280,1920]`, `DARK_MODE_IN_SCOPE = false`
   → 4 light PNGs. Dark mode fully built, verified manually.
9. Scaffold `stages/03-build/brand-site-color/CONTEXT.md` (`Status: drafting`), commit before PR.

### Done when (verification criteria)
- Color renders 5 chapters + working contrast checker; matches design layout @1440.
- Every nav link routes; every non-Color section shows heading + placeholder (no blank/error).
- Toggle flips light↔dark with no reload, persists across nav, reachable at any scroll.
- `grep` finds zero hex literals and zero raw px in shell/Color source.
- `npm run build` exits 0; `npm run preview brand-site-shell` exits 0 → 4 light PNGs, all rendered.
- No overflow/collapse at 390/768/1280/1920.
- `brand-site-color/CONTEXT.md` committed `Status: drafting`.

## Outputs
| Artifact | Location | Format |
|----------|----------|--------|
| Site shell | brand-site/src/ | React + Vite |
| Color section | brand-site/src/sections/color/ | React components |
| All other sections | brand-site/src/sections/ | Stubbed — shell only, no content |
| Token CSS | brand-site/src/tokens.css | CSS custom properties compiled from token-map.md |
| Snapshots | /previews/brand-site-shell/ | PNG — 360, 768, 1024, 1440 |

## Audit (Claude runs before opening the PR)
- [x] Zero hardcoded hex values — every color references a CSS custom property from tokens.css
- [x] Zero magic numbers — every spacing value from the token scale
- [x] Site shell matches Color page Sandbox design exactly — nav, layout, mode toggle, footer
- [x] Navigation structure matches the Sandbox design — all sections listed, Color active state correct
- [x] Mode toggle switches light/dark — all tokens update without page reload
- [x] Color section is fully populated — not stubbed
- [x] All other sections render the shell with a placeholder, not a blank page
- [x] Site is functional at 390, 768, 1280, and 1920
- [x] `npm run build` exits 0
- [x] `npm run preview brand-site-shell` exits 0 and produces 4 PNGs
- [x] PNGs verified to show rendered site, not blank pages or error states
- [x] No third-party component library used — every component built from the design system
- [x] Next sprint CONTEXT.md scaffolded at stages/03-build/brand-site-color/CONTEXT.md with Status: drafting

## PR & Preview

Run the full Audit checklist above before opening the PR. Do not open 
the PR until every item passes. Update Status to "complete" after all 
audit items pass.

After audit passes:
1. Open PR against main
2. Capture PR number: `gh pr view --json number -q .number`
3. Read production domain from WORKSPACE.md
4. Print this exact line in chat (raw, cmd-clickable):
   📱 Preview URL: https://[domain]/_previews/[pr-number]/
5. Run: `gh run watch --exit-status --workflow=preview-deploy.yml \
   $(gh run list --branch feat/brand-site-shell \
   --workflow=preview-deploy.yml \
   --limit 1 --json databaseId -q '.[0].databaseId')`
6. Print ✅ on success or ❌ + full failure logs on failure
