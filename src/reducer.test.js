import reducer, { initialState } from './reducer';
import { setRegions, setCategories } from './actions';

import regions from '../fixtures/regions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const state = reducer(initialState, setRegions({ regions }));

      expect(state.regions).toHaveLength(11);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer(initialState, setCategories({
        categories: [
          {
            id: 1,
            name: '한식',
          },
        ],
      }));

      expect(state.categories).toHaveLength(1);
    });
  });
});
