/**
 * sc-tune registry — one entry per tunable subject.
 *
 * A component entry: the engine reads every token its CSS consumes (from
 * `css`, imported ?raw) and builds a typed control for each. The entry
 * only says what the engine cannot infer: the props worth exposing, how to
 * render from them, where the sound fires, and what Play does.
 *
 *   render(p, set, sound, ctx)  ctx = { replay, slow }
 *   play(p, set)                one demonstration of the interaction
 *
 * Always render a component with `sound={false}`: the lab plays the tuned
 * sound itself. A motion entry (kind: 'motion') has no CSS; its props are
 * the motion spec and it animates on every `ctx.replay` change.
 *
 * Prop types: boolean, enum (options), number, text, range (min, max,
 * step, unit), easing (cubic-bezier or a spring; its `durationProp` takes
 * the spring's settle time).
 */

import { useEffect, useRef } from 'react';
import { Switch } from '../../src/components/Switch/Switch.jsx';
import { Stepper } from '../../src/components/Stepper/Stepper.jsx';
import { SegmentedControl } from '../../src/components/SegmentedControl/SegmentedControl.jsx';
import { Button } from '../../src/components/Button/Button.jsx';
import { Tooltip } from '../../src/components/Tooltip/Tooltip.jsx';
import { NavBar } from '../../src/components/NavBar/NavBar.jsx';
import { PlusUnderline } from '../../src/components/PlusUnderline/PlusUnderline.jsx';
import { Slider } from '../../src/components/Slider/Slider.jsx';
import { Input } from '../../src/components/Input/Input.jsx';
import { Card } from '../../src/components/Card/Card.jsx';
import { StatusPill } from '../../src/components/StatusPill/StatusPill.jsx';
import { Avatar } from '../../src/components/Avatar/Avatar.jsx';
import { Toast } from '../../src/components/Toast/Toast.jsx';
import { MagnifyingGlass, EnvelopeSimple, MapPin, Eye, Copy, CalendarBlank, Clock, CaretDown, Check, Pause, Archive, Warning } from '@phosphor-icons/react';
import switchCss from '../../src/components/Switch/Switch.module.css?raw';
import stepperCss from '../../src/components/Stepper/Stepper.module.css?raw';
import iconCss from '../../src/components/Icon/Icon.module.css?raw';
import segmentedCss from '../../src/components/SegmentedControl/SegmentedControl.module.css?raw';
import buttonCss from '../../src/components/Button/Button.module.css?raw';
import tooltipCss from '../../src/components/Tooltip/Tooltip.module.css?raw';
import navBarCss from '../../src/components/NavBar/NavBar.module.css?raw';
import underlineCss from '../../src/components/PlusUnderline/PlusUnderline.module.css?raw';
import sliderCss from '../../src/components/Slider/Slider.module.css?raw';
import inputCss from '../../src/components/Input/Input.module.css?raw';
import cardCss from '../../src/components/Card/Card.module.css?raw';
import statusPillCss from '../../src/components/StatusPill/StatusPill.module.css?raw';
import avatarCss from '../../src/components/Avatar/Avatar.module.css?raw';
import toastCss from '../../src/components/Toast/Toast.module.css?raw';
import avatarMark from '../../assets/logo/mark-icon-dark.png';
import s from './Tune.module.css';

const SEGMENTS = ['day', 'week', 'month'];
const PAGES = ['work', 'studio', 'journal'];

/*
 * The elastic motion seed, from kabarza's elastic toggles reel
 * (instagram.com/reel/DeK0AFcIRhf): the playground's Balanced preset
 * (stretch 0.45, squash 0, bounce 0, duration 520ms) and the article's press
 * layer (amount 0.83, 150ms). A component's elastic tokens ship at 0 (or
 * equal to motion.reveal), so these reach SCDS only through a recorded
 * concept. Spring: duration 520ms, bounce 0 → stiffness (2π/0.52)², damping
 * 4π/0.52, mass 1.
 */
const reel = (prefix, { press = true } = {}) => {
  const t = `--sc-motion-${prefix}`;
  return {
    jsTokens: [`${t}-stretch`, `${t}-squash`, ...(press ? [`${t}-press-lean`, `${t}-press-lean-duration`, '--sc-motion-press-easing'] : [])],
    seed: {
      overrides: {
        [`${t}-stretch`]: '0.45',
        [`${t}-squash`]: '0',
        ...(press ? { [`${t}-press-lean`]: '0.83', [`${t}-press-lean-duration`]: '150ms' } : {}),
      },
      springs: { [`${t}-travel-easing`]: { stiffness: 146, damping: 24.17, mass: 1 } },
    },
  };
};

