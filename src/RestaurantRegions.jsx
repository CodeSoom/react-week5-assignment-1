import React from 'react';

export default function RestaurantRegions({ regions }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button">
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
