import React from 'react';

import { render } from '@testing-library/react';

import RestaurantCategories from './RestaurantCategories';

describe('RestaurantCategories', () => {
  it('분류 목록을 받아서 화면에 보여준다.', () => {
    const categories = [
      { id: 1, name: '서양식' },
      { id: 2, name: '동양식' },
    ];
    const { getByText } = render((
      <RestaurantCategories categories={categories} />
    ));

    categories.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