/*
 * Material starts, lit from the top left (Gate 1 pick 1), per mode: the
 * Button key (record Button 2026-10-07-1418: surface.raised fill,
 * shadow.control.key / keyPressed, color.control.keyShade) and the top-left
 * recess (record SegmentedControl 2026-10-07-1645, its track). A component's
 * material tokens ship flat, so these reach SCDS only through a record.
 */
const MATERIAL = {
  light: {
    keyFill: '#F1EFEB',
    key: '2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)',
    keyPressed: '2px 2px 6px 0 rgb(100 91 79 / 0.37), -1px -1px 1px 1px rgb(253 250 246 / 0.90), inset 1px 1px 8px 0 rgb(255 255 255 / 0.30)',
    keyShade: 'rgb(26 24 21 / 0.05)',
    recess: 'inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)',
  },
  dark: {
    keyFill: '#343A41',
    key: '3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)',
    keyPressed: '3px 3px 7px 0 rgb(0 0 0 / 0.38), -1px -1px 1px 1px rgb(219 235 255 / 0.14), inset 1px 1px 8px 0 rgb(255 255 255 / 0.06)',
    keyShade: 'rgb(26 24 21 / 0.25)',
    recess: 'inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)',
  },
};
/* One seed per mode from MATERIAL: map(m) → { token: value }. */
const perMode = (map) => ({ light: map(MATERIAL.light), dark: map(MATERIAL.dark) });

/*
 * The Switch knob's values (record Switch 2026-10-07-1539 B: rim white →
 * warmGray.200 over a warmGray.50 → 100 face; dark rim dark.textPrimary →
 * warmGray.350 over warmGray.200 → dark.textTertiary), copied as values so
 * the Slider thumb never reads a Switch token. The Switch runs its
 * gradients top to bottom; the thumb runs them at 135deg, the system light.
 */
const KNOB = {
  light: { rimTop: '#FFFFFF', rimBottom: '#D8D1CC', faceTop: '#F1EFEB', faceBottom: '#E3DFD8' },
  dark: { rimTop: '#EAE8E3', rimBottom: '#9A9186', faceTop: '#D8D1CC', faceBottom: '#B3B1AD' },
};

/* Input slot options: Phosphor glyphs, rendered bold by the Input. */
const INPUT_ICONS = { none: undefined, search: MagnifyingGlass, mail: EnvelopeSimple, location: MapPin };
const INPUT_TRAILING = { none: undefined, eye: Eye, copy: Copy, calendar: CalendarBlank, clock: Clock, caret: CaretDown };

/* Card styles (Levi, 2026-10-08) and what sits behind them: glass needs a backdrop to bend. */
const CARD_STYLES = {
  flat: { variant: 'flat' },
  'clear · light': { variant: 'glass', level: 'clear', tone: 'light' },
  'frosted · light': { variant: 'glass', level: 'frosted', tone: 'light' },
  'thick · light': { variant: 'glass', level: 'thick', tone: 'light' },
  'clear · dark': { variant: 'glass', level: 'clear', tone: 'dark' },
  'frosted · dark': { variant: 'glass', level: 'frosted', tone: 'dark' },
  'thick · dark': { variant: 'glass', level: 'thick', tone: 'dark' },
};
const BACKDROP = { position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: 'var(--sc-radius-card)' };
const CARD_BACKDROPS = {
  // Follows the theme: page ground, primary-ink type, sunk and floating blocks.
  'page (follows theme)': (
    <div aria-hidden="true" style={{ ...BACKDROP, background: 'var(--sc-color-surface-page)' }}>
      <div style={{ position: 'absolute', inset: '0 50% 0 0', background: 'var(--sc-color-surface-sunk)' }} />
      <div style={{ position: 'absolute', inset: '30% 0 30% 25%', background: 'var(--sc-color-surface-floating)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexWrap: 'wrap', alignContent: 'center', font: 'var(--sc-font-text-display-xs)', color: 'var(--sc-color-text-primary)', lineHeight: 1, wordBreak: 'break-all' }}>SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE</div>
    </div>
  ),
  'type and colour': (
    <div aria-hidden="true" style={BACKDROP}>
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(135deg, var(--sc-color-atmosphere-celadon) 0 24px, var(--sc-color-atmosphere-river) 24px 48px, var(--sc-color-atmosphere-lapis) 48px 72px)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexWrap: 'wrap', alignContent: 'center', font: 'var(--sc-font-text-display-xs)', color: 'var(--sc-color-text-primary)', lineHeight: 1, wordBreak: 'break-all' }}>SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE</div>
    </div>
  ),
  type: (
    <div aria-hidden="true" style={{ ...BACKDROP, display: 'flex', flexWrap: 'wrap', alignContent: 'center', font: 'var(--sc-font-text-title-card)', color: 'var(--sc-color-text-primary)', wordBreak: 'break-all' }}>SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE</div>
  ),
  none: null,
};

