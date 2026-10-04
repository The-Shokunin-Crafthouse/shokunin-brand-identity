import { Button } from '@the-shokunin-crafthouse/scds';

const row = { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--sc-space-component-gap-lg)' } as const;

export const Variants = () => (
  <div style={row}>
    <Button variant="primary">Start a project</Button>
    <Button variant="secondary">View work</Button>
    <Button variant="tertiary">Cancel</Button>
    <Button variant="destructive">Delete draft</Button>
  </div>
);

export const Disabled = () => <Button disabled>Unavailable</Button>;

export const Loading = () => <Button loading>Saving</Button>;

export const WithoutArrow = () => (
  <div style={row}>
    <Button variant="primary" arrow={false}>Save changes</Button>
    <Button variant="secondary" arrow={false}>Discard</Button>
  </div>
);
