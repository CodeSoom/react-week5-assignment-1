import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { selectRegion } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClickSelectRegion(id) {
    return dispatch(selectRegion(id));
  }

  return (
    <Regions
      regions={regions}
      onClick={handleClickSelectRegion}
    />
  );
}