/* StatusPill tones with the docs page's labels (src/sections/ComponentSections.jsx). */
const PILLS = { progress: 'In progress', live: 'Live', success: 'Complete', warning: 'Pending', error: 'Failed', info: 'Info', neutral: 'Planned' };
const PILL_ICONS = { none: undefined, check: Check, pause: Pause, archive: Archive, warning: Warning };

/*
 * Avatar images: the docs page's mark (src/sections/ComponentSections.jsx),
 * and a stand-in portrait (a light backdrop and a head-and-shoulders shape;
 * the repo holds no photo), so the ring is judged on a light and a dark image.
 */
const AVATAR_PORTRAIT = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#D9CFC2"/><circle cx="32" cy="26" r="12" fill="#6B5A4A"/><path d="M8 64c0-14 11-22 24-22s24 8 24 22z" fill="#3E4A55"/></svg>')}`;
const AVATAR_IMAGES = { mark: avatarMark, portrait: AVATAR_PORTRAIT };
const AVATAR_SIZES = ['xs', 'sm', 'md', 'lg'];

/* Toast tones with the docs page's copy (src/sections/ComponentSections.jsx). */
const TOASTS = {
  success: 'Sprint 5 merged and deployed to brand.shokunincrafthouse.com.',
  info: 'The brand site rebuilds on every push to main.',
  warning: 'Two approval gates remain before this can merge.',
  error: 'Token build exited non-zero. The previous deploy is still live.',
};
/* The Tooltip plate (record Tooltip 2026-10-08-2007 A): the Button key shade
 * without its highlight, lit from the top left. Copied as values. */
const PLATE_SHADE = { light: '2px 2px 6px 0 rgb(100 91 79 / 0.50)', dark: '3px 3px 7px 0 rgb(0 0 0 / 0.50)' };
/* Set on a keyboard step so the lab's tick plays on keys only, never on a drag. */
let keyStep = false;

/* ---------- motion sandbox ---------- */

function MotionStage({ p, ctx }) {
  const ref = useRef(null);
  useEffect(() => {
    const tiles = [...(ref.current?.children || [])];
    const slow = ctx.slow || 1;
    const reduced = p.reduced;
    const from = reduced === 'opacity only'
      ? { opacity: p.opacityFrom, transform: 'none', filter: 'none' }
      : { opacity: p.opacityFrom, transform: `translateY(${p.distance}px) scale(${p.scaleFrom}) rotate(${p.rotateFrom}deg)`, filter: `blur(${p.blurFrom}px)` };
    const to = { opacity: 1, transform: 'translateY(0) scale(1) rotate(0deg)', filter: 'blur(0px)' };
    const anims = tiles.map((el, i) => el.animate([from, to], {
      duration: reduced === 'none' ? 0 : p.duration * slow,
      delay: reduced === 'none' ? 0 : (p.delay + i * p.stagger) * slow,
      easing: p.easing,
      fill: 'both',
    }));
    return () => anims.forEach((a) => a.cancel());
  }, [p, ctx.replay, ctx.slow]);
  return (
    <div className={s.motionTiles} ref={ref}>
      {Array.from({ length: p.count }, (_, i) => <span key={i} className={s.motionTile} />)}
    </div>
  );
}

export const lastFrameMs = (p) => (p.reduced === 'none' ? 0 : p.delay + p.stagger * (p.count - 1) + p.duration);

/* Panel group order (P3.1, A-03): the component's own layering, size first,
   motion last. The one place it is written; the lab's rail and its token
   groups both read it. `other` catches a token outside the eight families;
   the read-only `derived` group always follows. */
export const GROUP_ORDER = ['size', 'space', 'radius', 'border', 'color', 'shadow', 'font', 'motion', 'other'];

/* ---------- entries ---------- */

