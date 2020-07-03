import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Regions from '../Components/Regions';

import { loadRegions, setRegionName, loadRestaurants } from '../actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, regionName, categoryId } = useSelector((state) => ({
    regions: state.regions,
    regionName: state.regionName,
    categoryId: state.categoryId,
  }));

  const handleClickRegion = (name) => {
    dispatch(setRegionName(name));
  };

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  useEffect(() => {
    if (regionName && categoryId) {
      dispatch(loadRestaurants(regionName, categoryId));
    }
  }, [regionName]);

  return (
    <Regions regions={regions} selected={regionName} handleClickRegion={handleClickRegion} />
  );
}
