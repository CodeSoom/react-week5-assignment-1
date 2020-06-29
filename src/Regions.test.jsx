import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

test('Regions', () => {
  const regions = [
    { id: 1, name: '부산' },
  ];

  const { getByText } = render((
    <Regions regions={regions} />
  ));

  expect(getByText('부산')).not.toBeNull();
});
