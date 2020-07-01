import reducer from './reducer';

import { setCategories } from './actions';

import { categories } from '../fixture/test-data';

describe('reducer', () => {
  context('when reducer is executed first time', () => {
    it('returns initial state', () => {
      const state = reducer(undefined, 'testAction');

      expect(state.categories).toHaveLength(0);
    });
  });

  context('when action type is setCategories', () => {
    it('gets new categories', () => {
      const state = reducer(undefined, setCategories(categories));

      expect(state.categories).toEqual(categories);
    });
  });
});
