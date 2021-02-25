import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantConatiner from './RestaurantContainer';

jest.mock('react-redux');

test('RestaurantContainer', async () => {
  useSelector.mockImplementation((selector) => selector({
    regionName: '서울',
    categoryId: 1,
  }));

  const { queryByText } = render(<RestaurantConatiner />);

  await waitFor(() => queryByText('양천주가'));
  expect(queryByText('양천주가')).not.toBeNull();
});
