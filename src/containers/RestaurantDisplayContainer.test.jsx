import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RESTAURANTS from '../__fixtures__/restaurants.json';

import RestaurantDisplayContainer from './RestaurantDisplayContainer';

jest.mock('react-redux');

function renderComponent() {
  return render(<RestaurantDisplayContainer />);
}

describe('<RestaurantDisplayContainer />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('without restaurants', () => {
    // Given
    const restaurants = [];

    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurants,
        restaurant: {},
      }));
    });

    it('display empty restaurants', () => {
      const { getByRole } = renderComponent();
      expect(getByRole('list').children).toHaveLength(0);
    });
  });

  context('with restaurants', () => {
    // Given
    const restaurants = RESTAURANTS;
    const restaurant = {};

    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurants,
        restaurant,
      }));
    });

    it('display restaurants', () => {
      const { getAllByRole, getByRole } = renderComponent();
      expect(getByRole('list').children).toHaveLength(RESTAURANTS.length);
      expect(getAllByRole('listitem')).toHaveLength(RESTAURANTS.length);
    });
  });
});
