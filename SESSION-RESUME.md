# SESSION-RESUME — PlusField → SCDS Figma library (2026-10-05)

Brief: `handoff/CC-PROMPT-plusfield-figma.md`. Branch `feat/plusfield-figma-library`. File `0zVoxaLJQkjHENYJlQk1VT`.
Pages: header 458:2 · PlusField 458:3 · SectionDivider 458:4 · HeadingRule 458:5 · PlusUnderline 458:6 · PlusProgress 458:7 · PlusLoader 458:8 · PlusSkeleton 458:9 · PlusTimeline 458:10 · PlusBullet 458:11 · PlusSeparator 458:12 · PlusThumbnail 458:13

Method: `node scripts/plusfield-to-figma.mjs` (dev server up) → `svg/*.svg` → `upload_assets` per page (curl POST image/svg+xml) → `use_figma` converts each imported frame into a variant component (fills bound by layer id) → combineAsVariants → Light/Dark frames.

| Step | Status |
|---|---|
| Generator + manifest committed | done |
| Pages created | done |
| Components built (per page) | 11/11 done: PlusField 459:2771, HeadingRule 460:8, Timeline 461:73, Bullet 459:4, SectionDivider 459:2172, Underline 459:2206, Progress 459:2236, Loader 459:2329, Skeleton 459:2350, Separator 459:2370, Thumbnail 459:2400 |
| Light/Dark frames + screenshots vs site | todo |
| Code Connect ×11 + figma:parse | todo |
| decisions.md amendment, PR | todo |

---

# SESSION-RESUME — SCDS audit fix/publish pipeline

Multi-session job (CC-PROMPT-scds-pipeline.md). Started 2026-07-28. Read that file + `SCDS-AUDIT-2026-07-25.md` before continuing.

## Gate 1 — RESOLVED 2026-07-28
- Brand hue: **teal everywhere**. Flagship site (`shokunincrafthouse.com`) red `shu` ramp retires at token level — layout/WebGL/scroll untouched.
- Theming: **3rd `Brand` collection approved** — **but see "Block 6 — HELD" below.**
- `space/micro/*`: rule widened (2pt tier kept as a documented exception), not retired.
- All 3 logged: `decisions/decisions.md` → "2026-07-28 — SCDS audit Block 0".

## Block 6 — HELD (owner decision, this session)
Owner chose **Hold** when asked: the hue split that mainly justified the 3-mode Brand collection is now moot (teal won everywhere). Do not build Block 6 on spec. Revisit only if Block 8 (code sync) surfaces real per-site Figma-variable-level divergence. Logged: `decisions/decisions.md` → "2026-07-28 — SCDS audit Block 6: hold theming collection (moot on hue)".

## Done — session 1 (2026-07-28, earlier)
| Item | Status |
|---|---|
| Audit 0.1 (bare tokens.css URL) | ✅ verified — 200, not 404. |
| Audit 8.8 (`#732020`→`#dd4c4c` propagate to code) | ✅ done, code+build verified. |
| Figma Block 2 (colour): `-ink` tier, border/subtle↔default swap, border/focus repoint, dark border dedup, text/onAccent docs | ✅ Figma-only, code sync was outstanding until this session. |

