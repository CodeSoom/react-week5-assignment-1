import React from 'react';

export default function RestaurantRegions({ regions, onClick }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <input
            type="button"
            onClick={() => onClick(name)}
            value={name}
          />
        </li>
      ))}
    </ul>
  );
}
