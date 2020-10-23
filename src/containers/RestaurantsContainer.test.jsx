import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import { restaurants } from '../../fixtures';

jest.mock('react-redux');

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      restaurants,
    },
  }));

  const { queryByText } = render(<RestaurantsContainer />);

  expect(queryByText(/양천주가/)).not.toBeNull();
  expect(queryByText(/김초밥/)).not.toBeNull();
});
