import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

test('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [
      {
        id: 1,
        name: '서울',
      },
    ],
  }));

  const { getByText } = render(<RegionsContainer />);

  expect(getByText(/서울/)).not.toBeNull();

  beforeEach(() => {
    jest.clearAllMocks();
  });
});
