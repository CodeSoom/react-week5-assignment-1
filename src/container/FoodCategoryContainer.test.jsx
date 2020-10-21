import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';

import FoodCategoryContainer from './FoodCategoryContainer';
import foodCategories from '../../fixtures/foodCategories';

jest.mock('react-redux');

test('FoodCategoryContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    foodCategories,
  }));

  render(<FoodCategoryContainer />);

  expect(screen.getByText('한식')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: '한식' }));

  expect(dispatch).toBeCalledWith({
    type: 'updateFoodCategory',
  });
});
