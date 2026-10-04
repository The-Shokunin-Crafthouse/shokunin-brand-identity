import { useState } from 'react';
import { SegmentedControl } from '@the-shokunin-crafthouse/scds';

export const Default = () => {
  const [view, setView] = useState('week');
  return (
    <SegmentedControl
      options={[{ value: 'day', label: 'Day' }, { value: 'week', label: 'Week' }, { value: 'month', label: 'Month' }]}
      value={view}
      onChange={setView}
      label="View"
    />
  );
};

export const Small = () => {
  const [view, setView] = useState('day');
  return (
    <SegmentedControl
      size="sm"
      options={[{ value: 'day', label: 'Day' }, { value: 'week', label: 'Week' }, { value: 'month', label: 'Month' }]}
      value={view}
      onChange={setView}
      label="View"
    />
  );
};

export const TwoWay = () => {
  const [layout, setLayout] = useState('list');
  return (
    <SegmentedControl
      options={[{ value: 'list', label: 'List' }, { value: 'grid', label: 'Grid' }]}
      value={layout}
      onChange={setLayout}
      label="Layout"
    />
  );
};

export const Disabled = () => (
  <SegmentedControl
    disabled
    options={[{ value: 'day', label: 'Day' }, { value: 'week', label: 'Week' }, { value: 'month', label: 'Month' }]}
    value="week"
    onChange={() => {}}
    label="View"
  />
);