## Done — session 2 (2026-07-28, this session)
| Item | Status |
|---|---|
| Block 6 open question | ✅ Asked Levi — **Hold**. Logged. |
| Block 1.2 font check | ✅ Re-checked `listAvailableFontsAsync()` — Pro fonts (`Neue Haas Grotesk Display/Text Pro`) still absent from this Figma session, unchanged. Still blocked on desktop-app step with Pro fonts installed locally (VariableID:3:3 / VariableID:3:4, 2 edits cascade to all 26 text styles). |
| **Block 3 (typography)** — full | ✅ All 21 non-duplicate text styles: lineHeight+letterSpacing normalized to literal PERCENT values matching the declared ratio/tracking scale (see platform-limit note below). `nav/header`+`nav/node`: fontSize genuinely bound to variables, `AUTO` line-height replaced with literal 110%. Display tracking tuned: sm −1.8%, md −2.5% (unchanged), lg/xl −4% (plateau). New primitive `font/lineHeight/loose` (2.0) added for `mono/flow`. 3 dead `*/light` duplicate styles deleted (no Light Text font cut exists, Trial or Pro). `display/xsm-32` renamed → `display/xs` (dropped embedded pixel value; kept distinct from `title/section` — different semantic role, not a true duplicate). Type-scale ratio: **ADR accepts the hybrid** (1.077–1.428 span), not worth retrofitting a single ratio across a shipped 26-style system. Logged: `decisions/decisions.md` → "2026-07-28 — SCDS audit Block 3". |
| **Block 5 (foundations)** — full | ✅ Filled all 5 empty pages (Principles/Color/Type/Space/Motion) with real content — swatches bound live to variables, live text-style specimens, space-scale bars, motion token docs. Added 5 grid styles (`grid/390…1920`). Renamed 2 naming outliers (`text-on-inverse`→`text/onInverse`, `surface-inverse`→`surface/inverse` — Figma-side only, see code-sync note). Added `color/inkRgb`/`color/whiteRgb` STRING primitives. Attempted to bind `shadow/raised`/`shadow/inset` effect colours to variables — **reverted** (platform limit, see below); renamed to `shadow/control/raised`/`shadow/control/inset` only (matches repo naming), left colour unbound. Logged: `decisions/decisions.md` → "2026-07-28 — SCDS audit Block 5". |
| **warmGray 200–400 ramp rebuild (P2-8)** | ✅ HSL-linear redistribution between fixed anchors `100`/`450`, 6 even ~8.56% lightness steps. New: `200 #D8D1CC · 250 #C4BCB4 · 300 #B0A69C · 350 #9A9186 · 400 #847C71`. Verified via screenshot (even steps, no more cliff) and contrast math (`border/default` 1.22→2.52:1, `border/subtle` 1.44→1.53:1, order preserved). Logged: `decisions/decisions.md` → "2026-07-28 — SCDS audit P2-8". |
| **Code sync (Block 2 colour + this session's Figma changes)** | ✅ `tokens/primitives.json` + `tokens/semantic.json` updated: 5 new `-ink` backing primitives (`successInkLight`, `warningInkLight`/`Dark`, `infoInkDark`, `interactive.hoverInk.light`), 4 new semantic `-ink` tokens (`status.success-ink`/`warning-ink`/`info-ink`, `interactive.hover-ink`), `border.default`↔`border.subtle` alias swap, warmGray 200–400 rebuild values. `border.focus` was **already correct in code** (already aliased `focusRing.*` — only Figma had the teal/500 bug, now fixed both sides). `npm run tokens:build` + `npm run build` both exit 0; `src/styles/tokens.css` + `public/tokens.css` regenerated and spot-checked (border-default/subtle swap, all -ink vars, warmGray ramp all present with correct resolved values). **Not renamed in code:** `text-on-inverse`/`surface-inverse` — Figma variable rename has zero consumer impact (bindings are by ID), but the code-side CSS custom property (`--sc-color-text-on-inverse`) is actively consumed by `Tooltip.module.css`, `ComponentSections.jsx`, and the doc-site builds. Renaming the JSON key would be a real breaking rename requiring updates across all those consumers — out of scope for a colour-value sync pass. Deferred as its own scoped task if the naming inconsistency needs closing code-side. |

## Platform limitations discovered this session (both logged as ADRs, do not re-attempt)
1. **`TextStyle.lineHeight`/`letterSpacing` cannot be live-bound to a variable and stay PERCENT.** `setBoundVariable` succeeds with no error but silently coerces the resolved value to raw `PIXELS` (e.g. a ratio of `1.1` becomes `1.1px`, collapsing the line). Caught via mandatory fresh re-read before moving on, reverted, redone as literal `PERCENT` values matching the same ratio scale. Same limitation class as the already-documented `motion/easing/*` code-only tier.
2. **`Effect.color` binding on effect styles overwrites the FULL RGBA including alpha.** Binding `shadow/raised`/`shadow/inset` layer colours to `warmGray/800`/`utility/white` (both fully opaque) flattened all 4 layers' intended 0.10/0.08/0.90/0.70 opacity to fully opaque. Caught via fresh re-read, reverted, colour left unbound (rename-only fix applied instead).

## Blocked — needs Levi at the desktop Figma app (unchanged)
- **1.1** Move `_Archive` (page `1:7`) → new `SCDS Archive` file. Plugin API cannot move nodes cross-file.
- **1.2** Font rebind Trial→Pro. `Neue Haas Grotesk Display/Text Pro` still absent from `listAvailableFontsAsync()` this session — confirmed unchanged from last session, not a re-check artifact. Once available: only 2 variable edits (`font/family/display` `VariableID:3:3`, `font/family/text` `VariableID:3:4`) cascade to all 26 text styles.

## Still open (not started)
- **Block 4** (components): `state`→`State` normalization, five-state Toggle/Stepper/NavItem, Tab `Selected` boolean remodel, ~85 radii + ~98 padding/gap bindings, 25 unstyled text nodes, Badge/StatusPill/Pill consolidation, Mark rebuild, component descriptions. Not started — untouched.
- **Block 8 remainder** (code sync beyond colour): `font/text/*` ↔ Text Style name mapping in the generator (11 Figma-only text styles need export), `.nav__brand`'s `--sc-p-font-size-18`→`offscale-18` fix, `shokunincrafthouse.com` fork retirement + teal re-skin, `brand.shokunincrafthouse.com` `@font-face` addition, `clients` hardcoded hex/px cleanup, `motion/press/release-duration` naming resolution in the generator (confirmed Block 8 gap, not Figma-side).
- Publish (Block 7), Phase 2 Figma re-link, Phase 3 full code sync, Phase 4 cascade test, Phase 5 `/update-design-system` skill install — all downstream of Block 4 + Block 8 remainder landing first.

## Not touched
- `text-on-inverse`/`surface-inverse` code-side rename (deliberately deferred, see above).

---

# SESSION-RESUME — SCDS Figma/site token parity pass

Separate job from the pipeline above (`CC-PROMPT-figma-site-token-parity.md`).
Started 2026-09-18 on `chore/figma-site-token-parity`.
Stamp: `primitives a3d48b48b21c1e8a` · `semantic 662130988070cb6a`.

| phase | state | evidence |
|---|---|---|
| 0 — preflight | ✅ done | `main` clean + pulled, primary checkout; branch cut with an empty commit (#239); `tokens:build` / `tokens:verify` / `tokens:swift:check` all exit 0 |
| 1 — Figma VARIABLES vs `tokens/` | ✅ done | `output/parity/figma-variables.md` — 391 rows (= the emitters' token×mode count). match 298 · figma-stale 7 · json-stale 0 · missing-in-figma 82 · missing-in-json 0 · documented-exception 4 |
| 2 — Figma SCREENS vs the variables | ✅ done | `output/parity/figma-screens.md` — all 44 pages enumerated; 75 value captions (8 stale), 60 alias captions (4 stale), 5 printed contrast claims (0 supported), 0 of 75 captions bound |
| GATE 1 | ⏸ **WAITING ON LEVI** | `output/parity/README.md` §4. 4a/4b/4c/4d ready to apply; **4e (contrast claims) is blocking** |
| 3 — the SITE vs `tokens/` | ✅ done | `output/parity/site.md` — live `tokens.css` byte-identical to the build; 22/22 routes read live; 0 literals in `src/`; 13/13 of the Figma-stale tokens correct on the live site |
| 4 — apply | ⬜ not started | gated on Gate 1. Site step is a no-op; `tokens/` step has no rows |
| GATE 2 | ⬜ n/a unless Gate 1 rules a `tokens/` row | no site change is proposed, so there is nothing to re-verify post-deploy |

**Resume point:** Gate 1. Read `output/parity/README.md` §4, then apply 4a → 4b → 4c → 4d
in that order, re-reading each write (#45). Do not merge (ADR-018/029).
