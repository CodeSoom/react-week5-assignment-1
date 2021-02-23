import reducer from './reducer';

import {
  setRegions,
} from './actions';

import { regions } from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRegions', () => {
    it('regions의 데이터를 받아서 상태를 업데이트한다.', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });
});
