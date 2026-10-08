/**
 * ComponentSections — the eleven primitive component pages (Button …
 * NavBar). Each renders ComponentPage with a config: the real Sprint 4
 * component in every documented state, the token-consumption table
 * (values resolved live), the usage rules, and the named decisions.
 * Specimen (3.12) lives in its own file — it composes all twelve.
 */

import { useState } from 'react';
import { ComponentPage } from './_kit/ComponentPage.jsx';
import { Slash, Accent, Em } from './_kit/Editorial.jsx';
import { Button } from '../components/Button/Button.jsx';
import { Badge } from '../components/Badge/Badge.jsx';
import { Card } from '../components/Card/Card.jsx';
import { Input } from '../components/Input/Input.jsx';
import { EnvelopeSimple, MagnifyingGlass, MapPin, CalendarBlank } from '@phosphor-icons/react';
import { Alert } from '../components/Alert/Alert.jsx';
import { Switch } from '../components/Switch/Switch.jsx';
import { Avatar } from '../components/Avatar/Avatar.jsx';
import { ProgressIndicator } from '../components/ProgressIndicator/ProgressIndicator.jsx';
import { Slider } from '../components/Slider/Slider.jsx';
import { Tooltip } from '../components/Tooltip/Tooltip.jsx';
import { Divider } from '../components/Divider/Divider.jsx';
import { NavBar } from '../components/NavBar/NavBar.jsx';
import { SegmentedControl } from '../components/SegmentedControl/SegmentedControl.jsx';
import { Stepper } from '../components/Stepper/Stepper.jsx';
import { WorkingMark } from '../components/WorkingMark/WorkingMark.jsx';
import avatarImg from '../../assets/logo/mark-icon-dark.png';

const noop = () => {};

/* ── 3.1 Button ──────────────────────────────────────────── */
export function ButtonPage() {
  return (
    <ComponentPage
      id="button" label="Button" tokensN={16}
      eyebrow={<>Button<Slash />the move forward</>}
      title={<>One fill per view. <Accent>Hover</Accent> is where the accent <Em>lives.</Em></>}
      lead={<>Four variants on one hierarchy: primary fills, secondary outlines, ghost recedes, destructive warns. Weight is carried by fill, not by colour — so the single filled button on a surface is, by construction, the one thing to do next.</>}
      statesTitle="Six states, one button."
      callouts={[
        { title: 'Why outlined secondary', body: 'Secondary carries no fill so the primary’s fill is the only filled element on a surface. Hierarchy by fill, not by colour weight.' },
        { title: 'What it refused', body: 'No icon-only variant in Sprint 4. An icon button needs an accessible-name contract the label button does not — deferred rather than shipped half-resolved.' },
        { title: 'The token gap it exposed', body: 'The loading spinner needed a continuous-rotation duration. None existed in the semantic motion layer; it borrowed --sc-motion-mode-duration (380ms) and logged motion/continuous for a Sprint 5+ revisit.' },
      ]}
      states={[
        { name: 'Primary', token: '--sc-color-brand-accent', render: <Button variant="primary">Start a project</Button> },
        { name: 'Secondary', token: '--sc-color-interactive-default', render: <Button variant="secondary">View work</Button> },
        { name: 'Tertiary', token: '--sc-color-brand-accent-deep', render: <Button variant="tertiary">Cancel</Button> },
        { name: 'Destructive', token: '--sc-color-status-error', render: <Button variant="destructive">Delete draft</Button> },
        { name: 'Disabled', token: '--sc-color-text-disabled', render: <Button disabled>Unavailable</Button> },
        { name: 'Loading', token: '--sc-motion-mode-duration', render: <Button loading>Saving</Button> },
        { name: 'Small · primary', token: '--sc-font-text-label-button-sm', render: <Button size="sm">Update</Button> },
        { name: 'Small · secondary', token: '--sc-space-component-padding-inline-button-sm', render: <Button size="sm" variant="secondary">Merge</Button> },
        { name: 'Small · tertiary', token: '--sc-space-component-padding-block-button-sm', render: <Button size="sm" variant="tertiary">View all</Button> },
        { name: 'Small · disabled', token: '--sc-size-button-icon-sm', render: <Button size="sm" disabled>Unavailable</Button> },
      ]}
      tokenRows={[
        { prop: 'Inline padding', token: '--sc-space-component-padding-inline-button-lg' },
        { prop: 'Block padding', token: '--sc-space-component-padding-block-md' },
        { prop: 'Radius', token: '--sc-radius-surface' },
        { prop: 'Border', token: '--sc-border-width-default' },
        { prop: 'Label type', token: '--sc-font-text-label-chrome', light: '11 / medium / caps' },
        { prop: 'Primary fill', token: '--sc-color-brand-accent' },
        { prop: 'Primary hover', token: '--sc-color-brand-accent-deep' },
        { prop: 'On-accent text', token: '--sc-color-text-on-accent' },
        { prop: 'Secondary ink', token: '--sc-color-interactive-default' },
        { prop: 'Hover accent', token: '--sc-color-interactive-hover' },
        { prop: 'Destructive fill', token: '--sc-color-status-error' },
        { prop: 'Disabled text', token: '--sc-color-text-disabled' },
        { prop: 'Focus ring', token: '--sc-color-border-focus' },
        { prop: 'Press scale', token: '--sc-motion-press-scale', light: '0.985' },
        { prop: 'Hover motion', token: '--sc-motion-hover-duration', light: '200ms' },
      ]}
      rulesTitle="Five rules that keep the hierarchy legible."
      rulesPremise="Specific to this button in this system — not generic guidance. Each protects the one-fill-per-view rule the whole component exists to enforce."
      rules={[
        { name: 'Destructive is never the primary CTA', text: 'It marks an action that removes or destroys. The primary CTA moves the workflow forward; the destructive variant ends or deletes. They never trade places.' },
        { name: 'One primary per view', text: 'The filled button is the single most important action on a surface. Two primaries is no primary — demote one to secondary.' },
        { name: 'Ghost is tertiary only', text: 'No fill, no border. Use it where a bordered button would crowd the layout — toolbars, inline actions, a cancel beside a save. Never for the main action.' },
        { name: 'Loading suppresses the handler', text: 'The click handler is removed while loading, not just visually disabled. A double-submit cannot happen by construction.' },
        { name: 'The accent is a hover state, never a resting one', text: 'Teal arrives on hover for secondary and deepens on press for primary. A button that rests teal would spend the brand signal on idle chrome.' },
      ]}
    />
  );
}

