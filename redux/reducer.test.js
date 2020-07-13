import reducer from './reducer';

import {
  setRegions,
  setCategories,
  changeRegionName,
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
  describe('changeRegionName', () => {
    it('change Region 서울', () => {
      const initialState = {
        regionName: '',
      };

      const state = reducer(initialState, changeRegionName('서울'));

      expect(state.regionName).toBe('서울');
    });
    it('change Region 부산', () => {
      const initialState = {
        regionName: '',
      };

      const state = reducer(initialState, changeRegionName('부산'));

      expect(state.regionName).toBe('부산');
    });
  });
});
