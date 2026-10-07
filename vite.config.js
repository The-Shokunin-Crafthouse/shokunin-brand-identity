import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Dev only: the sc-tune lab POSTs its export here so a record is read from
// disk, never transcribed from a browser string. Writes one file per
// component to output/tuning/.exports/ (gitignored); the record script
// reads it from there.
const scTuneExport = {
  name: 'sc-tune-export',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use('/__sc-tune/export', (req, res) => {
      if (req.method !== 'POST') { res.statusCode = 405; return res.end() }
      let body = ''
      req.on('data', (c) => { body += c })
      req.on('end', () => {
        try {
          const spec = JSON.parse(body)
          if (spec.tool !== 'sc-tune' || !/^[A-Za-z]+$/.test(spec.component)) throw new Error('not an sc-tune export')
          const dir = resolve('output/tuning/.exports')
          mkdirSync(dir, { recursive: true })
          const file = resolve(dir, `${spec.component}.json`)
          writeFileSync(file, JSON.stringify(spec, null, 2))
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ file: `output/tuning/.exports/${spec.component}.json` }))
        } catch (e) { res.statusCode = 400; res.end(String(e.message)) }
      })
    })
  },
}

// BASE_PATH lets the same build serve at root in production
// and under /_previews/<PR>/ for PR preview deploys.
export default defineConfig({
  plugins: [react(), scTuneExport],
  base: process.env.BASE_PATH || '/',
  build: {
    outDir: 'dist',
  },
})
