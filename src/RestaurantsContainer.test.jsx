import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';

import restaurantsFixture from './__fixtures__/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

function renderRestaurantsContainer() {
  render(<RestaurantsContainer />);
  return {
    getByText: (text) => screen.getByText(text),
  };
}

describe('<RestaurantsContainer />', () => {
  it('renders restaurant list', () => {
    // given
    useSelector.mockImplementation((selector) => selector({
      restaurants: restaurantsFixture,
    }));

    // when
    const { getByText } = renderRestaurantsContainer();
    // then
    restaurantsFixture.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
