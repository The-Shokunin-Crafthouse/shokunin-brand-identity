import { Input } from '@the-shokunin-crafthouse/scds';

export const Default = () => (
  <div style={{ width: 320 }}>
    <Input label="Email" placeholder="you@studio.com" />
  </div>
);

export const Filled = () => (
  <div style={{ width: 320 }}>
    <Input label="Email" defaultValue="levi@levibahn.com" />
  </div>
);

export const WithHelper = () => (
  <div style={{ width: 320 }}>
    <Input label="Project name" defaultValue="Brand reference site" helper="Shown on the proposal cover." />
  </div>
);

export const Error = () => (
  <div style={{ width: 320 }}>
    <Input label="Email" error="That isn’t an email yet." defaultValue="levi@" />
  </div>
);

export const Disabled = () => (
  <div style={{ width: 320 }}>
    <Input label="Client" disabled placeholder="Unavailable" />
  </div>
);
