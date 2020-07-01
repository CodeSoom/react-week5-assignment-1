import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Regions from '../Components/Regions';
import { loadRegions, updateSearchRegion } from '../actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, searchQuery } = useSelector((state) => ({
    regions: state.regions,
    searchQuery: state.searchQuery,
  }));

  const handleClickRegion = (regionId) => {
    dispatch(updateSearchRegion(regionId));
  };

  useEffect(() => {
    dispatch(loadRegions());
  }, []);
  return (
    <Regions
      regions={regions}
      selectedRegionName={searchQuery.regionName}
      handleClickRegion={handleClickRegion}
    />
  );
}
