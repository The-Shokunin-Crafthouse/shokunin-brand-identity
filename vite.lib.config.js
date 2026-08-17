import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

/**
 * Library build — produces the publishable package in dist-lib/.
 *
 * Separate from vite.config.js, which builds the brand reference SPA into
 * dist/ for brand.shokunincrafthouse.com. Same source, two outputs; neither
 * build touches the other's directory.
 *
 * react / react-dom / @phosphor-icons/react are externalised and declared as
 * peerDependencies — bundling React into a library gives consumers two copies
 * and breaks hooks.
 *
 * CSS: every component's CSS Module is collected into a single
 * dist-lib/components.css. Class names are hashed with a stable, content-
 * independent pattern so a consumer's committed snapshot doesn't churn on
 * every unrelated build.
 */
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: 'scds-[local]__[hash:base64:5]',
    },
  },
  build: {
    outDir: 'dist-lib',
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.js'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@phosphor-icons/react',
      ],
      output: {
        assetFileNames: (asset) =>
          asset.names?.some((n) => n.endsWith('.css')) ? 'components.css' : '[name][extname]',
      },
    },
  },
});
