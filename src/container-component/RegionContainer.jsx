import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ButtonList from '../presentational-component/ButtonList';

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
    <ButtonList
      labels={regions}
      onClick={handleClickRegion}
      selectedId={selectedRegionId}
    />
  );
}
