import { useState } from 'react';
import { Stepper } from '@the-shokunin-crafthouse/scds';

function Demo({ initial = 4, min = 0, max = 10, disabled = false }) {
  const [value, setValue] = useState(initial);
  return <Stepper value={value} onChange={setValue} min={min} max={max} label="Quantity" disabled={disabled} />;
}

export const Default = () => <Demo initial={4} />;

export const AtMinimum = () => <Demo initial={0} />;

export const AtMaximum = () => <Demo initial={10} />;

export const Disabled = () => <Demo initial={4} disabled />;
