import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import {
  loadCategories,
  loadRegions,
  loadRestaurants,
} from './actions';

const middleware = [thunk];

const mockStore = configureStore(middleware);

describe('async actions', () => {
  const store = mockStore({});

  describe('loadCategories', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValue({ json: () => ({ categories: [{ id: 1, name: '한식' }] }) });

      fetch.mockClear();
    });

    it('should fetch categories data', async () => {
      await store.dispatch(loadCategories());

      expect(store.getActions()[0]).toEqual({ payload: { categories: { categories: [{ id: 1, name: '한식' }] } }, type: 'setCategories' });
    });
  });

  describe('loadRegions', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValue({ json: () => ({ regions: [{ id: 1, name: '서울' }] }) });

      fetch.mockClear();
    });

    it('should fetch regions data', async () => {
      await store.dispatch(loadRegions());

      expect(store.getActions()[1]).toEqual({ payload: { regions: { regions: [{ id: 1, name: '서울' }] } }, type: 'setRegions' });
    });
  });

  describe('loadRestaurants', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValue({ json: () => ({ restaurants: [{ id: 1, name: '새마을 식당' }] }) });

      fetch.mockClear();
    });

    it('should fetch restaurants data', async () => {
      await store.dispatch(loadRestaurants({ categoryId: 1, regionName: '서울', stopFetch: 1 }));

      expect(store.getActions()[2]).toEqual({ payload: { restaurants: { restaurants: [{ id: 1, name: '새마을 식당' }] } }, type: 'setRestaurants' });
    });

    it('should not fetch restaurant data if conditions are not met', async () => {
      await store.dispatch(loadRestaurants({ categoryId: 0, regionName: '', stopFetch: 1 }));

      expect(store.getActions()[3]).toBeUndefined();
    });
  });
});
