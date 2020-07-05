import React from 'react';

import { useSelector } from 'react-redux';

import Regions from './Regions';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClick() {
  }

  return (
    <Regions
      regions={regions}
      onClick={handleClick}
    />
  );
}
