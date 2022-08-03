import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import {
  setRegions,
  markSelectedRegion,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  useEffect(() => {
    dispatch(setRegions(regions));
  }, [regions]);

  function handleRegionClick(regionName) {
    dispatch(markSelectedRegion(regionName));
  }

  return (
    <Regions regions={regions} onClick={handleRegionClick} />
  );
}
