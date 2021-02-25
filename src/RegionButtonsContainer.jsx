import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RegionButtons from './RegionButtons';

import {
  setRegion,
} from './actions';

export default function RegionButtonsContainer() {
  const dispatch = useDispatch();

  const { currentRegion } = useSelector((state) => ({
    currentRegion: state.currentRegion,
  }));

  function handleClick(region) {
    dispatch(setRegion(region));
  }

  return (
    <ul>
      <RegionButtons
        onClick={handleClick}
        currentRegion={currentRegion}
      />
    </ul>
  );
}
