import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';
import restaurants from '../fixtures/restaurants';

import { setCategories, setRegions, setRestaurants } from './actions';
import { loadCategories, loadRegions, searchRestaurants } from './async-actions';
import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

jest.mock('./services/api');

const mockStore = configureStore([thunk]);

describe('async-actions', () => {
  const store = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  describe('loadRegions', () => {
    it('fetches regions', async () => {
      await store.dispatch(loadRegions());

      expect(fetchRegions).toBeCalled();
    });

    it('dispatches setRegions', async () => {
      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions(regions));
    });
  });

  describe('loadCategories', () => {
    it('fetches categories', async () => {
      await store.dispatch(loadCategories());

      expect(fetchCategories).toBeCalled();
    });

    it('dispatches setCategories', async () => {
      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategories(categories));
    });
  });

  describe('searchRestaurants', () => {
    const region = regions[1];
    const category = categories[3];

    it('fetches restaurants', async () => {
      await store.dispatch(searchRestaurants({ region, category }));

      expect(fetchRestaurants).toBeCalledWith({ region, category });
    });

    it('dispatches setRestaurants', async () => {
      await store.dispatch(searchRestaurants({ region, category }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurants(restaurants));
    });
  });
});
