import React from 'react';

import { useSelector } from 'react-redux';

import Region from './Region';

export default function RegionContainer() {
  const { region } = useSelector((state) => ({
    regions: state.regions,
  }));

  return <Region region={region} />;
}
