import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadRegions,
  loadCategories,
} from './actions';

import RegionButtonsContainer from './RegionButtonsContainer';
import CategoryButtonsContainer from './CategoryButtonsContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <RegionButtonsContainer />
      <CategoryButtonsContainer />
      <RestaurantsContainer />
    </div>
  );
}
