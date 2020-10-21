import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';

import FoodCategoryContainer from './FoodCategoryContainer';
import locales from '../../fixtures/locales';
import foodCategories from '../../fixtures/foodCategories';

jest.mock('react-redux');

test('FoodCategoryContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    locales,
    foodCategories,
  }));

  render(<FoodCategoryContainer />);

  expect(screen.getByText('서울')).toBeInTheDocument();
  expect(screen.getByText('한식')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: '서울' }));

  expect(dispatch).toBeCalledWith({
    type: 'updateFoodLocation',
  });
});
