import React from 'react';

export default function RestaurantRegions({ restaurantRegions }) {
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
