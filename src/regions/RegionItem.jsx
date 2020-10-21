import React from 'react';

export default function RegionItem({ regionName, isSelected }) {
  const name = isSelected ? regionName.concat('(V)') : regionName;

  return (
    <li>
      <button type="button">
        {name}
      </button>
    </li>
  );
}
