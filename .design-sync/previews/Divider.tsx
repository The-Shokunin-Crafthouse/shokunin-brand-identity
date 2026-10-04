import { Divider } from '@the-shokunin-crafthouse/scds';

const text = { font: 'var(--sc-font-text-body-dense)', color: 'var(--sc-color-text-secondary)', margin: 0 } as const;

export const Horizontal = () => (
  <div style={{ width: 360, display: 'grid', gap: 'var(--sc-space-layout-stack-sm)' }}>
    <p style={text}>Tokens, type, colour.</p>
    <Divider />
    <p style={text}>Components, motion, voice.</p>
  </div>
);

export const WithLabel = () => (
  <div style={{ width: 360 }}>
    <Divider label="or" />
  </div>
);

export const Vertical = () => (
  <span style={{ display: 'inline-flex', alignItems: 'center', ...text }}>
    Studio<Divider orientation="vertical" />Work<Divider orientation="vertical" />Contact
  </span>
);
