import reducer from './category';

import { categories } from '../../fixtures';

import {
  setCategories,
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
});
