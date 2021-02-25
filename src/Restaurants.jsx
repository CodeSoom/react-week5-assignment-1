import React from 'react';

import restaurants from '../fixtures/restaurants';

export default function Restaurants() {
  return (
    <ul>
      {restaurants.map((restaurant) => (<li key={restaurant.id}>{restaurant.name}</li>))}
    </ul>
  );
}
