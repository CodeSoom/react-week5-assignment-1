import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  updateSelected,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { region, regions } = useSelector((state) => ({
    region: state.selected.region,
    regions: state.regions,
  }));

  function handleClick(type, name) {
    dispatch(updateSelected(type, name));
  }

  return (
    <Regions
      selected={region}
      regions={regions}
      onClick={handleClick}
    />
  );
}