export const REGISTRY = {
  Switch: {
    css: [switchCss],
    // Read by switchMotion.js, not by var() in the CSS.
    jsTokens: [
      '--sc-motion-switch-stretch',
      '--sc-motion-switch-squash',
      '--sc-motion-switch-press-lean',
      '--sc-motion-switch-press-lean-duration',
      '--sc-motion-press-easing',
    ],
    // Lab start for the reel motion (kabarza, instagram.com/reel/DeK0AFcIRhf,
    // the playground's Balanced preset and the article's press layer). These
    // ship at 0, so they reach SCDS only through a recorded concept.
    seed: {
      overrides: {
        '--sc-motion-switch-stretch': '0.45',
        '--sc-motion-switch-squash': '0',
        '--sc-motion-switch-press-lean': '0.83',
        '--sc-motion-switch-press-lean-duration': '150ms',
      },
      // duration 520ms, bounce 0: stiffness (2π/0.52)², damping 4π/0.52, mass 1.
      springs: { '--sc-motion-switch-travel-easing': { stiffness: 146.0, damping: 24.17, mass: 1 } },
    },
    shippedSound: 'drams-004-toggle-switch-01.wav',
    trigger: 'every on/off change',
    props: [
      { name: 'checked', type: 'boolean', default: false },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'glyphs', type: 'boolean', default: true },
      { name: 'label', type: 'text', default: 'Notifications' },
    ],
    play: (p, set) => set('checked', !p.checked),
    render: (p, set, sound) => (
      <Switch
        checked={p.checked}
        disabled={p.disabled}
        glyphs={p.glyphs}
        label={p.label}
        sound={false}
        onChange={(e) => {
          set('checked', e.target.checked);
          sound();
        }}
      />
    ),
  },
  Stepper: {
    css: [stepperCss, iconCss],
    // Readout roll, read by Stepper.jsx. The reel has no roll: 1 (a full
    // window height, an odometer) is Claude's start, not the reel's.
    jsTokens: [...reel('stepper', { press: false }).jsTokens, '--sc-motion-stepper-roll'],
    seed: {
      // Glyph press scale 0.85: Claude's start so the press reads; Levi tunes it.
      overrides: { ...reel('stepper', { press: false }).seed.overrides, '--sc-motion-stepper-roll': '1', '--sc-motion-stepper-glyph-press-scale': '0.85' },
      springs: reel('stepper', { press: false }).seed.springs,
      // ± keys = the Button key at rest (hover and press follow the Button
      // primary's accent tokens, Levi 2026-10-07); pill = the top-left
      // recess. The numeral sits flat (no window).
      scoped: perMode((m) => ({
        '--sc-shadow-stepper-track': m.recess,
        '--sc-color-stepper-key': m.keyFill,
        '--sc-color-stepper-key-shade': m.keyShade,
        '--sc-shadow-stepper-key': m.key,
      })),
    },
    shippedSound: 'drams-037-01.wav',
    trigger: 'every committed step; silent at a bound',
    props: [
      { name: 'value', type: 'number', default: 4, min: -99, max: 99 },
      { name: 'min', type: 'number', default: 0, min: -99, max: 99 },
      { name: 'max', type: 'number', default: 12, min: -99, max: 99 },
      { name: 'step', type: 'number', default: 1, min: 1, max: 10 },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'label', type: 'text', default: 'Quantity' },
    ],
    play: (p, set) => set('value', p.value + p.step > p.max ? p.min : p.value + p.step),
    render: (p, set, sound) => (
      <Stepper
        value={p.value}
        min={p.min}
        max={p.max}
        step={p.step}
        disabled={p.disabled}
        label={p.label}
        sound={false}
        onChange={(v) => {
          set('value', v);
          sound();
        }}
      />
    ),
  },
  SegmentedControl: {
    css: [segmentedCss],
    ...reel('segmented-control'),
    // Material starts (physical-controls Tier 1), lit from the top left (Gate 1 pick 1):
    // the track recess is the Drams recess (inset 0 1px 2px, the Switch's source before
    // its ×0.45 scale) turned to the top left; the indicator is the Button key
    // (shadow.control.key, color.control.keyShade). They ship flat.
    seed: {
      ...reel('segmented-control').seed,
      scoped: {
        light: {
          '--sc-shadow-segmented-control-track': 'inset 0.71px 0.71px 2px 0 rgb(26 24 21 / 0.25)',
          '--sc-shadow-segmented-control-indicator': '2px 2px 6px 0 rgb(100 91 79 / 0.50), -1px -1px 1px 1px rgb(253 250 246 / 1)',
          '--sc-color-segmented-control-indicator-shade': 'rgb(26 24 21 / 0.05)',
        },
        dark: {
          '--sc-shadow-segmented-control-track': 'inset 0.71px 0.71px 2px 0 rgb(0 0 0 / 0.45)',
          '--sc-shadow-segmented-control-indicator': '3px 3px 7px 0 rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)',
          '--sc-color-segmented-control-indicator-shade': 'rgb(26 24 21 / 0.25)',
        },
      },
    },
    shippedSound: 'drams-001-01.wav',
    trigger: 'a change of selection; re-selecting is silent',
    props: [
      { name: 'value', type: 'enum', options: SEGMENTS, default: 'day' },
      { name: 'size', type: 'enum', options: ['sm', 'md', 'lg'], default: 'md' },
      { name: 'disabled', type: 'boolean', default: false },
    ],
    play: (p, set) => set('value', SEGMENTS[(SEGMENTS.indexOf(p.value) + 1) % SEGMENTS.length]),
    render: (p, set, sound) => (
      <SegmentedControl
        label="Range"
        value={p.value}
        size={p.size}
        disabled={p.disabled}
        sound={false}
        options={[
          { value: 'day', label: 'Day' },
          { value: 'week', label: 'Week' },
          { value: 'month', label: 'Month' },
        ]}
        onChange={(v) => {
          if (v !== p.value) sound();
          set('value', v);
        }}
      />
    ),
  },
  Tooltip: {
    css: [tooltipCss],
    // Physical-controls Tier 2: a raised plate that grows out of the trigger
    // point (record Tooltip 2026-10-08-2007 A, applied). Tooltip.jsx reads the
    // arrow radii, the plate shadow and the grow, so they are listed here.
    jsTokens: [...reel('tooltip', { press: false }).jsTokens, '--sc-motion-tooltip-grow-from', '--sc-shadow-tooltip-plate', '--sc-size-tooltip-arrow-tip', '--sc-size-tooltip-arrow-fillet'],
    // No seeds: the record is applied, so a new concept starts from shipped.
    // The reveal role sound (Drams 031). Shipped, reveal.wav bakes in the
    // record's 0.65x pitch and 0.2 volume; the lab plays the source file.
    shippedSound: 'drams-031-01.wav',
    trigger: 'the tooltip opens (pointer enters or focus lands on the trigger)',
    props: [
      // hover: the trigger opens it (the motion plays on every hover); open / closed force it.
      { name: 'show', type: 'enum', options: ['hover', 'open', 'closed'], default: 'hover' },
      { name: 'multiline', type: 'boolean', default: false },
      { name: 'content', type: 'text', default: 'Copied to clipboard' },
    ],
    play: (p, set) => set('show', p.show === 'open' ? 'closed' : 'open'),
    render: (p, set, sound) => (
      <div style={{ position: 'relative', padding: 'var(--sc-space-layout-stack-md) var(--sc-space-layout-stack-sm) var(--sc-space-layout-stack-sm)' }}>
        <span style={{ position: 'relative', display: 'inline-block', paddingTop: 'var(--sc-space-layout-stack-md)' }}>
          <Tooltip content={p.content} multiline={p.multiline} open={p.show === 'hover' ? undefined : p.show === 'open'} sound={false}>
            <span
              style={{ display: 'inline-block' }}
              onMouseEnter={() => { if (p.show === 'hover') sound(); }}
              onFocus={() => { if (p.show === 'hover') sound(); }}
            >
              <Button variant="primary" size="sm" arrow={false} sound={false}>Copy</Button>
            </span>
          </Tooltip>
        </span>
      </div>
    ),
  },
  NavBar: {
    css: [navBarCss, underlineCss],
    ...reel('nav-bar'),
    shippedSound: null,
    trigger: 'ships silent',
    props: [
      { name: 'current', type: 'enum', options: PAGES, default: 'work' },
      { name: 'underline', type: 'boolean', default: true },
    ],
    play: (p, set) => set('current', PAGES[(PAGES.indexOf(p.current) + 1) % PAGES.length]),
    render: (p, set) => (
      // Links are in-page anchors: a click moves `current` instead of navigating.
      <div onClickCapture={(e) => {
        const a = e.target.closest('a');
        if (!a) return;
        e.preventDefault();
        set('current', a.textContent.trim().toLowerCase());
      }}>
        <NavBar
          brand={<span>Shokunin</span>}
          underline={p.underline}
          links={PAGES.map((x) => ({ href: `#${x}`, label: x[0].toUpperCase() + x.slice(1), current: x === p.current }))}
        />
      </div>
    ),
  },
  PlusUnderline: {
    css: [underlineCss],
    ...reel('plus-underline'),
    shippedSound: null,
    trigger: 'ships silent',
    props: [{ name: 'active', type: 'enum', options: SEGMENTS, default: 'day' }],
    play: (p, set) => set('active', SEGMENTS[(SEGMENTS.indexOf(p.active) + 1) % SEGMENTS.length]),
    render: (p, set) => (
      <div role="tablist" aria-label="Range" style={{ display: 'flex', gap: 'var(--sc-space-component-gap-lg)' }}>
        {SEGMENTS.map((x) => (
          <button
            key={x}
            type="button"
            role="tab"
            aria-selected={x === p.active}
            onClick={() => set('active', x)}
            style={{ display: 'inline-flex', flexDirection: 'column', gap: 'var(--sc-space-component-gap-sm)', background: 'none', border: 0, padding: 0, font: 'inherit', color: 'var(--sc-color-text-primary)', cursor: 'pointer' }}
          >
            {x[0].toUpperCase() + x.slice(1)}
            <PlusUnderline active={x === p.active} />
          </button>
        ))}
      </div>
    ),
  },
  Slider: {
    css: [sliderCss],
    // Thumb stretch and squash are read by Slider.jsx.
    jsTokens: reel('slider', { press: false }).jsTokens,
    seed: {
      overrides: {
        ...reel('slider', { press: false }).seed.overrides,
        // The Switch knob's diameter and press scale (values, not its tokens).
        '--sc-size-slider-thumb': '15px',
        '--sc-motion-slider-thumb-press-scale': '0.985',
      },
      springs: reel('slider', { press: false }).seed.springs,
      // Track = the top-left recess; thumb face = the Switch knob at 135deg;
      // thumb lift = the Button key, softened to keyPressed while dragged.
      scoped: perMode((m) => {
        const k = m === MATERIAL.light ? KNOB.light : KNOB.dark;
        return {
          '--sc-shadow-slider-track': m.recess,
          '--sc-color-slider-thumb-rim-top': k.rimTop,
          '--sc-color-slider-thumb-rim-bottom': k.rimBottom,
          '--sc-color-slider-thumb-face-top': k.faceTop,
          '--sc-color-slider-thumb-face-bottom': k.faceBottom,
          '--sc-shadow-slider-thumb': m.key,
          '--sc-shadow-slider-thumb-pressed': m.keyPressed,
        };
      }),
    },
    // The slide role sound (Drams 009), Levi's pick in record 2026-10-07-2207.
    shippedSound: 'drams-009-01.wav',
    trigger: 'a keyboard step that changes the value; a drag is silent',
    props: [
      { name: 'value', type: 'range', min: 0, max: 1, step: 0.01, default: 0.5 },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'label', type: 'text', default: 'Volume' },
    ],
    play: (p, set) => set('value', p.value >= 0.75 ? 0.25 : 0.75),
    render: (p, set, sound) => (
      <div
        style={{ width: 'calc(var(--sc-space-layout-stack-xl) * 2)' }}
        onKeyDownCapture={() => { keyStep = true; }}
        onKeyUpCapture={() => { keyStep = false; }}
      >
        <Slider
          value={p.value}
          disabled={p.disabled}
          label={p.label}
          sound={false}
          onChange={(v) => {
            const next = Math.round(v * 100) / 100;
            if (keyStep && next !== p.value) sound();
            set('value', next);
          }}
        />
      </div>
    ),
  },
  Input: {
    css: [inputCss, iconCss],
    // No seeds: concept A starts from shipped, which is Levi's filled-field
    // reference (2026-10-07). Icons are Phosphor, bold.
    shippedSound: null,
    trigger: 'ships silent',
    props: [
      { name: 'label', type: 'text', default: 'Email address' },
      { name: 'description', type: 'text', default: '' },
      { name: 'placeholder', type: 'text', default: 'you@studio.com' },
      { name: 'value', type: 'text', default: 'levi@levibahn.com' },
      { name: 'icon', type: 'enum', options: Object.keys(INPUT_ICONS), default: 'mail' },
      { name: 'prefix', type: 'text', default: '' },
      { name: 'suffix', type: 'text', default: '' },
      { name: 'trailing', type: 'enum', options: Object.keys(INPUT_TRAILING), default: 'none' },
      { name: 'clearable', type: 'boolean', default: true },
      { name: 'helper', type: 'text', default: '' },
      { name: 'error', type: 'text', default: '' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'surface', type: 'enum', options: ['page', 'raised'], default: 'page' },
    ],
    play: null,
    render: (p, set) => (
      <div style={{ width: 'calc(var(--sc-space-layout-stack-xl) * 2.5)', ...(p.surface === 'raised' ? { background: 'var(--sc-color-surface-raised)', padding: 'var(--sc-space-component-padding-md)' } : {}) }}>
        <Input
          surface={p.surface}
          label={p.label}
          description={p.description || undefined}
          placeholder={p.placeholder}
          value={p.value}
          icon={INPUT_ICONS[p.icon]}
          prefix={p.prefix || undefined}
          suffix={p.suffix || undefined}
          trailing={INPUT_TRAILING[p.trailing]}
          clearable={p.clearable}
          onClear={() => set('value', '')}
          helper={p.helper || undefined}
          error={p.error || undefined}
          disabled={p.disabled}
          onChange={(e) => set('value', e.target.value)}
        />
      </div>
    ),
  },
  Card: {
    css: [cardCss],
    // Two styles (Levi, 2026-10-08): flat, and liquid glass in three levels
    // named for the surface (clear, frosted = his Figma Glass, thick) and two
    // tones (light lightens, dark darkens): 7 cards, 14 with the theme.
    // The refraction numbers are read by src/components/Card/glass.js.
    jsTokens: ['clear', 'frosted', 'thick'].flatMap((l) => ['refraction', 'depth', 'splay'].map((k) => `--sc-size-card-glass-${l}-${k}`)),
    shippedSound: null,
    trigger: 'ships silent',
    props: [
      { name: 'show', type: 'enum', options: ['all', ...Object.keys(CARD_STYLES)], default: 'all' },
      { name: 'backdrop', type: 'enum', options: Object.keys(CARD_BACKDROPS), default: 'page (follows theme)' },
      { name: 'interactive', type: 'boolean', default: false },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'title', type: 'text', default: 'Studio journal' },
      { name: 'body', type: 'text', default: 'Notes from the bench.' },
    ],
    play: null,
    render: (p) => {
      const shown = p.show === 'all' ? Object.keys(CARD_STYLES) : [p.show];
      return (
        <div style={{ position: 'relative', padding: 'var(--sc-space-layout-stack-sm)' }}>
          {CARD_BACKDROPS[p.backdrop]}
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: `repeat(${Math.min(shown.length, 4)}, calc(var(--sc-space-layout-stack-xl) * 2.5))`, gap: 'var(--sc-space-layout-stack-sm)' }}>
            {shown.map((name) => [
              // Light tones on the first row beside flat, dark tones under them.
              p.show === 'all' && name === 'clear · dark' ? <span key="gap" /> : null,
              <Card key={name} {...CARD_STYLES[name]} interactive={p.interactive} disabled={p.interactive ? p.disabled : undefined} onClick={() => {}}>
                <span style={{ display: 'block', font: 'var(--sc-font-text-label-ui)', color: 'var(--sc-color-text-secondary)' }}>{name}</span>
                <span style={{ display: 'block', font: 'var(--sc-font-text-body-default)' }}>{p.title}</span>
                <span style={{ display: 'block', font: 'var(--sc-font-text-body-dense)', color: 'var(--sc-color-text-secondary)' }}>{p.body}</span>
              </Card>,
            ])}
          </div>
        </div>
      );
    },
  },
  StatusPill: {
    css: [statusPillCss],
    // Levi 2026-10-08: Badge and Pill fold into StatusPill (tone, emphasis,
    // the product's own label). Live and in-progress pills glow, the whole
    // pill, and the glow breathes. No seeds: a concept starts from shipped.
    shippedSound: null,
    trigger: 'ships silent',
    props: [
      { name: 'show', type: 'enum', options: ['all', ...Object.keys(PILLS)], default: 'all' },
      { name: 'emphasis', type: 'enum', options: ['filled', 'outline'], default: 'filled' },
      { name: 'glow', type: 'enum', options: ['by tone', 'on', 'off'], default: 'by tone' },
      { name: 'icon', type: 'enum', options: Object.keys(PILL_ICONS), default: 'none' },
      { name: 'content', type: 'text', default: 'In progress' },
    ],
    play: (p, set) => set('glow', p.glow === 'off' ? 'on' : 'off'),
    render: (p) => {
      const shown = p.show === 'all' ? Object.keys(PILLS) : [p.show];
      const glow = p.glow === 'by tone' ? undefined : p.glow === 'on';
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--sc-space-layout-stack-sm)' }}>
          {shown.map((t) => (
            <StatusPill key={t} tone={t} emphasis={p.emphasis} glow={glow} icon={PILL_ICONS[p.icon]}>{p.show === 'all' ? PILLS[t] : p.content}</StatusPill>
          ))}
        </div>
      );
    },
  },
  Avatar: {
    css: [avatarCss],
    // Physical-controls Tier 2: Avatar stays flat (Levi, 2026-10-08). The
    // ground behind it is the View panel's ground (page, raised, sunk,
    // floating), shared by every stage.
    shippedSound: null,
    trigger: 'ships silent',
    props: [
      { name: 'show', type: 'enum', options: ['all', ...AVATAR_SIZES], default: 'all' },
      { name: 'content', type: 'enum', options: ['image', 'initials'], default: 'image' },
      { name: 'image', type: 'enum', options: Object.keys(AVATAR_IMAGES), default: 'portrait' },
      { name: 'name', type: 'text', default: 'Levi Bahn' },
    ],
    play: (p, set) => set('content', p.content === 'image' ? 'initials' : 'image'),
    render: (p) => {
      const shown = p.show === 'all' ? AVATAR_SIZES : [p.show];
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--sc-space-component-gap-md)', padding: 'var(--sc-space-layout-stack-sm)' }}>
          {shown.map((size) => (
            <Avatar key={size} size={size} name={p.name} src={p.content === 'image' ? AVATAR_IMAGES[p.image] : undefined} />
          ))}
        </div>
      );
    },
  },
  Toast: {
    css: [toastCss],
    // Alert folds into Toast (Levi, 2026-10-08). Role tokens shipped equal
    // to the Figma Toast (set 9:897); record Toast 2026-10-10-1534 applied
    // concept A, the plate shadow relit from the top left (the Tooltip plate
    // shade), so the shipped stage now carries it and the seed is inert.
    // Not a control the reader asked for, so silent.
    jsTokens: ['--sc-motion-toast-hold'],
    seed: {
      scoped: {
        light: { '--sc-shadow-toast-plate': PLATE_SHADE.light },
        dark: { '--sc-shadow-toast-plate': PLATE_SHADE.dark },
      },
    },
    shippedSound: null,
    trigger: 'ships silent',
    props: [
      { name: 'show', type: 'enum', options: ['all', ...Object.keys(TOASTS)], default: 'all' },
      { name: 'placement', type: 'enum', options: ['floating', 'inline'], default: 'floating' },
      { name: 'surface', type: 'enum', options: ['flat', 'glass'], default: 'flat' },
      { name: 'glyph', type: 'enum', options: ['outline', 'fill'], default: 'outline' },
      { name: 'backdrop', type: 'enum', options: Object.keys(CARD_BACKDROPS), default: 'none' },
      { name: 'autoDismiss', type: 'boolean', default: false },
      { name: 'dismissDisabled', type: 'boolean', default: false },
      { name: 'message', type: 'text', default: 'Token build exited non-zero after the contrast check failed on three pairs. The previous deploy is still live.' },
    ],
    // Play replays the floating enter (each Play remounts the toasts).
    play: null,
    render: (p, set, sound, ctx) => {
      const shown = p.show === 'all' ? Object.keys(TOASTS) : [p.show];
      // Room for the dismiss on each toast's top-right corner (18 up, 20 out).
      return (
        <div style={{ position: 'relative', padding: 'var(--sc-space-layout-stack-md)' }}>
          {CARD_BACKDROPS[p.backdrop]}
          <div style={{ position: 'relative', display: 'grid', justifyItems: 'start', gap: 'var(--sc-space-layout-stack-md)', inlineSize: p.placement === 'inline' ? 'calc(var(--sc-space-layout-stack-xl) * 6)' : undefined, maxInlineSize: '100%' }}>
            {shown.map((t) => (
              <Toast
                key={`${t}-${ctx.replay}`}
                tone={t}
                placement={p.placement}
                surface={p.surface}
                glyph={p.glyph}
                autoDismiss={p.autoDismiss}
                dismissDisabled={p.dismissDisabled}
                onDismiss={() => {}}
              >
                {p.show === 'all' ? TOASTS[t] : p.message}
              </Toast>
            ))}
          </div>
        </div>
      );
    },
  },
  Button: {
    css: [buttonCss],
    shippedSound: 'drams-029-01.wav',
    trigger: 'every click',
    props: [
      { name: 'variant', type: 'enum', options: ['primary', 'secondary', 'tertiary', 'destructive'], default: 'primary' },
      { name: 'size', type: 'enum', options: ['lg', 'sm'], default: 'lg' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'loading', type: 'boolean', default: false },
      { name: 'arrow', type: 'boolean', default: true },
      { name: 'children', type: 'text', default: 'Continue' },
    ],
    play: null,
    render: (p, set, sound) => (
      <Button variant={p.variant} size={p.size} disabled={p.disabled} loading={p.loading} arrow={p.arrow} sound={false} onClick={() => sound()}>
        {p.children}
      </Button>
    ),
  },
  Motion: {
    kind: 'motion',
    css: [],
    shippedSound: null,
    trigger: 'each Play (audition only)',
    props: [
      { name: 'count', type: 'range', min: 1, max: 12, step: 1, default: 5 },
      { name: 'distance', type: 'range', min: -200, max: 200, step: 1, unit: 'px', default: 24 },
      { name: 'scaleFrom', type: 'range', min: 0.5, max: 1.5, step: 0.01, default: 0.96 },
      { name: 'opacityFrom', type: 'range', min: 0, max: 1, step: 0.01, default: 0 },
      { name: 'blurFrom', type: 'range', min: 0, max: 20, step: 0.5, unit: 'px', default: 0 },
      { name: 'rotateFrom', type: 'range', min: -45, max: 45, step: 0.5, unit: 'deg', default: 0 },
      { name: 'duration', type: 'range', min: 0, max: 2000, step: 10, unit: 'ms', default: 380 },
      { name: 'delay', type: 'range', min: 0, max: 1000, step: 10, unit: 'ms', default: 0 },
      { name: 'stagger', type: 'range', min: 0, max: 300, step: 5, unit: 'ms', default: 40 },
      { name: 'easing', type: 'easing', durationProp: 'duration', default: 'cubic-bezier(0.32, 0.08, 0.12, 1)' },
      { name: 'reduced', type: 'enum', options: ['full', 'opacity only', 'none'], default: 'full' },
    ],
    play: null,
    render: (p, set, sound, ctx) => <MotionStage p={p} ctx={ctx} />,
  },
};
