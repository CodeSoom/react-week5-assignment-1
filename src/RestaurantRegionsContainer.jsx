import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantRegions from './RestaurantRegions';

import {
  selectRegion,
} from './actions';

export default function RestaurantRegionsContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClick(event) {
    dispatch(selectRegion(event.target.value));
  }

  return (
    <>
      <RestaurantRegions
        regions={regions}
        onClick={handleClick}
      />
    </>
  );
}
