import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantRegions from './RestaurantRegions';

import {
  setRegion,
} from './actions';

export default function RestaurantRegionsContainer() {
  const dispatch = useDispatch();

  function handleClick(region) {
    dispatch(setRegion(region));
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
