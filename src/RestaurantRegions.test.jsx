import React from 'react';

import { render } from '@testing-library/react';

import RestaurantRegions from './RestaurantRegions';

import { regions } from '../fixtures/restaurants';

describe('RestaurantRegions', () => {
  it('show restaurant regions', () => {
    const { getByText } = render((
      <RestaurantRegions regions={regions} />
    ));

    regions.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
