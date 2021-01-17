import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Buttons from '../components/Buttons';
import { selectRegion, loadRestaurants } from '../modules/actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selected } = useSelector((state) => ({
    regions: state.regions,
    selected: state.selected.region,
  }));

  function handleClickRegion(region) {
    dispatch(selectRegion(region));
    dispatch(loadRestaurants());
  }

  return (
    <Buttons
      items={regions}
      selected={selected}
      onClick={handleClickRegion}
    />
  );
}