/* ── 3.2 Badge ───────────────────────────────────────────── */
export function BadgePage() {
  return (
    <ComponentPage
      id="badge" label="Badge" tokensN={9}
      eyebrow={<>Badge<Slash />the label, not the button</>}
      title={<>Outlined, never filled. <Em>Colour is the whole message.</Em></>}
      lead={<>A badge is a categorical chrome label. It outlines rather than fills so it never competes with a card or a button at the same scale. The colour carries the meaning: accent for brand, status hues for state, muted for neutral.</>}
      statesTitle="Five variants, five meanings."
      callouts={[
        { title: 'Why outlined, not filled', body: 'A fill at this scale reads as a button — something to press. The outline reads as a label — something to read. The distinction is load-bearing in dense chrome.' },
        { title: 'Brand and danger never share a hue', body: 'Default is teal (a brand-signal chip); error is oxblood. A badge marking studio content and a badge marking a failure can never be mistaken for each other.' },
        { title: 'Neutral decouples colour from border', body: 'Its text reads quieter than its border on purpose — “categorical, not stateful.” The one variant where colour and outline deliberately disagree.' },
      ]}
      states={[
        { name: 'Default', token: '--sc-color-brand-accent-ink', render: <Badge>Studio</Badge> },
        { name: 'Success', token: '--sc-color-status-success-ink', render: <Badge variant="success">Shipped</Badge> },
        { name: 'Warning', token: '--sc-color-status-warning-ink', render: <Badge variant="warning">In review</Badge> },
        { name: 'Error', token: '--sc-color-status-error', render: <Badge variant="error">Failed</Badge> },
        { name: 'Neutral', token: '--sc-color-text-secondary', render: <Badge variant="neutral">Draft</Badge> },
      ]}
      tokenRows={[
        { prop: 'Inline padding', token: '--sc-space-component-padding-inline-sm' },
        { prop: 'Block padding', token: '--sc-space-component-padding-block-sm' },
        { prop: 'Radius', token: '--sc-radius-control' },
        { prop: 'Outline', token: '--sc-border-width-default' },
        { prop: 'Label type', token: '--sc-font-text-mono-chrome', light: 'mono 11 / caps' },
        { prop: 'Default colour', token: '--sc-color-brand-accent-ink' },
        { prop: 'Success colour', token: '--sc-color-status-success-ink' },
        { prop: 'Warning colour', token: '--sc-color-status-warning-ink' },
        { prop: 'Error colour', token: '--sc-color-status-error' },
        { prop: 'Neutral text', token: '--sc-color-text-secondary' },
        { prop: 'Neutral border', token: '--sc-color-border-default' },
      ]}
      rulesTitle="Four rules for a chip that reads as a label."
      rules={[
        { name: 'Never fill a badge', text: 'The outline is the form. A filled badge reads as a tiny button and invites a press that does nothing.' },
        { name: 'Default marks brand, not status', text: 'The teal default is for studio-specific content — a brand-signal chip. For state, reach for success / warning / error / neutral.' },
        { name: 'Mono caps, always', text: 'Badges sit in the chrome register with eyebrows and timestamps. Setting one in the sans body face breaks the apparatus voice.' },
        { name: 'Colour is the message; copy stays short', text: 'One or two words. The hue does the categorising; the text only names the category.' },
      ]}
    />
  );
}

/* ── 3.3 Card ────────────────────────────────────────────── */
export function CardPage() {
  return (
    <ComponentPage
      id="card" label="Card" tokensN={13}
      eyebrow={<>Card<Slash />depth by fill</>}
      title={<>Three surfaces. <Em>No resting stroke.</Em></>}
      lead={<>Cards separate by fill alone. Default sinks into the page; elevated lifts to the ground above it — the step in surface weight is the lift a shadow would otherwise fake. Nothing carries a resting frame. Interactivity is the only thing that draws a mark: an inset shadow on hover and focus, never an outline.</>}
      statesTitle="Three variants, one fill logic."
      callouts={[
        { title: 'Fill-only elevation', body: 'The Rams-lineage register builds depth from surface weight and spacing, not a stroke around every tile. scds-v2 Phase 2 removed the resting hairline frames; contrast does the separating.' },
        { title: 'How elevated reads lifted', body: 'It sits on the page ground while its siblings sit sunk. The step up in fill weight does the lifting a shadow would fake — no frame required.' },
        { title: 'Interactive is a real button', body: 'The interactive variant renders as <button>, not a div with a click handler — so it is keyboard-activatable and focus-ringed for free, and an inset shadow narrates hover and focus without a border.' },
      ]}
      states={[
        { name: 'Default', token: '--sc-color-card-well', render: <Card><CardBody>A set-in tile against the page.</CardBody></Card> },
        { name: 'Interactive · hover', token: '--sc-shadow-card-interactive-hover', render: <Card variant="interactive" onClick={noop}><CardBody>Hover or focus me.</CardBody></Card> },
        { name: 'Elevated', token: '--sc-color-card-plate', render: <Card variant="elevated"><CardBody>Page ground, lifted by fill.</CardBody></Card> },
      ]}
      tokenRows={[
        { prop: 'Padding', token: '--sc-space-component-padding-card' },
        { prop: 'Radius', token: '--sc-radius-card' },
        { prop: 'Text', token: '--sc-color-text-primary' },
        { prop: 'Default ground (well)', token: '--sc-color-card-well' },
        { prop: 'Well recess', token: '--sc-shadow-card-well' },
        { prop: 'Elevated ground (plate)', token: '--sc-color-card-plate' },
        { prop: 'Plate lift', token: '--sc-shadow-card-plate' },
        { prop: 'Interactive ground', token: '--sc-color-card-interactive' },
        { prop: 'Interactive hover ground', token: '--sc-color-card-interactive-hover' },
        { prop: 'Interactive lift', token: '--sc-shadow-card-interactive' },
        { prop: 'Hover and focus lift', token: '--sc-shadow-card-interactive-hover' },
        { prop: 'Pressed lift', token: '--sc-shadow-card-interactive-pressed' },
        { prop: 'Press scale', token: '--sc-motion-card-press-scale', light: '1' },
      ]}
      rulesTitle="Four rules for depth by contrast."
      rules={[
        { name: 'Never add a shadow', text: 'No box-shadow, no glow. If a card needs to lift, raise it with the elevated variant’s ground-and-frame contrast, not an effect the system does not own.' },
        { name: 'Elevated against sunk, not alone', text: 'Elevated reads as lifted only next to sunk siblings. On its own it is just a bordered page-ground rectangle.' },
        { name: 'Interactive gets a handler or it is not interactive', text: 'The variant renders a button. Use it only when there is a real action; a decorative interactive card is a focus trap with nothing to do.' },
        { name: 'One padding step', text: 'Card interiors pad with component-padding-lg. Tightening to md makes the card read as chrome; loosening past lg wastes the frame.' },
      ]}
    />
  );
}
function CardBody({ children }) {
  return <span style={{ font: 'var(--sc-font-text-body-dense)', color: 'var(--sc-color-text-secondary)' }}>{children}</span>;
}

/* ── 3.4 Input ───────────────────────────────────────────── */
function InputDemo({ initial = '', ...props }) {
  const [value, setValue] = useState(initial);
  return <Input {...props} value={value} onChange={(e) => setValue(e.target.value)} onClear={() => setValue('')} />;
}

