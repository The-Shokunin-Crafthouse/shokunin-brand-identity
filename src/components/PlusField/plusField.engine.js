/**
 * plusField.engine.js — the PlusField drawers. Pure canvas code: no React, no DOM reads.
 *
 * Ported from the approved turn-2 set (ids 2a–2t) of the "Brand Elements" prototype
 * (handoff/plus-field.js). Turn-1 exploration drawers (coil, enso, working, …) are out of
 * scope and not ported. Decision: decisions/decisions.md 2026-10-04 · plus-field.
 *
 * Drawer signature: ART[name](c, w, h, X)
 *   c  CanvasRenderingContext2D, already scaled so 1 unit = 1 CSS px
 *   w  CSS width, h CSS height
 *   X  { C, fg, S, rng, t, opts, hover, mx, my, dot, teal }
 *      C     resolved colours { inverse, onInverse, raised, page, sunk, text }. No accent here.
 *      fg    the mark colour for the chosen surface
 *      S     spacing multiplier, 1 / density
 *      rng   seeded PRNG, so a seed always draws the same art
 *      t     seconds; only the arts in ANIMATED_ARTS read it
 *      opts  the art's typed options (rows, fade, text, progress, accent, steps, current, textScale)
 *      dot   the mark shape: plus (default), square or round
 *      teal(role)  the only way a drawer reaches the brand accent. See TEAL_ROLES.
 *
 * Geometry constants inside a drawer (the 7-unit pitch, ribbon widths, path points) are the
 * art itself, not layout spacing, so they stay literal here as they were in the prototype.
 */

const TAU = Math.PI * 2;

/** Every art the component accepts. The turn-2 drawers plus `type` (halftone text). */
export const ARTS = [
  'udiv', 'ucardhead', 'ucard', 'ucta', 'uempty', 'uskel', 'uprog', 'uloader', 'uline', 'umedia',
  'uhero', 'ufooter', 'uquote', 'utime', 'ubullet', 'usep', 'uthumb', 'unews', 'usplash', 'type',
];

/** Arts that read `t`. Everything else draws once per size, theme or option change. */
export const ANIMATED_ARTS = new Set(['uskel', 'uloader', 'usplash']);

/** Arts that redraw on pointer movement over their host (no animation loop). */
export const HOVER_ARTS = new Set(['ucard']);

/**
 * The frame an animated art shows when motion is off (animate=false or
 * prefers-reduced-motion). Chosen so the still reads as the finished element:
 * the loader fully drawn, the skeleton at rest, the splash mid-wave.
 */
export const STILL_T = { uskel: 0, uloader: 1.96, usplash: 0 };

/**
 * The teal rule, as code. Teal (brand-accent) marks progress, the active item, and the current
 * step. A drawer asks for it by naming one of these roles; any other role throws, so a new
 * drawer cannot paint teal as decoration without editing this list in review.
 */
export const TEAL_ROLES = new Set(['progress', 'active', 'current']);

/** Surfaces a field can paint itself on, and the mark colour each one takes. */
export const SURFACES = ['inverse', 'raised', 'page', 'sunk', 'none'];

