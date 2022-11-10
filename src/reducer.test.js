import reducer from './reducer';

import regions from '../fixtures/regions';
import { setRegions } from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('지역에 대한 데이터를 받아온다.', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(3);
    });
  });
});
