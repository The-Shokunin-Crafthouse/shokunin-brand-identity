/**
 * PlusUnderline — brand element 2j · the active-tab indicator. Two crisp rows of teal marks.
 *
 * Put one under every tab label and set `active` on the current one. An inactive underline
 * keeps the same height and draws nothing, so labels stay level when the selection moves.
 * Works under NavBar-style links and SegmentedControl-style tabs:
 *
 *   <a aria-current="page">Work<PlusUnderline active /></a>
 *
 * The indicator is decorative. Announce the state on the tab itself (aria-current or
 * aria-selected). Teal here follows the rule: it marks the active item.
 * Decision: decisions/decisions.md 2026-10-04 · plus-field.
 *
 * Elastic motion (src/motion/elastic.js, tokens --sc-motion-<motion>-*, default
 * `plus-underline`; NavBar passes `nav-bar`): when the active underline moves to another
 * tab in the same nav, tablist, radiogroup or list, it travels from the old tab, longer
 * while it is fast; pressing another tab leans it that way. The canvas redraws at every
 * width, so a stretched underline gains marks instead of distorting them. Shipped, those
 * tokens are 0 and the underline jumps, as before.
 */

import { useEffect, useLayoutEffect, useRef } from 'react';
import { PlusField } from '../PlusField/PlusField.jsx';
import {
  readElastic, isActive, prefersReducedMotion, travelFrames, leanToward, pillFrame, run, cssRect, poseOf,
} from '../../motion/elastic.js';
import styles from './PlusUnderline.module.css';

// The active underline per group, so the next one knows where to travel from.
const current = new WeakMap();
const groupOf = (el) =>
  el.closest('nav, [role="tablist"], [role="radiogroup"], ul, ol') || el.parentElement?.parentElement || null;

export function PlusUnderline({ active = true, shape, density, motion = 'plus-underline', className = '', ...rest }) {
  const ref = useRef(null);

  // Becoming active: travel from the previous active underline's pose (its lean included).
  useLayoutEffect(() => {
    const el = ref.current;
    const group = el && active ? groupOf(el) : null;
    if (!group) return;
    const prev = current.get(group);
    current.set(group, el);
    if (!prev || prev === el || !prev.isConnected || prefersReducedMotion()) return;
    const m = readElastic(el, motion);
    if (!isActive(m)) return;
    const own = cssRect(el);
    const from = poseOf(prev, own);
    prev.getAnimations().forEach((a) => a.cancel());
    run(el, travelFrames(m, from, { l: 0, r: own.width }, own.height), m.travelDur, 'linear');
  }, [active, motion]);

  // No longer active: drop any held lean, after the new underline has read it.
  useEffect(() => {
    if (!active) ref.current?.getAnimations().forEach((a) => a.cancel());
  }, [active]);

  // Press feedback: while active, pressing another item in the group leans this one toward it.
  useEffect(() => {
    const el = ref.current;
    const group = el && active ? groupOf(el) : null;
    if (!group) return undefined;
    const onDown = (e) => {
      const item = e.target.closest?.('a, button, [role="tab"], [role="radio"]');
      if (!item || !group.contains(item) || item.contains(el) || prefersReducedMotion()) return;
      const m = readElastic(el, motion);
      if (!isActive(m) || m.lean <= 0) return;
      const own = cssRect(el);
      const it = cssRect(item);
      const rest = { l: 0, r: own.width };
      const pose = leanToward(m, rest, { l: it.left - own.left, r: it.right - own.left });
      run(el, [pillFrame({ ...rest, h: own.height }, own.height), pillFrame({ ...pose, h: own.height }, own.height)],
        m.leanDur, m.leanEasing, { hold: true });
      let done = false;
      const back = () => setTimeout(() => {
        if (done) return;
        done = true;
        if (current.get(group) !== el || !el.isConnected) return;
        run(el, travelFrames(readElastic(el, motion), pose, rest, own.height), m.travelDur, 'linear');
      }, 0);
      window.addEventListener('pointerup', back, { once: true });
      item.addEventListener('pointerleave', back, { once: true });
    };
    group.addEventListener('pointerdown', onDown);
    return () => group.removeEventListener('pointerdown', onDown);
  }, [active, motion]);

  return (
    <span ref={ref} className={`${styles.underline} ${className}`} aria-hidden="true" {...rest}>
      {active && <PlusField as="span" art="uline" surface="none" shape={shape} density={density} />}
    </span>
  );
}
