import reducer from './reducer';

import { setRegions } from './actions';

import regions from '../__fixtures__/regions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));
      expect(state.regions).toHaveLength(3);
    });
  });
});
