import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  loadRestaurants,
  loadCategories,
} from './actions';

import RestaurantsCreatorContainer from './RestaurantsCreatorContainer';
import RestaurantsContainer from './RestaurantsContainer';
import CategoriesContainer from './CategoriesContainer';

// function loadRestaurants({ dispatch }) {
//   // todo load restaurants
//   // api server -> fetch data
//   const restaurants = [];
//   dispatch(setRestaurants(restaurants));
// }

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <CategoriesContainer />
      <RestaurantsContainer />
      <RestaurantsCreatorContainer />
    </div>
  );
}
