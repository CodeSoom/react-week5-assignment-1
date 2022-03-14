import React from 'react';

export default function RestaurantList({ restaurants = [] }) {
  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
