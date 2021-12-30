import reducer from './reducer';

import {
  setLocation,
  setCategory,
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

  describe('setCategory', () => {
    it('changes cagetory', () => {
      const initialState = {
        category: '',
      };

      const state = reducer(initialState, setCategory('한식'));

      expect(state.category).toBe('한식');
    });
  });
});
