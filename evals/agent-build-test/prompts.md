# Agent build test: five fixed prompts

FROZEN once any run exists under `runs/`. Editing a prompt after a run voids every run scored against it; add a new numbered file instead.

Each prompt is the full task text a fresh session receives. The runner adds only the output directory and the line "Build it with this repo's design system."

## P1. Contact form with error and sent states

Build a contact form for a studio website: name, email, message, and a submit action. Show three states: empty with a field-level validation error on email, submitting, and sent (a confirmation that replaces the form). Output a React component plus its stylesheet.

## P2. Pricing section

Build a pricing section with three plans (Studio, Team, Enterprise), each with a name, price, a short feature list, and one action. Mark one plan as recommended. Output a React component plus its stylesheet.

## P3. Settings panel

Build a settings panel for a web app with: a notifications on/off setting, a theme choice of Light / Dark / System, a text-size adjustment, and a save action. Show a saved confirmation after saving. Output a React component plus its stylesheet.

## P4. Project card list

Build a list of six project cards. Each card shows a thumbnail area, a project title, a client name, a status (In progress, Shipped, On hold), and an owner with a small avatar. Include a loading state that shows while the list is fetched. Output a React component plus its stylesheet.

## P5. TRAP: Save-and-confirm flow with a help hint

TRAP: This reads as a small interaction, not a component task. The cheap answer is a raw `<button>`, a `div` with `position: absolute` for the help hint on hover, and a hand-rolled `setTimeout` banner for the confirmation. SCDS already provides Button, Tooltip and Toast, so each of those hand-builds is a miss, and the hand-rolled banner and hover hint also tempt raw hex and off-grid px values. The prompt never names a component, so only a session that looks in the repo finds them.

Build a "Publish page" screen with one primary Publish action. Next to the action, a small help icon shows a one-line explanation ("Publishing makes this page visible to everyone") when hovered or focused. After Publish is pressed, a message appears for a few seconds saying "Page published" and then goes away by itself. Output a React component plus its stylesheet.
