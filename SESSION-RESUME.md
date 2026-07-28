# SESSION-RESUME — SCDS audit fix/publish pipeline

Multi-session job (CC-PROMPT-scds-pipeline.md). Started 2026-07-28. Read that file + `SCDS-AUDIT-2026-07-25.md` before continuing.

## Gate 1 — RESOLVED 2026-07-28
- Brand hue: **teal everywhere**. Flagship site (`shokunincrafthouse.com`) red `shu` ramp retires at token level — layout/WebGL/scroll untouched.
- Theming: **3rd `Brand` collection approved** (Studio|Clients|Docs modes) — **but see "Open question" below, may be moot now.**
- `space/micro/*`: rule widened (2pt tier kept as a documented exception), not retired.
- All 3 logged: `decisions/decisions.md` → "2026-07-28 — SCDS audit Block 0".

## Done this session
| Item | Status |
|---|---|
| Audit 0.1 (bare tokens.css URL) | ✅ verified — 200, not 404. No incident. |
| Audit 8.8 (`#732020`→`#dd4c4c` propagate to code) | ✅ `tokens/primitives.json` + `tokens:build` + `build` — both exit 0. |
| Figma: `font/family/sans` deduped (now aliases `font/family/display` instead of a literal duplicate value) | ✅ |
| Figma Block 2.3 (border/subtle↔default light-mode swap) | ✅ |
| Figma Block 2.5 (border/focus → focusRing/light+dark, was teal) | ✅ |
| Figma Block 2.6 partial (dark/border→alias raised4, dark/borderSubtle→alias raised2, dedup) | ✅ |
| Figma Block 2.1 (`-ink` tier, learning #56) | ✅ New semantic tokens: `color/status/success-ink`, `color/status/warning-ink`, `color/status/info-ink`, `color/interactive/hover-ink`. All computed hue-locked, ≥4.5:1 on their declared ground. 5 new backing primitives (`*InkLight`/`*InkDark`). **Not yet consumed by any component — that's Block 4 wiring, separate pass.** |
| Figma Block 2.2 (text/onAccent vs brand/accent) | ✅ documented via variable descriptions (pair `text.onAccent` with `accentFill` only) — no value change, no component wiring yet. |
| `learnings/brand-accent-hover-aa-exception.md` #67 ratio | ✅ corrected ~3.8 → 3.23 |

## Blocked — needs Levi at the desktop Figma app
- **1.1** Move `_Archive` (page `1:7`) → new `SCDS Archive` file. Plugin API cannot move nodes cross-file (confirmed, matches the 2026-07-09 decisions.md method note). Human cut/paste only.
- **1.2** Font rebind Trial→Pro. Confirmed blocked: `Neue Haas Grotesk Display Pro` / `...Text Pro` don't exist in this Figma session's font list at all (not a license/loadFontAsync quirk — the machine running Figma doesn't have them installed). **The fix is small once at a desktop with the Pro fonts installed: only 2 variable edits needed**, not 26 per-style edits — `font/family/display` (`VariableID:3:3`) and `font/family/text` (`VariableID:3:4`) are STRING variables bound by all 26 text styles, so editing those 2 values cascades everywhere. Do this from Figma desktop with the Pro `.otf`/`.ttf` installed locally, then re-run a fresh `use_figma` read to confirm.

## Still open (not started, ranked by audit dependency order)
- **Block 2 remainder:** 2.4 divider realias — **already correct**, audit was stale (found genuine alpha-graduated hierarchy already in place, likely landed in scds-v2 Phase 1). 2.6 remainder — warmGray 200–400 span rebuild (P2-8) is a real perceptual-ramp redesign, not a mechanical alias fix; deferred, needs a dedicated pass. 2.7 done (see above).
- **Block 3** (typography): lineHeight/tracking binding across 26 text styles, `*/light` dupes, `nav/header`/`nav/node`, display tracking, type-scale ratio ADR. Not started — untouched this session.
- **Block 5** (foundations): empty Principles/Color/Type/Space/Motion pages, grid styles, `inkRgb`/`whiteRgb` STRING primitives (repo has them, Figma doesn't — confirmed still missing), naming normalization, `motion/press/release-duration` — this one is actually a **code-generator mapping gap** (Block 8), not a Figma duplicate; Figma's naming is already fine.
- **Block 6** (Brand collection): **open question below — check with Levi before building.**

## Open question for Levi before Block 6
The Brand-collection rationale in the audit was mostly the **hue split** (red vs teal per site). That's gone now — teal won, unified. The only remaining per-site divergence is font-family (studio site's 5 extra undeclared families) and some client-portal layout vars, neither of which lives in Figma variables today. Building a 3-mode collection for ~zero real Figma-level divergence risks being unused infrastructure. Recommend: hold Block 6 until Block 8 (code sync) clarifies whether anything Figma-side actually needs a per-site mode, rather than build it now on spec.

## Not touched
- Publish (Block 7), Phase 2 Figma re-link, Phase 3 code sync, Phase 5 `/update-design-system` skill — all downstream of Blocks 1/3/5/6 landing first.
