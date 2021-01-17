import React from 'react';
import CategoriesContainer from './CategoriesContainer';

import RegionsContainer from './RegionsContainer';
import RestaurantContainer from './RestaurantContainer';

export default function App() {
  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantContainer />
    </>
  );
}
