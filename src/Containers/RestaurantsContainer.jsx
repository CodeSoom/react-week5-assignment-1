import React from 'react';

import { useSelector } from 'react-redux';
import Restaurants from '../Components/Restaurants';

export default function RestautantsContainer() {
  const restaurants = useSelector((state) => state.restaurants);
  return (
    <Restaurants restaurants={restaurants} />
  );
}
