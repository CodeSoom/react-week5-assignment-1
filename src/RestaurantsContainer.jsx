import React from 'react';

import Restaurants from './Restaurants';

import { restaurants } from '../fixtures/restaurants';

export default function RestaurantsContainer() {
  return (
    <Restaurants restaurants={restaurants} />
  );
}
