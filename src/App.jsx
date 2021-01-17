import React from 'react';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';
import RestaurantsCategoriesContainer from './RestaurantsCategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  return (
    <>
      <RestaurantRegionsContainer />
      <RestaurantsCategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
