import reducer, { initialState } from './reducer';

import { getRegions, setRegion } from './actions';

describe('reducer', () => {
  describe('getRegions', () => {
    it('regions의 리스트를 반환한다.', () => {
      const prevState = { ...initialState };

      const state = reducer(prevState, getRegions());

      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('setRegion', () => {
    it('region을 set 한다.', () => {
      const prevState = { ...initialState };
      const region = { id: 0, name: '서울' };

      const state = reducer(prevState, setRegion(region));

      expect(state.region).not.toBeNull();
      expect(state.region).toBe(region);
    });
  });
});
