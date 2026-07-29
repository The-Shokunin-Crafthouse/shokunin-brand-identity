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

## Done — session 3 (2026-07-28)
| Item | Status |
|---|---|
| **BLOCKER FOUND + FIXED — components were bound to 3 foreign variable libraries** | ✅ Surfaced while reading `StatusPill` for 4.7. Bound IDs were `VariableID:<libKey>/<id>` (remote), not local. Census: **~3,250 remote vs ~490 local bindings** across 27 pages. Meant (a) every Block 2/3/5 + P2-8 token fix was invisible in components — `Tab` still carried `warm-gray/400 = #9a9388`, the exact pre-rebuild value; (b) publishing (Block 7) would have shipped a library depending on 3 unsubscribable foreign files; (c) Figma-is-truth was never actually true for components. **Rebound all 3,247 bindings to the local collections; verified 0 remote / 0 unresolved on all 27 pages.** Full remap table + rationale: `decisions/decisions.md` → "SCDS Block 4 preflight". |
| 2 tokens added (forced by the rebind) | ✅ `radius/s`=16 had 48 bindings and no local equivalent (scale is 0/3/8/9999) — mapping to `radius/surface`(8) would have halved 48 radii silently. Added primitive `radius/large` (16px) + semantic `radius/surfaceLarge`. Code-synced: `tokens/primitives.json`, `tokens/semantic.json`, regenerated `src/styles/tokens.css` + `public/tokens.css`. `tokens:build` + `build` exit 0. Diff is 13 lines. |
| Block 4.1 (partial) | ✅ `Pulse` + `NavLink`: `state`→`State`, values capitalised (`Off/On`, `Default/Current`). `Badge`/`Pill` intentionally NOT renamed — 4.7 consolidation supersedes it. |
| Block 4.7 analysis (not yet built) | 🟡 Design settled, build pending. `StatusPill`(12 ad-hoc statuses) + `Pill`(6 tones) are the real duplication; `Badge`(pass/fail, mono, 4px, bordered) is a *result marker*, a different component wearing a similar name — keeping it separate is the deviation from 4.7's literal "one component" wording. Target model: **one `StatusPill`** with `Tone` (Neutral/Info/Success/Warning/Danger/Live/Progress) × `Emphasis` (Solid/Subtle) = 14 variants, plus a `Dot` boolean and a `Label` TEXT property (so consumers write their own words instead of 18 baked vocabularies). Contrast measured for every cell — see below. Old sets' instance counts captured: StatusPill 18 instances live, Pill 0. |

## Done — session 4 (2026-07-28)
| Item | Status |
|---|---|
| **Block 4.5 — geometry bound to the scale** | ✅ **2,362 bindings across 27 pages, 0 errors, 0 visual change.** Radius → `radius/{none,control,surface,surfaceLarge,pill}`; padding → `padding-inline/*`→`padding/*`→primitive `space/*`; gap → `gap/*`→primitive. Bound by **exact value match only** — nothing was re-sized. Audit estimated ~85 radii + ~98 padding/gap on 14 pages; real figure across all 27 is 2,362. Detail + per-page counts: `decisions/decisions.md` → "Block 4.5". |

**4.5 scope rules (reuse these if re-running):** exclude `COMPONENT_SET` wrappers (Figma gives them their own radius 5 / spacing 200 / padding 40 — editor chrome, not shipped, and it produced a false positive on every page in the first pass); skip `INSTANCE` subtrees (binding there writes an override, not a fix); leave `0` unbound (no `space/0` exists and 0 is absence, not a step).

