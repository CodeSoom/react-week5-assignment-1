import React from 'react';

import { useSelector } from 'react-redux';

import Regions from './Regions';

export default function RegionsContainer() {
  const regions = useSelector((state) => state.regions);
  console.log(regions);
  return (<Regions regions={regions} />);
}
