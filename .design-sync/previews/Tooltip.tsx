import { useEffect, useRef } from 'react';
import { Tooltip } from '@the-shokunin-crafthouse/scds';

const target = {
  font: 'var(--sc-font-text-body-default)',
  color: 'var(--sc-color-text-primary)',
  borderBottom: 'var(--sc-border-width-default) dashed var(--sc-color-border-strong)',
  cursor: 'help',
} as const;

// The tooltip opens on hover or focus only. To show the open state in a
// static card, hover the trigger once on mount.
function Hovered({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const trigger = ref.current?.querySelector('[data-trigger]');
    trigger?.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
  }, []);
  return (
    <div ref={ref} style={{ padding: 'var(--sc-space-layout-stack-xl) var(--sc-space-layout-inset-lg) var(--sc-space-layout-stack-sm)', display: 'flex', justifyContent: 'center' }}>
      {children}
    </div>
  );
}

export const SingleLine = () => (
  <Hovered>
    <Tooltip content="Saved to the binder.">
      <span style={target} tabIndex={0} data-trigger>Hover me</span>
    </Tooltip>
  </Hovered>
);

export const Resting = () => (
  <Tooltip content="Saved to the binder.">
    <span style={target} tabIndex={0}>Hover me</span>
  </Tooltip>
);
