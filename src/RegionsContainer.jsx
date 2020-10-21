import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { checkRegions, initializeCheckedItem } from './actions';

import Regions from './Regions';

export default function App() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClick(id, isChecked) {
    dispatch(checkRegions({ id, isChecked }));

    dispatch(initializeCheckedItem({ id }));
  }

  return (
    <Regions regions={regions} onClick={handleClick} />
  );
}
