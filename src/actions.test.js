import {
  setRegions,
  loadRegions,
  selectRegion,
  setCategories,
  loadCategories,
  selectCategory,
  setRestaurants,
  loadRestaurants,
} from './actions';

import { regions } from '../fixtures/regions';
import { categories } from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

describe('actions', () => {
  describe('Regions', () => {
    it('setRegions', () => {
      const action = setRegions(regions);

      expect(action.type).toBe('setRegions');
      expect(action.payload.regions).toBe(regions);
    });

    it('loadRegions', async () => {
      const dispatch = jest.fn();

      await loadRegions()(dispatch);

      expect(dispatch).toBeCalledTimes(1);
    });

    it('selectRegion', () => {
      const regionId = 1;
      const action = selectRegion(regionId);

      expect(action.type).toBe('selectRegion');
      expect(action.payload.regionId).toBe(regionId);
    });
  });

  describe('Categories', () => {
    it('setCategories', () => {
      const action = setCategories(categories);

      expect(action.type).toBe('setCategories');
      expect(action.payload.categories).toBe(categories);
    });

    it('loadCategories', async () => {
      const dispatch = jest.fn();

      await loadCategories()(dispatch);

      expect(dispatch).toBeCalledTimes(1);
    });

    it('selectCategory', () => {
      const categoryId = 1;
      const action = selectCategory(categoryId);

      expect(action.type).toBe('selectCategory');
      expect(action.payload.categoryId).toBe(categoryId);
    });
  });

  describe('Restaurants', () => {
    it('setRestaurants', () => {
      const action = setRestaurants(restaurants);

      expect(action.type).toBe('setRestaurants');
      expect(action.payload.restaurants).toBe(restaurants);
    });

    it('loadRestaurants', async () => {
      const getState = jest.fn(() => ({
        selectedRegion: '서울',
        selectedCategory: 1,
      }));
      const dispatch = jest.fn();

      await loadRestaurants()(dispatch, getState);

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
