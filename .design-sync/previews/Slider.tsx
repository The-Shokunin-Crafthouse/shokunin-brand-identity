import { useState } from 'react';
import { Slider } from '@the-shokunin-crafthouse/scds';

export const Default = () => {
  const [value, setValue] = useState(0.3);
  return (
    <div style={{ width: 320 }}>
      <Slider value={value} onChange={setValue} label="Volume" />
    </div>
  );
};

export const Range = () => (
  <div style={{ width: 320, display: 'grid', gap: 'var(--sc-space-layout-stack-sm)' }}>
    <Slider value={0} onChange={() => {}} label="Volume, muted" />
    <Slider value={0.65} onChange={() => {}} label="Volume, 65 percent" />
    <Slider value={1} onChange={() => {}} label="Volume, full" />
  </div>
);

export const Disabled = () => (
  <div style={{ width: 320 }}>
    <Slider value={0.4} disabled label="Volume, disabled" />
  </div>
);