/** Seeded PRNG (mulberry32). */
export function mk(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

/** FNV-1a string hash, the seed for mk(). */
export function hash(s) {
  let h = 2166136261;
  for (const ch of String(s)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return h;
}

export const sq = (c, x, y, r) => c.fillRect(x - r, y - r, r * 2, r * 2);
export const circ = (c, x, y, r) => { c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); };
export const plus = (c, x, y, r) => {
  r *= 1.25;
  const t = Math.max(.7, r * .38);
  c.fillRect(x - r, y - t / 2, r * 2, t);
  c.fillRect(x - t / 2, y - r, t, r * 2);
};
const SHAPES = { plus, square: sq, round: circ };

/**
 * A straight band of marks from (x1,y1) to (x2,y2), `w` wide. Loose by default (offset rows,
 * jitter, soft edges); `crisp` + `grid` give the structural version used by dividers and tabs.
 */
export function ribbon(c, X, o) {
  const rng = X.rng, s = (o.s || 5) * X.S, dx = o.x2 - o.x1, dy = o.y2 - o.y1, L = Math.hypot(dx, dy);
  if (!L) return;
  const ux = dx / L, uy = dy / L, nx = -uy, ny = ux;
  const w = o.w, ext = o.ext ?? w * .35, r = o.r ?? .9, jit = o.jit ?? .7;
  let row = 0;
  for (let u = -ext; u <= L + ext; u += s, row++) {
    const off = o.grid ? 0 : (row % 2) * s / 2;
    let endF = 1;
    if (o.taper) {
      const p = (u + ext) / (L + 2 * ext);
      endF = Math.min(1, (o.fadeEnd ? 1 - p : Math.min(p, 1 - p)) / o.taper);
    }
    for (let v = -w / 2 + off; v <= w / 2 + .01; v += s) {
      const e = o.crisp ? endF : Math.min(1, (w / 2 - Math.abs(v)) / (s * 1.6) + .3) * endF;
      if (rng() > e) continue;
      const x = o.x1 + ux * u + nx * v + (rng() - .5) * jit, y = o.y1 + uy * u + ny * v + (rng() - .5) * jit;
      c.globalAlpha = (o.a ?? .9) * (o.af ? o.af(u + (o.u0 || 0), v, x, y) : 1);
      X.dot(c, x, y, r);
    }
  }
  c.globalAlpha = 1;
}

/** A ribbon that follows a polyline. `u0` carries the running length so `af` sees one path. */
export function zig(c, X, P, w, o = {}) {
  let u0 = 0;
  for (let i = 0; i < P.length - 1; i++) {
    ribbon(c, X, { x1: P[i][0], y1: P[i][1], x2: P[i + 1][0], y2: P[i + 1][1], w, u0, ...o });
    u0 += Math.hypot(P[i + 1][0] - P[i][0], P[i + 1][1] - P[i][1]);
  }
}

const clamp01 = (v) => Math.max(0, Math.min(1, Number.isFinite(+v) ? +v : 0));

export const ART = {
  /** 2a, 2b — section divider and heading rule. rows 1 | 3 | 5; fade both | end | none. */
  udiv(c, w, h, X) {
    const rows = Math.max(1, Math.round(+X.opts.rows || 3)), s = 7, f = X.opts.fade || 'both';
    ribbon(c, X, {
      x1: 2, y1: h / 2, x2: w - 2, y2: h / 2, w: (rows - 1) * s * X.S, s, r: 1.6, ext: 0, jit: 0,
      crisp: true, grid: true, a: 1, taper: f === 'none' ? 0 : (f === 'end' ? .7 : .22), fadeEnd: f === 'end',
    });
  },
  /** 2c — card header: two crossing loose ribbons. */
  ucardhead(c, w, h, X) {
    ribbon(c, X, { x1: -20, y1: h * .8, x2: w + 20, y2: h * .15, w: 44, s: 7, r: 1.6, ext: 0 });
    ribbon(c, X, { x1: w * .4, y1: -20, x2: w * .78, y2: h + 20, w: 28, s: 7, r: 1.6, ext: 0, a: .4 });
  },
  /** 2d — card hover: a faint grid that brightens under the pointer. */
  ucard(c, w, h, X) {
    const s = 12 * X.S;
    for (let y = s / 2; y < h; y += s) for (let x = s / 2; x < w; x += s) {
      let a = .14;
      if (X.hover) a += .86 * Math.exp(-((x - X.mx) ** 2 + (y - X.my) ** 2) / (2 * 50 * 50));
      c.globalAlpha = a; X.dot(c, x, y, 1.6);
    }
    c.globalAlpha = 1;
  },
  /** 2e — CTA band: two chevrons framing centred copy. */
  ucta(c, w, h, X) {
    zig(c, X, [[-.05 * w, .1 * h], [.22 * w, .5 * h], [.02 * w, 1.1 * h]], 46, { s: 7, r: 1.6, ext: 0 });
    zig(c, X, [[1.05 * w, -.1 * h], [.78 * w, .5 * h], [.98 * w, 1.1 * h]], 46, { s: 7, r: 1.6, ext: 0 });
  },
  /** 2f — empty state glyph. */
  uempty(c, w, h, X) {
    zig(c, X, [[.32, .18], [.64, .36], [.36, .62], [.68, .84]].map(([x, y]) => [x * w, y * h]), 24, { s: 6, r: 1.3, a: .55, ext: 0 });
  },
  /** 2g — skeleton loader: card shapes filled with marks, a highlight sweeping across. */
  uskel(c, w, h, X) {
    const sh = [['c', 40, 40, 20], ['r', 76, 28, 180, 12], ['r', 76, 48, 110, 10], ['r', 20, 88, w - 40, 10],
      ['r', 20, 108, w - 40, 10], ['r', 20, 128, w * .55, 10], ['r', 20, 158, w - 40, 46]];
    const s = 6 * X.S, sweep = ((X.t * 240) % (w + 500)) - 250;
    for (let y = s / 2; y < h; y += s) for (let x = s / 2; x < w; x += s) {
      const inS = sh.some((q) => (q[0] === 'c'
        ? (x - q[1]) ** 2 + (y - q[2]) ** 2 < q[3] ** 2
        : x >= q[1] && x <= q[1] + q[3] && y >= q[2] && y <= q[2] + q[4]));
      if (!inS) continue;
      const k = Math.exp(-(((x + y * .5) - sweep) ** 2) / (2 * 45 * 45));
      c.globalAlpha = .16 + .6 * k; X.dot(c, x, y, 1.3);
    }
    c.globalAlpha = 1;
  },
  /** 2h — progress. One bar, `rows` high (1 thin, 3 band), filled to `progress` in teal. */
  uprog(c, w, h, X) {
    const s = 7 * X.S, rows = Math.max(1, Math.round(+X.opts.rows || 1)), p = clamp01(X.opts.progress);
    const y0 = h / 2 - (rows - 1) * s / 2, fill = X.teal('progress');
    for (let r = 0; r < rows; r++) for (let x = 4; x < w; x += s) {
      const on = x / w < p;
      c.fillStyle = on ? fill : X.fg; c.globalAlpha = on ? 1 : .2;
      X.dot(c, x, y0 + r * s, 1.6);
    }
    c.globalAlpha = 1; c.fillStyle = X.fg;
  },
  /** 2i — page loader: a zigzag that draws itself, then fades and repeats. */
  uloader(c, w, h, X) {
    const P = [[.26, .2], [.74, .34], [.26, .56], [.74, .8]].map(([x, y]) => [x * w, y * h]);
    let T = 0;
    for (let i = 0; i < P.length - 1; i++) T += Math.hypot(P[i + 1][0] - P[i][0], P[i + 1][1] - P[i][1]);
    const ph = (X.t % 2.8) / 2.8, f = Math.min(1, ph / .7) * (T + 30);
    zig(c, X, P, 26, { s: 6, r: 1.3, ext: 0, a: 1, af: (u) => (u < f ? (f - u < 18 && ph < .7 ? 1 : .85) : .08) });
  },
  /** 2j — active tab underline. Always teal: it only ever marks the active item. */
  uline(c, w, h, X) {
    c.fillStyle = X.teal('active');
    ribbon(c, X, { x1: 3, y1: h / 2, x2: w - 3, y2: h / 2, w: 5 * X.S, s: 5, r: 1.3, ext: 0, jit: 0, crisp: true, grid: true, a: 1 });
    c.fillStyle = X.fg;
  },
  /** 2k — image placeholder: a faint grid crossed by one ribbon. */
  umedia(c, w, h, X) {
    const s = 10 * X.S;
    c.globalAlpha = .16;
    for (let y = s / 2; y < h; y += s) for (let x = s / 2; x < w; x += s) X.dot(c, x, y, 1.3);
    c.globalAlpha = 1;
    ribbon(c, X, { x1: -20, y1: h * .9, x2: w + 20, y2: h * .1, w: 40, s: 7, r: 1.6, ext: 0, a: .75 });
  },
  /** 2l — hero background, bleeding off the right edge. */
  uhero(c, w, h, X) {
    zig(c, X, [[.6, -.08], [1.06, .3], [.56, .58], [1.06, .96]].map(([x, y]) => [x * w, y * h]), 72, { s: 7, r: 1.6, ext: 0 });
  },
  /** 2m — footer edge: the page ground dissolves into the inverse footer. Paints its own two grounds. */
  ufooter(c, w, h, X) {
    const E = 90, s = 7 * X.S, rng = X.rng;
    c.fillStyle = X.C.page; c.fillRect(0, 0, w, E);
    c.fillStyle = X.C.inverse; c.fillRect(0, E, w, h - E);
    for (let y = s / 2; y < E; y += s) for (let x = s / 2; x < w; x += s) if (rng() < Math.pow(y / E, 1.6)) X.dot(c, x, y, 1.6);
  },
  /** 2n — pull-quote bracket: two crisp corners that fade along their arms. */
  uquote(c, w, h, X) {
    const o = { w: 14 * X.S, s: 7, r: 1.6, ext: 0, jit: 0, crisp: true, grid: true, a: 1, taper: .55, fadeEnd: true }, m = 24, L = 130;
    ribbon(c, X, { ...o, x1: m, y1: m, x2: m + L, y2: m });
    ribbon(c, X, { ...o, x1: m, y1: m, x2: m, y2: m + L });
    ribbon(c, X, { ...o, x1: w - m, y1: h - m, x2: w - m - L, y2: h - m });
    ribbon(c, X, { ...o, x1: w - m, y1: h - m, x2: w - m, y2: h - m - L });
  },
  /**
   * 2o — timeline connector. `steps` nodes, one per equal row of the canvas height, centred in
   * the row so DOM labels in a matching grid line up. Done steps solid, current teal, later faint.
   */
  utime(c, w, h, X) {
    const n = Math.max(1, Math.round(+X.opts.steps || 4)), cur = Math.round(+X.opts.current || 0);
    const pitch = h / n, x = w / 2, s = 7 * X.S, nodes = Array.from({ length: n }, (_, i) => pitch * (i + .5));
    for (let y = nodes[0]; y <= nodes[n - 1]; y += s) {
      if (nodes.some((nd) => Math.abs(y - nd) < 15)) continue;
      c.globalAlpha = y < nodes[Math.min(Math.max(cur, 0), n - 1)] ? .75 : .18;
      X.dot(c, x, y, 1.4);
    }
    nodes.forEach((nd, i) => {
      c.fillStyle = i === cur ? X.teal('current') : X.fg;
      c.globalAlpha = i <= cur ? 1 : .25;
      for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) X.dot(c, x + a * 6, nd + b * 6, 1.5);
    });
    c.globalAlpha = 1; c.fillStyle = X.fg;
  },
  /** 2p — list bullet, a 3×3 block. `accent` marks the current item. */
  ubullet(c, w, h, X) {
    const s = w / 3;
    if (X.opts.accent) c.fillStyle = X.teal('current');
    for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) X.dot(c, s / 2 + a * s, s / 2 + b * s, s * .26);
    c.fillStyle = X.fg;
  },
  /** 2p — breadcrumb separator: three marks on a rising diagonal. */
  usep(c, w, h, X) {
    c.globalAlpha = .6;
    for (let i = 0; i < 3; i++) X.dot(c, w * (.2 + i * .3), h * (.8 - i * .3), w * .1);
    c.globalAlpha = 1;
  },
  /** 2r — generated thumbnail. Every choice comes from rng, so the seed decides the art. */
  uthumb(c, w, h, X) {
    const rng = X.rng, n = 2 + Math.floor(rng() * 2), P = [];
    for (let i = 0; i <= n; i++) P.push([(i % 2 ? .72 + .22 * rng() : .06 + .22 * rng()) * w, (.12 + i * (.76 / n) + (rng() - .5) * .08) * h]);
    if (rng() > .5) P.forEach((p) => { const t = p[0]; p[0] = p[1]; p[1] = t; });
    zig(c, X, P, w * (.14 + .12 * rng()), { s: 6, r: 1.3, ext: 0 });
  },
  /** 2s — signup / form card corner. */
  unews(c, w, h, X) {
    ribbon(c, X, { x1: w * .5, y1: -20, x2: w + 30, y2: h * .42, w: 42, s: 7, r: 1.6, ext: 0 });
    ribbon(c, X, { x1: w * .76, y1: -20, x2: w + 30, y2: h * .2, w: 22, s: 7, r: 1.6, ext: 0, a: .45 });
  },
  /** 2t — app splash: a slow wave travelling along a zigzag. */
  usplash(c, w, h, X) {
    const t = X.t;
    zig(c, X, [[.12, .14], [.88, .3], [.14, .5], [.88, .68]].map(([x, y]) => [x * w, y * h]), 50,
      { s: 7, r: 1.6, af: (u) => .28 + .72 * Math.pow(.5 + .5 * Math.sin(u * .016 - t * 2), 2) });
  },
  /**
   * 2q — halftone text (the 404). The text is rasterised offscreen, then sampled on a tilted
   * grid. Pitch and mark size follow the glyph size, so large text reads as large marks.
   */
  type(c, w, h, X) {
    if (!w || !h || typeof document === 'undefined') return;
    const o = document.createElement('canvas'); o.width = Math.ceil(w); o.height = Math.ceil(h);
    const g = o.getContext('2d'), TX = X.opts.text || 'Crafthouse';
    g.textAlign = 'center'; g.textBaseline = 'middle';
    let fs = h * (+X.opts.textScale || .62);
    g.font = `500 ${fs}px ${X.font}`;
    const tw = g.measureText(TX).width;
    if (tw > w * .88) { fs *= w * .88 / tw; g.font = `500 ${fs}px ${X.font}`; }
    g.fillText(TX, w / 2, h / 2);
    const s = Math.min(9, Math.max(4.2, fs / 34)) * X.S, DR = s * .24, d = g.getImageData(0, 0, o.width, o.height).data;
    const ang = -.14, ca = Math.cos(ang), sa = Math.sin(ang), R = Math.hypot(w, h) / 2 + 10;
    let row = 0;
    for (let v = -R; v < R; v += s, row++) for (let u = -R + (row % 2) * s / 2; u < R; u += s) {
      const x = w / 2 + u * ca - v * sa, y = h / 2 + u * sa + v * ca;
      if (x < 0 || y < 0 || x >= o.width || y >= o.height) continue;
      if (d[((y | 0) * o.width + (x | 0)) * 4 + 3] > 100) X.dot(c, x, y, DR);
    }
  },
};

