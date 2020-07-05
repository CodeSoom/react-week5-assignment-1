import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoryListContainer from './CategoryListContainer';

import { selectCategory } from './actions';

import { categoryList } from '../__fixture__/restaurants';

jest.mock('react-redux');

describe('CategoryListContainer', () => {
  const dispatch = jest.fn();

  const initialState = {
    categoryList: [],
    selectedRegion: {},
    selectedCategory: {},
  };

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categoryList,
      selectedCategory: initialState.selectedCategory,
      selectedRegion: initialState.selectedRegion,
    }));

    dispatch.mockClear();
  });

  context('레스토랑 카테고리가 선택되지 않은 경우', () => {
    it('레스토랑 카테고리 목록이 로딩된다.', () => {
      const { getByText } = render((
        <CategoryListContainer />
      ));

      expect(getByText('한식')).toBeInTheDocument();
    });
  });

  context('레스토랑 카테고리 목록 중 하나를 클릭하면', () => {
    it('selectCategory, loadRestaurants 액션이 전달된다.', () => {
      const { getByText } = render((
        <CategoryListContainer />
      ));

      const categoryButton = getByText('한식');

      fireEvent.click(categoryButton);

      expect(dispatch).toBeCalledWith(selectCategory(Number(categoryButton.id)));
      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
