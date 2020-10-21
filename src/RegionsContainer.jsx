import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { selectRegion } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClickRegion(selectedRegion) {
    return dispatch(selectRegion(selectedRegion));
  }

  return (
    <Regions
      regions={regions}
      onClick={handleClickRegion}
    />
  );
}
