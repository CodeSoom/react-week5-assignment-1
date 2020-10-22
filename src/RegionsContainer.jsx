import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  loadRegions,
  checkedRegion,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  function handleClick({ name }) {
    dispatch(checkedRegion({ name }));
  }

  return (
    <Regions regions={regions} onClick={handleClick} />
  );
}
