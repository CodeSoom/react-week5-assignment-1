import React from 'react';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';
import RestaurantCategoriesContainer from "./RestaurantCategoriesContainer";

export default function App() {
  return (
    <>
      <RestaurantRegionsContainer />
      <br />
      <RestaurantCategoriesContainer />
    </>
  );
}
