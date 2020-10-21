import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { checkRegions, initializeCheckedRegions } from './actions';

import Regions from './Regions';

export default function App() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClick(id, isChecked) {
    dispatch(checkRegions({ id, isChecked }));

    dispatch(initializeCheckedRegions({ id }));
  }

  return (
    <Regions regions={regions} onClick={handleClick} />
  );
}
