import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { setRegion, loadRestaurants } from './actions';

export default function RegionsContainer() {
  const { regionName, categoryId, regions } = useSelector((state) => ({
    regionName: state.regionName,
    categoryId: state.categoryId,
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  function handleClick(region) {
    dispatch(setRegion(region));
    dispatch(loadRestaurants(region.name, categoryId));
  }

  return (
    <Regions
      clickedRegionName={regionName}
      regions={regions}
      onClick={handleClick}
    />
  );
}
