import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { checkRegion } from './actions';

import RestaurantRegions from './RestaurantRegions';

export default function RestaurantRegionsContainer() {
  const dispatch = useDispatch();

  const handleClickRegion = (id) => {
    dispatch(checkRegion(id));
  };

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <RestaurantRegions
      regions={regions}
      onClickRegion={handleClickRegion}
    />
  );
}
