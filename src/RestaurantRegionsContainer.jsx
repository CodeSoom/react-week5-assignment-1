import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantRegions from './RestaurantRegions';

import { changeRegion } from './actions';

export default function RestaurantRegionsContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((selector) => ({
    regions: selector.regions,
    region: selector.region,
  }));

  function handleClick(event) {
    dispatch(changeRegion({ name: event.target.dataset.name }));
  }

  return (
    <>
      <RestaurantRegions regions={regions} onClick={handleClick} />
    </>
  );
}
