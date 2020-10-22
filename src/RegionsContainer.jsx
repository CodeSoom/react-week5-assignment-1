import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  loadRegions,
  checkedRegion,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, regionName } = useSelector((state) => ({
    regions: state.regions,
    regionName: state.regionName,
  }));

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  function handleClick({ name }) {
    dispatch(checkedRegion({ name }));
  }

  return (
    <Regions
      regions={regions}
      regionName={regionName}
      onClick={handleClick}
    />
  );
}
