import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantRegions from './RestaurantRegions';

export default function RestaurantRegionsContainer() {
 const { restaurantRegions } = useSelector((state) => ({
    restaurantRegions: state.restaurantRegions,
  }));

  return (
    <RestaurantRegions restaurantRegions={restaurantRegions} />
  );
}
