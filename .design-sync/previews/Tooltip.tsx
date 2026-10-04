import { useEffect, useRef } from 'react';
import { Tooltip } from '@the-shokunin-crafthouse/scds';

// Preview-only helper, not part of the design system. The tooltip opens on
// hover or focus; this hovers the trigger once on mount so a static card can
// show the open state.
function PreviewHoverOnMount({ children }: { children: React.ReactNode }) {
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

export const Resting = () => (
  <Tooltip content="Saved to the binder.">
    <span
      tabIndex={0}
      style={{ font: 'var(--sc-font-text-body-default)', color: 'var(--sc-color-text-primary)', borderBottom: 'var(--sc-border-width-default) dashed var(--sc-color-border-strong)', cursor: 'help' }}
    >
      Hover me
    </span>
  </Tooltip>
);

export const Open = () => (
  <PreviewHoverOnMount>
    <Tooltip content="Saved to the binder.">
      <span
        tabIndex={0}
        data-trigger
        style={{ font: 'var(--sc-font-text-body-default)', color: 'var(--sc-color-text-primary)', borderBottom: 'var(--sc-border-width-default) dashed var(--sc-color-border-strong)', cursor: 'help' }}
      >
        Hover me
      </span>
    </Tooltip>
  </PreviewHoverOnMount>
);
