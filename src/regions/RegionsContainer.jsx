import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  selectRegion,
} from '../redux/actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegionId } = useSelector(({ region }) => ({
    regions: region.regions,
    selectedRegionId: region.selectedId,
  }));

  const handleClickSelectRegion = (regionName) => {
    dispatch(selectRegion(regionName));
  };

  return (
    <Regions
      regions={regions}
      selectedRegionId={selectedRegionId}
      onClickSelectRegion={handleClickSelectRegion}
    />
  );
}
