import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  selectCategory,
  selectRegion,
} from './actions';

import { regions, categories, restaurants } from '../fixtures/data';

describe('reducer', () => {
  const initialState = {
    regions: [],
    categories: [],
    restaurants: [],
    selectedRegion: '',
    selectedCategoryId: null,
  };

  describe('setRegions', () => {
    it('지역 목록을 변경해준다', () => {
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(5);
    });
  });

  describe('setCategories', () => {
    it('카테고리 목록을 변경해준다', () => {
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(5);
    });
  });

  describe('setRestaurants', () => {
    it('레스토랑 목록을 변경해준다', () => {
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(3);
    });
  });

  describe('selectCategory', () => {
    it('selectedCategoryId를 선택한 카테고리의 아이디를 반경해준다', () => {
      const state = reducer(
        { selectedCategoryId: null },
        selectCategory(categories[0]),
      );

      expect(state.selectedCategoryId).toEqual(categories[0]);
    });
  });

  describe('selectRegion', () => {
    it('selectedRegion을 선택한 지역으로 반경해준다', () => {
      const state = reducer({ selectedRegion: '' }, selectRegion(regions[0]));

      expect(state.selectedRegion).toEqual(regions[0]);
    });
  });

  describe('아무런 값이 없을 때', () => {
    it('아무런 동작을 하지 않는다', () => {
      const state = reducer();

      expect(state.regions).toStrictEqual([]);
      expect(state.categories).toStrictEqual([]);
      expect(state.restaurants).toHaveLength(0);
    });
  });
});
