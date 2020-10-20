import React from 'react';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const restaurants = [];

  return (
    <Restaurants restaurants={restaurants} />
  );
}
