import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixtures/categories';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));
  const { container, getByText } = render((
    <CategoriesContainer />
  ));
  expect(container).toHaveTextContent('한식');

  fireEvent.click(getByText('한식'));

  expect(getByText('한식')).not.toBeNull();
});
