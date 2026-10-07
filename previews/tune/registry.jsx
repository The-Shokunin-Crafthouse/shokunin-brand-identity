/**
 * sc-tune registry — one entry per tunable component.
 *
 * The engine reads every token the component's CSS consumes (from `css`,
 * imported ?raw) and builds a typed control for each. An entry only has to
 * say what the engine cannot infer: the props worth exposing, how to render
 * the component from them, and where its sound fires.
 *
 * Adding a component (skills/sc-tune/SKILL.md, step 2): import its CSS
 * module ?raw (plus any child component it renders), list its props, and
 * call `sound()` at the moment the shipped component plays its role sound.
 * Always render with `sound={false}`: the lab plays the tuned sound itself.
 */

import { Switch } from '../../src/components/Switch/Switch.jsx';
import { Stepper } from '../../src/components/Stepper/Stepper.jsx';
import { SegmentedControl } from '../../src/components/SegmentedControl/SegmentedControl.jsx';
import { Button } from '../../src/components/Button/Button.jsx';
import switchCss from '../../src/components/Switch/Switch.module.css?raw';
import stepperCss from '../../src/components/Stepper/Stepper.module.css?raw';
import iconCss from '../../src/components/Icon/Icon.module.css?raw';
import segmentedCss from '../../src/components/SegmentedControl/SegmentedControl.module.css?raw';
import buttonCss from '../../src/components/Button/Button.module.css?raw';

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
      { name: 'value', type: 'enum', options: ['day', 'week', 'month'], default: 'day' },
      { name: 'size', type: 'enum', options: ['sm', 'md', 'lg'], default: 'md' },
      { name: 'disabled', type: 'boolean', default: false },
    ],
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
    render: (p, set, sound) => (
      <Button
        variant={p.variant}
        size={p.size}
        disabled={p.disabled}
        loading={p.loading}
        arrow={p.arrow}
        onClick={() => sound()}
      >
        {p.children}
      </Button>
    ),
  },
};
