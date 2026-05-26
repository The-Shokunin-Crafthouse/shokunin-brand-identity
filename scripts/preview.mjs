#!/usr/bin/env node
import { spawn } from 'node:child_process'
import { mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname } from 'node:path'
import { chromium } from 'playwright'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = resolve(__dirname, '..')

const VIEWPORTS = [360, 768, 1024, 1440]
const DARK_MODE_IN_SCOPE = true
const DIST_DIR = resolve(projectRoot, 'dist')
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
}

function runBuild() {
  return new Promise((resolvePromise, rejectPromise) => {
    const child = spawn('npm', ['run', 'build'], {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    })
    child.on('error', rejectPromise)
    child.on('exit', code => {
      if (code === 0) resolvePromise()
      else rejectPromise(new Error(`build exited with code ${code}`))
    })
  })
}

function startStaticServer(rootDir) {
  return new Promise((resolvePromise, rejectPromise) => {
    const server = createServer(async (req, res) => {
      try {
        const urlPath = decodeURIComponent((req.url || '/').split('?')[0])
        let filePath = resolve(rootDir, '.' + urlPath)
        if (!filePath.startsWith(rootDir)) {
          res.writeHead(403)
          res.end('Forbidden')
          return
        }
        let s
        try {
          s = await stat(filePath)
        } catch {
          filePath = resolve(rootDir, 'index.html')
          s = await stat(filePath)
        }
        if (s.isDirectory()) {
          filePath = resolve(filePath, 'index.html')
        }
        const body = await readFile(filePath)
        const type = MIME[extname(filePath).toLowerCase()] || 'application/octet-stream'
        res.writeHead(200, { 'Content-Type': type })
        res.end(body)
      } catch (err) {
        res.writeHead(404)
        res.end('Not found')
      }
    })
    server.on('error', rejectPromise)
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address()
      resolvePromise({ server, port })
    })
  })
}

async function captureViewport(browser, url, viewport, colorScheme, outFile) {
  const context = await browser.newContext({
    viewport: { width: viewport, height: 900 },
    colorScheme,
    deviceScaleFactor: 2,
  })
  const page = await context.newPage()
  try {
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.screenshot({ path: outFile, fullPage: true })
  } finally {
    await context.close()
  }
}

async function main() {
  const sprint = process.argv[2]
  if (!sprint) {
    console.error('Usage: node scripts/preview.mjs <sprint-name>')
    process.exit(1)
  }

  const outDir = resolve(projectRoot, 'previews', sprint)
  await mkdir(outDir, { recursive: true })

  console.log(`[preview] building ${sprint}…`)
  await runBuild()

  console.log('[preview] starting static server…')
  const { server, port } = await startStaticServer(DIST_DIR)
  const url = `http://127.0.0.1:${port}/`

  let browser
  try {
    browser = await chromium.launch()
    const modes = DARK_MODE_IN_SCOPE ? ['light', 'dark'] : ['light']
    for (const mode of modes) {
      for (const vw of VIEWPORTS) {
        const suffix = DARK_MODE_IN_SCOPE ? `-${mode}` : ''
        const outFile = resolve(outDir, `${vw}${suffix}.png`)
        console.log(`[preview] capture ${vw}${suffix}`)
        await captureViewport(browser, url, vw, mode, outFile)
      }
    }
    console.log(`[preview] done → ${outDir}`)
  } finally {
    if (browser) await browser.close().catch(() => {})
    await new Promise(r => server.close(() => r()))
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
