import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setSelectedButton } from './actions';

import Buttons from './Buttons';

export default function RegionContainer() {

  const dispatch = useDispatch();

  const { regions, selectedRegionName } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionName: state.selectedButtons.region.name,
  }));

  function handleClickSelect(event) {
    const buttonText = event.target.textContent;

    if (buttonText.indexOf('(V)') !== -1) {
      return;
    }

    const selectedRegion = regions.filter((region) => region.name === buttonText);

    const selectedButtonValue = {
      type: 'region',
      value: selectedRegion[0],
    };

    dispatch(setSelectedButton(selectedButtonValue));
  }

  return (
    <Buttons
      selectedButton={selectedRegionName}
      buttonNames={regions}
      onClickSelect={handleClickSelect}
    />
  );
}
