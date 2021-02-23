import React from 'react';
import Regions from './Regions';

export default function RegionsContainer() {
  const regions = [{ id: 1, title: '서울' }];

  return (
    <Regions regions={regions} />
  );
}
