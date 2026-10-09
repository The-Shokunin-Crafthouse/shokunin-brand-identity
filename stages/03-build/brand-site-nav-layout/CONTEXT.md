# Sprint: brand-site-nav-layout
Stage: 03-build
Status: approved
Queue: studio-memory WORK-QUEUE WQ-100 (part A) and WQ-101 (part B)
Filed: 2026-10-08 by Levi via Cowork. Target: brand.shokunincrafthouse.com (this repo, `src/`).

---

## Inputs
| Source | File/Location | Section/Scope | Why |
|--------|--------------|---------------|-----|
| Site shell | `src/App.jsx`, `src/App.module.css` | `.sidebar`, `.nav*`, `.main*`, `--shell-col-*` | Everything in part A edits these two files first |
| Token map | `_config/design-system/token-map.md` | spacing, surface.nav, label nav-* | No raw px except the two numbers Levi fixed below |
| Slop blocklist | `../studio-memory/playbooks/slop-blocklist.md` | Eyebrows, mono-as-decoration | Part B's removal rule |
| scds-v2 sprint | `stages/02-design/scds-v2/CONTEXT.md` | Phase 2 "drop eyebrows" | Part B closes that line for the site |
| Consumer fan-out | `.github/workflows/deploy.yml` lines 48-102, `dispatch-preflight.yml` | SCDS Dispatch App | Part B step 1 diagnosis |
| Prior shell sprint | `stages/03-build/brand-site-shell/CONTEXT.md` | Contract §2 | The shell this sprint changes |

## Pre-flight
| Check | Type | Action if failed |
|---|---|---|
| `git status` clean on `main` in this repo | **BLOCKER** | Stop; fix per `automation/main-sync.log`, never hand-pull |
| `npm ci && npm run build` green on main | **BLOCKER** | Stop and file the failure on the WQ row |
| Part B only: part A merged | **BLOCKER** | Part B step 2 edits the same files; wait |

---

## Part A: sidebar behaviour and page layout (WQ-100)

Six changes Levi specified. All in the shell; no section content changes.

