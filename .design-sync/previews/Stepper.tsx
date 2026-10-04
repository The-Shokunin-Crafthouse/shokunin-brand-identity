import { useState } from 'react';
import { Stepper } from '@the-shokunin-crafthouse/scds';

export const Default = () => {
  const [value, setValue] = useState(4);
  return <Stepper value={value} onChange={setValue} min={0} max={10} label="Quantity" />;
};

export const AtMinimum = () => {
  const [value, setValue] = useState(0);
  return <Stepper value={value} onChange={setValue} min={0} max={10} label="Quantity" />;
};

export const AtMaximum = () => {
  const [value, setValue] = useState(10);
  return <Stepper value={value} onChange={setValue} min={0} max={10} label="Quantity" />;
};

export const Disabled = () => <Stepper value={4} onChange={() => {}} min={0} max={10} label="Quantity" disabled />;
