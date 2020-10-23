import reducer from './reducer';

import {
  updateRegion,
  updateCategoryId,
  setRegions,
  setCategories,
} from './actions';

import regions from '../fixtures/regions';

import categories from '../fixtures/categories';

describe('reducer', () => {
  describe('updateRegion', () => {
    it('change region value', () => {
      const initialState = {
        region: '',
      };

      const state = reducer(initialState, updateRegion('서울'));

      expect(state.region).toEqual('서울');
    });
  });

  describe('updateCategoryId', () => {
    it('change categoryId value', () => {
      const initialState = {
        categoryId: '',
      };

      const state = reducer(initialState, updateCategoryId(1));

      expect(state.categoryId).toEqual(1);
    });
  });

  describe('setRegions', () => {
    it('update Regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(5);
    });
  });

  describe('setCategories', () => {
    it('update Categories', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(5);
    });
  });
});
