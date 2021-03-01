import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import { setSelectedRegionId, loadRestaurants } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, selectedCatId, selectedRegionId } = useSelector((state) => ({
    regions: state.regions,
    selectedCatId: state.selectedCatId,
    selectedRegionId: state.selectedRegionId,
  }));

  function changeSelectedRegionId(id) {
    dispatch(setSelectedRegionId(id));
    dispatch(loadRestaurants(selectedCatId, regions.find((region) => region.id === id).name));
  }

  return (
    <Regions
      regions={regions}
      selectedRegionId={selectedRegionId}
      onClick={changeSelectedRegionId}
    />
  );
}
