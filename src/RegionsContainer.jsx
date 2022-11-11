import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRegions, selectedRegion } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  const { regions, selectedRegionName } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionName: state.selectedRegion,
  }));

  const handleClick = (name) => {
    dispatch(selectedRegion(name));
  };

  return (
    <Regions
      regions={regions}
      onClick={handleClick}
      selectedRegionName={selectedRegionName}
    />
  );
}
