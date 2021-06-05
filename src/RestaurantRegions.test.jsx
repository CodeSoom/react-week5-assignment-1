import React from 'react';

import { render } from '@testing-library/react';

import RestaurantRegions from './RestaurantRegions';

describe('RestaurantRegions', () => {
  it('render', () => {
    const { getByText } = render((
      <RestaurantRegions />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
});