export function InputPage() {
  return (
    <ComponentPage
      id="input" label="Input" tokensN={24}
      eyebrow={<>Input<Slash />a filled field, titled above</>}
      title={<>The title sits above. <Accent>The field</Accent> is a quiet <Em>tinted box.</Em></>}
      lead={<>A filled field: a tinted box with no rule and no frame, holding the value with a leading icon, a prefix or suffix, a clear button and a trailing control where the field needs them. The title stays above it, left-aligned, with optional subcopy between the title and the field. Icons are Phosphor, bold.</>}
      statesTitle="Six states and the slots a field can carry."
      callouts={[
        { title: 'The title stays outside', body: 'The label sits above the box, left-aligned, and never moves into the field. Subcopy, when a field needs it, goes between the title and the box.' },
        { title: 'Focus is the system ring', body: 'The box has no rule to recolour, so focus draws the same ring every control uses. An error draws a hairline edge in the status colour and keeps it on focus.' },
        { title: 'Clear only when there is something to clear', body: 'A clearable field shows its clear button while it holds a value. The button names the field it clears for screen readers.' },
      ]}
      states={[
        { name: 'Default', token: '--sc-color-input-well', render: <InputDemo label="Full name" placeholder="Your name" /> },
        { name: 'Subcopy', token: '--sc-font-text-caption', render: <InputDemo label="Email address" description="We only use it for receipts." icon={EnvelopeSimple} placeholder="you@studio.com" /> },
        { name: 'Filled, clearable', token: '--sc-color-input-adornment', render: <InputDemo label="Search" icon={MagnifyingGlass} clearable initial="apple macbook pro 14" /> },
        { name: 'Prefix and suffix', token: '--sc-color-input-divider', render: <InputDemo label="Display" prefix="Size" suffix="inches" initial="14" /> },
        { name: 'Trailing icon', token: '--sc-size-input-icon', render: <InputDemo label="Date" trailing={CalendarBlank} initial="9 February, 2022" /> },
        { name: 'Focus (tab in)', token: '--sc-color-border-focus', render: <InputDemo label="Street" icon={MapPin} placeholder="4220 Joy Lane" /> },
        { name: 'Error', token: '--sc-color-status-error', render: <InputDemo label="Email address" icon={EnvelopeSimple} error="That isn’t an email yet." clearable initial="levi@" /> },
        { name: 'Disabled', token: '--sc-color-text-disabled', render: <InputDemo label="Disabled" icon={EnvelopeSimple} disabled placeholder="Unavailable" /> },
      ]}
      tokenRows={[
        { prop: 'Field fill', token: '--sc-color-input-well', light: 'white 46%', dark: 'white 15%' },
        { prop: 'Field corner', token: '--sc-radius-field', light: '8px' },
        { prop: 'Inline padding', token: '--sc-space-component-padding-inline-input', light: '16px' },
        { prop: 'Block padding', token: '--sc-space-component-padding-block-input', light: '12px' },
        { prop: 'Slot gap', token: '--sc-space-component-gap-input-inline', light: '16px' },
        { prop: 'Title → field gap', token: '--sc-space-component-gap-input', light: '4px' },
        { prop: 'Icon', token: '--sc-size-input-icon', light: '20px · Phosphor bold' },
        { prop: 'Clear mark', token: '--sc-size-input-clear', light: '16px · Phosphor bold' },
        { prop: 'Icons, suffix, clear', token: '--sc-color-input-adornment' },
        { prop: 'Prefix rule', token: '--sc-color-input-divider' },
        { prop: 'Value type', token: '--sc-font-text-body-default', light: '16 / regular' },
        { prop: 'Title type', token: '--sc-font-text-label-ui', light: '12 / medium' },
        { prop: 'Subcopy, helper', token: '--sc-font-text-caption', light: '13 / regular' },
        { prop: 'Focus ring', token: '--sc-color-border-focus' },
        { prop: 'Error', token: '--sc-color-status-error' },
        { prop: 'Placeholder', token: '--sc-color-text-disabled' },
      ]}
      rulesTitle="Four rules for a field that stays quiet."
      rules={[
        { name: 'The title names the field', text: 'The label sits above and stays. Placeholders use disabled ink and vanish on input; they hint at format, they do not name the field.' },
        { name: 'Subcopy before, helper after', text: 'Guidance the user needs before typing goes in the subcopy under the title. Feedback about what they typed goes under the field, and an error replaces the helper.' },
        { name: 'Icons say what the field holds', text: 'A leading icon names the kind of value (search, email, place). A trailing icon is an action or a picker (reveal, copy, date). Both are Phosphor, bold.' },
        { name: 'No frame until it matters', text: 'The box carries no rule. Focus and error are the only states that draw an edge, so an edge always means something.' },
      ]}
    />
  );
}

/* ── 3.11 Alert ──────────────────────────────────────────── */
export function AlertPage() {
  return (
    <ComponentPage
      id="alert" label="Alert" tokensN={12} statesVariant="stack"
      eyebrow={<>Alert<Slash />signal on a left rule</>}
      title={<>A three-pixel rule carries the state. <Em>The banner stays calm.</Em></>}
      lead={<>Alerts mark status with a single coloured left rule, not a full tint. The banner ground stays sunk and predictable; the rule does the category-marking at the same visual weight as every other rule in the system. The colour informs, it does not shout.</>}
      statesTitle="Four states, one calm banner."
      callouts={[
        { title: 'Why a left rule, not a tint', body: 'Full tinted alerts read as decoration in a monochrome-with-accent register. A 3px rule signals state at chrome weight; the ground stays sunk and unobtrusive.' },
        { title: 'Colour informs, accessibility announces', body: 'Warning and error are assertive live regions (role="alert"); info and success are polite (role="status"). The category is never carried by colour alone.' },
        { title: 'Error is oxblood, not teal', body: 'The error rule pulls from status-error, deliberately off the brand teal band, so a danger banner and a brand surface can never be confused.' },
      ]}
      states={[
        { name: 'Info', token: '--sc-color-status-info', render: <Alert variant="info" title="Heads up">The brand site rebuilds on every push to main.</Alert> },
        { name: 'Success', token: '--sc-color-status-success', render: <Alert variant="success" title="Shipped">Sprint 5 merged and deployed to brand.shokunincrafthouse.com.</Alert> },
        { name: 'Warning', token: '--sc-color-status-warning', render: <Alert variant="warning" title="In review">Two approval gates remain before this can merge.</Alert> },
        { name: 'Error', token: '--sc-color-status-error', render: <Alert variant="error" title="Build failed">Token build exited non-zero. The previous deploy is still live.</Alert> },
      ]}
      tokenRows={[
        { prop: 'Padding', token: '--sc-space-component-padding-lg' },
        { prop: 'Title → body gap', token: '--sc-space-component-gap-md' },
        { prop: 'Radius', token: '--sc-radius-surface' },
        { prop: 'Frame', token: '--sc-border-width-default' },
        { prop: 'Left rule', token: '--sc-border-width-accent' },
        { prop: 'Ground', token: '--sc-color-surface-sunk' },
        { prop: 'Frame colour', token: '--sc-color-border-default' },
        { prop: 'Title', token: '--sc-color-text-primary' },
        { prop: 'Body', token: '--sc-color-text-secondary' },
        { prop: 'Info rule', token: '--sc-color-status-info' },
        { prop: 'Warning rule', token: '--sc-color-status-warning' },
        { prop: 'Error rule', token: '--sc-color-status-error' },
        { prop: 'Success rule', token: '--sc-color-status-success' },
      ]}
      rulesTitle="Four rules for a signal that stays calm."
      rules={[
        { name: 'The rule carries the state, not the ground', text: 'Never tint the whole banner. The 3px left rule is the signal; the sunk ground stays neutral so a screen of alerts does not become a wall of colour.' },
        { name: 'Match the role to the urgency', text: 'Error and warning interrupt (role="alert"); info and success wait (role="status"). A polite success that interrupts a screen reader is a bug.' },
        { name: 'Title states, body explains', text: 'The title names the state in two or three words; the body gives the one fact and the path forward. No alert without a next step.' },
        { name: 'Error is for failures, not warnings', text: 'Reserve the oxblood rule for something that broke or was rejected. A merely cautionary message is a warning — downgrading it keeps error meaningful.' },
      ]}
    />
  );
}

