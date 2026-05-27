# Sprint 3 — Voice System + AI Voice Checker

**Stage:** 03-build
**Sprint:** 3
**Branch:** `feat/sprint-3-voice`
**Status:** approved
**Approved:** 2026-05-27 (Levi)
**Resolves:** `sc-brand-system-spec.md` §5 Sprint 3 scope · §6 success criteria 3a–3f · §7 Skill A (sc-voice-checker)

---

## Inputs

| Source | File/Location | Section/Scope | Why |
|---|---|---|---|
| Project spec | `sc-brand-system-spec.md` | §3 (seven principles), §5 Sprint 3, §6 (3a–3f), §7 Skill A | Sprint scope, principles for rubric, criteria |
| Source voice skeleton | `~/Library/Application Support/Claude/local-agent-mode-sessions/.../skills/sc-brand-voice/` | `SKILL.md` + 3 refs (`studio-identity.md`, `voice-registers.md`, `anti-patterns.md`) | Skeleton to expand · anti-pattern source-of-truth for 3b · canonical opener/Overview/Luma patterns |
| Studio principles | `WORKSPACE.md` §5 · spec §3 | Full | Seven principles mapped to voice rubric |
| Decisions log | `decisions/decisions.md` | Sprint 2 entries | Voice should not contradict mark / type lock-ins |
| Skill format reference | `skills/sc-token-explorer/SKILL.md` | Full | Template structure for new SKILL.md (frontmatter, pre-phase, query logic, output format, calibration) |
| Current voice folder | `_config/voice/` | Empty | Destination for brand-voice.md |

---

## Approved resolutions (pre-work)

1. **Source-of-truth handoff.** The on-disk `sc-brand-voice` skill is the skeleton — content carries forward verbatim where it earns its place, expanded where Sprint 3 fields demand more (opening pattern, sentence structure, density, perspective, allows/forbids per 3a). The skeleton skill itself is not edited or relocated; this sprint produces `_config/voice/brand-voice.md` as the standalone artifact. Future drift gets resolved in `_config/voice/` first, skeleton second.
2. **Anti-pattern coverage rule.** Every Hard Rule, Soft Disqualifier, AI-Slop Pattern, and Wit-Check pass/fail from `anti-patterns.md` survives the rewrite into structured format (3b). Net new anti-patterns may be added if discovered during register expansion — they do not replace originals. Corrected versions are authored where the source provides only a failing example — roughly 12 new corrected lines.
3. **Seven-principle rubric mapping.** The seven Shokunin principles (spec §3 · WORKSPACE.md §5) translate to voice-specific 1–5 rubrics — each principle paired with at least one voice-pass signal and one voice-fail signal, both quoted from the canonical examples or the anti-pattern library. No principle gets a generic rubric.
4. **Canonical copy examples are real, not synthetic.** 12 examples · 3 per register. Studio/marketing draws from the actual studio positioning (the "design that sticks beyond the craft" headline tree). Case study examples extend the canonical Formstack and Luma openings rather than inventing fictional clients. Proposal examples address realistic studio engagements. Product examples extend the Luma canonical pattern. No placeholders, no lorem, no "[client name]" fields.
5. **Registers 2 and 3 have no canonical opening example on disk — Sprint 3 authors these as original copy, not extensions of existing examples.** Register 1 inherits the Formstack Overview. Register 4 inherits the Luma opener. Registers 2 and 3 produce net-new canonical opening exemplars, written to the posture/structure guidance already in the skeleton.

---

## Process

### Part 1 — Voice document (`_config/voice/brand-voice.md`)

