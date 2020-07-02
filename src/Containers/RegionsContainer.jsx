import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Regions from '../Components/Regions';

import { loadRegions, setRegionName } from '../actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, regionName } = useSelector((state) => ({
    regions: state.regions,
    regionName: state.regionName,
  }));

  const handleClickRegion = (name) => {
    dispatch(setRegionName(name));
  };

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <Regions regions={regions} selected={regionName} handleClickRegion={handleClickRegion} />
  );
}
