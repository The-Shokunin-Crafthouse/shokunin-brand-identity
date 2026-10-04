import { WorkingMark } from '@the-shokunin-crafthouse/scds';

const row = { display: 'flex', alignItems: 'center', gap: 'var(--sc-space-component-gap-lg)' } as const;

export const Sizes = () => (
  <div style={row}>
    <WorkingMark size="sm" label="Working" />
    <WorkingMark size="md" label="Working" />
    <WorkingMark size="lg" label="Working" />
  </div>
);

export const Paused = () => <WorkingMark working={false} size="lg" label="Paused" />;

export const InlineStatus = () => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sc-space-component-gap-sm)', font: 'var(--sc-font-text-body-dense)', color: 'var(--sc-color-text-secondary)' }}>
    <WorkingMark />
    Building tokens
  </span>
);
