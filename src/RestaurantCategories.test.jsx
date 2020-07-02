import React from 'react';

import { render } from '@testing-library/react';

import RestaurantCategories from './RestaurantCategories';

import { categories } from '../fixtures/restaurants';

describe('RestaurantCategories', () => {
  it('카테고리 목록을 화면에 보여준다.', () => {
    const { getByText } = render((
      <RestaurantCategories categories={categories} />
    ));

    categories.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
      expect(getByText(name)).toHaveAttribute('type', 'button');
    });
  });
});
