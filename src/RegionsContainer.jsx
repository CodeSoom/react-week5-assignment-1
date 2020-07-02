import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Buttons from './Buttons';

import { setRegion, loadRegions } from './actions';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  function handleClickChooseRegion(regionName) {
    dispatch(setRegion(regionName));
  }

  dispatch(loadRegions());

  return (
    <Buttons
      values={regions}
      onClick={handleClickChooseRegion}
    />
  );
}
