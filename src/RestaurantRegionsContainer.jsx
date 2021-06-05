import React from 'react';

import RestaurantRegions from './RestaurantRegions';
import {useSelector} from "react-redux";

export default function RestaurantRegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <RestaurantRegions regions={regions} />
  );
}
