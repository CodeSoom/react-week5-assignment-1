import React from 'react';

export default function RestaurantRegions({ regions, onClick, selected }) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            name={region.name}
            onClick={onClick}
          >
            {region.name}
            {selected && selected.name === region.name && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
