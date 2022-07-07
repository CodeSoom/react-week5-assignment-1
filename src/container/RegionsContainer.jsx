import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Regions from '../components/Regions';

import { getRegions } from '../store/async-actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  useEffect(() => {
    dispatch(getRegions());
  }, []);

  return (
    <Regions
      regions={regions}
    />
  );
}
