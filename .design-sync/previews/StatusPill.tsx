import { StatusPill } from '@the-shokunin-crafthouse/scds';
import { Check, Pause } from '@phosphor-icons/react';

export const Tones = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--sc-space-component-gap-md)' }}>
    <StatusPill tone="progress">In progress</StatusPill>
    <StatusPill tone="live">Live</StatusPill>
    <StatusPill tone="success" icon={Check}>Complete</StatusPill>
    <StatusPill tone="warning">Pending</StatusPill>
    <StatusPill tone="error">Failed</StatusPill>
    <StatusPill tone="info">Info</StatusPill>
    <StatusPill tone="neutral">Planned</StatusPill>
  </div>
);

export const Outline = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--sc-space-component-gap-md)' }}>
    <StatusPill tone="success" emphasis="outline">Pass</StatusPill>
    <StatusPill tone="error" emphasis="outline">Fail</StatusPill>
    <StatusPill tone="warning" emphasis="outline" icon={Pause}>Paused</StatusPill>
    <StatusPill tone="neutral" emphasis="outline">Draft</StatusPill>
  </div>
);

export const InContext = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--sc-space-component-gap-md)', font: 'var(--sc-font-text-title-card)', color: 'var(--sc-color-text-primary)' }}>
    Brand reference site
    <StatusPill tone="success">Shipped</StatusPill>
  </div>
);
