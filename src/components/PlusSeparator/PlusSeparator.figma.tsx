import figma from '@figma/code-connect'

import { PlusSeparator } from './PlusSeparator'

/**
 * Code Connect — PlusSeparator · SCDS library mapping.
 *
 * Figma side built 2026-10-05 in the SCDS library file (`0zVoxaLJQkjHENYJlQk1VT`),
 * page `458:12` → component `459:2370` (no variant axis). The marks are generated from plusField.engine.js by
 * scripts/plusfield-to-figma.mjs, so the variants draw what the code draws.
 *
 * Publishing remains plan-gated (see ../CODE-CONNECT.md). `npm run figma:parse`
 * validates the code side.
 */
figma.connect(PlusSeparator, 'https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/SCDS?node-id=459-2370', {
  example: () => <PlusSeparator />,
})
