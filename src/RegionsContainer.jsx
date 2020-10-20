import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClickSelectRegion() {
    return dispatch();
  }

  return (
    <Regions
      regions={regions}
      onClick={handleClickSelectRegion}
    />
  );
}
