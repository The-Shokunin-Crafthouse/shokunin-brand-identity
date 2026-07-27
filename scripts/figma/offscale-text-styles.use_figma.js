/* ============================================================================
 * Off-scale text-style pass — The Shokunin Crafthouse · Brand Identity
 * Figma file key: ufNlysCwWz7y2FBk61DxbN
 *
 * HOW TO RUN
 *   • Figma desktop DevTools console (Plugins → Development → Show/Hide console,
 *     or the browser console): paste this whole file AS-IS. It is wrapped in an
 *     async IIFE so top-level await/return are legal, and logs its result.
 *   • Figma MCP `use_figma` tool: that runtime auto-wraps and FORBIDS an IIFE —
 *     paste only the body between the `// >>> BODY START` / `// <<< BODY END`
 *     markers (drop the IIFE wrapper and the .then/.catch logger).
 *
 * WHAT
 *   (a) creates 16 NEW styles in a SEPARATE off-scale group `font/text/offscale/*`
 *       so the canonical 12-step scale (`font/text/{display,body,mono,label}/*`)
 *       stays clean and untouched, and
 *   (b) fixes 3 EXISTING canonical styles in place.
 *
 * WHY FONTS MATTER
 *   The 3 brand fonts — Haas Grot Disp Trial, Haas Grot Text Trial, Cascadia Mono —
 *   must be loadable on the host (installed locally in Figma desktop, or uploaded as
 *   org/shared fonts). Figma blocks every text-style write whose font is unloaded
 *   ("Cannot use unloaded font" / "Cannot write to node with unloaded font") and
 *   TextStyle has no .clone().
 *
 * SAFETY
 *   • Atomic — if any required family/face is missing it returns { aborted: true }
 *     and makes ZERO changes.
 *   • Idempotent — re-running upserts by name (no duplicate styles).
 *   • Self-adapting — resolves the actual installed family/face names at run time.
 *
 * VALUE TABLE   (Figma stores lineHeight & letterSpacing as PERCENT:
 *                lh multiplier × 100 = PERCENT;  tracking em × 100 = PERCENT)
 *   NEW · font/text/offscale/*
 *     leaf          face              size  lh   ls     notes
 *     display/200   Disp 45 Light     200   90   -4     [lh,ls inferred — bigger-than-120]
 *     display/56    Disp 45 Light      56  110   -2.5   [inferred — 44/60 zone]
 *     display/28    Disp 45 Light      28  120   -1.8   [inferred — 24/32 zone]
 *     body/22       Text 55 Roman      22  150    0     [lh inferred]
 *     body/18       Text 55 Roman      18  150    0     [inferred]
 *     body/17       Text 55 Roman      17  150    0     [inferred]
 *     body/15       Text 55 Roman      15  150    0     [inferred]
 *     body/13       Text 55 Roman      13  150    0     Nav link — lh 1.5 PER SPEC
 *     body/12       Text 55 Roman      12  150    0     [inferred]
 *     mono/12       Cascadia Medium    12  150    4     matches token-map font/text/mono/12
 *     mono/11       Cascadia Regular   11  150    0     Regular per spec [ls inferred]
 *     mono/10       Cascadia Medium    10  150    6     [inferred — chrome-tier]
 *     label/med16   Text 65 Medium     16  150    0     weight 500 [ls inferred]
 *     label/med14   Text 65 Medium     14  150    0     weight 500 [inferred]
 *     label/med13   Text 65 Medium     13  150    0     weight 500 [inferred]
 *     label/sb15    Text ~600 face     15  150    0     weight 600 [no native Haas 600 face → nearest]
 *   FIX · existing canonical (mutated in place)
 *     font/text/mono/chrome   weight SemiBold 600 → Medium 500   (aligns Figma with codebase token)
 *     font/text/display/lg    lineHeight 110 → 105
 *     font/text/display/xl    lineHeight 100 → 90
 *
 * SPEC FLAGS (carried through verbatim, surfaced for the record)
 *   • label/sb15 @600 contradicts token-map.md "weight 600 reserved exclusively for the
 *     secondary-button hover bump — no scale step uses it."
 *   • label/med13–16 @500 contradicts "body/reading 13–20 = regular 400".
 *   • Values marked [inferred] are derived from the system's line-height/tracking zones,
 *     not given in the spec — adjust before running if the source artifact differs.
 *   • New styles use RAW fontSize (matching the 15 existing styles, whose boundVars are
 *     empty). To bind to primitives instead, add setBoundVariable('fontSize', font/size/N).
 * ============================================================================ */

