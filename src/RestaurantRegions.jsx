import React from 'react';

export default function RestaurantRegions({ regions, onClick }) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <input
            type="button"
            onClick={() => onClick(region)}
            value={region.name}
          />
        </li>
      ))}
    </ul>
  );
}
