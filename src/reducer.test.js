import reducer from './reducer';

import {
  setRegions,
  setCategories,
  selectedRegion,
  selectedCategory,
} from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
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
    it('changes categories', () => {
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

  describe('selectedRegion', () => {
    it('changes selectedRegion', () => {
      const initialState = {
        selectedRegion: [],
      };

      const region = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, selectedRegion(region));

      expect(state.selectedRegion).toHaveLength(1);
    });
  });

  describe('selectedCategory', () => {
    it('changes selectedCategory', () => {
      const initialState = {
        selectedCategory: [],
      };

      const category = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, selectedCategory(category));

      expect(state.selectedCategory).toHaveLength(1);
    });
  });
});
