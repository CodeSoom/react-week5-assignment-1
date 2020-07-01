import { regions } from '../__fixture__/data';

import reducer from './reducer';

import { setInitRegions } from './action';

describe('reducer', () => {
  context('setInitRegions', () => {
    it('set a regions', () => {
      const prevState = {
        regions: [],
      };

      const newState = reducer(prevState, setInitRegions(regions));

      expect(newState.regions).not.toHaveLength(0);
    });
  });
});
