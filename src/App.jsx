import React from 'react';
import CategoriesContainer from './CategoriesContainer';
import RegionsContainer from './RegionsContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
