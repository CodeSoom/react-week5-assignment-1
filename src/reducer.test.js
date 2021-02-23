import reducer from './reducer';

describe('reducer', () => {
  describe('default action', () => {
    it('returns initial state', () => {
      const state = reducer();

      expect(state.regions).toHaveLength(0);
    });
  });
});
