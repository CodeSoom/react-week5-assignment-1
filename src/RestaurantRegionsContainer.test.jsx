import React from 'react';

import { render } from '@testing-library/react';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

describe('RestaurantRegionsContainer', () => {
  it('render', () => {
    const { getByText } = render((
      <RestaurantRegionsContainer />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
});