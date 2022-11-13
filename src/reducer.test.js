import reducer from './reducer';

import {
  setCategories,
  setRegions,
  selectedRegion,
  selectedCategory,
  selectedRestaurant,
} from './actions';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRegions', () => {
    it('지역 목록을 변경한다.', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(3);
    });
  });

  describe('setCategories', () => {
    it('카테고리 목록을 변경한다.', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(3);
    });
  });

  describe('selectedRegion', () => {
    it('selectedRegionName을 선택된 지역명으로 변경한다.', () => {
      const initialState = {
        selectedRegionName: '',
      };

      const state = reducer(initialState, selectedRegion('서울'));

      expect(state.selectedRegionName).toEqual('서울');
    });
  });

  describe('selectedCategory', () => {
    it('selectedCategoryId를 선택된 카테고리 id로 변경한다.', () => {
      const initialState = {
        selectedCategoryId: '',
      };

      const state = reducer(initialState, selectedCategory(3));

      expect(state.selectedCategoryId).toEqual(3);
    });
  });

  describe('selectedRestaurant', () => {
    it('레스토랑의 정보를 변경한다.', () => {
      const initialState = {
        selectedRestaurant: [],
      };

      const state = reducer(initialState, selectedRestaurant(restaurants));

      expect(state.selectedRestaurant).toHaveLength(2);
    });
  });

  describe('정의된 action type이 없을 경우', () => {
    it('아무 일도 일어나지 않는다.', () => {
      const initialState = {
        regions: [],
        categories: [],
        selectedRestaurant: [],
        selectedRegionName: '',
        selectedCategoryId: '',
      };

      const action = {
        type: 'none action type',
      };

      const state = reducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('action이 없을 경우', () => {
    it('아무 일도 일어나지 않는다.', () => {
      const state = reducer();

      expect(state.regions).toBe([]);
    });
  });
});
