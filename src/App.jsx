import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, {});

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantRegionsContainer />
    </div>
  );
}