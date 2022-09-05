import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  setRegions, loadRegions,
  setCategories, loadCategories,
  setRestaurants, loadRestaurants,
} from './actions';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

import { region, category } from '../__fixtures__/data';

jest.mock('./services/api');

const mockStore = configureStore([thunk]);

describe('actions', () => {
  const store = mockStore();

  describe('loadRegions', () => {
    it('fetch regions', async () => {
      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(fetchRegions).toBeCalled();
      expect(actions[0]).toEqual(setRegions());
    });
  });

  describe('loadCategories', () => {
    it('fetch categories', async () => {
      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(fetchCategories).toBeCalled();
      expect(actions[1]).toEqual(setCategories());
    });
  });

  describe('loadRestaurants', () => {
    it('fetch restaurants', async () => {
      await store.dispatch(loadRestaurants(region, category));

      const actions = store.getActions();

      expect(fetchRestaurants).toBeCalled();
      expect(actions[2]).toEqual(setRestaurants());
    });
  });
});