/* ── 3.9 Switch ──────────────────────────────────────────── */
export function SwitchPage() {
  return (
    <ComponentPage
      id="switch" label="Switch" tokensN={31}
      eyebrow={<>Switch<Slash />Drams Standard Switch, at our size</>}
      title={<>On is teal. <Em>The knob is an object.</Em></>}
      lead={<>The switch is an immediate binary: it flips instantly, the brand accent fills the track when on, and a short mechanical click confirms it. The form follows the Drams Standard Switch, a recessed track under a lit, lifted knob, at 40 × 22 with a 15px knob. The knob travels on a spring, stretches with its speed and leans toward its target when pressed, tuned in sc-tune (record 2026-10-07-1539). Every measurement, including the knob’s inset, its travel and the I/O marks, is derived by calc() from the size tokens.</>}
      statesTitle="Three states, no magic numbers."
      callouts={[
        { title: 'Thumb math, not thumb constants', body: 'Resting inset is (track-height − thumb) / 2; travel is track-width − thumb − 2 × inset. The I and O marks centre in the free zone either side of the knob and ride one row that moves with it.' },
        { title: 'A knob, not a dot', body: 'A light-catching rim gradient over a softer face gradient, lifted by the Drams six-layer shadow scaled ×0.45. The track is recessed by an inset. Depth says “press me” without a border.' },
        { title: 'On reads without colour', body: 'The I mark appears on the accent; the O ring sits on the off ground. Position, mark and colour all agree, so the state survives colour-blindness and greyscale.' },
        { title: 'It clicks', body: 'Each flip plays the toggle sound (Drams 004 toggle switch, by 1042.Studio). SoundProvider turns every interaction sound off app-wide; sound={false} opts one switch out.' },
      ]}
      states={[
        { name: 'Off', token: '--sc-color-surface-deep-sunk', render: <Switch checked={false} onChange={noop} label="Off" /> },
        { name: 'On', token: '--sc-color-brand-accent', render: <Switch checked onChange={noop} label="On" /> },
        { name: 'Disabled', token: '--sc-color-surface-sunk', render: <Switch disabled onChange={noop} label="Disabled" /> },
        { name: 'No glyphs', token: 'glyphs={false}', render: <Switch checked glyphs={false} onChange={noop} label="No glyphs" /> },
      ]}
      tokenRows={[
        { prop: 'Track width', token: '--sc-size-switch-track-width' },
        { prop: 'Track height', token: '--sc-size-switch-track-height' },
        { prop: 'Thumb', token: '--sc-size-switch-thumb' },
        { prop: 'I / O mark', token: '--sc-size-switch-glyph' },
        { prop: 'Radius', token: '--sc-radius-pill' },
        { prop: 'Off track', token: '--sc-color-surface-deep-sunk' },
        { prop: 'Off track · hover', token: '--sc-color-surface-hover' },
        { prop: 'On track', token: '--sc-color-brand-accent' },
        { prop: 'On track · hover', token: '--sc-color-brand-accent-fill' },
        { prop: 'Disabled track', token: '--sc-color-surface-sunk' },
        { prop: 'Track recess', token: '--sc-shadow-switch-track' },
        { prop: 'Knob rim', token: '--sc-color-switch-thumb-rim-top' },
        { prop: 'Knob rim · base', token: '--sc-color-switch-thumb-rim-bottom' },
        { prop: 'Knob face', token: '--sc-color-switch-thumb-face-top' },
        { prop: 'Knob face · base', token: '--sc-color-switch-thumb-face-bottom' },
        { prop: 'Knob lift', token: '--sc-shadow-switch-thumb' },
        { prop: 'I mark', token: '--sc-color-switch-glyph-on' },
        { prop: 'O ring', token: '--sc-color-switch-glyph-off' },
        { prop: 'Focus ring', token: '--sc-color-border-focus' },
        { prop: 'Ring weight', token: '--sc-border-width-focus' },
        { prop: 'Label type', token: '--sc-font-text-body-default', light: '16 / regular' },
        { prop: 'Switch → label', token: '--sc-space-component-gap-md' },
        { prop: 'Slide motion', token: '--sc-motion-reveal-duration', light: '200ms · quint-out' },
        { prop: 'Press', token: '--sc-motion-press-scale' },
      ]}
      rulesTitle="Four rules for an honest binary."
      rules={[
        { name: 'Switch is immediate, not deferred', text: 'Flipping it applies the change now. If a setting needs a save step, it is a checkbox in a form, not a switch.' },
        { name: 'On rests on the accent', text: 'The active track is teal — the deliberate exception to “the accent is never a resting state.” A committed toggle has earned the colour.' },
        { name: 'Disabled is visibly off the system', text: 'Disabled drops the track to sunk and flattens everything: no recess, no lift, no marks. It reads as switched-off-and-locked, never as merely off.' },
        { name: 'Label every switch', text: 'A switch with no label is a state with no name. The label says what is being turned on, in the body register, beside the control.' },
      ]}
    />
  );
}

/* ── 3.6 Avatar ──────────────────────────────────────────── */
export function AvatarPage() {
  return (
    <ComponentPage
      id="avatar" label="Avatar" tokensN={8}
      eyebrow={<>Avatar<Slash />four sizes, one fallback</>}
      title={<>Image first. <Em>Initials when it fails.</Em></>}
      lead={<>The avatar is a circle at one of four token-driven sizes. An image fills it; when there is no image, or the image fails to load, it falls back to initials on the sunk ground. The fallback is automatic — a broken image never shows.</>}
      statesTitle="Four sizes, two contents."
      callouts={[
        { title: 'The initials ratio is a calc, not a token', body: 'Initials are sized at 40% of the avatar diameter via calc(). The 0.4 keeps the letters proportional as the size token moves — a layout ratio, documented so it stays visible.' },
        { title: 'Failure falls back silently', body: 'On <img onError> the component flips to initials. A broken-image glyph never reaches the user — the fallback is the same as the no-image path.' },
        { title: 'What it refused', body: 'No presence dot, no status ring in Sprint 4. Those are composition concerns that belong to whatever places the avatar, not to the primitive.' },
      ]}
      states={[
        { name: 'xs · 24', token: '--sc-size-avatar-xs', render: <Avatar size="xs" name="Levi Bahn" /> },
        { name: 'sm · 32', token: '--sc-size-avatar-sm', render: <Avatar size="sm" name="Levi Bahn" /> },
        { name: 'md · 48', token: '--sc-size-avatar-md', render: <Avatar size="md" name="Levi Bahn" /> },
        { name: 'lg · 64', token: '--sc-size-avatar-lg', render: <Avatar size="lg" name="Levi Bahn" /> },
        { name: 'Image', token: '--sc-radius-pill', render: <Avatar size="lg" src={avatarImg} name="SC" /> },
        { name: 'Initials', token: '--sc-color-surface-sunk', render: <Avatar size="lg" name="Shokunin Crafthouse" /> },
      ]}
      tokenRows={[
        { prop: 'Size · xs', token: '--sc-size-avatar-xs' },
        { prop: 'Size · sm', token: '--sc-size-avatar-sm' },
        { prop: 'Size · md', token: '--sc-size-avatar-md' },
        { prop: 'Size · lg', token: '--sc-size-avatar-lg' },
        { prop: 'Radius', token: '--sc-radius-pill' },
        { prop: 'Fallback ground', token: '--sc-color-surface-sunk' },
        { prop: 'Initials ink', token: '--sc-color-text-primary' },
        { prop: 'Initials type', token: '--sc-font-text-label-chrome', light: '11 / medium / caps' },
        { prop: 'Edge', token: '--sc-color-border-default' },
      ]}
      rulesTitle="Four rules for a circle that never breaks."
      rules={[
        { name: 'Always pass a name', text: 'The name drives both the accessible label and the initials fallback. An avatar without a name is an unlabelled image and an empty circle waiting to happen.' },
        { name: 'Four sizes, no in-between', text: 'xs / sm / md / lg map to real layout roles — table row, default, prominent, feature. An off-ladder pixel size is a layout that has not decided what the avatar is for.' },
        { name: 'Initials are two characters', text: 'First and last initial, uppercase. One word gives its first two letters. More than two characters stops reading as a monogram.' },
        { name: 'The circle is fixed', text: 'No square or rounded-rect avatars. The pill radius is the form; changing it breaks the rhythm with every other avatar on the surface.' },
      ]}
    />
  );
}

/* ── 3.10 Progress ───────────────────────────────────────── */

// Slider demo: needs its own controlled value.
function SliderDemo({ initial = 0.3, label = 'Volume', disabled = false }) {
  const [value, setValue] = useState(initial);
  return (
    <div style={{ width: '100%' }}>
      <Slider value={value} onChange={setValue} label={label} disabled={disabled} />
    </div>
  );
}