| **Block 4.10 — descriptions** | ✅ All **21 core sets** now carry what-it-is / states / when-to-use / what-instead, including explicit notes of still-open Block-4 gaps. Census: 114 top-level components in the file, 43 described, 71 not (Mark 10 → 4.8 · Icons 15 → exclude by rule · Device 7 → mockup chrome · ~34 agency/portal composites → need real inspection, not name-guessing). |
| **Block 4.4 — SearchInput** | ✅ `Filled`→`Active`; variants reordered to canonical Default / Hover / Focus / Active / Disabled. |
| **Block 4.6 — text styles** | ✅ **26 nodes** styled on component pages by exact family+weight+size match (0 visual change). 42 left unstyled — off-scale type combos with no matching style (see below). |

### ⚠️ Platform bug — never put an apostrophe in a string written through `use_figma`
The MCP transport HTML-escapes `'` into the literal `&#39;`, and Figma stores it verbatim — `the studio's raise` renders as `the studio&#39;s raise` in the assets panel. Corrupted 5 of 21 descriptions. Caught only because each write was compared with `node.description === desc` immediately after (the write "succeeds" either way). **Always verify string writes by equality, and screen with `/&#\d+;|&amp;|&quot;/`.** Em dashes and `~` pass through fine. Same class as the lineHeight/PERCENT and Effect.color limits already logged.

### Useful: these APIs work cross-page without `setCurrentPageAsync`
`getNodeByIdAsync`, `node.description = …`, and `page.findAllWithCriteria` all work on unloaded pages. All 21 descriptions landed in ONE call; a whole-file component census in one more. The one-switch-per-call rule applies to page *mutation* context, not these. This collapses a lot of would-be fan-out.

### 4.6 off-scale type — 42 nodes, NOT snapped
No text style exists for these combos, so they are off the declared scale, not merely unbound. Snapping changes rendered type = typography call:
`Haas Grot Text 65 Medium 13` ×11 · `Text 75 Bold 11` ×8 · `Cascadia Mono SemiBold 14` ×4 · `Text 65 Medium 12` ×4 · `Disp 75 Bold 11` ×2 · `Text 65 Medium 24` ×2 · `Text 75 Bold 13` ×2 · `Disp 65 Medium 13` ×2 · `Disp 95 Black 11` ×2 · 5 singletons.
**Wider:** 361 TEXT nodes file-wide carry no style; the bulk are `Color` foundations specimen labels written during Block 5 at off-scale sizes — self-inflicted, fix with the same decision.

**4.5 off-scale values — found, deliberately NOT snapped.** Genuine P2-7 violations. Snapping changes rendered geometry = design call, not a binding call. Left unbound and listed so the fix is one deliberate pass with a screenshot check:
`radius 1` Stepper ×12 · `radius 2` Doc ×2 · `radius 12` Field · `radius 20` Row(portal) · `radius 28` Card(portal) · `radius 24/28/20` mixed-corner Doc node · `padding 5` Badge+Nav · `padding 20`/`28` Nav+Doc · `padding 36` Stat ×2.

