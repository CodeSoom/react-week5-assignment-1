import React from 'react';

import Regions from './Regions';

export default function RegionsContainer() {
  const regions = ['서울', '대전', '대구'];

  return (
    <Regions regions={regions} />
  );
}
