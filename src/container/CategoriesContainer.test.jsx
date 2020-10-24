import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';
import categories from '../../fixtures/categories';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories,
    selected: {
      category: '한식',
    },
  }));

  render(<CategoriesContainer />);

  expect(screen.getByRole('button', { name: '한식(V)' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /중식/ })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /한식/ }));

  expect(dispatch).toBeCalled();
});
