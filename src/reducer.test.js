import reducer from './reducer';

import { setRegions } from './actions';

describe('reducer', () => {
  context('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        categories: [],
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });
});
