import React from 'react';

import { useDispatch } from 'react-redux';

import { setSelectedRegion } from './actions';

import Region from './Region';

export default function RegionContainer({ region }) {
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(setSelectedRegion(region.id));
  }

  return (
    <Region name={region.name} onClick={clickHandler} />
  );
}
