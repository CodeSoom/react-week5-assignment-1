import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

describe('<RestaurantsContainer />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  it('render restaurants', () => {
    const { getByText } = render((
      <RestaurantsContainer />
    ));

    expect(getByText('양천주가')).not.toBeNull();
  });
});
