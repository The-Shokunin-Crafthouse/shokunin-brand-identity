# Sprint: brand-site-shell
Stage: 03-build
Status: drafting

---

## Inputs
| Source | File/Location | Section/Scope | Why |
|--------|--------------|---------------|-----|
| Brand spec | _config/sc-brand-system-spec.md | §4 Stack, §5 Sprint 5, §6 Sprint 5 criteria | Stack decisions, deliverables, success criteria |
| Design tokens | _config/design-system/token-map.md | Full | All implementation values |
| Figma file URL | _config/design-system/figma-links.md | URL only | Source file location |
| Creative defaults | ~/Projects/shokunin-crafthouse/studio-memory/studio-memory.md | §9 only | Design decisions |
| Code standards | ~/Projects/shokunin-crafthouse/studio-memory/studio-memory.md | §6 only | Implementation rules |

## Pre-flight

| Check | Type | Action if failed |
|---|---|---|
| `_config/sc-brand-system-spec.md` exists | **BLOCKER** | Stop. Print: `BLOCKER: spec not found at _config/sc-brand-system-spec.md. Commit before continuing.` Do not proceed. |
| This CONTEXT.md exists with `Status: drafting` or `Status: approved` | **BLOCKER** | Stop and report the missing or malformed file. Do not proceed. |
| `_config/design-system/token-map.md` exists | **BLOCKER** | Stop. Print: `BLOCKER: token-map.md not found. Run sync-figma-token before this session.` Do not proceed. |
| Previous sprint CONTEXT.md has `Status: complete` | WARNING | Report the incomplete sprint by name. Continue but note in contract proposal. |

## Contract
(leave blank — Claude proposes at session start, filled after approval)

## Outputs
| Artifact | Location | Format |
|----------|----------|--------|
| Site shell | brand-site/src/ | React + Vite |
| Color section | brand-site/src/sections/color/ | React components |
| All other sections | brand-site/src/sections/ | Stubbed — shell only, no content |
| Token CSS | brand-site/src/tokens.css | CSS custom properties compiled from token-map.md |
| Snapshots | /previews/brand-site-shell/ | PNG — 360, 768, 1024, 1440 |

## Audit (Claude runs before opening the PR)
- [ ] Zero hardcoded hex values — every color references a CSS custom property from tokens.css
- [ ] Zero magic numbers — every spacing value from the token scale
- [ ] Site shell matches Color page Sandbox design exactly — nav, layout, mode toggle, footer
- [ ] Navigation structure matches the Sandbox design — all sections listed, Color active state correct
- [ ] Mode toggle switches light/dark — all tokens update without page reload
- [ ] Color section is fully populated — not stubbed
- [ ] All other sections render the shell with a placeholder, not a blank page
- [ ] Site is functional at 360, 768, 1024, and 1440
- [ ] `npm run build` exits 0
- [ ] `npm run preview brand-site-shell` exits 0 and produces 4 PNGs
- [ ] PNGs verified to show rendered site, not blank pages or error states
- [ ] No third-party component library used — every component built from the design system
- [ ] Sprint 2 CONTEXT.md scaffolded at stages/03-build/brand-site-type/CONTEXT.md with Status: drafting

## PR & Preview

Run the full Audit checklist above before opening the PR. Do not open 
the PR until every item passes. Update Status to "complete" after all 
audit items pass.

After audit passes:
1. Open PR against main
2. Capture PR number: `gh pr view --json number -q .number`
3. Read production domain from WORKSPACE.md
4. Print this exact line in chat (raw, cmd-clickable):
   📱 Preview URL: https://[domain]/_previews/[pr-number]/
5. Run: `gh run watch --exit-status --workflow=preview-deploy.yml \
   $(gh run list --branch feat/brand-site-shell \
   --workflow=preview-deploy.yml \
   --limit 1 --json databaseId -q '.[0].databaseId')`
6. Print ✅ on success or ❌ + full failure logs on failure
