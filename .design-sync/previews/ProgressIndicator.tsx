import { useState } from 'react';
import { ProgressIndicator } from '@the-shokunin-crafthouse/scds';

const wide = { width: 320 } as const;

export const Bar = () => (
  <div style={wide}>
    <ProgressIndicator variant="bar" value={0.62} label="62 percent" />
  </div>
);

export const Circular = () => <ProgressIndicator variant="circular" value={0.7} label="70 percent" />;

export const Step = () => <ProgressIndicator variant="step" steps={4} current={2} />;

export const InteractiveBar = () => {
  const [value, setValue] = useState(0.3);
  return (
    <div style={wide}>
      <ProgressIndicator variant="bar" interactive value={value} onChange={setValue} label="Volume" />
    </div>
  );
};

export const InteractiveDisabled = () => (
  <div style={wide}>
    <ProgressIndicator variant="bar" interactive value={0.4} disabled label="Volume, disabled" />
  </div>
);
