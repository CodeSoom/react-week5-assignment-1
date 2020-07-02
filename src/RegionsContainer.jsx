import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import { selectRegion } from './action';

export default function RegionsContainer() {
  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  const dispatch = useDispatch();

  function handleSelectRegion(newRegion) {
    dispatch(selectRegion(newRegion));
  }

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onSelectRegion={handleSelectRegion}
    />
  );
}
