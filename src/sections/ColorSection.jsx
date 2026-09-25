/**
 * ColorSection — Foundations · Color · fully built.
 *
 * Ports the Sandbox "Color — DL" page: metabar, hero, and five
 * chapters (warm-gray ladder, teal signal, status row, three-tier
 * resolution, interactive contrast checker) with right-gutter
 * annotations.
 *
 * No hex literal appears in this file. Swatches paint via var(--sc-*)
 * token references; the contrast checker resolves those tokens to
 * concrete colours at runtime through a hidden probe element, so the
 * single source of truth stays tokens.css and the maths follows the
 * active theme automatically.
 */

import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from '../theme/ThemeProvider.jsx';
import styles from './ColorSection.module.css';

// Slash separator — always lighter than adjacent text per design rule.
function Slash() { return <span className={styles.slash}> / </span>; }
// Split a string on '·' or '/' and render each separator as a Slash.
function withSlash(str) {
  const parts = String(str).split(/\s*[·/]\s*/);
  return parts.map((p, i) => (
    <Fragment key={i}>{p}{i < parts.length - 1 && <Slash />}</Fragment>
  ));
}

const WARM = ['25', '50', '100', '200', '250', '300', '350', '400', '500', '600', '700', '800', '900'];
const TEAL = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const warmVar = (s) => `--sc-p-color-warm-gray-${s}`;
const tealVar = (s) => `--sc-p-color-teal-${s}`;

const STATUS = [
  { key: 'success', label: 'Success', hue: 'Forest green / fill tier, ink for text', light: '--sc-p-color-status-success-light', dark: '--sc-p-color-status-success-dark' },
  { key: 'warning', label: 'Warning', hue: 'Burnt orange / hue ~20°', light: '--sc-p-color-status-warning-light', dark: '--sc-p-color-status-warning-dark' },
  { key: 'error', label: 'Error', hue: 'Oxblood / deep / off-brand', light: '--sc-p-color-status-error-light', dark: '--sc-p-color-status-error-dark' },
  { key: 'info', label: 'Info', hue: 'Royal blue / AA on ground 4.79 : 1', light: '--sc-p-color-status-info-light', dark: '--sc-p-color-status-info-dark' },
];

const QUICK_FG = [
  '--sc-p-color-warm-gray-800', '--sc-p-color-warm-gray-500', '--sc-p-color-warm-gray-50',
  '--sc-p-color-teal-500', '--sc-p-color-teal-700',
  '--sc-p-color-status-error-light', '--sc-p-color-status-success-light', '--sc-p-color-status-info-light',
];
const QUICK_BG = [
  '--sc-p-color-warm-gray-100', '--sc-p-color-warm-gray-50', '--sc-p-color-warm-gray-25', '--sc-p-color-warm-gray-200',
  '--sc-p-color-warm-gray-900', '--sc-p-color-warm-gray-800', '--sc-p-color-teal-500', '--sc-p-color-teal-700',
];

// Human-readable semantic role for a primitive token var (display only).
const ROLE = {
  '--sc-p-color-warm-gray-100': 'surface-page',
  '--sc-p-color-warm-gray-50': 'surface-raised',
  '--sc-p-color-warm-gray-25': 'surface-floating',
  '--sc-p-color-warm-gray-200': 'surface-sunk',
  '--sc-p-color-warm-gray-300': 'surface-deep-sunk',
  '--sc-p-color-warm-gray-800': 'text-primary',
  '--sc-p-color-warm-gray-500': 'text-secondary',
  '--sc-p-color-warm-gray-400': 'text-disabled',
  '--sc-p-color-warm-gray-250': 'border-default',
  '--sc-p-color-teal-500': 'brand-accent / hover / focus',
  '--sc-p-color-teal-700': 'brand-accent-deep / active',
  '--sc-p-color-status-error-light': 'status-error',
  '--sc-p-color-status-success-light': 'status-success',
  '--sc-p-color-status-info-light': 'status-info',
};
const tokenName = (v) => v.replace('--sc-p-color-', '').replace(/-/g, '/');

