import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { changeSelectedRegion } from './actions';

import Buttons from './Buttons';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  function handleClick(regionId) {
    const region = regions.find(({ id }) => id === regionId);

    return dispatch(changeSelectedRegion(region));
  }

  return (
    <Buttons
      list={regions}
      selectedId={selectedRegion?.id}
      onClick={handleClick}
    />
  );
}
