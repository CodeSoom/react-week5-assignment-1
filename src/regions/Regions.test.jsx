import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

import regions from '../../fixtures/regions';

test('Regions', () => {
  const { queryByText } = render((
    <Regions regions={regions} />
  ));

  regions.forEach(({ name }) => {
    expect(queryByText(new RegExp(name))).not.toBeNull();
  });
});
