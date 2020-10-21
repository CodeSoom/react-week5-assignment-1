import React from 'react';

import { render } from '@testing-library/react';

import RestaurantRegionContainer from './RestaurantRegionContainer';

describe('RestaurantRegionContainer', () => {
  it('shows title', () => {
    const { getByText } = render((
      <RestaurantRegionContainer />
    ));

    expect(getByText('Restaurant Regions')).not.toBeNull();
  });
});