1. Header block · purpose · scope · how the document is loaded by downstream skills.
2. Core voice principles section · port the seven principles from the skeleton's "Core voice principles" plus the studio-identity context (sticky/outcomes-forward positioning). One paragraph each.
3. **Four-register full spec (3a).** For each of `studio/marketing`, `case study`, `client proposal`, `product copy`:
   - Audience · Job · Posture
   - **Opening pattern** — load-bearing first sentence form, with canonical example
   - **Sentence structure** — typical clause shapes, when long carries reasoning vs when short lands a beat
   - **Density** — words-per-sentence range · paragraphs-per-section guidance · list usage rules
   - **Perspective** — I / We / studio-absent · when each fires
   - **Allows** — moves that pass (with one example each, net-new for all four registers per gap #3)
   - **Forbids** — moves that fail (with one example each)
   - Section close: rhythm summary
4. **Anti-pattern library — structured format (3b).** Replace prose anti-patterns doc with structured table per category (Hard Rules · Soft Disqualifiers · AI-Slop Patterns · Wit Check). Each entry:
   - **Pattern name**
   - **Example** (failing line, quoted)
   - **Why it fails** (one sentence)
   - **Corrected version** (rewritten line — authored where source lacks it)
   No source anti-pattern dropped. Net-new additions allowed and marked.
5. **Twelve canonical copy examples (3c).** Three per register. Each example labeled with surface (e.g. "Studio homepage subhead" · "Case study Opportunity statement" · "Proposal Creative Direction paragraph" · "App Store first three lines"). Real copy only.

### Part 2 — Voice Checker skill (`skills/sc-voice-checker/SKILL.md`)

6. Frontmatter · `name: sc-voice-checker` · `description` covering trigger phrases from spec §7 ("check this against the voice" · "is this on-voice" · "voice check" · "score this" · "does this sound like the studio").
7. **Pre-audit phase** — mandatory load sequence: `_config/voice/brand-voice.md` (registers + principles + canonical examples + anti-pattern library). Identify register before scoring. Refuse to score if register cannot be identified and user has not declared one.
8. **Seven-principle scoring rubric** — one block per principle. Each block specifies:
   - The principle (verbatim from spec §3)
   - Voice translation (what this principle looks like in copy)
   - 1–5 anchors (5 = exemplar · 3 = passable · 1 = violation), each anchor described in voice-specific terms
   - At least one pass signal (quoted from canonical examples)
   - At least one fail signal (quoted from anti-pattern library)
9. **Anti-pattern scan procedure** — zero-tolerance pass over structured library. Each hit reported with: pattern name · exact quoted line · why-it-fails one-liner · directional fix (full rewrite handed to `copy-surgeon`, per spec §7 design constraint).
10. **Output format** — exact template:
    - Register identified
    - 7-principle scorecard (principle · score · quoted line · one-sentence rationale)
    - Overall verdict: On-voice (4.0–5.0) · Needs work (2.5–3.9) · Off-voice (1.0–2.4)
    - Anti-pattern report (or "none" if clean)
    - 1–3 priority rewrite targets (line · principle violated · directional fix)
11. **Calibration examples** — minimum two: one known-good (passes all 7, no anti-patterns) and one known-bad (fails 3+ principles, trips 3+ anti-patterns by name). Both shown with full output the skill would produce so the format is unambiguous on first use.

### Part 3 — Audit before PR

12. Run success criteria checklist below. Verify 3a–3f all pass. Update Audit table with results.
13. Update `workspace.manifest.yaml` `project.currentSprint` field. Open PR.

---

## Outputs

| Artifact | Location | Format |
|---|---|---|
| Brand voice document | `_config/voice/brand-voice.md` | Markdown — principles · 4 full register specs · structured anti-pattern library · 12 canonical examples |
| Voice Checker skill | `skills/sc-voice-checker/SKILL.md` | Markdown w/ YAML frontmatter — trigger · pre-audit · 7-principle rubric · anti-pattern scan · output format · calibration |
| Sprint CONTEXT | `stages/03-build/sprint-3/CONTEXT.md` | This contract, approved · audit results filled |

---

## Audit — Sprint 3 Success Criteria

| # | Criterion | Pass test | Status |
|---|---|---|---|
| 3a | All four registers fully specified | Each of 4 registers in `brand-voice.md` has all five fields: opening pattern, sentence structure, density, perspective, allows/forbids | ✅ pass — 24 field headers verified (6 fields × 4 registers, §2.1–§2.4) |
| 3b | Anti-pattern library covers source skill + any new additions | Diff `brand-voice.md` anti-pattern section against `references/anti-patterns.md` — every Hard Rule, Soft Disqualifier, AI-Slop Pattern, Wit Check entry present in structured form | ✅ pass — all 5 categories present (§3.1–§3.5), all source pattern names accounted for, 4 net-new patterns added with `[NEW]` tag |
| 3c | 12 canonical copy examples, 3 per register, no placeholders | grep `Lorem`, `Ipsum`, `[placeholder]`, `[client]`, `TBD` in `brand-voice.md` returns 0 · count: 12 examples · 3 per register | ✅ pass — 12 `**Example` headers in §4, placeholder grep returns 0 (only meta-line at §4 intro quoting the rule) |
| 3d | SKILL.md complete · follows skill format | Sections present: trigger description (frontmatter) · pre-audit phase · 7-principle rubric (7 blocks) · anti-pattern scan procedure · output format · calibration examples (≥2) | ✅ pass — frontmatter w/ trigger phrases, Pre-Audit Phase, Principles 1–7 (7 blocks), Anti-Pattern Scan Procedure, Output Format, Calibration 1 (on-voice) + Calibration 2 (off-voice) |
| 3e | Each principle maps to voice-specific pass/fail signals | Each of 7 rubric blocks contains ≥1 pass signal (quoted) + ≥1 fail signal (quoted). Dry-run scoring canonical Formstack Overview returns 7 scores w/ quoted line evidence | ✅ pass — each rubric block has labeled **Pass signal** (quoted from §4 canonical examples) and **Fail signal** (quoted from §3 anti-pattern library). Calibration 1 demonstrates dry-run on Formstack Overview returning all 7 scores w/ quoted line evidence and rationale |
| 3f | Skill flags known anti-patterns by name | Dry-run scoring synthetic line containing em-dash + passive-decision + throat-clearing opener flags all 3 anti-patterns w/ category name + exact line | ✅ pass — Calibration 2 dry-run on synthetic Studio surface flags em-dash (Hard Rule), throat-clearing opener (Hard Rule), adjective stacking (AI-Slop), corporate filler (Soft Disqualifier), vague benefit (Soft Disqualifier), awards-forward framing (Soft Disqualifier), hollow enthusiasm (Soft Disqualifier), inspirational closer (AI-Slop). Each flag carries category name + quoted line + directional fix |

---

## Out of scope

Brand site assembly · component work · voice integration into other skills (`sc-adr`, `sc-token-explorer`) · porting voice document to web-rendered HTML specimen · editing upstream `sc-brand-voice` skill on the skills-plugin path.

---

## Decisions captured during sprint

Likely ADR candidates · log to `decisions/decisions.md` if they crystallize:

- Voice document as standalone artifact vs continuing to author it inside the `sc-brand-voice` skill (split source-of-truth question)
- Whether 7-principle voice rubric becomes canonical mapping for any future voice tooling (lock vs provisional)
