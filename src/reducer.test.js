import reducer from './reducer';

import {
  setRegions,
  setCategories,
  selectedRegion,
  selectedCategory,
} from './actions';

describe('reducer', () => {
  const initialState = {
    regions: [],
    categories: [],
    selectedRegion: [],
    selectedCategory: [],
  };

  describe('setRegions', () => {
    it('changes regions', () => {
      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('selectedRegion', () => {
    it('changes selectedRegion', () => {
      const region = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, selectedRegion(region));

      expect(state.selectedRegion).toHaveLength(1);
    });
  });

  describe('selectedCategory', () => {
    it('changes selectedCategory', () => {
      const category = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, selectedCategory(category));

      expect(state.selectedCategory).toHaveLength(1);
    });
  });
});
