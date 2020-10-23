import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { selectRegion, loadRestaurants } from './actions';

export default function RegionsContainer() {
  const { regions, selectedRegionName } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionName: state.selectedRegionName,
  }));

  const dispatch = useDispatch();

  function handleClick(event) {
    const regionName = event.target.textContent;

    dispatch(selectRegion(regionName));
    dispatch(loadRestaurants());
  }
  return (
    <Regions
      regions={regions}
      selectedRegionName={selectedRegionName}
      onClick={handleClick}
    />
  );
}
