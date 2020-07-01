import reducer from './reducer';

import {
  selectRegion,
  setRegions,
  selectCategory,
  setCategories,
  setRestaurants,
} from './actions';

import { regions } from '../fixtures/regions';
import { categories } from '../fixtures/categories';

describe('reducer', () => {
  const initialState = {};

  it('액션이 없으면 initialState를 반환한다.', () => {
    const expectState = {
      regions: [],
      selectedRegion: '',
      categories: [],
      selectedCategory: '',
      restaurants: [],
    };
    const state = reducer(undefined, {});

    expect(state).toEqual(expectState);
  });

  describe('SELECT_REGION', () => {
    it('선택된 지역이 변경된다.', () => {
      const state = reducer(initialState, selectRegion('서울'));

      expect(state.selectedRegion).toBe('서울');
    });
  });

  describe('SET_REGIONS', () => {
    it('지역리스트가 변경된다.', () => {
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(3);
    });
  });

  describe('SELECT_CATEGORY', () => {
    it('선택된 음식점이 변경된다.', () => {
      const state = reducer(
        {
          selectedCategory: '',
        },
        selectCategory(1),
      );

      expect(state.selectedCategory).toBe(1);
    });
  });

  describe('SET_CATEGORIES', () => {
    it('카테고리 리스트가 변경된다,', () => {
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(3);
    });
  });

  describe('SET_RESTAURANTS', () => {
    it('레스토랑 리스트가 변경된다.', () => {
      const state = reducer(
        initialState,
        setRestaurants([
          {
            id: 1,
            name: '홍콩반점',
          },
        ]),
      );

      expect(state.restaurants).toHaveLength(1);
    });
  });
});
