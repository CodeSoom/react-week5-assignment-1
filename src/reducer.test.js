import reducer from './reducer';

import {
  setRegions,
  setCategories,
  selecteRegion,
  selecteCategory,
} from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('gets regions object and changes regions', () => {
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

  describe('setCategories', () => {
    it('gets categories object and changes categories', () => {
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

  describe('selecteRegion', () => {
    it('gets selecteRegion object', () => {
      const selectedRegion = { id: 1, name: '서울' };

      const initialState = {
        selectedRegion: {},
      };

      const state = reducer(initialState, selecteRegion(selectedRegion));

      expect(state.selectedRegion.id).toBe(1);
      expect(state.selectedRegion.name).toBe('서울');
    });
  });

  describe('selecteCategory', () => {
    it('gets selecteCategory object', () => {
      const selectedCategory = { id: 1, name: '한식' };

      const initialState = {
        selectedCategory: {},
      };

      const state = reducer(initialState, selecteCategory(selectedCategory));

      expect(state.selectedCategory.id).toBe(1);
      expect(state.selectedCategory.name).toBe('한식');
    });
  });

  describe('Default action', () => {
    it('returns state', () => {
      const state = reducer();

      expect(state.regions).toHaveLength(0);
    });
  });
});
