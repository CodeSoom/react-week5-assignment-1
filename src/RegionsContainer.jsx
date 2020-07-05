import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import {
  selectRegion,
} from './actions';

export default function RegionsContainer() {
  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));
  const dispatch = useDispatch();

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
  }

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onClick={handleClick}
    />
  );
}
