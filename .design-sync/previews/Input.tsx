import { Input } from '@the-shokunin-crafthouse/scds';

const field = { width: 320 } as const;

export const Default = () => (
  <div style={field}>
    <Input label="Email" placeholder="you@studio.com" />
  </div>
);

export const Filled = () => (
  <div style={field}>
    <Input label="Email" defaultValue="levi@levibahn.com" />
  </div>
);

export const WithHelper = () => (
  <div style={field}>
    <Input label="Project name" defaultValue="Brand reference site" helper="Shown on the proposal cover." />
  </div>
);

export const Error = () => (
  <div style={field}>
    <Input label="Email" error="That isn’t an email yet." defaultValue="levi@" />
  </div>
);

export const Disabled = () => (
  <div style={field}>
    <Input label="Client" disabled placeholder="Unavailable" />
  </div>
);
