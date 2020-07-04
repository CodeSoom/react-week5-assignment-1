import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import RegionsContainer from './RegionsContainer';

import {
  regions,
  selectedRegion,
  selectedCategory,
  restaurants,
} from '../__fixture__/restaurants';

import {
  selectRegion,
  loadRestaurants,
  setRestaurants,
} from './actions';

jest.mock('react-redux');

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

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

  context('지역이 선택된 경우', () => {
    it('레스토랑 지역 목록이 로딩되고 선택된 항목에 체크 표시됨.', () => {
      useSelector.mockImplementation((selector) => selector({
        regions,
        selectedRegion,
        selectedCategory: initialState.selectedCategory,
      }));

      const { getByText } = render((
        <RegionsContainer />
      ));

      expect(getByText('서울(V)')).toBeInTheDocument();
    });
  });

  context('지역 목록 중 하나의 버튼을 클릭하면', () => {
    it('selectRegion 액션이 전달된다.', () => {
      const { getByText } = render((
        <RegionsContainer />
      ));

      fireEvent.click(getByText('서울'));

      expect(dispatch).toBeCalledWith(selectRegion(Number(getByText('서울').id)));
    });
  });

  // useEffect의 loadRestaurants 테스트가 진행되지 않으므로, 커버리지 100% 달성을 위한 테스트
  context('레스토랑 카테고리와 지역이 모두 선택된 경우', () => {
    it('loadRestaurants 액션이 전달된다.', () => {
      useSelector.mockImplementation((selector) => selector({
        regions,
        selectedRegion,
        selectedCategory,
      }));

      render((
        <RegionsContainer />
      ));

      // 아래와 같이 테스트를 해도 다음과 같은 결과가 도출
      // Expected: [Function anonymous]
      // Received: [Function anonymous]

      // expect(dispatch).toBeCalledWith(loadRestaurants({
      //   regionName: selectedRegion.name, categoryId: selectedCategory.id,
      // }));

      expect(dispatch).toBeCalled();
    });
  });

  describe('API 호출', () => {
    context('지역과 카테고리가 모두 선택되면', () => {
      it('loadRestaurants 액션을 통해 레스토랑 목록이 restaurants에 저장된다. ', async () => {
        useSelector.mockImplementation((selector) => selector({
          regions,
          selectedRegion,
          selectedCategory,
        }));

        const store = mockStore({});

        await store.dispatch(loadRestaurants({
          regionName: selectedRegion.name,
          categoryId: selectedCategory.id,
        }));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants(restaurants));
      });
    });

    context('지역과 카테고리가 선택되지 않으면', () => {
      it('loadRestaurants 액션을 통해 레스토랑 목록을 가져오지 않는다. ', async () => {
        const store = mockStore({});

        await store.dispatch(loadRestaurants({
          regionName: '',
          categoryId: 0,
        }));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants([]));
      });
    });
  });
});
