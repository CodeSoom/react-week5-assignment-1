import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadRegions,
} from '../actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <Regions regions={regions} />
  );
}
