import reducer from './region';

import { regions } from '../../fixtures';

import {
  setRegions,
  updateSelectedRegionName,
} from '../actions';

describe('region reducer', () => {
  context('setRegions', () => {
    it('chage regions array', () => {
      const initialState = {
        regions: [],
        selectedRegionName: '',
      };

      const state = {
        region: reducer(initialState, setRegions(regions)),
      };

      expect(state.region.regions).not.toHaveLength(0);
    });
  });

  context('updateSelectedRegionName', () => {
    it('update selected RegionName ', () => {
      const initialState = {
        regions,
        selectedRegionName: '',
      };

      const state = {
        region: reducer(initialState, updateSelectedRegionName('서울')),
      };

      expect(state.region.selectedRegionName).toBe('서울');
    });
  });
});
