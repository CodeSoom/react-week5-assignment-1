import reducer, { initialState } from './reducer';

import {
  setRegions,
  selectRegion,
} from './actions';

import REGIONS from '../fixtures/regions';

describe('reducer', () => {
  context('without state', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, {});

      expect(state).toEqual(initialState);
    });
  });

  context('with state', () => {
    describe('undefined action', () => {
      it('returns initialState', () => {
        const state = reducer(initialState, undefined);

        expect(state).toBe(initialState);
      });
    });

    describe('setRegions', () => {
      it('update regions', () => {
        const state = reducer(initialState, setRegions(REGIONS));

        expect(state.regions).toEqual(REGIONS);
      });
    });

    describe('selectRegion', () => {
      it('update region id', () => {
        const state = reducer(initialState, selectRegion(REGIONS[0].id));

        expect(state.regionId).toBe(REGIONS[0].id);
      });
    });
  });
});
