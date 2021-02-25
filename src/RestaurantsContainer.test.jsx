import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import given from 'given2';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    selectedRegion: { id: 1, name: '서울' },
    selectedCategory: given.selectedCategory,
    restaurants: [
      {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        information: '양천주가 in 서울 강남구 123456',
      },
      {
        id: 6,
        categoryId: 1,
        name: '한국식 초밥',
        address: '서울 강남구',
        information: '한국식 초밥 in 서울 강남구',
      },
      {
        id: 14,
        categoryId: 1,
        name: '김초밥',
        address: '서울시 강남구 역삼동',
        information: '김초밥 in 서울시 강남구 역삼동',
      },
    ],
  }));
  context('지역과 category가 유효할 때(null이 아닐 때)', () => {
    given('selectedCategory', () => ({ id: 1, name: '한식' }));
    it('지역과 category에 맞는 정보를 보여주는 dispatch함수가 실행된다.', () => {
      render(<RestaurantsContainer />);
      expect(dispatch).toBeCalled();
    });
  });

  context('지역과 category가 유효하지 않을 때(null일 때)', () => {
    given('selectedCategoryId', () => null);
    it('dispatch함수는 실행되지 않는다.', () => {
      render(<RestaurantsContainer />);
      expect(dispatch).not.toBeCalled();
    });
  });
});
