---
name: sc-voice-checker
description: >
  Shokunin Crafthouse voice audit skill. Use when the user wants to check,
  score, or audit any piece of copy against the studio voice — including studio
  website copy, case studies, client proposals, product copy, App Store
  descriptions, social posts, headlines, or any text intended to represent The
  Shokunin Crafthouse. Triggers on phrases like "check this against the voice",
  "is this on-voice", "does this sound like the studio", "audit this copy",
  "score this", "voice check", or when the user pastes copy and asks whether it
  fits the brand. Do NOT use this skill for general copywriting help or rewrites
  unrelated to the Shokunin studio voice — use the copy-surgeon skill instead.
  This skill requires the sc-brand-voice skill reference files to be available.
---

# SC-Voice-Checker

This skill audits written copy against the seven Shokunin design principles as
applied to voice. It produces a scored diagnosis with line-level evidence, then
a set of specific rewrite targets. It does not produce a full rewrite — that
is the copy-surgeon's job. This skill tells you exactly what is wrong and where.

---

## Pre-audit phase

Complete this before scoring anything.

**1. Read `sc-brand-voice/references/studio-identity.md`**
Load the seven design principles and the studio's core value proposition. The
principles are the scoring rubric. Do not improvise criteria.

**2. Read `sc-brand-voice/references/anti-patterns.md`**
Load the full anti-pattern library. Anti-patterns are automatic deductions —
they do not require interpretation.

**3. Identify the register**
Which of the four contexts does this copy serve?
- Case study / project storytelling
- Studio / marketing copy
- Client proposal
- Product copy (web app or App Store)

If unclear, ask before proceeding.

**4. Identify the job**
What is this specific piece of copy supposed to do? If you cannot state the
job in one sentence, the copy has not told you — note this as a finding.

---

## Scoring rubric

Score the copy against each of the seven Shokunin design principles as they
apply to written voice. Each score is 1–5. Be precise — 3 is not a compliment.

| Principle | Voice application | What a 5 looks like | What a 1 looks like |
|---|---|---|---|
| **1. Craft is the baseline** | Grammar, clarity, and precision are non-negotiable. Style is built on top, never instead of. | Every sentence is grammatically correct, precisely worded, unambiguous. | Typos, unclear antecedents, run-ons, or vague language that obscures meaning. |
| **2. One clear point of view** | One voice, one register, one argument per piece. No blending tones mid-paragraph. | The piece holds a single posture from first word to last. | Tone shifts between casual and formal; the argument changes direction mid-piece. |
| **3. Function first, then beauty — together** | Clarity is not in tension with craft. A sentence can be precise and well-made at the same time. | The copy is easy to understand AND crafted with intention. Neither sacrifices the other. | The copy is either too dense to parse, or so plain it has no voice at all. |
| **4. Restraint as a creative act** | Fewer words with more weight. Cut what is almost good enough. | Every word is load-bearing. Nothing is there for comfort or padding. | Filler transitions, setup paragraphs, hedges, qualifiers that soften without purpose. |
| **5. Products, not pages** | Copy that instructs and copy that sells feel like they come from the same mind. | The copy feels like part of a product experience — considered, purposeful, not broadcast. | Reads like a brochure or press release. Generic benefit claims. "We are excited to..." |
| **6. Authorship over process** | First person, active. The designer is present. Authorship is not bragging — it is accuracy. | "I led design" not "the design was led by." Decisions stated, not hedged. | Passive constructions, committee-voice, "the team delivered", "it was decided that." |
| **7. Originality over safety** | At least one decision a careful reader would notice as deliberate. No stock phrases, filler transitions, or generic benefit claims. | The copy contains at least one line that could only belong to this studio. | Could have been written by any agency. Contains at least one phrase from the AI-slop library. |

Output as a table: Principle | Score (1–5) | Evidence (quote the specific line) | Rationale (one sentence).

---

## Anti-pattern scan

After scoring the seven principles, run a separate anti-pattern scan. For each
anti-pattern found, flag it with:

- The exact phrase or line from the copy (in quotes)
- The anti-pattern category it belongs to
- A one-sentence explanation of why it fails

Source the anti-pattern categories from `sc-brand-voice/references/anti-patterns.md`.
Do not invent new categories — use the documented ones.

---

## Output format

### 1. Register and job statement
State the register and the copy's job in one sentence each. If the job is
unclear, say so explicitly — this is a finding.

### 2. Scorecard
The seven-principle table with scores, evidence, and rationale. Overall score
is the average, rounded to one decimal. Label it: On-voice (4.0–5.0), Needs
work (2.5–3.9), Off-voice (1.0–2.4).

### 3. Anti-pattern report
Every flagged anti-pattern. If zero are found, say "No anti-patterns found."

### 4. Priority rewrite targets
List the 1–3 highest-impact fixes, ordered by impact. For each:
- The failing line (quoted)
- The specific principle it violates
- A concrete rewrite direction (not the rewrite itself — a direction)

The rewrite direction is one sentence. It says what the line needs to do
differently, not how to do it. "Lead with the outcome, not the credential" is
a direction. "Try something like: ..." is a rewrite — save that for
copy-surgeon.

---

## Calibration examples

**Trigger this skill:**
> "Does this homepage copy sound like the studio?"
> "Voice check this case study intro."
> "Is this on-brand?"
> "Score this against the Shokunin principles."

**Do not trigger this skill for:**
> "Rewrite this to be shorter." → copy-surgeon
> "Help me write a bio." → sc-brand-voice
> "What's wrong with this email to a client?" (general, not Shokunin-specific) → copy-surgeon
