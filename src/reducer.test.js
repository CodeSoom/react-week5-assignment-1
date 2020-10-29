import reducer from './reducer';

import {
  setRegions,
  setCategories,
} from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('set regions', () => {
      const initialState = {
        regions: [],
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('set categories', () => {

    });
  });
});
