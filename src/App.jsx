import React from 'react';

import RegionButtonsContainer from './RegionButtonsContainer';
import CategoryButtonsContainer from './CategoryButtonsContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  return (
    <div>
      <RegionButtonsContainer />
      <CategoryButtonsContainer />
      <RestaurantsContainer />
    </div>
  );
}
