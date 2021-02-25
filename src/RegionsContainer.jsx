import React from 'react';

import { useSelector } from 'react-redux';

import Regions from './Regions';

export default function RegionsContianer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <div>
      <Regions regions={regions} />
    </div>
  );
}
