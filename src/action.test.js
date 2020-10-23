import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

import {
  setCategories,
  loadCategories,
  setRegions,
  loadRegions,
  loadRestaurants,
  setRestaurants,
} from './actions';

const middleware = [thunk];

const mockStore = configureStore(middleware);

describe('async actions', () => {
  const store = mockStore({});

  describe('loadCategories', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ categories: [{ id: 1, name: '한식' }] }),
    }));

    beforeEach(() => {
      fetch.mockClear();
    });

    it('should fetch categories data', async () => {
      await store.dispatch(loadCategories());

      const categories = await fetchCategories();

      expect(store.getActions()[0]).toEqual(setCategories(categories));
    });
  });

  describe('loadRegions', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ regions: [{ id: 1, name: '서울' }] }),
    }));

    beforeEach(() => {
      fetch.mockClear();
    });

    it('should fetch regions data', async () => {
      await store.dispatch(loadRegions());

      const regions = await fetchRegions();

      expect(store.getActions()[1]).toEqual(setRegions(regions));
    });
  });

  describe('loadRestaurants', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ restaurants: [{ id: 1, name: '새마을 식당' }] }),
    }));

    beforeEach(() => {
      fetch.mockClear();
    });

    it('should fetch restaurants data', async () => {
      const categoryId = 1;

      const regionName = '서울';

      const stopLoad = 1;

      await store.dispatch(loadRestaurants(categoryId, regionName, stopLoad));

      const restaurants = await fetchRestaurants(categoryId, regionName);

      expect(store.getActions()[2]).toEqual(setRestaurants(restaurants));
    });

    it('should not fetch restaurant data if conditions are not met', async () => {
      const categoryId = 0;

      const regionName = '';

      const stopLoad = 1;

      await store.dispatch(loadRestaurants(categoryId, regionName, stopLoad));

      expect(store.getActions()[3]).toBeUndefined();
    });
  });
});
