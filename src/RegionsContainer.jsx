import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import { selectRegion, loadRestaurants } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const {
    regions,
    selectedRegion,
  } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  function handleClick(event) {
    const { target: { id } } = event;

    dispatch(selectRegion(Number(id)));
    dispatch(loadRestaurants());
  }

  return (
    <Regions
      regions={regions}
      onClick={handleClick}
      selectedRegion={selectedRegion}
    />
  );
}
