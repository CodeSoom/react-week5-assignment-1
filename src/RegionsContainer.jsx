import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import {
  loadRegions,
  selectRegion,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, region } = useSelector((state) => ({
    regions: state.regions,
    region: state.region,
  }));

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  function handleRegionClick(regionName) {
    dispatch(selectRegion(regionName));
  }

  return (
    <Regions regions={regions} selectedRegionName={region.name} onClick={handleRegionClick} />
  );
}
