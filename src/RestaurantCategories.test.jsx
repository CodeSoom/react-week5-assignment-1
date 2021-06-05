import React from 'react';

import { render } from '@testing-library/react';

import RestaurantCategories from './RestaurantCategories';

describe('RestaurantCategoriesContainer', () => {
  it('render', () => {
    const { getByText } = render((
      <RestaurantCategories />
    ));

    expect(getByText('한식')).not.toBeNull();
  });
});
