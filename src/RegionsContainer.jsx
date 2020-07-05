import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { setRegion } from './actions';

export default function RegionsContainer() {
  const { regionName, regions } = useSelector((state) => ({
    regionName: state.regionName,
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  function handleClick(region) {
    dispatch(setRegion(region));
  }

  return (
    <Regions
      clickedRegionName={regionName}
      regions={regions}
      onClick={handleClick}
    />
  );
}
