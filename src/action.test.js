import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

import {
  setCategories,
  loadCategories,
} from './actions';

const middleware = [thunk];

const mockStore = configureStore(middleware);

describe('async actions', () => {
  const store = mockStore({});

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({ categories: [{ id: 1, name: '한식' }] }),
  }));

  beforeEach(() => {
    fetch.mockClear();
  });

  describe('loadCategories', () => {
    it('should fetch categories data', async () => {
      await store.dispatch(loadCategories());

      const categories = await fetchCategories();

      expect(store.getActions()[0]).toEqual(setCategories(categories));
    });
  });
});
