import { regions } from '../__fixture__/data';

import reducer from './reducer';

describe('reducer', () => {
  context('setInitRegions', () => {
    it('set a regions', () => {
      const prevState = {
        regions: [],
      };

      const action = {
        type: 'setInitRegions',
        payload: {
          regions,
        },
      };

      const newState = reducer(prevState, action);

      expect(newState.regions).not.toHaveLength(0);
    });
  });
});
