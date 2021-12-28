import reducer from './reducer';

import {
  setLocation,
} from './action';

describe('reducer', () => {
  describe('setLocation', () => {
    it('changes location', () => {
      const initialState = {
        location: '',
      };

      const state = reducer(initialState, setLocation('서울'));

      expect(state.location).toBe('서울');
    });
  });
});
