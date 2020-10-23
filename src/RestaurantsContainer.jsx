import React from 'react';

import restaurants from '../__fixtures__/restaurants';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  return (
    <Restaurants restaurants={restaurants} />
  );
}
