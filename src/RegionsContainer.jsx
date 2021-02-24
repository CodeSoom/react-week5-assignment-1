import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { regionClick } from './actions';

export default function RegionsContainer() {
  const regions = useSelector((state) => state.regions);

  const dispatch = useDispatch();

  function handleRegionClick(id) {
    dispatch(regionClick(id));
  }

  return (<Regions regions={regions} onClick={handleRegionClick} />);
}
