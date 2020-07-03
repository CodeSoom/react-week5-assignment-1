import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantCategories from './RestaurantCategories';

import { categories } from '../fixtures/restaurants';

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

  it('분류 클릭 시 이벤트 함수가 호출된다.', () => {
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
