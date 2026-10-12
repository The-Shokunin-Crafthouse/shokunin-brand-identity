import { Tooltip } from '@the-shokunin-crafthouse/scds';

const trigger = { font: 'var(--sc-font-text-body-default)', color: 'var(--sc-color-text-primary)', borderBottom: 'var(--sc-border-width-default) dashed var(--sc-color-border-strong)', cursor: 'help' };

// Room above the trigger for the open tip and its arrow.
function Stage({ children, width }: { children: React.ReactNode; width?: number }) {
  return (
    <div style={{ width, padding: 'var(--sc-space-layout-stack-xl) var(--sc-space-layout-inset-lg) var(--sc-space-layout-stack-sm)', display: 'flex', justifyContent: 'center' }}>
      {children}
    </div>
  );
}

export const Resting = () => (
  <Tooltip content="Saved to the binder.">
    <span tabIndex={0} style={trigger}>Hover me</span>
  </Tooltip>
);

// `open` forces the tip open; left undefined, hover and focus decide.
export const Open = () => (
  <Stage>
    <Tooltip open content="Saved to the binder.">
      <span tabIndex={0} style={trigger}>Hover me</span>
    </Tooltip>
  </Stage>
);

// Fixed width: the open tip is wider than its trigger, so the card needs
// room for the 240 multi-line cap on both sides.
export const MultiLine = () => (
  <Stage width={320}>
    <Tooltip open multiline content="A longer note that wraps to two lines at the readable-measure cap.">
      <span tabIndex={0} style={trigger}>Hover for more</span>
    </Tooltip>
  </Stage>
);
