import React from 'react';

import RegionsContainer from './RegionsContainer';

import RestaurantsContainer from './RestaurantsContainer';

import CategoriesContainer from './CategoriesContainer';

export default function App() {
  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
