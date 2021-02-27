import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  selectRegion,
} from './actions';

export default function RegionsContianer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  const handleClickRegion = (region) => {
    dispatch(selectRegion(region));
  };

  return (
    <Regions regions={regions} onClick={handleClickRegion} />
  );
}
