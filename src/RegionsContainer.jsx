import React, { useEffect } from 'react';

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
      clickedRegionsName={regionName}
      values={regions}
      onClick={handleClick}
    />
  );
}