// ── colour maths ───────────────────────────────────────────
function parseRgb(str) {
  const m = (str || '').match(/[\d.]+/g);
  return m ? { r: +m[0], g: +m[1], b: +m[2] } : { r: 0, g: 0, b: 0 };
}
function relLum({ r, g, b }) {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}
function ratioOf(c1, c2) {
  const l1 = relLum(c1);
  const l2 = relLum(c2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}
function rgbToHex({ r, g, b }) {
  return '#' + [r, g, b].map((x) => Math.round(x).toString(16).padStart(2, '0')).join('').toUpperCase();
}

function Annotation({ title, children }) {
  return (
    <div className={styles.annotation}>
      <b>{title}</b>
      {children}
    </div>
  );
}

export function ColorSection() {
  const { theme } = useTheme();
  const probeRef = useRef(null);

  // Resolve a token var to rgb through the probe (cascade + mode aware).
  const resolve = (varName) => {
    const probe = probeRef.current;
    if (!probe) return { r: 0, g: 0, b: 0 };
    probe.style.color = `var(${varName})`;
    return parseRgb(getComputedStyle(probe).color);
  };

  // Hex labels for every swatch token, recomputed on theme change.
  const allTokens = useMemo(
    () => [...WARM.map(warmVar), ...TEAL.map(tealVar), ...STATUS.flatMap((s) => [s.light, s.dark])],
    [],
  );
  const [hex, setHex] = useState({});
  useEffect(() => {
    const next = {};
    for (const v of allTokens) next[v] = rgbToHex(resolve(v));
    setHex(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  // Contrast checker state.
  const [fg, setFg] = useState('--sc-p-color-warm-gray-800');
  const [bg, setBg] = useState('--sc-p-color-warm-gray-100');
  const [last, setLast] = useState('bg');
  const [result, setResult] = useState({ ratio: 0, fgHex: '', bgHex: '' });

  useEffect(() => {
    const fgRgb = resolve(fg);
    const bgRgb = resolve(bg);
    setResult({ ratio: ratioOf(fgRgb, bgRgb), fgHex: rgbToHex(fgRgb), bgHex: rgbToHex(bgRgb) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fg, bg, theme]);

  const load = (token, role) => {
    if (role === 'fg' || (!role && last === 'bg')) {
      setFg(token);
      setLast('fg');
    } else {
      setBg(token);
      setLast('bg');
    }
  };

  const r = result.ratio;
  const passes = { aaN: r >= 4.5, aaL: r >= 3.0, aaaN: r >= 7.0, aaaL: r >= 4.5 };
  const verdict =
    r >= 7 ? ['Strong.', 'Cleanly passes AAA for normal and large body. Safe for legal and disclosure.']
    : r >= 4.5 ? ['Sufficient.', 'Passes AA for body. Reach for a deeper pairing for legal copy.']
    : r >= 3 ? ['Large text only.', 'Below AA for body. Permissible at 18px / 14px-bold and above.']
    : ['Insufficient.', 'Fails all WCAG tiers. Reserve for decoration; never for type.'];

  const isSel = (v) => v === fg || v === bg;

  return (
    <section className={styles.color} aria-labelledby="color-title">
      <span ref={probeRef} className={styles.probe} aria-hidden="true" />

      {/* META BAR */}
      <div className={styles.metabar}>
        <div className={styles.crumb}><span className={styles.crumbAccent}>01</span>Foundations / Color</div>
        <div className={styles.metaRight}>
          <span><b>Last revised</b> 2026.05.27</span>
          <span><b>Tokens</b> 88</span>
          <span><b>Spec</b> v1.2</span>
        </div>
      </div>

      {/* HERO */}
      <header className={styles.hero}>
        <span className={styles.heroEyebrow}>Color<Slash />the room and the signal</span>
        <h1 id="color-title" className={styles.heroTitle}>Color <span className={styles.heroAccent}>earns</span> its place by <span className={styles.heroEm}>doing work.</span></h1>
        <p className={styles.lead}>
          Two warm grays carry the room. One teal does the signaling. Status pulls its hue from
          outside the brand band so the brand and the danger can never be confused. Every value below
          was placed to solve a specific problem.
        </p>
      </header>

      {/* i · THE ROOM */}
      <section className={styles.chapter}>
        <div className={styles.chapterHead}>
          <div className={styles.chapterEyebrow}><span className={styles.ord}>i</span><span className={styles.dot} /><span>The room<Slash />warm-gray Ladder</span></div>
          <h2 className={styles.chapterTitle}>Thirteen steps. One hue. Built to absorb friction.</h2>
          <p className={styles.premise}>The page sits at warmGray.100. Ink sits at warmGray.800. The other eleven steps exist so the surface between them never has to fight to read.</p>
        </div>
        <div className={styles.chapterBody}>
          <div className={styles.rowEyebrow}><span><b>Ladder</b><Slash />warmGray<Slash />single warm hue<Slash />13 steps</span><span>Click any step to load into the contrast checker below</span></div>
          <div className={styles.ramp} role="group" aria-label="Warm gray ladder">
            {WARM.map((s) => (
              <button
                key={s}
                type="button"
                className={`${styles.stop} ${isSel(warmVar(s)) ? styles.stopSel : ''}`}
                style={{ background: `var(${warmVar(s)})` }}
                onClick={() => load(warmVar(s))}
                title={`warmGray.${s} / ${hex[warmVar(s)] || ''}`}
                aria-label={`Load warmGray ${s}`}
              />
            ))}
          </div>
          <div className={styles.rampLabels}>
            {WARM.map((s) => (
              <div key={s} className={styles.rampLabel}>
                <span className={styles.rampStep}>{s}</span>
                <span className={styles.rampHex}>{(hex[warmVar(s)] || '').replace('#', '')}</span>
              </div>
            ))}
          </div>
          <div className={styles.rampKey}>
            <span><b>100</b><Slash />page ground</span>
            <span><b>250</b><Slash />hairline</span>
            <span><b>400</b><Slash />disabled (fails AA by design)</span>
            <span><b>500</b><Slash />secondary text</span>
            <span><b>800</b><Slash />ink</span>
            <span><b>900</b><Slash />deep bar</span>
          </div>
        </div>
        <aside className={styles.gutter}>
          <Annotation title="No pure white">warmGray.25 ({hex[warmVar('25')] || ''}) is the lightest value in the system. Pure white is not a token.</Annotation>
          <Annotation title="No pure black">warmGray.900 ({hex[warmVar('900')] || ''}) is the deepest. The warmth at the extremes is the signature.</Annotation>
          <Annotation title="Hairline">250, not 200. A 4-point lift from page is enough to read as structure, not decoration.</Annotation>
        </aside>
      </section>

      {/* ii · THE SIGNAL */}
      <section className={styles.chapter}>
        <div className={styles.chapterHead}>
          <div className={styles.chapterEyebrow}><span className={styles.ord}>ii</span><span className={styles.dot} /><span>The signal<Slash />teal</span></div>
          <h2 className={styles.chapterTitle}>One teal. Three jobs. Nothing else.</h2>
          <p className={styles.premise}>Teal marks the cursor&rsquo;s intent — hover, focus, the studio mark&rsquo;s accent surface. If you catch it doing decorative work on a page, the page is wrong.</p>
        </div>
        <div className={styles.chapterBody}>
          <div className={styles.shuBlock}>
            <button type="button" className={styles.shuPlate} style={{ background: 'var(--sc-p-color-teal-500)' }} onClick={() => load('--sc-p-color-teal-500')} aria-label="Load teal 500 into checker">
              <span className={styles.plateHead}>teal<Slash />the accent</span>
              <span className={styles.plateGlyph}>500</span>
              <span className={styles.plateFoot}><b>{hex['--sc-p-color-teal-500'] || ''}</b><Slash />sc-color-brand-accent<span>load →</span></span>
            </button>
            <div className={styles.shuRail}>
              {TEAL.map((s) => (
                <button key={s} type="button" className={`${styles.shuStep} ${isSel(tealVar(s)) ? styles.shuStepSel : ''}`} style={{ background: `var(${tealVar(s)})` }} onClick={() => load(tealVar(s))}>
                  <span className={styles.shuName}>teal.{s}</span>
                  <span className={styles.shuHex}>{hex[tealVar(s)] || ''}</span>
                </button>
              ))}
            </div>
          </div>
          <div className={styles.threeJobs}>
            <div className={styles.job}><div className={styles.jobLabel}>Job 01<Slash />hover</div><div className={styles.jobDemo}><a className={styles.demoHover} href="#color" onClick={(e) => e.preventDefault()}>Pass your cursor here.</a></div><div className={styles.jobCaption}>--sc-color-interactive-hover → teal.500</div></div>
            <div className={styles.job}><div className={styles.jobLabel}>Job 02<Slash />focus</div><div className={styles.jobDemo}><input className={styles.demoFocus} defaultValue="Tab to here" aria-label="Focus demo" /></div><div className={styles.jobCaption}>--sc-color-border-focus → teal.500</div></div>
            <div className={styles.job}><div className={styles.jobLabel}>Job 03<Slash />mark accent</div><div className={styles.jobDemo}><span className={styles.demoMark} aria-hidden="true" /></div><div className={styles.jobCaption}>studio mark<Slash />accent surface only</div></div>
          </div>
        </div>
        <aside className={styles.gutter}>
          <Annotation title="Used sparingly">Two intentional moments per page is the ceiling. Three is decoration.</Annotation>
          <Annotation title="Not error">Teal is the brand accent. Error is a separate oxblood — see the row below.</Annotation>
          <Annotation title="The mark itself">The studio mark never resolves to the accent. Only the small accent cell carries it.</Annotation>
        </aside>
      </section>

      {/* iii · OUTSIDE THE BAND */}
      <section className={styles.chapter}>
        <div className={styles.chapterHead}>
          <div className={styles.chapterEyebrow}><span className={styles.ord}>iii</span><span className={styles.dot} /><span>Outside the band<Slash />status</span></div>
          <h2 className={styles.chapterTitle}>Four independent hues. None of them the accent.</h2>
          <p className={styles.premise}>Error is oxblood, not red. When a screen says danger, the brand and the warning cannot be mistaken for each other. Each status carries a light pair and a dark pair, both calibrated AA on the ground beneath them.</p>
        </div>
        <div className={styles.chapterBody}>
          <div className={styles.statusRow}>
            {STATUS.map((s) => (
              <div key={s.key} className={styles.statusTile}>
                <button type="button" className={styles.statusSwatch} style={{ background: `var(${s.light})` }} onClick={() => load(s.light)} aria-label={`Load ${s.label} (light)`} />
                <div className={styles.statusMeta}>
                  <div className={styles.statusName}>{s.label}</div>
                  <div className={styles.statusHue}>{withSlash(s.hue)}</div>
                  <div className={styles.statusHexes}><span><b>L</b> {hex[s.light] || ''}</span><span><b>D</b> {hex[s.dark] || ''}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className={styles.gutter}>
          <Annotation title="Why oxblood">Error must read as serious. The accent reads as brand. Share a hue band and the page lies twice — once about brand, once about danger.</Annotation>
          <Annotation title="Color is not the only carrier">Every status pairs a hue with a copy register and an alert stamp. Pull the color and the message still reads.</Annotation>
        </aside>
      </section>

      {/* iv · THREE-TIER */}
      <section className={styles.chapter}>
        <div className={styles.chapterHead}>
          <div className={styles.chapterEyebrow}><span className={styles.ord}>iv</span><span className={styles.dot} /><span>Resolution<Slash />three tiers</span></div>
          <h2 className={styles.chapterTitle}>A primitive holds the value. A semantic gives it a role.</h2>
          <p className={styles.premise}>Components consume only the middle column. Raw hex at the call site is a bug, not a shortcut. The resolution path below is the only path the system permits.</p>
        </div>
        <div className={styles.chapterBody}>
          <div className={styles.tierTable}>
            <div className={`${styles.tierRow} ${styles.tierHeadRow}`}>
              <div className={styles.tierHead}><span className={styles.tierNum}>01</span><span className={styles.tierHeadLabel}>Primitive</span><span className={styles.tierHeadSub}>raw value<Slash />token-map.json</span></div>
              <span className={styles.tierArrow} aria-hidden="true" />
              <div className={styles.tierHead}><span className={styles.tierNum}>02</span><span className={styles.tierHeadLabel}>Semantic</span><span className={styles.tierHeadSub}>role<Slash />what it means</span></div>
              <span className={styles.tierArrow} aria-hidden="true" />
              <div className={styles.tierHead}><span className={styles.tierNum}>03</span><span className={styles.tierHeadLabel}>Component</span><span className={styles.tierHeadSub}>read-site only</span></div>
            </div>
            {[
              { p: '--sc-p-color-warm-gray-100', s: '--sc-color-surface-page', c: 'body { background: … }' },
              { p: '--sc-p-color-warm-gray-800', s: '--sc-color-text-primary', c: 'h1, p { color: … }' },
              { p: '--sc-p-color-teal-500', s: '--sc-color-interactive-hover', c: 'a:hover, .sc-button:hover' },
              { p: '--sc-p-color-status-error-light', s: '--sc-color-status-error', c: '.sc-alert--error, .sc-badge--error' },
            ].map((row) => (
              <div key={row.s} className={styles.tierRow}>
                <div className={styles.tierCell}><span className={styles.swatchDot} style={{ background: `var(${row.p})` }} /><code className={styles.tok}>{row.p}<span className={styles.tokHex}>{hex[row.p] || ''}</span></code></div>
                <span className={styles.tierArrow} aria-hidden="true">→</span>
                <div className={styles.tierCell}><span className={styles.swatchDot} style={{ background: `var(${row.s})` }} /><code className={styles.tok}>{row.s}</code></div>
                <span className={styles.tierArrow} aria-hidden="true">→</span>
                <div className={styles.tierCell}><code className={`${styles.tok} ${styles.tokDim}`}>{row.c}</code></div>
              </div>
            ))}
          </div>
        </div>
        <aside className={styles.gutter}>
          <Annotation title="Dark mode">Only the middle column remaps. Primitives are values; semantics are roles; the role changes its source by theme, the component never knows.</Annotation>
          <Annotation title="Why the prefix">--sc-p-* is primitive. --sc-* is semantic. The -p- is the only cue you need to know you are reaching past the system.</Annotation>
        </aside>
      </section>

      {/* v · THE CHECKER */}
      <section className={styles.chapter}>
        <div className={styles.chapterHead}>
          <div className={styles.chapterEyebrow}><span className={styles.ord}>v</span><span className={styles.dot} /><span>Contrast<Slash />the measurement</span></div>
          <h2 className={styles.chapterTitle}>Contrast is a measurement, not an instinct.</h2>
          <p className={styles.premise}>Every text-and-surface pairing has a number. The number decides. Body must pass AA; legal passes AAA. Pick any two values above, then read the verdict.</p>
        </div>
        <div className={styles.chapterBody}>
          <div className={styles.checker}>
            <div className={styles.checkerTop}>
              {[{ role: 'fg', token: fg, hexv: result.fgHex, label: 'Foreground', list: QUICK_FG }, { role: 'bg', token: bg, hexv: result.bgHex, label: 'Background', list: QUICK_BG }].map((side) => (
                <div key={side.role} className={styles.checkerSide}>
                  <div className={styles.checkerRole}><span>{side.label}<Slash /><b>{withSlash(ROLE[side.token] || tokenName(side.token))}</b></span><span className={styles.checkerHexVal}>{side.hexv}</span></div>
                  <div className={styles.checkerSwatch} style={{ background: `var(${side.token})` }} />
                  <div className={styles.pickerRow}>
                    <span className={styles.pickerLabel}>Quick</span>
                    {side.list.map((t) => (
                      <button key={t} type="button" className={`${styles.px} ${side.token === t ? styles.pxSel : ''}`} style={{ background: `var(${t})` }} onClick={() => load(t, side.role)} title={`${tokenName(t)} / ${hex[t] || ''}`} aria-label={`Load ${tokenName(t)} as ${side.label}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.checkerPreview} style={{ background: `var(${bg})`, color: `var(${fg})` }}>
              <div className={styles.pAa}>Aa — Shokunin</div>
              <div className={styles.pBody}>Sentences hold 4–28 words by register. The main verb arrives in the first nine. If it doesn&rsquo;t, the sentence is fighting the reader.</div>
              <div className={styles.pChrome}>11px<Slash />mono<Slash />chrome label<Slash />0.08em tracking</div>
            </div>

            <div className={styles.checkerBottom}>
              <div className={styles.ratioCell}>
                <span className={styles.ratioLabel}>WCAG contrast ratio</span>
                <div className={`${styles.ratioValue} ${r < 3 ? styles.ratioBad : ''}`}>{r.toFixed(2)}<span className={styles.colon}>:</span>1</div>
                <div className={styles.ratioFoot}><b>{verdict[0]}</b> {verdict[1]}</div>
              </div>
              <div className={styles.verdicts}>
                {[
                  { h: 'AA / normal', pass: passes.aaN, req: '≥ 4.5' },
                  { h: 'AA / large', pass: passes.aaL, req: '≥ 3.0' },
                  { h: 'AAA / normal', pass: passes.aaaN, req: '≥ 7.0' },
                  { h: 'AAA / large', pass: passes.aaaL, req: '≥ 4.5' },
                ].map((v) => (
                  <div key={v.h} className={styles.verdict}>
                    <span className={styles.vHead}>{withSlash(v.h)}</span>
                    <div className={styles.badgeRow}>
                      <span className={`${styles.scBadge} ${v.pass ? styles.badgePass : styles.badgeFail}`}>{v.pass ? 'Pass' : 'Fail'}</span>
                      <span className={styles.req}>{v.req}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <aside className={styles.gutter}>
          <Annotation title="Pick a swatch above">Click any color in the warm-gray ladder, teal rail, or status row to load it as foreground or background.</Annotation>
          <Annotation title="Last clicked wins">The first click loads foreground. The second loads background. Then it alternates.</Annotation>
          <Annotation title="Quick presets">The eight chips on each side are the most-used pairings. text-primary on surface-page is the page default.</Annotation>
        </aside>
      </section>
    </section>
  );
}
