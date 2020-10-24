import reducer from './reducer';

import {
  setCategories,
} from './actions';

import categories from '../fixtures/categories';

describe('reducer', () => {
  context('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });
});
