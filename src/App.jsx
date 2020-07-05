import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';
import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import {
  loadRegions,
  loadCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <>
      <RestaurantRegionsContainer />
      <RestaurantCategoriesContainer />
      <ul>
        {restaurants && restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </>
  );
}
