import { useState } from 'react';
import { Switch } from '@the-shokunin-crafthouse/scds';

const stack = { display: 'grid', gap: 'var(--sc-space-layout-stack-sm)' } as const;

export const Controlled = () => {
  const [on, setOn] = useState(true);
  return <Switch checked={on} onChange={() => setOn((v) => !v)} label="Email me when a build ships" />;
};

export const Off = () => <Switch checked={false} onChange={() => {}} label="Dark mode" />;

export const On = () => <Switch checked onChange={() => {}} label="Dark mode" />;

export const Disabled = () => (
  <div style={stack}>
    <Switch disabled onChange={() => {}} label="Unavailable" />
    <Switch disabled checked onChange={() => {}} label="Locked on" />
  </div>
);
