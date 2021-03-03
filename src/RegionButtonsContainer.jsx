import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RegionButtons from './RegionButtons';

import {
  setRegion,
} from './actions';

export default function RegionButtonsContainer() {
  const dispatch = useDispatch();

  const { regions, currentRegion } = useSelector((state) => ({
    regions: state.regions,
    currentRegion: state.currentRegion,
  }));

  function handleClick(region) {
    dispatch(setRegion(region));
  }

  return (
    <RegionButtons
      regions={regions}
      onClick={handleClick}
      currentRegion={currentRegion}
    />
  );
}
