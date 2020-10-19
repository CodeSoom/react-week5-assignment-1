import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import { setRestaurantRegions } from './actions';

import restaurantRegions from '../__fixtures__/restaurantRegions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurantRegions(restaurantRegions));
  }, {});

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantRegionsContainer />
    </div>
  );
}
