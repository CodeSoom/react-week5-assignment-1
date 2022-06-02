import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRegions,
} from '../redux/actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const { regions, errorMessage } = useSelector((state) => ({
    regions: state.regions,
    errorMessage: state.errorMessage,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <Regions regions={regions} errorMessage={errorMessage} />
  );
}
