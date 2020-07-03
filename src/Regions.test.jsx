import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

test('Regions', () => {
  const { getByText } = render((
    <Regions
      regions={regions}
    />
  ));

  expect(getByText(/서울/)).not.toBeNull();
});
