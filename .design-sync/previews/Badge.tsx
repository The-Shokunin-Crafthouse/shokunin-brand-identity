import { Badge } from '@the-shokunin-crafthouse/scds';

const row = { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--sc-space-component-gap-md)' } as const;

export const Variants = () => (
  <div style={row}>
    <Badge>Studio</Badge>
    <Badge variant="success">Shipped</Badge>
    <Badge variant="warning">In review</Badge>
    <Badge variant="error">Failed</Badge>
    <Badge variant="neutral">Draft</Badge>
  </div>
);

export const InContext = () => (
  <div style={{ ...row, font: 'var(--sc-font-text-title-card)', color: 'var(--sc-color-text-primary)' }}>
    Brand reference site
    <Badge variant="success">Shipped</Badge>
  </div>
);
