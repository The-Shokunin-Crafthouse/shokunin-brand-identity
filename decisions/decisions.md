# Decisions Log

Append-only log of non-trivial decisions made on this project. Entries are not edited in place — if a decision is reversed, a new entry records the reversal and references the original.

## What belongs here

- Decisions with irreversible or cross-cutting consequences
- Trade-offs that took meaningful discussion
- Scope changes, gate bypasses, and deferred items
- Stage closures (Gate 1, Gate 2, Gate 3, Gate 4, Close)
- Retrospective entries at day 14 post-launch

## What does not belong here

- Transient implementation notes → stage `build-notes.md`
- Bugs → `stages/04-review/output/punch-list.md`
- Design exploration → `stages/02-design/claude-design/` or `./figma/`

## Entry format

```
## YYYY-MM-DD — [short title]
**Stage:** [01-brief | 02-design | 03-build | 04-review | 05-launch]
**Type:** [Stack / tech choice | UX / design tradeoff | Architecture | Product / scope call]
**Status:** [proposed | accepted | superseded by <date-title> | reversed]

**Context.** What situation forced the decision. Include relevant constraints — timeline, prior decisions, what would happen if no choice were made.
**Decision.** What was chosen. One sentence, starting with a verb.
**Rationale.** Why — the reasoning behind the choice.
**Alternatives considered.** What else was on the table and why it was ruled out. At least one alternative; if only one option existed, say so.
**Consequences.** Easier: what this simplifies or de-risks. Harder: what this constrains or makes more expensive to change.
```

---

## Entries

<!-- Append new entries below. Newest at the bottom. Do not edit historical entries. -->

## 2026-05-26 — Cascadia Mono selected as studio mono
**Stage:** 02-design
**Type:** UX / design tradeoff
**Status:** accepted

**Context.** The Stage 02 brief specifies a Sprint 2 mono-typeface evaluation across Geist Mono, JetBrains Mono, and IBM Plex Mono. Cascadia Mono is not on the candidate list. However, the Direction 01 specimen HTML produced in the brand exploration locked Cascadia Mono into its code and chrome surfaces, and the design-system preview built on top of Direction 01 inherited that choice. The preview is now used end-to-end (eyebrows, buttons, badges, status, motion specs, timestamps), and Cascadia Mono was written to Figma as `font/family/mono` in the Primitives collection alongside the rest of the token set. Reversing it after Figma write requires re-issuing every mono-bearing component spec.

**Decision.** Lock Cascadia Mono as the studio mono typeface. Sprint 2 mono evaluation is closed without running.

**Rationale.** Direction 01 reached typographic resolution earlier than the sprint cadence anticipated, and the visual language of the brand identity now depends on Cascadia Mono's specific personality — geometric without feeling system-default (Geist), characterful without IDE associations (JetBrains), and grotesk-neutral without corporate-tech weight (IBM Plex). The studio's "solve type first, always" principle (studio-memory §2) treats late typeface changes as redesigns; with the preview, token system, and Figma variables already converged on Cascadia, that cost is no longer acceptable.

**Alternatives considered.**
- **Geist Mono** — Too geometric. Reads as system-default sans-serif rendered monospaced; lacks the slight personality the chrome surfaces want.
- **JetBrains Mono** — Heavy code-IDE associations. The brand identity register is a precision creative studio, not a developer tool company; the font carries the wrong room.
- **IBM Plex Mono** — Corporate-tech associations. Plex's grotesk geometry is excellent technically but conflicts with the crafthouse / artisan register; reads as enterprise-software.

**Consequences.**
- *Easier.* Typographic system locked across every surface (chrome, code, buttons, badges, eyebrows, motion specs). Cascadia Mono is freely licensed and CDN-served via Google Fonts at weights 300/400/500/600 with no licensing path needed. Preview and Figma primitives already converged — no rework. Sprint 2 capacity freed for other Gate 2 work.
- *Harder.* Deviates from the documented sprint cadence and the candidate-evaluation rule in the original brief. Future reversal requires an explicit superseding entry in this log and re-issue of `font/family/mono` in the Primitives collection plus every downstream component spec. Sets a precedent of pulling Sprint 2 typeface work into Sprint 1 when exploration converges early — acceptable here, but the rule of thumb that "candidate evaluation happens before lock-in" is now softened.
