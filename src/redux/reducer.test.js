import reducer, { setAreas } from './reducer';

import areas from '../../fixtures/areas';

describe('reducer', () => {
  describe('setAreas', () => {
    it('changes areas array', () => {
      const initialState = {
        areas: [],
        categories: [],
      };

      const state = reducer(initialState, setAreas(areas));

      expect(state.areas).not.toHaveLength(0);
    });
  });
});
