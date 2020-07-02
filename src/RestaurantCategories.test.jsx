import React from 'react';

import { render } from '@testing-library/react';

import RestaurantCategories from './RestaurantCategories';

describe('RestaurantCategories', () => {
  it('카테고리 목록을 화면에 보여준다.', () => {
    const { getByText } = render((
      <RestaurantCategories />
    ));

    expect(getByText('한식')).not.toBeNull();
  });
});
