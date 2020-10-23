import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  selectRegion,
  loadRestaurants,
} from '../redux/actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegionName } = useSelector(({ region }) => ({
    regions: region.regions,
    selectedRegionName: region.selectedName,
  }));

  const handleClickSelectRegion = (regionName) => {
    dispatch(selectRegion(regionName));

    if (selectedRegionName !== regionName) {
      dispatch(loadRestaurants());
    }
  };

  return (
    <Regions
      regions={regions}
      selectedRegionName={selectedRegionName}
      onClickSelectRegion={handleClickSelectRegion}
    />
  );
}
