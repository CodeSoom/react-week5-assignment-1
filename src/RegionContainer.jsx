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

    if (buttonText.includes('(V)')) {
      return;
    }

    const selectedRegion = regions.filter((region) => region.name === buttonText)[0];

    dispatch(setSelectedButton({ type: 'region', value: selectedRegion }));
  }

  return (
    <Buttons
      selectedButton={selectedRegionName}
      buttons={regions}
      onClickSelect={handleClickSelect}
    />
  );
}
