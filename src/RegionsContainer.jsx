import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { updateRegion } from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClick(region) {
    dispatch(updateRegion(region));
  }

  return (
    <>
      <Regions
        regions={regions}
        onClick={handleClick}
      />
    </>
  );
}
