import reducer, { initialState } from './reducer';
import {
  setRegions, setCategories, setRestaurants, setRegion, setCategory,
} from './actions';

import regions from '../fixtures/regions';
import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const state = reducer(initialState, setRegions({ regions }));

      expect(state.regions).toHaveLength(11);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer(initialState, setCategories({
        categories: [
          {
            id: 1,
            name: '한식',
          },
        ],
      }));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const state = reducer(initialState, setRestaurants({
        restaurants,
      }));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('setRegion', () => {
    it('changes region', () => {
      const state = reducer(initialState, setRegion({
        region: '서울',
      }));

      expect(state.region).toBe('서울');
    });
  });

  describe('setCategory', () => {
    it('changes category', () => {
      const state = reducer(initialState, setCategory({
        category: '한식',
      }));

      expect(state.category).toBe('한식');
    });
  });
});
