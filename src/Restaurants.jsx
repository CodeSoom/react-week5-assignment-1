import React from 'react';

export default function Restaurants({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li
          key={restaurant.id}
        >
          <button type="button" value={restaurant.name}>
            {restaurant.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
