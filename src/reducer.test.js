import reducer from './reducer';

import {
  checkRegion,
} from './actions';

describe('reducer', () => {
  describe('checkRegion', () => {
    it('change checked Region', () => {
      const state = reducer({
        checkedRegion: 2,
      }, checkRegion(1));

      expect(state.checkedRegion).toBe(1);
    });
  });
});
