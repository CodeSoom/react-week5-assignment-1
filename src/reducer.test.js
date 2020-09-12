import { reducer, initialState } from './reducer';

import {
  setRegion,
  setCategory,
  setRegions,
  setCategories,
  setRestaurants,
} from './actions';

describe('reducer', () => {
  context('with inital state', () => {
    it("doesn't change anything", () => {
      const state = reducer();

      expect(state.newId).toBe(initialState.newId);
      expect(state.taskTitle).toBe(initialState.region);
      expect(state.tasks).toBe(initialState.category);
    });
  });

  describe('setRegion', () => {
    it('change region name', () => {
      const region = { id: 1, name: '서울' };
      const state = reducer(initialState, setRegion(region));

      expect(state.regionName).toBe(region.name);
    });
  });

  describe('setCategory', () => {
    it('change category id', () => {
      const category = { id: 1, name: '한식' };
      const state = reducer(initialState, setCategory(category));

      expect(state.categoryId).toBe(category.id);
    });
  });

  describe('setRegions', () => {
    it('set regions data', () => {
      const regions = [
        { id: 1, name: '서울' }, { id: 2, name: '대전' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toBe(regions);
    });
  });

  describe('setCategories', () => {
    it('set categories data', () => {
      const categories = [
        { id: 1, name: '한식' }, { id: 2, name: '중식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toBe(categories);
    });
  });

  describe('setRestaurants', () => {
    it('set restaurants data', () => {
      const restaurants = [
        { id: 1, name: '양천주가' },
        { id: 6, name: '한국식 초밥' },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toBe(restaurants);
    });
  });
});
