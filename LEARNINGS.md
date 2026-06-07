# LEARNINGS — shokunin-brand-identity

> Repo-specific learnings (Tier 1, workflow-contract §8): quirks, gotchas, stack-specific fixes for THIS repo (React + Vite brand site; DTCG token authoring; the design-system source). Loaded via the root `CLAUDE.md` adapter at session start; appended at sprint close by `sc-learn`.
> Promote an entry up to studio-wide `studio-memory/learnings/` only when it passes the compounding test — *will this change how an unrelated future project is built?* Do not duplicate studio-wide learnings down into here.

## 2026-06-07 — Figma MCP cannot edit TextStyles whose fonts won't load (retroactive, brand-site-shell)
**Context:** Code → Figma sync of the `Color — DL` repaint (2026-06-02 ADR). Variable collections synced cleanly; every TextStyle edit failed because `use_figma` cannot load the brand trial fonts (`loadFontAsync` throws "font family does not exist").
**Lesson:** In this repo, code → Figma sync covers variables only. `display/sm`, `display/lg`, and `offscale/display/200` must be hand-edited in the Figma desktop app whenever type tokens change.
**Trigger:** Any sync pass that touches type composition tokens or Figma text styles.

## 2026-06-07 — `color.status.error` must never alias the shu band (retroactive, brand-site-shell)
**Context:** The token source had `status.error` → `{color.shu.500}`; the Stage-02 Color page argued "error is oxblood, not shu." Design won (2026-05-28 ADR) — error rebound to dedicated oxblood primitives.
**Lesson:** Brand accent and danger can never share a hue in this system. Any new status or signal token gets its own primitive, never an alias into the brand band.
**Trigger:** Token edits adding or rebinding status/signal colors.

## 2026-06-07 — Cross-repo dispatch needs a fine-grained PAT; submodule consumers need `--remote` (retroactive, brand-site-shell)
**Context:** Brand → Portal deploy bridge (2026-06-03 ADR). `GITHUB_TOKEN` cannot fire `repository_dispatch` cross-repo; the portal's `git submodule update --init --recursive` would rebuild against the recorded SHA, not the brand tip.
**Lesson:** The bridge requires `PORTAL_DISPATCH_TOKEN` (fine-grained PAT, Contents: write · Metadata: read) on this repo, and the consumer side must pull with `--remote` to get the dispatched tip.
**Trigger:** Touching `deploy.yml`, the portal bridge, or adding another downstream consumer of this repo.
