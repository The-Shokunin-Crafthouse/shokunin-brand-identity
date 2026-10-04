import { Badge, Button, Card, Divider, Input } from '@the-shokunin-crafthouse/scds';

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

// Mirrors the example in .design-sync/conventions.md. Keep the two in step.
export const Composed = () => (
  <div style={{ maxWidth: 360 }}>
    <Card>
      <div style={{ display: 'grid', gap: 'var(--sc-space-layout-stack-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sc-space-component-gap-md)' }}>
          <p style={{ font: 'var(--sc-font-text-title-card)' }}>Invite a collaborator</p>
          <Badge variant="neutral">Draft</Badge>
        </div>
        <p style={{ font: 'var(--sc-font-text-body-dense)', color: 'var(--sc-color-text-secondary)' }}>
          They get read access to the project binder.
        </p>
        <Input label="Email" placeholder="you@studio.com" />
        <Divider />
        <div style={{ display: 'flex', gap: 'var(--sc-space-component-gap-md)' }}>
          <Button variant="primary">Send invite</Button>
          <Button variant="tertiary" arrow={false}>Cancel</Button>
        </div>
      </div>
    </Card>
  </div>
);
