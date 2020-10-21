import reducer from './reducer';

import {
  updateRegion,
} from './actions';

describe('reducer', () => {
  describe('updateRegion', () => {
    it('update region value', () => {
      const initialState = {
        regionName: '',
      };

      const state = reducer(initialState, updateRegion('서울'));

      expect(state.regionName).toEqual('서울');
    });
  });
});
