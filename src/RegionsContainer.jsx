import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import {
  setRegions,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  useEffect(() => {
    dispatch(setRegions(regions));
  }, [regions]);

  return (
    <Regions regions={regions} />
  );
}
