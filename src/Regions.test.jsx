import React from 'react';

import { render } from '@testing-library/react';

import regions from '../fixtures/regions';

import Regions from './Regions';

test('Regions', () => {
  const { getByText } = render((
    <Regions regions={regions} />
  ));

  expect(getByText('부산')).not.toBeNull();
});
