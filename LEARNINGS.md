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

## 2026-08-17 — A contrast figure in a `$description` is a claim that rots when a ramp moves
**Context:** `text.secondary` documented "AA on surface.sunk (4.6:1)"; the 2026-07-28 P2-8 rebuild darkened `warmGray.200` under it and the real ratio fell to 4.42:1 — below AA — with the prose still asserting a pass. Re-verifying all 78 quoted figures found 12 wrong: 5 rotted the same way, 3 were never accurate (`status.success.light` claimed "AA ~4.9:1" for a pair that measures 3.69:1, contradicted eleven lines later by its own `ink` token), and the rest described retired values.
**Lesson:** A contrast ratio written in prose beside a token is unguarded by construction — it is a snapshot of a relationship between two values, either of which can move independently. Derive AA compliance from the token tree in CI (`scripts/verify-contrast.mjs`, check 1) so a ramp move fails on its own, and require every prose figure to be registered (check 3) so a new one cannot be added unguarded. Two corollaries: verify a historical figure against its own era's values before calling it wrong (the pre-swap border ratios 1.22/1.44 reproduce exactly and were not stale), and re-derive the *text tier* rather than forbidding the surface when the surface is a common ground — forbidding `surface.sunk` would have banned metadata on cards.
**Trigger:** Any edit to a color ramp, any new contrast figure written into a token `$description`, and any consumer reporting a local AA workaround (fix upstream, not in the consumer).
