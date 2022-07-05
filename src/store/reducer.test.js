import reducer, { initialState } from './reducer';

describe('reducer', () => {
  context('without state', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, {});

      expect(state).toEqual(initialState);
    });
  });
});
