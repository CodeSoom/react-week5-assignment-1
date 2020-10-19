import React from 'react';

import { useSelector } from 'react-redux';

import Regions from './Regions';

export default function RestaurantRegionsContainer() {
  const { restaurantRegions } = useSelector((state) => ({
    restaurantRegions: state.restaurantRegions,
  }));

  return (
    <Regions restaurantRegions={restaurantRegions} />
  );
}
