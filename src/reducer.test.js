import reducer from './reducer';

import {
  setRegions,
  selectRegion,
  setCategories,
  selectCategory,
} from './actions';

import { regions, selectedRegion } from '../fixtures/regions';
import { categories, selectedCategory } from '../fixtures/categories';

describe('reducer', () => {
  describe('Regions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });

    it('select Region', () => {
      const regionId = 1;
      const initialState = {
        regions,
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(regionId));

      expect(state.selectedRegion).toEqual(selectedRegion);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });

    it('select Category', () => {
      const categoryId = 1;
      const initialState = {
        categories,
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(categoryId));

      expect(state.selectedCategory).toEqual(selectedCategory);
    });
  });
});
