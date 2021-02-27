import React from 'react';

import restaurants from '../../fixtures/restaurants';

export default function Restaurants() {
  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
