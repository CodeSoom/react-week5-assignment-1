import reducer from './reducer';

describe('reducer', () => {
  describe('setRegion', () => {
    it('set region', () => {
      const initialState = {
        currentregion: '',
      };

      const state = reducer(initialState, setRegion('서울'));

      expect(state.currentregion).toBe('서울');
    });
  });
});
