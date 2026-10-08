/**
 * Liquid-glass refraction for Card (decisions 2026-10-08).
 *
 * Levi's Figma Glass effect, rebuilt for the browser. The frost (blur), the
 * tint and the lit rim are CSS. The refraction is an SVG displacement filter
 * applied to the backdrop: near the card's edge the backdrop is sampled from
 * further in, so whatever sits behind the card bends at the rim the way it
 * bends at the edge of a lens. Dispersion (0 in Levi's setting) is not built.
 *
 * Figma units in, pixels out (each a size.card.glass.<level>.* token):
 *   depth      0-100  bevel band = depth/100 of the card's half short side
 *   refraction 0-100  inward shift at the very edge = refraction/100 x band/2
 *   splay      0-100  falloff (1 - t)^p across the band, p = 1 + 3 x (1 - splay/100)
 *
 * The map depends on the card's size and corner, so it is rebuilt on resize
 * and when the lab changes a token ('sc-tokens-change' on window). Only
 * Chromium applies an SVG filter as a backdrop-filter; everywhere else the
 * card keeps the frost, tint and rim (CSS fallback).
 */

import { useEffect, useId, useState } from 'react';

export function refractionSupported() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  const chromium = navigator.userAgentData?.brands?.some((b) => b.brand === 'Chromium');
  if (!chromium) return false;
  const mq = (q) => window.matchMedia?.(q).matches;
  return !mq('(prefers-reduced-transparency: reduce)') && !mq('(forced-colors: active)');
}

/* Pure: a displacement map (RGBA bytes) for a w x h rounded rect. R and G
 * carry the x and y shift around a 127.5 neutral; outside the band is neutral. */
export function displacementBytes(w, h, radius, { depth, refraction, splay }) {
  const band = (Math.max(0, depth) / 100) * (Math.min(w, h) / 2);
  const shift = (Math.max(0, refraction) / 100) * (band / 2);
  const p = 1 + 3 * (1 - Math.min(100, Math.max(0, splay)) / 100);
  const r = Math.min(radius, w / 2, h / 2);
  const bytes = new Uint8ClampedArray(w * h * 4);
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const px = x + 0.5 - w / 2;
      const py = y + 0.5 - h / 2;
      const qx = Math.abs(px) - (w / 2 - r);
      const qy = Math.abs(py) - (h / 2 - r);
      const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r;
      const d = -outside;
      let nx = 0; let ny = 0; let m = 0;
      if (d > 0 && band > 0 && d < band) {
        m = (1 - d / band) ** p;
        if (qx > 0 && qy > 0) {
          const len = Math.hypot(qx, qy) || 1;
          nx = Math.sign(px) * (qx / len); ny = Math.sign(py) * (qy / len);
        } else if (qx > qy) nx = Math.sign(px);
        else ny = Math.sign(py);
      }
      const i = (y * w + x) * 4;
      bytes[i] = 127.5 * (1 - nx * m);
      bytes[i + 1] = 127.5 * (1 - ny * m);
      bytes[i + 2] = 128;
      bytes[i + 3] = 255;
    }
  }
  return { bytes, scale: 2 * shift };
}

function readParams(el) {
  const cs = getComputedStyle(el);
  const n = (name) => parseFloat(cs.getPropertyValue(name)) || 0;
  return {
    depth: n('--glass-depth'),
    refraction: n('--glass-refraction'),
    splay: n('--glass-splay'),
    radius: parseFloat(cs.borderTopLeftRadius) || 0,
  };
}

/* → { id, filter } where filter is null until a map exists (or never, off Chromium). */
export function useGlassRefraction(ref, enabled, level) {
  const id = `sc-glass-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const [filter, setFilter] = useState(null);
  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el || !refractionSupported()) { setFilter(null); return undefined; }
    let key = '';
    const build = () => {
      const w = Math.round(el.offsetWidth);
      const h = Math.round(el.offsetHeight);
      const { radius, ...params } = readParams(el);
      const next = JSON.stringify([w, h, radius, params]);
      if (next === key || w < 2 || h < 2) return;
      key = next;
      const { bytes, scale } = displacementBytes(w, h, radius, params);
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').putImageData(new ImageData(bytes, w, h), 0, 0);
      setFilter({ w, h, scale, href: canvas.toDataURL() });
    };
    build();
    const ro = new ResizeObserver(build);
    ro.observe(el);
    window.addEventListener('sc-tokens-change', build);
    return () => { ro.disconnect(); window.removeEventListener('sc-tokens-change', build); };
  }, [ref, enabled, level]);
  return { id, filter };
}
