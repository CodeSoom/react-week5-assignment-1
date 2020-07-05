import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Buttons from './Buttons';

import { setRegion } from './actions';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  function handleClick(region) {
    dispatch(setRegion(region));
  }

  return (
    <Buttons
      values={regions}
      onClick={handleClick}
    />
  );
}
