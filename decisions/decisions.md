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
