import reducer from './reducer';

import regions from '../__fixtures__/regions';

import { setRegions } from './actions';

describe('reducer', () => {
  const initialRegions = [];

  describe('undefined action', () => {
    it('changes nothing', () => {
      const state = reducer();

      expect(state.regions).toStrictEqual(initialRegions);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const state = reducer({
        regions: initialRegions,
      }, setRegions(regions));

      expect(state.regions).toHaveLength(regions.length);
    });
  });
});
