import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadRegions,
  setRegions,
  loadCategories,
  setCategories,
  loadRestaurants,
  setRestaurants,
} from './actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

describe('actions', () => {
  describe('loadRegions', () => {
    it('runs setRegions', async () => {
      const store = mockStore({});

      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions([]));
    });
  });

  describe('loadCategories', () => {
    it('runs setCategories', async () => {
      const store = mockStore({});

      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategories([]));
    });
  });

  describe('loadRestaurants', () => {
    it('runs setRestaurants', async () => {
      const store = mockStore({});

      await store.dispatch(loadRestaurants());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurants([]));
    });
  });
});
