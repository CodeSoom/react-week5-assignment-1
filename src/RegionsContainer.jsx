import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { setSelectedRegionName } from './actions';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  function handleClick(event) {
    const regionName = event.target.textContent;

    dispatch(setSelectedRegionName(regionName));
  }
  return (
    <Regions regions={regions} onClick={handleClick} />
  );
}
