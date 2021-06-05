import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Button from './Button';

import {
  selecteRegion,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  function handleClick(region) {
    dispatch(selecteRegion(region));
  }

  return (
    <Button
      buttons={regions}
      onclick={handleClick}
      selectedButton={selectedRegion}
    />
  );
}
