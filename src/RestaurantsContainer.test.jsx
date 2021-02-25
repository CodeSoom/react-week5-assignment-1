import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import given from 'given2';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixture/retaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    selectedRegion: { id: 1, name: '서울' },
    selectedCategory: given.selectedCategory,
    restaurants,
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
