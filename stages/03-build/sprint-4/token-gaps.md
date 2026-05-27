# Sprint 4 — Token Gap Log

**Status:** ⏳ awaiting approval
**Protocol:** Per Sprint 4 contract resolution 2. No component code references any value below until the parent gap entry is **approved**, patched into `tokens/semantic.json`, mirrored in `_config/design-system/token-map.md`, and recorded as ADR in `decisions/decisions.md`.

Each gap entry lists: proposed semantic token name · resolved primitive alias (or new primitive if required) · rationale · which Sprint 4 components consume it.

This document is presented **upfront as a batched proposal** rather than 12 stop-and-wait cycles per component. Justification: every entry below was reached by reading §2 Tier 3 (12 components × all states) against the current `tokens/semantic.json` and identifying every value the component CSS will require. Approving as one batch means one ADR, one patch, one mirror — and the build resumes deterministically.

---

## 1 · Border width (NEW PRIMITIVES + semantic)

The system has no primitive for stroke widths. Hairlines, focus rings, and accent rules are all 1–3px structural values that today exist only as magic numbers.

### Proposed primitives

```jsonc
"border": {
  "width": {
    "hairline": { "$type": "dimension", "$value": { "value": 1, "unit": "px" },
      "$description": "1px · default rule weight. Card borders, Divider, Input border, NavBar underline." },
    "focus":    { "$type": "dimension", "$value": { "value": 2, "unit": "px" },
      "$description": "2px · focus-ring outline weight. Stronger than hairline so focus state reads at distance." },
    "accent":   { "$type": "dimension", "$value": { "value": 3, "unit": "px" },
      "$description": "3px · accent rule. Alert left-rule, ProgressIndicator bar thickness." }
  }
}
```

### Proposed semantic aliases

```jsonc
"border": {
  "width": {
    "default": { "$value": "{border.width.hairline}" },
    "focus":   { "$value": "{border.width.focus}" },
    "accent":  { "$value": "{border.width.accent}" }
  },
  "focus": {
    "offset": { "$value": "{space.micro.2}",
      "$description": "Focus-ring outline offset · 2px ground around the ring." }
  }
}
```

**Consumed by:** Button (focus), Badge (focus), Card (border + interactive focus), Input (border + focus), Divider (rule), NavBar (rule), Tooltip (border), Switch (focus), Alert (left-rule), reset.css `:focus-visible`.

---

## 2 · Radius (semantic role aliases)

Primitives have `radius.{none,input,default,circle}`. Components consume by structural role — surface, control, pill — not by primitive name.

### Proposed semantic aliases

```jsonc
"radius": {
  "control": { "$type": "dimension", "$value": "{radius.input}",
    "$description": "3px · controls that read as 'inscribed' rather than 'lifted'. Input, Badge, Tooltip." },
  "surface": { "$type": "dimension", "$value": "{radius.default}",
    "$description": "8px · raised surfaces. Card, Button, Alert." },
  "pill":    { "$type": "dimension", "$value": "{radius.circle}",
    "$description": "9999px · pill / circle. Avatar, Switch track + thumb, ProgressIndicator bar caps." },
  "none":    { "$type": "dimension", "$value": "{radius.none}",
    "$description": "0 · structural rectangles, code surfaces." }
}
```

**Consumed by:** Button (surface), Badge (control), Card (surface), Input (control), Avatar (pill), Tooltip (control), Switch (pill), ProgressIndicator (pill), Alert (surface).

---

## 3 · Motion (semantic role aliases)

Primitives have `motion.duration.*` and `motion.easing.*` as raw values. Components consume by interaction role — hover, press, mode-switch, reveal — and reach for the matching duration+easing as a pair.

### Proposed semantic aliases

