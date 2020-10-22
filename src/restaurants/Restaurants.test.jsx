import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../../fixtures/restaurants';

describe('Restaurants', () => {
  it('renders each item', () => {
    const { queryByText } = render((
      <Restaurants restaurants={restaurants} />
    ));

    restaurants.forEach(({ name }) => {
      expect(queryByText(name)).not.toBeNull();
    });
  });
});
