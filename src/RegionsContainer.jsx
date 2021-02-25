import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { loadRestaurants, regionClick } from './actions';

export default function RegionsContainer() {
  const regions = useSelector((state) => state.regions);

  const dispatch = useDispatch();

  function handleRegionClick(event) {
    const regionName = event.target.name;
    const id = useSelector((state) => state.categoryId);
    dispatch(regionClick(regionName));
    dispatch(loadRestaurants(regionName, id));
  }

  return (<Regions regions={regions} onClick={handleRegionClick} />);
}
