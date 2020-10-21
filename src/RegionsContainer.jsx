import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

export default function App() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClick(id, isChecked) {
    dispatch({ type: 'checkRegions', payload: { id, isChecked } });
  }

  return (
    <Regions regions={regions} onClick={handleClick} />
  );
}
