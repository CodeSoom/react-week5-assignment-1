import React from 'react';

export default function RestaurantRegions({ regions }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
