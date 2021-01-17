import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Buttons from '../presentational-component/Buttons';

import {
  selectOption,
} from '../actions';

export default function RegionContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegionId } = useSelector((state) => ({
    selectedRegionId: state.selectedOption.region,
    regions: state.option.regions,
  }));

  function handleClickRegion(id) {
    dispatch(selectOption('region', id));
  }

  return (
    <Buttons
      labels={regions}
      onClick={handleClickRegion}
      selectedId={selectedRegionId}
    />
  );
}
