A vertical timeline or stepper (brand element 2o). The connector and nodes are drawn in plus marks; the labels are real list items.

- `steps` is the list of labels in order; `current` is the 0-based index of the current step.
- Steps before `current` are done (solid nodes, solid connector). The current node is teal. Later nodes and labels are faint.
- Renders an `<ol>`; the current item carries `aria-current="step"`. `label` names the list.
- Each row is 80 tall, so long labels should stay to one line. Put status words in the label ("Build · in progress").

## Example

```jsx
const { PlusTimeline } = window.SCDS;
<PlusTimeline
  label="Project stages"
  steps={['Brief', 'Design', 'Build · in progress', 'Launch']}
  current={2}
/>
```
