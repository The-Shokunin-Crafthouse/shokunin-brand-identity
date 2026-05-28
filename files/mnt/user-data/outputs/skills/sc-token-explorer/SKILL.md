---
name: sc-token-explorer
description: >
  Shokunin Crafthouse design token query skill. Use when the user asks a
  natural language question about which token to use for a specific design
  decision, wants to look up a token's value or purpose, or wants to verify
  they are referencing the correct token layer. Triggers on phrases like "what
  token should I use for...", "which token controls...", "what's the right
  token for...", "look up the token for...", "what color token do I use for...",
  "what spacing token goes between...", or any question that implies the user
  needs to find or verify a design system token for a specific use case. Also
  triggers when a Generator agent needs to verify a token reference before
  writing component code.
---

# SC-Token-Explorer

This skill answers natural language questions about the Shokunin Crafthouse
design token system. It finds the right token, explains why it is the right
token, and flags gaps where no token exists for the requested use case.

The token system has three tiers. The skill always prefers semantic tokens over
primitives. Component tokens are only returned when the question is specifically
about a named component.

---

## Token hierarchy — always observed

**Tier 1 — Primitive tokens**
Raw values with no semantic meaning. `color.slate.900`, `font.size.16`,
`space.4`. Never returned as the answer unless no semantic token exists for the
use case and that fact is explicitly noted.

**Tier 2 — Semantic tokens**
Purpose-mapped. `color.surface.default`, `color.text.primary`,
`space.component.padding.sm`. This is the correct answer for virtually every
design question. Always prefer these.

**Tier 3 — Component tokens**
Specific overrides for named components. `button.background.primary`,
`input.border.focus`. Only returned when the question names a specific
component explicitly.

---

## Pre-query phase

**1. Load the token file**
The token system lives in `tokens/` in the current project. Load:
- `tokens/primitives.json` — raw values
- `tokens/semantic.json` — semantic layer (light and dark modes)
- `tokens/component.json` — component-level overrides (if it exists)

If the token files are not yet available (Sprint 1 has not been completed),
tell the user that the token system has not been built yet. Do not improvise
token names. Do not invent values.

**2. Parse the question**
Identify what the user is actually asking for. Most questions have two parts:

- The **surface** — what element or context is this token for? (button, input,
  body text, section background, focus ring, error state...)
- The **property** — what CSS/design property does it govern? (color,
  background, border, spacing, radius, shadow, font-size...)

If either part is ambiguous, state your interpretation before answering.

---

## Query logic

Work through this sequence for every question:

**Step 1 — Search semantic tokens first**
Find all semantic tokens whose name or description matches the surface and
property. Return the best match.

**Step 2 — Check for dark mode variant**
If the token has a dark mode counterpart, note both values. Most surface and
text tokens do. Do not return only the light mode value without mentioning
the dark mode equivalent.

**Step 3 — Check the component layer**
If the question names a specific component AND a component token exists, return
the component token. Note that it overrides the semantic layer.

**Step 4 — Fall back to primitives only if necessary**
If no semantic token covers the use case, return the relevant primitive and
flag it explicitly: "No semantic token exists for this use case. The closest
primitive is [name]. This is a token gap — consider adding a semantic token."

**Step 5 — Flag gaps**
A token gap is any use case for which the correct token should exist in the
semantic layer but does not. When you find one, say so clearly. This is
actionable feedback for the Generator.

---

## Output format

For a single token question:

```
Token: [token.name]
Value (light): [value]
Value (dark): [value, or "same as light" if unchanged]
Type: Semantic | Primitive | Component
Usage: [one sentence — what this token is for and why it is the right choice]
```

If a token gap is found:
```
Token gap: No semantic token exists for [use case].
Closest match: [token.name] ([value]) — [one sentence on why it is imperfect]
Recommendation: Add a semantic token named [suggested.name] mapped to [primitive].
```

For multi-part questions (user asks about several tokens in one message),
answer each as a separate block. Do not collapse them.

---

## Output rules

- Never return a primitive token as the answer when a semantic token exists
- Always show both light and dark values for color tokens
- Never invent token names — only return tokens that exist in the loaded files
- If the token files are not loaded, say so before attempting any answer
- Keep usage rationale to one sentence — this is a lookup tool, not a tutorial
- If the question implies a component that does not yet exist in the system,
  note that the component has not been built and suggest the nearest semantic
  token as a temporary reference

---

## Calibration examples

**Trigger this skill:**
> "What token controls the background of a primary button?"
> → Component token if it exists; semantic token as fallback

> "I need a text color for a success state on a dark surface."
> → Semantic token: `color.text.status.success` (dark mode value)

> "What's the right spacing token between a label and an input field?"
> → Semantic token: `space.component.gap.label-input` or nearest match

> "What border radius should a card use?"
> → Semantic token: `radius.component.card` or `radius.md` if no component token

**Do not trigger this skill for:**
> "Should I use border-radius 4px or 8px?" → Design decision, not a token lookup
> "Why did we choose this spacing scale?" → ADR question, check decisions.md
> "How do I implement dark mode?" → Architecture question, not a token query
