import { Alert } from '@the-shokunin-crafthouse/scds';

export const Variants = () => (
  <div style={{ display: 'grid', gap: 'var(--sc-space-layout-stack-sm)', width: 480 }}>
    <Alert variant="info" title="Heads up">The brand site rebuilds on every push to main.</Alert>
    <Alert variant="success" title="Shipped">Sprint 5 merged and deployed to brand.shokunincrafthouse.com.</Alert>
    <Alert variant="warning" title="In review">Two approval gates remain before this can merge.</Alert>
    <Alert variant="error" title="Build failed">Token build exited non-zero. The previous deploy is still live.</Alert>
  </div>
);

export const WithoutTitle = () => (
  <div style={{ display: 'grid', gap: 'var(--sc-space-layout-stack-sm)', width: 480 }}>
    <Alert variant="info">Tokens regenerate from the JSON source on every build.</Alert>
  </div>
);
