import reducer from './region';

import { regions } from '../../fixtures';

import {
  setRegions,
} from '../actions';

describe('region reducer', () => {
  context('setRegions', () => {
    it('chage regions array', () => {
      const initialState = {
        regions: [],
        selectedIdx: -1,
      };

      const state = {
        regionStore: reducer(initialState, setRegions(regions)),
      };

      expect(state.regionStore.regions).not.toHaveLength(0);
    });
  });
});
