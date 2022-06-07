import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadCategories,
  loadRegions,
  loadRestaurants,
  setCategories,
  setRegions,
  setRestaurants,
} from './actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

describe('actions', () => {
  describe('loadRegions', () => {
    it('"setRegions" 액션을 dispatch한다', async () => {
      const store = mockStore({});

      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions([]));
    });
  });

  describe('loadCategories', () => {
    it('"setCategories" 액션을 dispatch한다', async () => {
      const store = mockStore({});

      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategories([]));
    });
  });

  describe('loadRestaurants', () => {
    it('"loadRestaurants" 액션을 dispatch한다', async () => {
      const store = mockStore({});

      await store.dispatch(loadRestaurants());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurants([]));
    });
  });
});
