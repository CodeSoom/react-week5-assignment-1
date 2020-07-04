import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import { selectRegion } from './actions';

export default function RegionsContainer() {
  const { regions, regionName } = useSelector((state) => ({
    regions: state.regions,
    regionName: state.regionName,
  }));

  const dispatch = useDispatch();

  function handleClick(name) {
    dispatch(selectRegion(name));
  }

  return (
    <Regions
      regions={regions}
      regionName={regionName}
      onClick={handleClick}
    />
  );
}
