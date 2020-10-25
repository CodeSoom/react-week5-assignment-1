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
        category: reducer(initialState, updateSelectedCategoryId(1)),
      };

      expect(state.category.selectedCategoryId).toBe(1);
    });
  });

  context('undefined action', () => {
    it("doesn't work", () => {
      const state = {
        category: reducer(),
      };

      expect(state.category.categories).toHaveLength(0);
    });
  });
});
