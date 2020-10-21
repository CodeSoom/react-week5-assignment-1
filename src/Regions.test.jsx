import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

test('Regions', () => {
  const regions = ['서울', '대전', '대구'];

  const { getByText } = render((
    <Regions regions={regions} />
  ));

  regions.forEach((region) => {
    expect(getByText(region)).not.toBeNull();
  });
});
