import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectRegion } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClick(name) {
    dispatch(selectRegion(name));
  }

  return (
    <div>
      <Regions
        regions={regions}
        onClick={handleClick}
      />
    </div>
  );
}
