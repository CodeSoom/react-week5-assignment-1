import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import { categories } from '../../fixtures';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    category: {
      categories,
    },
  }));

  const { queryByText } = render(<CategoriesContainer />);

  expect(queryByText(/한식/)).not.toBeNull();
  expect(queryByText(/중식/)).not.toBeNull();
  expect(queryByText(/일식/)).not.toBeNull();

  fireEvent.click(queryByText(/한식/));

  expect(dispatch).toBeCalledWith({
    type: 'updateSelectedCategoryId',
    payload: {
      categoryId: 1,
    },
  });
});
