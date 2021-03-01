import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectRegion } from './actions';

import Buttons from './Buttons';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  function setSelected(selectedId) {
    const selected = regions.find(({ id }) => id === selectedId);
    dispatch(selectRegion(selected));
  }

  return (
    <Buttons
      buttons={regions}
      handleClick={setSelected}
      selected={selectedRegion?.id}
    />
  );
}
