import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Regions from '../components/Regions';
import { updateRegion } from '../modules/actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClickRegion(region) {
    dispatch(updateRegion(region));
  }

  return (
    <Regions
      regions={regions}
      selected="서울"
      onClick={handleClickRegion}
    />
  );
}
