import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { setSelectedRegion } from './actions';

import Region from './Region';

export default function RegionContainer({ region }) {
  const { selectedRegion } = useSelector((state) => ({
    selectedRegion: state.selectedRegion,
  }));

  function isSelcted() {
    if (region.name === selectedRegion) {
      return `${region.name}(v)`;
    }

    return region.name;
  }

  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(setSelectedRegion(region.id));
  }

  const regionName = isSelcted();

  return (
    <Region name={regionName} onClick={clickHandler} />
  );
}
