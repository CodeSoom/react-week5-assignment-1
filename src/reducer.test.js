import reducer, { initialState } from './reducer';
import {
  setRegions, setCategories, setRestaurants, selectRegion, selectCategory,
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

  describe('selectRegion', () => {
    it('changes region', () => {
      const state = reducer({
        ...initialState,
        regions: [{
          id: 1,
          name: '서울',
        }],
      }, selectRegion({
        regionId: 1,
      }));

      expect(state.region).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('changes category', () => {
      const state = reducer({
        ...initialState,
        categories: [{
          id: 1,
          name: '한식',
        }],
      }, selectCategory({
        categoryId: 1,
      }));

      expect(state.category).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });

  describe('without any actions', () => {
    it('returns initial state', () => {
      const state = reducer(undefined, {
        type: undefined,
      });

      expect(state).toEqual(initialState);
    });
  });
});