/**
 * Paint one frame.
 *
 * @param {CanvasRenderingContext2D} c
 * @param {object} f
 * @param {string} f.art        one of ARTS
 * @param {number} f.w          CSS width
 * @param {number} f.h          CSS height
 * @param {number} f.dpr        backing-store scale, already capped by the caller
 * @param {object} f.colors     { inverse, onInverse, raised, page, sunk, text, accent }, resolved token values
 * @param {string} f.surface    one of SURFACES
 * @param {string} f.shape      plus | square | round
 * @param {number} f.density    0.6–1.6
 * @param {number} f.seed       numeric seed (see hash())
 * @param {number} f.t          seconds
 * @param {object} f.opts       art options
 * @param {string} f.font       CSS font-family list for `type`
 * @param {object} [f.pointer]  { hover, x, y } in CSS px, for HOVER_ARTS
 */
export function drawField(c, f) {
  const { art, w, h, dpr, colors, surface = 'inverse', shape = 'plus', density = 1, seed = 0, t = 0, opts = {}, font, pointer } = f;
  const fn = ART[art];
  if (!fn || !w || !h) return;
  const { accent, ...C } = colors;
  const fg = surface === 'inverse' ? C.onInverse : C.text;
  const grounds = { inverse: C.inverse, raised: C.raised, page: C.page, sunk: C.sunk };
  c.setTransform(dpr, 0, 0, dpr, 0, 0);
  c.globalAlpha = 1;
  c.clearRect(0, 0, w, h);
  if (surface !== 'none') { c.fillStyle = grounds[surface] ?? C.inverse; c.fillRect(0, 0, w, h); }
  c.fillStyle = fg;
  const d = Math.min(1.6, Math.max(.6, +density || 1));
  const teal = (role) => {
    if (!TEAL_ROLES.has(role)) throw new Error(`PlusField: teal is reserved for ${[...TEAL_ROLES].join(', ')}; "${role}" is not one of them.`);
    return accent;
  };
  fn(c, w, h, {
    C, fg, S: 1 / d, rng: mk(seed), t, opts, font, teal,
    hover: !!pointer?.hover, mx: pointer?.x ?? 0, my: pointer?.y ?? 0,
    dot: SHAPES[shape] ?? plus,
  });
  c.globalAlpha = 1;
}
