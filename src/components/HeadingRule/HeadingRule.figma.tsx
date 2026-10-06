import figma from '@figma/code-connect'

import { HeadingRule } from './HeadingRule'

/**
 * Code Connect — HeadingRule · SCDS library mapping.
 *
 * Figma side built 2026-10-05 in the SCDS library file (`0zVoxaLJQkjHENYJlQk1VT`),
 * page `458:5` → component set `460:8`. The marks are generated from plusField.engine.js by
 * scripts/plusfield-to-figma.mjs, so the variants draw what the code draws.
 *
 *   Variant  VARIANT   title | eyebrow
 *   Label    TEXT      the heading text → children
 *
 * Publishing remains plan-gated (see ../CODE-CONNECT.md). `npm run figma:parse`
 * validates the code side.
 */
figma.connect(HeadingRule, 'https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/SCDS?node-id=460-8', {
  props: {
    variant: figma.enum('Variant', { title: 'title', eyebrow: 'eyebrow' }),
    label: figma.string('Label'),
  },
  example: ({ variant, label }) => <HeadingRule variant={variant}>{label}</HeadingRule>,
})
