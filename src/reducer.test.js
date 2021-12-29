import reducer from './reducer';
import { setRegions } from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('regions를 저장', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions);

      expect(state.regions).not.toHaveLength(0);
    });
  });
});
