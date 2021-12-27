import reducer from './reducer';

import {
  setCategories,
} from './actions';

import { categories } from '../__fixture__/categories';

describe('redcuer', () => {
  describe('setCategories', () => {
    it('changes categories', () => {
      const previousState = {
        categories: [],
      };

      const state = reducer(previousState, setCategories(categories));

      expect(state.categories).toHaveLength(categories.length);
      expect(state.categories).toEqual(categories);
    });
  });
});
