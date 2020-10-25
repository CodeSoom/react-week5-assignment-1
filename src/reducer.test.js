import reducer from './reducer';

import {
  setCategories,
} from './actions';

import categories from '../fixtures/categories';

describe('reducer', () => {
  const initialState = {
    categories: [],
  };

  context('setCategories', () => {
    it('changes categories', () => {
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });

  context('undefined action', () => {
    it("doesn't work", () => {
      const state = reducer(initialState, {});

      expect(state.categories).toHaveLength(0);
    });
  });

  context('in initial state', () => {
    it('renders initial state', () => {
      const state = reducer(undefined, {});

      expect(state.categories).toHaveLength(0);
    });
  });
});
