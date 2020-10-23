import reducer from './reducer';

import {
  setRegions, selectRegion, setCategories, selectCategory,
} from './actions';

import regions from '../__fixtures__/regions';
import categories from '../__fixtures__/categories';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));
      expect(state.regions).toHaveLength(3);
    });
  });

  describe('selectRegion', () => {
    it('changes selectedRegionName', () => {
      const initialState = {
        selectedRegionName: '',
      };

      const state = reducer(initialState, selectRegion('서울'));
      expect(state.selectedRegionName).toBe('서울');
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));
      expect(state.categories).toHaveLength(3);
    });
  });

  describe('selectCategory', () => {
    it('changes selectedCategoryId', () => {
      const initialState = {
        selectedCategoryId: 0,
      };

      const state = reducer(initialState, selectCategory(1));
      expect(state.selectedCategoryId).toBe(1);
    });
  });
});
