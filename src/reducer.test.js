import reducer from './reducer';

import {
  setCategories,
} from './actions';

import categories from '../fixtures/categories';

describe('reducer', () => {
  describe('setCategories', () => {
    it('changes categories', () => {
      const initailState = {
        categories: [],
      };

      const state = reducer(initailState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });
});
