import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

test('Categories', () => {
  const regions = [];
  const selectedRegionName = '';
  const handleClickRegion = jest.fn();

  const { getByText } = render((
    <Regions
      regions={regions}
      selectedRegionName={selectedRegionName}
      handleClickRegion={handleClickRegion}
    />
  ));
});
