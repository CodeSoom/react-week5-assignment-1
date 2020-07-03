import React from 'react';
import RestaurantRegions from './RestaurantRegions';

import { regions } from '../fixtures/restaurants';

export default function App() {
  return (
    <>
      <RestaurantRegions regions={regions} />
    </>
  );
}
