---
name: sc-token-explorer
description: Token lookup skill for The Shokunin Crafthouse brand-identity system. Use this skill whenever Levi asks a natural-language question about which design token controls a particular use case — "what token should I use for the page background", "which token controls card hover", "look up the token for a focus ring", "what's the right token for a destructive button". Also trigger on phrasings like "which color is", "what's the token for", "is there a token for", "which spacing should", or any question that maps a use case to a design-system token. Do not trigger for general questions about the design system's philosophy, the brand voice, or non-token topics — only for token-lookup intent.
---

# SC-Token-Explorer: Token Lookup for The Shokunin Crafthouse

## Purpose

This skill answers natural-language questions about which design token to use for a given purpose, and flags gaps when no semantic token exists. The token system has two tiers — Primitives (raw values) and Semantic (purpose-mapped aliases). Designers and developers should always reach for the Semantic tier first; the Primitives are scaffolding for the Semantic tier, not for direct use.

The goal is to keep token usage consistent across the brand identity, the live site, and any future product surfaces. Silent fallbacks to primitives erode that consistency. When a use case has no semantic token, that is a gap in the system — not a license to grab a primitive — and this skill exists in part to surface those gaps the moment they appear.

---

## Pre-Query Phase (mandatory)

Before answering any question, load both token files:

1. `tokens/primitives.json`
2. `tokens/semantic.json`

If either file is missing or fails to parse, stop and report: "Cannot answer — `<filename>` is missing/invalid. Token lookup requires both files." Do not attempt to answer from memory or from prior context.

After loading, confirm to yourself that:

- Primitives are organized as `color.<scale>.<step>`, `font.<axis>.<name>`, `space.<step>`, `radius.<name>`, `motion.<axis>.<name>`
- Semantic tokens carry both `light` and `dark` mode aliases in `$extensions.modes`
- Some semantic tokens carry a `$extensions.usageRestrictions` field — **always check this before recommending a token**
- `usageRestrictions.forbiddenSurfaces` is keyed **by mode** (`{ light: [...], dark: [...] }`), not a flat array — a surface
  forbidden in one mode is often legal in the other, so read the list for the mode you are recommending into. (Shape changed 2026-08-17; the old flat array could only express one union across both modes.)

Only then proceed to query logic.

---

## Query Logic

Apply these steps in order. Do not skip ahead.

### Step 1 — Identify the use case

Reduce Levi's question to a concrete use case in one short phrase. Examples:

- "what token should I use for the page background" → use case: **page background**
- "which token controls card hover" → use case: **card hover surface**
- "what's the right token for a destructive button" → use case: **destructive/error action**
- "look up the focus ring color" → use case: **focus ring**

If the question is ambiguous (multiple plausible use cases), pick the most likely and note the assumption in the rationale — do not ask a clarifying question unless the question is genuinely indeterminate.

### Step 2 — Search the Semantic tier first

Walk the semantic groups in this order, matching the use case to the token's purpose (not just its name):

1. `color.surface.*` — backgrounds, page grounds, card fills, sunk panels
2. `color.text.*` — body, secondary copy, disabled, on-accent text
3. `color.border.*` — hairlines, focus rings, structural strokes
4. `color.interactive.*` — default/hover/active states for interactive elements
5. `color.status.*` — success/warning/error/info signaling
6. `color.brand.*` — brand mark, signature accents
7. `space.component.padding.*` — sm/md/lg padding tokens

Use the token's `$description` to validate semantic match. If the description's `USAGE RESTRICTION` excludes Levi's situation, do not return that token — go to the next candidate or fall through to Step 4 (gap).

### Step 3 — Return the semantic match

If a semantic token clearly fits, return it using the Output Format below. **Never return a primitive when a semantic token exists for the use case.** If the only matching semantic token has a usage restriction that applies to Levi's situation, treat that as a gap (Step 4) and call out the restriction.

### Step 4 — Gap flag (no semantic match)

If no semantic token fits, do **not** silently fall back to a primitive. Instead:

1. State explicitly: "No semantic token exists for this use case."
2. Suggest a name for the missing semantic token, following the existing naming conventions:
   - Slash notation (`color.<group>.<name>`)
   - Group names already in the system: `surface`, `text`, `border`, `interactive`, `status`, `brand`
   - New groups only when none of the existing groups fit — say so explicitly
3. Suggest which primitive(s) it should alias in **both** light and dark modes
4. Recommend logging the gap as an ADR via the `sc-adr` skill so the addition gets a paper trail

Never recommend grabbing a primitive directly as a workaround. That is the antipattern this skill exists to prevent.

---

## Output Format (every response)

Use this exact structure. Keep each field tight — Levi reads quickly.

