import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantRegions from './RestaurantRegions';

export default function RestaurantRegionsContainer() {
  function handleClick() {
    return {};
  }

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <RestaurantRegions
      regions={regions}
      onClick={handleClick}
    />
  );
}
