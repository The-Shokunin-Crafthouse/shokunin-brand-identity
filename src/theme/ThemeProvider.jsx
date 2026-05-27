/* ============================================================
 * ThemeProvider — light/dark mode context + persistence.
 *
 * Reads initial mode from:
 *   1. localStorage('sc-theme') if present
 *   2. window.matchMedia('(prefers-color-scheme: dark)')
 *
 * Writes `data-theme` attribute on <html> so tokens.css's
 * [data-theme="dark"] rule can override the :root cascade.
 * Persists user choice to localStorage on every toggle.
 *
 * Sprint 4 deliverable — drives criterion 4f.
 * ============================================================ */

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'sc-theme';
const ThemeContext = createContext(null);

function readInitial() {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitial);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore quota / privacy-mode failures — DOM attr still set.
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
