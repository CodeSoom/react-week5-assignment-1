import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { updateRegion, loadRestaurants } from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const { regions, selectRegion } = useSelector((state) => ({
    regions: state.regions,
    selectRegion: state.selectRegion,
  }));

  function handleClick(region) {
    dispatch(updateRegion(region));
    dispatch(loadRestaurants());
  }

  return (
    <Regions
      regions={regions}
      selectRegion={selectRegion}
      onClick={handleClick}
    />
  );
}
