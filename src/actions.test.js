import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  fetchRestaurantRegion,
  fetchRestaurantCategories,
  fetchRestaurants,
} from './services/api';
import {
  loadRestaurantRegions,
  loadRestaurantCategories,
  loadRestaurnats,
  setRestaurantRegions,
  setRestaurantCategories,
  setRestaurants,
} from './actions';

import regions from '../__fixtures__/regions';
import categories from '../__fixtures__/categories';
import restaurants from '../__fixtures__/restaurants';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  describe('loadRestaurantRegions', () => {
    fetchRestaurantRegion.mockResolvedValue(regions);

    const store = mockStore({});

    it('dispatches restaurant regions', async () => {
      // When
      await store.dispatch(loadRestaurantRegions());

      // Then
      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurantRegions(regions));
    });
  });

  describe('loadRestaurantCategories', () => {
    fetchRestaurantCategories.mockResolvedValue(categories);

    const store = mockStore({});

    it('dispatches restaurant categories', async () => {
      // When
      await store.dispatch(loadRestaurantCategories());

      // Then
      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurantCategories(categories));
    });
  });

  describe('loadRestaurnats', () => {
    fetchRestaurants.mockResolvedValue(restaurants);

    context('with selected restaurant region and category', () => {
      it('dispatches searched restaurants', async () => {
        // Given
        const store = mockStore({
          selectedRegion: { id: 1, name: '서울' },
          selectedCategory: { id: 4, name: '양식' },
        });

        // When
        await store.dispatch(loadRestaurnats());

        // Then
        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants(restaurants));
      });
    });

    context('without selected restaurant region and category', () => {
      it('returns nothing', async () => {
        // Given
        const store = mockStore({
          selectedRegion: {},
          selectedCategory: {},
        });

        // When
        await store.dispatch(loadRestaurnats());

        // Then
        const actions = store.getActions();

        expect(actions[0]).toEqual(undefined);
      });
    });
  });
});
