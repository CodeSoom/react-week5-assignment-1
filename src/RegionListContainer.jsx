import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { changeSelectedRegion } from './actions';

import Regions from './Regions';

export default function RegionListContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegionID } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionID: state.selectedRegionID,
  }));

  function handleClick(id) {
    return dispatch(changeSelectedRegion(id));
  }

  return (
    <Regions
      regions={regions}
      selectedRegionID={selectedRegionID}
      onClick={handleClick}
    />
  );
}
