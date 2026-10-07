import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

/**
 * sc-tune snapshot build — used only by scripts/tune-record.mjs.
 *
 * Builds previews/tune/ in `snapshot` mode with relative paths, so the
 * output folder renders a recorded spec (./spec.json, ./sounds/<file>)
 * read-only from anywhere it is served. Never part of the site or the
 * library build.
 */
export default defineConfig({
  root: resolve(import.meta.dirname, 'previews/tune'),
  base: './',
  plugins: [react()],
  build: {
    emptyOutDir: true,
  },
});
