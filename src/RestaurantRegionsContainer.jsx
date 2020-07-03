import React from 'react';

import RestaurantRegions from './RestaurantRegions';

import { regions } from '../fixtures/restaurants';

export default function RestaurantRegionsContainer() {
  return (
    <RestaurantRegions regions={regions} />
  );
}
