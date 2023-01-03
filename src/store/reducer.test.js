import { setRegions } from './actions';
import reducer from './reducer';
import regions from '../fixtures/regions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('지역 리스트를 바꾼다.', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(2);
    });
  });
});
