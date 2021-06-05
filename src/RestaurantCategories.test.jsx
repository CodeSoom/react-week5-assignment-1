import React from 'react';

import { render } from '@testing-library/react';

import RestaurantCategories from './RestaurantCategories';

describe('RestaurantCategories', () => {
  const categories = [
    { id: 1, name: '한식' },
  ];

  it('render', () => {
    const { getByText } = render((
      <RestaurantCategories categories={categories} />
    ));

    expect(getByText('한식')).not.toBeNull();
  });
});
