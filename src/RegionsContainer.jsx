import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRegions } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <Regions regions={regions} />
  );
}
