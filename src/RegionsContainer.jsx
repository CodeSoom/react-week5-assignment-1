import React from 'react';

import Regions from './Regions';

import regions from '../fixtures/regions';

export default function RegionsContainer() {
  return (
    <Regions regions={regions} />
  );
}
