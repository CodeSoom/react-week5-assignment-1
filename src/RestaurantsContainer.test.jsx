import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurants from '../__fixtures__/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  it('renders Restaurants with restaurants from store', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));

    const { container } = render((
      <RestaurantsContainer />
    ));

    restaurants.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
