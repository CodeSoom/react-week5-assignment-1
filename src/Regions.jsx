import React from 'react';

export default function Regions({ restaurantRegions }) {
  return (
    <ul>
      { restaurantRegions.map(({ id, name }) => (
        <li>
          <button
            key={id + name}
            type="button"
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
