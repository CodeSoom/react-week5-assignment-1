import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import restaurants from '../fixtures/restaurants';

import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';
import RestaurantCreateContainer from './RestaurantCreateContainer';

import {
  setRestaurants,
  loadRestaurants,
  loadCategories,
} from './actions';


export default function App() {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRestaurants());
  }, []);
  return (
    <div>
      <h1>Restaurants</h1>
      <CategoriesContainer/>
      <RestaurantsContainer/>
      <RestaurantCreateContainer />
    </div>
  );
}
