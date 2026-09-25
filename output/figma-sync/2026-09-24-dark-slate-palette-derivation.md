# Final dark palette (slate) — derived 2026-09-24

Anchor: page ground #2C3239 measured off sc-site Frame 19 (156:15) = light comp under #E3DFD8 exclusion. OKLCH hue 252.3°, chroma 0.015 held on every ground step; text tiers warm-light (hue 84.6°, chroma 0.006 = the blend result of ink #1A1815 → #CFCDC9, lifted for AA). Brand teal ramp untouched.

| token | old | new | OKLCH L |
|---|---|---|---|
| color.dark.well | #080807 | #1F252C | 0.262 |
| color.dark.floor | #0A0A0A | #252B32 | 0.286 |
| color.dark.surfacePage | #0F0F0F | #2C3239 | 0.314 |
| color.dark.raised1 | #141414 | #343A41 | 0.346 |
| color.dark.raised2 | #1A1A1A | #3B4249 | 0.375 |
| color.dark.raised3 | #212121 | #434A51 | 0.405 |
| color.dark.raised4 | #2A2A2A | #4D535B | 0.440 |
| color.dark.raised5 | #333333 | #565D65 | 0.475 |
| color.dark.border | #2A2A2A | #4D535B | 0.440 |
| color.dark.borderSubtle | #1A1A1A | #3B4249 | 0.375 |
| color.dark.textPrimary | #F5F5F5 | #EAE8E3 | 0.931 |
| color.dark.textSecondary | #B9B9B7 | #C9C7C3 | 0.830 |
| color.dark.textTertiary | #858583 | #B3B1AD | 0.761 |
| color.dark.textDisabled | #565654 | #7C7A76 | 0.580 |
| color.focusRing.dark | #E8E8EA | #E9EBEE | 0.939 |
| color.status.success.dark | #388F63 | #57AD7F | 0.681 |
| color.status.success.ink.dark | #3C9366 | #6AC090 | 0.740 |
| color.status.warning.dark | #C94E28 | #F67751 | 0.711 |
| color.status.warning.ink.dark | #DC5A33 | #FE9374 | 0.770 |
| color.status.info.dark | #3866E8 | #709AFD | 0.700 |
| color.status.info.ink.dark | #517DF3 | #8DAFFD | 0.760 |
| color.status.error.dark | #DD4C4C | #FE6B67 | 0.709 |

## Semantic dark-mode alias changes (brand ramp values untouched)

| semantic | old dark alias | new dark alias | reason |
|---|---|---|---|
| color.brand.accentInk | teal.400 | teal.200 | teal.400 = 3.10:1 on raised2; teal.200 clears AA on every dark surface |
| color.interactive.hover-ink | teal.400 | teal.200 | same |
| color.interactive.hover | teal.400 | teal.300 | icon/border tier, 4.34:1 worst case (>3:1 non-text) |

## Contrast figures (WCAG, 2dp)

- color.dark.textPrimary #EAE8E3: surfacePage 10.57, well 12.62, floor 11.66, raised1 9.38, raised2 8.32
- color.dark.textSecondary #C9C7C3: surfacePage 7.67, well 9.15, floor 8.46, raised1 6.81, raised2 6.04
- color.dark.textTertiary #B3B1AD: surfacePage 6.05, well 7.22, floor 6.67, raised1 5.37, raised2 4.76
- color.dark.textDisabled #7C7A76: surfacePage 3.02, well 3.61, floor 3.33, raised1 2.68, raised2 2.38
- color.focusRing.dark #E9EBEE: surfacePage 10.84, well 12.94, floor 11.96, raised1 9.62, raised2 8.53
- color.status.success.ink.dark #6AC090: surfacePage 5.89, well 7.03, floor 6.50, raised1 5.23, raised2 4.64
- color.status.warning.ink.dark #FE9374: surfacePage 5.94, well 7.09, floor 6.56, raised1 5.27, raised2 4.68
- color.status.info.ink.dark #8DAFFD: surfacePage 5.97, well 7.12, floor 6.59, raised1 5.30, raised2 4.70
- color.status.success.dark #57AD7F: surfacePage 4.74, well 5.66, floor 5.23, raised1 4.21, raised2 3.73
- color.status.warning.dark #F67751: surfacePage 4.73, well 5.65, floor 5.22, raised1 4.20, raised2 3.72
- color.status.info.dark #709AFD: surfacePage 4.76, well 5.69, floor 5.26, raised1 4.23, raised2 3.75
- color.status.error.dark #FE6B67: surfacePage 4.63, well 5.53, floor 5.11, raised1 4.11, raised2 3.64
- color.teal.200 #8FD2D5: surfacePage 7.61, well 9.08, floor 8.40, raised1 6.76, raised2 5.99
- color.teal.300 #52B8BC: surfacePage 5.51, well 6.58, floor 6.08, raised1 4.89, raised2 4.34
- color.teal.400 #1C9DA2: surfacePage 3.94, well 4.70, floor 4.35, raised1 3.50, raised2 3.10
- color.teal.700 #056268: surfacePage 1.82, well 2.17, floor 2.01, raised1 1.62, raised2 1.43
- color.teal.500 #038E93: surfacePage 3.26, well 3.90, floor 3.60, raised1 2.90, raised2 2.57
- borders: border(raised4) on page 1.67, borderSubtle(raised2) on page 1.27
- utility.white on page 12.94; warmGray.50 on page 11.50
