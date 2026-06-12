# Sprint: brand-site-color
Stage: 03-build
Status: drafting

---

## Inputs
| Source | File/Location | Section/Scope | Why |
|--------|--------------|---------------|-----|
| Brand spec | _config/sc-brand-system-spec.md | §5 Sprint 5, §6 Sprint 5 criteria | Deliverables + success criteria |
| Design tokens | _config/design-system/token-map.md | Full | All implementation values |
| Figma file URL | _config/design-system/figma-links.md | URL only | Source file location |
| Prior sprint | stages/03-build/brand-site-shell/ | Full | Shell + Color section already built; this sprint extends from it |
| Creative defaults | ~/Projects/shokunin-crafthouse/studio-memory/playbooks/creative-defaults.md | Full | Design decisions |
| Code standards | ~/Projects/shokunin-crafthouse/studio-memory/playbooks/code-standards.md | Full | Implementation rules |

## Pre-flight

| Check | Type | Action if failed |
|---|---|---|
| `_config/sc-brand-system-spec.md` exists | **BLOCKER** | Stop. Print: `BLOCKER: spec not found at _config/sc-brand-system-spec.md.` Do not proceed. |
| This CONTEXT.md exists with `Status: drafting` or `Status: approved` | **BLOCKER** | Stop and report the missing or malformed file. Do not proceed. |
| `_config/design-system/token-map.md` exists | **BLOCKER** | Stop. Print: `BLOCKER: token-map.md not found. Run sync-figma-token before this session.` Do not proceed. |
| Previous sprint (`brand-site-shell`) CONTEXT.md has `Status: complete` | WARNING | Report the incomplete sprint by name. Continue but note in contract proposal. |
| `token-map.md` re-synced after the brand-site-shell palette ADR (2026-05-28) | WARNING | token-map.md status palette may be stale vs tokens/*.json. Reconcile before relying on it. |

## Contract
(leave blank — Claude proposes at session start, filled after approval)

## Outputs
| Artifact | Location | Format |
|----------|----------|--------|
| Next foundation/section build-out | src/sections/ | React components |
| Token CSS (regenerated if tokens change) | src/styles/tokens.css | CSS custom properties |
| Snapshots | previews/brand-site-color/ | PNG — 390, 768, 1280, 1920 |

## Audit (Claude runs before opening the PR)
- [ ] Zero hardcoded hex values — every color references a CSS custom property from tokens.css
- [ ] Zero magic numbers — every spacing value from the token scale
- [ ] All four breakpoints implemented (390, 768, 1280, 1920)
- [ ] All interactive states present (default, hover, focus, active, disabled)
- [ ] Real copy everywhere — no lorem ipsum
- [ ] Asset paths work at root (/) AND at /_previews/[N]/
- [ ] `npm run build` exits 0
- [ ] `npm run preview brand-site-color` exits 0 and produces 4 PNGs
- [ ] PNGs verified to show rendered section, not blank pages or error states
- [ ] Next sprint CONTEXT.md scaffolded with Status: drafting
