import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Buttons from './Buttons';
import { selectRegion } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  function handleClick(region) {
    dispatch(selectRegion(region));
  }

  return (
    <Buttons
      buttons={regions}
      onClick={handleClick}
      selectedButton={selectedRegion}
    />
  );
}
