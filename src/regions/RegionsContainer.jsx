import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  selectRegion,
  loadRestaurants,
} from '../redux/actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const state = useSelector(({ region, category }) => ({
    regions: region.regions,
    selectedRegionName: region.selectedName,
    selectedCategoryId: category.selectedId,
  }));

  const { regions, selectedRegionName, selectedCategoryId } = state;

  const handleClickSelectRegion = (regionName) => {
    if (selectedRegionName !== regionName) {
      dispatch(loadRestaurants(regionName, selectedCategoryId));
    }
    dispatch(selectRegion(regionName));
  };

  return (
    <Regions
      regions={regions}
      selectedRegionName={selectedRegionName}
      onClickSelectRegion={handleClickSelectRegion}
    />
  );
}
