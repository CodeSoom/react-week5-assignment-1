import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import categories from '../../fixtures/categories';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    category: {
      categories,
      selectedId: 4,
    },
  }));

  const { queryByText } = render(<CategoriesContainer />);

  expect(queryByText(/한식/)).not.toBeNull();

  expect(queryByText(/일식\(V\)/)).not.toBeNull();

  fireEvent.click(queryByText(/한식/));

  expect(dispatch).toBeCalledWith({
    type: 'selectCategory',
    payload: {
      categoryId: 1,
    },
  });
});
