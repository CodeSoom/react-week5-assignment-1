import { useDispatch } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// 비동기액션 테스트 작성 공부 더하기 : https://redux.js.org/recipes/writing-tests

import { loadCategories, loadRestaurants, loadInitialData } from './actions';
import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './services/api';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('react-redux');
jest.mock('./services/api');

describe('async actions', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '부산' },
  ];
  const categories = [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
  ];

  const restaurants = [
    { id: 1, name: '마녀주방' },
    { id: 2, name: '마녀식탁' },
  ];

  beforeEach(() => {
    fetchRegions.mockImplementation(async () => regions);
    fetchCategories.mockImplementation(async () => categories);
    fetchRestaurants.mockImplementation(async () => restaurants);
  });

  describe('loadCategories', () => {
    const expectedAtions = [
      {
        type: 'setCategories',
        payload: {
          categories,
        },
      },
    ];

    it('changes categories', async () => {
      const store = mockStore({});
      await store.dispatch(loadCategories());
      const actions = store.getActions();

      // console.log(actions);
      expect(actions).toEqual(expectedAtions);
      expect(actions[0].payload.categories).toEqual(categories);
    });
  });

  describe('loadRestaurants', () => {
    context('has selectedRegion && selectedCategory', () => {
      const expectedAtions = [
        {
          type: 'setRestaurants',
          payload: {
            restaurants,
          },
        },
      ];

      it('changes restaurants', async () => {
        const store = mockStore({
          selectedRegion: { id: 1, name: '서울' },
          selectedCategory: { id: 1, name: '한식' },
        });
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toEqual(expectedAtions);
        expect(actions[0].payload.restaurants).toEqual(restaurants);
      });
    });

    context('!selectedRegion || !selectedCategory', () => {
      const expectedAtions = [];

      it('nothing changed', async () => {
        const store = mockStore({
          selectedRegion: { id: 1, name: '서울' },
          selectedCategory: null,
        });
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toEqual(expectedAtions);
        expect(actions).toHaveLength(0);
      });
    });
  });

  describe('loadInitialData', () => {
    const expectedAtions = [
      {
        type: 'setRegions',
        payload: {
          regions,
        },
      }, {
        type: 'setCategories',
        payload: {
          categories,
        },
      },
    ];

    it('changes categories', async () => {
      const store = mockStore({});
      await store.dispatch(loadInitialData());
      const actions = store.getActions();

      expect(actions).toEqual(expectedAtions);
      expect(actions[0].payload.regions).toEqual(regions);
      expect(actions[1].payload.categories).toEqual(categories);
    });
  });
});
