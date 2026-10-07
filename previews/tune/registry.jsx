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
import switchCss from '../../src/components/Switch/Switch.module.css?raw';
import stepperCss from '../../src/components/Stepper/Stepper.module.css?raw';
import iconCss from '../../src/components/Icon/Icon.module.css?raw';
import segmentedCss from '../../src/components/SegmentedControl/SegmentedControl.module.css?raw';
import buttonCss from '../../src/components/Button/Button.module.css?raw';
import s from './Tune.module.css';

const SEGMENTS = ['day', 'week', 'month'];

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

/* ---------- entries ---------- */

export const REGISTRY = {
  Switch: {
    css: [switchCss],
    shippedSound: 'drams-004-toggle-switch-01.wav',
    trigger: 'every on/off change',
    props: [
      { name: 'checked', type: 'boolean', default: false },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'label', type: 'text', default: 'Notifications' },
    ],
    play: (p, set) => set('checked', !p.checked),
    render: (p, set, sound) => (
      <Switch
        checked={p.checked}
        disabled={p.disabled}
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
  Button: {
    css: [buttonCss],
    shippedSound: null,
    trigger: 'click (audition only; Button ships silent)',
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
      <Button variant={p.variant} size={p.size} disabled={p.disabled} loading={p.loading} arrow={p.arrow} onClick={() => sound()}>
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
