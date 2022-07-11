import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Regions from '../components/Regions';
import { selectRegion } from '../store/actions';

import { getRegions } from '../store/async-actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegions());
  }, []);

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  const handleClickRegion = (region) => {
    dispatch(selectRegion(region));
  };

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onClick={handleClickRegion}
    />
  );
}
