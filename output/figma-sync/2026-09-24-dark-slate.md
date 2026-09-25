# Figma SCDS library sync — slate dark palette (2026-09-24)

Status: NOT APPLIED. Both `use_figma` write attempts (subagent and main session) were denied by the Claude Code auto-mode permission classifier ("Modify Shared Resources"). Run script A then script B via `use_figma` on `0zVoxaLJQkjHENYJlQk1VT` from a session with Figma write permission, then re-run `scripts/parity/compare-figma-variables.mjs` and `compare-figma-screens.mjs`.

## Step 1: before table (read live)

Collections: `Primitives` VariableCollectionId:2:2 (mode Value `2:0`), `Semantic` VariableCollectionId:4:2 (Light `4:0`, Dark `4:1`).

| Figma variable | id | current | target |
|---|---|---|---|
| color/dark/well | 2:31 | #080807 | #1F252C |
| color/dark/floor | 2:32 | #0a0a0a | #252B32 |
| color/dark/surfacePage | 2:33 | #0f0f0f | #2C3239 |
| color/dark/raised1 | 2:34 | #141414 | #343A41 |
| color/dark/raised2 | 2:35 | #1a1a1a | #3B4249 |
| color/dark/raised3 | 2:36 | #212121 | #434A51 |
| color/dark/raised4 | 2:37 | #2a2a2a | #4D535B |
| color/dark/raised5 | 2:38 | #333333 | #565D65 |
| color/dark/border | 2:39 | -> raised4 | keep alias (resolves #4D535B) |
| color/dark/borderSubtle | 2:40 | -> raised2 | keep alias (resolves #3B4249) |
| color/dark/textPrimary | 2:41 | #f5f5f5 | #EAE8E3 |
| color/dark/textSecondary | 2:42 | #b9b9b7 | #C9C7C3 |
| color/dark/textTertiary | 2:43 | **#7c7c7a** (repo old was #858583, Figma never got the 09-06 re-derive) | #B3B1AD |
| color/dark/textDisabled | 2:44 | #565654 | #7C7A76 |
| color/focusRing/dark | 2:30 | #e8e8ea | #E9EBEE |
| color/status/success/dark | 2:46 | #388f63 | #57AD7F |
| color/status/warning/dark | 2:48 | #c94e28 | #F67751 |
| color/status/info/dark | 2:50 | #3866e8 | #709AFD |
| color/status/error/dark | 2:52 | #dd4c4c | #FE6B67 |
| color/status/warningInkDark | 211:5 | **#d2512a** (pre-09-06 value) | #FE9374 |
| color/status/infoInkDark | 211:6 | **#4a74ea** (pre-09-06 value) | #8DAFFD |
| color/status/successInkDark | (none) | **does not exist** | create, #6AC090 |
| Semantic color/status/success-ink (Dark) | 211:8 | -> status/success/dark | -> successInkDark |
| Semantic color/interactive/hover (Dark) | 4:20 | -> teal/400 | -> teal/300 |
| Semantic color/interactive/hover-ink (Dark) | 211:11 | -> teal/400 | -> teal/200 |
| Semantic color/brand/accentInk | (none) | **does not exist** | create, Light -> teal/700, Dark -> teal/200 |

Brief-vs-file naming drift: Figma has no `color/status/*/ink/dark` paths. The ink primitives are flat (`color/status/warningInkDark`, `infoInkDark`, `*InkLight`). Figma also never received the 2026-09-06 WQ-040/041 token additions (`brand.accentInk`, `status.success.ink.dark`, the re-derived ink values). The planned script therefore **creates** two variables using the file's flat convention. That is a call for Levi: if the generator's Figma naming for these tokens differs, re-run the generator instead.

Teal ids: teal/200 `VariableID:2:19` (#8fd2d5), teal/300 `VariableID:2:20` (#52b8bc), teal/400 `VariableID:2:21`. Ramp untouched.

## Step 4: Color page 18:4 inventory (read live)

308 text nodes. Convention on this page: **UPPERCASE hex, no `#`**. (The brief said lowercase. Match the page, so use uppercase.) 18 captions print an old dark value, 0 captions were edited:

| node id | tile | current | target |
|---|---|---|---|
| 130:8 | Well | 080807 | 1F252C |
| 130:12 | Floor | 0A0A0A | 252B32 |
| 130:16 | Surface Page | 0F0F0F | 2C3239 |
| 130:20 | Raised 1 | 141414 | 343A41 |
| 130:24 | Raised 2 | 1A1A1A | 3B4249 |
| 130:28 | Raised 3 | 212121 | 434A51 |
| 130:32 | Raised 4 | 2A2A2A | 4D535B |
| 130:37 | Raised 5 | 333333 | 565D65 |
| 130:41 | Border | 2A2A2A | 4D535B |
| 130:45 | Border Subtle | 1A1A1A | 3B4249 |
| 130:49 | Text Primary | F5F5F5 | EAE8E3 |
| 130:53 | Text Secondary | B9B9B7 | C9C7C3 |
| 130:57 | Text Tertiary | 7C7C7A | B3B1AD |
| 130:61 | Text Disabled | 565654 | 7C7A76 |
| I132:5;84:13 | StatusTile Success | D 388F63 | D 57AD7F |
| I132:17;84:13 | StatusTile Warning | D C94E28 | D F67751 |
| I132:29;84:13 | StatusTile Info | D 3866E8 | D 709AFD |
| I132:41;84:13 | StatusTile Error | D 732020 | D FE6B67 |

The instance captions (`I132:*`) are instance overrides. They are editable as text overrides, but they sit in a `Type/Mono/Chrome` instance and may hit the brand-font wall.

Status tile swatch fills:
- `132:5`, `132:17`, `132:29`: swatch fill is bound to a variable. OK.
- `132:41` Error: swatch `I132:41;9:410` is **hard-set #dd4c4c, unbound**. Target: bind to Semantic `color/status/error` (VariableID:4:24).
- MASTER `9:409` (not on page 18:4, parent null in this read): swatch `9:410` is **hard-set #2e8559, unbound**. Its text fills bind to *remote library* variable ids, not local ones. Needs a human look before binding. The master also prints stale defaults ("D 6EE7B7", "AA 4.9 : 1") on `84:13` / `84:7`.
- Swatch fills show the Light value (#2f855a etc.) because the page renders Light mode. The Dark row reads through the variables.

Prose: the only "neutral"/"near-black" hit is `218:51` "Neutral — warmGray". That is the light warmGray ramp header, not a description of the dark ground. **Not a target. Leave it.** No prose describes the dark ground, so "slate · hue 252°" has no caption to go into.

AA ratio captions on status tiles ("AA 4.5 : 1", "5.2", "5.9", "10.0") are now stale for dark too. They are out of this brief's scope, so flag only.

## Step 5 / Step 6

- Verify: not run. There was no write to verify.
- Screenshot (BEFORE state, page unchanged): `/private/tmp/claude-501/-Users-bahnfiya-Projects-shokunin-crafthouse-shokunin-brand-identity/bd2fba82-2b40-4399-a86f-8d3e9addfb91/scratchpad/color-page-before.png` (1242x2048, source 2591x4274).

## Blocked nodes / items (all, pending write permission)

All variables above (19 value sets, 3 alias re-points, 2 creates), the 18 captions listed, and the swatch binding on `I132:41;9:410`. The master `9:409` swatch is deferred for human review.

## Prepared write script A (variables), run via use_figma on 0zVoxaLJQkjHENYJlQk1VT

```js
const rgb=h=>({r:parseInt(h.slice(1,3),16)/255,g:parseInt(h.slice(3,5),16)/255,b:parseInt(h.slice(5,7),16)/255});
const V=id=>figma.variables.getVariableByIdAsync(id); const PM='2:0',LM='4:0',DM='4:1';
const set={'VariableID:2:31':'#1F252C','VariableID:2:32':'#252B32','VariableID:2:33':'#2C3239','VariableID:2:34':'#343A41','VariableID:2:35':'#3B4249','VariableID:2:36':'#434A51','VariableID:2:37':'#4D535B','VariableID:2:38':'#565D65','VariableID:2:41':'#EAE8E3','VariableID:2:42':'#C9C7C3','VariableID:2:43':'#B3B1AD','VariableID:2:44':'#7C7A76','VariableID:2:30':'#E9EBEE','VariableID:2:46':'#57AD7F','VariableID:2:48':'#F67751','VariableID:2:50':'#709AFD','VariableID:2:52':'#FE6B67','VariableID:211:5':'#FE9374','VariableID:211:6':'#8DAFFD'};
for(const[id,h]of Object.entries(set))(await V(id)).setValueForMode(PM,rgb(h));
const prim=await figma.variables.getVariableCollectionByIdAsync('VariableCollectionId:2:2');
const sem=await figma.variables.getVariableCollectionByIdAsync('VariableCollectionId:4:2');
const A=v=>figma.variables.createVariableAlias(v);
const s=figma.variables.createVariable('color/status/successInkDark',prim,'COLOR'); s.scopes=['TEXT_FILL']; s.setValueForMode(PM,rgb('#6AC090'));
const t200=await V('VariableID:2:19'),t300=await V('VariableID:2:20');
const t700=(await figma.variables.getLocalVariablesAsync()).find(v=>v.name==='color/teal/700');
(await V('VariableID:211:8')).setValueForMode(DM,A(s));
(await V('VariableID:211:11')).setValueForMode(DM,A(t200));
(await V('VariableID:4:20')).setValueForMode(DM,A(t300));
const a=figma.variables.createVariable('color/brand/accentInk',sem,'COLOR'); a.scopes=['TEXT_FILL']; a.setValueForMode(LM,A(t700)); a.setValueForMode(DM,A(t200));
return {created:[s.id,a.id]};
```

## Prepared write script B (captions + Error swatch)

```js
const page=await figma.getNodeByIdAsync('18:4'); await figma.setCurrentPageAsync(page);
const edits={'130:8':'1F252C','130:12':'252B32','130:16':'2C3239','130:20':'343A41','130:24':'3B4249','130:28':'434A51','130:32':'4D535B','130:37':'565D65','130:41':'4D535B','130:45':'3B4249','130:49':'EAE8E3','130:53':'C9C7C3','130:57':'B3B1AD','130:61':'7C7A76','I132:5;84:13':'D 57AD7F','I132:17;84:13':'D F67751','I132:29;84:13':'D 709AFD','I132:41;84:13':'D FE6B67'};
const done=[],blocked=[];
for(const[id,txt]of Object.entries(edits)){const n=await figma.getNodeByIdAsync(id);try{for(const f of n.getRangeAllFontNames(0,n.characters.length))await figma.loadFontAsync(f);n.characters=txt;done.push(id)}catch(e){blocked.push({id,txt,err:String(e)})}}
const sw=await figma.getNodeByIdAsync('I132:41;9:410'); const err=await figma.variables.getVariableByIdAsync('VariableID:4:24');
sw.fills=[figma.variables.setBoundVariableForPaint(sw.fills[0],'color',err)];
return {done,blocked,bound:sw.id};
```
