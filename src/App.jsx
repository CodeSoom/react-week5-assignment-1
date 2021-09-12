import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './containers/RegionsContainer';
import CategoriesContainer from './containers/CategoriesContainer';
import RestaurantsContainer from './containers/RestaurantsContainer';

import {
  loadRegions,
  loadCategories,
} from './modules/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
