import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';

import restaurants from './__fixtures__/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

function renderRestaurantsContainer() {
  render(<RestaurantsContainer />);
  return {
    getByText: (text) => screen.getByText(text),
  };
}

describe('<RestaurantsContainer />', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  it('renders restaurant list', () => {
    // when
    const { getByText } = renderRestaurantsContainer();
    // then
    restaurants.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
