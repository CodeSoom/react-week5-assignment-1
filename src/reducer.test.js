import reducer from './reducer';

import {
  setRegion,
} from './actions';

describe('reducer', () => {
  describe('setRegion', () => {
    it('set region', () => {
      const initialState = {
        currentRegion: '',
      };

      const state = reducer(initialState, setRegion('서울'));

      expect(state.currentRegion).toBe('서울');
    });
  });
});
