import reducer from './category';

import { categories } from '../../fixtures';

import {
  setCategories,
  updateSelectedCategoryId,
} from '../actions';

describe('category reducer', () => {
  context('setCategories', () => {
    it('chage categories array', () => {
      const initialState = {
        categories: [],
        selectedCategoryId: 0,
      };

      const state = {
        category: reducer(initialState, setCategories(categories)),
      };

      expect(state.category.categories).not.toHaveLength(0);
    });
  });

  context('updateSelectedCategoryId', () => {
    it('update selected CategoryId ', () => {
      const initialState = {
        categories: [],
        selectedCategoryId: 0,
      };

      const state = {
        region: reducer(initialState, updateSelectedCategoryId(1)),
      };

      expect(state.region.selectedCategoryId).toBe(1);
    });
  });
});
