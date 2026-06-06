<!-- ============================================================ -->
<!-- CLAUDE.md — REPO-ROOT ADAPTER (thin)                         -->
<!-- ============================================================ -->
<!-- Claude Code auto-loads THIS file (repo root) at session      -->
<!-- start — ICM Layer 0. Studio identity, principles, quality    -->
<!-- bar, stack DEFAULTS, gates, creative defaults, and the       -->
<!-- learnings index load GLOBALLY from ~/.claude/CLAUDE.md        -->
<!-- (which @imports canonical studio-memory). Do NOT restate any  -->
<!-- studio content here — only what is specific to THIS repo,     -->
<!-- plus the repo-local navigation chain. Pointers, not copies.   -->
<!-- ============================================================ -->

# Claude Code — Adapter — shokunin-brand-identity

You are working inside a Shokunin Crafthouse project workspace. Studio standards load globally (`~/.claude/CLAUDE.md` → studio-memory core + `learnings/INDEX.md`). `WORKSPACE.md` at this repo root is binding for everything project-specific.

## Repo identity

**Shokunin Brand Identity** — the studio's complete brand + **design-system source**: tokens, type, color, mark, voice, resolved to a DTCG token schema and a living brand reference site at `brand.shokunincrafthouse.com`. Authoritative identity is `WORKSPACE.md`.

This repo is **upstream** of every Shokunin-branded property: it *authors* the shared design system; the others *consume* it.

## Stack deviations from studio defaults

- Brand reference site built with **React + Vite** (not Next.js App Router); **static deploy** to `brand.shokunincrafthouse.com`.
- Tokens authored as **DTCG JSON** and compiled to `tokens.css` (CSS custom properties).

## Repo learnings

Project-specific learnings live in `LEARNINGS.md`. Read at session start; append at sprint close (`sc-learn`). Promote to studio-wide `studio-memory/learnings/` only on the compounding test. Never duplicate studio-wide learnings down into here.

## Required reading (in order)

1. `WORKSPACE.md` — project identity, non-negotiables, operating rules, and the `Current sprint:` pointer
2. `../studio-memory/WORKFLOW.md` — **canonical** stage sequence + approval gates (invariant; referenced, never copied)
3. The active sprint's `CONTEXT.md` — path from the `Current sprint:` field; the sprint contract, **Inputs table**, and pre-output audit checklist
4. Only the files named in that CONTEXT.md **Inputs table** — `_config/` sections loaded selectively, never in full
5. `decisions/decisions.md` — prior decisions; do not reopen without reason

## Behaviors for this workspace

- Treat `WORKSPACE.md` as a binding directive, not background context.
- **Token source (this repo is the origin):** the shared design system is *authored here* — `_config/design-system/token-map.md` + the Figma Primitives collection are the authoring surface, compiled to `tokens.css`. Never improvise a value; code imports are generated from the active source, never hand-authored (per `decisions/decisions.md`).
- When a stage boundary is ambiguous, ask before proceeding — never cross a gate silently.
- Decide-and-log: make reversible, in-standard, in-scope calls and log them to `decisions/decisions.md`; ask only for scope/money/live-service/brand-direction calls (contract §1).
- Surface ambiguity back to the owning stage. Do not improvise and continue.
- Every new top-level folder requires an update to `workspace.manifest.yaml`.

## What this adapter does NOT contain

Studio content — identity, principles, quality criteria, stack defaults, gates, creative defaults — loads globally via the import chain, not here. Project rules live in `WORKSPACE.md` so they bind every model and contributor. Pointers only.
