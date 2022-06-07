import { useDispatch, useSelector } from 'react-redux';

import { setRegion } from './action';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.region,
  }));

  const updateSelectedRegion = (region) => {
    dispatch(setRegion(region));
  };

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      updateSelectedRegion={updateSelectedRegion}
    />
  );
}
