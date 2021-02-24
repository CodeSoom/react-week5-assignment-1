import React from 'react';

import Regions from './Regions';

import regions from './fixtures/regions';

export default function RegionsContianer() {
  return (
    <div>
      <Regions regions={regions} />
    </div>
  );
}
