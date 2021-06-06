import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  loadRestaurantRegions,
  loadRestaurantCategories,
} from './actions';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';
import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantRegions());
    dispatch(loadRestaurantCategories());
  }, []);

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
