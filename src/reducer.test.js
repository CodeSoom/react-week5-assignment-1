import reducer, { initialState } from './reducer';

import { getRegions } from './actions';

describe('reducer', () => {
  context('getRegions', () => {
    it('regions의 리스트를 가져온다.', () => {
      const prevState = { ...initialState };
      const state = reducer(prevState, getRegions());
      expect(state.regions).not.toHaveLength(0);
    });
  });
});
