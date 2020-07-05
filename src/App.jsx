import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';
import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';
import Restaurants from './Restaurants';

import { restaurants } from '../fixtures/restaurants';

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
      <Restaurants restaurants={restaurants} />
    </>
  );
}
