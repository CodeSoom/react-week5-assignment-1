import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { updateRegion, loadRestaurants } from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const { regions, region } = useSelector((state) => ({
    regions: state.regions,
    region: state.region,
  }));

  function handleClick(region) {
    dispatch(updateRegion(region));
    dispatch(loadRestaurants());
  }

  return (
    <>
      <Regions
        regions={regions}
        selectRegion={region}
        onClick={handleClick}
      />
    </>
  );
}
