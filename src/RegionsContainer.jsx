import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { loadRestaurants, selectRegion } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  function handleClickRegion(region) {
    dispatch(selectRegion(region));
    dispatch(loadRestaurants());
  }

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onClick={handleClickRegion}
    />
  );
}
