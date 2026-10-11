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

## 2026-08-17 — A doc that calls itself the source of truth, with nothing generating from it, is the thing most likely to be wrong
**Context:** `token-map.md` declared "Both are downstream of this file" and drifted ~3 months — still documenting the `color/shu/*` vermilion scale retired 2026-07-09, the pre-desaturation page ground, and 100/23 variable counts against a real 133/88, while omitting teal, signal, focusRing, divider, every `-ink` tier, four surfaces and the whole tertiary tier. Same root cause as the stale contrast figures fixed the same day, one layer up.
**Lesson:** The "source of truth" label is a claim about process, and it is only true if something *fails* when the file disagrees with reality. Invert it: make the machine-readable artifact upstream, generate the human-readable mirror, stamp it with a source fingerprint, and fail CI when it is stale. Reuse the real build's naming logic in the generator rather than reimplementing it — that is what makes the doc structurally unable to lie about CSS var names (verified: all 268 cross-checked against `tokens.css`, zero mismatches). Keep genuinely non-derivable prose as literals in the generator, and flag anything unverifiable (breakpoints exist in neither the token files nor the Figma library) rather than letting it imply it is synced.
**Trigger:** Any file that restates values owned elsewhere — token maps, API tables, config mirrors, component inventories. If nothing regenerates or checks it, treat its contents as unverified regardless of what its header claims.

## 2026-09-06 — `verify-contrast.mjs`'s orphan check pattern-matches "4.5:1" in prose, not just measured pairs
**Context:** Writing `dark.textTertiary`'s re-derivation note as "clear AA 4.5:1 on every dark surface" failed check 3 (orphan figures) — the regex that scans `$description` text for `N.NN:1` patterns caught the AA threshold itself, not a measured contrast pair, and demanded it be registered in `CLAIMS` or `HISTORICAL`.
**Lesson:** The orphan-figure regex (`/(\d+(?:\.\d+)?):1/g`) cannot distinguish "the WCAG AA threshold" from "a measured ratio" — both read as `4.5:1`. Write "clear WCAG AA" (no colon-one) when stating the bar itself, and reserve the `N.NN:1` shape for numbers that are genuinely a measured fg/bg pair you are registering.
**Trigger:** Any new or edited `$description` in `tokens/*.json` that states the AA/AAA threshold rather than a specific measured ratio.

## 2026-09-06 — A "text-only" token that no text-tier check covers is unguarded by name alone
**Context:** WQ-040 fixed two dark AA failures a consumer found; WQ-041 found a third the same way, one day later. All three were `*-ink` or text tiers on `surface.raised`, and `tokens:verify` was green for every one of them — check 1 iterated a hand-written `TEXT_TIERS` array that had never gained the three `status.*-ink` tokens, even though "text-only tier" is the first phrase in each of their `$description`s.
**Lesson:** A list of "things to check" that is maintained separately from the things themselves will drift the moment a token is added. When the token file already states a token's tier in prose, the check should be derived from that statement or the two should be reconciled in CI — a `$description` saying "text-only tier" and a `TEXT_TIERS` array that omits it is a contradiction the repo could hold indefinitely. Second: tune a text tier against the *tightest* ground it is permitted on, not the page ground. All three inks quoted a `surfacePage` figure and all three failed on the card ground two shades away.
**Trigger:** Adding any token to `tokens/*.json` whose description names a usage tier, and any consumer reporting an AA failure on a pair the verifier passes.

## 2026-09-06 — Two tokens formatted identically make a string replace a two-token edit
**Context:** WQ-041 repointed `status.success-ink`'s dark mode ref with `s.replace('"dark":  "{color.status.success.dark}"', ...)`. The *base* `status.success` token carries the same ref with the same two-space alignment, so the replace hit both and silently repainted a fill tier. `tokens:verify` stayed green through the whole PR: base `status.*` tokens are outside `TEXT_TIERS` by design, and the one CLAIMS row naming `status.success.dark` resolves the primitive path, not the semantic ref, so no check could see it move.
**Lesson:** In a token file, a `$value`/mode ref is not a unique string — a semantic tier and the base it derives from routinely carry the same ref, formatted the same way. Address the edit by path (walk to the node) or assert the replace count is 1 before writing. And note what the guard could not do: check 1 proves a *tier* clears AA, it does not prove a token still points where its name says. A ref move inside a passing system is invisible to a contrast checker.
**Trigger:** Any scripted edit to `tokens/*.json` that matches on a `{...}` reference string rather than walking to the node.

## 2026-09-24 — A Figma node id in a `$description` trips the orphan-figure check
**Context:** The slate dark ladder's descriptions cited their source as "Frame 19 (node 156:15)". `tokens:verify` check 3 failed with "quotes 156:1": the orphan regex `(\d+(?:\.\d+)?):1` matched the first three characters of the node id.
**Lesson:** Any `N:1…` substring in a token description reads as a contrast ratio, not only the AA threshold (see 2026-09-06). Cite Figma nodes in their URL form (`node-id 156-15`) inside `tokens/*.json`. Prose outside the token files, such as `decisions.md`, is not scanned and can keep the colon form.
**Trigger:** Any `$description` that cites a Figma node, a time (`10:15`) or any other colon-separated number.

## 2026-10-10 — A lab seed that reuses an approved material survives; a seed that invents an element does not
**Context:** physical-controls sprint (feat/physical-controls-2 to -9). Seeds that reused the already-tuned Button key (SegmentedControl indicator, Stepper keys, Slider thumb lift) were picked as concept A. Every seed that added an element the component did not have was superseded: the Switch re-light (reverted the same day), the Card plate and well (replaced by Levi's own flat plus glass), the Badge LED (taken as a whole-pill glow instead), the Avatar ring (removed, "keep this one flat"), the Alert LED ("thats ai slop") and the Alert plate (Alert folded into Toast). Six reworks, each with tokens, Figma ops and a decisions entry to undo. The components that landed first time had a reference from Levi: Button (Drams OP-1), Input (his filled-field sheet), Card (his Figma Glass), Toast (the library set).
**Lesson:** For a material pass, the seed is either a material Levi already approved or the component exactly as shipped. A new element (LED, ring, plate, re-light) needs his reference before it gets tokens, CSS or Figma nodes; propose it in one line and wait.
**Trigger:** An audit row whose "Change" column names an element the component does not render today.

## 2026-10-10 — The one light is a rule graded by verify-light, not a shared token
**Context:** Phase 0 asked for shade and highlight offsets in one place. Each shadow token is one composite string, and `tokens-to-swift` and `tune-figma-sync` cannot parse a `calc()` offset inside it, so no shared light-source token was built (decision 2026-10-07, Switch re-light entry). The rule (shade toward 135°, highlight toward 315°, face gradients at `135deg`) is graded by `scripts/verify-light.mjs` inside `tokens:verify`. The Switch is the named exception, lit from the top.
**Lesson:** A new shadow token passes `tokens:verify` only if it falls down-right with any highlight up-left. Do not try to factor the offsets into a token until both generators parse it; extend verify-light instead.
**Trigger:** Adding or editing any `shadow.*` token, or a request to "centralise the light source".
