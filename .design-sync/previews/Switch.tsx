import { useState } from 'react';
import { Switch } from '@the-shokunin-crafthouse/scds';

export const Controlled = () => {
  const [on, setOn] = useState(true);
  return <Switch checked={on} onChange={() => setOn((v) => !v)} label="Email me when a build ships" />;
};

export const Off = () => <Switch checked={false} onChange={() => {}} label="Dark mode" />;

export const On = () => <Switch checked onChange={() => {}} label="Dark mode" />;

export const Disabled = () => (
  <div style={{ display: 'grid', gap: 'var(--sc-space-layout-stack-sm)' }}>
    <Switch disabled onChange={() => {}} label="Unavailable" />
    <Switch disabled checked onChange={() => {}} label="Locked on" />
  </div>
);

export const NoGlyphs = () => (
  <div style={{ display: 'grid', gap: 'var(--sc-space-layout-stack-sm)' }}>
    <Switch checked glyphs={false} onChange={() => {}} label="Plain track, on" />
    <Switch checked={false} glyphs={false} onChange={() => {}} label="Plain track, off" />
  </div>
);
