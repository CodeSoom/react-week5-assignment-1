import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  selectedRegion,
  loadRestaurants,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, regionName } = useSelector((state) => ({
    regions: state.regions,
    regionName: state.selectedRegionName,
  }));

  const handleClickRegion = (name) => {
    dispatch(selectedRegion(name));
    dispatch(loadRestaurants());
  };

  return (
    <Regions
      regions={regions}
      selectedRegion={regionName}
      onClick={handleClickRegion}
    />
  );
}
