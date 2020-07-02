import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import { categories } from '../fixtures/restaurants';

import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';

import {
  selectCategory,
} from './actions';

jest.mock('react-redux');

describe('RestaurantCategoriesContainer', () => {
  const dispatch = useDispatch();
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

  it('선택한 지역을 category에 담는다.', () => {
    const category = '한식';
    const { getByText } = render((
      <RestaurantCategoriesContainer />
    ));

    fireEvent.click(getByText('한식'));
    expect(dispatch).toBeCalledWith(selectCategory(category));
  });
});
