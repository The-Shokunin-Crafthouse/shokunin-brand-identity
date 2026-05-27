# Mono Secondary · Candidate Shortlist

**Stage:** 01-brief · output
**Date:** 2026-05-26
**Status:** Evaluation only — selection happens in Sprint 2. No winner picked in this document.

The mono family is the secondary face of the system. It carries chrome (eyebrows, badges, buttons, timestamps), code surfaces, token references, and metadata. The primary face is Neue Haas Grotesk Display Pro; the mono must pair with it without competing or going silent.

System anchors used for this evaluation:
- **Ground** — `color/surface/page` light: `#E3DFD8` (oatmeal, warmGray.100). Dark: `#0D0C0B`.
- **Ink** — `color/text/primary` light: `#1A1815` (warmGray.800).
- **Active type weights** — 300 (light), 400 (regular), 500 (medium), 600 (semibold — secondary-button hover only).
- **Scale steps touched by mono** — 11, 12, 13 (chrome), 14 (button labels in dense states), 16 (code prose), occasionally 24 (display mono in motion cards).

Each candidate is evaluated on five dimensions. None is a binary pass/fail — read the prose.

---

## 1 · Geist Mono *(Vercel · free · OFL)*

**Optical compatibility with NHG at 16 / 13 / 24px.**
Geist Mono is a geometric grotesque mono cut from the same family as Geist Sans. At 16px body and 13px small it sits cleanly beside NHG — both are German-grotesque-influenced, both prioritize evenness over warmth. At 24px display the geometry becomes assertive: Geist's perfect circles and neutral terminals read slightly mechanical next to NHG's mild humanism. Display-mono uses (motion cards, token specimens) get a "Vercel-product" register that may compete with the brand register.

**Weight availability against NHG 400 / 500.**
Variable axis 100–900. Has clean Regular 400 and Medium 500. Pairs against NHG without dynamic tension — colour matches within ~2% at body sizes. Weight 600 is also available for the secondary-button hover bump.

**Legibility at 11 / 12px.**
Moderate x-height (~510 units). 12px is clean. 11px loses some counter distinction in tight glyphs ('e', 'a') on sub-pixel-rendered displays; readable but not advantageous. Letter spacing is generous, which helps at the small end of the chrome.

**Character set for code / token reference.**
Full Latin Extended-A, symbols, currency, math operators. Programming ligatures present (`=>`, `!=`, `==`, `>=`, `<=`) and clean. Brackets, slashes, hyphens are well-differentiated — important for `var(--token-name)` references and CSS paths.

**On warm ground + ink.**
Reads cleanly. The geometry doesn't fight oatmeal but doesn't draw warmth from it either — sits *on top of* the ground rather than *in* it. With shu accents the contrast register feels "tech-product" rather than "crafthouse." Carries Vercel/Next.js associations that are well-known in the audience the brand will speak to.

---

## 2 · JetBrains Mono *(JetBrains · free · OFL)*

**Optical compatibility with NHG at 16 / 13 / 24px.**
Tall x-height (~535 units) — taller than NHG's. At 24px display the mono reads heavier than NHG Regular at matching weights, creating a visual hierarchy reversal where the chrome out-shouts the body type. At 16px body the height delta normalises. At 13px small the tall x-height becomes an advantage (more interior space per glyph).

**Weight availability against NHG 400 / 500.**
Weights 200–800. Regular 400 and Medium 500 available. JetBrains Medium reads slightly heavier than NHG Medium at matching point sizes due to the taller x-height; eyebrows and labels would benefit from being set in Regular 400 rather than Medium 500 to compensate.

**Legibility at 11 / 12px.**
Best-in-class. JetBrains Mono was purpose-built for IDE display at 12–14px on retina; the wedge terminals on 'l' and 'i', the distinct '0' (slashed), and the open counters all make 11–12px reliable. Strongest of the four at the small end.

**Character set for code / token reference.**
Programming-heavy. 138 code-specific ligatures (`->`, `=>`, `<=>`, return-type arrows, comparison chains). Box-drawing characters. Powerline glyphs available. Distinct '0' (slashed), '1' (with foot serif), 'I'/'l' (clearly differentiated). The most code-native of the four.

**On warm ground + ink.**
Reads sharp and slightly cold against oatmeal. The IDE associations are strong enough that the brand register risks shifting toward "developer tool" rather than "crafthouse." The face was not tuned for warm grounds; the perceived contrast against `#E3DFD8` reads cooler than the same face on a pure-white ground, but the wedge serifs and tall x-height still telegraph "IDE."

---

## 3 · IBM Plex Mono *(IBM · Bold Monday · free · OFL)*