### 4.7 contrast matrix (measured, WCAG 2.x — do not re-derive)
Subtle (bg `surface/page`, tone border, tone ink text) passes everywhere except Progress-light (1.14 — yellow, unusable as text → Progress is Solid-only).
Solid (tone fill + on-token) passes except **Success dark 3.98** and **Danger dark 4.03**.
Root cause of those two: `color/text/onAccent` is `#ffffff` in *both* modes, so dark-mode mid-tone fills have no dark-ink alternative. A correct fix needs a per-tone on-fill token (4 new semantic tokens) — that is Block 2 colour work, **not** something to improvise inside a component pass. Build 4.7 with the passing bindings and carry those two cells as a logged exception.
`Accent` was dropped as a Tone: 3.97 Solid / 3.23 Subtle — both sub-AA, the known brand-accent exception (learning #67). Accent survives only as a `Dot` colour (non-text).

## Platform limitations discovered (logged as ADRs, do not re-attempt)
1. **`TextStyle.lineHeight`/`letterSpacing` cannot be live-bound to a variable and stay PERCENT.** `setBoundVariable` succeeds with no error but silently coerces the resolved value to raw `PIXELS` (e.g. a ratio of `1.1` becomes `1.1px`, collapsing the line). Caught via mandatory fresh re-read before moving on, reverted, redone as literal `PERCENT` values matching the same ratio scale. Same limitation class as the already-documented `motion/easing/*` code-only tier.
2. **`Effect.color` binding on effect styles overwrites the FULL RGBA including alpha.** Binding `shadow/raised`/`shadow/inset` layer colours to `warmGray/800`/`utility/white` (both fully opaque) flattened all 4 layers' intended 0.10/0.08/0.90/0.70 opacity to fully opaque. Caught via fresh re-read, reverted, colour left unbound (rename-only fix applied instead).

## Blocked — needs Levi at the desktop Figma app (unchanged)
- **1.1** Move `_Archive` (page `1:7`) → new `SCDS Archive` file. Plugin API cannot move nodes cross-file.
- **1.2** Font rebind Trial→Pro. `Neue Haas Grotesk Display/Text Pro` still absent from `listAvailableFontsAsync()` this session — confirmed unchanged from last session, not a re-check artifact. Once available: only 2 variable edits (`font/family/display` `VariableID:3:3`, `font/family/text` `VariableID:3:4`) cascade to all 26 text styles.

## Still open (not started)
- **Block 4** (components) — 4.1 partial + **4.4, 4.5, 4.6, 4.10 DONE**. Remaining: **4.2** five-state Toggle/Stepper/NavItem · **4.3** Tab `Selected` boolean (match Segment) · **4.7** build the StatusPill consolidation (design + contrast settled above) · **4.8** Mark → one Type×Theme set · **4.9** Progress `BarActive` off the Variant axis.
  - All four remaining items are **design-modelling work, not mechanical** — each invents or restructures variants. The mechanical sweep of Block 4 is finished.
  - Follow-ups spun out of Block 4: off-scale geometry (4.5 list), off-scale type (4.6 list), descriptions for ~34 agency/portal composites, and the Block 2 per-tone on-fill tokens.
  - **4.9 data already read:** `Progress` `Variant` = Bar/BarActive/Circular/Step. `Bar` is 320×4 (fill 24), `BarActive` is 320×6 (fill 190) — they differ only in bar height and fill length, so `BarActive` is an emphasis of `Bar`, not a fourth type. Two-axis model (`Type` Bar/Circular/Step × `Emphasis` Default/Active) needs a real visual delta invented for Circular/Step Active — that is design work, not a rename; don't fake it with identical clones. `size/progress/bar-height`(4) and `bar-height-active`(6) tokens already exist.
  - **4.3 data already read:** `Tab` `State` = Default/Hover/Focus/Active/Disabled/**Selected** (6 flat). Each variant is `Frame 2`(→`Frame 4` + `Icon/arrow-right` instance) + `Rectangle 1` (147×1 underline). Target: 5 states × `Selected` boolean = 10 variants, matching `Segment`. Disabled carries `opacity 0.5` at component level.
- **Block 2 follow-up raised by 4.7:** per-tone on-fill tokens (`status/*-onFill`) so Solid Success/Danger reach AA in dark mode. 4 semantic tokens + code sync.
- **Block 8 remainder** (code sync beyond colour): `font/text/*` ↔ Text Style name mapping in the generator (11 Figma-only text styles need export), `.nav__brand`'s `--sc-p-font-size-18`→`offscale-18` fix, `shokunincrafthouse.com` fork retirement + teal re-skin, `brand.shokunincrafthouse.com` `@font-face` addition, `clients` hardcoded hex/px cleanup, `motion/press/release-duration` naming resolution in the generator (confirmed Block 8 gap, not Figma-side).
- Publish (Block 7), Phase 2 Figma re-link, Phase 3 full code sync, Phase 4 cascade test, Phase 5 `/update-design-system` skill install — all downstream of Block 4 + Block 8 remainder landing first.

## Not touched
- `text-on-inverse`/`surface-inverse` code-side rename (deliberately deferred, see above).
