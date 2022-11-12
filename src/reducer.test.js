import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
} from './actions';

import {
  regions,
  categories,
  restaurants,
} from '../fixtures/data';

describe('reducer', () => {
  const initialState = {
    regions: [],
    categories: [],
    restaurants: [],
  };

  describe('setRegions', () => {
    it('지역 목록이 변경된다', () => {
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(3);
    });
  });

  describe('setCategories', () => {
    it('카테고리 목록이 변경된다', () => {
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(3);
    });
  });

  describe('setRestaurants', () => {
    it('레스토랑 목록이 변경된다', () => {
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(2);
    });
  });
});
