# Mark Specification — The Shokunin Crafthouse
# Source of truth for mark geometry, color, and usage rules
# Last updated: 2026-05-26 (Sprint 2 refinement)
# Resolves: sc-brand-system-spec.md §9.1, §9.3 · Sprint 2 success criteria 2e–2g

The mark is an **eleven-cross grid** — four columns, three rows, with the top-right cell of the middle row deliberately absent. The eleventh cross is where it is by intent; the twelfth is not there by intent. The absent cell is the mark's signature and its deliberate detail (2g).

---

## 1. Geometry

### 1.1 Cross unit

The cross is a Latin plus form on a 32 × 32 bounding box. Stem width is 10px; each arm extends 11px from the center stem.

```
           ┌──┐
           │  │
        ┌──┘  └──┐      bbox 32 × 32
        │   ╳    │      stem  10 wide
        └──┐  ┌──┘      arm   11 each side
           │  │
           └──┘
```

Path template (centered on `cx, cy`):

```
M{cx+5} {cy-5} H{cx+16} V{cy+5} H{cx+5} V{cy+16}
H{cx-5} V{cy+5} H{cx-16} V{cy-5} H{cx-5} V{cy-16}
H{cx+5} V{cy-5} Z
```

The cross is carried forward from the rough mark unchanged. The refinement happens at the grid level, not the cross level — see §3.

### 1.2 Grid

Four columns × three rows = twelve cells. Eleven are populated; one is absent. Inter-cell spacing is **56 pixels between cell centers** in both axes. This is the refinement: the rough used 64px gaps, which left the crosses reading as twelve independent marks; 56px tightens the cluster so the eleven crosses cohere as a unit and the absent twelfth cell reads as designed negative space.

```
  ●  ●  ●  ●           col centers: 48 · 104 · 160 · 216
  ●  ●  ●  ·           row centers: 48 · 104 · 160
  ●  ●  ●  ●           absent: (col 4, row 2) = (216, 104)
```

Grid extent (arm-end to arm-end): 200 × 144.

### 1.3 Lockup viewBoxes

| Lockup | viewBox | Horiz pad | Vert pad | Variant | Use |
|---|---|---|---|---|---|
| `primary` | 256 × 200 | 28 | 28 | Block (rect + crosses) | Default usage, brand mark on a surface, large displays |
| `compact` | 232 × 176 | 16 | 16 | Block (rect + crosses) | Navbars, app headers, dense chrome |
| `icon` | 256 × 256 | 28 | 56 | Simplified (crosses only, transparent) | Favicons, app icons, smallest contexts |

The icon lockup uses a square viewBox so favicon slots render without letterboxing. The grid is centered horizontally and vertically within the square; the slight vertical asymmetry from horizontal padding is preserved.

### 1.4 Color values

The mark inherits the system's warm-monochrome palette. No pure black, no pure white — both block and simplified variants resolve to **ink (#1A1815, warmGray.800)** and **cream (#F1EFEB, warmGray.50)**.

| Variant · mode | Rect fill | Cross fill |
|---|---|---|
| Block · light (for placement on light surfaces) | #1A1815 ink | #F1EFEB cream |
| Block · dark (for placement on dark surfaces) | #F1EFEB cream | #1A1815 ink |
| Simplified · light (for placement on light surfaces) | (none) | #1A1815 ink |
| Simplified · dark (for placement on dark surfaces) | (none) | #F1EFEB cream |

The mark does NOT use shu (vermilion #C8281C). The chromatic accent is reserved for interactive states and the brand stamp surfaces — not for the mark proper.

---

## 2. Variants

### 2.1 Block — primary lockup

The block reads as a unit. A self-contained stamp of crosses on a high-contrast ground. The mark's primary use. Always set with the rect — the rect IS part of the mark in this variant.

### 2.2 Compact — tighter framing

Same eleven-cross grid at the same internal spacing (56px). Smaller outer padding (16px instead of 28px). Use when surface real estate is constrained — navbars, app headers, document footers. Visually identical to primary at the same display size; differs only in framing density.

### 2.3 Simplified — icon-only

The crosses without the rect. The grid structure is exposed. At small sizes (16–24px), the form reads as textured pattern density with the asymmetric absence still discernible. At larger sizes (32px+), the individual cross forms resolve.

The simplified variant becomes the favicon, the app icon, the document corner mark.

---

## 3. The refinement decision (Sprint 2)

The spec §9.1 named two candidate refinement directions: **proportion shift** (vary one cross to create hierarchy) or **spacing intention** (tighten the spacing so the grid coheres). Sprint 2 selected spacing intention, executed against an already-asymmetric rough.

The rough mark contained an unannounced asymmetry — the missing top-right cell of the middle row — that the spec did not call out. (The spec described a "4×3 = 12" grid; the rough drew 4-3-4 = 11.) Treating this as a bug would have meant filling the cell. Treating it as the seed of the deliberate detail meant preserving the absence and amplifying it.

The refinement amplifies the absence by tightening the grid spacing from 64px to 56px. At 64px gaps the crosses read as twelve independent marks with one missing; at 56px they cluster as a single eleven-cross body with one position designed-out. The shift is small (12.5%) but the perceptual change is substantial.

This satisfies §9.1's directive: one deliberate decision that elevates the mark from "arranged crosses" to "a considered mark." The decision is the asymmetric grid as the mark's signature.

The cross form itself is unchanged from the rough. Adding chamfered terminals, arm taper, or intersection optical correction would be a second authored move — over-design. The cross stays pure registration mark. The asymmetric grid carries the authorship alone.

---

## 4. Deliberate detail (2g)

**The missing top-right cell of the middle row.** Read order matters — the eye enters at the top-left, scans right, drops to the middle row, and arrives at the absence. The empty cell is on the diagonal axis from bottom-left; it carries visual weight as the *terminus* of the diagonal scan.

The detail is preserved in every lockup at every size. At 16px favicon scale the cross detail disappears but the absence remains visible as a darker void in the pattern field.

---

## 5. References

- Source rough: `assets/logo/rough/mark-rough-block.svg`, `mark-rough-simplified.svg` (copied from `shokunin-crafthouse-site/assets/svg/sc-logo*.svg`)
- Spec brief: `sc-brand-system-spec.md` §9.1 (Mark Analysis), §9.3 (Digital-Only Scope)
- Direction ADR: `decisions/decisions.md` Sprint 2 entry "Mark refinement direction — spacing intention"
- Generator: `scripts/build-mark.py`
- Exports: `assets/logo/mark-{primary,compact,icon}-{light,dark}.{svg,png,@2x.png,@3x.png}`
- Specification artifact (clear space, min sizes, backgrounds, misuse): `stages/02-design/output/logo-spec.html`
