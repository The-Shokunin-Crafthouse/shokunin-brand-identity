# BUILD LOG — Shokunin Brand Identity

> Append-only sprint log for this repo. One entry per sprint, written after merge by `sc-learn`. Captures: what shipped, decisions made, problems encountered, how they resolved. Per the 2026-06-07 studio decision, build logs are per-repo; the COO audit reads all of them.

---

## Sprint brand-site-shell (complete; logged retroactively 2026-06-07 by sc-learn via COO audit)

**What was built**
- Token palette update, design wins (2026-05-28 ADR): `color.warmGray.25` added (13-step ladder), full status repaint (success/warning/info), new oxblood `color.status.error.*` primitives with `status.error` rebound off `{shu.500}`, `surface.raised` + `surface.floating` semantics. `src/styles/tokens.css` regenerated via `npm run tokens:build`.
- Site shell at root `src/`: sticky 256px sidebar (lockup, Foundations/Components/Voice nav groups, sidebar-foot `edition · 2026.05` / `SCDS-01`), hash-routed main column on the `minmax(0,880px) 32px 168px` grid.
- Mode toggle in sidebar foot: `Switch` primitive + `ThemeProvider`, flips `data-theme` on `<html>`, swaps brand mark, persists to `localStorage('scds-theme')`.
- Color section fully built: metabar, hero, five chapters including the interactive WCAG contrast checker.
- Sprint 5 follow-through merged all 20 section pages (PR #10, `f30f30e`).

**Key decisions** (see `decisions/decisions.md`)
- 2026-05-28 — Brand-site Color palette adopted into tokens (design wins)
- 2026-06-02 — Code → Figma sync: variable repaint shipped; text styles blocked (MCP cannot load trial fonts)
- 2026-06-03 — Brand → Portal deploy bridge (repository_dispatch + fine-grained PAT)

**Problems / resolutions**
- Figma was internally inconsistent (status tile hex labels read target values over stale bound fills) — the variable repaint reconciled fill ↔ label.
- Three display TextStyles remain stale in Figma pending hand-edit in the desktop app (font-load block).

**Learnings:** three Tier-1 entries appended to `LEARNINGS.md` (2026-06-07, retroactive).
