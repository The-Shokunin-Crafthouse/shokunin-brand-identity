/**
 * SoundProvider + useUISound — app-level control over SCDS interaction
 * sounds.
 *
 * Sounds are ON by default: a component plays its role sound with no
 * provider mounted. Mount a provider to turn every sound off (wire
 * `enabled` to a user setting) or to set the master volume:
 *
 *   <SoundProvider enabled={settings.sounds} volume={0.6}>…</SoundProvider>
 *
 * A single instance opts out with `sound={false}` on the component.
 */

import { createContext, useCallback, useContext, useEffect } from 'react';
import { playUISound, preloadUISound } from './uiSound.js';

const DEFAULT_VOLUME = 0.7;
const SoundContext = createContext({ enabled: true, volume: DEFAULT_VOLUME });

export function SoundProvider({ enabled = true, volume = DEFAULT_VOLUME, children }) {
  return <SoundContext.Provider value={{ enabled, volume }}>{children}</SoundContext.Provider>;
}

/**
 * Returns a stable `play()` for one role sound. `active` is the
 * component's own `sound` prop; the provider can still silence it.
 */
export function useUISound(name, active = true) {
  const { enabled, volume } = useContext(SoundContext);
  const on = enabled && active;

  useEffect(() => {
    if (on) preloadUISound(name);
  }, [name, on]);

  return useCallback(() => {
    if (on) playUISound(name, volume);
  }, [name, on, volume]);
}
