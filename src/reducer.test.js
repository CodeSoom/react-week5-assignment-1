import {
  selectCategory,
  selectRegion,
  setCategories,
  setRegions,
  setRestaurants,
} from './actions';

import reducer from './reducer';

describe('reducer', () => {
  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categoryId: 0,
      };

      const state = reducer(initialState, selectCategory({ id: 1 }));

      expect(state.categoryId).toBe(1);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        selectedRegion: {
          regionName: '',
          regionId: 0,
        },
      };

      const state = reducer(initialState, selectRegion({ name: '서울', id: 1 }));

      expect(state.selectedRegion.regionName).toBe('서울');
      expect(state.selectedRegion.regionId).toBe(1);
    });
  });

  describe('setCategories', () => {
    it('change categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRegions', () => {
    it('change regions', () => {
      const initialState = {
        regions: [],
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('change restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const restaurants = [
        { id: 1, name: '식당' },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  context('Unhandled action type', () => {
    it('returns initial state', () => {
      const state = reducer(undefined, { type: 'Unhandled action type' });

      expect(state).toBe(state);
    });
  });
});
