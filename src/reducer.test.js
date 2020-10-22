import reducer from './reducer';

import { setRegions, setCategories, setSelectedCategory } from './actions';

import regions from '../__fixtures__/regions';
import categories from '../__fixtures__/categories';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));
      expect(state.regions).toHaveLength(3);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));
      expect(state.categories).toHaveLength(3);
    });
  });

  describe('setSelectedCategory', () => {
    it('changes selectedCategory', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setSelectedCategory(1));
      expect(state.selectedCategory).toBe(1);
    });
  });
});
