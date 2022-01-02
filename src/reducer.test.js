import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  selectRegion,
  selectCategory,
} from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('지역을 바꾼다.', () => {
      const initialState = {
        regions: [],
      };
      const regions = [
        { id: 1, name: '서울' },
      ];
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('카테고리를 바꾼다.', () => {
      const initialState = {
        categories: [],
      };
      const categories = [
        { id: 1, name: '한식' },
      ];
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('식당목록의 내용을 바꾼다.', () => {
      const initialState = {
        restaurants: [],
      };
      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('selectRegion', () => {
    it('선택한 지역을 보여준다.', () => {
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
    it('선택한 카테고리를 보여준다.', () => {
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
