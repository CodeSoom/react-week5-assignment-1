import React from 'react';

export default function RestaurantRegions({ regions, onClick, selected }) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={onClick}
            data-name={region.name}
          >
            {region.name}
            {selected && selected === region.name && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
