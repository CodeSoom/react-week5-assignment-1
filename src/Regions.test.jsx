import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

jest.mock('react-redux');

test('Regions', () => {
  const regions = [
    {
      id: 1,
      name: '서울',
    },
  ];

  const { getByText } = render(<Regions regions={regions} />);

  expect(getByText(/서울/)).not.toBeNull();

  beforeEach(() => {
    jest.clearAllMocks();
  });
});
