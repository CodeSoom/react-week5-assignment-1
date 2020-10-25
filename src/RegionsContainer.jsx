import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  selectedRegion,
  loadRestaurants,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectRegion } = useSelector((state) => ({
    regions: state.regions,
    selectRegion: state.selectedRegion,
  }));

  const handleClickRegion = (name) => {
    dispatch(selectedRegion(name));
    dispatch(loadRestaurants());
  };

  return (
    <Regions
      regions={regions}
      selectedRegion={selectRegion}
      onClick={handleClickRegion}
    />
  );
}
