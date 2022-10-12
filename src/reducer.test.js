import categories from '../fixtures/categories';
import regions from '../fixtures/region';

import {
  setRegions,
  setCategories,
  setSelectRegionId,
  setSelectCategoryId,
} from './actions';

import reducer from './reducer';

describe('Reducer', () => {
  const initailState = {
    regions: [],
    categories: [],
    restaurants: [],
  };

  describe('Set regions', () => {
    it('Set state regions', () => {
      const state = reducer(initailState, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('Set categories', () => {
    it('Set state categories', () => {
      const state = reducer(initailState, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });

  describe('Set SelectRegionId', () => {
    it('Set state SelectRegionId', () => {
      const state = reducer(initailState, setSelectRegionId(1));

      expect(state.selectRegionId).not.toBeNull();
    });
  });

  describe('Set SelectRegionId', () => {
    it('Set state SelectRegionId', () => {
      const state = reducer(initailState, setSelectCategoryId(1));

      expect(state.selectCagegoryId).not.toBeNull();
    });
  });
});
