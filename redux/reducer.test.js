import reducer from './reducer';

import {
  setRegions,
  setCategories,
} from './action';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';

describe('reducer', () => {
  describe('setRegions', () => {
    it('set regions array', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(8);
    });
  });
  describe('setCategories', () => {
    it('set categories array', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(6);
    });
  });
});
