import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadCategories, loadRegions } from './actions';

import RestaurantCategoryContainer from './containers/RestaurantCategoryContainer';
import RestaurantRegionContainer from './containers/RestaurantRegionContainer';
import RestaurantDisplayContainer from './containers/RestaurantDisplayContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantCategoryContainer />
      <RestaurantRegionContainer />
      <RestaurantDisplayContainer />
    </div>
  );
}
