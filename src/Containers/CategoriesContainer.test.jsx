import React from 'react';
import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

test('CategoriesContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
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
  }));

  const { getByText } = render(
    <CategoriesContainer />,
  );

  expect(getByText(/한식/)).not.toBeNull();
});
