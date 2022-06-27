import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRegions,
  selectRegion,
} from '../redux/actions';
import { get } from '../utils';

import Regions from './Regions';

export default function RegionsContainer() {
  const selectedRegion = useSelector(get('selectedRegion'));
  const regions = useSelector(get('regions'));
  const errorMessage = useSelector(get('errorMessage'));

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
      errorMessage={errorMessage.regions}
      onClick={handleClick}
    />
  );
}
