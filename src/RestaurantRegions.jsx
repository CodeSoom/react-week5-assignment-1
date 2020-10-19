import React from 'react';

export default function RestaurantRegions({ restaurantRegions }) {
  return (
    <div>
      { restaurantRegions.map(({ id, name }) => (
        <button
          key={id + name}
          type="button"
        >
          {name}
        </button>
      ))}
    </div>
  );
}
