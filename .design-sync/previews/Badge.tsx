import { Badge } from '@the-shokunin-crafthouse/scds';

export const Variants = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--sc-space-component-gap-md)' }}>
    <Badge>Studio</Badge>
    <Badge variant="success">Shipped</Badge>
    <Badge variant="warning">In review</Badge>
    <Badge variant="error">Failed</Badge>
    <Badge variant="neutral">Draft</Badge>
  </div>
);

export const InContext = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--sc-space-component-gap-md)', font: 'var(--sc-font-text-title-card)', color: 'var(--sc-color-text-primary)' }}>
    Brand reference site
    <Badge variant="success">Shipped</Badge>
  </div>
);
