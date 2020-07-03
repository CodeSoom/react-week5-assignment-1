import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import App from './App';

import {
  addressList,
  categoryList,
  restaurants,
  initialState,
} from '../__fixture__/restaurants';

import {
  loadAddressList,
  setAddressList,
  loadCategoryList,
  setCategoryList,
} from './actions';

jest.mock('react-redux');

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

describe('App', () => {
  it('레스토랑 지역 목록과 카테고리 목록이 로딩된다.', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      addressList,
      categoryList,
      restaurants,
      selectedCategory: initialState.selectedCategory,
      selectedAddress: initialState.selectedAddress,
    }));

    const { getByText } = render((
      <App />
    ));

    expect(getByText('서울')).toBeInTheDocument();
    expect(getByText('한식')).toBeInTheDocument();
  });

  it('레스토랑 목록이 표시된다.', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('양천주가')).toBeInTheDocument();
  });

  describe('API 호출', () => {
    it('loadAddressList 액션을 통해 레스토랑 지역 목록이 addressList에 저장된다. ', async () => {
      const store = mockStore({});

      await store.dispatch(loadAddressList());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setAddressList(addressList));
    });

    it('loadCategoryList 액션을 통해 카테고리 목록이 categoryList에 저장된다. ', async () => {
      const store = mockStore({});

      await store.dispatch(loadCategoryList());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategoryList(categoryList));
    });
  });
});
