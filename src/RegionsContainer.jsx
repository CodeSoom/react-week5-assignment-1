import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  selectRegion,
} from './actions';

export default function RegionsContianer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const { selectRegion } = useSelector((state) => ({
    selectRegion: state.selectRegion,
  }));

  const handleClickRegion = (regionId) => {
    dispatch(selectRegion(regionId));
  };

  return (
    <Regions regions={regions} onClick={handleClickRegion} />
  );
}
