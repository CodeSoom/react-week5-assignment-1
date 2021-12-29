import reducer, { initialState } from './reducer';

import {
  setCategories,
  setRegions,
  setRestaurants,
  setSelectedRegion,
  setSelectedCategory,
} from './actions';

import { categories } from '../__fixtures__/categories';
import { regions } from '../__fixtures__/regions';
import { restaurants } from '../__fixtures__/restaurants';

describe('redcuer', () => {
  const previousState = {
    categories: [],
    regions: [],
    restaurants: [],
    selectedRegion: '',
    selectedCategory: '',
  };

  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer(previousState, setCategories(categories));

      expect(state.categories).toEqual(categories);
    });
  });

  describe('set selectedCategory', () => {
    it('changes selectedCategory', () => {
      const state = reducer(previousState, setSelectedCategory('한식'));

      expect(state.selectedCategory).toBe('한식');
    });
  });

  describe('set Regions', () => {
    it('changes regions', () => {
      const state = reducer(previousState, setRegions(regions));

      expect(state.regions).toEqual(regions);
    });
  });

  describe('set selectedRegion', () => {
    it('changes selectedRegion', () => {
      const state = reducer(previousState, setSelectedRegion('서울'));

      expect(state.selectedRegion).toBe('서울');
    });
  });

  describe('set restaurants', () => {
    it('changes restaurants', () => {
      const state = reducer(previousState, setRestaurants(restaurants));

      expect(state.restaurants).toBe(restaurants);
    });
  });

  describe('reducer', () => {
    it('doens\'t given state, set initialState', () => {
      const state = reducer(undefined, {});

      expect(state).toEqual(initialState);
    });

    it('reqeust not defined action type, return previous state', () => {
      const state = reducer(previousState, { type: 'invalid type' });

      expect(state).toEqual(previousState);
    });
  });
});
