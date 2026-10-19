import { Progress } from '@the-shokunin-crafthouse/scds';

export const Bar = () => (
  <div style={{ width: 320 }}>
    <Progress variant="bar" value={0.62} label="62 percent" />
  </div>
);

export const Circular = () => <Progress variant="circular" value={0.7} label="70 percent" />;

export const Step = () => <Progress variant="step" steps={4} current={2} />;

export const Tones = () => (
  <div style={{ width: 320, display: 'grid', gap: 'var(--sc-space-layout-stack-sm)', background: 'var(--sc-color-surface-raised)', borderRadius: 'var(--sc-radius-surface)', padding: 'var(--sc-space-layout-inset-md)' }}>
    <Progress variant="bar" track="sunk" value={0.48} label="Opus, 48 percent" />
    <Progress variant="bar" tone="progress" track="sunk" value={0.1} label="All models, 10 percent" />
    <Progress variant="bar" tone="warning" track="sunk" value={0.84} label="Weekly limit, 84 percent" />
  </div>
);
