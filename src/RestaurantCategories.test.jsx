import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantCategories from './RestaurantCategories';

import { categories } from '../fixtures/restaurants';

describe('RestaurantCategories', () => {
  const handleClick = jest.fn();

  const renderRestaurantCategories = () => render((
    <RestaurantCategories
      categories={categories}
      onClick={handleClick}
    />
  ));

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('분류 목록을 받아서 화면에 보여준다.', () => {
    const { getByText } = renderRestaurantCategories();

    categories.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  it('분류 클릭 시 이벤트 함수가 호출된다.', () => {
    const { getByText } = renderRestaurantCategories();
    fireEvent.click(getByText('한식'));
    expect(handleClick).toBeCalled();
  });
});
