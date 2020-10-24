import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  loadRegions,
  selectRegion,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, regionId } = useSelector((state) => ({
    regions: state.regions,
    regionId: state.selectedRegion.regionId,
  }));

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  function handleClick({ name, id }) {
    dispatch(selectRegion({ name, id }));
  }

  return (
    <Regions
      regions={regions}
      regionId={regionId}
      onClick={handleClick}
    />
  );
}
