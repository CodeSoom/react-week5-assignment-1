import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import {
  categories, categoryId,
} from '../fixture/test-data';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories, categoryId,
  }));

  const { getByText } = render((
    <CategoriesContainer />
  ));

  fireEvent.click(getByText(/한식/));

  expect(dispatch).toBeCalledTimes(2);
});
