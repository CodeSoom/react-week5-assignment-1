import reducer from './reducer';

import {
  updateRegion,
} from './actions';

describe('reducer', () => {
  describe('updateRegion', () => {
    it('update region value', () => {
      const initialState = {
        region: '',
      };

      const state = reducer(initialState, updateRegion('서울'));

      expect(state.region).toEqual('서울');
    });
  });
});
