import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  context('지역과 category의 id가 유효할 때(0이 아닐 때)', () => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      selectedRegionid: 1,
      selectedCategoryid: 1,
    }));

    it('지역과 category에 맞는 정보를 보여주는 dispatch함수가 실행된다.', () => {
      render(<RestaurantsContainer />);
      expect(dispatch).toBeCalled();
    });
  });

  context('지역과 category의 id가 유효하지 않을 때(0일 때)', () => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      selectedRegionid: 0,
      selectedCategoryid: 1,
    }));

    it('지역과 category에 맞는 정보를 보여주는 dispatch함수가 실행된다.', () => {
      render(<RestaurantsContainer />);
      expect(dispatch).not.toBeCalled();
    });
  });
});
