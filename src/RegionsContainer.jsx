import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import { selectRegion } from './action';

export default function RegionsContainer() {
  const { regions, newSelectRegion } = useSelector((state) => ({
    regions: state.regions,
    newSelectRegion: state.newSelectRegion,
  }));

  const dispatch = useDispatch();

  function handleSelectRegion(newRegion) {
    dispatch(selectRegion(newRegion));
  }

  return (
    <Regions
      regions={regions}
      newSelectRegion={newSelectRegion}
      onSelectRegions={handleSelectRegion}
    />
  );
}
