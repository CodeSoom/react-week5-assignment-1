import React from 'react';

import { render } from '@testing-library/react';

import RestaurantRegions from './RestaurantRegions';

import { regions } from '../fixtures/restaurants';

describe('RestaurantRegions', () => {
  it('레스토랑 지역 목록을 보여준다.', () => {
    const { getByText } = render((
      <RestaurantRegions regions={regions} />
    ));

    regions.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });
  });
});
