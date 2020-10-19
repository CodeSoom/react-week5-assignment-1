import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import { setRestaurantRegions } from './actions';

function loadRestaurantRegions({ dispatch }) {
  const restaurantRegions = [];

  dispatch(setRestaurantRegions(restaurantRegions));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRestaurantRegions({ dispatch });
  }, {});

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantRegionsContainer />
    </div>
  );
}
