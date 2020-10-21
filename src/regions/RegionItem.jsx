import React from 'react';

export default function RegionItem({ regionName, isSelected }) {
  return (
    <li>
      <button type="button">
        {regionName}
        {isSelected && '(V)'}
      </button>
    </li>
  );
}
