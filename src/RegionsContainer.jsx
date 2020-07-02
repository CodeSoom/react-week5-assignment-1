import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Buttons from './Buttons';

import { setRegion } from './actions';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  function handleClickChooseRegion(regionName) {
    dispatch(setRegion(regionName));
  }

  return (
    <Buttons
      values={regions}
      onClick={handleClickChooseRegion}
    />
  );
}
