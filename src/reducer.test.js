import reducer from './reducer';

import {
  setRegions,
  setCategories,
  selectRegion,
  selectCategory,
  setRestaurants,
} from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('렌더링할 때 초기값으로 화면을 셋팅한다.', () => {
      const initialState = {
        regions: [],
        categories: [],
        restaurants: [],
      };
      const regions = [
        { id: 1, name: '서울' },
        { id: 2, name: '대전' },
        { id: 3, name: '부산' },
      ];

      const state = reducer(initialState, setRegions(regions));
      expect(state.regions).toHaveLength(3);
    });
  });

  describe('setCategories', () => {
    it('렌더링할 때 초기값으로 화면을 셋팅한다.', () => {
      const initialState = {
        regions: [],
        categories: [],
        restaurants: [],
      };
      const categories = [
        { id: 11, name: '한식' },
        { id: 22, name: '분식' },
      ];

      const state = reducer(initialState, setCategories(categories));
      expect(state.categories).toHaveLength(2);
    });
  });

  describe('setRestaurants', () => {
    it('레스토랑 값이 있을 경우 화면에 표시한다', () => {
      const initialState = {
        restaurants: [],
      };
      const restaurants = [
        { id: 111, name: 'A레스토랑' },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));
      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('selectRegion', () => {
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

  describe('selectCategory', () => {
    const initialState = {
      categories: [
        { id: 11, name: '분식' },
      ],
      selectedCategory: null,
    };

    const state = reducer(initialState, selectCategory(11));

    expect(state.selectedCategory).toEqual({
      id: 11,
      name: '분식',
    });
  });
});
