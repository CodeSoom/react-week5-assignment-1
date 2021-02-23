import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { changeSelectedRegion } from './actions';

import Buttons from './Buttons';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegionID } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionID: state.selectedRegionID,
  }));

  function handleClick(id) {
    return dispatch(changeSelectedRegion(id));
  }

  return (
    <Buttons
      list={regions}
      selectedID={selectedRegionID}
      onClick={handleClick}
    />
  );
}
