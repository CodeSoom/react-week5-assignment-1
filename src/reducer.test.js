import reducer from './reducer';

import {
  setCategories, selectCategory, setRegions,
} from './actions';

import { regions, categories } from '../fixture/test-data';

describe('reducer', () => {
  const previousState = {
    regions: [],
    categories: [],
  };

  context('when reducer is executed first time', () => {
    it('returns initial state', () => {
      const state = reducer(undefined, 'INITIAL_EXECUTION');

      expect(state.regions).toHaveLength(0);
      expect(state.categories).toHaveLength(0);
    });
  });

  context('with wrong action', () => {
    it('returns previous state', () => {
      const state = reducer(previousState, 'WRONG_ACTION');

      expect(state).toEqual(previousState);
    });
  });

  context('when action type is setCategories', () => {
    it('gets new categories', () => {
      const state = reducer(previousState, setCategories(categories));

      expect(state.categories).toEqual(categories);
    });
  });

  context('when action type is selectCategory', () => {
    it('sets selected category id', () => {
      const state = reducer(previousState, selectCategory(1));

      expect(state.categoryId).toBe(1);
    });
  });

  context('when action type is setRegions', () => {
    it('gets new regions', () => {
      const state = reducer(previousState, setRegions(regions));

      expect(state.regions).toEqual(regions);
    });
  });
});
