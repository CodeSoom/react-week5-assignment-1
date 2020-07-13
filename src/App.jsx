import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';
import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadRegions, loadCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <>
      <RestaurantRegionsContainer />
      <RestaurantCategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
