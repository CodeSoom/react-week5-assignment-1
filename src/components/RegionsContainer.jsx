import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRegions,
  selectRegion,
} from '../redux/actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const { selectedRegion, regions, errorMessage } = useSelector((state) => ({
    selectedRegion: state.selectedRegion,
    regions: state.regions,
    errorMessage: state.errorMessage.regions,
  }));

  const dispatch = useDispatch();

  const handleClick = (name) => {
    dispatch(selectRegion(name));
  };

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <Regions
      selectedRegion={selectedRegion}
      regions={regions}
      errorMessage={errorMessage}
      onClick={handleClick}
    />
  );
}
