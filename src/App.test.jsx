import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import {
  updateRestaurantProperty, addRestaurant,
} from './stores/action/action-creators';

import RESTAURANTS from './__fixtures__/restaurants.json';

import App from './App';

jest.mock('react-redux');

function renderComponent() {
  return render(<App />);
}

describe('<App />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('without restaurants', () => {
    // Given
    const restaurants = [];
    const restaurant = RESTAURANTS[0];

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

    it('display restaurant input-boxes ', () => {
      const { getAllByRole } = renderComponent();
      expect(getAllByRole('textbox')).toHaveLength(3);
    });

    it('input restaurant-properties', () => {
      const { getAllByRole } = renderComponent();
      getAllByRole('textbox').forEach((inputBox) => {
        const propertyName = inputBox.name;
        const propertyValue = restaurant[propertyName];
        // When
        fireEvent.change(inputBox, { target: { value: propertyValue } });
        // Then
        expect(dispatch).toBeCalledWith(updateRestaurantProperty(propertyName, propertyValue));
        expect(inputBox.value).toBe(propertyValue);
      });
    });

    it('add new restaurant', () => {
      const { getAllByRole, getByRole } = renderComponent();
      getAllByRole('textbox').forEach((inputBox) => {
        const propertyName = inputBox.name;
        const propertyValue = restaurant[propertyName];
        fireEvent.change(inputBox, { target: { value: propertyValue } });
      });
      // When
      fireEvent.click(getByRole('button'));
      // Then
      expect(dispatch).toBeCalledWith(addRestaurant());
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
