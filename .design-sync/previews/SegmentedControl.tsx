import { useState } from 'react';
import { SegmentedControl } from '@the-shokunin-crafthouse/scds';

const VIEW_OPTIONS = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
];

function Demo({ initial = 'week', disabled = false, size = 'md' as 'sm' | 'md' }) {
  const [value, setValue] = useState(initial);
  return (
    <SegmentedControl options={VIEW_OPTIONS} value={value} onChange={setValue} disabled={disabled} size={size} label="View" />
  );
}

export const Default = () => <Demo initial="week" />;

export const Small = () => <Demo initial="day" size="sm" />;

export const TwoWay = () => {
  const [value, setValue] = useState('list');
  return (
    <SegmentedControl
      options={[{ value: 'list', label: 'List' }, { value: 'grid', label: 'Grid' }]}
      value={value}
      onChange={setValue}
      label="Layout"
    />
  );
};

export const Disabled = () => <Demo initial="week" disabled />;
