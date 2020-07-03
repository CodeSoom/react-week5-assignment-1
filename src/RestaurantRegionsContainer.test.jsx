import React from 'react';

import { render } from '@testing-library/react';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import { regions } from '../fixtures/restaurants';

describe('RestaurantRegionsContainer', () => {
  it('show restaurant regions', () => {
    const { getByText } = render((
      <RestaurantRegionsContainer />
    ));

    regions.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
