import reducer from './reducer';

import {
  setCategories,
} from './actions';

describe('reducer', () => {
  describe('setCategories', () => {
    it('sets categories', () => {
      const categories = [
        { id: 1, name: '한식' },
      ];

      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });
});
