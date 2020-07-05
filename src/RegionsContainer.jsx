import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectRegion,
} from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  function handleClick(id) {
    dispatch(selectRegion(id));
  }
  return (
    <Regions
      regions={regions}
      onClick={handleClick}
      selectedRegion={selectedRegion}
    />
  );
}