export function ProgressPage() {
  return (
    <ComponentPage
      id="progress" label="Progress" tokensN={22}
      eyebrow={<>Progress<Slash />three shapes, one fill</>}
      title={<>Bar, ring, steps. <Accent>Teal</Accent> is always the <Em>fill.</Em></>}
      lead={<>Three indicators for three situations: a bar for a single continuous task, a ring for a compact or circular slot, steps for a discrete sequence. All three fill with the brand accent against a deep-sunk track, and the circular ring decouples its drawing from its size by maths, not magic. Every one is read, never touched, so all three stay flat. A value the user sets is a Slider.</>}
      statesTitle="Three variants, one fill colour."
      callouts={[
        { title: 'The ring decouples size from drawing', body: 'The SVG viewBox is a unitless 0–100; real size flows from the size token. Stroke width maps via calc(stroke / diameter * 100) so the ratio holds as either token moves.' },
        { title: 'Steps carry three sub-states', body: 'Done, current, and resting each pull their own ink and border from the semantic layer. The connector fills as each step completes.' },
        { title: 'Accent fills, never frames', body: 'Teal is the progress itself; the track is always deep-sunk. Progress is the one place the accent measures quantity, not intent.' },
        { title: 'Fill never fully disappears', body: 'The bar renders fill width as max(value%, track-height) — at 0 the fill still reads as a small pill the size of the track, never a blank line (Drams #3/#4 Line Volume / Volume Visible Track).' },
      ]}
      states={[
        { name: 'Bar', token: '--sc-size-progress-bar-height', render: <div style={{ width: '100%' }}><ProgressIndicator variant="bar" value={0.62} label="62 percent" /></div> },
        { name: 'Bar · tone progress, sunk track', token: '--sc-color-signal-progress', render: <div style={{ width: '100%' }}><ProgressIndicator variant="bar" tone="progress" track="sunk" value={0.1} label="All models, 10 percent" /></div> },
        { name: 'Bar · tone warning, sunk track', token: '--sc-color-status-warning', render: <div style={{ width: '100%' }}><ProgressIndicator variant="bar" tone="warning" track="sunk" value={0.84} label="84 percent" /></div> },
        { name: 'Circular', token: '--sc-size-progress-circular', render: <ProgressIndicator variant="circular" value={0.7} label="70 percent" /> },
        { name: 'Step', token: '--sc-color-border-strong', render: <ProgressIndicator variant="step" steps={4} current={2} /> },
      ]}
      tokenRows={[
        { prop: 'Bar height', token: '--sc-size-progress-bar-height' },
        { prop: 'Ring diameter', token: '--sc-size-progress-circular' },
        { prop: 'Ring stroke', token: '--sc-size-progress-circular-stroke' },
        { prop: 'Fill caps', token: '--sc-radius-pill' },
        { prop: 'Track', token: '--sc-color-surface-deep-sunk' },
        { prop: 'Fill', token: '--sc-color-brand-accent' },
        { prop: 'Done numeral', token: '--sc-color-text-on-accent' },
        { prop: 'Current numeral', token: '--sc-color-text-primary' },
        { prop: 'Resting numeral', token: '--sc-color-text-secondary' },
        { prop: 'Resting dot', token: '--sc-color-border-default' },
        { prop: 'Current dot', token: '--sc-color-border-strong' },
        { prop: 'Step gap', token: '--sc-space-component-gap-md' },
        { prop: 'Numeral type', token: '--sc-font-text-mono-chrome', light: 'mono 11 / caps' },
        { prop: 'Fill motion', token: '--sc-motion-reveal-duration', light: '200ms · quint-out' },
      ]}
      rulesTitle="Five rules for measuring with one colour."
      rules={[
        { name: 'Bar for one task, steps for a sequence', text: 'A continuous bar answers “how far”; numbered steps answer “which stage.” Using a bar for a multi-stage flow hides the stages the user needs to see.' },
        { name: 'The accent measures, the track holds', text: 'Fill is always teal, track always deep-sunk. Recolouring the fill by status would make progress compete with the alert system.' },
        { name: 'Circular for compact slots only', text: 'The ring is for a dashboard tile or an inline badge. For a page-width task, the bar reads the distance far better.' },
        { name: 'Steps are zero-based and honest', text: 'Current is the index in progress; everything before it is done, everything after resting. A “done” step the user has not finished is a lie the component must not tell.' },
        { name: 'A meter is never a control', text: 'Every variant is role="progressbar" and takes no drag or key. A value the user sets is a Slider: a progress bar a keyboard user can suddenly drag is a bug, not a feature.' },
      ]}
    />
  );
}

