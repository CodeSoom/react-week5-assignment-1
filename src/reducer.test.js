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
    it('changes select category', () => {
      const initialState = {
        categoryId: 0,
      };

      const state = reducer(initialState, selectCategory({ id: 1 }));

      expect(state.categoryId).toBe(1);
    });
  });

  describe('selectRegion', () => {
    it('changes select region', () => {
      const initialState = {
        regionName: '',
      };

      const state = reducer(initialState, selectRegion({ name: '서울' }));

      expect(state.regionName).toBe('서울');
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
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
    it('changes regions', () => {
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
    it('load restaurants', () => {
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
      const state = reducer(undefined, { type: 'Unhandled action tpye' });

      expect(state).toBe(state);
    });
  });
});
