import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import restaurantsFixture from './__fixtures__/restaurants';

import RestaurantListContainer from './RestaurantListContainer';

jest.mock('react-redux');

function renderRestaurantListContainer() {
  render(<RestaurantListContainer />);
  return {
    getByText: (text) => screen.getByText(text),
  };
}

describe('<RestaurantListContainer />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurants: restaurantsFixture,
  }));

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('renders restaurant list', () => {
    // when
    const { getByText } = renderRestaurantListContainer();
    // then
    restaurantsFixture.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
