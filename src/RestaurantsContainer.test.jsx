import React from 'react';
import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import { restaurants } from '../fixture/test-data';

jest.mock('react-redux');

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({ restaurants }));

  const { getByText } = render((
    <RestaurantsContainer />
  ));

  expect(getByText(/양천주가/)).not.toBeNull();
  expect(getByText(/한국식 초밥/)).not.toBeNull();
});
