import reducer from './reducer';

import { setRegions, setCategories, setRestaurants } from './actions';

import { regions, categories, restaurants } from '../fixtures/data';

describe('reducer', () => {
  const initialState = {
    regions: [],
    categories: [],
    restaurants: [],
  };

  describe('setRegions', () => {
    it('지역을 변경해준다', () => {
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(5);
    });
  });

  describe('setCategories', () => {
    it('카테고리를 변경해준다', () => {
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(5);
    });
  });

  describe('setRestaurants', () => {
    it('레스토랑을 변경해준다', () => {
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(2);
    });
  });
});
