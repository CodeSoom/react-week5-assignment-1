import React from 'react';
import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      categories: [
        {
          id: 1,
          name: '한식',
        },
      ],
      searchQuery: {
        regionName: '',
        categoryId: 0,
      },
    })
  );

  const { getByText } = render(<App />);

  expect(getByText(/Restaurants/)).not.toBeNull();
});
