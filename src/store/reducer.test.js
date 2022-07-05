import reducer, { initialState } from './reducer';

import {
  setRegions,
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
    describe('setRegions', () => {
      it('update regions', () => {
        const state = reducer(initialState, setRegions(REGIONS));

        expect(state.regions).toEqual(REGIONS);
      });
    });
  });
});
