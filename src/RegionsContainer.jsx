import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import { selectRegion, loadRestaurants } from './action';

export default function RegionsContainer() {
  const {
    regions, selectedRegion,
  } = useSelector(
    (state) => ({
      regions: state.regions,
      selectedRegion: state.selectedRegion,
    }),
  );

  const dispatch = useDispatch();

  function handleSelectRegion(region) {
    dispatch(selectRegion(region));
    dispatch(loadRestaurants());
  }

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onSelectRegion={handleSelectRegion}
    />
  );
}
