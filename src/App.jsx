import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';
import RegionsContainer from './RegionsContainer';

import {
  loadCategories,
  loadRegions,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);
  return (
    <div>
      <CategoriesContainer />
      <RestaurantsContainer />
      <RegionsContainer />
    </div>
  );
}
