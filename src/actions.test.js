import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  loadRegions,
  loadCategories,
  loadRestaurants,
} from './actions';

import {
  categories,
  regions,
  restaurants,
} from '../fixtures/staticData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  region: {},
  category: {},
  regions: [],
  categories: [],
  restaurants: [],
};

jest.mock('./services/api');

describe('async actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with loadCategories', () => {
    it('should dispatch actions of setCategories', async () => {
      const expectedActions = [
        { type: 'setCategories', payload: { categories } },
      ];
      const store = mockStore(initialState);

      await store.dispatch(loadCategories());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  context('with loadRegions', () => {
    it('should dispatch actions of setRegions', async () => {
      const expectedActions = [
        { type: 'setRegions', payload: { regions } },
      ];
      const store = mockStore(initialState);

      await store.dispatch(loadRegions());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  context('with loadRestaurants', () => {
    it('should dispatch actions of setRegions', async () => {
      const expectedActions = [
        { type: 'setRestaurants', payload: { restaurants } },
      ];
      const store = mockStore(initialState);

      await store.dispatch(loadRestaurants());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
