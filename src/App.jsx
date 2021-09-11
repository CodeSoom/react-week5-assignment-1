import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './containers/RegionsContainer';
import CategoriesContainer from './containers/CategoriesContainer';
import RestaurantsContainer from './containers/RestaurantsContainer';

import {
  loadInitialData,
} from './modules/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      Restaurants
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
