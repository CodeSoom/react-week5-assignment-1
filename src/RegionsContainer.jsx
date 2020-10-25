import React from 'react';

import { useSelector } from 'react-redux';

import Regions from './Regions';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <div>
      <Regions regions={regions} />
    </div>
  );
}
