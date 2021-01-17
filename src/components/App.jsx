import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContaioner from '../containers/RegionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';
import RestaurantsContainer from '../containers/RestaurantsContainer';

import {
  loadRegions,
  loadCategories,
  loadRestaurants,
} from '../actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
    dispatch(loadRestaurants());
  }, []);

  return (
    <>
      <RegionsContaioner />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
