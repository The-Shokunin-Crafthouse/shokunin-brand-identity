import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH lets the same build serve at root in production
// and under /_previews/<PR>/ for PR preview deploys.
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
  build: {
    outDir: 'dist',
  },
})
