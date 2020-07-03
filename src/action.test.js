import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import {
  loadRegions,
  setInitRegions,
  loadCategories,
  setInitCategories,
  loadRestaurants,
  setRestaurants,
} from './action';

import { regions, categories, restaurants } from '../__fixture__/data';

function onFetch(data) {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(data),
  }));

  beforeEach(() => {
    fetch.mockClear();
  });
}

describe('acton', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  describe('loadRegions', () => {
    const store = mockStore({});

    it('load Regions', () => {
      onFetch(regions);

      return store.dispatch(loadRegions()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(setInitRegions(regions));
      });
    });
  });

  describe('loadCategories', () => {
    const store = mockStore({});

    it('load Categories', () => {
      onFetch(categories);

      return store.dispatch(loadCategories()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(setInitCategories(categories));
      });
    });
  });

  describe('loadRestaurants', () => {
    const store = mockStore({});

    it('load Categories', () => {
      onFetch(restaurants);

      return store.dispatch(loadRestaurants()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(setRestaurants(restaurants));
      });
    });
  });
});
