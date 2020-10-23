import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setSelectedButton } from './actions';

import Buttons from './Buttons';

export default function RegionContainer() {

  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedButtons.region,
  }));

  function handleClickSelect(event) {
    const selectedButtonValue = {
      type: event.target.name,
      value: event.target.textContent,
    };

    dispatch(setSelectedButton(selectedButtonValue));
  }

  return (
    <Buttons
      type="region"
      selectedButton={selectedRegion}
      buttonNames={regions}
      onClickSelect={handleClickSelect}
    />
  );
}
