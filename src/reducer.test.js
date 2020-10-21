import reducer from './reducer';

import {
  checkCategories,
  checkRegions,
  initializeCheckedCategories,
  initializeCheckedRegions,
  setCategories,
  setRegions,
  setRestaurants,
} from './actions';

describe('reducer', () => {
  describe('checkCategories', () => {
    it('changes categories isChecked property', () => {
      const categories = [
        { id: 1, name: '분식', isChecked: false },
        { id: 2, name: '중식', isChecked: false },
      ];
      const state = reducer({ categories },
        checkCategories({ id: 1, isChecked: false }));

      expect(state.categories[0].isChecked).toBe(true);
    });
  });

  describe('checkRegions', () => {
    it('changes Regions isChecked property', () => {
      const regions = [
        { id: 1, name: '서울', isChecked: false },
        { id: 2, name: '부산', isChecked: false },
      ];
      const state = reducer({ regions },
        checkRegions({ id: 1, isChecked: false }));

      expect(state.regions[0].isChecked).toBe(true);
    });
  });

  describe('initializeCheckedItem', () => {
    it('initialize previously checked categories', () => {
      const checkedCategories = [
        { id: 1, name: '분식', isChecked: true },
        { id: 2, name: '중식', isChecked: true },
      ];

      const state = reducer({ categories: checkedCategories },
        initializeCheckedCategories({ id: 1 }));

      const checkedItemsNumber = state.categories.filter(
        (category) => category.isChecked === true,
      ).length;

      expect(checkedItemsNumber).toBe(1);
    });

    it('initialize previously checked regions', () => {
      const checkedRegions = [
        { id: 1, name: '서울', isChecked: true },
        { id: 2, name: '대구', isChecked: true },
      ];

      const state = reducer({ regions: checkedRegions },
        initializeCheckedRegions({ id: 1 }));

      const checkedItemsNumber = state.regions.filter(
        (region) => region.isChecked === true,
      ).length;

      expect(checkedItemsNumber).toBe(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const categories = [
        { id: 1, name: '한식' },
      ];

      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const regions = [
        { id: 1, name: '서울' },
      ];

      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const restaurants = [
        { id: 1, name: '서울' },
      ];

      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });
});
