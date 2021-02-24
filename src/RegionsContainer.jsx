import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { changeSelectedRegion } from './actions';

import Buttons from './Buttons';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegionId } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionId: state.selectedRegionId,
  }));

  function handleClick(id) {
    return dispatch(changeSelectedRegion(id));
  }

  return (
    <Buttons
      list={regions}
      selectedId={selectedRegionId}
      onClick={handleClick}
    />
  );
}
