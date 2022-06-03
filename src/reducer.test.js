import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  changeRegionName,
  changeCategoryId,
} from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('sets regions with new regions', () => {
      const regions = [{ id: 1, name: '수원' }];

      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('sets categories with new categories', () => {
      const categories = [{ id: 1, name: '패스트푸드' }];

      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('sets restaurants with new restaurants', () => {
      const restaurants = [
        { id: 1, name: '버거킹' },
        { id: 2, name: '입주집' },
      ];

      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(2);
    });
  });

  describe('changeRegionName', () => {
    it('changes selectedRegionName', () => {
      const newSelectedRegionName = '수원';

      const initialState = {
        selectedRegionName: '',
      };

      const state = reducer(
        initialState,
        changeRegionName(newSelectedRegionName),
      );

      expect(state.selectedRegionName).toBe('수원');
    });
  });

  describe('changeCategoryId', () => {
    it('changes selectedCategoryId', () => {
      const newSelectedCategoryId = 1;

      const initialState = {
        selectedCategoryId: '',
      };

      const state = reducer(
        initialState,
        changeCategoryId(newSelectedCategoryId),
      );

      expect(state.selectedCategoryId).toBe(1);
    });
  });
});

describe('존재하지 않는 액션 타입', () => {
  it("state doesn't change", () => {
    const state = reducer(undefined, {
      type: 'notExistingAction',
      payload: {
        selectedRegionName: '수원',
        changeCategoryId: 1,
      },
    });

    expect(state.selectedRegionName).toBe('');
    expect(state.selectedCategoryId).toBe('');
  });
});
