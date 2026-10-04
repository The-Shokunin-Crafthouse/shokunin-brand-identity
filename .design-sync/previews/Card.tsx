import { Card } from '@the-shokunin-crafthouse/scds';

const title = { font: 'var(--sc-font-text-title-card)', color: 'var(--sc-color-text-primary)', margin: 0 } as const;
const body = { font: 'var(--sc-font-text-body-dense)', color: 'var(--sc-color-text-secondary)', margin: 0 } as const;
const stack = { display: 'grid', gap: 'var(--sc-space-component-gap-md)' } as const;

export const Default = () => (
  <div style={{ width: 320 }}>
    <Card>
      <div style={stack}>
        <p style={title}>Token pipeline</p>
        <p style={body}>A set-in tile against the page. Fill alone separates it from the ground.</p>
      </div>
    </Card>
  </div>
);

export const Interactive = () => (
  <div style={{ width: 320 }}>
    <Card variant="interactive" onClick={() => {}}>
      <div style={stack}>
        <p style={title}>Open the case study</p>
        <p style={body}>Renders a button. Hover or focus deepens the fill.</p>
      </div>
    </Card>
  </div>
);

export const Elevated = () => (
  <div style={{ width: 360, padding: 'var(--sc-space-layout-inset-md)', background: 'var(--sc-color-surface-sunk)', borderRadius: 'var(--sc-radius-surface-large)' }}>
    <Card variant="elevated">
      <div style={stack}>
        <p style={title}>Elevated</p>
        <p style={body}>Page ground, lifted by fill contrast against a sunk surround.</p>
      </div>
    </Card>
  </div>
);
