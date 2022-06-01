import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setRegions,
} from '../actions';

import mockRegions from '../../fixture/regions';

import Regions from './Regions';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegions(mockRegions));
  }, []);

  return (
    <Regions regions={regions} />
  );
}
