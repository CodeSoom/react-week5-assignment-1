import React from 'react';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import {
  loadRegions,
  loadCategories,
  loadRestaurants,
} from './actions';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    selected: {
      region: '',
      categoryId: '',
    },
    categories,
    regions,
    restaurants,
  }));

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('지역이 보인다.', () => {
    const { getByText } = render(
      <App />,
    );

    categories.forEach(({ name }) => {
      expect(getByText(new RegExp(name))).not.toBeNull();
    });
  });

  it('카테고리가 보인다.', () => {
    const { getByText } = render(
      <App />,
    );

    regions.forEach(({ name }) => {
      expect(getByText(new RegExp(name))).not.toBeNull();
    });
  });

  it('레스토랑 목록이 보인다.', () => {
    const { getByText } = render(
      <App />,
    );

    restaurants.forEach(({ name }) => {
      expect(getByText(new RegExp(name))).not.toBeNull();
    });
  });

  describe('loadRegions', () => {
    const store = mockStore({});

    it('regions를 fetch 한다.', async () => {
      await store.dispatch(loadRegions());
      const actions = await store.getActions();

      expect(actions[0].type).toBe('setRegions');
    });
  });

  describe('loadCategories', () => {
    const store = mockStore({});

    it('categories를 fetch 한다.', async () => {
      await store.dispatch(loadCategories());
      const actions = await store.getActions();

      expect(actions[0].type).toBe('setCategories');
    });
  });

  describe('loadRestaurants', () => {
    const withoutCategoryIdStore = mockStore({
      selected: {
        region: '서울',
        categoryId: '',
      },
    });

    context('without categoryId', () => {
      it('동작하지 않는다.', async () => {
        await withoutCategoryIdStore.dispatch(loadRestaurants());
        const actions = withoutCategoryIdStore.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    const withSelectedStore = mockStore({
      selected: {
        region: '서울',
        categoryId: '1',
      },
    });

    context('with region and categoryId', () => {
      it('restaurants를 가져온다.', async () => {
        await withSelectedStore.dispatch(loadRestaurants());
        const actions = withSelectedStore.getActions();

        expect(actions[0].type).toBe('setRestaurants');
      });
    });
  });
});
