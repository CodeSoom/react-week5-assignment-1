import React from 'react';

import Regions from './Regions';

export default function RegionsContainer() {
  const regions = [{ id: 1, name: '서울' }, { id: 2, name: '대전' }];

  return (<Regions regions={regions} />);
}
