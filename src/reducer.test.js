import { categories, regions, restaurants } from '../__fixture__/restaurantsInfo';
import {
  selectCategory, selectRegion, setCategories, setRegions, setRestaurants,
} from './action';

import reducer from './reducer';

describe('reducer', () => {
  describe('setRegions', () => {
    it('지역목록이 바뀜', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('setCategories', () => {
    it('카테고리 목록이 바뀜', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });

  describe('setRestaurants', () => {
    it('레스토랑 목록이 바뀜', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('selectRegion', () => {
    it('지역이 선택됨', () => {
      const initialState = {
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('분류가 선택됨', () => {
      const initialState = {
        categories: [
          { id: 1, name: '한식' },
        ],
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });
});
