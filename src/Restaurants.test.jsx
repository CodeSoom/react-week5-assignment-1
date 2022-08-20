import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

jest.mock('react-redux');

test('Restaurants', () => {
  const restaurants = [
    {
      id: 6,
      categoryId: 1,
      name: '한국식 초밥',
      address: '서울 강남구',
      information: '한국식 초밥 in 서울 강남구',
    },
  ];

  const { getByText } = render(<Restaurants restaurants={restaurants} />);

  expect(getByText(/한국식 초밥/)).not.toBeNull();

  beforeEach(() => {
    jest.clearAllMocks();
  });
});