/* ── Slider ──────────────────────────────────────────────── */
export function SliderPage() {
  return (
    <ComponentPage
      id="slider" label="Slider" tokensN={32}
      eyebrow={<>Slider<Slash />new · Drams #5</>}
      title={<>Progress is read. <Em>A slider is moved.</Em></>}
      lead={<>A value the user sets by dragging or by keys: Drams' Standard Volume as a recessed track with a physical thumb, lit from the top left. Split from the progress bar, which stays a flat meter. A click or an arrow key sends the thumb along a spring; a drag trails the pointer.</>}
      statesTitle="Five states on one track."
      callouts={[
        { title: 'The thumb rides inside the track', body: 'Its centre runs from half a thumb in from each end, and the fill ends under it, so 0 and 100 never hang the thumb off the track.' },
        { title: 'The thumb carries the contrast', body: 'Teal on the track sits under the non-text line. The thumb is the cue that says where the value is, so it is the part that clears it.' },
        { title: 'Fill never fully disappears', body: 'Fill width is floored at the track height, so 0 still reads as a small pill, never a blank line (Drams #3/#4).' },
      ]}
      states={[
        { name: 'Default / hover', token: '--sc-color-slider-fill-hover', render: <SliderDemo initial={0.3} /> },
        { name: 'Low value (min-fill)', token: '--sc-size-slider-track', render: <SliderDemo initial={0.02} label="Low value" /> },
        { name: 'Disabled', token: '--sc-color-slider-fill-disabled', render: <SliderDemo initial={0.4} label="Disabled" disabled /> },
      ]}
      tokenRows={[
        { prop: 'Track', token: '--sc-color-slider-track' },
        { prop: 'Track recess', token: '--sc-shadow-slider-track' },
        { prop: 'Track height', token: '--sc-size-slider-track' },
        { prop: 'Track height, dragging', token: '--sc-size-slider-track-active' },
        { prop: 'Hit-slop padding', token: '--sc-size-slider-hit-slop' },
        { prop: 'Fill', token: '--sc-color-slider-fill' },
        { prop: 'Fill hover', token: '--sc-color-slider-fill-hover' },
        { prop: 'Thumb', token: '--sc-size-slider-thumb' },
        { prop: 'Thumb face', token: '--sc-color-slider-thumb-face-top', light: '135deg' },
        { prop: 'Thumb lift', token: '--sc-shadow-slider-thumb' },
        { prop: 'Disabled', token: '--sc-color-slider-fill-disabled' },
        { prop: 'Focus ring', token: '--sc-color-border-focus' },
        { prop: 'Seek motion', token: '--sc-motion-slider-travel-duration' },
        { prop: 'Drag motion', token: '--sc-motion-slider-drag-duration' },
      ]}
      rulesTitle="Three rules for a control you hold."
      rules={[
        { name: 'A slider sets, a meter reports', text: 'Use a Slider for a value the user chooses. For how far along something is, use ProgressIndicator; it never takes a drag or a key.' },
        { name: 'Keys and pointer reach the same values', text: 'Arrows step, Shift steps further, Home and End jump to the bounds. Anything a drag can set, a keyboard can set.' },
        { name: 'Disabled is flat', text: 'A disabled slider loses its recess, its lift and its face. Losing the material is the signal.' },
      ]}
    />
  );
}

/* ── 3.8 Tooltip ─────────────────────────────────────────── */
export function TooltipPage() {
  return (
    <ComponentPage
      id="tooltip" label="Tooltip" tokensN={11} statesVariant="stack"
      eyebrow={<>Tooltip<Slash />always the inverse</>}
      title={<>Dark on light. <Em>Light on dark. Always the opposite.</Em></>}
      lead={<>A tooltip is the one surface that always reads inverted from the page beneath it — ink in light mode, near-white in dark. That inversion is what makes it read as a layer above the document rather than part of it. Hover or focus the targets below to raise them.</>}
      statesTitle="Two states (hover to raise them)."
      callouts={[
        { title: 'The two inverse tokens', body: 'surface-inverse and text-on-inverse were added in Sprint 4 specifically for this. They swap mode roles so the tip is always the visual opposite of the surface it covers.' },
        { title: 'Hover and focus, not click', body: 'It opens on pointer-enter and on keyboard focus, so the tip is reachable without a mouse. It is a hint, never a control.' },
        { title: 'Multi-line caps its width', body: 'A wrapping tip is capped at a readable measure via calc() of a layout token, so a long note never stretches into a banner.' },
      ]}
      states={[
        { name: 'Single-line', token: '--sc-color-surface-inverse', render: <div style={tooltipStage}><Tooltip content="Saved to the binder."><span style={tooltipTarget}>Hover me</span></Tooltip></div> },
        { name: 'Multi-line', token: '--sc-space-layout-stack-xl', render: <div style={tooltipStage}><Tooltip multiline content="A longer note that wraps to two lines at the readable-measure cap."><span style={tooltipTarget}>Hover for more</span></Tooltip></div> },
      ]}
      tokenRows={[
        { prop: 'Ground', token: '--sc-color-surface-inverse' },
        { prop: 'Text', token: '--sc-color-text-on-inverse' },
        { prop: 'Inline padding', token: '--sc-space-component-padding-inline-md' },
        { prop: 'Block padding', token: '--sc-space-component-padding-block-md' },
        { prop: 'Arrow offset', token: '--sc-space-component-gap-md' },
        { prop: 'Radius', token: '--sc-radius-control' },
        { prop: 'Body type', token: '--sc-font-text-caption', light: '13 / regular' },
        { prop: 'Multi-line cap', token: '--sc-space-layout-stack-xl' },
        { prop: 'Reveal motion', token: '--sc-motion-reveal-duration', light: '200ms · quint-out' },
      ]}
      rulesTitle="Four rules for a layer above the page."
      rules={[
        { name: 'Always inverted, never tinted', text: 'The tip reads as the opposite of its ground. Giving it the page surface or a status colour collapses the layer back into the document.' },
        { name: 'A hint, not a home for actions', text: 'No buttons or links inside a tooltip — it vanishes on blur. Anything the user must click belongs in a popover, not here.' },
        { name: 'Reachable by keyboard', text: 'It opens on focus as well as hover. A tip that only a mouse can summon is content half the audience cannot read.' },
        { name: 'Short by default', text: 'Single-line, no period. Reach for multi-line only when one line genuinely cannot carry the note, and let the width cap hold.' },
      ]}
    />
  );
}
/* The state grid clips its overflow, so the raised tip needs room inside the
   cell: stack-xl above the trigger, and the trigger centred so the tip's
   overhang clears both edges. The page uses the stack variant because a
   two-column cell at 768 is narrower than the 240 multi-line cap. */
const tooltipStage = { flex: 1, display: 'flex', justifyContent: 'center', paddingTop: 'var(--sc-space-layout-stack-xl)' };
const tooltipTarget = { font: 'var(--sc-font-text-body-default)', color: 'var(--sc-color-text-primary)', borderBottom: 'var(--sc-border-width-default) dashed var(--sc-color-border-strong)', cursor: 'help' };

/* ── 3.5 Divider ─────────────────────────────────────────── */
export function DividerPage() {
  return (
    <ComponentPage
      id="divider" label="Divider" tokensN={5}
      eyebrow={<>Divider<Slash />the hairline</>}
      title={<>One rule weight. <Em>A label when the gap needs naming.</Em></>}
      lead={<>The divider is the quietest component in the system: a single hairline at the default border weight. It runs horizontal or vertical, and when a separation needs a name it carries a mono-caps label between two rules. No raw values touch it — every pixel is a token.</>}
      statesTitle="Three orientations."
      callouts={[
        { title: 'Mode handled by the cascade', body: 'The divider does no theme work itself. border-default and text-secondary flip in tokens.css, so the same component reads correctly in both modes for free.' },
        { title: 'The label sits in the chrome register', body: 'Its text is mono caps — the same apparatus voice as eyebrows and badges — so a labelled divider belongs to the chrome, not the body.' },
        { title: 'Vertical earns inline breathing room', body: 'A vertical divider adds a small inline gap so it never kisses the content on either side.' },
      ]}
      states={[
        { name: 'Horizontal', token: '--sc-color-border-default', render: <div style={{ width: '100%' }}><Divider /></div> },
        { name: 'With label', token: '--sc-font-text-mono-chrome', render: <div style={{ width: '100%' }}><Divider label="or" /></div> },
        { name: 'Vertical', token: '--sc-space-component-gap-sm', render: <span style={{ display: 'inline-flex', alignItems: 'center', font: 'var(--sc-font-text-body-dense)', color: 'var(--sc-color-text-secondary)' }}>Studio<Divider orientation="vertical" />Work<Divider orientation="vertical" />Contact</span> },
      ]}
      tokenRows={[
        { prop: 'Rule colour', token: '--sc-color-border-default' },
        { prop: 'Rule weight', token: '--sc-border-width-default' },
        { prop: 'Label type', token: '--sc-font-text-mono-chrome', light: 'mono 11 / caps' },
        { prop: 'Label colour', token: '--sc-color-text-secondary' },
        { prop: 'Inline / label gap', token: '--sc-space-component-gap-md' },
      ]}
      rulesTitle="Three rules for the quietest component."
      rules={[
        { name: 'One weight only', text: 'Dividers are the default border weight, never heavier. A bold divider competes with the content it is meant to separate.' },
        { name: 'Label only when the gap means something', text: 'Reach for the labelled divider when the separation has a name — “or”, a date, a section. A label on a purely visual break is noise.' },
        { name: 'Vertical needs height', text: 'A vertical divider only reads inside a row with height — between inline items or columns. On its own it collapses to nothing.' },
      ]}
    />
  );
}

/* ── 3.7 NavBar ──────────────────────────────────────────── */
export function NavBarPage() {
  const links = [
    { href: '#navbar', label: 'Work', current: true },
    { href: '#type', label: 'Studio' },
    { href: '#color', label: 'Contact' },
  ];
  return (
    <ComponentPage
      id="navbar" label="NavBar" tokensN={13} statesVariant="stack"
      eyebrow={<>NavBar<Slash />current is the only accent</>}
      title={<>Links recede. <Accent>The current page</Accent> is the one that <Em>holds teal.</Em></>}
      lead={<>The navigation floats on the page ground and stays out of the way: resting links sit in ink, hover turns teal, and the current page — driven entirely by aria-current — is the single link that holds the accent. The compact variant folds the same links into a toggle for narrow chrome.</>}
      statesTitle="Two layouts, one link model."
      callouts={[
        { title: 'aria-current drives the colour', body: 'The current link is coloured by the [aria-current="page"] selector, not a class. Accessibility and appearance come from the same source of truth.' },
        { title: 'Floats on the page ground', body: 'The bar background matches the page surface, so it reads as floating above content rather than as a separate tinted band.' },
        { title: 'Compact folds, it does not shrink', body: 'The compact variant moves the same links into an expandable menu. Nothing is dropped — the link model is identical to desktop.' },
      ]}
      states={[
        { name: 'Desktop · horizontal', token: '--sc-color-brand-accent-ink', render: <NavBar brand={<span style={navBrand}>Shokunin</span>} links={links} trailing={<Button variant="secondary">Start a project</Button>} /> },
        { name: 'Compact · toggle', token: '--sc-space-layout-inset-md', render: <NavBar compact brand={<span style={navBrand}>Shokunin</span>} links={links} trailing={<Button variant="primary">Start</Button>} /> },
      ]}
      tokenRows={[
        { prop: 'Nav inset', token: '--sc-space-layout-inset-md' },
        { prop: 'Link padding', token: '--sc-space-component-padding-inline-md' },
        { prop: 'Inter-link gap', token: '--sc-space-component-gap-lg' },
        { prop: 'Hairline weight', token: '--sc-border-width-default' },
        { prop: 'Hairline colour', token: '--sc-color-border-default' },
        { prop: 'Nav ground', token: '--sc-color-surface-page' },
        { prop: 'Resting link', token: '--sc-color-text-primary' },
        { prop: 'Hover link', token: '--sc-color-interactive-hover' },
        { prop: 'Current link', token: '--sc-color-brand-accent-ink' },
        { prop: 'Link type', token: '--sc-font-text-body-dense', light: '14 / regular' },
        { prop: 'Brand type', token: '--sc-font-text-label-chrome', light: '11 / medium / caps' },
        { prop: 'Hover motion', token: '--sc-motion-hover-duration', light: '200ms' },
      ]}
      rulesTitle="Four rules for navigation that stays out of the way."
      rules={[
        { name: 'One current, marked by aria-current', text: 'Exactly one link carries aria-current="page", and that link — and only that link — holds the accent. The colour follows the attribute, never a hand-set class.' },
        { name: 'Resting links recede', text: 'Links sit in ink and turn teal only on hover. A nav where every link is coloured has no way to show where you are.' },
        { name: 'Float, do not band', text: 'The bar matches the page ground with a hairline underneath. A tinted nav band belongs to a louder system than this one.' },
        { name: 'Compact keeps the model', text: 'The toggle reveals the same links in the same order. Narrow chrome changes the layout, never the information.' },
      ]}
    />
  );
}
const navBrand = { font: 'var(--sc-font-text-label-chrome)', letterSpacing: 'var(--sc-font-text-label-chrome-letter-spacing)', textTransform: 'uppercase', color: 'var(--sc-color-text-primary)' };

/* ── NEW · SegmentedControl ──────────────────────────────── */

const VIEW_OPTIONS = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
];

const ON_YOU_OPTIONS = [
  { value: 'waiting', label: 'Waiting on you', count: 1 },
  { value: 'blocked', label: 'Blocked on you', count: 3 },
];

function SegmentedControlDemo({ defaultValue = 'week', disabled = false, options = VIEW_OPTIONS, size }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <SegmentedControl
      options={options}
      value={value}
      onChange={setValue}
      disabled={disabled}
      size={size}
      label="View"
    />
  );
}

