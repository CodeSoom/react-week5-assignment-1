import React from 'react';

import RestaurantRegions from './RestaurantRegions';

export default function RestaurantRegionsContainer() {
  const restaurantRegions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
  ];

  return (
    <RestaurantRegions restaurantRegions={restaurantRegions} />
  );
}
