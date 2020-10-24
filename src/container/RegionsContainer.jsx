import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Regions from '../components/Regions';
import { updateRegion } from '../modules/actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selected } = useSelector((state) => ({
    regions: state.regions,
    selected: state.selected.region,
  }));

  function handleClickRegion(region) {
    dispatch(updateRegion(region));
  }

  return (
    <Regions
      regions={regions}
      selected={selected}
      onClick={handleClickRegion}
    />
  );
}
