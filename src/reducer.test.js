import reducer from './reducer';

import {
  checkRegion,
} from './actions';

import regions from '../fixtures/regions';

describe('reducer', () => {
  describe('checkRegion', () => {
    it('change checked Region', () => {
      const state = reducer({
        checkedRegion: 2,
      }, checkRegion(1));

      expect(state.checkedRegion).toBe(1);
    });
  });

  describe('setRegions', () => {
    const state = reducer(undefined, setRegions(regions));
    expect(state.regions).toBe(regions);
  });
});
