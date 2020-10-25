import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../__fixtures__/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer Component', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  jest.clearAllMocks();

  it('Page render', () => {
    const { container } = render((
      <RestaurantsContainer />
    ));

    restaurants.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
