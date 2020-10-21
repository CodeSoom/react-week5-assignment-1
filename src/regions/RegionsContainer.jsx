import React from 'react';

import { useSelector } from 'react-redux';

import Regions from './Regions';

export default function RegionsContainer() {
  const { regions, selectedRegionName } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionName: state.query.regionName,
  }));

  return (
    <Regions regions={regions} selectedRegionName={selectedRegionName} />
  );
}