(async () => {
  // >>> BODY START (for MCP use_figma, paste from here to BODY END, no IIFE) >>>

  // --- 1. discover installed fonts -----------------------------------------
  const all = await figma.listAvailableFontsAsync();
  const facesByFamily = {};
  for (const f of all) {
    const fam = f.fontName.family;
    if (!facesByFamily[fam]) facesByFamily[fam] = [];
    facesByFamily[fam].push(f.fontName.style);
  }
  const pickFamily = (cands) => cands.find((c) => facesByFamily[c]) || null;
  const pickFace = (family, prefs) => {
    const avail = facesByFamily[family] || [];
    return prefs.find((p) => avail.includes(p)) || null;
  };

  const famDisp = pickFamily(['Haas Grot Disp Trial', 'Haas Grot Display Trial', 'Neue Haas Grotesk Display Pro']);
  const famText = pickFamily(['Haas Grot Text Trial', 'Neue Haas Grotesk Text Pro', 'Neue Haas Grotesk Text']);
  const famMono = pickFamily(['Cascadia Mono', 'Cascadia Code']);

  const missingFam = [];
  if (!famDisp) missingFam.push('display (Haas Grot Disp/Display Trial)');
  if (!famText) missingFam.push('text (Haas Grot Text Trial)');
  if (!famMono) missingFam.push('mono (Cascadia Mono)');
  if (missingFam.length) {
    return {
      aborted: true,
      reason: 'Brand font families not loadable here: ' + missingFam.join('; '),
      hint: 'Run from a host that has the fonts (Figma desktop w/ trial fonts installed, or org-uploaded fonts).',
    };
  }

  const F = {
    dispLight:   { family: famDisp, style: pickFace(famDisp, ['45 Light', 'Light']) },
    textRoman:   { family: famText, style: pickFace(famText, ['55 Roman', 'Roman', 'Regular']) },
    textMedium:  { family: famText, style: pickFace(famText, ['65 Medium', 'Medium']) },
    textSemi:    { family: famText, style: pickFace(famText, ['Semibold', 'Semi Bold', '65 Medium', '75 Bold', 'Bold']) },
    monoRegular: { family: famMono, style: pickFace(famMono, ['Regular']) },
    monoMedium:  { family: famMono, style: pickFace(famMono, ['Medium', 'SemiBold', 'Regular']) },
  };
  const missingFace = Object.entries(F).filter(([, v]) => !v.style).map(([k]) => k);
  if (missingFace.length) {
    return {
      aborted: true,
      reason: 'Required font faces missing: ' + missingFace.join(', '),
      available: { [famDisp]: facesByFamily[famDisp], [famText]: facesByFamily[famText], [famMono]: facesByFamily[famMono] },
    };
  }

  // --- 2. preload every face we will write ---------------------------------
  await Promise.all(Object.values(F).map((f) => figma.loadFontAsync(f)));

  // --- 3. upsert the 16 new off-scale styles -------------------------------
  const existing = {};
  (await figma.getLocalTextStylesAsync()).forEach((s) => { existing[s.name] = s; });
  const lh = (v) => ({ unit: 'PERCENT', value: v });
  const ls = (v) => ({ unit: 'PERCENT', value: v });
  const results = [];

  async function upsert(name, font, size, lhPct, lsPct, desc) {
    let s = existing[name];
    let action = 'updated';
    if (!s) { s = figma.createTextStyle(); s.name = name; action = 'created'; }
    else { await figma.loadFontAsync(s.fontName); } // unlock write on the style's prior font
    s.fontName = font;
    s.fontSize = size;
    s.lineHeight = lh(lhPct);
    s.letterSpacing = ls(lsPct);
    if (desc) s.description = desc;
    results.push({ name, id: s.id, action });
  }

  const G = 'font/text/offscale/';
  await upsert(G + 'display/200', F.dispLight, 200, 90,  -4,   'Off-scale display (doc/preview). 200px.');
  await upsert(G + 'display/56',  F.dispLight, 56,  110, -2.5, 'Off-scale display. 56px.');
  await upsert(G + 'display/28',  F.dispLight, 28,  120, -1.8, 'Off-scale display. 28px.');
  await upsert(G + 'body/22', F.textRoman, 22, 150, 0, 'Off-scale body. 22px.');
  await upsert(G + 'body/18', F.textRoman, 18, 150, 0, 'Off-scale body. 18px.');
  await upsert(G + 'body/17', F.textRoman, 17, 150, 0, 'Off-scale body. 17px.');
  await upsert(G + 'body/15', F.textRoman, 15, 150, 0, 'Off-scale body. 15px.');
  await upsert(G + 'body/13', F.textRoman, 13, 150, 0, 'Off-scale body — Nav link. 13px / lh 1.5.');
  await upsert(G + 'body/12', F.textRoman, 12, 150, 0, 'Off-scale body. 12px.');
  await upsert(G + 'mono/12', F.monoMedium,  12, 150, 4, 'Off-scale mono. 12px / 500.');
  await upsert(G + 'mono/11', F.monoRegular, 11, 150, 0, 'Off-scale mono. 11px Regular.');
  await upsert(G + 'mono/10', F.monoMedium,  10, 150, 6, 'Off-scale mono. 10px / 500.');
  await upsert(G + 'label/med16', F.textMedium, 16, 150, 0, 'Off-scale label medium. 16px / 500.');
  await upsert(G + 'label/med14', F.textMedium, 14, 150, 0, 'Off-scale label medium. 14px / 500.');
  await upsert(G + 'label/med13', F.textMedium, 13, 150, 0, 'Off-scale label medium. 13px / 500.');
  await upsert(G + 'label/sb15',  F.textSemi,   15, 150, 0, 'Off-scale label semibold. 15px / 600 (nearest face: ' + F.textSemi.style + ').');

  // --- 4. fix 3 existing canonical styles ----------------------------------
  const fixes = [];
  async function fix(name, apply) {
    const s = existing[name];
    if (!s) { fixes.push({ name, skipped: 'not found' }); return; }
    await figma.loadFontAsync(s.fontName); // unlock write on its current brand font
    apply(s);
    fixes.push({ name, id: s.id });
  }
  await fix('font/text/mono/chrome', (s) => { s.fontName = F.monoMedium; }); // SemiBold 600 -> Medium 500
  await fix('font/text/display/lg',  (s) => { s.lineHeight = lh(105); });    // 110 -> 105
  await fix('font/text/display/xl',  (s) => { s.lineHeight = lh(90); });     // 100 -> 90

  return {
    facesResolved: F,
    created: results.filter((r) => r.action === 'created').length,
    updated: results.filter((r) => r.action === 'updated').length,
    styles: results,
    fixes,
  };

  // <<< BODY END <<<
})()
  .then((r) => console.log('[offscale-text-styles] result:\n' + JSON.stringify(r, null, 2)))
  .catch((e) => console.error('[offscale-text-styles] FAILED:', e));
