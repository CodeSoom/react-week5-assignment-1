import reducer from './reducer';

import {
  setRegions,
  setCategories,
  changeRegionName,
  changeCategoryId,
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
    const initialState = {
      regionName: '',
    };
    it('change Region 서울', () => {
      const state = reducer(initialState, changeRegionName('서울'));

      expect(state.regionName).toBe('서울');
    });
    it('change Region 부산', () => {
      const state = reducer(initialState, changeRegionName('부산'));

      expect(state.regionName).toBe('부산');
    });
  });

  describe('changeCategoryId', () => {
    const initialState = {
      categoryId: 0,
    };
    it('change Category 한식', () => {
      const state = reducer(initialState, changeCategoryId(1));

      expect(state.categoryId).toBe(1);
    });
    it('change Category 양식', () => {
      const state = reducer(initialState, changeCategoryId(4));

      expect(state.categoryId).toBe(4);
    });
  });
});
