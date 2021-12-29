import reducer from './reducer';
import { setRegions } from './actions';

import regions from '../fixtures/regions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('regions를 저장', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions({ regions }));

      expect(state.regions).not.toHaveLength(0);
    });
  });
});
