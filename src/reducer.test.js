import reducer from './reducer';

import {
  setRegions,
  setCategories,
  selectRegion,
  selectCategory,
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
    selectedRegion: '',
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

  describe('selectRegion', () => {
    const initialRegion = {
      regions: [
        { id: 1, name: '서울' },
      ],
      selectedRegion: null,
    };

    it('선택한 지역으로 변경된다', () => {
      const state = reducer(initialRegion, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    const initialCategory = {
      categories: [
        { id: 1, name: '한식' },
      ],
      selectedCategory: null,
    };

    it('선택한 카테고리로 변경된다', () => {
      const state = reducer(initialCategory, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });

  describe('setRestaurants', () => {
    it('레스토랑 목록이 변경된다', () => {
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(2);
    });
  });
});
