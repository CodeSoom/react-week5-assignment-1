import React from 'react';

import RestaurantRegions from './RestaurantRegions';

export default function RestaurantRegionsContainer() {
  const regions = [
    { id: 1, name: '미국' },
  ];

  return (
    <RestaurantRegions regions={regions} />
  );
}
