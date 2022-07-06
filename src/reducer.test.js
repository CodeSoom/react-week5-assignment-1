import reducer, { initialState } from './reducer';

import { getRegions } from './actions';

describe('reducer', () => {
  describe('getRegions', () => {
    it('regions의 리스트를 반환한다.', () => {
      const prevState = { ...initialState };

      const state = reducer(prevState, getRegions());

      expect(state.regions).not.toHaveLength(0);
    });
  });
});
