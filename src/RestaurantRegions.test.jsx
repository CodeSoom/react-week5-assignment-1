import React from 'react';

import { render } from '@testing-library/react';

import RestaurantRegions from './RestaurantRegions';

describe('RestaurantRegions', () => {
  it('show restaurant regions', () => {
    const { getByText } = render((
      <RestaurantRegions />
    ));

    expect(getByText('서울')).toBeInTheDocument();
    expect(getByText('인천')).toBeInTheDocument();
    expect(getByText('광주')).toBeInTheDocument();
  });
});
