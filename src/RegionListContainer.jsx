import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { changeSelectedRegion } from './actions';

import RegionList from './RegionList';

export default function RegionListContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegionID } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionID: state.selectedRegionID,
  }));

  function handleClick(event) {
    return dispatch(changeSelectedRegion(Number(event.target.name)));
  }

  return (
    <RegionList
      regions={regions}
      selectedRegionID={selectedRegionID}
      onClick={handleClick}
    />
  );
}
