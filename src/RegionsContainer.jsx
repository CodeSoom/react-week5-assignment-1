import { useDispatch, useSelector } from 'react-redux';

import { setRegion } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { selectedRegion, regions } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.region,
  }));

  const updateSelectedRegion = (region) => {
    dispatch(setRegion(region));
  };

  return (
    <Regions
      selectedRegion={selectedRegion}
      regions={regions}
      updateSelectedRegion={updateSelectedRegion}
    />
  );
}
