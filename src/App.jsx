import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadRegions,
  loadCategories,
  loadRestaurants,
} from './actions';

import { get } from './utils';

export default function App() {
  const dispatch = useDispatch();

  const selected = useSelector(get('selected'));

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    dispatch(loadRestaurants());
  }, [selected]);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
