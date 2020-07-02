import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import { categories } from '../fixtures/restaurants';

import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';

describe('RestaurantCategoriesContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      categories,
    }));
  });

  it('카테고리 목록을 불러와 화면에 보여준다.', () => {
    const { getByText } = render((
      <RestaurantCategoriesContainer />
    ));

    categories.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
      expect(getByText(name)).toHaveAttribute('type', 'button');
    });
  });
});
