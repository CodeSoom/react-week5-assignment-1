import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { regions } from '../../fixtures';

jest.mock('react-redux');

test('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regionStore: {
      regions,
    },
  }));

  const { queryByText } = render(<RegionsContainer />);

  expect(queryByText(/서울/)).not.toBeNull();
  expect(queryByText(/대전/)).not.toBeNull();
  expect(queryByText(/대구/)).not.toBeNull();
});