```jsonc
"motion": {
  "hover": {
    "duration": { "$type": "duration", "$value": "{motion.duration.micro}",
      "$description": "200ms · hover/state change. Pair with hover.easing." },
    "easing":   { "$type": "cubicBezier", "$value": "{motion.easing.out}",
      "$description": "Quint-out · hover entrance." }
  },
  "press": {
    "duration": { "$type": "duration", "$value": "{motion.duration.press}",
      "$description": "160ms · press/release scale." },
    "easing":   { "$type": "cubicBezier", "$value": "{motion.easing.outStrong}",
      "$description": "Strong quint-out · press feedback." },
    "scale":    { "$type": "number", "$value": "{motion.scale.pressButton}",
      "$description": "0.985 · button press scale. Subtle confirmation." }
  },
  "mode": {
    "duration": { "$type": "duration", "$value": "{motion.duration.standard}",
      "$description": "380ms · theme switch surface + color cross-fade." },
    "easing":   { "$type": "cubicBezier", "$value": "{motion.easing.inOut}",
      "$description": "Symmetric · mode switches and crossfades." }
  },
  "reveal": {
    "duration": { "$type": "duration", "$value": "{motion.duration.micro}",
      "$description": "200ms · Tooltip enter, Alert enter, Switch thumb slide." },
    "easing":   { "$type": "cubicBezier", "$value": "{motion.easing.out}",
      "$description": "Quint-out · reveal entrance." }
  }
}
```

**Consumed by:** Button (hover + press), Badge (— none), Card (hover), Input (focus border-color transition), NavBar (hover), Tooltip (reveal), Switch (reveal — thumb travel), ProgressIndicator (bar fill animation), Alert (reveal), body (mode transition in reset).

---

## 4 · Type composition (semantic role aliases)

Primitives have `font.text.{11..120}` as composed typography tokens. Components consume by content role — chrome label, body, card title, etc.

### Proposed semantic aliases

```jsonc
"font": {
  "text": {
    "label": {
      "chrome": { "$type": "typography", "$value": "{font.text.11}",
        "$description": "Chrome labels · 11/medium/widest. Button labels, Badge text, eyebrows." },
      "ui":     { "$type": "typography", "$value": "{font.text.12}",
        "$description": "UI labels · 12/medium/wide. Form labels, dense table headers." }
    },
    "caption": { "$type": "typography", "$value": "{font.text.13}",
      "$description": "Caption · 13/regular/relaxed. Helper text, Tooltip body, timestamps." },
    "body": {
      "dense":   { "$type": "typography", "$value": "{font.text.14}",
        "$description": "Dense body · 14/regular/base. NavBar links, secondary body, Alert body." },
      "default": { "$type": "typography", "$value": "{font.text.16}",
        "$description": "Body default · 16/regular/base. Input value, Card body, default prose." },
      "lead":    { "$type": "typography", "$value": "{font.text.20}",
        "$description": "Lead body · 20/regular/relaxed. Intro paragraphs." }
    },
    "title": {
      "card":    { "$type": "typography", "$value": "{font.text.24}",
        "$description": "Card title · 24/medium/snug. Card titles, Alert title." },
      "section": { "$type": "typography", "$value": "{font.text.32}",
        "$description": "Section title · 32/medium/snug. Showcase section headers." }
    },
    "display": {
      "sm": { "$type": "typography", "$value": "{font.text.44}",
        "$description": "Display sm · 44/light/tight. Premise statements." },
      "md": { "$type": "typography", "$value": "{font.text.60}",
        "$description": "Display md · 60/light/tight." },
      "lg": { "$type": "typography", "$value": "{font.text.84}",
        "$description": "Display lg · 84/light/tight." },
      "xl": { "$type": "typography", "$value": "{font.text.120}",
        "$description": "Display xl · 120/light/flat. Maximum display." }
    },
    "mono": {
      "chrome": { "$type": "typography", "$value": "{font.text.mono.11}",
        "$description": "Mono chrome · 11px Cascadia caps. Token references, status mono badges." },
      "caption": { "$type": "typography", "$value": "{font.text.mono.13}",
        "$description": "Mono caption · 13px. Timestamps, token names, code references." },
      "body":   { "$type": "typography", "$value": "{font.text.mono.16}",
        "$description": "Mono body · 16px. Inline code, code blocks." }
    }
  }
}
```

