import reducer from './reducer';

import {
  setRegions,
  setSelectedRegion,
} from './actions';

import regions from '../fixtures/regions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('set new regions state', () => {
      const previousState = {
        regions: [],
      };

      const state = reducer(previousState, setRegions({ regions }));

      expect(state.regions).toHaveLength(2);
    });
  });

  describe('setSelectedRegion', () => {
    it('set selected region for filtering restaurnat', () => {
      const userSelectId = 1;

      const previousState = {
        selectedRegion: null,
      };

      const state = reducer(previousState, setSelectedRegion(userSelectId));

      expect(state.selectedRegion).toBe(userSelectId);
    });
  });

  describe('setSelectedCategory', () => {
    it('set selected category for filtering restaurnat', () => {
      const userSelectId = 1;

      const previousState = {
        selectedCategoryId: null,
      };

      const state = reducer(previousState, setSelectedRegion(userSelectId));

      expect(state.selectedCategoryId).toBe(userSelectId);
    });
  });
});