```
Token: <name in slash notation matching Figma · e.g. color/surface/page>
Tier:  Semantic | Primitive | Component
Light: {alias} → #HEX
Dark:  {alias} → #HEX
Why:   <one sentence explaining why this token fits the use case>
```

If a usage restriction applies, append it as a final field:

```
Restriction: <restriction text> Use {substitute} on <forbidden surface>.
```

If returning a gap flag, use this structure instead:

```
Token: NONE — gap in semantic layer
Suggested name: color.<group>.<name>
Suggested aliases:
  Light: {primitive.name} (#HEX)
  Dark:  {primitive.name} (#HEX)
Why:   <one sentence explaining the use case the new token would serve>
Next:  Log via sc-adr before adding to tokens/semantic.json + Figma.
```

Never include a markdown table, never include the full token description, never include the contrast ratio unless the question is specifically about contrast. Keep responses dense.

---

## Edge Cases

**Question mentions a hex value or primitive directly.** Levi asked "what's the semantic token that resolves to `#C8281C`?" — search semantic tokens whose `light` or `dark` mode alias resolves to that primitive. Return all matches; do not collapse them. If several semantic tokens alias the same primitive, that's intentional (e.g., `interactive.hover` and `brand.accent` both alias `shu.500`).

**Question is about a state across modes.** "Which token controls focus rings in dark mode?" — return the same semantic token, just emphasize the dark-mode alias (`shu.400` instead of `shu.500`). One token, two values.

**Question mentions spacing, type, motion.** Same logic — start at the semantic layer. If only primitives exist (which is common for type and motion right now), surface the primitive but note that no semantic alias exists yet, suggest a name following the `<axis>.<purpose>.<size>` pattern.

**Question is about a component-level token.** The system does not yet have a Component tier. If Levi asks for a component-specific token (e.g. "what's the button hover background"), trace to the semantic interactive state (`interactive.hover`) and note: "Component tier not yet established — component decisions currently inherit from the semantic interactive states. If component-level overrides become recurring, propose a Component tier via sc-adr."

**Conflict between description and structure.** If a token's `$description` contradicts what its name implies (e.g. a token named `surface.sunk` whose description says it's lighter than the page in dark mode), trust the description — that's the source of truth for usage. The name reflects light-mode semantics; descriptions explain mode-specific behavior.

**Dark-mode-only primitives (`color.dark.*`).** These are not for direct use — they are mode-specific source values that get aliased by semantic tokens. If asked about them, redirect to the semantic token that uses them.

---

## Calibration Examples

### Example 1 — Clear semantic match

**Levi:** "What token should I use for a card background?"

**Response:**
```
Token: color/surface/sunk
Tier:  Semantic
Light: {color.warmGray.200} → #D9D5CE
Dark:  {color.dark.surfaceSunk} → #181512
Why:   Cards are set-in component surfaces. In light mode they sit one step below the page (deeper); in dark mode they sit one step above (lighter). The token's perceptual direction inverts in dark — the role does not.
```

### Example 2 — Gap flag (no semantic match)

**Levi:** "What's the token for a code-block background inside running prose?"

**Response:**
```
Token: NONE — gap in semantic layer
Suggested name: color.surface.code
Suggested aliases:
  Light: {color.warmGray.300} (#CDC9C2)
  Dark:  {color.dark.surfaceDeepSunk} (#221F1B)
Why:   Inline code surfaces need a step deeper than the running paragraph background to read as a distinct region; surface.sunk would compete with cards, so the use case warrants its own semantic token aliasing the deepest surface step in each mode.
Next:  Log via sc-adr before adding to tokens/semantic.json + Figma.
```

### Example 3 — Interactive state

**Levi:** "Which token controls the color a button text turns on hover?"

**Response:**
```
Token: color/interactive/hover
Tier:  Semantic
Light: {color.shu.500} → #C8281C
Dark:  {color.shu.400} → #DA5C4D
Why:   Primary button hover replaces ink with shu across text, icon, and border. Dark mode uses shu.400 (lifted) so the accent stays legible against the dark ground.
Restriction: At 11px the light-mode pair (shu.500 on bg) is 3.8:1 — a documented brand-signal AA exception, not a fail. No substitute required; this is the correct token.
```

---

## Anti-Patterns (do not do)

- Do not return a primitive when a semantic token covers the use case
- Do not invent a semantic token on the fly — flag the gap and recommend logging an ADR
- Do not respond from cached memory; always load the JSON files first
- Do not summarize the entire token system; answer the one question asked
- Do not strip the mode information — even mode-invariant tokens get both Light and Dark in the response (they happen to resolve to the same primitive)
- Do not recommend the `text.secondary` token on `surface.deepSunk` in light mode — that pair carries a documented usage restriction (4.04:1 fails AA); use `text.primary` on the deepest light surface
