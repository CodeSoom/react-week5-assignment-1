import reducer from './reducer';

import {
  selectRegion,
  setRegions,
} from './actions';

import regions from '../fixtures/regions';

describe('reducer', () => {
  describe('checkRegion', () => {
    it('change checked Region', () => {
      const state = reducer({
        selectedRegion: 2,
      }, selectRegion(1));

      expect(state.selectedRegion).toBe(1);
    });
  });

  describe('setRegions', () => {
    it('set initial value of regions', () => {
      const state = reducer(undefined, setRegions(regions));
      expect(state.regions).toBe(regions);
    });
  });
});
