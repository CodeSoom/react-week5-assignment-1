import reducer from './reducer';

import {
  setRegions,
} from './actions';

describe('reducer', () => {
  describe('default state', () => {
    it('returns initialState', () => {
      const state = reducer();

      const { regions } = state;

      expect(regions).toHaveLength(0);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const state = reducer({
        rigions: [],
      }, setRegions({
        regions: [
          {
            id: 1,
            name: '서울',
          },
        ],
      }));

      expect(state.regions).not.toHaveLength(0);
    });
  });
});
