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
        region: reducer(initialState, setRegions(regions)),
      };

      expect(state.region.regions).not.toHaveLength(0);
    });
  });
});