export function SegmentedControlPage() {
  return (
    <ComponentPage
      id="segmented-control" label="Segmented Control" tokensN={13}
      eyebrow={<>Segmented Control<Slash />new · Drams #7</>}
      title={<>One of three. <Em>The fill slides, never the border.</Em></>}
      lead={<>A one-of-N selector for view/mode switches — Drams' 3-Way Switch mapped onto the studio's fill-only elevation model. The track sinks; the selected segment raises on the floating surface with no border or shadow, and a measured indicator slides beneath the label as selection moves.</>}
      statesTitle="Five states, one radiogroup."
      callouts={[
        { title: 'Fill-only elevation, on purpose', body: 'The selected segment lifts via surface-floating alone — no border, no shadow. It shares the fill-only logic Cards and Buttons now carry, taken to its limit here because at this scale even a hairline would read as a grid line, not a selection.' },
        { title: 'The indicator is measured, not divided', body: 'It does not assume equal-width segments. Its left/width come from getBoundingClientRect() on the selected button, re-measured on selection, option-count, size, and resize changes — so "Month" and "Day" can be different widths without the slide looking wrong.' },
        { title: 'Arrow keys select, not just focus', body: 'This is the WAI-ARIA radiogroup pattern, not a tab-through list: an arrow key both moves focus and changes the value in one action, matching how a native radio group already behaves.' },
      ]}
      states={[
        { name: 'Default (2-way)', token: '--sc-color-surface-floating', render: <SegmentedControlDemo defaultValue="day" /> },
        { name: 'Selected · middle', token: '--sc-radius-pill', render: <SegmentedControlDemo defaultValue="week" /> },
        { name: 'Hover (hover a segment)', token: '--sc-color-text-primary', render: <SegmentedControlDemo defaultValue="month" /> },
        { name: 'Focus (tab to a segment)', token: '--sc-color-border-focus', render: <SegmentedControlDemo defaultValue="day" /> },
        { name: 'Disabled', token: '--sc-color-text-disabled', render: <SegmentedControlDemo defaultValue="week" disabled /> },
        { name: 'Large · with counts', token: '--sc-font-text-label-tab', render: <SegmentedControlDemo defaultValue="waiting" options={ON_YOU_OPTIONS} size="lg" /> },
      ]}
      tokenRows={[
        { prop: 'Track ground', token: '--sc-color-surface-sunk' },
        { prop: 'Selected fill', token: '--sc-color-surface-floating' },
        { prop: 'Unselected text', token: '--sc-color-text-secondary' },
        { prop: 'Selected text', token: '--sc-color-text-primary' },
        { prop: 'Disabled text', token: '--sc-color-text-disabled' },
        { prop: 'Focus ring', token: '--sc-color-border-focus' },
        { prop: 'Radius', token: '--sc-radius-pill' },
        { prop: 'Segment gap', token: '--sc-space-component-gap-sm' },
        { prop: 'Track inset', token: '--sc-space-component-padding-sm' },
        { prop: 'Segment inline padding', token: '--sc-space-component-padding-inline-md' },
        { prop: 'Segment block padding', token: '--sc-space-component-padding-block-md' },
        { prop: 'Label type', token: '--sc-font-text-body-dense', light: '14 / regular' },
        { prop: 'Indicator motion', token: '--sc-motion-reveal-duration', light: '200ms · quint-out' },
      ]}
      rulesTitle="Four rules for a selector that never argues with a border."
      rules={[
        { name: 'One of N, always exactly one', text: 'A segmented control always has a selection — there is no "none" state. If the UI needs an unset/all option, add it as an explicit segment rather than allowing nothing to be checked.' },
        { name: 'Fill is the only signal', text: 'No border, no shadow, ever — on the track or the indicator. Reaching for a stroke here to "make selection clearer" breaks the elevation model the whole control is built on.' },
        { name: 'Options stay short', text: 'Segment labels are one word or a short numeral (Day/Week/Month, 1/2/3). A segment that wraps to two lines has outgrown this component — reach for tabs or a select instead.' },
        { name: 'Never nest a segmented control in a segmented control', text: 'It is a flat, single-level chooser. A control that needs sub-choices per segment is describing a different information architecture, not a sizing problem.' },
      ]}
    />
  );
}

/* ── NEW · Stepper ───────────────────────────────────────── */

function StepperDemo({ defaultValue = 4, min = 0, max = 10, disabled = false }) {
  const [value, setValue] = useState(defaultValue);
  return <Stepper value={value} onChange={setValue} min={min} max={max} label="Quantity" disabled={disabled} />;
}

export function StepperPage() {
  return (
    <ComponentPage
      id="stepper" label="Stepper" tokensN={29}
      eyebrow={<>Stepper<Slash />new · Drams #8</>}
      title={<>Minus. Number. Plus. <Em>Nothing else on the control.</Em></>}
      lead={<>A bounded numeric increment/decrement: Drams' Plus Minus Knob as two small keys on a recessed pill, lit from the top left like the Button key. The numeral sits flat in a two-digit mono readout, so the keys never move from 9 to 10, and rolls in from the direction of the step. Holding either key repeats until released.</>}
      statesTitle="Five states per button, one shared readout."
      callouts={[
        { title: 'Bounds disable, they do not just visually gray out', body: '± buttons use native disabled at min/max — computed from value against min/max on every render, never a separate flag a caller has to remember to set.' },
        { title: 'The readout is a spinbutton, not a label', body: 'role="spinbutton" with Up/Down keys lets a keyboard user step the value without ever tabbing to a ± button — the numeral is the control, not just its display.' },
        { title: 'Hold-to-repeat cancels on leave, not just on release', body: 'pointerleave clears the repeat interval the same as pointerup — dragging off the button while holding it down cannot leave a runaway repeat firing in the background.' },
      ]}
      states={[
        { name: 'Default', token: '--sc-color-stepper-key', render: <StepperDemo defaultValue={4} /> },
        { name: 'Hover (hover a key)', token: '--sc-color-stepper-key-hover', render: <StepperDemo defaultValue={5} /> },
        { name: 'Focus (tab to a key)', token: '--sc-color-border-focus', render: <StepperDemo defaultValue={3} /> },
        { name: 'At min (− disabled)', token: '--sc-color-text-disabled', render: <StepperDemo defaultValue={0} min={0} max={10} /> },
        { name: 'Disabled', token: '--sc-color-text-disabled', render: <StepperDemo defaultValue={4} disabled /> },
      ]}
      tokenRows={[
        { prop: 'Pill ground', token: '--sc-color-stepper-track' },
        { prop: 'Pill recess', token: '--sc-shadow-stepper-track', light: 'inset top left' },
        { prop: 'Key face', token: '--sc-color-stepper-key', light: '= surface.raised (Button key)' },
        { prop: 'Key face shade', token: '--sc-color-stepper-key-shade', light: '135deg' },
        { prop: 'Key lift', token: '--sc-shadow-stepper-key', light: '= shadow.control.key' },
        { prop: 'Key hover', token: '--sc-color-stepper-key-hover', light: '= Button hover (teal.600)' },
        { prop: 'Key hover glyph', token: '--sc-color-stepper-key-hover-ink', light: 'white' },
        { prop: 'Key pressed', token: '--sc-color-stepper-key-pressed', light: 'teal.700' },
        { prop: 'Key pressed glyph', token: '--sc-color-stepper-key-pressed-ink', light: 'white' },
        { prop: 'Disabled ink', token: '--sc-color-text-disabled' },
        { prop: 'Focus ring', token: '--sc-color-border-focus' },
        { prop: 'Radius (control)', token: '--sc-radius-pill' },
        { prop: 'Readout focus radius', token: '--sc-radius-control' },
        { prop: 'Glyph size', token: '--sc-size-icon-md' },
        { prop: 'Key → readout gap', token: '--sc-space-component-gap-stepper', light: '8px' },
        { prop: 'Control inset', token: '--sc-space-component-padding-sm' },
        { prop: 'Numeral type', token: '--sc-font-text-mono-body', light: 'mono 16 / regular' },
        { prop: 'Readout roll', token: '--sc-motion-stepper-roll', light: '1 height · stretch 0.45 · 1062ms spring' },
        { prop: 'Hover motion', token: '--sc-motion-hover-duration', light: '200ms' },
        { prop: 'Press motion', token: '--sc-motion-press-duration', light: '160ms · outStrong' },
        { prop: 'Press scale', token: '--sc-motion-press-scale', light: '0.985 key · 0.85 glyph' },
      ]}
      rulesTitle="Four rules for a control that only ever does one thing."
      rules={[
        { name: 'The numeral is always the source of truth', text: 'The readout shows the live value, not a formatted approximation. Whatever value onChange last committed is exactly what is on screen.' },
        { name: 'Never let the control silently clamp past a bound', text: 'Hitting min or max disables that button rather than wrapping or silently refusing the step. A stepper that wraps from max back to min without saying so is a stepper lying about the number.' },
        { name: 'Hold-to-repeat has one speed, not an accelerating one', text: 'The repeat interval is constant (80ms) after the 400ms arm delay. An accelerating repeat is a nicety this control deliberately skipped — predictability over speed.' },
        { name: 'No border, ever', text: 'The control reads as a soft, sunk pill — matching the sunk-surface language used elsewhere (Input filled state, Card default). A stroke here would put it in the same register as a bordered input, which it is not.' },
      ]}
    />
  );
}

/* ── Working Mark ────────────────────────────────────────── */
export function WorkingMarkPage() {
  return (
    <ComponentPage
      id="working-mark" label="Working Mark" tokensN={7}
      eyebrow={<>Working Mark<Slash />a scribble that keeps drawing</>}
      title={<>Something is <Accent>working</Accent> <Em>right now.</Em></>}
      lead={<>A hand-drawn scribble of eleven loops for the one moment a surface needs to say that work is happening and cannot say how long it will take. Each loop spins and pulses on its own phase, neighbours turning opposite ways, while a highlight sweeps round the whole mark faster than the loops turn. Live vector, seamless every 3.2 seconds, and still under reduced motion.</>}
      statesTitle="Working, paused, and reduced motion. Three sizes from the icon scale."
      callouts={[
        { title: 'Spin, pulse, shimmer', body: 'Each loop turns once per 1.6s beat and shrinks to 80% and back. The highlight goes round 2.5 times per beat, mixing the on-accent ink into the teal up to 80%.' },
        { title: 'Seamless by construction', body: 'Spin and pulse repeat every beat, the shimmer every two. Frame 0 and frame 3200ms are identical, so the loop never jumps.' },
        { title: 'The accent means something is acting', body: 'Paused is the same drawing, still, in secondary ink, with no shimmer. Teal appears only while work is actually running.' },
      ]}
      states={[
        { name: 'Working · sm', token: '--sc-color-brand-accent', render: <WorkingMark /> },
        { name: 'Working · md', token: '--sc-size-icon-md', render: <WorkingMark size="md" /> },
        { name: 'Working · lg', token: '--sc-size-icon-lg', render: <WorkingMark size="lg" /> },
        { name: 'Paused', token: '--sc-color-text-secondary', render: <WorkingMark working={false} size="lg" /> },
      ]}
      tokenRows={[
        { prop: 'Working ink', token: '--sc-color-brand-accent' },
        { prop: 'Shimmer highlight', token: '--sc-color-text-on-accent', light: 'mixed 80% into the accent' },
        { prop: 'Paused ink', token: '--sc-color-text-secondary' },
        { prop: 'Size (sm)', token: '--sc-size-icon-sm' },
        { prop: 'Size (md)', token: '--sc-size-icon-md' },
        { prop: 'Size (lg)', token: '--sc-size-icon-lg' },
        { prop: 'Pulse curve', token: '--sc-motion-cut-easing', light: 'in-out · 1600ms beat' },
      ]}
      rulesTitle="Three rules for the one mark that moves on its own."
      rules={[
        { name: 'Only while it is true', text: 'Render it working only when something is running at this moment. A working mark on a stopped task is a lie the component must not tell; pass working={false} or show the resting marker instead.' },
        { name: 'One per item, never a field of them', text: 'It marks the current step of one task. A screen of animating marks is noise; if many things are running, mark each item, not the page.' },
        { name: 'Reduced motion keeps the meaning', text: 'Under prefers-reduced-motion the drawing stays, in accent, at rest. Colour and shape still say working; only the movement goes.' },
      ]}
    />
  );
}
