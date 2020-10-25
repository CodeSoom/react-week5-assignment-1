import reducer from './reducer';

import { regions, categories, restaurants } from '../__fixtures__/fixtures';

import initialState from './initialState';

import {
  setRegions,
  setCategories,
  selectedRegion,
  selectedCategory,
  setRestaurants,
} from './actions';

describe('reducer', () => {
  describe('undefined action', () => {
    it('changes nothing', () => {
      const state = reducer();

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(regions.length);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(categories.length);
    });
  });

  describe('selectedRegion', () => {
    it('changes selectedRegion', () => {
      const name = '서울';

      const state = reducer(initialState, selectedRegion(name));

      expect(state.selectedRegion).toBe(name);
    });
  });

  describe('selectedCategory', () => {
    it('changes selectedCategory', () => {
      const category = 1;

      const state = reducer(initialState, selectedCategory(category));

      expect(state.selectedCategory).toBe(category);
    });
  });

  describe('setRestaurants', () => {
    it('changes setRestaurants', () => {
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toEqual(restaurants);
    });
  });
});
