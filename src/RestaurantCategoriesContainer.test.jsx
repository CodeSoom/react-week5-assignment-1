import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RestaurantCategoriesContainer', () => {
  context('with categories', () => {
    it('renders buttons with category value', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        categories: [
          {
            id: 1,
            name: '한식',
          },
          {
            id: 2,
            name: '중식',
          },
        ],
      }));

      const { getByText } = render(<RestaurantCategoriesContainer />);

      expect(getByText('한식')).not.toBeNull();
      expect(getByText('중식')).not.toBeNull();
    });
  });
});

context('when click category value', () => {
  it('change category', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories: [
        {
          id: 1,
          name: '한식',
        },
        {
          id: 2,
          name: '중식',
        },
      ],
      category: '한식',
      categoryId: 1,
    }));

    const { getByText } = render(<RestaurantCategoriesContainer />);

    expect(getByText(/한식/)).not.toBeNull();

    fireEvent.click(getByText(/한식/));

    expect(dispatch).toBeCalledTimes(2);
  });
});
