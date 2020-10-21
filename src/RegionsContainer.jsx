import React from 'react';

import Regions from './Regions';

export default function RegionsContainer() {
  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
    { id: 3, name: '대구' },
  ];

  return (
    <Regions regions={regions} />
  );
}
