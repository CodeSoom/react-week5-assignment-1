import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ButtonList from './ButtonList';

import {
  selectRegion,
} from './actions';

export default function RegionContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => ({
    selectedRegion: state.selectedRegion,
    regions: state.regions,
  }));

  function handleClickRegion(id) {
    dispatch(selectRegion(id));
  }

  return (
    <ButtonList
      labels={regions}
      onClick={handleClickRegion}
      selectedId={selectedRegion}
    />
  );
}
