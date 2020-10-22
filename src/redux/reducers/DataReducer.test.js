import DataReducer from './DataReducer';

import {
  setRegions,
  setCategories,
} from '../actions';

import regions from '../../../fixtures/regions';
import categories from '../../../fixtures/categories';

describe('DataReducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const state = DataReducer({
        regions: [],
      }, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const state = DataReducer({
        categories: [],
      }, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });

  it('returns initial state when state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
    };

    expect(DataReducer()).toEqual(initialState);
  });
});
