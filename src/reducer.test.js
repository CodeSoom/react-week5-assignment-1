import categories from '../fixtures/categories';
import regions from '../fixtures/region';

import {
  setRegions,
  setCategories,
  setSelectRegion,
  setSelectCategory,
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

  describe('Set SelectRegion', () => {
    it('Set state SelectRegion', () => {
      const state = reducer(initailState, setSelectRegion(1));

      expect(state.selectRegion).not.toBeNull();
    });
  });

  describe('Set SelectRegion', () => {
    it('Set state SelectRegion', () => {
      const state = reducer(initailState, setSelectCategory(1));

      expect(state.selectCagegory).not.toBeNull();
    });
  });
});
