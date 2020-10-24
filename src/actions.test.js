import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import regions from '../__fixtures__/regions';
import categories from '../__fixtures__/categories';
import restaurants from '../__fixtures__/restaurants';

import {
  loadRegions,
  loadCategories,
  loadRestaurants,
  setRegions,
  setCategories,
  setRestaurants,
} from './actions';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  describe('loadRegions', () => {
    it('fetch regions data', async () => {
      fetchRegions.mockResolvedValue(regions);

      const store = mockStore({});

      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions(regions));
    });
  });

  describe('loadCategories', () => {
    it('fetch categories data', async () => {
      fetchCategories.mockResolvedValue(categories);

      const store = mockStore({});

      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategories(categories));
    });
  });

  describe('loadRestaurants', () => {
    context('with selected region and category', () => {
      it('fetch restaurants data', async () => {
        fetchRestaurants.mockResolvedValue(restaurants);

        const store = mockStore({
          regions,
          categories,
          selectedRegionId: 1,
          selectedCategoryId: 1,
        });

        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants(restaurants));
      });
    });

    context('without selected anything', () => {
      it('no fetch data', async () => {
        const store = mockStore({
          regions,
          categories,
          selectedRegionId: 0,
          selectedCategoryId: 0,
        });

        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });
});
