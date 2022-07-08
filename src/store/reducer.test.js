import categories from '../fixtures/categories';
import regions from '../fixtures/regions';
import restaurants from '../fixtures/restaurants';

import { setCategories, setRegions, setRestaurants } from './actions';

import reducer, { initailState } from './reducer';

describe('setCategories', () => {
  context('state가 없을 때', () => {
    it('initialState를 반환합니다.', () => {
      const state = reducer(
        undefined,
        {},
      );
      expect(state).toEqual(initailState);
    });
  });

  describe('setCategories', () => {
    it('카테고리리스트가 변경됩니다.', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(3);
    });
  });

  describe('setRegions', () => {
    it('지역리스트가 변경됩니다.', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(3);
    });
  });

  describe('setRestaurants', () => {
    it('레스토랑 목록이 변경됩니다.', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(2);
    });
  });
});
