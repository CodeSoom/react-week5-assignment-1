import reducer from './reducer';

import {
  setRegions, selectRegion, setCategories, selectCategory, setRestaurants,
} from './actions';

import regions from '../__fixtures__/regions';
import categories from '../__fixtures__/categories';
import restaurants from '../__fixtures__/restaurants';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));
      expect(state.regions).toHaveLength(regions.length);
    });
  });

  describe('selectRegion', () => {
    it('changes selectedRegionName', () => {
      const initialState = {
        selectedRegionName: '',
      };

      const state = reducer(initialState, selectRegion('서울'));
      expect(state.selectedRegionName).toBe('서울');
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));
      expect(state.categories).toHaveLength(categories.length);
    });
  });

  describe('selectCategory', () => {
    it('changes selectedCategoryId', () => {
      const initialState = {
        selectedCategoryId: 0,
      };

      const state = reducer(initialState, selectCategory(1));
      expect(state.selectedCategoryId).toBe(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));
      expect(state.restaurants).toHaveLength(restaurants.length);
    });
  });
});
