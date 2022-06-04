import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../../fixtures/categories';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  const dispatch = jest.fn();

  const restaurant = {
    categoryId: '',
    region: '',
  };

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  const { getByText } = render(<CategoriesContainer restaurant={restaurant} />);

  expect(getByText(/한식/)).not.toBeNull();

  fireEvent.click(getByText(/한식/));

  expect(dispatch).toBeCalledWith({
    type: 'changeRestaurantField',
    payload: {
      name: 'categoryId',
      value: 1,
    },
  });
});
