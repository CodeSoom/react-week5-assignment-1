import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  selectRegion,
  getRegions,
} from './modules/actions';

export default function ResgionsContainer() {
  const dispatch = useDispatch();

  const { regions, selected } = useSelector((state) => ({
    regions: state.regions,
    selected: state.selected.region,
  }));

  function handleClick(region) {
    dispatch(selectRegion(region));
    dispatch(getRegions());
  }

  return (
    <>
      <Regions
        regions={regions}
        selected={selected}
        onClick={handleClick}
      />
    </>
  );
}
