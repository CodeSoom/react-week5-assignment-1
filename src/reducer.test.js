import reducer from './reducer';

import {
  setRegions,
  selectRegion,
  selectCategory,
  setCategoryList,
  setRestaurants,
} from './actions';

import {
  regions,
  categoryList,
  restaurants,
} from '../__fixture__/restaurants';

describe('reducer', () => {
  const initialState = {
    regions: [],
    categoryList: [],
    selectedRegion: {},
    selectedCategory: {},
    restaurants: [],
  };

  context('state 값이 전달되지 않으면', () => {
    it('initialState가 state 값으로 사용된다.', () => {
      const state = reducer(undefined, setRegions([]));

      expect(state).toEqual(initialState);
    });
  });

  context('존재하지 않는 action을 전달하면', () => {
    it('기존 state가 그대로 반환된다.', () => {
      const state = reducer(initialState, { type: 'noExistAction' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('레스토랑 지역 정보가 등록된다.', () => {
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(7);
    });
  });

  describe('selectRegion', () => {
    it('레스토랑 지역 목록의 첫번째를 선택하면 해당 지역 값이 state에 반영된다.', () => {
      const state = reducer({ ...initialState, regions }, selectRegion(regions[0].id));

      expect(state.selectedRegion).toEqual(state.regions[0]);
    });
  });

  describe('selectCategory', () => {
    it('레스토랑 카테고리 목록의 첫번째를 선택하면 해당 카테고리 값이 state에 반영된다.', () => {
      const state = reducer({ ...initialState, categoryList },
        selectCategory(categoryList[0].id));

      expect(state.selectedCategory).toEqual(state.categoryList[0]);
    });
  });

  describe('setCategoryList', () => {
    it('레스토랑 지역 정보가 등록된다.', () => {
      const state = reducer(initialState, setCategoryList(categoryList));

      expect(state.categoryList).toHaveLength(5);
    });
  });

  describe('setRestaurants', () => {
    it('레스토랑 정보가 등록된다.', () => {
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(2);
    });
  });
});
