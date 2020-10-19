import React from 'react';

import { render } from '@testing-library/react';

import regions from '../__fixtures__/regions';

import Regions from './Regions';

jest.mock('react-redux');

test('Regions', () => {
  const { container } = render((
    <Regions regions={regions} />
  ));

  regions.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
