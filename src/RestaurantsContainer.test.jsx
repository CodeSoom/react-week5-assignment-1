import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import restaurants from './fixtures/restaurants';

import RestauarantsContainer from './RestaurantsContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RestauarantsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  it('show restaurants', () => {
    const { getByText } = render(<RestauarantsContainer />);

    restaurants.forEach(({ name }) => {
      expect(getByText(`${name}`)).not.toBeNull();
    });
  });
});
