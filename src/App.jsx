import React from 'react';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';
import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  return (
    <>
      <RestaurantRegionsContainer />
      <br />
      <RestaurantCategoriesContainer />
      <br />
      <RestaurantsContainer />
    </>
  );
}
