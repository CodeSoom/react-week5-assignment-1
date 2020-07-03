import reducer from './reducer';

import {
  setRegions,
  setCategories,
} from './actions';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });
});
