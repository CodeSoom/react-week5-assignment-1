import React from 'react';

import { useDisaptch } from 'react-redux';

imoprt {
  loadCategories
} from './action.js'

import RegionButtonsContainer from './RegionButtonsContainer';
import CategoryButtonsContainer from './CategoryButtonsContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  useEffect(() => {
    dispatch(loadCategories());
  });

  return (
    <div>
      <RegionButtonsContainer />
      <CategoryButtonsContainer />
      <RestaurantsContainer />
    </div>
  );
}