**Optical compatibility with NHG at 16 / 13 / 24px.**
The most optically compatible of the four. Plex Mono and NHG share grotesque DNA (Mike Abbink studied Akzidenz; Neue Haas is the Helvetica refinement of Akzidenz) — the rhythm and proportion read as adjacent. At 24px display Plex Mono sits naturally next to NHG Display without weight or contrast tension. At 16px body excellent. At 13px small holds.

**Weight availability against NHG 400 / 500.**
Weights 100–700 (no variable axis as of current release). Regular 400 and Medium 500 match NHG colour cleanly. Weight 600 (SemiBold) available for the hover bump. Italics are available across all weights — useful if italic mono ever enters the system.

**Legibility at 11 / 12px.**
Moderate x-height (~516 units). 12px is reliable. 11px loses some character distinction — 'a' and 'o' terminals look similar on sub-pixel rendering, and the 'I' / 'l' / '1' set is less differentiated than JetBrains. Readable, not best-in-class.

**Character set for code / token reference.**
Full Latin Extended, Greek, Cyrillic, Thai. No programming ligatures by design (Plex was designed as a corporate identity face, not a code face) — `=>` renders as two characters, not a fused glyph. Math, currency, and technical symbols are clean. CSS path references read as cleanly as in Geist.

**On warm ground + ink.**
Warmest read of the four. Plex Mono was designed for IBM's brand grounds — slightly off-white, slightly warm — and behaves accordingly on `#E3DFD8`. Has subtle humanist warmth in the italic forms and the 'g' double-bowl. Sits *in* the ground rather than on top of it. Carries IBM / enterprise associations that depend on the audience reading them as "credible institutional" vs. "corporate-tech."

---

## 4 · Cascadia Mono *(Microsoft · free · OFL · Google Fonts CDN)*

**Optical compatibility with NHG at 16 / 13 / 24px.**
Cascadia is the most humanist of the four — the curved terminals on 'l' and 't', the curl on 'a's bowl, the open '6' and '9' all give it personality. At 24px display this personality is visible alongside NHG's neutrality: NHG plays the calm voice, Cascadia plays the characterful one. Whether this is tension-as-feature or tension-as-bug depends on the brand's appetite. At 16px body the humanist details settle. At 13px small the curves *help* legibility — more disambiguation per glyph.

**Weight availability against NHG 400 / 500.**
Variable axis 200–700. Weights 300, 400, 500, 600 cover the active studio set exactly. Cascadia Medium reads at parity with NHG Medium — no weight tension across pairings.

**Legibility at 11 / 12px.**
Tuned for Windows Terminal at 11–14px on retina. 11px reads cleanly. The humanist details that would feel busy at 24px work in Cascadia's favour at the chrome scale — characters disambiguate by shape, not just by spacing.

**Character set for code / token reference.**
Cascadia Mono is the base cut (no programming ligatures). Cascadia Code is the same face with ligatures (`=>`, `!=`, `>=`, return arrows). Powerline glyphs available in dedicated builds. Full Latin Extended, symbols, math. Distinct '0' (slashed), 'I' / 'l' / '1' set clear.

**On warm ground + ink.**
Reads warm against oatmeal. The humanist curves draw warmth from `#E3DFD8` rather than sitting against it. With shu accents the brand register feels "considered" rather than "tech-default." Carries Microsoft / Windows Terminal associations — much lower public salience than Vercel/Geist or JetBrains; most readers will encounter Cascadia here without prior register baggage.

---

## Framing note for Sprint 2

Sprint 2 is not a green-field selection. There is a standing studio lock on Cascadia Mono from 2026-05-26 (see `decisions/decisions.md`). The real decision Sprint 2 faces is whether to keep that lock or substitute one of the other three; the evaluation above is what the substitution argument has to overcome. Three criteria should weight that call. First, optical compatibility with NHG at the 24px display tier — this is where the secondary face is most exposed and where mismatch shows fastest. Second, the question of whether the system wants a *neutral* mono (Geist or Plex — both lean toward NHG's calm) or a *characterful* mono (JetBrains for IDE-precision character, Cascadia for humanist warmth); the brand register has so far converged on "considered, artisan, warm-ground," which argues for the characterful side, but the studio could deliberately go the other way to create a deliberately quiet, institutional read. Third, legibility at 11–13px on warm ground — this is the chrome-surface tier the system actually uses most, and it is where Plex and Geist's neutrality loses to JetBrains' and Cascadia's small-size discipline. If Sprint 2 keeps Cascadia, the deciding question is whether its humanist personality is *the* signature or *a* distraction. If Sprint 2 substitutes, the question is whether the system gains more from a tighter NHG pairing (Plex) or from a sharper code-context fit (JetBrains).
