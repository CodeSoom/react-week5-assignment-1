import reducer from './reducer';

import regions from '../__fixtures__/regions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const initialRegions = [];

      const state = reducer({
        regions: initialRegions,
      }, {
        type: 'setRegions',
        payload: { regions },
      });

      expect(state.regions).toHaveLength(regions.length);
    });
  });
});
