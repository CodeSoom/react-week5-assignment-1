import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.regions,
  }));

  const updateSelectedRegions = (region) => {
    dispatch(selectedRegion(region));
  };

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      updateSelectedRegions={updateSelectedRegions}
    />
  );
}
