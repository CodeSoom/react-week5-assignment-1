import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectRegion, loadRestaurants } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const { selectedRegionId, regions } = useSelector((state) => ({
    selectedRegionId: state.selectedRegionId,
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(selectRegion(id));
    dispatch(loadRestaurants());
  }

  return (
    <div>
      <Regions
        selectedRegionId={selectedRegionId}
        regions={regions}
        onClick={handleClick}
      />
    </div>
  );
}
