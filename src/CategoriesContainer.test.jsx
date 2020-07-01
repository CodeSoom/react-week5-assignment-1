import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import { selectCategory } from './actions';
import { categories } from '../fixture/test-data';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ categories }));

  const { getByText } = render((
    <CategoriesContainer />
  ));

  fireEvent.click(getByText(categories[0].name));

  expect(dispatch).toBeCalledWith(selectCategory(categories[0].id));
});
