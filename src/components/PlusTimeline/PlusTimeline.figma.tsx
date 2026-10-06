import figma from '@figma/code-connect'

import { PlusTimeline } from './PlusTimeline'

/**
 * Code Connect — PlusTimeline · SCDS library mapping.
 *
 * Figma side built 2026-10-05 in the SCDS library file (`0zVoxaLJQkjHENYJlQk1VT`),
 * page `458:10` → component set `461:73`. The marks are generated from plusField.engine.js by
 * scripts/plusfield-to-figma.mjs, so the variants draw what the code draws.
 *
 *   Steps         VARIANT   3 | 4 (one connect per step count)
 *   Current       VARIANT   0 … steps − 1
 *   Step 1 … 4    TEXT      the step labels
 *
 * Publishing remains plan-gated (see ../CODE-CONNECT.md). `npm run figma:parse`
 * validates the code side.
 */
figma.connect(PlusTimeline, 'https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/SCDS?node-id=461-73', {
  variant: { Steps: '3' },
  props: {
    current: figma.enum('Current', { '0': 0, '1': 1, '2': 2 }),
    step1: figma.string('Step 1'),
    step2: figma.string('Step 2'),
    step3: figma.string('Step 3'),
  },
  example: ({ current, step1, step2, step3 }) => (
    <PlusTimeline label="Steps" steps={[step1, step2, step3]} current={current} />
  ),
})

figma.connect(PlusTimeline, 'https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/SCDS?node-id=461-73', {
  variant: { Steps: '4' },
  props: {
    current: figma.enum('Current', { '0': 0, '1': 1, '2': 2, '3': 3 }),
    step1: figma.string('Step 1'),
    step2: figma.string('Step 2'),
    step3: figma.string('Step 3'),
    step4: figma.string('Step 4'),
  },
  example: ({ current, step1, step2, step3, step4 }) => (
    <PlusTimeline label="Steps" steps={[step1, step2, step3, step4]} current={current} />
  ),
})
