import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { regionClick } from './actions';

export default function RegionsContainer() {
  const regions = useSelector((state) => state.regions);

  const dispatch = useDispatch();

  function handleRegionClick(event) {
    const regionName = event.target.name;
    dispatch(regionClick(regionName));
  }

  return (<Regions regions={regions} onClick={handleRegionClick} />);
}
