import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from './__fixtures__/restaurants';

jest.mock('react-redux');

function renderRestaurantsContainer() {
  render(<RestaurantsContainer />);
  return {
    getByText: (text) => screen.getByText(text),
  };
}

describe('<RestaurantsContainer />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));
  });

  it('renders restaurant list', () => {
    // when
    const { getByText } = renderRestaurantsContainer();
    // then
    restaurants.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
