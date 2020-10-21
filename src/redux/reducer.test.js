import reducer from './reducer';

import {
  setRegions,
  setCategories,
  updateLoading,
} from './actions';

import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });
  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer({
        categories: [],
      }, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });

  describe('setLoading', () => {
    it('changes loading', () => {
      const state = reducer({
        loading: false,
      }, updateLoading(true));

      expect(state.loading).toBe(true);
    });
  });

  it('returns initial state when state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      loading: false,
    };

    expect(reducer()).toEqual(initialState);
  });
});
