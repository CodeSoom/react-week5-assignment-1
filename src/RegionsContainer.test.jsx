import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import {
  regions,
} from '../__fixture__/restaurants';

import {
  selectRegion,
} from './actions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  const initialState = {
    regions: [],
    selectedRegion: {},
    selectedCategory: {},
  };

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      regions,
      selectedCategory: initialState.selectedCategory,
      selectedRegion: initialState.selectedRegion,
    }));
  });

  context('지역이 선택되지 않은 경우', () => {
    it('레스토랑 지역 목록이 로딩된다.', () => {
      const { getByText } = render((
        <RegionsContainer />
      ));

      expect(getByText('서울')).toBeInTheDocument();
    });
  });

  context('지역 목록 중 하나의 버튼을 클릭하면', () => {
    it('selectRegion, loadRestaurants 액션이 전달된다.', () => {
      const { getByText } = render((
        <RegionsContainer />
      ));

      const regionButton = getByText('서울');

      fireEvent.click(regionButton);

      expect(dispatch).toBeCalledWith(selectRegion(Number(regionButton.id)));
      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
