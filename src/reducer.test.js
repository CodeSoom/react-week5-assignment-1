import reducer, { initialState } from './reducer';

describe('reducer', () => {
  context('parameters that are not defined', () => {
    it('returns the initial state', () => {
      const state = reducer();
      expect(state).toEqual(initialState);
    });
  });
});
