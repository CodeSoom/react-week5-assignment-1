import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from '../components/Regions';

import {
  selectRegion,
  loadRestaurants,
} from '../modules/actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  function handleClickRegion(name) {
    dispatch(selectRegion(name));
    dispatch(loadRestaurants());
  }

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onClick={handleClickRegion}
    />
  );
}
