import React from 'react';

import CategoriesContainer from './CategoriesContainer';

import restaurants from './fixtures/restaurants';

import RegionsContainer from './RegionsContainer';

import Restaurants from './Restaurants';

export default function App() {
  return (
    <>
      <CategoriesContainer />
      <RegionsContainer />
      <Restaurants restaurants={restaurants} />
    </>
  );
}
