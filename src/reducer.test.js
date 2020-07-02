import reducer from './reducer';

import { setCategories, selectCategory } from './actions';

import { categories } from '../fixture/test-data';

describe('reducer', () => {
  const previousState = {
    categories: [],
  };

  context('when reducer is executed first time', () => {
    it('returns initial state', () => {
      const state = reducer(undefined, 'testAction');

      expect(state.categories).toHaveLength(0);
    });
  });

  context('when action type is setCategories', () => {
    it('gets new categories', () => {
      const state = reducer(previousState, setCategories(categories));

      expect(state.categories).toEqual(categories);
    });
  });

  context('when action type is selectCategory', () => {
    it('set selected category id', () => {
      const state = reducer(previousState, selectCategory(1));

      expect(state.categoryId).toBe(1);
    });
  });
});
