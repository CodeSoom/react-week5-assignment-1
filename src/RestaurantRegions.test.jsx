import React from 'react';

import { render } from '@testing-library/react';

import RestaurantRegions from './RestaurantRegions';

describe('RestaurantRegions', () => {
  const regions = [
    { id: 1, name: '서울' },
  ];

  it('render', () => {
    const { getByText } = render((
      <RestaurantRegions regions={regions} />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
});
