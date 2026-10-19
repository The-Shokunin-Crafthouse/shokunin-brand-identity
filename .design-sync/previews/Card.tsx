import { Button, Card, Divider, TextField, StatusPill } from '@the-shokunin-crafthouse/scds';

const title = { font: 'var(--sc-font-text-title-card)', color: 'var(--sc-color-text-primary)', margin: 0 };
const body = { font: 'var(--sc-font-text-body-dense)', color: 'var(--sc-color-text-secondary)', margin: 0 };

// Glass bends what sits behind it, so its stories carry a backdrop, as the
// brand site's Card page does.
function GlassStage({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'var(--sc-space-component-gap-lg)', padding: 'var(--sc-space-component-padding-md)', borderRadius: 'var(--sc-radius-card)', overflow: 'hidden', background: 'repeating-linear-gradient(135deg, var(--sc-color-atmosphere-celadon) 0 16px, var(--sc-color-atmosphere-river) 16px 32px)' }}>
      {children}
    </div>
  );
}

export const Flat = () => (
  <div style={{ width: 320 }}>
    <Card>
      <div style={{ display: 'grid', gap: 'var(--sc-space-component-gap-md)' }}>
        <p style={title}>Token pipeline</p>
        <p style={body}>The floating surface. No border, no shadow.</p>
      </div>
    </Card>
  </div>
);

export const Interactive = () => (
  <div style={{ width: 320 }}>
    <Card interactive onClick={() => {}}>
      <div style={{ display: 'grid', gap: 'var(--sc-space-component-gap-md)' }}>
        <p style={title}>Open the case study</p>
        <p style={body}>Renders a button. Hover or focus shifts the fill.</p>
      </div>
    </Card>
  </div>
);

export const GlassLight = () => (
  <GlassStage>
    <Card variant="glass" level="clear" tone="light"><p style={body}>Clear. Thin frost, a light bend.</p></Card>
    <Card variant="glass" level="frosted" tone="light"><p style={body}>Frosted. The Figma Glass setting.</p></Card>
    <Card variant="glass" level="thick" tone="light"><p style={body}>Thick. Heavy frost, the strongest bend.</p></Card>
  </GlassStage>
);

// Dark glass sits behind light text, so this story renders in a dark-theme
// subtree: the text tokens re-resolve to light ink there.
export const GlassDark = () => (
  <div data-theme="dark">
  <GlassStage>
    <Card variant="glass" level="clear" tone="dark"><p style={body}>Clear glass that darkens.</p></Card>
    <Card variant="glass" level="frosted" tone="dark"><p style={body}>Frosted glass that darkens.</p></Card>
    <Card variant="glass" level="thick" tone="dark"><p style={body}>Thick glass that darkens.</p></Card>
  </GlassStage>
  </div>
);

// Mirrors the example in .design-sync/conventions.md. Keep the two in step.
export const Composed = () => (
  <div style={{ maxWidth: 360 }}>
    <Card>
      <div style={{ display: 'grid', gap: 'var(--sc-space-layout-stack-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sc-space-component-gap-md)' }}>
          <p style={{ font: 'var(--sc-font-text-title-card)' }}>Invite a collaborator</p>
          <StatusPill tone="neutral" emphasis="outline">Draft</StatusPill>
        </div>
        <p style={{ font: 'var(--sc-font-text-body-dense)', color: 'var(--sc-color-text-secondary)' }}>
          They get read access to the project binder.
        </p>
        <TextField label="Email" placeholder="you@studio.com" surface="raised" />
        <Divider />
        <div style={{ display: 'flex', gap: 'var(--sc-space-component-gap-md)' }}>
          <Button variant="primary">Send invite</Button>
          <Button variant="tertiary" arrow={false}>Cancel</Button>
        </div>
      </div>
    </Card>
  </div>
);
