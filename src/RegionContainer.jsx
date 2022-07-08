import React from 'react';

import { useSelector } from 'react-redux';

import Region from './Region';

export default function RegionContainer() {
  const { region } = useSelector((state) => ({
    region: state.region,
  }));

  return <Region region={region} />;
}