**Consumed by:** Button (label.chrome), Badge (label.chrome or mono.chrome), Card (title.card + body.default), Input (body.default + caption helper), Divider (mono.chrome for inline label), Avatar (label.chrome for initials), NavBar (body.dense), Tooltip (caption), Switch (label.chrome for state caption), ProgressIndicator (mono.chrome for step labels), Alert (title.card + body.dense), TypographySpecimen (full display range).

---

## 5 · Spacing (semantic component + layout expansion)

Existing `space.component.padding.{sm,md,lg}` covers a uniform padding scalar. Components need directional padding (inline vs block), inter-element gap, and layout-level stack rhythm.

### Proposed semantic aliases

```jsonc
"space": {
  "component": {
    "padding": { /* existing sm/md/lg — keep */ },
    "padding-inline": {
      "sm": { "$type": "dimension", "$value": "{space.micro.6}",
        "$description": "6px · tight inline padding. Badge." },
      "md": { "$type": "dimension", "$value": "{space.12}",
        "$description": "12px · default inline padding. Button, Input, NavBar link." },
      "lg": { "$type": "dimension", "$value": "{space.16}",
        "$description": "16px · generous inline padding. Card, Alert." }
    },
    "padding-block": {
      "sm": { "$type": "dimension", "$value": "{space.micro.2}",
        "$description": "2px · ultra-thin block padding. Badge." },
      "md": { "$type": "dimension", "$value": "{space.8}",
        "$description": "8px · default block padding. Button, Input." },
      "lg": { "$type": "dimension", "$value": "{space.12}",
        "$description": "12px · generous block padding. Card header, Alert." }
    },
    "gap": {
      "sm": { "$type": "dimension", "$value": "{space.4}",
        "$description": "4px · tightest inter-element gap. Icon + label inside compact controls." },
      "md": { "$type": "dimension", "$value": "{space.8}",
        "$description": "8px · default inter-element gap. Icon + label, label + helper." },
      "lg": { "$type": "dimension", "$value": "{space.12}",
        "$description": "12px · generous gap. Card header → body, Alert icon + content." }
    }
  },
  "layout": {
    "stack": {
      "sm": { "$type": "dimension", "$value": "{space.16}",
        "$description": "16px · tightest vertical rhythm between sibling blocks." },
      "md": { "$type": "dimension", "$value": "{space.24}",
        "$description": "24px · default block rhythm." },
      "lg": { "$type": "dimension", "$value": "{space.48}",
        "$description": "48px · between major sections inside a page." },
      "xl": { "$type": "dimension", "$value": "{space.80}",
        "$description": "80px · between top-level showcase sections." }
    },
    "inset": {
      "sm": { "$type": "dimension", "$value": "{space.16}",
        "$description": "16px · page edge inset on mobile." },
      "md": { "$type": "dimension", "$value": "{space.24}",
        "$description": "24px · default page inset." },
      "lg": { "$type": "dimension", "$value": "{space.48}",
        "$description": "48px · generous page inset for wide layouts." }
    }
  }
}
```

**Consumed by:** every component (padding-inline + padding-block + gap) and showcase page (layout.stack + layout.inset).

---

## 6 · Size — Avatar (semantic dimension tokens)

Avatar ships 4 sizes per spec §3.6. These are width/height tokens, not space tokens.

### Proposed semantic aliases (reuses space primitives)

```jsonc
"size": {
  "avatar": {
    "xs": { "$type": "dimension", "$value": "{space.24}",
      "$description": "24px · table-row avatar." },
    "sm": { "$type": "dimension", "$value": "{space.32}",
      "$description": "32px · default avatar." },
    "md": { "$type": "dimension", "$value": "{space.48}",
      "$description": "48px · prominent avatar (profile header)." },
    "lg": { "$type": "dimension", "$value": "{space.64}",
      "$description": "64px · feature avatar (detail page hero)." }
  }
}
```

**Consumed by:** Avatar (3.6 · 4 sizes).

---

