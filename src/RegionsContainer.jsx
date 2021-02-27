import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { regionSelect, loadRestaurants } from './actions';

export default function RegionsContainer() {
  const regions = useSelector((state) => state.regions);

  const dispatch = useDispatch();

  function handleRegionClick(event) {
    const regionName = event.target.name;
    dispatch(regionSelect(regionName));
    dispatch(loadRestaurants());
  }

  return (<Regions regions={regions} onClick={handleRegionClick} />);
}