### Build
1. **Collapsible nav groups.** Each of the four `NAV` groups in `App.jsx` becomes a disclosure: the group heading (today `.navEyebrow`) is a `<button aria-expanded aria-controls>` that toggles its link list. The heading is a heading, not an eyebrow; restyle it as the toggle, do not delete it. Motion follows the project's motion philosophy: the list reveal narrates open and close, and reduced-motion cuts instead of animating.
2. **First group open on load.** Only `NAV[0]` starts expanded. Exception: on load, if the hash routes into a collapsed group, open that group too so the active link is never hidden. State is per page load; do not persist to `localStorage`.
3. **Sidebar scrolls on its own.** The sidebar is `position: sticky; top: 0; height: 100dvh; overflow-y: auto`, so it scrolls independently of the main column at every width that shows the two-column shell.
4. **No visible scrollbar on the sidebar.** `scrollbar-width: none` plus `::-webkit-scrollbar { display: none }` on the sidebar scroll container only. Keyboard and wheel scrolling must still work; verify with Tab through the last link of the last group.
5. **Main column left-aligned to the sidebar.** Replace the centred main column with one that starts at the sidebar's right edge plus an 80px gutter. Tokenise 80px if a spacing token equals it; if none does, add one to the DTCG source and regenerate (`npm run tokens:build`, `npm run tokens:map`), never a raw `80px` in CSS.
6. **Max body width 1082px.** The main content column caps at 1082px. The sidebar sits outside that cap (Levi's call, 2026-10-08). Same tokenise-or-add rule as step 5.

### Verify (Gate 3, scoped)
- 390 / 768 / 1024 / 1440 / 1920 screenshots via `scripts/preview.mjs`; at 1920 the content column is 1082px wide and starts 80px right of the sidebar.
- Sidebar scrolls alone with all four groups open at 768 tall; no scrollbar painted.
- Keyboard: every toggle reachable, `aria-expanded` flips, focus ring visible, Enter and Space both toggle.
- Reduced motion: toggles cut, nothing animates.
- `npm run tokens:map:check` clean; zero raw px in the diff (sc-hygiene drift).
- PR to `main`; preview URL in the PR body is the visual record (#28). Named verifier: sc-verify in a fresh context, not the builder (#226).

---

## Part B: SCDS propagation fix, then eyebrow and mono reduction (WQ-101)

Order is binding: step 1 must be proven at the destination before step 2 starts.

### Step 1: why the latest SCDS changes are not showing
Levi's expectation: this site, shokunincrafthouse.com and the client portal all pick up design-system changes automatically through the SCDS Dispatch GitHub App. Facts on disk as of 2026-10-08:
- This site reads `src/styles/tokens.css` directly and deploys on every push to `main` (`deploy.yml`, rsync to Hostinger). Last merge to main: PR #90, 2026-10-08.
- `deploy.yml` then fires `brand-tokens-updated` to exactly two consumers, hardcoded: `client-portal`, `shokunin-crafthouse-site`. `publish-package.yml` fires `scds-released` on a version tag (`package.json` is `0.4.0`).
- `dispatch-preflight.yml` is the reachability check; it was last verified 2026-08-17 (HTTP 204 on both).

Diagnose in this order, writing each result to the WQ-101 row (#45: verify at the destination, never the badge):
1. This site: did the latest `deploy.yml` run succeed, and does the live `brand.shokunincrafthouse.com` serve the build hash from main? If the run is green and the site is stale, it is caching (Hostinger or CDN) or the rsync `--delete` left the old `index.html`. If the changes Levi means exist only in Figma, this is a token-sync gap (`sync-figma-token.md`), not a deploy gap; say which.
2. Dispatch step: open the latest `deploy.yml` log. The `::warning::No App token minted` line means `vars.SCDS_DISPATCH_APP_ID` or `secrets.SCDS_DISPATCH_APP_KEY` is missing or the App installation lapsed. A per-repo `dispatch to <repo> failed` line means the App is not installed on that consumer. Run `dispatch-preflight.yml` and read its per-repo verdict.
3. Each consumer: confirm a workflow listens for `repository_dispatch` type `brand-tokens-updated` and that it ran after PR #90. Then check how it consumes SCDS. If it pins `@the-shokunin-crafthouse/scds@0.4.0` from GitHub Packages, a dispatch rebuild re-installs the same version and nothing changes; component and token changes only reach it on a new published version. If that is the shape, the fix is a release step (tag, `publish-package.yml`, `scds-released`) plus a consumer bump, and the dispatch alone was never going to carry it.
4. Fix what is broken within this repo and the two workflows. Anything needing Levi's credentials or GitHub App settings in the browser is one named blocked step on the row. Close step 1 only when each of the three sites serves a change made after 2026-10-08, read as a visitor (#237).

### Step 2: remove eyebrows, cut Cascadia Mono
Starts only after step 1 passes.
1. **Eyebrows: delete, do not replace.** Every eyebrow element in `src/sections/**` and `src/components/**` is removed outright (126 hits for `eyebrow` in `src` on 2026-10-08). Headings stand alone. Where an eyebrow carried the only label for a block (a chapter number, a token path), fold that text into the heading's caption or drop it; never leave an empty wrapper. Nav group headings from part A stay, they are toggles. Retire the eyebrow tokens and text styles afterwards and regenerate the map; log the removal in `decisions/decisions.md` as the site-side close of scds-v2 Phase 2's "drop eyebrows" line. Figma mirror of the component change is a follow-on row, not this one.
2. **Cascadia Mono: literal values only.** 32 hits for `cascadia` in `src` and `tokens` on 2026-10-08. Keep mono only where the text is a literal a reader copies: token names, hex and OKLab values, code samples, the contrast checker's numbers. Everything else (labels, captions, metabars, colophon, nav, breadcrumbs, section numbers) moves to the text family. Expect the surviving count to be under a third of today's. Any text style whose only use was decorative mono is retired from the DTCG source, not just unused.
3. Both changes are brand direction already given by Levi; no Gate 2 pause. Open one PR per change so a revert is one click.

### Verify
- Grep `eyebrow` in `src` returns zero; `cascadia` hits are each on a literal value (list them in the PR body).
- Screenshots at the five widths, light and dark; type scale ratio unchanged; AA holds on every moved text run.
- sc-design-crit pass on Color and one component page; named verifier sc-verify, fresh context.
