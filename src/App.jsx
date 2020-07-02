import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadRegions,
  loadCategories,
  setRestaurants,
} from './actions';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
    dispatch(setRestaurants({
      restaurants: [],
    }));
  }, []);

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
