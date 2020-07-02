import React from 'react';

import { render, fireEvent } from '@testing-library/react';

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

  it('클릭 시 함수가 호출된다.', () => {
    const handleClick = jest.fn();
    const { getByText } = render((
      <RestaurantCategories
        categories={categories}
        onClick={handleClick}
      />
    ));

    fireEvent.click(getByText('한식'));
    expect(handleClick).toBeCalled();
  });
});
