import React from 'react';

export default function RegionItem({ regionName, isSelected, onClick }) {
  return (
    <li>
      <button type="button" onClick={onClick}>
        {regionName}
        {isSelected && '(V)'}
      </button>
    </li>
  );
}
