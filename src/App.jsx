import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  getRegions,
  getCategories,
} from './modules/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegions());
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
