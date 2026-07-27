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
import { Alert } from '../components/Alert/Alert.jsx';
import { Switch } from '../components/Switch/Switch.jsx';
import { Avatar } from '../components/Avatar/Avatar.jsx';
import { ProgressIndicator } from '../components/ProgressIndicator/ProgressIndicator.jsx';
import { Tooltip } from '../components/Tooltip/Tooltip.jsx';
import { Divider } from '../components/Divider/Divider.jsx';
import { NavBar } from '../components/NavBar/NavBar.jsx';
import { SegmentedControl } from '../components/SegmentedControl/SegmentedControl.jsx';
import { Stepper } from '../components/Stepper/Stepper.jsx';
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
      ]}
      tokenRows={[
        { prop: 'Inline padding', token: '--sc-space-component-padding-inline-md' },
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
        { name: 'Default', token: '--sc-color-brand-accent', render: <Badge>Studio</Badge> },
        { name: 'Success', token: '--sc-color-status-success', render: <Badge variant="success">Shipped</Badge> },
        { name: 'Warning', token: '--sc-color-status-warning', render: <Badge variant="warning">In review</Badge> },
        { name: 'Error', token: '--sc-color-status-error', render: <Badge variant="error">Failed</Badge> },
        { name: 'Neutral', token: '--sc-color-text-secondary', render: <Badge variant="neutral">Draft</Badge> },
      ]}
      tokenRows={[
        { prop: 'Inline padding', token: '--sc-space-component-padding-inline-sm' },
        { prop: 'Block padding', token: '--sc-space-component-padding-block-sm' },
        { prop: 'Radius', token: '--sc-radius-control' },
        { prop: 'Outline', token: '--sc-border-width-default' },
        { prop: 'Label type', token: '--sc-font-text-mono-chrome', light: 'mono 11 / caps' },
        { prop: 'Default colour', token: '--sc-color-brand-accent' },
        { prop: 'Success colour', token: '--sc-color-status-success' },
        { prop: 'Warning colour', token: '--sc-color-status-warning' },
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
      id="card" label="Card" tokensN={9}
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
        { name: 'Default', token: '--sc-color-surface-sunk', render: <Card><CardBody>A set-in tile against the page.</CardBody></Card> },
        { name: 'Interactive · hover', token: '--sc-shadow-control-inset', render: <Card variant="interactive" onClick={noop}><CardBody>Hover or focus me.</CardBody></Card> },
        { name: 'Elevated', token: '--sc-color-surface-page', render: <Card variant="elevated"><CardBody>Page ground, lifted by fill.</CardBody></Card> },
      ]}
      tokenRows={[
        { prop: 'Padding', token: '--sc-space-component-padding-lg' },
        { prop: 'Radius', token: '--sc-radius-surface' },
        { prop: 'Frame', token: '--sc-border-width-default' },
        { prop: 'Text', token: '--sc-color-text-primary' },
        { prop: 'Default ground', token: '--sc-color-surface-sunk' },
        { prop: 'Hover ground', token: '--sc-color-surface-deep-sunk' },
        { prop: 'Elevated ground', token: '--sc-color-surface-page' },
        { prop: 'Elevated frame', token: '--sc-color-border-strong' },
        { prop: 'Hover motion', token: '--sc-motion-hover-duration', light: '200ms' },
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
export function InputPage() {
  return (
    <ComponentPage
      id="input" label="Input" tokensN={18}
      eyebrow={<>Input<Slash />the field that earns its frame</>}
      title={<>Empty is quiet. <Accent>Filled</Accent> earns a <Em>darker frame.</Em></>}
      lead={<>The border tells the story: a resting field sits at the same weight as its card, focus turns the frame teal, and once content lands the frame strengthens to ink. The state is legible from the border alone, no colour wash required.</>}
      statesTitle="Five states, read from the border."
      callouts={[
        { title: 'Why filled earns border-strong', body: 'An empty field sits at card weight. Once content lands the field has earned a stronger frame — ink in light, near-white in dark — asserting the active control without changing colour.' },
        { title: 'Focus is carried by the border', body: 'The native outline is suppressed; the border turns to the focus colour instead. One frame does both jobs, so the control never wears two rings.' },
        { title: 'Error replaces the helper', body: 'When error is set, the helper text is the error text — the field never shows guidance and a failure at the same time.' },
      ]}
      states={[
        { name: 'Default', token: '--sc-color-border-default', render: <Input label="Email" placeholder="you@studio.com" /> },
        { name: 'Focus', token: '--sc-color-border-focus', render: <Input label="Focus (tab in)" placeholder="The border turns teal" /> },
        { name: 'Filled', token: '--sc-color-border-strong', render: <Input label="Filled" defaultValue="levi@levibahn.com" /> },
        { name: 'Error', token: '--sc-color-status-error', render: <Input label="Email" error="That isn’t an email yet." defaultValue="levi@" /> },
        { name: 'Disabled', token: '--sc-color-surface-sunk', render: <Input label="Disabled" disabled placeholder="Unavailable" /> },
      ]}
      tokenRows={[
        { prop: 'Inline padding', token: '--sc-space-component-padding-inline-md' },
        { prop: 'Block padding', token: '--sc-space-component-padding-block-md' },
        { prop: 'Label → field gap', token: '--sc-space-component-gap-sm' },
        { prop: 'Radius', token: '--sc-radius-control' },
        { prop: 'Border', token: '--sc-border-width-default' },
        { prop: 'Value type', token: '--sc-font-text-body-default', light: '16 / regular' },
        { prop: 'Label type', token: '--sc-font-text-label-ui', light: '12 / medium' },
        { prop: 'Input ground', token: '--sc-color-surface-page' },
        { prop: 'Disabled ground', token: '--sc-color-surface-sunk' },
        { prop: 'Resting border', token: '--sc-color-border-default' },
        { prop: 'Filled border', token: '--sc-color-border-strong' },
        { prop: 'Focus border', token: '--sc-color-border-focus' },
        { prop: 'Error', token: '--sc-color-status-error' },
        { prop: 'Value ink', token: '--sc-color-text-primary' },
        { prop: 'Label / helper', token: '--sc-color-text-secondary' },
        { prop: 'Placeholder', token: '--sc-color-text-disabled' },
      ]}
      rulesTitle="Four rules for a field that speaks in borders."
      rules={[
        { name: 'State lives in the border, not a wash', text: 'Default, focus, filled, error each move only the border colour (error also flips the helper). No tinted backgrounds — the frame carries the whole signal.' },
        { name: 'Helper or error, never both', text: 'Error text occupies the helper slot. A field showing instructions and a failure at once is a field that buried its own error.' },
        { name: 'Placeholder is not a label', text: 'The label sits above and stays. Placeholders use disabled ink and vanish on input — they hint at format, they do not name the field.' },
        { name: 'Disabled is the only grounded state', text: 'Only disabled changes the ground (to sunk). Every other state keeps the page ground so the field reads as live until it is explicitly switched off.' },
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
      id="switch" label="Switch" tokensN={19}
      eyebrow={<>Switch<Slash />geometry from tokens</>}
      title={<>On is teal. <Em>The thumb travel is pure arithmetic.</Em></>}
      lead={<>The switch is an immediate binary — it flips instantly and the brand accent fills the track when on. Every measurement, including the thumb’s resting inset and its travel distance, is derived by calc() from the size tokens, so the geometry survives any change to the scale.</>}
      statesTitle="Three states, no magic numbers."
      callouts={[
        { title: 'Thumb math, not thumb constants', body: 'Resting inset is (track-height − thumb) / 2; travel is track-width − thumb − inset. Move the size tokens and the thumb still sits centred with the same 2px ring.' },
        { title: 'On means brand', body: 'The active track is brand-accent — the one place a control rests on teal, because an on-switch is a committed state, not an idle one.' },
        { title: 'What it refused', body: 'No size variants. A switch is a switch; scaling it invites it to stand in for a button. One size keeps the affordance unambiguous.' },
      ]}
      states={[
        { name: 'Off', token: '--sc-color-surface-deep-sunk', render: <Switch checked={false} onChange={noop} label="Off" /> },
        { name: 'On', token: '--sc-color-brand-accent', render: <Switch checked onChange={noop} label="On" /> },
        { name: 'Disabled', token: '--sc-color-text-disabled', render: <Switch disabled onChange={noop} label="Disabled" /> },
      ]}
      tokenRows={[
        { prop: 'Track width', token: '--sc-size-switch-track-width' },
        { prop: 'Track height', token: '--sc-size-switch-track-height' },
        { prop: 'Thumb', token: '--sc-size-switch-thumb' },
        { prop: 'Radius', token: '--sc-radius-pill' },
        { prop: 'Off track', token: '--sc-color-surface-deep-sunk' },
        { prop: 'On track', token: '--sc-color-brand-accent' },
        { prop: 'Disabled track', token: '--sc-color-surface-sunk' },
        { prop: 'Thumb fill', token: '--sc-color-surface-page' },
        { prop: 'Thumb edge', token: '--sc-color-border-default' },
        { prop: 'Focus ring', token: '--sc-color-border-focus' },
        { prop: 'Ring weight', token: '--sc-border-width-focus' },
        { prop: 'Label type', token: '--sc-font-text-body-default', light: '16 / regular' },
        { prop: 'Switch → label', token: '--sc-space-component-gap-md' },
        { prop: 'Slide motion', token: '--sc-motion-reveal-duration', light: '200ms · quint-out' },
      ]}
      rulesTitle="Four rules for an honest binary."
      rules={[
        { name: 'Switch is immediate, not deferred', text: 'Flipping it applies the change now. If a setting needs a save step, it is a checkbox in a form, not a switch.' },
        { name: 'On rests on the accent', text: 'The active track is teal — the deliberate exception to “the accent is never a resting state.” A committed toggle has earned the colour.' },
        { name: 'Disabled is visibly off the system', text: 'Disabled drops the track to sunk and the thumb edge to disabled ink. It reads as switched-off-and-locked, never as merely off.' },
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

// Interactive bar demo — needs its own controlled value, so it is a
// small stateful wrapper rather than a bare <ProgressIndicator /> render.
function InteractiveBarDemo() {
  const [value, setValue] = useState(0.3);
  return (
    <div style={{ width: '100%' }}>
      <ProgressIndicator variant="bar" interactive value={value} onChange={setValue} label="Volume" />
    </div>
  );
}

function InteractiveBarLowValueDemo() {
  const [value, setValue] = useState(0.02);
  return (
    <div style={{ width: '100%' }}>
      <ProgressIndicator variant="bar" interactive value={value} onChange={setValue} label="Low value" />
    </div>
  );
}

function InteractiveBarDisabledDemo() {
  const [value] = useState(0.4);
  return (
    <div style={{ width: '100%' }}>
      <ProgressIndicator variant="bar" interactive value={value} disabled label="Disabled" />
    </div>
  );
}

export function ProgressPage() {
  return (
    <ComponentPage
      id="progress" label="Progress" tokensN={22}
      eyebrow={<>Progress<Slash />three shapes, one fill</>}
      title={<>Bar, ring, steps. <Accent>Teal</Accent> is always the <Em>fill.</Em></>}
      lead={<>Three indicators for three situations: a bar for a single continuous task, a ring for a compact or circular slot, steps for a discrete sequence. All three fill with the brand accent against a deep-sunk track, and the circular ring decouples its drawing from its size by maths, not magic. The bar also comes in an interactive form — Drams' Standard Volume reference — that turns the same track into a scrubbable, keyboard-operable slider.</>}
      statesTitle="Three variants, one fill colour — plus the interactive bar's own five states."
      callouts={[
        { title: 'The ring decouples size from drawing', body: 'The SVG viewBox is a unitless 0–100; real size flows from the size token. Stroke width maps via calc(stroke / diameter * 100) so the ratio holds as either token moves.' },
        { title: 'Steps carry three sub-states', body: 'Done, current, and resting each pull their own ink and border from the semantic layer. The connector fills as each step completes.' },
        { title: 'Accent fills, never frames', body: 'Teal is the progress itself; the track is always deep-sunk. Progress is the one place the accent measures quantity, not intent.' },
        { title: 'The interactive bar is thumbless', body: 'No handle ever renders. Dragging thickens the track itself (4px → 6px) — the affordance is the track’s own weight changing, not a circle riding on top of it.' },
        { title: 'Fill never fully disappears', body: 'Both bar forms render fill width as max(value%, track-height) — at 0 the fill still reads as a small pill the size of the track, never a blank line (Drams #3/#4 Line Volume / Volume Visible Track).' },
      ]}
      states={[
        { name: 'Bar', token: '--sc-size-progress-bar-height', render: <div style={{ width: '100%' }}><ProgressIndicator variant="bar" value={0.62} label="62 percent" /></div> },
        { name: 'Circular', token: '--sc-size-progress-circular', render: <ProgressIndicator variant="circular" value={0.7} label="70 percent" /> },
        { name: 'Step', token: '--sc-color-border-strong', render: <ProgressIndicator variant="step" steps={4} current={2} /> },
        { name: 'Interactive · default/hover', token: '--sc-color-interactive-hover', render: <InteractiveBarDemo /> },
        { name: 'Interactive · low value (min-fill)', token: '--sc-size-progress-bar-height', render: <InteractiveBarLowValueDemo /> },
        { name: 'Interactive · disabled', token: '--sc-color-text-disabled', render: <InteractiveBarDisabledDemo /> },
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
        { prop: 'Interactive · active track height', token: '--sc-size-progress-bar-height-active' },
        { prop: 'Interactive · hit-slop padding', token: '--sc-size-progress-hit-slop' },
        { prop: 'Interactive · hover fill', token: '--sc-color-interactive-hover' },
        { prop: 'Interactive · disabled fill', token: '--sc-color-text-disabled' },
        { prop: 'Interactive · disabled track', token: '--sc-color-surface-sunk' },
        { prop: 'Interactive · focus ring', token: '--sc-color-border-focus' },
      ]}
      rulesTitle="Five rules for measuring with one colour."
      rules={[
        { name: 'Bar for one task, steps for a sequence', text: 'A continuous bar answers “how far”; numbered steps answer “which stage.” Using a bar for a multi-stage flow hides the stages the user needs to see.' },
        { name: 'The accent measures, the track holds', text: 'Fill is always teal, track always deep-sunk. Recolouring the fill by status would make progress compete with the alert system.' },
        { name: 'Circular for compact slots only', text: 'The ring is for a dashboard tile or an inline badge. For a page-width task, the bar reads the distance far better.' },
        { name: 'Steps are zero-based and honest', text: 'Current is the index in progress; everything before it is done, everything after resting. A “done” step the user has not finished is a lie the component must not tell.' },
        { name: 'Interactive is opt-in, never a silent upgrade', text: 'The static bar keeps role="progressbar" until interactive is passed explicitly. A progress bar a keyboard user can suddenly drag is a bug, not a feature, if it happens without the caller asking for it.' },
      ]}
    />
  );
}

/* ── 3.8 Tooltip ─────────────────────────────────────────── */
export function TooltipPage() {
  return (
    <ComponentPage
      id="tooltip" label="Tooltip" tokensN={11}
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
        { name: 'Single-line', token: '--sc-color-surface-inverse', render: <Tooltip content="Saved to the binder."><span style={tooltipTarget}>Hover me</span></Tooltip> },
        { name: 'Multi-line', token: '--sc-space-layout-stack-xl', render: <Tooltip multiline content="A longer note that wraps to two lines to show the readable-measure cap in action."><span style={tooltipTarget}>Hover for more</span></Tooltip> },
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
        { name: 'Desktop · horizontal', token: '--sc-color-brand-accent', render: <NavBar brand={<span style={navBrand}>Shokunin</span>} links={links} trailing={<Button variant="secondary">Start a project</Button>} /> },
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
        { prop: 'Current link', token: '--sc-color-brand-accent' },
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

function SegmentedControlDemo({ defaultValue = 'week', disabled = false }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <SegmentedControl
      options={VIEW_OPTIONS}
      value={value}
      onChange={setValue}
      disabled={disabled}
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
      id="stepper" label="Stepper" tokensN={15}
      eyebrow={<>Stepper<Slash />new · Drams #8</>}
      title={<>Minus. Number. Plus. <Em>Nothing else on the control.</Em></>}
      lead={<>A bounded numeric increment/decrement — Drams' Plus Minus Knob with the physical dial replaced by a borderless pill and the two ends replaced by Phosphor glyphs. The numeral sits in mono so it never re-flows as it changes width, and holding either end repeats until released.</>}
      statesTitle="Five states per button, one shared readout."
      callouts={[
        { title: 'Bounds disable, they do not just visually gray out', body: '± buttons use native disabled at min/max — computed from value against min/max on every render, never a separate flag a caller has to remember to set.' },
        { title: 'The readout is a spinbutton, not a label', body: 'role="spinbutton" with Up/Down keys lets a keyboard user step the value without ever tabbing to a ± button — the numeral is the control, not just its display.' },
        { title: 'Hold-to-repeat cancels on leave, not just on release', body: 'pointerleave clears the repeat interval the same as pointerup — dragging off the button while holding it down cannot leave a runaway repeat firing in the background.' },
      ]}
      states={[
        { name: 'Default', token: '--sc-color-surface-sunk', render: <StepperDemo defaultValue={4} /> },
        { name: 'Hover (hover a button)', token: '--sc-color-surface-deep-sunk', render: <StepperDemo defaultValue={5} /> },
        { name: 'Focus (tab to a button)', token: '--sc-color-border-focus', render: <StepperDemo defaultValue={3} /> },
        { name: 'At min (− disabled)', token: '--sc-color-text-disabled', render: <StepperDemo defaultValue={0} min={0} max={10} /> },
        { name: 'Disabled', token: '--sc-color-text-disabled', render: <StepperDemo defaultValue={4} disabled /> },
      ]}
      tokenRows={[
        { prop: 'Control ground', token: '--sc-color-surface-sunk' },
        { prop: 'Button hover/active ground', token: '--sc-color-surface-deep-sunk' },
        { prop: 'Button ink', token: '--sc-color-text-primary' },
        { prop: 'Disabled ink', token: '--sc-color-text-disabled' },
        { prop: 'Focus ring', token: '--sc-color-border-focus' },
        { prop: 'Radius (control)', token: '--sc-radius-pill' },
        { prop: 'Readout focus radius', token: '--sc-radius-control' },
        { prop: 'Glyph size', token: '--sc-size-icon-md' },
        { prop: 'Control → readout gap', token: '--sc-space-component-gap-sm' },
        { prop: 'Control inset', token: '--sc-space-component-padding-sm' },
        { prop: 'Numeral type', token: '--sc-font-text-mono-body', light: 'mono 16 / regular' },
        { prop: 'Hover motion', token: '--sc-motion-hover-duration', light: '200ms' },
        { prop: 'Press motion', token: '--sc-motion-press-duration', light: '160ms · outStrong' },
        { prop: 'Press scale', token: '--sc-motion-press-scale', light: '0.985' },
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
