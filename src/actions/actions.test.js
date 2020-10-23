import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';
import restaurants from '../../fixtures/restaurants';

import {
  loadRegions,
  loadCategories,
  updateCategoriesLoading,
  updateRegionsLoading,
  updateRestaurantsLoading,
  setCategories,
  setRegions,
  setRestaurants,
} from './index';
import { loadRestaurants, searchRestaurants } from './asyncActions';

jest.mock('../services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  describe('loadCategories', () => {
    const store = mockStore({});
    it('update loading state and set categories', async () => {
      await store.dispatch(loadCategories());

      expect(store.getActions()).toEqual([
        updateCategoriesLoading(true),
        setCategories(categories),
        updateCategoriesLoading(false),
      ]);
    });
  });

  describe('loadRegions', () => {
    const store = mockStore({});
    it('update loading state and set regions', async () => {
      await store.dispatch(loadRegions());

      expect(store.getActions()).toEqual([
        updateRegionsLoading(true),
        setRegions(regions),
        updateRegionsLoading(false),
      ]);
    });
  });

  describe('loadRestaurants', () => {
    const store = mockStore({});
    it('update loading state and set restaurants', async () => {
      await store.dispatch(loadRestaurants());

      expect(store.getActions()).toEqual([
        updateRestaurantsLoading(true),
        setRestaurants(restaurants),
        updateRestaurantsLoading(false),
      ]);
    });
  });

  describe('searchRestaurants', () => {
    context('when both category and region are selected', () => {
      const store = mockStore({
        region: { selectedName: '서울' },
        category: { selectedId: 1 },
      });

      it('load restaurants', async () => {
        await store.dispatch(searchRestaurants());

        expect(store.getActions()[0]).toEqual(
          updateRestaurantsLoading(true),
        );
      });
    });

    context('when no region is selected', () => {
      const store = mockStore({
        region: { selectedName: '' },
        category: { selectedId: 1 },
      });

      it('no action is dispatched', async () => {
        await store.dispatch(searchRestaurants());

        expect(store.getActions()).toEqual([]);
      });
    });

    context('when no category is selected', () => {
      const store = mockStore({
        region: { selectedName: '서울' },
        category: { selectedId: null },
      });

      it('no action is dispatched', async () => {
        await store.dispatch(searchRestaurants());

        expect(store.getActions()).toEqual([]);
      });
    });
  });
});
