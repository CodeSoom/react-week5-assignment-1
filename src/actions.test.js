import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import regions from '../__fixtures__/regions';
import categories from '../__fixtures__/categories';

import {
  fetchRegions,
  fetchCategories,
} from './services/api';

import {
  loadRegions,
  loadCategories,
  setRegions,
  setCategories,
} from './actions';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  describe('loadRegions', () => {
    it('dispatches fetched regions data', async () => {
      fetchRegions.mockResolvedValue(regions);

      const store = mockStore({});

      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions(regions));
    });
  });

  describe('loadCategories', () => {
    it('dispatches fetched categories data', async () => {
      fetchCategories.mockResolvedValue(categories);

      const store = mockStore({});

      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategories(categories));
    });
  });
});
