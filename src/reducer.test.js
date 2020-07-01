import reducer from './reducer';

import {
  setRegions,
} from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('should set regions array', () => {
      const regions = [
        { id: 101, name: '서울' },
      ];
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });
});
