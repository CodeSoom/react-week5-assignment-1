import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();
});

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        id: 6,
        categoryId: 1,
        name: '한국식 초밥',
        address: '서울 강남구',
        information: '한국식 초밥 in 서울 강남구',
      },
    ],
  }));

  const { getByText } = render(<RestaurantsContainer />);

  expect(getByText(/한국식 초밥/)).not.toBeNull();
});