## 7 · Switch geometry (semantic dimension tokens)

Switch needs distinct track + thumb dimensions; reusing space primitives.

### Proposed semantic aliases

```jsonc
"size": {
  "switch": {
    "track-width":  { "$type": "dimension", "$value": "{space.32}",
      "$description": "32px · switch track width." },
    "track-height": { "$type": "dimension", "$value": "{space.micro.18}",
      "$description": "18px · switch track height." },
    "thumb":        { "$type": "dimension", "$value": "{space.micro.14}",
      "$description": "14px · switch thumb diameter. 2px inset inside 18px track." }
  }
}
```

**Consumed by:** Switch (3.9).

---

## 8 · Progress geometry (semantic dimension tokens)

```jsonc
"size": {
  "progress": {
    "bar-height": { "$type": "dimension", "$value": "{space.4}",
      "$description": "4px · bar progress indicator height." },
    "circular":   { "$type": "dimension", "$value": "{space.48}",
      "$description": "48px · circular progress indicator diameter." },
    "circular-stroke": { "$type": "dimension", "$value": "{space.4}",
      "$description": "4px · circular stroke width." }
  }
}
```

**Consumed by:** ProgressIndicator (3.10).

---

## 9 · Tooltip surface tokens (semantic color aliases)

Tooltip uses an inverted ground — text-primary becomes its surface; text on it becomes the inverted ink.

### Proposed semantic aliases

```jsonc
"color": {
  "surface": {
    "inverse": { "$type": "color", "$value": "{color.warmGray.800}",
      "$description": "Inverted surface · Tooltip ground. Ink in light mode, near-white in dark.",
      "$extensions": {
        "modes": {
          "light": "{color.warmGray.800}",
          "dark":  "{color.warmGray.50}"
        }
      }
    }
  },
  "text": {
    "onInverse": { "$type": "color", "$value": "{color.warmGray.50}",
      "$description": "Text on inverse surface. Near-white in light mode, ink in dark.",
      "$extensions": {
        "modes": {
          "light": "{color.warmGray.50}",
          "dark":  "{color.warmGray.800}"
        }
      }
    }
  }
}
```

**Consumed by:** Tooltip (3.8), potential dark accent surfaces in future.

---

## Summary table

| Gap # | Group | New semantic count | New primitives | Components consuming |
|---|---|---|---|---|
| 1 | Border width | 4 | 3 (`border.width.{hairline,focus,accent}`) | Button, Badge, Card, Input, Divider, NavBar, Tooltip, Switch, Alert |
| 2 | Radius role | 4 | 0 | Button, Badge, Card, Input, Avatar, Tooltip, Switch, ProgressIndicator, Alert |
| 3 | Motion role | 11 | 0 | Button, Card, Input, NavBar, Tooltip, Switch, ProgressIndicator, Alert |
| 4 | Type role | 15 | 0 | every component + showcase |
| 5 | Space role | 19 | 0 | every component + showcase |
| 6 | Size · Avatar | 4 | 0 | Avatar |
| 7 | Size · Switch | 3 | 0 | Switch |
| 8 | Size · Progress | 3 | 0 | ProgressIndicator |
| 9 | Inverse surface | 2 | 0 | Tooltip |
| **Total** | | **65** | **3** | |

---

## ADR plan

If approved, one ADR appended to `decisions/decisions.md`:

> **2026-05-27 — Sprint 4 semantic-layer expansion**
> Adds 65 semantic tokens + 3 primitives (border widths) to close the gap between the abstract primitive scale and the role-driven needs of the 12 component primitives. Token-map.md mirrored. No primitive value changed.

---

## Awaiting decision

- **Approve all** → patch `tokens/semantic.json` + `tokens/primitives.json` (border.width group), mirror in `_config/design-system/token-map.md`, append single ADR, regenerate `tokens.css`, resume Part 2.
- **Approve subset** → list which groups; build proceeds with the approved subset; components needing a deferred group block until a follow-up gap entry resolves.
- **Reject / restructure** → discuss naming, scope, or alternative shape.
