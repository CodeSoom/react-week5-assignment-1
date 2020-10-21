import React from 'react';

import Regions from './Regions';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <Regions regions={regions} />
  );
}
