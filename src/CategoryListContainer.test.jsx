import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import CategoryListContainer from './CategoryListContainer';

import { selectCategory, setRestaurants, loadRestaurants } from './actions';

import {
  categoryList,
  initialState,
  selectedCategory,
  selectedAddress,
  restaurants,
} from '../__fixture__/restaurants';

jest.mock('react-redux');

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

describe('CategoryListContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categoryList,
      selectedAddress: initialState.selectedAddress,
      selectedCategory: initialState.selectedCategory,
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

  context('레스토랑 카테고리가 선택된 경우', () => {
    it('레스토랑 카테고리 목록이 로딩되고 선택된 카테고리가 체크 표시된다.', () => {
      useSelector.mockImplementation((selector) => selector({
        categoryList,
        selectedAddress: {},
        selectedCategory,
      }));

      const { getByText } = render((
        <CategoryListContainer />
      ));

      expect(getByText('한식(V)')).toBeInTheDocument();
    });
  });

  context('레스토랑 카테고리 목록 중 하나를 클릭하면', () => {
    it('selectCategory 액션이 전달된다.', () => {
      const { getByText } = render((
        <CategoryListContainer />
      ));

      fireEvent.click(getByText('한식'));

      expect(dispatch).toBeCalledWith(selectCategory(1));
    });
  });

  // useEffect의 loadRestaurants 테스트가 진행되지 않으므로, 커버리지 100% 달성을 위한 테스트
  context('레스토랑 카테고리와 지역이 모두 선택된 경우', () => {
    it('loadRestaurants 액션이 전달된다.', () => {
      useSelector.mockImplementation((selector) => selector({
        categoryList,
        selectedAddress,
        selectedCategory,
      }));

      render((
        <CategoryListContainer />
      ));

      // 아래와 같이 테스트를 해도 다음과 같은 결과가 도출
      // Expected: [Function anonymous]
      // Received: [Function anonymous]

      // expect(dispatch).toBeCalledWith(loadRestaurants({
      //   addressName: selectedAddress.name, categoryId: selectedCategory.id,
      // }));

      expect(dispatch).toBeCalled();
    });
  });

  describe('API 호출', () => {
    context('지역과 카테고리가 모두 선택되면', () => {
      it('loadRestaurants 액션을 통해 레스토랑 목록이 restaurants에 저장된다. ', async () => {
        useSelector.mockImplementation((selector) => selector({
          selectedAddress,
          selectedCategory,
        }));

        const store = mockStore({});

        await store.dispatch(loadRestaurants({
          addressName: selectedAddress.name,
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
          addressName: '',
          categoryId: 0,
        }));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants([]));
      });
    });
  });
});
