import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../fixtures/restaurants';

describe('Restaurants', () => {
  it('renders list of restaurants', () => {
    const { getByText } = render((
      <Restaurants
        restaurants={restaurants}
      />
    ));

    expect(getByText(/양천주가/)).not.toBeNull();
  });
});
