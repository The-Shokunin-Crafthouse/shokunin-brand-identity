import { Avatar } from '@the-shokunin-crafthouse/scds';

const markIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAADqUlEQVR4nOzdMY7CQBAAQd+JHBHw/wcSIF7ABf6AAy/sXlfFTiZpTTBa/25A1u8GZAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhAkAhF22ib2ej/eR7663+8+2IPPtzPc9NgAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAI+/iJ4tHzyVFGn2WabyzzncsGAGECAGECAGECAGECAGECAGECAGECAGECAGFTP8boUcmd+ebkUVBgaQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYUueYALnsAFAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABA2GWb2Ov5eB/57nq7L/l/A/PtVp3vP7ABQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQNjHTzCPnoeOMvrs1HxjORs+lw0AwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwqa+qvJo5s58jGIDgDABgDABgDABgDABgDABgDABgDABgDABgDABgDAnmBBmA4AwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYCwyzax1/PxPvLd9XZf8v8G5tuZ73tsABAmABAmABAmABAmABAmABAmABAmABAmABAmABD28RPFo+eTo4w+yzTfWOY7lw0AwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwqZ+jNGjkjvzzcmjoMDSBADCBADCBADCBADCBADCBADCBADCBADCBADCljzBBM5hA4AwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYCwPwAAAP//z4cOmAAAAAZJREFUAwDFAIX+6wDGTwAAAABJRU5ErkJggg==';

export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sc-space-component-gap-lg)' }}>
    <Avatar size="xs" name="Levi Bahn" />
    <Avatar size="sm" name="Levi Bahn" />
    <Avatar size="md" name="Levi Bahn" />
    <Avatar size="lg" name="Levi Bahn" />
  </div>
);

export const Image = () => <Avatar size="lg" src={markIcon} name="Shokunin Crafthouse" />;

export const InitialsFallback = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sc-space-component-gap-lg)' }}>
    <Avatar size="lg" name="Shokunin Crafthouse" />
    <Avatar size="lg" name="Studio" />
  </div>
);
