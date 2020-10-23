import reducer from './reducer';

import regions from '../__fixtures__/regions';
import categories from '../__fixtures__/categories';

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
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(regions.length);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(categories.length);
    });
  });

  describe('selectedRegion', () => {
    it('changes selectedRegion', () => {
      const name = '서울';

      const state = reducer(initialState, selectedRegion(name));

      expect(state.selectedRegion).toBe(name);
    });
  });

  describe('selectedCategory', () => {
    it('changes selectedCategory', () => {
      const category = 1;

      const state = reducer(initialState, selectedCategory(category));

      expect(state.selectedCategory).toBe(category);
    });
  });
});
