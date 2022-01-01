import reducer from './reducer';

import { setRegions } from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('지역 내용 바꾸기', () => {
      const initialState = {
        regions: [],
      };
      const regions = [
        { id: 1, name: '서울' },
      ];
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });
});
