import reducer from './reducer';

describe('reducer', () => {
  describe('default state', () => {
    it('returns initialState', () => {
      const state = reducer();

      const { regions } = state;

      expect(regions).toHaveLength(0);
    });
  });
});
