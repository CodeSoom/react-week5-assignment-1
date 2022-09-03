import reducer from './reducer';

import {
  setRegion,
} from './actions';

import regions from '../fixtures/regions';

describe('reducer', () => {
  describe('setRegion', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegion(regions));

      expect(state.regions).not.toHaveLength(2);
    });
  });
});
