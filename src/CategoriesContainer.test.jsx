import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';
import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');
test('CategoriesContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories: [{ id: 1, name: '한식' }],
  }));

  const { container, getByText } = render(<CategoriesContainer />);

  expect(container).toHaveTextContent('한식');
});
