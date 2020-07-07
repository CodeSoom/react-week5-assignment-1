import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantCategories from './RestaurantCategories';

import { categories } from './fixture/initialState';

describe('RestaurantCategories', () => {
  context('with categories', () => {
    it('renders buttons with categories value', () => {
      const handleClick = jest.fn();

      const { getByText } = render(
        <RestaurantCategories
          categories={categories}
          onClick={handleClick}
          selected="한식"
        />,
      );

      expect(getByText(/한식/)).not.toBeNull();
      expect(getByText(/중식/)).not.toBeNull();
    });
  });

  context('when click category value', () => {
    it('change category', () => {
      const handleClick = jest.fn();

      const { getByText } = render(
        <RestaurantCategories
          categories={categories}
          onClick={handleClick}
          selected="한식"
        />,
      );

      fireEvent.click(getByText(/한식/));

      expect(handleClick).toBeCalled();

      expect(getByText(/한식/)).not.toBeNull();
      expect(getByText(/중식/)).not.toBeNull();
    });
  });
});
