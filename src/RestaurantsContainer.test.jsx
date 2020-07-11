import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

describe('RestaurantsContainer', () => {
  it('listens click event', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));

    const { getByText } = render((
      <RestaurantsContainer />
    ));

    expect(getByText(/양천주가/)).not.toBeNull();
  });
});
