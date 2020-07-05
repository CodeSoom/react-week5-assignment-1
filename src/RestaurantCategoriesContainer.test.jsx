import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';

import { categories } from './fixture/initialState';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RestaurantCategoriesContainer', () => {
  context('with categories', () => {
    it('renders buttons with category value', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        categories,
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
      categories,
      category: { id: 1, name: '한식' },
    }));

    const { getByText } = render(<RestaurantCategoriesContainer />);

    expect(getByText('한식(V)')).not.toBeNull();

    fireEvent.click(getByText(/중식/));

    expect(dispatch).toBeCalledTimes(2);
  });
});
