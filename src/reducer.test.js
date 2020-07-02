import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setSelectedRegion,
  setSelectedCategoryId,
  setRestaurants,
} from './actions';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRegions', () => {
    it('set new regions state', () => {
      const previousState = {
        regions: [],
      };

      const state = reducer(previousState, setRegions({ regions }));

      expect(state.regions).toHaveLength(2);
    });
  });

  describe('setSelectedRegion', () => {
    it('set selected region for filtering restaurnat', () => {
      const userSelectRegion = '서울';

      const previousState = {
        selectedRegion: null,
      };

      const state = reducer(previousState, setSelectedRegion(userSelectRegion));

      expect(state.selectedRegion).toBe(userSelectRegion);
    });
  });

  describe('setSelectedCategoryId', () => {
    it('set selected category id for filtering restaurnat', () => {
      const userSelectId = 1;

      const previousState = {
        selectedCategoryId: null,
      };

      const state = reducer(previousState, setSelectedCategoryId(userSelectId));

      expect(state.selectedCategoryId).toBe(userSelectId);
    });
  });

  describe('setCategories', () => {
    it('set new categories state', () => {
      const previousState = {
        categories: [],
      };

      const state = reducer(previousState, setCategories({ categories }));

      expect(state.categories).toHaveLength(2);
    });
  });

  describe('setRestaurants', () => {
    it('set new restaurants state', () => {
      const previousState = {
        restaurants: [],
      };

      const state = reducer(previousState, setRestaurants({ restaurants }));

      expect(state.restaurants).toHaveLength(2);
    });
  });
});
