import React from 'react';

import RegionButtonListContainer from './RegionButtonListContainer';
import CategoryButtonListContainer from './CategoryButtonListContainer';
import RestaurantListContainer from './RestaurantListContainer';

export default function App() {
  return (
    <>
      <RegionButtonListContainer />
      <CategoryButtonListContainer />
      <RestaurantListContainer />
    </>
  );
}
