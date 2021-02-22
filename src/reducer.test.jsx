import reducer from './reducer';

import {
  setRegions,
} from './actions';

import regions from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRegions', () => {
    it('button들을 보여준다.', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state).not.toHaveLength(0);
    });
  });
});
