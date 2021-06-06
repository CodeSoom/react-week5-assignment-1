import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadRestaurantRegions } from './actions';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';
import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantRegions());
  }, []);

  return (
    <>
      <RestaurantRegionsContainer />
      <br />
      <RestaurantCategoriesContainer />
      <br />
      <RestaurantsContainer />
    </>
  );
}
