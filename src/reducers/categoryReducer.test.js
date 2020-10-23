import categoryReducer from './categoryReducer';

import {
  setCategories,
  updateCategoriesLoading,
  selectCategory,
} from '../actions';

import categories from '../../fixtures/categories';

describe('categoryReducer', () => {
  describe('setCategories', () => {
    it('changes categories', () => {
      const state = categoryReducer({
        categories: [],
      }, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });

  describe('updateCategoriesLoading', () => {
    it('changes categories loading state', () => {
      const state = categoryReducer({
        loading: false,
      }, updateCategoriesLoading(true));

      expect(state.loading).toBe(true);
    });
  });

  describe('selectCategory', () => {
    it('changes selected category id', () => {
      const state = categoryReducer({
        selectedId: null,
      }, selectCategory(4));

      expect(state.selectedId).toBe(4);
    });
  });

  it('returns initial state when state is undefined', () => {
    const initialState = {
      categories: [],
      loading: false,
      selectedId: null,
    };

    expect(categoryReducer()).toEqual(initialState);
  });
});
