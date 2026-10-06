import { Button } from '@the-shokunin-crafthouse/scds';

export const Variants = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--sc-space-component-gap-lg)' }}>
    <Button variant="primary">Start a project</Button>
    <Button variant="secondary">View work</Button>
    <Button variant="tertiary">Cancel</Button>
    <Button variant="destructive">Delete draft</Button>
  </div>
);

export const Disabled = () => <Button disabled>Unavailable</Button>;

export const Loading = () => <Button loading>Saving</Button>;

export const WithoutArrow = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--sc-space-component-gap-lg)' }}>
    <Button variant="primary" arrow={false}>Save changes</Button>
    <Button variant="secondary" arrow={false}>Discard</Button>
  </div>
);

export const Small = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--sc-space-component-gap-md)' }}>
    <Button size="sm">Update</Button>
    <Button size="sm" variant="secondary">Merge</Button>
    <Button size="sm" variant="tertiary">View all</Button>
    <Button size="sm" disabled>Unavailable</Button>
  </div>
);
