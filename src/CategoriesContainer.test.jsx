import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixtures/categories';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  const { getByText } = render((
    <CategoriesContainer />
  ));

  fireEvent.click(getByText(/한식/));

  expect(dispatch).toBeCalledWith({
    type: 'updateCategoryId',
    payload: {
      categoryId: 1,
    },
  });

  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/중식/)).not.toBeNull();
});
