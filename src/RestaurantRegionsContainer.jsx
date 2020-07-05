import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantRegions from './RestaurantRegions';

import { changeRegion } from './actions';

export default function RestaurantRegionsContainer() {
  const dispatch = useDispatch();

  const { regions, region } = useSelector((selector) => ({
    regions: selector.regions,
    region: selector.region,
  }));

  function handleClick(event) {
    dispatch(changeRegion(regions.find((v) => v.name === event.target.name)));
  }

  return (
    <>
      <RestaurantRegions regions={regions} onClick={handleClick} selected={region} />
    </>
  );
}
