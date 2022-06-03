import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRegions,
  selectRegionId,
} from '../redux/actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const { selectedRegionId, regions, errorMessage } = useSelector((state) => ({
    selectedRegionId: state.selectedRegionId,
    regions: state.regions,
    errorMessage: state.errorMessage,
  }));

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(selectRegionId(id));
  };

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <Regions
      selectedId={selectedRegionId}
      regions={regions}
      errorMessage={errorMessage}
      onClick={handleClick}
    />
  );
}
